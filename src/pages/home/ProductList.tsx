import Wrapped from '@/component/Wrapped';
import { data } from '@/constants';
import { Rate } from 'antd';

const ProductList = () => {
  return (
    <Wrapped className="flex-between my-12.5">
      {data.home.productLists.map((list) => (
        <div className="flex flex-col w-[350px] gap-y-5 ">
          <div className="">
            <h4 className="">{list.title}</h4>
          </div>
          {list.products.map((product) => (
            <div className="cursor-pointer flex items-center justify-start gap-5 m-5">
              <img src={product?.image ?? ''} alt="" className="h-16" />
              <div className="">
                <h5 className="text-dark-title">{product?.name ?? ''}</h5>
                <div className="flex justify-start items-center gap-x-2">
                  <p className="text-indigo font-normal">
                    ${product?.price ?? ''}
                  </p>
                  <div>
                    <i className="fa-solid fa-star text-yellow"></i>
                    <span>{product?.rating ?? 0}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex-between p-3">
            <h5 className="font-bold text-blue">View More Products...</h5>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      ))}
    </Wrapped>
  );
};

export default ProductList;
