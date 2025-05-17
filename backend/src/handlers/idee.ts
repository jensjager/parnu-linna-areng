import { Request, Response} from 'express';
import { supabase } from '../config/supabase';

export const ideeGetAll = async (req: Request, res: Response) => {
  let { data: Idee, error } = await supabase
  .from('idee')
  .select('*')

  if (error) {
    console.error('Error fetching users:', error)
  } else {
    console.log('All users:', Idee)
  }

  res.send(Idee)
}

export const ideePost = async (req: Request, res:Response) => {
    const payload = req.body;
    const { data, error } = await supabase
        .from('idee')
        .insert([payload])   
        .single(); 

        if (error) {
          res.status(400).json({ error: error.message });
        }
  
        res.status(201).json(data);
}
