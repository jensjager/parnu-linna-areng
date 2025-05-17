import { Request, Response } from 'express';
import fetch from 'node-fetch'; // install if needed

export const getResponse = async (req: Request, res: Response) => {
  const { message } = req.body;

  try {
    const reply = 'Pärnu rohevõrgustik ühendab metsakoridore (Audru–Paikuse–Tõstamaa), jõekallaste rohealad (Pärnu ja Sauga jõgi), linnapargid (Rüütli tänav–Papiniidu) ning kergliiklusteed, et tagada katkematu elupaikade ühendus ja elurikkuse säilimine. Lisainfo: http://localhost:3000/arengukava/looduskeskkond/rohevorgustik';

    setTimeout(function() {
  console.log("This runs after 2 seconds");
  res.json({ reply });
}, 1000);
  } catch (error) {
    console.error('Ollama error:', error);
    res.status(500).json({ error: 'Failed to get response from Ollama' });
  }
};

