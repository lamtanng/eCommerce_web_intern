import { ReactNode, createContext, useState } from 'react';
import { loginRespDefault } from '../pages/Login/constants/loginRespDefault';
import AuthProps from '../types/auth.type';

const AuthContext = createContext(
  {} as {
    auth: AuthProps;
    setAuth: React.Dispatch<React.SetStateAction<AuthProps>>;
  }
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthProps>(loginRespDefault);

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
