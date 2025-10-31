import { Button } from '@/components';
import { data } from '@/constants';
import { useMessageApi } from '@/services';
import { useCartStore } from '@/store/cart.store';
import { Carousel } from 'antd';

const Banner = () => {
  const products = data.home.banner.products;
  const message = useMessageApi();
  const handleAddToCart = async (id: string, productName: string) => {
    try {
      const result: any = await useCartStore
        .getState()
        .addProductToCart({ id, quantity: 1 });
      if (result?.success) {
        message.success(`Add product ${productName} to cart success!`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Carousel
      className=" bg-white-lighter py-4 "
      autoplay={{ dotDuration: true }}
      autoplaySpeed={4500}
    >
      {products.map(item => (
        <div className="my-auto " key={item.id}>
          <div className="w-4/5 mx-auto flex items-center justify-between  ">
            <section className="max-w-[50%] ">
              <h4 className="text-teal text-[14px] font-bold">{item.brand}</h4>
              <h1 className="h1">{item.product_name} </h1>
              <h5 className="leading-[28px] text-dark-text">
                {item.description}
              </h5>
              <div className="flex gap-x-4 mt-4">
                <Button className="text-white">
                  Buy Now for ${item.price}
                </Button>
                <Button
                  onClick={() =>
                    handleAddToCart(item.id.toString(), item.product_name)
                  }
                  variant="outlined"
                  className="text-dark-indigo"
                >
                  Add to Cart
                </Button>
              </div>
            </section>
            <section className="flex-center">
              <img
                src={`${item.image}`}
                alt={item.product_name}
                className="mr-16 mt-8"
              />
            </section>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export { Banner };
