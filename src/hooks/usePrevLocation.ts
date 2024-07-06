import { useLocation, useNavigate } from 'react-router-dom';
import { getStoredAuth } from '../ultils/authToken';
import { UserRole } from '../types/userRole.type';

export const usePrevLocation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getStoredAuth();
  const prevLocation = location.state?.from?.pathname || '/';
  const role = (auth?.userRole ?? undefined) as UserRole;
  const homePath = role === 'ADMIN' ? '/admin' : '/';

  const toPrevLocation = () => navigate(homePath, { replace: true });
  return { toPrevLocation, prevLocation };
};
