import { ReactNode, createContext, useState } from 'react';
import AuthProps from '../types/auth.type';
import { loginRespDefault } from '../pages/Login/Login.constants';

const AuthContext = createContext(
  {} as {
    auth: AuthProps;
    setAuth: React.Dispatch<React.SetStateAction<AuthProps>>;
  }
);

const authData = localStorage.getItem('auth')
  ? JSON.parse(localStorage.getItem('auth') as string)
  : loginRespDefault;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthProps>(authData);
  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
