import Footer from '@/pages/Footer';
import Header from '@/pages/Header';

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
