import Heading from '@/components/Heading';
import Wrapped from '@/components/Wrapped';
import { data } from '@/constants';
import MainLayout from '@/views/MainLayout';
import { Breadcrumb, Divider } from 'antd';

const Category = () => {
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
          <span>Application List</span>
        </>
      ),
    },
    {
      title: 'Application',
    },
  ];
  return (
    <MainLayout>
      <div className="relative z-0">
        <div className="absolute inset-0 z-[-1] h-[260px] bg-white-lighter"></div>
        <Wrapped className="relative z-10">
          <div className="flex-between py-15">
            <Heading content={data.category.header} />
            <Breadcrumb items={breadcrumb} />
          </div>
          <div className="grid grid-cols-3 justify-center gap-10 mb-10 mx-auto">
            {data.category.productLists.map(list => (
              <div className="w-full flex-center">
                <div
                  className="rounded-md border w-[350px]"
                  key={list?.id ?? ''}
                >
                  <div
                    className={`rounded-md w-[310px] h-[180px] ${list?.background ?? ''} flex-center !m-5`}
                  >
                    <img src={list?.image ?? ''} alt="" />
                  </div>
                  <div className="flex-between !m-5">
                    <h4 className="">{list?.title ?? ''}</h4>
                    <p className={`font-bold text-${list?.itemsColor ?? ''}`}>
                      {list?.items ?? 0}
                    </p>
                  </div>
                  {list?.categories.map((category, index) => (
                    <div className="flex-between mx-5 my-6" key={index}>
                      <h5 className="text-dark-title">
                        {category?.name ?? ''}
                      </h5>
                      <p className="text-dark-text font-[500]">
                        {category?.quantity ?? 0}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Divider />
          <div className="">
            <Heading className="items-center" content={data.category.brand} />
            <div className="grid grid-cols-4 gap-10 py-12">
              {data.category.brandLists.map(brand => (
                <div
                  className={`rounded-md cursor-pointer flex-center`}
                  key={brand?.id}
                >
                  <img src={brand?.logo ?? ''} alt={brand?.brand_name ?? ''} />
                </div>
              ))}
            </div>
          </div>
        </Wrapped>
      </div>
    </MainLayout>
  );
};

export default Category;
