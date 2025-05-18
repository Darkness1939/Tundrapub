import express from 'express';
import cors from 'cors';
// import reviewRoutes from '../entities/reviews/routes/review.routes';
import reviewRoutes from '../entities/review/routes/review.routes';
import { errorHandler } from '../shared/middleware/errorHandler';
import LoginRouter from '../features/auth/routes/login.routes';
import registrationRoutes from '../features/auth/routes/registration.routes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Роуты
app.use('/api', LoginRouter);
app.use('/api/reviews', reviewRoutes);
app.use('api/registration', registrationRoutes);

// Middleware - глобальная обработка ошибок 
app.use(errorHandler);

export default app;