import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { AdminRoute, PrivateRoute, PublicRoute } from '../components/layouts/RequiredAuth';
import { adminPath, dashboardFeature } from '../constants/features/adminFeatures';
import { CategoryRoutes } from '../pages/Category/Category.routes';
import { UserProductRoutes } from '../pages/Customer/Product/UserProduct.routes';
import { ProductDetailsRoutes } from '../pages/Customer/ProductDetails/ProductDetails.routes';
import { UserPurchaseRoutes } from '../pages/Customer/UserPurchase/UserPurchase.routes';
import { UserPurchaseDetailsRoutes } from '../pages/Customer/UserPurchaseDetails/ProductDetails.routes';
import { LoginRoutes } from '../pages/Login/Login.routes';
import { ProductRoutes } from '../pages/Product/Product.routes';
import { PurchaseRoutes } from '../pages/Purchase/Purchase.routes';
import { SignUpRoutes } from '../pages/SignUp/SignUp.routes';
import { productFeature } from '../constants/features/publicFeatures';
import { ImportProductRoutes } from '../pages/ImportProduct/Product.routes';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      LoginRoutes,
      SignUpRoutes,
      {
        path: productFeature.path,
        element: <PublicRoute />,
        children: [UserProductRoutes, ProductDetailsRoutes],
      },
      {
        path: '/',
        element: <PrivateRoute />,
        children: [UserPurchaseRoutes, UserPurchaseDetailsRoutes],
      },

      {
        path: adminPath,
        element: <AdminRoute />,
        children: [
          { path: dashboardFeature.path, element: <>Dashboard</> },
          ProductRoutes,
          ImportProductRoutes,
          PurchaseRoutes,
          CategoryRoutes,
        ],
      },
    ],
  },
]);

export default routes;
