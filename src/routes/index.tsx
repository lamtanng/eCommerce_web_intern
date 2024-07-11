import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import RequiredAuth from '../components/layouts/RequiredAuth';
import { adminPath, dashboardFeature } from '../constants/features/adminFeatures';
import { CategoryRoutes } from '../pages/Category/Category.routes';
import { UserProductRoutes } from '../pages/Customer/Product/UserProduct.routes';
import { LoginRoutes } from '../pages/Login/Login.routes';
import { ProductRoutes } from '../pages/Product/Product.routes';
import { PurchaseRoutes } from '../pages/Purchase/Purchase.routes';
import { SignUpRoutes } from '../pages/SignUp/SignUp.routes';
import { ProductDetailsRoutes } from '../pages/Customer/ProductDetails/ProductDetails.routes';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      LoginRoutes,
      SignUpRoutes,

      {
        path: '/',
        element: <RequiredAuth allowedRoles={['USER']} />,
        children: [UserProductRoutes, ProductDetailsRoutes],
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
