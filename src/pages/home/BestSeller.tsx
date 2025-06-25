import Heading from '@/component/Heading';
import Product from '@/component/Product';

const BestSeller = () => {
  const content = {
    heading: 'Best Seller Products',
    description: 'Check our best seller products on Elma website right now',
  };
  return (
    <div className="pt-12 pb-20">
      <Heading className="items-center" content={content} />
      <Product />
    </div>
  );
};

export default BestSeller;
