import randomBytes from 'crypto';
import {commentsDB} from '../database/index.js';

export const createComment = (req, res) => {
  const id = randomBytes.randomBytes(4).toString('hex');

  const {text} = req.body;

  const snippetId = req.params.id;

  const comments = commentsDB[snippetId] || [];

  comments.push({ id, text });

  commentsDB[snippetId] = comments;

  return res.status(201).json({
    success: true, 
    message: "Comment added successfully", 
    comment: { id, text }
  });
} 

export const getCommentsBySnippetId = (req, res) => {
  const snippetId = req.params.id;

  // const comments = commentsDB[snippetId] || [];
  console.log(commentsDB[snippetId]);

  return res.status(200).json(commentsDB[snippetId]);
}