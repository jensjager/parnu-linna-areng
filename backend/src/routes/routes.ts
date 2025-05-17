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

export default router;
