import { Request, Response } from 'express';
import { supabase } from '../config/supabase';

export const ideeGetAll = async (req: Request, res: Response) => {
  const { page, limit, sektorId, hääletusel, searchTerm } = req.query;
  
  // Build the query
  let query = supabase.from('idee').select('*', { count: 'exact' });
    // Apply filters if provided
  if (sektorId) {
    query = query.eq('sektorId', parseInt(sektorId as string));
  }
  
  if (hääletusel !== undefined) {
    query = query.eq('hääletusel', hääletusel === 'true');
  }
  
  // Apply search term filter if provided
  if (searchTerm) {
    query = query.or(`pealkiri.ilike.%${searchTerm}%,kirjeldus.ilike.%${searchTerm}%`);
  }
  
  // Apply pagination if both page and limit are provided
  if (page && limit) {
    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);
    const start = (pageNum - 1) * limitNum;
    const end = start + limitNum - 1;
    
    query = query.range(start, end);
  }
  
  // Execute the query
  const { data, error, count } = await query;

  if (error) {
    console.error('Error fetching ideas:', error);
    return res.status(500).json({ error: error.message });
  }
  
  // Calculate total pages
  const totalPages = limit ? Math.ceil((count || 0) / parseInt(limit as string)) : 1;
  
  // Return the paginated response
  return res.json({
    data,
    total: count || 0,
    page: page ? parseInt(page as string) : 1,
    totalPages
  });
}

export const ideeGetById = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  const { data, error } = await supabase
    .from('idee')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error(`Error fetching idea with id ${id}:`, error);
    return res.status(404).json({ error: 'Idea not found' });
  }
  
  return res.json(data);
}

export const ideeUpdate = async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  
  const { data, error } = await supabase
    .from('idee')
    .update(payload)
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error(`Error updating idea with id ${id}:`, error);
    return res.status(400).json({ error: error.message });
  }
  
  return res.json(data);
}

export const ideePost = async (req: Request, res: Response) => {
    const payload = req.body;
    
    // Assign a default sector (6 = 'Muu') if no sector is provided
    // This is because the user doesn't select a sector - the admin will categorize it later
    if (!payload.sektorId) {
      payload.sektorId = 6; // Default sector ID (Muu/Other)
    }
    
    const { data, error } = await supabase
        .from('idee')
        .insert([payload])   
        .select()
        .single(); 

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(201).json(data);
}

export const getSektorid = async (_req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('sektor')
    .select('*');
  
  if (error) {
    console.error('Error fetching sectors:', error);
    return res.status(500).json({ error: error.message });
  }
  
  return res.json(data);
}

export const ideeDelete = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  const { error } = await supabase
    .from('idee')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error(`Error deleting idea with id ${id}:`, error);
    return res.status(400).json({ error: error.message });
  }
  
  return res.status(204).send();
}
