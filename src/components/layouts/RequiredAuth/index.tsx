import { Navigate } from 'react-router-dom';
import { getStoredAuth } from '../../../ultils/authToken';
import AdminLayout from '../admin';
import CustomerLayout from '../customer';
import DialogFormButton from '../../elements/buttons/DialogFormButton';
import LoginModal from '../../../pages/Login/components/LoginModal';

export const AdminRoute = () => {
  const auth = getStoredAuth();
  const role = auth?.userRole;
  const accessToken = auth?.accessToken;
  return role == 'ADMIN' ? <AdminLayout /> : accessToken ? <Navigate to="/products" /> : <Navigate to="/login" />;
};

export const PrivateRoute = () => {
  const auth = getStoredAuth();
  const accessToken = auth?.accessToken;

  return accessToken ? (
    <CustomerLayout />
  ) : (
    <DialogFormButton variant="outlined" dialogButton={<>Sign In</>}>
      <LoginModal />
    </DialogFormButton>
  );
};

export const PublicRoute = () => {
  return <CustomerLayout />;
};
