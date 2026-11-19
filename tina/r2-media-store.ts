import type {
  Media,
  MediaList,
  MediaListOptions,
  MediaStore,
  MediaUploadOptions,
} from "tinacms";

// Reemplaza esto con la URL que te dio `npx wrangler deploy`
const WORKER_URL = "https://tina-r2-worker.senseikoder.workers.dev/";

export class R2MediaStore implements MediaStore {
  accept = "image/*,video/*,application/pdf";

  private getAuthHeaders(): HeadersInit {
    const rawToken = localStorage.getItem("tinacms-auth");
    if (rawToken) {
      try {
        const parsed = JSON.parse(rawToken);
        const token = parsed?.id_token || parsed?.access_token;
        if (token) {
          return { Authorization: `Bearer ${token}` };
        }
      } catch {
        // Ignorar
      }
    }
    return {};
  }

  async persist(files: MediaUploadOptions[]): Promise<Media[]> {
    const uploaded: Media[] = [];

    for (const { file, directory } of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("directory", directory || "");

      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: this.getAuthHeaders(),
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`Error al subir imagen a R2: ${res.statusText}`);
      }

      const item: Media = await res.json();
      uploaded.push(item);
    }

    return uploaded;
  }

  async list(options?: MediaListOptions): Promise<MediaList> {
    const params = new URLSearchParams();
    if (options?.directory) params.set("directory", options.directory);
    if (options?.limit) params.set("limit", String(options.limit));
    if (options?.offset) params.set("offset", String(options.offset));

    const res = await fetch(`${WORKER_URL}?${params.toString()}`, {
      headers: this.getAuthHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error al listar imágenes de R2: ${res.statusText}`);
    }

    return await res.json();
  }

  async delete(media: Media): Promise<void> {
    const params = new URLSearchParams({ key: media.id });
    const res = await fetch(`${WORKER_URL}?${params.toString()}`, {
      method: "DELETE",
      headers: this.getAuthHeaders(),
    });

    if (!res.ok) {
      throw new Error(`Error al eliminar imagen en R2: ${res.statusText}`);
    }
  }
}
