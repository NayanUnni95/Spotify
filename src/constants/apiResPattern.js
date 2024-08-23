import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const filePath = path.join(__dirname, 'reference.json');
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(fileContent);
  } catch (err) {
    console.error('Error reading the JSON file:', err);
  }
})();
