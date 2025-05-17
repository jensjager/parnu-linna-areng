import express from 'express';
import router from './routes/routes';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
