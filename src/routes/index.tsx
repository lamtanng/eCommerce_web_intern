import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import RequiredAuth from '../components/layouts/RequiredAuth';
import {
  adminPath,
  categoryFeature,
  productFeature,
  purchaseFeature,
} from '../constants/adminFeatures';
import { default as Category, default as Products } from '../pages/Category/Catgory';
import Home from '../pages/Home/Home';
import { LoginRoutes } from '../pages/Login/Login.routes';
import { CategoryRoutes } from '../pages/Category/Category.routes';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      ...LoginRoutes,

      {
        path: '/',
        element: <RequiredAuth allowedRoles={['USER', 'ADMIN']} />,
        children: [
          { path: '/purchase', element: <Home /> },
          { path: '/products', element: <div>Product page</div> },
        ],
      },

      // Customer role
      {
        path: '',
        element: <RequiredAuth allowedRoles={['USER']} />,
        children: [
          { path: 'purchase', element: <div>Purchase</div> },
          { path: 'profile', element: <div>Profile</div> },
        ],
      },

      // ADMIN role
      {
        path: adminPath,
        element: <RequiredAuth allowedRoles={['ADMIN']} />,
        children: [
          { path: productFeature.path, element: <Products /> },
          { path: purchaseFeature.path, element: <div>Admin Purchases</div> },
          CategoryRoutes,
        ],
      },
    ],
  },
]);

export default routes;
