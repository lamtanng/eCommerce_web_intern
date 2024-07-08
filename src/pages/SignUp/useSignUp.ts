import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { userApi } from '../../apis/user.api';
import SignUpProps from '../../types/signUp.type';
import { displaySuccess } from '../../ultils/displayToast';
import { signUpSchema } from './SignUp.constants';
import { handleError } from '../../ultils/handleError';
import { usePrevLocation } from '../../hooks/usePrevLocation';
import { loginFeature } from '../../constants/features/publicFeatures';

export default function useSignUp() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const { navigate } = usePrevLocation();
  const handleSignUp = async (data: SignUpProps) => {
    try {
      await userApi.create(data);
      displaySuccess('Sign up successfully');
      navigate(loginFeature.path, { replace: true });
    } catch (error) {
      handleError(error);
    }
  };

  return { handleSignUp, handleSubmit, control, isSubmitting };
}
