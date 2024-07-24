import { Link } from '@mui/material';
import Logo from '../../assets/react.svg';
import { productFeature, signupFeature } from '../../constants/features/publicFeatures';
import LoginForm from './components/LoginForm';

function Login() {
  return (
    <>
      <div className="mx-auto flex items-start justify-between font-sans text-base">
        <div className="mx-auto flex w-full flex-col items-center justify-start gap-8 px-52 py-20">
          <Link href={productFeature.path} className="no-underline">
            <img src={Logo} alt="Logo" className="w-14" />
          </Link>

          <div className="w-full">
            <p className="w-full text-[46px] font-extrabold">Getting Started</p>
            <p className="-mt-4 text-base text-gray-600">
              Don't have account?{' '}
              <Link href={signupFeature.path} className="font-medium no-underline">
                {signupFeature.title}
              </Link>
            </p>
          </div>

          <LoginForm />
        </div>
        <div className="min-w-basis-1/2 h-screen w-full bg-blue-500"></div>
      </div>
    </>
  );
}

export default Login;
