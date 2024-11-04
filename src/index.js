import express from 'express';
import startServer from './template-controllers/serverStarter.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(port, async () => {
    const status = await startServer(app);
    console.log(status ? "Server started successfully at " + port : "Server failed to start at " + port);
}) 