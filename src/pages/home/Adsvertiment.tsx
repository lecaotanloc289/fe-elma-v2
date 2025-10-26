import Wrapped from '@/component/Wrapped';
import { data } from '@/constants';
import { Divider } from 'antd';

const Adsvertiment = () => {
  const productInfo = data.home.adsvertiment.productInfo;

  return (
    <Wrapped>
      <div className="flex justify-around items-center bg-teal/10 rounded-md w-[1110] h-[253] my-10">
        <div className="">
          <img
            src="./images/lap.png"
            width={350}
            height={340}
            alt=""
            className=""
          />
        </div>
        <div className="max-w-[377px]">
          <p className="text-teal font-bold">{productInfo.saleTag}</p>
          <h2 className="mt-4">{productInfo?.name ?? ''}</h2>
          <h6 className="text-dark-text">{productInfo?.description ?? ''}</h6>
          <div className="mt-4">
            <button className="!bg-teal rounded-md text-white font-bold !hover:bg-teal/80 mr-4">
              {productInfo?.callToAction ?? ''}
            </button>
            <span className="text-[20px] leading-[28px] text-dark-text font-[500] line-through">
              ${productInfo?.price?.original ?? ''}
            </span>
          </div>
        </div>
      </div>
      <Divider />
    </Wrapped>
  );
};

export default Adsvertiment;
