import type { APIRoute } from "astro";
import {
  S3Client,
  ListObjectsV2Command,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { isAuthorized } from "@tinacms/auth";

export const prerender = false;

const s3 = new S3Client({
  region: "auto",
  endpoint: import.meta.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: import.meta.env.R2_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.R2_SECRET_ACCESS_KEY,
  },
});

const BUCKET = import.meta.env.R2_BUCKET_NAME;
const PUBLIC_URL = import.meta.env.R2_PUBLIC_URL.replace(/\/$/, "");

// Valida que la petición provenga de un usuario logueado en TinaCloud
async function checkAuth(request: Request): Promise<boolean> {
  if (import.meta.env.DEV) return true; // Permite subir en local sin fricción

  const authHeader = request.headers.get("authorization");
  if (!authHeader) return false;

  try {
    const user = await isAuthorized({
      headers: { authorization: authHeader },
      query: { clientID: import.meta.env.TINA_PUBLIC_CLIENT_ID },
    } as any);
    return Boolean(user && user.verified);
  } catch (err) {
    console.error("Error verificando TinaCloud Auth:", err);
    return false;
  }
}

// 1. LISTAR IMÁGENES Y CARPETAS (GET)
export const GET: APIRoute = async ({ request, url }) => {
  if (!(await checkAuth(request))) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  const directory = url.searchParams.get("directory") || "";
  const limit = parseInt(url.searchParams.get("limit") || "50", 10);
  const offset = url.searchParams.get("offset") || undefined;
  const prefix = directory ? `${directory.replace(/^\/|\/$/g, "")}/` : "";

  const command = new ListObjectsV2Command({
    Bucket: BUCKET,
    Prefix: prefix,
    Delimiter: "/",
    MaxKeys: limit,
    ContinuationToken: offset,
  });

  const response = await s3.send(command);

  const directories = (response.CommonPrefixes || []).map((p) => {
    const dirPath = p.Prefix!.replace(/\/$/, "");
    return {
      id: p.Prefix!,
      type: "dir",
      filename: dirPath.split("/").pop()!,
      directory: directory,
    };
  });

  const files = (response.Contents || [])
    .filter((item) => item.Key !== prefix)
    .map((item) => {
      const filename = item.Key!.split("/").pop()!;
      const src = `${PUBLIC_URL}/${item.Key}`;
      return {
        id: item.Key!,
        type: "file",
        filename,
        directory,
        src,
        thumbnails: {
          "75x75": src,
          "450x450": src,
          "1000x1000": src,
        },
      };
    });

  return new Response(
    JSON.stringify({
      items: [...directories, ...files],
      nextOffset: response.NextContinuationToken,
    }),
    { headers: { "Content-Type": "application/json" } },
  );
};

// 2. SUBIR IMAGEN (POST)
export const POST: APIRoute = async ({ request }) => {
  if (!(await checkAuth(request))) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  const formData = await request.formData();
  const file = formData.get("file") as File;
  const directory = (formData.get("directory") as string) || "";

  if (!file) {
    return new Response(
      JSON.stringify({ error: "No se envió ningún archivo" }),
      { status: 400 },
    );
  }

  const cleanDir = directory.replace(/^\/|\/$/g, "");
  // Limpiamos espacios en el nombre del archivo
  const safeFilename = file.name.replace(/\s+/g, "-");
  const key = cleanDir ? `${cleanDir}/${safeFilename}` : safeFilename;

  const arrayBuffer = await file.arrayBuffer();

  await s3.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: new Uint8Array(arrayBuffer),
      ContentType: file.type || "application/octet-stream",
    }),
  );

  const src = `${PUBLIC_URL}/${key}`;

  return new Response(
    JSON.stringify({
      id: key,
      type: "file",
      filename: safeFilename,
      directory: cleanDir,
      src,
      thumbnails: {
        "75x75": src,
        "450x450": src,
        "1000x1000": src,
      },
    }),
    { headers: { "Content-Type": "application/json" } },
  );
};

// 3. ELIMINAR IMAGEN (DELETE)
export const DELETE: APIRoute = async ({ request, url }) => {
  if (!(await checkAuth(request))) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  const key = url.searchParams.get("key");
  if (!key) {
    return new Response(JSON.stringify({ error: "Falta el parámetro key" }), {
      status: 400,
    });
  }

  await s3.send(
    new DeleteObjectCommand({
      Bucket: BUCKET,
      Key: key,
    }),
  );

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
};
