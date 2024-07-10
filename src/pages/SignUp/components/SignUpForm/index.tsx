import SubmitButton from '../../../../components/elements/buttons/SubmitButton';
import ControlledInput from '../../../../components/elements/controlledComponents/ControlledInput';
import useSignUp from '../../useSignUp';

export default function SignUpForm() {
  const { handleSignUp, handleSubmit, isSubmitting, control } = useSignUp();

  return (
    <form onSubmit={handleSubmit(handleSignUp)} className="form">
      <ControlledInput name="email" label="Email" control={control} />
      <ControlledInput name="password" label="Password" control={control} type="password" />
      <ControlledInput name="name" label="Name" control={control} />
      <ControlledInput name="address" label="Address" control={control} />
      <SubmitButton text="Sign Up" isSubmitting={isSubmitting} />
    </form>
  );
}
