import express from 'express';
import { createSnippet } from '../controller/snippet';

const router = express.Router();

router.route('/').post(createSnippet);

export default router;