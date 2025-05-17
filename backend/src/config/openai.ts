// src/server.ts or index.ts

import OpenAI from "openai";
import 'dotenv/config';   

export const clientAi = new OpenAI( { apiKey: process.env.OPENAI_KEY } );
