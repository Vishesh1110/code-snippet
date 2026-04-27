import dotenv from 'dotenv';
import express from 'express';
import snippetRouter from './routes/snippet';

dotenv.config();

const app = express();

app.use("/api/v1/snippets", snippetRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});