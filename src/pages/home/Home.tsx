import MainLayout from '@/views/MainLayout';
import { Banner } from './Banner';
import Benefit from './Benefit';
import BestSeller from './BestSeller';
import Adsvertiment from './Adsvertiment';
import Category from './Category';
import ProductList from './ProductList';
import Blog from './Blog';

const Home = () => {
  return (
    <MainLayout>
      <Banner />
      <Benefit />
      <BestSeller />
      <Adsvertiment />
      <Category />
      <ProductList />
      <Blog />
    </MainLayout>
  );
};

export default Home;
