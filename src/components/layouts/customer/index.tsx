import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function CustomerLayout() {
  return (
    <>
      <Header />
      <main className="relative mt-header_height px-page_gutter_lg py-11">
        <Outlet />
      </main>
    </>
  );
}
