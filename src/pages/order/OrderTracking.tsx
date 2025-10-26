import Wrapped from '@/component/Wrapped';
import MainLayout from '@/views/MainLayout';
import { Tabs, type TabsProps } from 'antd';
import OrderItem from './components/OrderItem';
import { data } from '@/constants';

const OrderTracking = () => {
  const onChangeTabs = (key: string) => {
    console.log(key);
  };

  const dataOrders = data.order.dataOrders;

  const itemTabs: TabsProps['items'] = [
    {
      key: 'all',
      label: 'All',
      children: (
        <div className="">
          {dataOrders.map(order => (
            <OrderItem data={order} />
          ))}
        </div>
      ),
    },
    {
      key: 'pendingPayment',
      label: 'Pending Payment',
      children: null,
    },
    {
      key: 'shipping',
      label: 'Shipping (1)',
      children: null,
    },
    {
      key: 'awaitingDelivery',
      label: 'Awaiting Delivery (1)',
      children: null,
    },
    {
      key: 'completed',
      label: 'Completed',
      children: null,
    },
    {
      key: 'cancelled',
      label: 'Cancelled',
      children: null,
    },
    {
      key: 'returned',
      label: 'Returns/Refunds',
      children: null,
    },
  ];

  return (
    <MainLayout>
      <Wrapped>
        <Tabs
          className="!w-full"
          defaultActiveKey="1"
          items={itemTabs}
          onChange={onChangeTabs}
          size="large"
        />
        <div className="my-10 w-full"></div>
      </Wrapped>
    </MainLayout>
  );
};

export default OrderTracking;
