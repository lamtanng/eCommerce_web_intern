import * as yup from 'yup';
import AuthProps from '../../types/auth.type';
import LoginProps from '../../types/login.type';
import { getRequiredMsg } from '../../ultils/getRequiredMsg';

const loginSchema: yup.ObjectSchema<LoginProps> = yup.object({
  email: yup.string().email().required(getRequiredMsg('Email')),
  password: yup.string().required(getRequiredMsg('Email')),
});

const loginRespDefault: AuthProps = {
  accessToken: '',
  refreshToken: '',
  exp: 0,
  iat: 0,
  sub: '',
  userRole: undefined,
};

export { loginRespDefault, loginSchema };
