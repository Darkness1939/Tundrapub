import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { HomePage } from '../../pages/home/ui/HomePage';
import { LoginPage } from '../../pages/login/ui/LoginPage';
import { RegistrationPage } from '../../pages/registration/ui/Registration';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        index: true,
        element: <HomePage />, // главная
      },
      {
        path: 'login',
        element: <LoginPage />,// логин
      },
      {
        path: 'registration',
        element: <RegistrationPage />,// регистрация
      }
    ],
  },
]);