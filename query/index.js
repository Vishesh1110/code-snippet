import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());

app.listen(process.env.QUERY_SERVICE_PORT, () => {
  console.log(`Query service is running on port ${process.env.QUERY_SERVICE_PORT}`);
});