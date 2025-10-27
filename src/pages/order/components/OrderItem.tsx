import { ElmaShopTag } from '@/components/Tag';
import { Button, Card, Divider } from 'antd';
import { Order } from '../types/OrderItem';
import { useNavigate } from 'react-router';

const OrderItem = ({ data }: { data: Partial<Order> }) => {
  const navigate = useNavigate();
  const product = {
    id: 1,
    name: 'Macbook Pro 2018',
    quantity: 1,
    image: 'images/Macbook Pro 2018 1.png',
    price: 1500,
    priceAfterDiscount: 1450,
    finalPrice: 1250,
  };
  function handleOnClickChatNow(storeId: string) {
    navigate(`chat?${storeId}`);
  }
  function handleOnClickViewStore() {}
  const handleOnClickOrderTrackingDetail = () => {
    navigate('/order-tracking-detail');
  };
  return (
    <Card className="!my-4">
      <div className="border-b flex-between">
        <div className="flex items-center">
          <ElmaShopTag rank={data?.store?.rank ?? 0} />
          <h5 className="text-dark-title">{data?.store?.name ?? ''}</h5>
          <Divider className="h-full" type="vertical" />
          <Button
            onClick={() => handleOnClickChatNow(data?.store?.storeId ?? '')}
            variant="text"
            className="!text-teal !p-0 !bg-white !border-none"
          >
            <i className="fa-solid fa-comments mr-1"></i>
            <span className="">Chat now</span>
          </Button>
          <Button
            onClick={handleOnClickViewStore}
            variant="text"
            className="!border-none"
          >
            <span className="text-dark-label">
              <i className="fa-solid fa-shop mr-1"></i>View store
            </span>
          </Button>
        </div>
        <div className="flex-center">
          {data?.statusDescription && (
            <div
              className="cursor-pointer"
              onClick={handleOnClickOrderTrackingDetail}
            >
              <span className="text-teal">
                <i className="fa-solid fa-truck-fast mr-1"></i>
                {data.statusDescription}
                <i className="ml-1 cursor-pointer text-xs text-dark-label fa-regular fa-circle-question"></i>
              </span>
              <Divider type="vertical" />
            </div>
          )}
          <span className="uppercase text-indigo">{data?.status ?? ''}</span>
        </div>
      </div>
      <div className="flex-between border-b">
        <div className="flex-center">
          <div className="flex-center">
            <img
              src={product?.image ?? ''}
              alt=""
              className="object-contain w-[100px] h-[100px]"
            />
          </div>
          <div className="flex flex-col">
            <span className="">{product?.name ?? ''}</span>
            <span className="">x{product?.quantity ?? ''}</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <span className="text-dark-lightest line-through text-">
            ${product?.price ?? 0}.00
          </span>
          <span className="text-red">
            ${product?.priceAfterDiscount ?? 0}.00
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-2 justify-end my-4">
        <span className="">Total: </span>
        <span className="text-red text-lg">${data?.totalAmount ?? 0}.00</span>
      </div>
      <div className="flex-between">
        <span className="w-[500px] text-xs text-dark-lightest">
          Please only click "Received" when the order has been delivered to you
          and the product received is without any problems.
        </span>
        <div className="flex space-x-2">
          <Button className="">Received</Button>
          <Button variant="outlined" className="">
            Return/Refund Request
          </Button>
          <Button className="">Contact Seller</Button>
        </div>
      </div>
    </Card>
  );
};

export default OrderItem;
