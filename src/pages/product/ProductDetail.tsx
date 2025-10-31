import { Button, IconButton } from '@/components';
import Wrapped from '@/components/Wrapped';
import MainLayout from '@/views/MainLayout';
import {
  Descriptions,
  DescriptionsProps,
  Divider,
  Image,
  Segmented,
  Select,
} from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import Product from '@/components/Product';
import { data } from '@/constants';
import { useCommonStore } from '@/store';
import { CommonService, useMessageApi } from '@/services';
import { formatPrice } from '@/utils';
import { useCartStore } from '@/store/cart.store';
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
  const message = useMessageApi();
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
  const product_detail = data.product_detail.product_detail;
  const commentFilters = data.product_detail.commentFilters;

  const [ellipsis, setEllipsis] = useState(true);
  const [product, setProduct] = useState<any>({});
  const [quantity, setQuantity] = useState<number>(1);
  const { id, products } = useCommonStore();

  const [selectedImage, setSelectedImage] = useState(product?.images?.[0]);

  const handleSelectedImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };
  const handleChangeType = () => {};
  const handleChangeColor = (value: any) => {
    console.log(value);
  };

  const loadProductDetail = async (id: string) => {
    const result = await CommonService.getProductDetail(id);
    if (result?.success) {
      setProduct(result.data);
      setSelectedImage(result.data.images[0]);
    }
  };
  const handleBuyNow = () => {};
  const handleAddProductToCart = async (
    id: string,
    quantity?: number,
    productName?: string
  ) => {
    try {
      const response: any = await useCartStore.getState().addProductToCart({
        id,
        quantity: quantity ?? 1,
      });
      if (response?.success) {
        message.success(`Add product ${productName} to cart success!`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!id) return;
    loadProductDetail(id);
  }, [id]);

  return (
    <MainLayout>
      <Wrapped>
        <div className="mt-25 mb-12 flex-between">
          {/* Images */}
          <div className="flex-center flex-col">
            <Image width={445} src={selectedImage ?? ''} className="py-5" />
            <div className="flex-between space-x-2">
              {product.images?.map((image: any) => (
                <button
                  key={image}
                  className=""
                  onClick={() => handleSelectedImage(image)}
                >
                  <img
                    className=""
                    width={100}
                    height={100}
                    src={image ?? ''}
                    alt=""
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="w-[540px]">
            <h2 className="">{product?.name ?? ''}</h2>
            <section className="flex items-center space-x-4 my-5">
              <div className="flex-center bg-orange rounded-md text-white h-7.5 px-2">
                <i className="fa-solid fa-star"></i>
                <p className="font-[500] text-white">{product?.rating ?? 0}</p>
              </div>
              <p className="font-[500] text-dark-text">
                {product?.sold ?? 0} Product sold
              </p>
              <p className="font-[500] text-dark-text">
                {product?.watched ?? 0} Product watched
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
              {product?.description ?? ''}
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
                  min={1}
                  max={999}
                  step={1}
                  value={quantity}
                  onChange={(e: any) =>
                    setQuantity(e.target.value > 1 ? e.target.value : 1)
                  }
                  inputMode="numeric"
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
              <h3 className="">{formatPrice(product?.price ?? 0)}</h3>
              <div className="flex gap-x-4">
                <Button
                  onClick={handleBuyNow}
                  variant="outlined"
                  className="text-indigo"
                >
                  Buy Now
                </Button>
                <Button
                  onClick={() =>
                    handleAddProductToCart(
                      product?._id,
                      quantity,
                      product?.name
                    )
                  }
                  variant="contained"
                  className="text-white"
                >
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
              Review ({product?.number_reviews ?? 0})
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
            {product?.description ?? ''}
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
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
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
                <h1 className="h1">{product?.rating ?? 0}</h1>
                <span className="text-[32px] leading-12 tracking-[0.2px text-dark-title]">
                  {` `} / 5.0
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
          <Product products={products} />
        </div>
      </Wrapped>
    </MainLayout>
  );
};

export default ProductDetail;
