import { FormProvider } from 'react-hook-form';
import SubmitButton from '../../../../components/elements/buttons/SubmitButton';
import FormContextInput from '../../../../components/elements/controlledComponents/FormContextInput';
import LoginProps from '../../../../types/login.type';
import useLogin from '../../useLogin';

export default function LoginForm() {
  const { handleLogin, form } = useLogin();
  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)} className="form">
          <FormContextInput<LoginProps> name="email" label="Email" />
          <FormContextInput<LoginProps> name="password" label="Password" type="password" />
          <SubmitButton text="Login" isDirty={form.formState.isDirty} isSubmitting={form.formState.isSubmitting} />
        </form>
      </FormProvider>
    </>
  );
}
