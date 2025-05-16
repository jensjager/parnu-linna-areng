import express from 'express';
import { ideeGetAll, ideePost } from '../handlers/idee';

const router = express.Router();

router.get('/idee', ideeGetAll);
router.post('/ideepost', ideePost)

export default router;
