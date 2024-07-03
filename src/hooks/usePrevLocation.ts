import { useLocation, useNavigate } from 'react-router-dom';

export const usePrevLocation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const prevLocation = location.state?.from?.pathname || '/';

  const toPrevLocation = () => navigate(prevLocation, { replace: true });
  return { toPrevLocation, prevLocation };
};
