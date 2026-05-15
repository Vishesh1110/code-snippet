import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
app.use(cors());

app.listen(process.env.QUERY_SERVICE_PORT, () => {
  console.log(`Query service is running on port ${process.env.QUERY_SERVICE_PORT}`);
});