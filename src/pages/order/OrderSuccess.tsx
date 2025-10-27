import { Button } from '@/components';
import Wrapped from '@/components/Wrapped';
import MainLayout from '@/views/MainLayout';

const OrderSuccess = () => {
  return (
    <MainLayout>
      <Wrapped>
        <div className="flex-center flex-col py-20">
          <img
            src="images/OrderSuccess.png"
            width={100}
            height={100}
            alt=""
            className="pt-10 pb-9.5"
          />
          <h2 className="mb-3">Purchase Success!</h2>
          <span className="text-[14px] leading-6 text-dark-text items-center w-[730px] text-center">
            Thank’s for your order at Elma e-commerce. Your order will be
            processed as soon as possible. Make sure you make note of your order
            number, which is{' '}
            <b className="font-bold text-dark-title">1234ABCD56EF</b>. You will
            be receiving an email shortly with invoice from your order.
          </span>
          <div className="space-x-6 mt-5">
            <Button
              variant="outlined"
              className="!bg-white text-indigo space-x-2 items-center"
            >
              <i className="fa-solid fa-chevron-left"></i>
              <span> Back to shopping</span>
            </Button>
            <Button
              variant="contained"
              className="!bg-dark-indigo text-white space-x-2 items-cente"
            >
              <i className="fa-solid fa-truck-fast"></i>
              <span>Track your order</span>
            </Button>
          </div>
        </div>
      </Wrapped>
    </MainLayout>
  );
};

export default OrderSuccess;
