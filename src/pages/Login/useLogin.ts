import { yupResolver } from '@hookform/resolvers/yup';
import axios, { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { login } from '../../apis/login.api';
import { usePrevLocation } from '../../hooks/usePrevLocation';
import { useAppDispatch } from '../../redux/hooks';
import LoginProps from '../../types/login.type';
import { setStoredAuth } from '../../ultils/authToken';
import { displayError } from '../../ultils/displayToast';
import { loginSchema } from './Login.constants';

const useLogin = () => {
  const { toPrevLocation } = usePrevLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    setStoredAuth(response.data);
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
