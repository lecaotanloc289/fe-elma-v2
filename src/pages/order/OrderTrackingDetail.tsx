import { Button } from '@/component';
import Wrapped from '@/component/Wrapped';
import { data } from '@/constants';
import { useMessageApi } from '@/services/hooks';
import MainLayout from '@/views/MainLayout';
import { Card, Collapse, CollapseProps, Divider, Steps } from 'antd';
import { useNavigate } from 'react-router';

const OrderTracking = () => {
  const navigate = useNavigate();
  const message = useMessageApi();
  const orderTrackingDetail = data.order_tracking_detail;
  function handleCopyOrderId(orderId: string) {
    navigator.clipboard
      .writeText(orderId)
      .then(() => {
        message.success('Copied order id');
      })
      .catch(error => {
        console.error('Error copy: ', error);
      });
  }
  const items = [
    {
      title: 'Order payed',
      icon: <i className="fa-solid fa-money-check-dollar text-indigo"></i>,
    },
    {
      title: 'Packed',
      icon: <i className="fa-solid fa-bag-shopping"></i>,
    },
    {
      title: 'On shipping',
      icon: <i className="fa-solid fa-truck-fast"></i>,
    },
    {
      title: 'Received',
      icon: <i className="fa-solid fa-box-archive"></i>,
    },
    {
      title: 'Review',
      icon: <i className="fa-solid fa-star"></i>,
    },
  ];

  const children = orderTrackingDetail.tracking_steps.map((step, index) => (
    <div
      className={`p-4 flex-between ${index % 2 == 0 ? 'bg-white-lighter' : ''}`}
    >
      <div className="flex-center gap-x-4">
        <div className="rounded-full border border-[#979797] w-4 h-4"></div>
        <span className="label text-dark-title">{step?.description ?? ''}</span>
      </div>
      <span className="label">
        {step?.date ?? ''} - {step?.time ?? ''}
      </span>
    </div>
  ));
  const collabseItems: CollapseProps['items'] = [
    {
      key: '1',
      label: <h5 className="text-dark-title font-[600]">Track detail</h5>,
      children: <div>{children}</div>,
      //   extra: genExtra(),
    },
  ];

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <MainLayout>
      <Wrapped>
        <div className="mt-10 mb-20">
          {/* Heading */}
          <div className="flex-between mb-10">
            <h2 className="">Order tracking</h2>
            <Button
              onClick={() => navigate('/')}
              variant="outlined"
              className="text-indigo space-x-2"
            >
              <i className="fa-solid fa-home"></i>
              Go to Homepage
            </Button>
          </div>
          <div className="flex justify-between">
            {/* Tracking package */}
            <Card className="w-[730px] p-4">
              <div className="flex-between">
                <div className="flex flex-col space-y-4">
                  <span className="font-bold text-[20px] leading-6 tracking-[0.2px] text-dark-title">
                    Your package in..
                  </span>
                  <span className="label text-dark-text">
                    Will sent to 5690 Matilda Green Suite 627, New York, 12345
                  </span>
                </div>
                <div className="flex flex-col p-3 bg-white-lighter rounded-md">
                  <span className="text-[14px] leading-5 text-dark-title">
                    Order ID:
                  </span>
                  <div className="space-x-4 ">
                    <span className="label">200715DXFMW0UD</span>
                    <button
                      className=""
                      onClick={() => handleCopyOrderId('200715DXFMW0UD')}
                    >
                      <i className="fa-regular fa-copy"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <Steps
                  className=" !mt-10"
                  current={1}
                  labelPlacement="vertical"
                  items={items}
                />
              </div>
              <Divider />
              <div className="">
                <Collapse
                  ghost
                  defaultActiveKey={['1']}
                  onChange={onChange}
                  expandIconPosition={'end'}
                  items={collabseItems}
                />
              </div>
              <Divider />
              <div className="p-5 flex-between bg-indigo/10 rounded-md">
                <div className="space-y-2">
                  <h5 className="text-dark-title font-[500]">
                    Have been trouble on your package?
                  </h5>
                  <span className="label">
                    You can call us. We can help solve your problem
                  </span>
                </div>
                <Button
                  variant="contained"
                  className="flex-center text-white gap-x-2"
                >
                  <i className="fa-solid fa-phone"></i>
                  Call Us
                </Button>
              </div>
            </Card>

            {/* Inside package */}
            <Card className="w-[350px] p-4">
              <h5 className="text-dark-title">Inside package</h5>
              {orderTrackingDetail.products?.map(product => (
                <div className="">
                  <div
                    key={`${product.id}-${product.name}`}
                    className="flex items-center space-x-4 my-6"
                  >
                    <div className="flex-center w-20">
                      <img
                        src={product?.image ?? ''}
                        alt={product?.name ?? ''}
                        //   className="w-20 "
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="text-[18px] font-[550] leading-6 text-dark-label">
                        {product?.name ?? ''}
                      </span>
                      <div className="flex items-center justify-start gap-x-4">
                        <h5 className="text-green font-[500]">
                          ${product?.price ?? 0}
                        </h5>
                        <span className="label">
                          {product?.quantity > 1
                            ? `${product?.quantity} items`
                            : `${product?.quantity} item`}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Divider />
                </div>
              ))}
              <div className="">
                <span className="label font-[500]">Notes</span>
                <div className="p-4 rounded-md bg-white-lighter mt-3">
                  <span className="label text-dark-title">
                    On my package all is fragile item. Please prepare carefully
                  </span>
                </div>
              </div>
              <Divider />
              <div className="flex flex-col space-y-2">
                {orderTrackingDetail.bill_detail?.map(detail => (
                  <div className="flex-between">
                    <h5 className="text-dark-text">{detail?.label}</h5>
                    <h5 className="text-dark-title">
                      {detail?.value > 0 ? `$${detail?.value}` : '-'}
                    </h5>
                  </div>
                ))}
              </div>
              <Divider className="!m-2" />
              <div className="flex-between">
                <h5 className="text-dark-title font-[500]">Order Total</h5>
                <h5 className="text-dark-title font-[500]">$ 1610</h5>
              </div>
            </Card>
          </div>
        </div>
      </Wrapped>
    </MainLayout>
  );
};

export default OrderTracking;
