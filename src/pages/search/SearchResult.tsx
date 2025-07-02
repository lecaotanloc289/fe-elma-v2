import { Button } from '@/component';
import Wrapped from '@/component/Wrapped';
import MainLayout from '@/views/MainLayout';
import { Breadcrumb, Checkbox, Divider, GetProp, Select } from 'antd';
import { randomInt, randomUUID } from 'crypto';
import React, { useCallback } from 'react';

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
  const filterSidebarData = {
    popularFilters: [
      {
        label: '⭐ 4 star or upper',
        value: '4_star_or_upper',
      },
      {
        label: 'Same day delivery',
        value: 'same_day_delivery',
      },
      {
        label: 'Super seller',
        value: 'super_seller',
      },
      {
        label: 'Sale Product',
        value: 'sale_product',
      },
    ],
    categories: [
      {
        icon: 'images/category/Headphones.png',
        name: 'Category 01',
        value: 'category_01',
      },
      {
        icon: 'images/category/Computer.png',
        name: 'Item Category 02',
        value: 'item_category_02',
      },
      {
        icon: 'images/category/Phone.png',
        name: 'Category list 03',
        value: 'category_list_03',
      },
      {
        icon: 'images/category/Healthy.png',
        name: 'Category 04',
        value: 'category_04',
      },
      {
        icon: 'images/category/Camera.png',
        name: 'Item Category 05',
        value: 'item_category_05',
      },
      {
        icon: 'images/category/Mens fashion.png',
        name: 'Category list 06',
        value: 'category_list_06',
      },
    ],
    seeAllLink: {
      text: 'See all categories',
      url: '#', // cập nhật URL thực tế nếu có
    },
  };
  const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (
    checkedValues,
  ) => {
    console.log('checked = ', checkedValues);
  };

  const [selectedColor, setSelectedColor] = React.useState<string | null>(null);
  const handleOnChangeColor = useCallback((color: string) => {
    setSelectedColor(color);
    console.log(color);
  }, []);

  const colors = [
    { id: 1, color: 'blue' },
    { id: 2, color: 'green' },
    { id: 3, color: 'purple' },
    { id: 4, color: 'teal' },
    { id: 5, color: 'indigo' },
    { id: 6, color: 'yellow' },
    { id: 7, color: 'orange' },
    { id: 8, color: 'red' },
  ];

  const filterOption = [
    { id: 1, lable: 'highest_rating', value: 'Highest rating' },
  ];

  const store = {
    id: 1,
    image: 'images/Apple.png',
    feature: 'Featured store',
    name: 'Apple Store Official',
    product_sold: '10,5k',
    store_rating: 4.6,
  };

  const products = [
    {
      id: 1,
      name: 'Macbook Pro 2018',
      price: 1725.0,
      currency: 'USD',
      store: 'Apple Store Official',
      rating: 4.6,
      image: '/images/Macbook Pro 2018 1.png',
      backgroundColor: 'bg-green',
    },
    {
      id: 2,
      name: 'Macbook Pro 2018',
      price: 1725.0,
      currency: 'USD',
      store: 'Apple Store Official',
      rating: 4.6,
      image: '/images/Macbook Pro 2018 1.png',
      backgroundColor: 'bg-blue',
    },
  ];

  const search_results = [
    {
      id: 1,
      name: 'Macbook Pro 2018',
      price: 1725.0,
      sale: true,
      currency: 'USD',
      store: 'Apple Store Official',
      rating: 4.6,
      image: 'images/Macbook Pro 2018 1.png',
      favorite: true,
    },
    {
      id: 2,
      name: 'Macbook Pro 2018',
      price: 1725.0,
      sale: true,
      currency: 'USD',
      store: 'Apple Store Official',
      rating: 4.6,
      image: 'images/Macbook Pro 2018 2.png',
      favorite: false,
    },
    {
      id: 3,
      name: 'Macbook Pro 2018',
      price: 1725.0,
      sale: true,
      currency: 'USD',
      store: 'Apple Store Official',
      rating: 4.6,
      image: 'images/Macbook Pro 2018 3.png',
      favorite: true,
    },
    {
      id: 4,
      name: 'Macbook Pro 2018',
      price: 1725.0,
      sale: true,
      currency: 'USD',
      store: 'Apple Store Official',
      rating: 4.6,
      image: '/images/Macbook Pro 2018 2.png',
      favorite: false,
    },
    {
      id: 5,
      name: 'Macbook Pro 2018',
      price: 1725.0,
      sale: true,
      currency: 'USD',
      store: 'Apple Store Official',
      rating: 4.6,
      image: '/images/Macbook Pro 2018 3.png',
      favorite: true,
    },
    {
      id: 6,
      name: 'Macbook Pro 2018',
      price: 1725.0,
      sale: true,
      currency: 'USD',
      store: 'Apple Store Official',
      rating: 4.6,
      image: '/images/Macbook Pro 2018 1.png',
      favorite: false,
    },
    {
      id: 7,
      name: 'Macbook Pro 2018',
      price: 1725.0,
      sale: true,
      currency: 'USD',
      store: 'Apple Store Official',
      rating: 4.6,
      image: '/images/Macbook Pro 2018 3.png',
      favorite: true,
    },
    {
      id: 8,
      name: 'Macbook Pro 2018',
      price: 1725.0,
      sale: true,
      currency: 'USD',
      store: 'Apple Store Official',
      rating: 4.6,
      image: '/images/Macbook Pro 2018 1.png',
      favorite: false,
    },
    {
      id: 9,
      name: 'Macbook Pro 2018',
      price: 1725.0,
      sale: true,
      currency: 'USD',
      store: 'Apple Store Official',
      rating: 4.6,
      image: '/images/Macbook Pro 2018 2.png',
      favorite: true,
    },
  ];

  return (
    <MainLayout>
      <Wrapped className="py-12">
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
              <button className="rounded-md w-[46px] h-[46px] mt-1.25 flex-center !bg-white">
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
        <Divider />
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col border-white-enough-light border rounded-md">
            <div className="pt-[22px] px-4 w-[255px]">
              <h4 className="text-[20px] font-bold text-dark-title leading-6 tracking-[0.2px]">
                Filter Options
              </h4>
              <div className="space-y-2 my-4">
                <p className="font-[500] text-dark-title">Popular Filter</p>
                <Checkbox.Group
                  className="!space-y-4"
                  options={filterSidebarData.popularFilters}
                  onChange={onChange}
                />
              </div>
            </div>
            <Divider />
            <div className="px-4">
              <p className="font-[500] text-dark-title">Category</p>
              <div className="space-y-4 mt-4">
                {filterSidebarData?.categories?.map((category) => (
                  <div
                    key={`${category.name}-${category.icon}`}
                    className="space-x-4 flex cursor-pointer"
                  >
                    <img
                      src={category?.icon ?? ''}
                      alt={category?.name ?? ''}
                      className=""
                      width={22}
                      height={22}
                    />
                    <div className="flex-between w-full">
                      <h5 className="text-dark-label">
                        {category?.name ?? ''}
                      </h5>
                      <i className="fa-solid fa-chevron-down text-white-dark-light"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Divider />
            <div className="px-4">
              <p className="font-[500] text-dark-title">Price Value</p>
              <div className="flex-between my-3 border border-white-enough-light rounded-md">
                <div className="flex-center bg-white-enough-light w-[52px] h-[42px] rounded-md">
                  <img src="images/Dollar.png" alt="" />
                </div>
                <input
                  placeholder="Set Min. Price"
                  type="number"
                  className="h-[42px] focus:outline-none focus:ring-0 focus:border-none"
                />
              </div>
              <div className="flex-between my-3 border border-white-enough-light rounded-md">
                <div className="flex-center bg-white-enough-light w-[52px] h-[42px] rounded-md">
                  <img src="images/Dollar.png" alt="" />
                </div>
                <input
                  placeholder="Set Max. Price"
                  type="number"
                  className="h-[42px] focus:outline-none focus:ring-0 focus:border-none"
                />
              </div>
              <div className="flex justify-start gap-x-3">
                <button className="rounded-2xl h-10 border !border-white-enough-light !bg-white">
                  <p className="text-indigo font-[400]">$ 0 - 150</p>
                </button>
                <button className="rounded-2xl h-10 border !border-white-enough-light !bg-white">
                  <p className="text-indigo font-[400]">$ 150 - 300</p>
                </button>
              </div>
              <div className="flex justify-start gap-x-3 mt-3">
                <button className="rounded-2xl h-10 border !border-white-enough-light !bg-white">
                  <p className="text-dark-label font-[400]">$ 300 - 500</p>
                </button>
                <button className="rounded-2xl h-10 border !border-white-enough-light !bg-white">
                  <p className="text-dark-label font-[400]">$ 500 - 1k</p>
                </button>
              </div>
            </div>
            <Divider />
            <div className="px-4">
              <p className="font-[500] text-dark-title ">Product Color</p>
              <div className="p-6">
                <div className="grid grid-cols-4 gap-4">
                  {colors.map((color) => (
                    <div
                      key={`${color.id}-${color.color}`}
                      onClick={() => handleOnChangeColor(color?.color)}
                      className={`bg-${color.color} cursor-pointer w-6 h-6 rounded-full ${
                        selectedColor === color?.color
                          ? `ring-1 ring-${color} ring-offset-4`
                          : ''
                      }`}
                    />
                  ))}
                  {/* <div className="bg-purple"></div> */}
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex-between">
              <p className="text-dark-label font-normal text-[16px]">
                Shown 1-20 item from 500 total for ‘macbook pro’
              </p>
              <div className="flex-center">
                <p className="text-dark-label font-normal text-[16px]">
                  Sort by:{' '}
                </p>
                <Select
                  className="w-[200px] !h-[52px] font-bold bg-white-lighter !text-dark-title"
                  placeholder="Filled"
                  variant="filled"
                  options={filterOption}
                  defaultValue={'Highest rating'}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 pt-4">
              <div className="flex-center flex-col py-4 m-4">
                <img
                  src={store.image ?? ''}
                  alt={store?.name ?? ''}
                  className=""
                  width={64}
                  height={64}
                />
                <p className="text-green font-[400]">
                  <i className="fa-solid fa-award"></i> {store?.feature ?? ''}
                </p>
                <span className="text-[18px] font-bold leading-5 tracking-[0.2px] text-dark-title my-4">
                  {store?.name ?? ''}
                </span>
                <div className="rounded-md bg-white-lighter flex justify-around p-4 space-x-6 w-full">
                  <div className="flex-center flex-col gap-y-2">
                    <p className="font-bold">{store?.product_sold}</p>
                    <span className="text-[12px] leading-4.5 text-dark-light">
                      Product sold
                    </span>
                  </div>
                  <div className="flex-center flex-col gap-y-2">
                    <p className="font-bold">
                      <i className="fa-solid fa-star text-yellow mr-1"></i>
                      {store?.store_rating}
                    </p>
                    <span className="text-[12px] leading-4.5 text-dark-light">
                      Store rating
                    </span>
                  </div>
                </div>
                <Button
                  variant="contained"
                  className="text-white my-6 space-x-1 w-full"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>View Store</span>
                </Button>
              </div>
              {products?.map((product) => (
                <div
                  key={`${product.id}-${product.name}`}
                  className={`m-4 rounded-md  ${product?.backgroundColor ?? ''}/10`}
                >
                  <div className="flex-center pt-20 pb-10">
                    <img src={product?.image ?? ''} alt="" className="" />
                  </div>
                  <div className="m-4">
                    <div className="flex-between">
                      <h6 className="text-green font-[500]">
                        ${product?.price ?? 0}
                      </h6>
                      <button className="rounded-full w-7.5 h-7.5 text-white-dark-light flex-center !p-0">
                        <i className="fa-solid fa-heart w-4 h-4"></i>
                      </button>
                    </div>
                    <span className="text-[18px] leading-6 font-[500] text-dark-title">
                      {product?.name ?? ''}
                    </span>
                    <div className="flex-between mt-2">
                      <div className="space-x-2 flex-center">
                        <i className="fa-solid fa-store text-dark-lightest w-4 h-4"></i>
                        <span className="text-[12px] leading-4.5 text-dark-label">
                          {product?.store ?? ''}
                        </span>
                      </div>
                      <div className="space-x-2 flex-center">
                        <i className="fa-solid fa-star text-yellow"></i>
                        <span className="text-[12px] leading-4.5 text-dark-label">
                          {product?.rating ?? ''}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Divider />
            <div className="grid grid-cols-3 w-full">
              {search_results?.map((result) => (
                <div
                  key={`${result.id}-${result.image}}`}
                  className={`m-4 rounded-md bg-white-lighter`}
                >
                  <div className="flex justify-end">
                    <button className="rounded-full w-7.5 h-7.5 text-white-dark-light  flex-center !p-0 shadow-xl mt-4 mr-4">
                      <i className="fa-solid fa-heart w-4 h-4"></i>
                    </button>
                  </div>
                  <div className="flex-center pt-10 pb-10">
                    <img src={result?.image ?? ''} alt="" className="" />
                  </div>
                  <div className="m-4">
                    <div className="flex-between">
                      <h6 className="text-green font-[500]">
                        ${result?.price ?? 0}
                      </h6>
                      {result?.sale ? (
                        <span className="w-[49px] h-[24px] bg-red/10 font-bold text-red text-[12px] leading-[18px] rounded-sm px-2 py-1">
                          SALE
                        </span>
                      ) : (
                        <div></div>
                      )}
                    </div>
                    <span className="text-[18px] leading-6 font-[500] text-dark-title">
                      {result?.name ?? ''}
                    </span>
                    <div className="flex-between mt-2">
                      <div className="space-x-2 flex-center">
                        <i className="fa-solid fa-store text-dark-lightest w-4 h-4"></i>
                        <span className="text-[12px] leading-4.5 text-dark-label">
                          {result?.store ?? ''}
                        </span>
                      </div>
                      <div className="space-x-2 flex-center">
                        <i className="fa-solid fa-star text-yellow"></i>
                        <span className="text-[12px] leading-4.5 text-dark-label">
                          {result?.rating ?? ''}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapped>
    </MainLayout>
  );
};

export default SearchResult;
