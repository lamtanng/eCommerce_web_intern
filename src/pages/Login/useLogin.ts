import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { login } from '../../apis/auth.api';
import { usePrevLocation } from '../../hooks/usePrevLocation';
import LoginProps from '../../types/login.type';
import { getStoredAuth, removeAuth, setStoredAuth } from '../../ultils/authToken';
import { handleError } from '../../ultils/handleError';
import { loginSchema } from './Login.constants';

const useLogin = () => {
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
    } catch (error: AxiosError | any) {
      handleError(error);
    }
  };

  const verifyAccount = async (account: LoginProps) => {
    const response = await login(account);
    removeAuth();
    setStoredAuth(response.data);
    console.log('>>> ', getStoredAuth());

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

export default useLogin;
