import * as yup from 'yup';

const signUpSchema = yup.object({
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(8).required('Password is required'),
  name: yup.string().required(),
  address: yup.string().required(),
});

export { signUpSchema };
