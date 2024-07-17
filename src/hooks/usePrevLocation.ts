import { useLocation, useNavigate } from 'react-router-dom';
import { UserRole } from '../types/userRole.type';
import { getStoredAuth } from '../ultils/authToken';

export const usePrevLocation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const getRole = () => (getStoredAuth()?.userRole ?? undefined) as UserRole;

  const getPreLocation = () => {
    const homePath = getRole() === 'ADMIN' ? '/admin' : '/';
    console.log(location?.state?.from);
    return location.state?.from?.pathname || homePath;
  };

  const toPrevLocation = () => navigate(getPreLocation(), { replace: true });

  return { toPrevLocation, getPreLocation, navigate };
};
