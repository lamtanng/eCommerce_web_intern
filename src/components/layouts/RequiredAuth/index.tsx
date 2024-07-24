import { Navigate, useLocation } from 'react-router-dom';
import { getStoredAuth } from '../../../ultils/authToken';
import AdminLayout from '../admin';
import CustomerLayout from '../customer';
import { loginFeature, productFeature } from '../../../constants/features/publicFeatures';

export const AdminRoute = () => {
  const auth = getStoredAuth();
  const role = auth?.userRole;
  const accessToken = auth?.accessToken;
  const location = useLocation();

  return role == 'ADMIN' ? (
    <AdminLayout />
  ) : accessToken ? (
    <Navigate to={productFeature.path} />
  ) : (
    <Navigate to={loginFeature.path} state={{ from: location }} replace />
  );
};

export const PrivateRoute = () => {
  const auth = getStoredAuth();
  const accessToken = auth?.accessToken;
  const location = useLocation();

  return accessToken ? <CustomerLayout /> : <Navigate to={productFeature.path} state={{ from: location }} replace />;
};

export const PublicRoute = () => {
  return <CustomerLayout />;
};
