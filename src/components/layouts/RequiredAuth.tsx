import { Navigate, useLocation } from 'react-router-dom';
import { UserRole } from '../../types/userRole.type';
import AdminLayout from './admin/AdminLayout';
import CustomerLayout from './customer/CustomerLayout';
import { getStoredAuth } from '../../ultils/authToken';

export default function RequiredAuth({ allowedRoles }: { allowedRoles: UserRole[] }) {
  const auth = getStoredAuth();
  const location = useLocation();
  const role = allowedRoles.includes(auth?.userRole) ? auth?.userRole : undefined;
  if (role === 'USER') return <CustomerLayout />;
  else if (role === 'ADMIN') return <AdminLayout />;
  else
    return auth?.accessToken ? <div>Unauthorization</div> : <Navigate to="/login" state={{ from: location }} replace />;
}
