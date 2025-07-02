import { Button, IconButton } from '@/component';
import Wrapped from '@/component/Wrapped';
import MainLayout from '@/views/MainLayout';
import {
  Descriptions,
  DescriptionsProps,
  Divider,
  Image,
  Progress,
  Segmented,
  Select,
} from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import { useState } from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import Product from '@/component/Product';
const CustomSegmented = styled(Segmented)`
  .ant-segmented-item-selected {
    background-color: var(--color-dark-lighter);
    color: white;
  }
  .ant-segmented-item:active {
    background-color: var(--color-dark-lighter);
    color: white;
  }
  .ant-segmented-item {
    padding: 4px 10px;
    border-radius: 8px !important;
  }
`;

const CustomDescription = styled(Descriptions)`
  .ant-descriptions-item-label,
  .ant-descriptions-item-content {
    padding: 14px 20px !important;
  }
  .ant-descriptions-item-label {
    text-transform: capitalize;
  }
`;

const CustomSelect = styled(Select)`
  .ant-select-selector {
    background: var(--color-white-lighter);
  }
  .ant-select-selection-item {
    font-weight: 500;
  }
`;
const ProductDetail = () => {
  const descriptions: DescriptionsProps['items'] = [
    {
      span: 'filled',
      label: 'brand',
      children: 'Sony Alpha 7 Mark II',
    },
    {
      span: 'filled',
      label: 'resolution',
      children: '42MP Full-Frame Exmor R BSI CMOS Sensor',
    },
    {
      span: 'filled',
      label: 'video',
      children: 'UHD 4K30p Video with HLG & S-Log3 Gammas',
    },
    {
      span: 'filled',
      label: 'connectivity',
      children: 'Built-In Wi-Fi/Bluetooth, Dual SD Slots',
    },
    {
      span: 'filled',
      label: 'screen',
      children: '3.69M-Dot Tru-Finder OLED EVF',
    },
  ];
  const product_detail = {
    name: 'Sony Alpha Mirrorless 4K Video Camera (Body Only)',
    rating: 4.6,
    product_sold: 261,
    product_watched: 3100,
    description:
      "Sony α, is a camera system introduced on 5 June 2006. It uses and expands upon Konica Minolta camera technologies, including the Minolta AF SLR lens mount, whose assets were acquired by Sony after the end of Konica Minolta's photography operations in early 2006.",
    images: [
      { id: 1, image: 'images/Detail1.png' },
      { id: 2, image: 'images/Detail2.png' },
      { id: 3, image: 'images/Detail3.png' },
    ],
    type: [
      { id: 1, value: 'Body Only' },
      { id: 2, value: 'Full Camera' },
    ],
    color: [
      'Original',
      'Black',
      'Gray',
      // { id: 1, color: 'Original' },
      // { id: 2, color: 'Black' },
      // { id: 3, color: 'Gray' },
    ],
    price: 1999.99,
    overview: descriptions,
    whatsInsideBox: {
      items: [
        'Sony Alpha (Body Only)',
        'BC-QZ1 Battery Charger',
        'Lithium-Ion Battery (2280mAh)',
        'Cable Protector',
        'Shoulder Strap',
        'Accessory Shoe Cap',
        'ALC-B1EM Body Cap for E-Mount',
        'Eyepiece Cap',
        'USB Type-C Cable',
      ],
    },
    code: [
      { id: 1, label: 'SKU Number', content: 'AIM-36403-00426' },
      { id: 2, label: 'Product Code', content: 'MTA-6593742' },
      { id: 3, label: 'EAN Code', content: '[AIWBPU0301OL]' },
    ],
    rate: [
      { id: 1, rate: 5.0, quantity: 1500, percentage: 75 },
      { id: 2, rate: 4.0, quantity: 1500, percentage: 65 },
      { id: 3, rate: 3.0, quantity: 1500, percentage: 45 },
      { id: 4, rate: 2.0, quantity: 1500, percentage: 20 },
      { id: 5, rate: 1.0, quantity: 1500, percentage: 8 },
    ],
  };

  const commentFilters = [
    { label: '5 stars', value: 5 },
    { label: '4 stars & up', value: 4 },
    { label: '3 stars & up', value: 3 },
    { label: '2 stars & up', value: 2 },
    { label: '1 star only', value: 1 },
    { label: 'With photos', value: 'photo' },
    { label: 'With videos', value: 'video' },
    { label: 'Without media', value: 'none' },
    { label: 'Most helpful', value: 'helpful' },
    { label: 'Most recent', value: 'recent' },
    { label: 'Highest rating', value: 'high_rating' },
    { label: 'Lowest rating', value: 'low_rating' },
    { label: 'Last 7 days', value: '7d' },
    { label: 'Last 30 days', value: '30d' },
    { label: 'Last 6 months', value: '6m' },
    { label: 'Custom range', value: 'custom' },
    { label: 'All regions', value: 'all' },
    { label: 'Vietnam', value: 'vn' },
    { label: 'US', value: 'us' },
    { label: 'Others', value: 'other' },
  ];

  const [selectedImage, setSelectedImage] = useState(
    product_detail.images[1].image
  );
  const handleSelectedImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };
  const handleChangeType = () => {};
  const handleChangeColor = (value: any) => {
    console.log(value);
  };
  const [ellipsis, setEllipsis] = useState(true);

  return (
    <MainLayout>
      <Wrapped>
        <div className="mt-25 mb-12 flex-between">
          {/* Images */}
          <div className="flex-center flex-col">
            <Image width={445} src={selectedImage ?? ''} className="py-5" />
            <div className="flex-between space-x-2">
              {product_detail.images.map(detail => (
                <button
                  key={`${detail.id}-${detail.image}`}
                  className=""
                  onClick={() => handleSelectedImage(detail.image)}
                >
                  <img
                    width={130}
                    height={110}
                    src={detail?.image ?? ''}
                    alt=""
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="w-[540px]">
            <h2 className="">{product_detail?.name ?? ''}</h2>
            <section className="flex items-center space-x-4 my-5">
              <div className="flex-center bg-orange rounded-md text-white h-7.5 px-2">
                <i className="fa-solid fa-star"></i>
                <p className="font-[500] text-white">
                  {product_detail?.rating ?? 0}
                </p>
              </div>
              <p className="font-[500] text-dark-text">
                {product_detail?.product_sold ?? 0} Product sold
              </p>
              <p className="font-[500] text-dark-text">
                {product_detail?.product_watched ?? 0} Product watched
              </p>
            </section>
            <Paragraph
              className="!text-dark-label"
              ellipsis={
                ellipsis
                  ? { rows: 2, expandable: true, symbol: 'Read more' }
                  : false
              }
            >
              {product_detail?.description ?? ''}
            </Paragraph>
            <Divider />
            <section className="flex space-x-6">
              <div className="flex flex-col space-y-2">
                <p className="font-[500] text-dark-label">Type</p>

                <Select
                  className="w-[135px] outline-0 border-none bg-white-lighter rounded-md"
                  onChange={handleChangeType}
                  options={product_detail.type}
                  defaultValue={'Body Only'}
                />
              </div>
              <div className="space-y-2">
                <p className="font-[500] text-dark-label">Quantity</p>
                <input
                  defaultValue={1}
                  type="number"
                  className="bg-white-lighter rounded-sm p-1 w-[75px] text-[14px] text-dark-title pl-2"
                />
              </div>
              <div className="space-y-2">
                <p className="font-[500] text-dark-label">Color</p>
                <CustomSegmented
                  size="small"
                  options={product_detail.color}
                  onChange={handleChangeColor}
                />
              </div>
            </section>
            <Divider />
            <section className="flex-between">
              <h3 className="">${product_detail?.price ?? 0}</h3>
              <div className="flex gap-x-4">
                <Button variant="outlined" className="text-indigo">
                  Buy Now
                </Button>
                <Button variant="contained" className="text-white">
                  Add to cart
                  <i className="fa-solid fa-cart-plus ml-2"></i>
                </Button>
                <IconButton
                  size="small"
                  icon="fa-heart"
                  className="rounded-md text-dark-lightest"
                />
              </div>
            </section>
          </div>
        </div>

        {/* Navigating & Report & Share */}
        <div className="m-5 flex-between">
          <div className="flex space-x-5">
            <a
              href="#description"
              className="cursor-pointer font-[500] !text-dark-title"
            >
              Descriptions
            </a>
            <a
              href="#review"
              className="cursor-pointer font-[500] !text-dark-title"
            >
              Review (2.1k)
            </a>
            <a
              href="#related-product"
              className="cursor-pointer font-[500] !text-dark-title"
            >
              Related Product
            </a>
          </div>
          <div className="flex space-x-5">
            <button className="flex-center space-x-2 !bg-white text-dark-label">
              <i className="fa-solid fa-money-check-pen"></i>
              <span className="">Report Product</span>
            </button>
            <button className="!bg-white flex-center space-x-2 text-dark-label">
              <i className="fa-solid fa-share-nodes"></i>
              <span className="">Share</span>
            </button>
          </div>
        </div>

        {/* Description of product*/}
        <div className="w-3/4">
          <span className="text-dark-label text-[14px] leading-6">
            {product_detail?.description ?? ''}
          </span>
        </div>

        <div className="flex gap-x-20 my-10">
          <div className="flex flex-col space-y-5">
            <span className="text-[18px] font-bold leading-5 tracking-[0.2px] text-dark-title">
              Overview
            </span>
            <CustomDescription
              className="w-[540px] "
              bordered
              layout="horizontal"
              items={descriptions}
            />
          </div>
          <div className="flex flex-col space-y-8">
            <span className="text-[18px] font-bold leading-5 tracking-[0.2px] text-dark-title">
              What's inside box ?
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-16">
              {product_detail.whatsInsideBox.items.map(item => (
                <div className="inline-flex items-center">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      checked
                      readOnly
                      className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-white-dark-light checked:border-white-dark-light"
                    />
                    <span className="absolute accent-white-dark-light text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                  <label className="cursor-pointer ml-4 text-dark-title text-sm">
                    {item}{' '}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-between m-4 ">
          {product_detail.code.map(item => (
            <div className="flex space-x-15">
              <span className="text-[14px] leading-5 text-dark-text">
                {item?.label ?? ''}
              </span>
              <span className="text-[14px] leading-5 text-dark-title">
                {item?.content ?? ''}
              </span>
            </div>
          ))}
        </div>

        {/* Rating */}
        <div className="my-10">
          <h4 id="review" className="">
            Reviews
          </h4>
          <div className="flex-between">
            <div className=" space-y-5 my-2">
              <span className="text-[14px] leading-5 text-dark-label">
                for {product_detail?.name ?? ''}
              </span>
              <div className="flex items-center">
                <i className="fa-solid fa-star text-yellow text-[28px] mr-4"></i>
                <h1 className="font-[400] mr-2.5">
                  {product_detail?.rating ?? 0}
                </h1>
                <span className="text-[32px] leading-12 tracking-[0.2px text-dark-title]">
                  / 5.0
                </span>
              </div>
              <div className="flex flex-col rounded-md bg-white-lighter py-3 px-[15px]">
                <span className="">Recommended</span>
                <span className="text-[14px] leading-5 text-dark-label">
                  (88%) Buyer recommended this product
                </span>
              </div>
            </div>
            <div className="w-1/2 space-y-4.5">
              {product_detail.rate.map(item => (
                <div className="flex items-center gap-x-4 w-full">
                  <div className="flex justify-end items-center gap-x-2 w-[42px]">
                    <span className="">{item?.rate ?? 0}.0</span>
                    <i className="fa-solid fa-star text-yellow text-[16px]"></i>
                  </div>
                  <div className="flex-start flex h-1.5 w-full bg-white-enough-light overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
                    <div
                      style={{ width: `${item.percentage}%` }}
                      className={`flex h-full items-center justify-center overflow-hidden break-all rounded-full bg-green text-white`}
                    ></div>
                  </div>
                  <span className="text-[14px] leading-5 text-dark-label">
                    {item?.quantity ?? 0}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Divider />

        {/* All comments */}
        <div className="">
          <div className="flex-between">
            <span className="text-[18px] font-bold leading-5 tracking-[0.2px] text-dark-title">
              All Comment (2,1k)
            </span>
            <div className="">
              <div className="flex-center space-x-4">
                <p className="text-dark-label font-normal text-[16px]">
                  Sort by:{' '}
                </p>
                <CustomSelect
                  className="w-[200px] !h-[52px] font-bold 
                   !text-dark-title focus:ring-0 focus:border-none  selection:font-bold"
                  placeholder="Filled"
                  variant="filled"
                  options={commentFilters}
                  defaultValue={'Highest rating'}
                />
              </div>
            </div>
          </div>
          <div className="">
            <Comment />
          </div>

          {/* Related product */}
          <div id="related-product" className="space-y-8">
            <div className="flex-between">
              <span className="text-2xl leading-8 tracking-[0.2px] text-dark-title font-bold">
                Related Products
              </span>
              <Button variant="outlined" className="text-indigo">
                View All
              </Button>
            </div>
            <Product />
          </div>
        </div>
      </Wrapped>
    </MainLayout>
  );
};

export default ProductDetail;
