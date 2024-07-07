import SubmitButton from '../../../components/elements/buttons/SubmitButton';
import ControlledInput from '../../../components/elements/controlledComponents/ControlledInput';
import useLogin from '../useLogin';

export default function LoginForm() {
  const { handleLogin, handleSubmit, control, isSubmitting, isDirty } = useLogin();
  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)} className="form">
        <ControlledInput name="email" label="Email" control={control} />
        <ControlledInput name="password" label="Password" control={control} type="password" />
        <SubmitButton text="Login" isSubmitting={isSubmitting} />
      </form>
    </>
  );
}
