import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPath = (filename) => path.join(__dirname, '..', filename);  
const readFile = (filename) => fs.readFileSync(gePath(filename), 'utf-8');



