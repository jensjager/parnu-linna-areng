import express from 'express';
import { ideeGetAll, ideePost } from '../handlers/idee';
import { getResponse } from '../handlers/aiChatbot';

const router = express.Router();

router.get('/idee', ideeGetAll);
router.post('/ideepost', ideePost);
router.post('/chat', getResponse);

export default router;
