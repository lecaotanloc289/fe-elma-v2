import { Rate } from 'antd';
import { Button } from './Button';
import { Product } from '@/interfaces';
import { formatPrice } from '@/utils';
import { useCartStore } from '@/store/cart.store';
import { useNavigate } from 'react-router';
import { useMessageApi } from '@/services';

const Products = ({ products }: { products: Product[] }) => {
  const navigate = useNavigate();
  const message = useMessageApi();
  const handleAddToCart = async (id: string, productName?: string) => {
    try {
      const data = {
        id,
        quantity: 1,
      };
      const response: any = await useCartStore
        .getState()
        .addProductToCart(data);
      if (response?.success) {
        message.success(`Add product ${productName} to cart success!`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewProductDetail = (id: string) => {
    navigate('/product-detail');
  };
  return (
    <div className="w-4/5 mx-auto">
      <div className="grid grid-cols-4 my-4">
        {products?.map(product => (
          <div
            key={product?._id}
            className="relative group max-w-[255px] p-5 my-5"
          >
            <div className="flex items-center justify-between">
              {product?.sale ? (
                <span className="w-[49px] h-[24px] bg-red/10 font-bold text-red text-[12px] leading-[18px] rounded-sm px-2 py-1">
                  SALE
                </span>
              ) : (
                <div></div>
              )}
              <div className="group cursor-pointer bg-white border-[1px] rounded-full w-9 h-9 flex-center">
                <i className="fa-solid fa-heart fa-xs  text-white-dark-light transition-all duration-300 group-hover:text-dark-light "></i>
              </div>
            </div>
            <div className="flex-center my-[26px] mx-auto">
              <img
                src={product?.images?.[0] ?? ''}
                alt={product?.name ?? ''}
                className="h-[180px]"
              />
            </div>
            <div className="">
              <span className="text-[12px] leading-[18px] text-dark-text my-4">
                {product.brand}
              </span>
              <h5 className="font-[600] text-dark-title py-2">
                {product.name}
              </h5>
              <div className="flex-between">
                <p className="text-indigo font-[600]">
                  {formatPrice(product.price)}
                </p>
                <Rate
                  className="!text-yellow"
                  style={{ fontSize: '16px' }}
                  allowHalf
                  disabled
                  defaultValue={product.rating}
                />
              </div>
            </div>
            <div className="absolute w-full hidden group-hover:flex group-hover:flex-col z-10">
              <Button
                onClick={() => handleAddToCart(product._id, product.name)}
                className="my-4 text-white"
                variant="contained"
              >
                <i className="fa-solid fa-cart-circle-plus mr-1 w-5 h-5"></i>
                <span className="font-[600]">Add to cart</span>
              </Button>
              <Button
                onClick={() => handleViewProductDetail(product._id)}
                variant="outlined"
                className="text-dark-lightest"
              >
                <i className="fa-solid fa-eye mr-1 w-5 h-5"></i>
                <span className="">Quick View</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
