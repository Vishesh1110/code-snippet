import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors'
import commentRouter from './routes/comment.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
  origin: process.env.CLIENT_URL
}))

app.use("/api/v1/comment", commentRouter);

app.listen(process.env.COMMENT_SERVICE_PORT, () => {
  console.log(`Server is running on port ${process.env.COMMENT_SERVICE_PORT}`);
});