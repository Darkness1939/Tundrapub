import express, {  Request, Response } from 'express'
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

dotenv.config();
const port = process.env.PORT || 3001; 

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true         
}));

app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.post('/api/registration', (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log('Received signup:', email, password);

  res.json({ message: 'User registered successfully!' });
});

const users = [
  { email: 'test@example.com', password: '123456' },
];

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    res.json({ message: 'Успешный вход!', token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ message: 'Неверный email или пароль' });
  }
});
