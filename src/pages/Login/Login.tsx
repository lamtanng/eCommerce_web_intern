import { Link } from '@mui/material';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../assets/react.svg';
import LoginForm from './components/LoginForm/LoginForm';

function Login() {
  return (
    <>
      <div className='flex items-start justify-between  font-sans text-base mx-auto'>
        <div className='w-full mx-auto px-52 flex py-20 flex-col items-start justify-start gap-8'>
          <div className=''>
            <img src={Logo} alt='Logo' className='' />
          </div>

          <div className='w-full'>
            <p className='font-extrabold text-[54px]'>Getting Started</p>
            <p className='text-base text-gray-600'>
              Already have an account?{' '}
              <Link href='' underline='none' className='font-medium'>
                Sign up
              </Link>
            </p>
          </div>

          <LoginForm />
        </div>
        <div className='w-full h-screen min-w-basis-1/2 bg-blue-500'></div>
        <ToastContainer
          position='top-right'
          transition={Bounce}
          autoClose={2000}
          draggable={true}
          theme='colored'
          hideProgressBar={true}
          toastClassName='!font-sans !rounded-md'
        />
      </div>
    </>
  );
}

export default Login;
