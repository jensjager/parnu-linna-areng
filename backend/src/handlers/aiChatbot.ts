import { Request, Response } from 'express';
import fetch from 'node-fetch'; // install if needed

export const getResponse = async (req: Request, res: Response) => {
  const { message } = req.body;

  try {
    const ollamaRes = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'mistral',
        messages: [
          { role: 'user', content: message }
        ]
      })
    });

    const data = await ollamaRes.json();
    const reply = data.message?.content ?? 'No response.';

    res.json({ reply });
  } catch (error) {
    console.error('Ollama error:', error);
    res.status(500).json({ error: 'Failed to get response from Ollama' });
  }
};

