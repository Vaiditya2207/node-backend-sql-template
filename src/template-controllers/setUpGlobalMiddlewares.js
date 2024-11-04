import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async (app) => {
    try {
        const files = fs.readdirSync(path.join(__dirname, '../middlewares')).filter(file => file.endsWith('.js'));
        const importedFiles = await Promise.all(
            files.map(file => import(path.join(__dirname, "../middlewares", file)))
        );
        importedFiles.forEach(file => {
            app.use(file.default)
        });
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};