import dotenv from 'dotenv';
import express from 'express';
import axios from 'axios';

dotenv.config();

const app = express();

app.use(express.json());

app.post('/events', (req, res) => {
    const events = req.body
    // for snippet service
    axios.post(`http://localhost:${process.env.SNIPPET_SERVICE_PORT}/events`, events)
    // for comment service
    axios.post(`http://localhost:${process.env.COMMENT_SERVICE_PORT}/events`, events)
    // for query service
    axios.post(`http://localhost:${process.env.QUERY_SERVICE_PORT}/events`, events)

    return res.status(200).json({  });
})

app.listen(process.env.MESSAGE_BROKER_PORT, () => {
  console.log(`Message broker is running on port ${process.env.MESSAGE_BROKER_PORT}`);
});