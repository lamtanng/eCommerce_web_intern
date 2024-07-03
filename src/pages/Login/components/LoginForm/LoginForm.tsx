import { FormProvider } from 'react-hook-form';
import LoginProps from '../../../../types/login.type';
import useLogin from '../../useLogin';
import FormContextInput from '../../../../components/elements/inputs/FormContextInput';
import FormContextButton from '../../../../components/elements/buttons/FormContextButton';

export default function LoginForm() {
  const { handleLogin, form } = useLogin();
  return (
    <>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className='w-full flex flex-col justify-between items-start gap-8'
        >
          <FormContextInput<LoginProps> name='email' label='Email' />
          <FormContextInput<LoginProps> name='password' label='Password' type='password' />
          <FormContextButton text='Login' variant='contained' type='submit' />
        </form>
      </FormProvider>
    </>
  );
}
