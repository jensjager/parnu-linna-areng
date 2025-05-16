import express from 'express';
import router from './routes/routes';
import cors from 'cors';

const app = express();
const port = 3000;

// Enable CORS for frontend requests
app.use(cors({
  origin: ['http://localhost:3001', 'http://localhost:3000', '*'], // Add your frontend URLs
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/api', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
