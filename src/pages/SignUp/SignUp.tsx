import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import ControlledInput from '../../components/elements/controlledComponents/ControlledInput';

const signUpSchema = yup.object({
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(8).required('Password is required'),
  name: yup.string().required(),
  address: yup.string().required(),
});

function App() {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp = async (data: any) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <ControlledInput name="email" label="Email" control={control} />
        <ControlledInput name="password" label="Password" control={control} type="password" />
        <ControlledInput name="name" label="Name" control={control} />
        <ControlledInput name="address" label="Address" control={control} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
