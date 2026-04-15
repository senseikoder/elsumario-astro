import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, '..', 'src', 'content');

function parseCaptionShortcode(content) {
  let count = 0;
  
  while (content.includes('[caption')) {
    const startIdx = content.indexOf('[caption');
    const afterStart = content.indexOf(']', startIdx);
    if (afterStart === -1) break;
    
    const openingTag = content.slice(startIdx, afterStart + 1);
    const widthMatch = openingTag.match(/width="(\d+)"/);
    const alignMatch = openingTag.match(/align="align([^"]+)"/);
    
    if (!widthMatch) break;
    
    const width = widthMatch[1];
    const align = alignMatch ? alignMatch[1] : 'none';
    
    let endIdx = content.indexOf('[/caption]', afterStart);
    let endTag = '[/caption]';
    let endLen = 10;
    
    if (endIdx === -1) {
      endIdx = content.indexOf('\\[/caption\\]', afterStart);
      endTag = '\\[/caption\\]';
      endLen = 12;
    }
    if (endIdx === -1) {
      endIdx = content.indexOf('[/caption\\]', afterStart);
      endTag = '[/caption\\]';
      endLen = 11;
    }
    if (endIdx === -1) break;
    
    const inner = content.slice(afterStart + 1, endIdx);
    
    let src = '';
    let alt = '';
    const imgMatch = inner.match(/!\[([^\]]*)\]\(([^)]+)\)/);
    if (imgMatch) {
      alt = imgMatch[1] || '';
      src = imgMatch[2] || '';
    }
    
    const text = inner
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, '')
      .replace(/\)\s*\[[^\]]*\]\([^)]+\)/g, '')
      .replace(/\[([^\]]*)\]\([^)]+\)/g, '$1')
      .trim();
    
    let finalSrc = src;
    if (src.startsWith('images/')) {
      finalSrc = `https://tu-r2-bucket.r2.cloudflarestorage.com/images/${src.replace('images/', '')}`;
    } else if (src.includes('r2.cloudflarestorage.com')) {
      finalSrc = src;
    }
    
    const figcaption = text ? `<figcaption>${text}</figcaption>` : '';
    const replacement = `<figure class="wp-caption align${align}" style="max-width:${width}px">\n<img src="${finalSrc}" alt="${alt}" />\n${figcaption}</figure>`;
    
    content = content.slice(0, startIdx) + replacement + content.slice(endIdx + endLen);
    count++;
  }
  
  return content;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const result = parseCaptionShortcode(content);
  
  if (result !== content) {
    fs.writeFileSync(filePath, result, 'utf-8');
    console.log(`Updated: ${path.basename(filePath)}`);
    return true;
  }
  return false;
}

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else if (file.endsWith('.md')) {
      callback(filePath);
    }
  }
}

console.log('Procesando archivos...\n');
let processed = 0;
let updated = 0;

walkDir(contentDir, (filePath) => {
  processed++;
  if (processFile(filePath)) {
    updated++;
  }
});

console.log(`\nTotal: ${processed} archivos`);
console.log(`Actualizados: ${updated} archivos`);