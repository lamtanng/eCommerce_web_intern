import { Link } from '@mui/material';
import { loginFeature } from '../../constants/features/publicFeatures';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <>
      <div className="mx-auto flex items-start justify-between font-sans text-base">
        <div className="mx-auto flex w-full flex-col items-start justify-start gap-8 px-52 py-20">
          <div className="w-full">
            <p className="text-[46px] font-extrabold">Getting Started</p>
            <p className="-mt-4 text-base text-gray-600">
              Already have an account?{' '}
              <Link href={loginFeature.path} className="font-medium" underline="none">
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

export default App;
