import { useLocation, useNavigate } from 'react-router-dom';
import { getStoredAuth } from '../ultils/authToken';
import { UserRole } from '../types/userRole.type';

export const usePrevLocation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getStoredAuth();

  const role = (auth?.userRole ?? undefined) as UserRole;
  const homePath = role === 'ADMIN' ? '/admin' : '/';
  const prevLocation = location.state?.from?.pathname || homePath;

  const toPrevLocation = () => navigate(prevLocation, { replace: true });
  return { toPrevLocation, prevLocation, homePath, navigate };
};
