import { Outlet } from 'react-router';
import { Header, Footer } from '../../components/export';

const Layout = () => {
  return (
    <>
      {/* COMPONENT */}
      <Header />
      {/* CONTENT */}
      <Outlet />
      {/* COMPONENT */}
      <Footer />
    </>
  );
};

export { Layout };
