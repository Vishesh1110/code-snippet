import dotenv from 'dotenv';
import express from 'express';
import cors from "cors"
import snippetRouter from './routes/snippet.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
  origin: process.env.CLIENT_URL
}))

app.post("/events", (req, res) => {
  console.log('Received event:', req.body.type);
  return res.status(200).json({});
});

app.use("/api/v1/snippet", snippetRouter);

app.listen(process.env.SNIPPET_SERVICE_PORT, () => {
  console.log(`Server is running on port ${process.env.SNIPPET_SERVICE_PORT}`);
});