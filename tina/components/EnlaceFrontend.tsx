import React from "react";

export const EnlaceFrontend = (props: any) => {
  // 1. Buscamos la ruta del archivo en los distintos objetos de metadata de Tina
  const sys = props.tinaForm?.values?._sys;
  const rawPath = sys?.filename || sys?.relativePath || props.tinaForm?.id;
  
  // 2. Si no hay ruta, o es explícitamente un documento nuevo sin guardar
  if (!rawPath || rawPath.includes("tina-new-document")) {
    return <p style={{ color: "#64748b", fontSize: "14px", padding: "10px 0" }}>Guarda la entrada por primera vez para generar su enlace público.</p>;
  }

  // 3. Limpiamos la ruta: eliminamos la extensión (.md o .mdx) si la tiene
  const cleanPath = rawPath.replace(/\.mdx?$/, '');
  
  // 4. Separamos por las carpetas (ej: 2024/03/mi-noticia) y nos quedamos solo con el final
  const slug = cleanPath.split('/').pop();
  const url = `/${slug}`;
  
  return (
    <div style={{ margin: "10px 0 20px 0", padding: "15px", backgroundColor: "#f1f5f9", borderRadius: "6px" }}>
      <span style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px" }}>Vista previa:</span>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ 
          color: "#2563eb", 
          textDecoration: "none", 
          fontWeight: "bold", 
          display: "inline-flex", 
          alignItems: "center" 
        }}
      >
        Abrir noticia en la web ↗
      </a>
    </div>
  );
};