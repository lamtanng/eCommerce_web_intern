import { Link } from 'react-router-dom';
import SubmitButton from '../../components/elements/buttons/SubmitButton';
import ControlledInput from '../../components/elements/controlledComponents/ControlledInput';
import { loginFeature } from '../../constants/features/publicFeatures';
import useSignUp from './useSignUp';

function App() {
  return (
    <>
      <div className="mx-auto flex items-start justify-between font-sans text-base">
        <div className="mx-auto flex w-full flex-col items-start justify-start gap-8 px-52 py-20">
          <div className="">{/* <img src={Logo} alt="Logo" className="" /> */}</div>
          <div className="w-full">
            <p className="text-[54px] font-extrabold">Getting Started</p>
            <p className="text-base text-gray-600">
              Already have an account?{' '}
              <Link to={loginFeature.path} className="font-medium">
                {loginFeature.title}
              </Link>
            </p>
          </div>
          <SignUpForm />
        </div>
        <div className="min-w-basis-1/2 h-screen w-full bg-blue-500"></div>
      </div>
    </>
  );
}

export function SignUpForm() {
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

export default App;
