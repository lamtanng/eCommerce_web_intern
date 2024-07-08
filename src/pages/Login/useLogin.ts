import { yupResolver } from '@hookform/resolvers/yup';
import axios, { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { login } from '../../apis/auth.api';
import { usePrevLocation } from '../../hooks/usePrevLocation';
import LoginProps from '../../types/login.type';
import { setStoredAuth } from '../../ultils/authToken';
import { displayError } from '../../ultils/displayToast';
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

const handleError = (error: AxiosError | any) => {
  if (axios.isAxiosError(error)) {
    error.response ? displayError(error.response?.data.message) : displayError(error.message);
  } else {
    displayError(error.toString());
  }
};

export default useLogin;
