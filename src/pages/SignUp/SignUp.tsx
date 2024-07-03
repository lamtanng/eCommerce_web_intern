import { yupResolver } from '@hookform/resolvers/yup';
import { FormHelperText, Input, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { add } from '../../apis/users.api';
// import { add } from './apis/users.api';

const signUpSchema = yup.object({
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(8).required('Password is required'),
  name: yup.string().required(),
  address: yup.string().required(),
});

function App() {
  const { handleSubmit, register } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp = async (data: any) => {
    try {
      console.log(data);
      const newUser = await add(data);
      console.log(newUser);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormControl>
          <InputLabel htmlFor='email'>Email address</InputLabel>
          <Input id='email' aria-describedby='my-helper-text' {...register('email')} />
          <FormHelperText id='my-helper-text'>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='password'>Password</InputLabel>
          <Input id='password' aria-describedby='my-helper-text' {...register('password')} />
          <FormHelperText id='my-helper-text'>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='name'>Name</InputLabel>
          <Input id='name' aria-describedby='my-helper-text' {...register('name')} />
          <FormHelperText id='my-helper-text'>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='address'>address</InputLabel>
          <Input id='address' aria-describedby='my-helper-text' {...register('address')} />
          <FormHelperText id='my-helper-text'>We'll never share your email.</FormHelperText>
        </FormControl>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default App;
