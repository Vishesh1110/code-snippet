import dotenv from 'dotenv';
import express from 'express';
import commentRouter from './routes/comment.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/v1/snippet", commentRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});