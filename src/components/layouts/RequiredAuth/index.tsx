import { Navigate, useLocation } from 'react-router-dom';
import { getStoredAuth } from '../../../ultils/authToken';
import { UserRole } from '../../../types/userRole.type';
import CustomerLayout from '../customer';
import AdminLayout from '../admin';
import Error from '../../../pages/Error';

export default function RequiredAuth({ allowedRoles }: { allowedRoles: UserRole[] }) {
  const auth = getStoredAuth();
  const location = useLocation();
  const role = allowedRoles.includes(auth?.userRole) ? auth?.userRole : undefined;
  if (role === 'USER') return <CustomerLayout />;
  else if (role === 'ADMIN') return <AdminLayout />;
  else
    return auth?.accessToken ? (
      <Error errorMsg="Unauthenticated" />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    );
}
