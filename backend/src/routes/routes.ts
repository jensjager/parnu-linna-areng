<<<<<<< HEAD
import express, { Request, Response, NextFunction } from 'express';
import { ideeGetAll, ideePost, ideeGetById, ideeUpdate, ideeDelete, getSektorid } from '../handlers/idee';

const router = express.Router();

// Wrapper function to handle async route handlers
const asyncHandler = (fn: (req: Request, res: Response) => Promise<any>) => 
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res)).catch(next);
  };

// Idea routes
router.get('/ideed', asyncHandler(ideeGetAll));
router.get('/ideed/:id', asyncHandler(ideeGetById));
router.put('/ideed/:id', asyncHandler(ideeUpdate));
router.post('/ideed', asyncHandler(ideePost));
router.delete('/ideed/:id', asyncHandler(ideeDelete));

// Sectors route
router.get('/sektorid', asyncHandler(getSektorid));
=======
import express from 'express';
import { ideeGetAll, ideePost } from '../handlers/idee';
import { getResponse } from '../handlers/aiChatbot';

const router = express.Router();

router.get('/idee', ideeGetAll);
router.post('/ideepost', ideePost);
router.post('/chat', getResponse);
>>>>>>> 3bca9096a29dc3cae8c3cdea10fcc5fff1fa056b

export default router;
