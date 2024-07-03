import { yupResolver } from '@hookform/resolvers/yup';
import axios, { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { login } from '../../apis/login.api';
import useAuth from '../../hooks/useAuth';
import { usePrevLocation } from '../../hooks/usePrevLocation';
import LoginProps from '../../types/login.type';
import { decodeToken } from '../../ultils/decodToken';
import { displayError } from '../../ultils/displayToast';
import { loginSchema } from './Login.constant';

const useLogin = () => {
  const { setAuth } = useAuth();
  const { toPrevLocation } = usePrevLocation();

  const form = useForm<LoginProps>({
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
    let decodedToken = decodeToken(response.data.accessToken);
    setAuth({ ...response.data, ...decodedToken });
    toPrevLocation();
  };

  return {
    handleLogin,
    form,
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
