import Wrapped from '@/component/Wrapped';
import MainLayout from '@/views/MainLayout';
import { Breadcrumb } from 'antd';

const SearchResult = () => {
  const breadcrumb = [
    {
      href: '',
      title: <i className="fa-light fa-house"></i>,
    },
    {
      href: '',
      title: (
        <>
          {/* <UserOutlined /> */}
          <span>Macbook pro</span>
        </>
      ),
    },
  ];
  return (
    <MainLayout>
      <Wrapped>
        <div className="flex-between items-center">
          <div className="">
            <Breadcrumb items={breadcrumb} />
            <h2 className="">Search result for 'Macbook Pro'</h2>
          </div>

          <div className="flex space-x-4">
            <div className=" flex w-[110px] h-[58px] border-white-enough-light border rounded-md">
              <button className="w-[46px] h-[46px] !bg-dark-light rounded-md flex-center m-1.25">
                <i className="fa-solid fa-grid-2 text-white"></i>
              </button>
              <button className="rounded-md w-[46px] h-[46px] mt-1.25 flex-center">
                <i className="fa-solid fa-bars text-dark-ink"></i>
              </button>
            </div>
            <div className="flex-center">
              <button className=" h-[46px] space-x-2 !bg-dark-light rounded-md flex-center m-1.25">
                <i className="fa-solid fa-grid-2 text-white"></i>
                <span className="text-white">Product</span>
              </button>
              <button className="flex-center gap-x-2 !bg-white rounded-md border !border-white-enough-light h-[46px]">
                <i className="text-dark-lightest fa-solid fa-shop"></i>
                <h5 className="text-dark-text">Store</h5>
              </button>
            </div>
          </div>
        </div>
      </Wrapped>
    </MainLayout>
  );
};

export default SearchResult;
