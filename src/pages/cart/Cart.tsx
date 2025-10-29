import { Button } from '@/components';
import Heading from '@/components/Heading';
import Wrapped from '@/components/Wrapped';
import { data } from '@/constants';
import MainLayout from '@/views/MainLayout';
import { Card, Checkbox, Divider } from 'antd';
import { useState } from 'react';
import { BackToShopping } from './components';
import { useTranslation } from 'react-i18next';
import { useCartStore } from '@/store/cart.store';
import { formatPrice } from '@/utils';
import { QuantityInput } from './components/QuantityInput';
import { useNavigate } from 'react-router';

const Cart = () => {
  const navigate = useNavigate();
  const cart = useCartStore(state => state.cart);
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);
  const handleSelectAllProduct = () => {
    setChecked(!checked);
  };
  const handleDeleteProductFromCart = async (id?: string) => {
    try {
      await useCartStore.getState().deleteProductFromCart([id]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateProductCartItem = async (data: any) => {
    try {
      // TODO: check quantity if equal 1, ask user remove item from cart
      await useCartStore.getState().updateProductCartItem(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>
      <div className="my-[-300px] h-[340px] w-full bg-white-lighter mt-4"></div>
      <Wrapped>
        <div className="">
          <div className="flex-between">
            <Heading content={data.cart.heading} className="" />
            {/* <h2 className="">{t('cart')}</h2> */}
            <BackToShopping />
          </div>

          <div className="p-5">
            {/* Select all product */}
            <div className="p-5 bg-white rounded-md h-[56px] flex items-center">
              <Checkbox onChange={handleSelectAllProduct} className="">
                Select all
              </Checkbox>
            </div>

            {/* Main cart */}
            <div className="flex justify-between">
              <div className="w-[730px]">
                {cart?.products?.map(product => (
                  <Card key={product.product?._id} className="!my-4 p-4">
                    <div className="w-full  ">
                      <Checkbox className="flex-center">
                        <div className="flex-center mt-1 max-h-[32px]">
                          <img
                            src={
                              product?.product?.store?.logo_url ?? './Elma.svg'
                            }
                            width={32}
                            height={32}
                            alt=""
                          />
                          {product?.product?.store?.name}
                        </div>
                      </Checkbox>
                      <Divider />
                    </div>

                    <div
                      key={product?.product?._id}
                      className="flex items-center justify-between my-8"
                    >
                      <div className="flex-center space-x-5">
                        <Checkbox className="!mr-4" />
                        <div className="flex-center w-[120px] h-[100px]">
                          <img
                            width={70}
                            src={product.product.images?.[0] ?? './Elma.svg'}
                            alt={product.product?.name ?? ''}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex flex-col space-y-3">
                          <span className="text-[18px] leading-5 font-[500] text-dark-title">
                            {product?.product?.name ?? ''}
                          </span>
                          <span className="label"></span>
                        </div>
                      </div>

                      <div className="flex-center space-x-4">
                        <div className="flex-center px-4">
                          <h5 className="font-[500] text-green">
                            {formatPrice(product.product?.price ?? 0)}
                          </h5>
                        </div>
                        <div className="row flex">
                          <button
                            className="icon-button"
                            type="button"
                            onClick={() =>
                              handleUpdateProductCartItem({
                                id: product?.product?._id,
                                quantity: -1,
                              })
                            }
                          >
                            <i className="fa-solid fa-minus" />
                          </button>
                          <QuantityInput
                            productId={product?.product?._id}
                            quantity={product.quantity ?? 0}
                            updateQuantity={handleUpdateProductCartItem}
                          />
                          <button
                            onClick={() =>
                              handleUpdateProductCartItem({
                                id: product?.product?._id,
                                quantity: 1,
                              })
                            }
                            className="icon-button"
                            type="button"
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </div>
                        <button
                          onClick={() =>
                            handleDeleteProductFromCart(product.product._id)
                          }
                          className="flex-center rounded-md group !bg-white hover:!bg-red/10 w-[38px] h-[38px]"
                        >
                          <i className=" fa-solid fa-trash text-dark-lightest group-hover:text-red h-4 w-4"></i>
                        </button>
                      </div>
                    </div>
                  </Card>
                ))}

                {/* {data.cart.products.map(product => (
                  <Card key={`${Math.random()}`} className="!my-4 p-4">
                    <div className="w-full ">
                      <Checkbox className="">{product?.store ?? ''}</Checkbox>
                      <Divider />
                    </div>
                    {product?.products?.map(item => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between my-8"
                      >
                        <div className="flex-center space-x-5">
                          <Checkbox className="!mr-4" />
                          <div className="flex-center w-[120px] h-[100px]">
                            <img
                              width={70}
                              src={item?.image ?? ''}
                              alt={item?.product_name ?? ''}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="flex flex-col space-y-3">
                            <span className="text-[18px] leading-5 font-[500] text-dark-title">
                              {item?.product_name ?? ''}
                            </span>
                            <span className="label">{item?.type ?? ''}</span>
                          </div>
                        </div>

                        <div className="flex-center space-x-4">
                          <div className="flex-center px-4">
                            <h5 className="font-[500] text-green">
                              {item?.price ?? ''}
                            </h5>
                          </div>
                          <div className="row flex">
                            <button
                              className="!bg-white flex-center w-10 rounded-md rounded-r-none py-2 px-4 text-center text-sm transition-all hover:shadow-xs text-slate-600  hover:bg-slate-800  focus:bg-slate-800  active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                              type="button"
                            >
                              <i className="fa-solid fa-minus"></i>
                            </button>
                            <input
                              className="w-15 !bg-white rounded-none border-l border-r border-white-enough-light py-2 px-4 text-center text-sm transition-all hover:shadow-xs text-slate-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                              type="text"
                              value={item?.quantity ?? 0}
                            ></input>
                            <button
                              className="!bg-white flex-center w-10 rounded-md rounded-l-none py-2 px-4 text-center text-sm transition-all hover:shadow-xs text-slate-600  hover:bg-slate-800  focus:bg-slate-800  active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                              type="button"
                            >
                              <i className="fa-solid fa-plus"></i>
                            </button>
                          </div>
                          <button className="flex-center rounded-md group !bg-white hover:!bg-red/10 w-[38px] h-[38px]">
                            <i className=" fa-solid fa-trash text-dark-lightest group-hover:text-red h-4 w-4"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </Card>
                ))} */}
              </div>
              <div className="w-[350px]">
                <Card className="!my-4 p-5">
                  <div className="flex-between">
                    <Checkbox className="">Select all</Checkbox>
                    <span className="label">Total 10 products</span>
                  </div>
                  <Divider />
                  <div className="flex flex-col space-y-4">
                    <h5 className="text-dark-title">Order summary</h5>
                    <div className="flex-between">
                      <span className="label">Price</span>
                      <span className="label text-dark-title">$ 1,725.00</span>
                    </div>
                    <div className="flex-between">
                      <span className="label">Discount 10%</span>
                      <span className="label text-red">$ 125.00</span>
                    </div>
                    <div className="flex-between">
                      <span className="label">Total Price</span>
                      <span className="label font-bold text-dark-title">
                        $ 1,600.00
                      </span>
                    </div>
                  </div>
                  <Divider />
                  <Button variant="contained" className="w-full text-white">
                    <i className="fa-solid fa-credit-card-front mr-2"></i>
                    Proceed to Checkout
                  </Button>
                </Card>
              </div>
            </div>
          </div>

          {/* More products */}
          <div className="">
            <div className="flex-between">
              <div className="">
                <span className="font-bold text-[24px] leading-8 tracking-[0.2px] text-dark-title">
                  May be you like it too...
                </span>
              </div>
              <Button
                onClick={() => navigate('/search')}
                variant="outlined"
                className="text-indigo"
              >
                View All
              </Button>
            </div>
            <div className="grid grid-cols-6 gap-x-4 my-5">
              {data.cart.productSuggest?.map(product => (
                <div
                  key={product.image}
                  className="flex-between flex-col w-40 space-y-4"
                >
                  <div className="flex-center my-4 w-20 h-20">
                    <img
                      src={product?.image ?? ''}
                      alt={product?.name ?? ''}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-between h-[80px] space-y-4">
                    <span className="label text-dark-title font-[500]">
                      {product?.name ?? ''}
                    </span>
                    <div className="flex-between">
                      <span className="label text-green font-[500]">
                        {product?.price ?? ''}
                      </span>
                      <span className="label text-dark-title">
                        <i className="fa-solid fa-star text-yellow"></i>
                        {product?.rating ?? 0}
                      </span>
                    </div>
                  </div>
                  <Button variant="outlined" className="text-indigo w-full">
                    Add to cart
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapped>
    </MainLayout>
  );
};

export default Cart;
