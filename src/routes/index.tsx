import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { HomeRoutes } from '../pages/Home/Home.routes';
import { LoginRoutes } from '../pages/Login/Login.routes';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [...HomeRoutes],
  },
  ...LoginRoutes,
]);

export default routes;
