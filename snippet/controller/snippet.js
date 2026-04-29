import { snippets } from '../database/index.js';
import { randomBytes } from 'crypto';

export const createSnippet = (req, res) => {
    const id = randomBytes(4).toString('hex');

    const {title, code} = req.body;
    
    snippets[id] = {
        id,
        title,
        code
    }
    
    return res.status(201).json({
        success: true,
        message: 'Snippet created successfully',
        snippet: snippets[id]
    });
}

export const getSnippet = (_, res) => {
    return res.status(200).json(snippets)
}