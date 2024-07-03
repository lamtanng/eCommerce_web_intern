import * as yup from 'yup';
import AuthProps from '../../types/auth.type';
import LoginProps from '../../types/login.type';

const isRequiredMsg = (name: string) => `${name} is required`;

const loginSchema: yup.ObjectSchema<LoginProps> = yup.object({
  email: yup.string().email().required(isRequiredMsg('Email')),
  password: yup.string().required(isRequiredMsg('Email')),
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
