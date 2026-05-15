import { snippets } from '../database/index.js';
import { randomBytes } from 'crypto';
import axios from 'axios';

export const createSnippet = (req, res) => {
    const id = randomBytes(4).toString('hex');

    const {title, code} = req.body;
    
    snippets[id] = {
        id,
        title,
        code
    }
    
    axios.post(`http://localhost:${process.env.MESSAGE_BROKER_PORT}/events`, {
        type: 'SnippetCreated',
        data: {
            id,
            title
        }
    }).catch(err => {
        console.error('Error sending snippet to event bus:', err);
    });

    return res.status(201).json({
        success: true,
        snippet: snippets[id],
        message: 'Snippet created successfully'
    });
}

export const getSnippet = (_, res) => {
    return res.status(200).json(snippets)
}