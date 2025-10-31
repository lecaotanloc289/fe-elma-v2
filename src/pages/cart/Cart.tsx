import { Button } from '@/components';
import Heading from '@/components/Heading';
import Wrapped from '@/components/Wrapped';
import { data } from '@/constants';
import MainLayout from '@/views/MainLayout';
import { Card, Checkbox, Divider } from 'antd';
import { useMemo, useState } from 'react';
import { BackToShopping } from './components';
import { useCartStore } from '@/store/cart.store';
import { QuantityInput } from './components/QuantityInput';
import { useNavigate } from 'react-router';
import { CartItem } from '@/interfaces/Cart';
import { formatPrice } from '@/utils';
import { useCommonStore } from '@/store';

const Cart = () => {
  const cart = useCartStore(s => s.cart);
  // Check cart item
  const selected = useCartStore(s => s.selected);
  const toggleAll = useCartStore(s => s.toggleAll);
  const isAllChecked = useCartStore(s => s.isAllChecked);
  const toggleStore = useCartStore(s => s.toggleStore);
  const storeStatus = useCartStore(s => s.storeStatus);
  const toggleItem = useCartStore(s => s.toggleItem);
  const totals = useCartStore(s => s.totals);

  // nhóm theo shop
  const groups = useMemo(() => {
    const m = new Map<string, CartItem[]>();
    for (const it of cart) {
      const storeId = it.product.store?._id;
      if (!m.has(storeId)) m.set(storeId, []);
      m.get(storeId)!.push(it);
    }
    return Array.from(m.entries());
  }, [cart]);

  const allChecked = isAllChecked();
  const t = totals();

  const navigate = useNavigate();
  // const [checked, setChecked] = useState(false);

  // const handleSelectAllProduct = () => {
  //   setChecked(!checked);
  // };
  function handleViewStore(storeId: string) {
    useCommonStore.getState().setStoreId(storeId);
    navigate(`/store`);
  }

  const handleUpdateProductCartItem = async (data: any) => {
    try {
      await useCartStore.getState().updateProductCartItem(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteProductFromCart = async (ids: string[]) => {
    try {
      await useCartStore.getState().deleteProductFromCart(ids);
    } catch (error) {
      console.log(error);
    }
  };

  if (!cart || cart?.length === 0) {
    return (
      <MainLayout>
        <Wrapped>
          <Card className="!my-4 p-10 text-center">
            <p className="h1">Giỏ hàng trống</p>
            <Button onClick={() => navigate('/')} variant="outlined">
              Tiếp tục mua sắm
            </Button>
          </Card>
        </Wrapped>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="my-[-300px] h-[340px] w-full bg-white-lighter mt-4"></div>
      <Wrapped>
        <div className="">
          <div className="flex-between">
            <Heading content={data.cart.heading} className="" />
            <BackToShopping />
          </div>

          <div className="">
            {/* Select all product */}
            <div className="p-5 mt-5 bg-white rounded-md h-[56px] flex items-center">
              <Checkbox
                checked={allChecked}
                onChange={e => toggleAll(e.target.checked)}
                className=""
              >
                Select all
              </Checkbox>
            </div>
            <div className="flex justify-between">
              <div className="w-[730px]">
                {groups.map(([sid, rows]) => {
                  const st = storeStatus(sid);
                  const store: any = rows[0]?.product?.store;
                  return (
                    <Card key={sid} className="!my-4 p-4">
                      <div className="w-full  ">
                        <Checkbox
                          checked={st?.checked}
                          onChange={e => toggleStore(sid, e.target.checked)}
                          className="flex-center"
                        >
                          <Button
                            variant="text"
                            className="flex-center mt-1 max-h-[32px] gap-x-2"
                            onClick={() => handleViewStore(sid)}
                          >
                            <img
                              src={store?.logo_url ?? './Elma.svg'}
                              width={32}
                              height={32}
                              alt={store?.name ?? ''}
                            />
                            {store?.name}
                          </Button>
                        </Checkbox>
                        <Divider />
                      </div>

                      {rows.map(it => {
                        const checked = selected.has(it?.product?._id);
                        const { product, quantity } = it;
                        const productId = product?._id;

                        return (
                          <div
                            key={productId}
                            className="flex items-center justify-between my-8"
                          >
                            <div className="flex-center space-x-5">
                              <Checkbox
                                // disabled={it?.disabled}
                                checked={checked}
                                onChange={e =>
                                  toggleItem(productId, e.target.checked)
                                }
                                className="!mr-4"
                              />
                              <div className="flex-center w-[120px] h-[100px]">
                                <img
                                  width={70}
                                  src={product.images?.[0] ?? './Elma.svg'}
                                  alt={product?.name ?? ''}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div className="flex flex-col space-y-3">
                                <span className="text-[18px] leading-5 font-[500] text-dark-title">
                                  {product?.name ?? ''}
                                </span>
                                <span className="label"></span>
                              </div>
                            </div>

                            <div className="flex-center space-x-4">
                              <div className="flex-center px-4">
                                <h5 className="font-[500] text-green">
                                  {formatPrice(product?.price ?? 0)}
                                </h5>
                              </div>
                              <div className="row flex">
                                <button
                                  className="icon-button"
                                  type="button"
                                  onClick={() =>
                                    handleUpdateProductCartItem({
                                      id: productId,
                                      quantity: Math.max(
                                        (quantity ?? 1) - 1,
                                        1
                                      ),
                                    })
                                  }
                                >
                                  <i className="fa-solid fa-minus" />
                                </button>
                                <QuantityInput
                                  productId={productId}
                                  quantity={quantity ?? 0}
                                  updateQuantity={handleUpdateProductCartItem}
                                />
                                <button
                                  onClick={() =>
                                    handleUpdateProductCartItem({
                                      id: productId,
                                      quantity: (quantity ?? 0) + 1,
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
                                  handleDeleteProductFromCart([productId])
                                }
                                className="flex-center rounded-md group !bg-white hover:!bg-red/10 w-[38px] h-[38px]"
                              >
                                <i className=" fa-solid fa-trash text-dark-lightest group-hover:text-red h-4 w-4"></i>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </Card>
                  );
                })}
              </div>
              <div className="w-[16px]"></div>
              <div className="w-[350px]">
                <Card className="!my-4 p-5">
                  <div className="flex-between">
                    <Checkbox
                      checked={allChecked}
                      onChange={e => toggleAll(e.target.checked)}
                      className=""
                    >
                      Select all
                    </Checkbox>
                    <span className="label">
                      Total {t.itemCount ?? 0} products
                    </span>
                  </div>
                  <Divider />
                  <div className="flex flex-col space-y-4">
                    <h5 className="text-dark-title">Order summary</h5>
                    <div className="flex-between">
                      <span className="label">Price</span>
                      <span className="label text-dark-title">
                        {formatPrice(t.subtotal ?? 0)}
                      </span>
                    </div>
                    <div className="flex-between">
                      <span className="label">Discount 10%</span>
                      <span className="label text-red">{t.subtotal / 10}</span>
                    </div>
                    <div className="flex-between">
                      <span className="label">Total Price</span>
                      <span className="label font-bold text-dark-title">
                        {formatPrice(t.grandTotal ?? 0)}
                      </span>
                    </div>
                  </div>
                  <Divider />
                  <Button
                    disabled={t.itemCount > 0 ? false : true}
                    onClick={() => navigate('/checkout')}
                    variant="contained"
                    className="w-full text-white"
                  >
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
