import { Outlet } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

export default function App() {
  return (
    <div className='text-base max-w-screen-xl mx-auto'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
