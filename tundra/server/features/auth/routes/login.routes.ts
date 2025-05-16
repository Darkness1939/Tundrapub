import { Router } from 'express';
import { loginController } from '../controller/login.controller';

const LoginRouter = Router();

LoginRouter.post('/login', loginController);

export default LoginRouter;