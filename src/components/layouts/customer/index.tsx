import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function CustomerLayout() {
  return (
    <>
      <Header />
      <main className="md:px-page_gutter_md px-page_gutter_sm relative mt-header_height py-11 lg:px-page_gutter_lg">
        <Outlet />
      </main>
    </>
  );
}
