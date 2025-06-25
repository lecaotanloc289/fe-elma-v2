import { Button } from '@/component';
import { Carousel } from 'antd';

const Banner = () => {
  const products = [
    {
      id: 1,
      brand: 'SONY WH-H910N',
      product_name: 'Best in Hi-Res and Noise Cancelling',
      description:
        'Experience finely tuned noise-canceling performance in a comfortable headphone. Long-lasting battery life plus quick charging keeps you listening for up to 35 hours since start.',
      image: ['/images/SonyHeadphone.png'],
      price: 234,
    },
    {
      id: 2,
      brand: 'Bose QuietComfort 45',
      product_name: 'Comfort and Silence Redefined',
      description:
        'Advanced noise cancellation with incredible comfort. Enjoy 24 hours of battery life and crystal clear audio for both music and calls.',
      image: ['/images/Macbook Pro 2018 1.png'],
      price: 299,
    },
    {
      id: 3,
      brand: 'Apple AirPods Max',
      product_name: 'Immersive Sound, Elegant Design',
      description:
        'Custom acoustic design with spatial audio and active noise cancellation. Seamlessly integrates with your Apple devices.',
      image: ['/images/Air.png'],
      price: 549,
    },
    {
      id: 4,
      brand: 'Sennheiser Momentum 4',
      product_name: 'Audiophile-Grade Wireless Sound',
      description:
        'Unrivaled sound clarity with adaptive noise canceling and a 60-hour battery life. Built for those who demand the best.',
      image: ['/images/iphone.png'],
      price: 379,
    },
    {
      id: 5,
      brand: 'JBL Tour One',
      product_name: 'Smart Noise Cancelling for Travelers',
      description:
        'Adaptive noise canceling with smart ambient technology. 50 hours of battery life and support for voice assistants.',
      image: ['/images/Cameradetail.png'],
      price: 299,
    },
  ];

  return (
    <Carousel
      className=" bg-white-lighter py-4 "
      autoplay={{ dotDuration: true }}
      autoplaySpeed={2000}
    >
      {products.map((item) => (
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
