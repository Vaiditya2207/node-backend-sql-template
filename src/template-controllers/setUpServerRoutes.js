import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const setUpServerRoutes = async (app) => {
    try{
        const files = fs.readdirSync(path.join(__dirname, '../routes'));
        const importedFiles = await Promise.all(
            files.map(file => import(path.join(__dirname, "../routes", file)))
        );
        importedFiles.forEach(file => {
            app[file.default.method](file.default.path, file.default.controller);
        });
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export default setUpServerRoutes;