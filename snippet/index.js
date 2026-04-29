import dotenv from 'dotenv';
import express from 'express';
import snippetRouter from './routes/snippet.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/v1/snippet", snippetRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});