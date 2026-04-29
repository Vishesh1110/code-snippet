import express from 'express';
import { createSnippet, getSnippet } from '../controller/snippet.js';

const snippetRouter = express.Router();

snippetRouter.route('/').post(createSnippet);
snippetRouter.route('/').get(getSnippet);

export default snippetRouter;