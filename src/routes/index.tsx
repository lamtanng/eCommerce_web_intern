import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import RequiredAuth from '../components/layouts/RequiredAuth';
import { adminPath, dashboardFeature } from '../constants/adminFeatures';
import { CategoryRoutes } from '../pages/Category/Category.routes';
import Home from '../pages/Home/Home';
import { LoginRoutes } from '../pages/Login/Login.routes';
import { ProductRoutes } from '../pages/Product/Product.routes';
import { PurchaseRoutes } from '../pages/Purchase/Purchase.routes';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      ...LoginRoutes,

      {
        path: '',
        element: <RequiredAuth allowedRoles={['USER']} />,
        children: [
          { path: '/', element: <Home /> },
          { path: 'purchase', element: <div>Purchase</div> },
          { path: 'profile', element: <div>Profile</div> },
          { path: '/products', element: <div>Product page</div> },
        ],
      },

      {
        path: adminPath,
        element: <RequiredAuth allowedRoles={['ADMIN']} />,
        children: [
          { path: dashboardFeature.path, element: <>Dashboard</> },
          ProductRoutes,
          PurchaseRoutes,
          CategoryRoutes,
        ],
      },
    ],
  },
]);

export default routes;
