import { useLocation, useNavigate } from 'react-router-dom';
import { getStoredAuth } from '../ultils/authToken';
import { UserRole } from '../types/userRole.type';

export const usePrevLocation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getPreLocation = () => {
    const role = (getStoredAuth()?.userRole ?? undefined) as UserRole;
    const homePath = role === 'ADMIN' ? '/admin' : '/';
    return location.state?.from?.pathname || homePath;
  };

  const toPrevLocation = () => navigate(getPreLocation(), { replace: true });

  return { toPrevLocation, getPreLocation, navigate };
};
