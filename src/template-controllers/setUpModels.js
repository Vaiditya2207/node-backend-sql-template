import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const setUpModels = async ( connection ) => {
    try{
        const files = fs.readdirSync(path.join(__dirname, '../models'));
        const importedFiles = await Promise.all(
            files.map(file => import(path.join(__dirname, "../models", file)))
        );
        for (const file of importedFiles) {
            await connection.query(file.default.query);
        }
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export default setUpModels;