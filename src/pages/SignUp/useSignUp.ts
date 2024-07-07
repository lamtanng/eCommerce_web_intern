import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { signUpSchema } from './SignUp.constants';

export default function useSignUp() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp = async (data: any) => {
    console.log(data);
  };

  return { handleSignUp, handleSubmit, control, isSubmitting };
}
