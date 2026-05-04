import dotenv from 'dotenv';
import express from 'express';
import cors from "cors"
import snippetRouter from './routes/snippet.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
  origin: "http://localhost:5173"
}))

app.use("/api/v1/snippet", snippetRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});