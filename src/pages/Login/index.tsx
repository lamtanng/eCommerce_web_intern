import { Link } from 'react-router-dom';
import Logo from '../../assets/react.svg';
import { signupFeature } from '../../constants/features/publicFeatures';
import LoginForm from './components/LoginForm';

function Login() {
  return (
    <>
      <div className="mx-auto flex items-start justify-between font-sans text-base">
        <div className="mx-auto flex w-full flex-col items-start justify-start gap-8 px-52 py-20">
          <div className="">
            <img src={Logo} alt="Logo" className="" />
          </div>

          <div className="w-full">
            <p className="text-[54px] font-extrabold">Getting Started</p>
            <p className="text-base text-gray-600">
              Already have an account?{' '}
              <Link to={signupFeature.path} className="font-medium">
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
