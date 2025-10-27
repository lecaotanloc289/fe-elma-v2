import { Rate } from 'antd';
import { Button } from './Button';
const onFavorite = () => {};
const products = [
  {
    id: 1,
    name: 'Samsung Galaxy Watch 3',
    category: 'Men Fashion',
    price: 1725.0,
    image: '/images/Bitmap.png',
    sale: true,
    rating: 5,
    buttons: ['Add to cart', 'Quick view'],
  },
  {
    id: 2,
    name: 'Apple Watch 4 2020',
    category: 'Men Fashion',
    price: 1725.0,
    image: '/images/Category3.png',
    sale: false,
    rating: 5,
  },
  {
    id: 3,
    name: 'iPhone XS Max Pro',
    category: 'Men Fashion',
    price: 1725.0,
    image: '/images/iphone.png',
    sale: true,
    rating: 5,
  },
  {
    id: 4,
    name: 'Beats by Dre C 3450',
    category: 'Men Fashion',
    price: 1725.0,
    image: '/images/Category6.png',
    sale: false,
    rating: 5,
  },
  {
    id: 5,
    name: 'Airpods 2nd Gen',
    category: 'Men Fashion',
    price: 1725.0,
    image: '/images/Air.png',
    sale: false,
    rating: 5,
  },
  {
    id: 6,
    name: 'Garmin Watch Fit X',
    category: 'Men Fashion',
    price: 1725.0,
    image: '/images/clock.png',
    sale: true,
    rating: 5,
  },
  {
    id: 7,
    name: 'Women Yellow Turtleneck',
    category: 'Men Fashion',
    price: 1725.0,
    image: '/images/Category4.png',
    sale: false,
    rating: 5,
  },
  {
    id: 8,
    name: 'Harman Kardon Speaker',
    category: 'Men Fashion',
    price: 1725.0,
    image: '/images/Category2.png',
    sale: true,
    rating: 5,
  },
];

const Product = () => {
  return (
    <div className="w-4/5 mx-auto">
      <div className="grid grid-cols-4 my-4">
        {products.map((product) => (
          <div className="relative group max-w-[255px] p-5 my-5">
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
                src={product?.image ?? ''}
                alt={product?.name ?? ''}
                className="h-[180px]"
              />
            </div>
            <div className="">
              <span className="text-[12px] leading-[18px] text-dark-text my-4">
                Men Fashion
              </span>
              <h5 className="font-[600] text-dark-title py-2">
                Macbook Pro 2018 1
              </h5>
              <div className="flex-between">
                <p className="text-indigo font-[600]">$1,725.00</p>
                <Rate
                  className="!text-yellow"
                  style={{ fontSize: '16px' }}
                  allowHalf
                  disabled
                  defaultValue={5}
                />
              </div>
            </div>
            <div className="absolute w-full hidden group-hover:flex group-hover:flex-col z-10">
              <Button className="my-4 text-white" variant="contained">
                <i className="fa-solid fa-cart-circle-plus mr-1 w-5 h-5"></i>
                <span className="font-[600]">Add to cart</span>
              </Button>
              <Button variant="outlined" className="text-dark-lightest">
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

export default Product;
