import setUpServerRoutes from "./setUpServerRoutes.js";
import setUpModels from "./setUpModels.js";
import pool from "../db/index.js";

const server = async (app) => {
    try {
        const routesStatus = await setUpServerRoutes(app);
        if (!routesStatus) {
            throw new Error("Error setting up server routes.");
        }
        console.log("Server routes set up successfully)");
        const connection = await pool.getConnection();
        const modelsStatus = await setUpModels(connection);
        if (!modelsStatus) {
            throw new Error("Error setting up models.");
        }
        console.log("Models set up successfully");
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export default server;