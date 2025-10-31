import Heading from '@/components/Heading';
import Products from '@/components/Product';
import { data } from '@/constants';
import { useCommonStore } from '@/store';

const BestSeller = () => {
  const content = data.home.bestseller.content;
  const products = useCommonStore(state => state.products);
  return (
    <div className="pt-12 pb-20">
      <Heading className="items-center" content={content} />
      <Products products={products} />
    </div>
  );
};

export default BestSeller;
