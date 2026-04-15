interface ParseResult {
  content: string;
  warnings: string[];
}

function parseCaptionShortcode(content: string): string {
  const CAPTION_REGEX = /\[caption([^\]]*)\]([\s\S]*?)\[\/caption\]/g;
  
  return content.replace(CAPTION_REGEX, (_, attrs, inner) => {
    const align = attrs.match(/align="([^"]+)"/)?.[1] || 'none';
    const width = attrs.match(/width="([^"]+)"/)?.[1] || '';
    
    const imgMatch = inner.match(/<img([^>]*)>/i);
    const img = imgMatch ? imgMatch[0] : '';
    const text = inner.replace(/<img[^>]*>/gi, '').trim();
    
    const style = width ? `style="max-width:${width}px"` : '';
    
    return `<figure class="wp-caption align${align}" ${style}>${img}${text ? `<figcaption>${text}</figcaption>` : ''}</figure>`;
  });
}

function parseGalleryShortcode(content: string): string {
  const GALLERY_REGEX = /\[gallery([^\]]*)\]/g;
  
  return content.replace(GALLERY_REGEX, (_, attrs) => {
    const ids = attrs.match(/ids="([^"]+)"/)?.[1] || '';
    const columns = attrs.match(/columns="(\d+)"/)?.[1] || '3';
    
    if (!ids) return '';
    
    const imageIds = ids.split(',');
    const images = imageIds.map((id: string) => 
      `<img src="/images/${id.trim()}.jpg" alt="" loading="lazy" />`
    ).join('');
    
    return `<div class="wp-gallery" data-columns="${columns}">${images}</div>`;
  });
}

function parseVideoShortcode(content: string): string {
  const VIDEO_REGEX = /\[video([^\]]*)\]([\s\S]*?)\[\/video\]/g;
  
  return content.replace(VIDEO_REGEX, (_, attrs, src) => {
    const url = attrs.match(/src="([^"]+)"/)?.[1] || src.trim();
    return `<video controls src="${url}"></video>`;
  });
}

function parseEmbedShortcode(content: string): string {
  const EMBED_REGEX = /\[embed\]([\s\S]*?)\[\/embed\]/g;
  
  return content.replace(EMBED_REGEX, (_, url) => {
    return `<div class="wp-embed"><iframe src="${url.trim()}" frameborder="0" allowfullscreen></iframe></div>`;
  });
}

function parseAudioShortcode(content: string): string {
  const AUDIO_REGEX = /\[audio([^\]]*)\]/g;
  
  return content.replace(AUDIO_REGEX, (_, attrs) => {
    const src = attrs.match(/src="([^"]+)"/)?.[1] || '';
    return `<audio controls src="${src}"></audio>`;
  });
}

function fixRelativeImageUrls(content: string, siteUrl: string): string {
  content = content.replace(
    /src="(\/?!http)/g,
    `src="${siteUrl}$1`
  );
  
  content = content.replace(
    /src="(https?:\/\/[^"\s]+\.(jpg|jpeg|png|gif|webp|svg))/gi,
    (_, url) => {
      const encodedUrl = encodeURIComponent(url);
      return `src="https://你的-r2-bucket.r2.cloudflarestorage.com/images?url=${encodedUrl}"`;
    }
  );
  
  return content;
}

export function parseWordPressContent(content: string, siteUrl: string = ''): ParseResult {
  const warnings: string[] = [];
  let result = content;
  
  result = parseCaptionShortcode(result);
  result = parseGalleryShortcode(result);
  result = parseVideoShortcode(result);
  result = parseEmbedShortcode(result);
  result = parseAudioShortcode(result);
  
  if (siteUrl) {
    result = fixRelativeImageUrls(result, siteUrl);
  }
  
  const unparsedShortcodes = result.match(/\[([a-z_]+)[^\]]*\]([\s\S]*?)\[\/\1\]/g);
  if (unparsedShortcodes) {
    unparsedShortcodes.forEach(shortcode => {
      warnings.push(`Shortcode no parseado: ${shortcode.substring(0, 50)}...`);
    });
  }
  
  return { content: result, warnings };
}

const testContent = `[caption id="attachment_123" align="aligncenter" width="640"]
<img src="https://example.com/wp-content/uploads/2024/01/imagen.jpg" alt="Imagen de ejemplo" width="640" height="480" class="size-medium" /> Esta es la descripción de la imagen
[/caption]

[gallery ids="45,46,47" columns="3"]

[video src="https://example.com/wp-content/uploads/2024/01/video.mp4"][/video]`;

const { content, warnings } = parseWordPressContent(testContent, 'https://elsumario.com');

console.log('=== Contenido parseado ===');
console.log(content);
console.log('\n=== Warnings ===');
warnings.forEach(w => console.log(w));
