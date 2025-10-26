import Heading from '@/component/Heading';
import Product from '@/component/Product';
import { data } from '@/constants';

const BestSeller = () => {
  const content = data.home.bestseller.content;
  return (
    <div className="pt-12 pb-20">
      <Heading className="items-center" content={content} />
      <Product />
    </div>
  );
};

export default BestSeller;
