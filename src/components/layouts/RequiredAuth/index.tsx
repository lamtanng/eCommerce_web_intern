import { Navigate, useLocation } from 'react-router-dom';
import Error from '../../../pages/Error';
import { UserRole } from '../../../types/userRole.type';
import { getStoredAuth } from '../../../ultils/authToken';
import AdminLayout from '../admin';
import CustomerLayout from '../customer';

// export default function RequiredAuth({ allowedRoles }: { allowedRoles: UserRole[] }) {
//   const auth = getStoredAuth();
//   const location = useLocation();
//   const role = allowedRoles.includes(auth?.userRole) ? auth?.userRole : undefined;
//   if (role === 'USER') return <CustomerLayout />;
//   else if (role === 'ADMIN') return <AdminLayout />;
//   else
//     return auth?.accessToken ? (
//       <Error errorMsg="Unauthenticated" />
//     ) : (
//       <Navigate to="/login" state={{ from: location }} replace />
//     );
// }

export const AdminRoute = () => {
  const auth = getStoredAuth();
  const role = auth?.userRole;
  const accessToken = auth?.accessToken;

  return role == 'ADMIN' ? <AdminLayout /> : accessToken ? <Navigate to="/products" /> : <Navigate to="/login" />;
};

export const PrivateRoute = () => {
  const auth = getStoredAuth();
  const accessToken = auth?.accessToken;

  return accessToken ? <CustomerLayout /> : <Navigate to="/login" />;
};

export const PublicRoute = () => {
  return <CustomerLayout />;
};
