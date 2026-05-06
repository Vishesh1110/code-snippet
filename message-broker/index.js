import dotenv from 'dotenv';
import express from 'express';
import axios from 'axios';

dotenv.config();

const app = express();

app.post('/events', (req, res) => {
    const events = req.body
    // for snippet service
    axios.post(`http://localhost:8000/events`, events)
    axios.post(`http://localhost:8001/events`, events)
    axios.post(`http://localhost:8002/events`, events)

    return res.status(200).json({  });
})

app.listen(process.env.PORT, () => {
  console.log('Message broker is running');
});