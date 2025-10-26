import { Button } from '@/component';
import { data } from '@/constants';
import { Carousel } from 'antd';

const Banner = () => {
  const products = data.home.banner.products;

  return (
    <Carousel
      className=" bg-white-lighter py-4 "
      autoplay={{ dotDuration: true }}
      autoplaySpeed={2000}
    >
      {products.map(item => (
        <div className="my-auto " key={item.id}>
          <div className="w-4/5 mx-auto flex items-center justify-between">
            <section className="max-w-[499px] ">
              <h4 className="text-teal text-[14px] font-bold">{item.brand}</h4>
              <h1 className="font-bold text-[56px] leading-[72px]! tracking-[0.2px]!  text-dark-title">
                {item.product_name}{' '}
              </h1>
              <h5 className="leading-[28px] text-dark-text">
                {item.description}
              </h5>
              <div className="flex gap-x-4 mt-4">
                <Button className="text-white">
                  Buy Now for ${item.price}
                </Button>
                <Button variant="outlined" className="text-indigo">
                  Learn more
                </Button>
              </div>
            </section>
            <section>
              <img src={`${item.image}`} alt="" className="mr-16 mt-8" />
            </section>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export { Banner };
