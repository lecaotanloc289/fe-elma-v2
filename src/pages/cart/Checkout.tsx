import Wrapped from '@/component/Wrapped';
import MainLayout from '@/views/MainLayout';
import { BackToShopping } from './components';
import {
  Affix,
  Badge,
  Card,
  Checkbox,
  Divider,
  Form,
  Input,
  Modal,
  Radio,
  Tabs,
  TabsProps,
  Tag,
  Tooltip,
} from 'antd';
import { Button, DiscountIcon } from '@/component';
import { data } from '@/constants';
import { useState } from 'react';
import { ElmaShopTag } from '@/component/Tag';

const Checkout = () => {
  // Delivery address
  const [isDeliveryAddressOpen, setIsDeliveryAddressOpen] =
    useState<boolean>(false);
  const [loadingOpenDeliveryAddress, setLoadingOpenDeliveryAddress] =
    useState<boolean>(true);

  // Add or update address
  const [isUpdateAddressOpen, setIsUpdateAddressOpen] =
    useState<boolean>(false);

  // Change delivery
  const [isChangeDeliveryMethodOpen, setIsChangeDeliveryMethodOpen] =
    useState<boolean>(false);

  // Shop voucher
  const [isSelectShopVoucherOpen, setIsSelectShopVoucherOpen] =
    useState<boolean>(false);

  // Elma voucher (platform)
  const [isSelectPlatformVoucherOpen, setIsSelectPlatformVoucherOpen] =
    useState<boolean>(false);

  // Shop voucher selected
  const [selectedShop, setSelectedShop] = useState<string>('');

  const showLoadingDeliveryAddress = () => {
    setIsDeliveryAddressOpen(true);
    setLoadingOpenDeliveryAddress(true);
    setTimeout(() => {
      setLoadingOpenDeliveryAddress(false);
    }, 1000);
  };

  const [form, setForm] = useState();

  const showDeliveryModal = () => {
    showLoadingDeliveryAddress();
    // setIsDeliveryAddressOpen(true);
  };
  const handleCancleDeliveryModal = () => setIsDeliveryAddressOpen(false);
  const handleOkDeliveryModal = () => setIsDeliveryAddressOpen(false);

  //   Insert and update address
  const showUpdateAddressModal = () => {
    setIsUpdateAddressOpen(true);
  };
  const handleUpdateAddress = () => {
    handleCancleDeliveryModal();
    showUpdateAddressModal();
  };

  const handleCancelUpdateAddressModal = () => {
    setIsUpdateAddressOpen(false);
    showDeliveryModal();
  };

  const handleClickAddNewAddress = () => {
    setIsDeliveryAddressOpen(false);
    setIsUpdateAddressOpen(true);
  };

  //   Change delivery methods
  const handleOpenDeliveryMethodModal = () => {
    setIsChangeDeliveryMethodOpen(true);
  };
  const handleCloseDeliveryMethod = () => {
    setIsChangeDeliveryMethodOpen(false);
  };
  const handleOkDeliveryMethod = () => {
    setIsChangeDeliveryMethodOpen(false);
  };

  // Shop voucher modal
  const handleOpenSelectShopVoucherModal = (store: string) => {
    setSelectedShop(store);
    setIsSelectShopVoucherOpen(true);
  };
  const handleCloseSelectShopVoucherModal = () => {
    setIsSelectShopVoucherOpen(false);
  };
  const handleOkSelectShopVoucherModal = () => {
    setIsSelectShopVoucherOpen(false);
  };

  // Elma (platform) voucher modal
  const handleOpenSelectPlatformVoucherModal = () => {
    setIsSelectPlatformVoucherOpen(true);
  };
  const handleCloseSelectPlatformVoucherModal = () => {
    setIsSelectPlatformVoucherOpen(false);
  };
  const handleOkSelectPlatformVoucherModal = () => {
    setIsSelectPlatformVoucherOpen(false);
  };

  const address = data.checkout.address.map(address => ({
    value: address.id,
    label: (
      <div key={`${address?.address}`} className="w-[432px]">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center">
            <h5 className="text-dark-title">{address?.name ?? ''}</h5>
            <Divider type="vertical" />
            <span className="label">{address?.phone ?? ''}</span>
          </div>
          <Button
            onClick={handleUpdateAddress}
            variant="text"
            className="!bg-white text-indigo"
          >
            Update
          </Button>
        </div>
        <span className="text-[13px]">{address?.address ?? ''}</span>
        <div
          className={`mt-2 px-1 py-0.5 w-fit ${address?.isDefault ? 'border border-red text-red' : ''}`}
        >
          <span className="text-[13px]">
            {address?.isDefault ? 'Default' : ''}
          </span>
        </div>
        <Divider className="!my-4" />
      </div>
    ),
  }));

  const [tab1ChildrenValue, setTab1ChildrenValue] = useState(1);
  const onchangeTab1ChildrenValue = (e: any) => setTab1ChildrenValue(e);
  const tab1Children = data.checkout.shippingMethods.map(method => ({
    value: method?.id,
    label: (
      <div className="my-2 w-full flex-between rounded-sm bg-white-enough-light pr-4">
        <div className="flex w-[400px] flex-col  p-4 space-y-1">
          <div className="flex items-center space-x-4">
            <h6 className="font-[500] text-dark-title">{method?.name ?? ''}</h6>
            <span className="">{method?.price ?? ''}</span>
          </div>
          {method?.guarantee ? (
            <span className="text-teal">
              <i className="mr-1 fa-solid fa-truck-fast"></i>
              {method?.guarantee ?? ''}
            </span>
          ) : (
            ''
          )}
          <span className="">{method?.note ?? ''} </span>
          {method?.time_guarantee ? (
            <div className="flex h-5">
              <img
                src="images/shipping-truck-fast-teal.svg"
                alt=""
                className="h-5"
              />
              <div className="bg-[#26aa90] flex-center rounded-tr-xs rounded-br-xs pr-1">
                <span className="text-xs text-white">
                  {method?.time_guarantee ?? ''} Hours
                </span>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
        <i className="text-indigo text-xl fa-solid fa-check"></i>
      </div>
    ),
  }));

  const tab2Children = data.checkout.shippingMethodToCabinet.map(method => ({
    value: method?.id,
    label: (
      <div className="my-2 w-full flex-between rounded-sm bg-white-enough-light pr-4">
        <div className="flex w-[400px] flex-col  p-4 space-y-1">
          <div className="flex items-center space-x-4">
            <h6 className="font-[500] text-dark-title">{method?.name ?? ''}</h6>
            <span className="">{method?.price ?? ''}</span>
          </div>
          {method?.guarantee ? (
            <span className="text-teal">
              <i className="mr-1 fa-solid fa-truck-fast"></i>
              {method?.guarantee ?? ''}
            </span>
          ) : (
            ''
          )}
          <span className="">{method?.note ?? ''} </span>
          {method?.time_guarantee ? (
            <div className="flex h-5">
              <img
                src="images/shipping-truck-fast-teal.svg"
                alt=""
                className="h-5"
              />
              <div className="bg-[#26aa90] flex-center rounded-tr-xs rounded-br-xs pr-1">
                <span className="text-xs text-white">
                  {method?.time_guarantee ?? ''} Hours
                </span>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
        <i className="text-indigo text-xl fa-solid fa-check"></i>
      </div>
    ),
    disabled: true,
  }));

  const tabItems: TabsProps['items'] = [
    {
      key: '1',
      label: (
        <div className="flex items-center ml-0.5 border text-indigo !bg-white w-fit p-2 rounded-sm focus:!border-indigo">
          <i className="fa-solid fa-hand-holding-box mr-2 text-xl"></i>
          <div className="flex flex-col">
            <span className="text-[12px]">Delivery to your door</span>
            <span className="text-[8px]">From $3</span>
          </div>
        </div>
      ),
      children: (
        <div className="">
          <div className="flex items-center">
            <h5 className="text-dark-title font-bold">
              Shipping methods linked with Elma
            </h5>
            <i className="text-[12px] text-indigo mx-1 fa-solid fa-shield-check"></i>
          </div>
          <div className="flex flex-col space-y-4 mt-4">
            <Radio.Group
              onChange={onchangeTab1ChildrenValue}
              value={tab1ChildrenValue}
              options={tab1Children}
            />
          </div>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div className="flex items-center ml-0.5 border text-indigo !bg-white w-fit p-2 rounded-sm focus:!border-indigo">
          <i className="fa-solid fa-boxes-packing mr-2 text-xl"></i>
          <div className="flex flex-col">
            <span className="text-[12px]">Deliver to the delivery cabinet</span>
            <span className="text-[8px]">Free</span>
          </div>
        </div>
      ),
      children: (
        <div className="flex flex-col justify-between">
          <div className="">
            <div className="flex items-center">
              <h5 className="text-dark-title font-bold">
                Shipping methods linked with Elma
              </h5>
              <i className="text-[12px] text-indigo mx-1 fa-solid fa-shield-check"></i>
            </div>
            <div className="flex flex-col space-y-4 mt-4">
              <Radio.Group
                onChange={onchangeTab1ChildrenValue}
                value={tab1ChildrenValue}
                options={tab2Children}
              />
            </div>
          </div>
          <Form
            className="inline-flex gap-x-4 !mt-10"
            layout="horizontal"
            title="Receiver"
          >
            <Form.Item required label="Receiver">
              <Input placeholder="Receiver" />
            </Form.Item>
            <Form.Item required>
              <Input placeholder="Phone number" />
            </Form.Item>
          </Form>
        </div>
      ),
    },
  ];

  const paymentWalletOptions = [
    {
      value: 'vietinbank',
      label: 'VietinBank',
      subLabel: 'x9774',
      icon: 'https://play-lh.googleusercontent.com/F8D0AbyMmiuwsTZYLaPsu_o40XGfQHgvRnq25lVSWupgHPpH3-TQ9soMrWwDJco3siI=s48-rw',
    },
    {
      value: 'agribank',
      label: 'Agribank',
      subLabel: '08843',
      icon: 'https://play-lh.googleusercontent.com/rNSXUqGnK-ljK6qUdUmy7h_sDrMOzZ1nPwAUAwshsmPaQuwNGn0Xwj-psgFrBSJOHg',
    },
    {
      value: 'techcombank',
      label: 'Techcombank',
      subLabel: '19995',
      icon: 'https://s3-symbol-logo.tradingview.com/techcombank--600.png',
    },
    {
      value: 'timodigitalbank',
      label: 'Timo Digital Bank',
      subLabel: 'x3616',
      icon: 'https://play-lh.googleusercontent.com/G6uMCtC_A8RLe7EpcDry8a89mIVcYSHeyI-aBX30JuXhHcN02S7oQm5UAG5V_GesgSo',
    },
  ];
  const [selected, setSelected] = useState<string | null>(null);
  const paymentMethodTabs: TabsProps['items'] = [
    {
      key: '1',
      label: 'Wallet',
      children: (
        <Radio.Group
          onChange={e => setSelected(e.target.value)}
          value={selected}
          className="flex flex-col !space-y-4"
        >
          {paymentWalletOptions.map(option => (
            <Radio
              value={option.value}
              key={option.value}
              className="!flex items-center gap-2  rounded-xl p-2 hover:bg-gray-50"
            >
              <div className="flex items-center space-x-2">
                <img
                  src={option.icon}
                  alt={option.label}
                  className="w-6 h-6 object-contain"
                />
                <div>
                  <div className="font-medium text-sm">{option.label}</div>
                  <div className="text-xs text-gray-500">{option.subLabel}</div>
                </div>
              </div>
            </Radio>
          ))}
        </Radio.Group>
      ),
    },
    {
      key: '2',
      label: 'Creadit/Debit Card',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Google Pay',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '4',
      label: 'Stripe',
      children: 'Content of Tab Pane 4',
    },
    {
      key: '5',
      label: 'Paypal',
      children: 'Content of Tab Pane 5',
    },
    {
      key: '6',
      label: 'Apple Pay',
      children: 'Content of Tab Pane 6',
    },
    {
      key: '7',
      label: 'Cost on Delivery (COD)',
      children: (
        <div className="flex space-x-4">
          <span className="label">Cost on Delivery</span>
          <span className="label">
            Collection fee: $0. Shipping fee discount (if any) also applies to
            collection fee.
          </span>
        </div>
      ),
    },
  ];

  const handleOnchangeTab = () => {};
  const handleOnClickChatNow = () => {};
  const handleOnChangePaymentMethodTab = () => {};
  return (
    <MainLayout>
      <div className="my-[-300px] h-[340px] w-full bg-white-lighter mt-4"></div>
      <Wrapped>
        <div className="flex-between">
          <h2 className="">Checkout</h2>
          <BackToShopping />
        </div>

        {/* Delivery address */}
        <Card className="p-5 !my-8">
          <h4 className="text-dark-title">
            <i className="fa-solid fa-location-dot mr-2 text-indigo"></i>
            Delivery address
          </h4>
          <div className="flex-between my-2">
            <div className="">
              <h5 className="text-dark-title">Lee Cao Tan Loc</h5>
              <h5 className="label">(+84) 852 508 843</h5>
            </div>
            <div className="flex items-center space-x-4">
              <div className="">
                <span className="label">
                  Số 21, Đường Số 4, Khu Phố 5, Phường Hiệp Bình Chánh, Thành
                  Phố Thủ Đức, Thành Phố Hồ Chí Minh{' '}
                </span>
              </div>
              <div className="border-red border p-0.5">
                <span className="label text-red">Mặc định</span>
              </div>
            </div>
            <Button
              onClick={showDeliveryModal}
              variant="text"
              className="text-indigo !bg-white "
            >
              Change
            </Button>
          </div>
        </Card>

        {/* Heading of list shop & product */}
        <Card className="!my-2 !px-3" size="small">
          <div className="grid grid-cols-5 text-gray-500 font-semibold">
            <div className="col-span-2">
              <h4 className="">Products</h4>
            </div>
            <span className="text-center flex-center">Đơn giá</span>
            <span className="text-center flex-center">Số lượng</span>
            <span className="text-right flex justify-end items-center">
              Thành tiền
            </span>
          </div>
        </Card>

        {/* Product list of each shop */}
        {data.cart.products.map(product => (
          <Card className="!my-2">
            {/* Store */}
            <div className="inline-flex items-center">
              <ElmaShopTag rank={product?.rank ?? 0} />
              <span className="font-[600] text-dark-title">
                {product?.store ?? ''}
              </span>
              <Divider type="vertical" />
              <Button
                onClick={handleOnClickChatNow}
                variant="text"
                className="text-teal !p-0 !bg-white"
              >
                <i className="fa-solid fa-comments mr-1"></i>
                <span className="">Chat now</span>
              </Button>
            </div>
            {/* Product of store */}
            {product.products.map(item => (
              <div className="">
                <div
                  key={product.id}
                  className="grid grid-cols-5 items-center p-4"
                >
                  <div className="col-span-2 flex items-center gap-2">
                    <img
                      src={item?.image ?? ''}
                      alt={item?.product_name ?? ''}
                      className="w-20 h-20 object-contain"
                    />
                    <div className="flex flex-col space-y-1">
                      <span className="font-[500] text-dark-title">
                        {item?.product_name ?? ''}
                      </span>
                      <span className="label">{item?.type ?? ''}</span>
                    </div>
                  </div>
                  <div className="text-center text-green-600 font-medium">
                    ₫{item?.price.toLocaleString()}
                  </div>
                  <div className="text-center">{item?.quantity ?? ''}</div>
                  <div className="text-right text-red-500 font-semibold">
                    ₫{(item?.price * item?.quantity).toLocaleString()}
                  </div>
                </div>

                {/* Insurance of each product */}
                <div
                  key={product.id}
                  className="rounded-md bg-white-lighter grid grid-cols-5 items-start px-4 py-2 my-4 "
                >
                  <div className="col-span-2 flex items-start gap-2">
                    <Checkbox />
                    <div className="">
                      <h5 className="text-[13px]">
                        Consumer protection insurance
                      </h5>
                      <span className="label text-[12px]">
                        Helps protect you from dangers and damages caused by the
                        insured product during use.
                      </span>
                    </div>
                  </div>
                  <div className="text-center text-green-600 font-medium">
                    ₫{1300}
                  </div>
                  <div className="text-center">1</div>
                  <div className="text-right text-red-500 font-semibold">
                    ₫{1300}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-end border-y my-5">
              <div className="w-3/5 flex-between">
                <span className="flex-center">
                  <i className="fa-solid fa-receipt fa-rotate-270 text-red fa-lg mr-2"></i>
                  Voucher of Shop
                </span>
                <Button
                  onClick={() =>
                    handleOpenSelectShopVoucherModal(product?.store)
                  }
                  variant="text"
                  className="text-indigo font-[500] !bg-white"
                >
                  Select Voucher
                </Button>
              </div>
            </div>

            {/* Note & Delivery & Total */}
            <div className="">
              <div className="flex space-x-5">
                <div className="w-2/5">
                  <h6 className="">Note:</h6>
                  <Input placeholder="Note for Sellers..." />
                </div>
                <div className="w-3/5 flex flex-col space-x-2">
                  <div className="flex justify-between space-x-4">
                    <span className="mt-2">Shipping Methods:</span>
                    <div className="w-[400px]">
                      <div className="flex-between">
                        <h5 className="text-dark-title">Fast</h5>
                        <Button
                          variant="text"
                          className="text-indigo font-[500] !bg-white"
                          onClick={handleOpenDeliveryMethodModal}
                        >
                          Change
                        </Button>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-teal">
                          <i className="fa-solid fa-truck-fast mr-1"></i>
                          Guaranteed delivery from July 6 to July 8
                        </span>
                        <div className="flex-between">
                          <span className="label">
                            Get a Voucher worth ₫15,000 if your order is
                            delivered to you after July 8, 2025.
                          </span>
                          <Button
                            variant="text"
                            className="!bg-white text-dark-lightest"
                          >
                            <i className="fa-regular fa-circle-question"></i>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <h5 className="text-dark-title font-[500]">đ 37.700</h5>
                    </div>
                  </div>
                  <div className="">
                    <span className="">Jointly checked.</span>
                    <Button
                      variant="text"
                      className="!bg-white text-dark-lightest"
                    >
                      <i className="fa-regular fa-circle-question"></i>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <span className="">
                  Total money ({product?.products.length} product
                  {product?.products.length !== 1 && 's'}
                  ):{' '}
                </span>
                <span className="text-red text-xl">$ 5000.00</span>
              </div>
            </div>
          </Card>
        ))}

        {/* Voucher & coin */}
        <Card className="!my-4">
          <h4 className="">Voucher</h4>
          <div className="flex-between">
            <span className="flex-center">
              <i className="fa-solid fa-receipt fa-rotate-270 text-red fa-lg mr-2"></i>
              Elma Voucher
            </span>
            <Button
              onClick={handleOpenSelectPlatformVoucherModal}
              variant="text"
              className="text-indigo font-[500] !bg-white"
            >
              Select Voucher
            </Button>
          </div>
          <Divider className="!my-2" />
          <div className="flex-between">
            <div className="space-x-4">
              <span className="">
                <i className="fa-solid fa-coin-vertical fa-rotate-90 text-yellow mr-2"></i>
                Elma Coin
              </span>
              <span className="label">Cannot use Coin</span>
              {/* <span className="label">Use 400 Coins</span> */}
            </div>
            <div className="space-x-4">
              <span className="label">[-0$]</span>
              <Checkbox className="" />
            </div>
          </div>
        </Card>

        {/* Payment method */}
        <Card>
          <h4 className="">Payment methods</h4>
          <div className="flex items-center space-x-4">
            <Tabs
              defaultActiveKey="1"
              items={paymentMethodTabs}
              onChange={handleOnChangePaymentMethodTab}
            />
          </div>
          {/* Render when select one method */}
          <div className=""></div>
          {/* Total */}
          <Divider />
          <div className="flex justify-end">
            <div className="w-1/3 flex flex-col space-y-4 !justify-end">
              <div className="flex-between ">
                <span className="label">Total cost of goods</span>
                <span className="label text-dark-title">$ 1000.00</span>
              </div>
              <div className="flex-between">
                <span className="label">Total cost of delivery</span>
                <span className="label text-dark-title">$ 1000.00</span>
              </div>
              <div className="flex-between">
                <span className="label">Total voucher discount</span>
                <span className="label text-red">$ 1000.00</span>
              </div>
              <div className="flex-between">
                <span className="label">Total payment</span>
                <span className="text-red text-xl">$ 1000.00</span>
              </div>
            </div>
          </div>
          <div className="flex-between mt-5">
            <span className="">
              Clicking "Order" means you agree to abide by{' '}
              <b className="font-[600]">Elma's Terms</b>
            </span>
            <Button
              variant="contained"
              className="bg-dark-indigo text-white rounded-md w-50"
            >
              Order
            </Button>
          </div>
        </Card>

        {/* Modal change delivery address */}
        <Modal
          open={isDeliveryAddressOpen}
          onCancel={handleCancleDeliveryModal}
          onClose={() => handleCancleDeliveryModal}
          onOk={handleOkDeliveryModal}
          loading={loadingOpenDeliveryAddress}
          title={'My delivery addresses'}
          bodyStyle={{
            maxHeight: '60vh',
            overflowY: 'auto',
          }}
        >
          <Divider />
          <Radio.Group
            className="flex flex-col justify-start items-start"
            options={address}
          />
          <Button
            onClick={handleClickAddNewAddress}
            variant="outlined"
            className="m-4 text-indigo gap-x-2"
          >
            <i className="mr-1 fa-solid fa-plus"></i>
            Add new address
          </Button>
          <Divider />
        </Modal>

        {/* Modal update delivery address */}
        <Modal
          title="Update address"
          open={isUpdateAddressOpen}
          onCancel={handleCancelUpdateAddressModal}
          onClose={handleCancelUpdateAddressModal}
          //   onOk={}
        >
          <Form form={form} layout="vertical" onValuesChange={() => {}}>
            <div className="flex justify-between">
              <Form.Item className="w-[220px]" label="Full name" name={'name'}>
                <Input placeholder="" />
              </Form.Item>
              <Form.Item
                className="w-[220px]"
                label="Phone number"
                name={'phone'}
              >
                <Input placeholder="" />
              </Form.Item>
            </div>
            <Form.Item label="Province/City, District, Ward" name={'address'}>
              <Input placeholder="" />
            </Form.Item>
            <Form.Item label="Address detail" name={'address-detail'}>
              <Input placeholder="" />
            </Form.Item>
          </Form>
        </Modal>

        {/* Modal change delivery methods */}
        <Modal
          open={isChangeDeliveryMethodOpen}
          onCancel={handleCloseDeliveryMethod}
          onClose={handleCloseDeliveryMethod}
          onOk={handleOkDeliveryMethod}
          title="Select delivery method"
          // footer={[]}
        >
          <Tabs
            defaultActiveKey="1"
            items={tabItems}
            onChange={handleOnchangeTab}
          />
        </Modal>

        {/* Modal select shop voucher */}
        <Modal
          open={isSelectShopVoucherOpen}
          onCancel={handleCloseSelectShopVoucherModal}
          onClose={handleCloseSelectShopVoucherModal}
          onOk={handleOkSelectShopVoucherModal}
          title={`${selectedShop ?? ''} Voucher`}
        >
          {/* Apply voucher code */}
          <Affix offsetTop={100}>
            <div className="rounded-sm bg-white-lighter p-4">
              <div className="inline-flex items-center justify-around space-x-2 w-full">
                <span className="label text-dark-title">Voucher code</span>
                <Input placeholder="" className="!w-[250px]" />
                <Button
                  type="submit"
                  className="text-white h-8 flex items-center"
                >
                  Apply
                </Button>
              </div>
            </div>
          </Affix>
          {[1, 2, 3, 4].map(voucher => (
            <div className="">
              <Badge.Ribbon
                placement="end"
                text="x3"
                color="red"
                className="!rounded-s-full !text-xs"
              >
                <Badge.Ribbon
                  className="!text-xs"
                  placement="start"
                  text="Best choice"
                  color="green"
                >
                  <div className="flex border-[1.2px] rounded-sm p-2 pl-0 my-2 shadow-lg">
                    <div className=" border-r border-dashed object-contain">
                      <div className="relative flex items-center flex-col">
                        <img src="images/Apple.png" alt="" />
                        <div className="absolute bottom-0 right-5 mt-[-20px]">
                          <ElmaShopTag rank={1} />
                        </div>
                      </div>
                    </div>
                    <div className="flex-between w-full pl-3 pr-1">
                      <div className="flex flex-col">
                        <h5 className="text-dark-title font-[600]">
                          Discount $10
                        </h5>
                        <span className="text-sm">Minimum Order $100</span>
                        <Tag className="w-fit" color="red">
                          <span className="text-xs">Certain products</span>
                        </Tag>
                        <div className="space-x-2">
                          <span className="label text-xs">
                            Expiry date: 31.07.2025
                          </span>
                          <Button variant="link" className="text-indigo">
                            Conditions
                          </Button>
                        </div>
                      </div>
                      <Radio value={1} checked />
                      <Button className="!py-1 rounded-xs text-white">
                        Save
                      </Button>
                    </div>
                  </div>
                </Badge.Ribbon>
              </Badge.Ribbon>

              <div className="bg-yellow/10 px-4 py-2 rounded-sm">
                <i className="fa-solid fa-circle-info text-indigo mr-1"></i>
                {/* Cannot use */}
                <span className="text-indigo text-xs">
                  The selected product does not meet the Voucher's conditions.
                </span>

                {/* Buy more */}
                <span className="text-indigo text-xs">
                  Buy $100 more to use Voucher
                </span>
              </div>
            </div>
          ))}
          <div className="border-t flex space-x-2 ">
            <span className="">1 voucher has been selected</span>
            <span className="text-red font-[550]">Save $10</span>
          </div>

          {/* No voucher */}
          <div className="flex-center flex-col space-y-1">
            <DiscountIcon />
            <h5 className="text-dark-lighter">
              There are no vouchers for the shop yet.
            </h5>
            <span className="label">
              Enter a valid coupon code in the bar above
            </span>
          </div>
        </Modal>

        {/* Modal select platform voucher */}
        <Modal
          open={isSelectPlatformVoucherOpen}
          onCancel={handleCloseSelectPlatformVoucherModal}
          onOk={handleOkSelectPlatformVoucherModal}
          closable={false}
          title={
            <div className="flex-between">
              <h4 className="">Elma Voucher</h4>
              <Tooltip
                title={
                  <div className="text-dark-lightest flex flex-col space-y-2">
                    <span className="text-sm font-medium text-dark-title">
                      How to Use Voucher
                    </span>
                    <span className="text-xs">
                      To be able to apply the Elma voucher code, select the
                      "Save" button to get the voucher to your voucher wallet.
                    </span>
                    <span className="text-sm font-medium text-dark-title">
                      How to Find Voucher
                    </span>
                    <span className="text-xs">
                      You can find Elma Voucher throughout elma.vn and Elma app.
                      Here's a tip for you, start with the promotion pages and
                      the shop's homepage!
                    </span>
                  </div>
                }
                placement="bottom"
                color="white"
              >
                <div className="flex-center cursor-pointer">
                  <span className="label">Support</span>
                  <i className="fa-solid fa-circle-info text-dark-lightest ml-1"></i>
                </div>
              </Tooltip>
            </div>
          }
        >
          {/* Free shipping voucher */}
          <h5 className="text-dark-title">Free shipping code</h5>
          <div className="">
            <Badge.Ribbon
              placement="end"
              text="x3"
              color="red"
              className="!rounded-s-full !text-xs"
            >
              <div className="flex border-[1.2px] rounded-sm  pl-0 my-2 shadow-lg">
                <div className="bg-teal w-32 h-26 border-r flex-center flex-col border-dashed object-contain">
                  <div className=" flex italic uppercase text-white font-extrabold items-center flex-col">
                    {/* <img src="images/Apple.png" alt="" /> */}
                    <span className="">Free</span>
                    <span className="">Ship</span>
                  </div>
                  {/* <span className="text-white font-medium">Elma live</span> */}
                </div>
                <div className="flex-between p-2 w-full pl-3 pr-1">
                  <div className="flex flex-col">
                    <h5 className="text-dark-title font-[600]">Discount $10</h5>
                    <span className="text-sm">Minimum Order $100</span>
                    <Tag className="w-fit" color="red">
                      <span className="text-xs">Certain products</span>
                    </Tag>
                    <div className="space-x-2">
                      <span className="label text-xs">
                        Expiry date: 31.07.2025
                      </span>
                      <Button variant="link" className="text-indigo">
                        Conditions
                      </Button>
                    </div>
                  </div>
                  <Radio value={1} checked />
                  <Button className="!py-1 rounded-xs text-white">Save</Button>
                </div>
              </div>
            </Badge.Ribbon>

            <div className="bg-yellow/10 px-4 py-2 rounded-sm">
              <i className="fa-solid fa-circle-info text-indigo mr-1"></i>
              {/* Cannot use */}
              <span className="text-indigo text-xs">
                The selected product does not meet the Voucher's conditions.
              </span>

              {/* Buy more */}
              <span className="text-indigo text-xs">
                Buy $100 more to use Voucher
              </span>
            </div>
          </div>

          {/* Discount voucher */}
          <h5 className="text-dark-title">Discount voucher</h5>
          <div className="">
            <Badge.Ribbon
              placement="end"
              text="x3"
              color="red"
              className="!rounded-s-full !text-xs"
            >
              <Badge.Ribbon
                className="!text-xs"
                placement="start"
                text="Best choice"
                color="green"
              >
                <div className="flex border-[1.2px] rounded-sm p-2 pl-0 my-2 shadow-lg">
                  <div className=" border-r border-dashed object-contain">
                    <div className="relative flex items-center flex-col">
                      <img src="images/Apple.png" alt="" />
                      <div className="absolute bottom-0 right-5 mt-[-20px]">
                        <ElmaShopTag rank={1} />
                      </div>
                    </div>
                  </div>
                  <div className="flex-between w-full pl-3 pr-1">
                    <div className="flex flex-col">
                      <h5 className="text-dark-title font-[600]">
                        Discount $10
                      </h5>
                      <span className="text-sm">Minimum Order $100</span>
                      <Tag className="w-fit" color="red">
                        <span className="text-xs">Certain products</span>
                      </Tag>
                      <div className="space-x-2">
                        <span className="label text-xs">
                          Expiry date: 31.07.2025
                        </span>
                        <Button variant="link" className="text-indigo">
                          Conditions
                        </Button>
                      </div>
                    </div>
                    <Radio value={1} checked />
                    <Button className="!py-1 rounded-xs text-white">
                      Save
                    </Button>
                  </div>
                </div>
              </Badge.Ribbon>
            </Badge.Ribbon>

            <div className="bg-yellow/10 px-4 py-2 rounded-sm">
              <i className="fa-solid fa-circle-info text-indigo mr-1"></i>
              {/* Cannot use */}
              <span className="text-indigo text-xs">
                The selected product does not meet the Voucher's conditions.
              </span>

              {/* Buy more */}
              <span className="text-indigo text-xs">
                Buy $100 more to use Voucher
              </span>
            </div>
          </div>
        </Modal>
      </Wrapped>
    </MainLayout>
  );
};

export default Checkout;
