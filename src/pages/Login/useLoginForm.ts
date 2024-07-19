import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { login } from '../../apis/auth.api';
import { usePrevLocation } from '../../hooks/usePrevLocation';
import { getUser } from '../../redux/actions/user.actions';
import { useAppDispatch } from '../../redux/hooks';
import { resetWishlist } from '../../redux/slices/wishlist.slice';
import LoginProps from '../../types/login.type';
import { removeAuth, setStoredAuth } from '../../ultils/authToken';
import { handleError } from '../../ultils/handleError';
import { loginSchema } from './Login.constants';

const useLoginForm = () => {
  const dispatch = useAppDispatch();
  const { toPrevLocation } = usePrevLocation();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isDirty },
  } = useForm<LoginProps>({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = async (account: LoginProps) => {
    try {
      await verifyAccount(account);
      await dispatch(getUser());
      await dispatch(resetWishlist());
    } catch (error: AxiosError | any) {
      handleError(error);
    }
  };

  const verifyAccount = async (account: LoginProps) => {
    const response = await login(account);
    removeAuth();
    setStoredAuth(response.data);
    toPrevLocation();
  };

  return {
    handleLogin,
    control,
    handleSubmit,
    isSubmitting,
    isDirty,
  };
};

export default useLoginForm;
