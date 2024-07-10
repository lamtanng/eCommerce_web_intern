import * as yup from 'yup';
import { getRequiredMsg } from '../../ultils/getMessage';

const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
const signUpSchema = yup.object({
  email: yup.string().email().required(getRequiredMsg('Email')),
  password: yup
    .string()
    .min(8, 'Password must be greater than 8 letters')
    .matches(passwordRegex, 'Password must contain at least 1 number and 1 letter')
    .required(getRequiredMsg('Password')),
  name: yup.string(),
  address: yup.string(),
});

export { signUpSchema };
