import { Outlet } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className='max-w-screen-2xl mx-auto text-base overflow-hidden'>
      <ToastContainer
        position='top-right'
        transition={Bounce}
        autoClose={2000}
        draggable={true}
        theme='colored'
        hideProgressBar={true}
        toastClassName='!font-sans !rounded-md'
      />
      <Outlet />
    </div>
  );
}
