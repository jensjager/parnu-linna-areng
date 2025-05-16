import express from 'express';
import { ideeGetAll, ideePost, ideeGetById, ideeUpdate, ideeDelete, getSektorid } from '../handlers/idee';

const router = express.Router();

// Idea routes
router.get('/ideed', ideeGetAll); 
router.get('/ideed/:id', ideeGetById);
router.put('/ideed/:id', ideeUpdate);
router.post('/ideed', ideePost); 
router.delete('/ideed/:id', ideeDelete);

// Sectors route
router.get('/sektorid', getSektorid);

export default router;
