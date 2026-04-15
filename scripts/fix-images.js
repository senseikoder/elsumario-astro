import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, '..', 'src', 'content');

function fixImageUrls(content) {
  content = content.replace(
    /!\[([^\]]*)\]\((images\/[^)]+)\)/g,
    (_, alt, src) => {
      const newSrc = `https://tu-r2-bucket.r2.cloudflarestorage.com/images/${src.replace('images/', '')}`;
      return `![${alt}](${newSrc})`;
    }
  );
  
  content = content.replace(
    /\[!\[([^\]]*)\]\((images\/[^)]+)\)\]\(([^)]+)\)/g,
    (_, alt, src, link) => {
      const newSrc = `https://tu-r2-bucket.r2.cloudflarestorage.com/images/${src.replace('images/', '')}`;
      return `[![${alt}](${newSrc})](${link.replace('http://', 'https://')})`;
    }
  );
  
  content = content.replace(
    /!\[([^\]]*)\]\((http:\/\/elsumario\.com\/wp-content\/uploads\/[^)]+)\)/g,
    (_, alt, src) => {
      return `![${alt}](${src.replace('http://', 'https://')})`;
    }
  );
  
  return content;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const result = fixImageUrls(content);
  
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

console.log('Convirtiendo imágenes a URLs de R2...\n');
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