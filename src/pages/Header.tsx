import { HomeIcon, IconButton, SocialIcon } from '@/components';
import { languages } from '@/locales';
import { useLanguage } from '@/services/hooks';
import { Badge, Divider, Input, Select, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { data } from '../constants';
import { useAuthStore } from '@/store/auth.store';
import { useCommonStore } from '@/store';
import { useCartStore } from '@/store/cart.store';
const Header = () => {
  const navigate = useNavigate();
  const logOut = useAuthStore(state => state.logOut);
  const userData = useAuthStore(state => state.user);
  const categories = useCommonStore(state => state.categories);
  const cart = useCartStore(state => state.cart);

  // Change language
  const { lang, handleChangeLanguage } = useLanguage();
  const { t } = useTranslation();

  // Change account options
  const [accountOption, setAccountOption] = useState(1);

  const accountOptions = [
    {
      label: 'My Account',
      value: 1,
    },
    {
      value: 2,
      label: 'Profile',
    },
    {
      value: 3,
      label: 'Log out',
    },
  ];
  const handleAccountOptions = (v: any) => {
    setAccountOption(v);
    if (v === 3) {
      logOut();
      navigate('/sign-in');
    }
  };

  const handleClickCart = () => {
    navigate('/cart');
  };
  const handleClickFavorite = () => {
    navigate('/favorite');
  };
  const handleClickUser = () => {
    navigate('/user-profile');
  };
  const handleOrderTracking = () => {
    navigate('/order-tracking');
  };

  return (
    <div>
      <div className="w-4/5 mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex justify-evenly gap-2">
            {data.header.socialIcons.map(icon => (
              <SocialIcon key={icon.name} icon={icon.name} link={icon.link} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-2">
            <h6
              className="cursor-pointer font-normal text-dark-lighter mr-1.5"
              onClick={handleOrderTracking}
            >
              {t('Order tracking')}
            </h6>
            <h6 className="cursor-pointer  font-normal text-base ">
              {t('help')}
            </h6>
            <Select
              className="border-none flex items-center text-base"
              defaultValue={lang}
              style={{ width: 140, marginTop: 2 }}
              onChange={handleChangeLanguage}
              options={languages}
              size="large"
            />
          </div>
        </div>
      </div>
      <Divider style={{ marginTop: 2, marginBottom: 2 }} />
      <div className="w-4/5 mx-auto">
        <header className="flex w-full justify-start">
          <div className="w-1/5 flex justify-start items-center">
            <HomeIcon />
          </div>
          <div className="w-2/5 flex justify-items-start items-center">
            <Space.Compact size="middle">
              <Input
                className="!border-none !bg-white-lighter !min-w-[255px]"
                placeholder="Search something ..."
              />
              <div className="w-full max-w-sm min-w-[200px]">
                <div className="relative border-l border-white-enough-light flex">
                  <select className="w-full h-[48px] bg-white-lighter placeholder:text-slate-400 text-slate-700 text-sm border-none rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400  appearance-none cursor-pointer">
                    <option value="all">All categories</option>
                    {categories.length > 0 &&
                      categories.map(category => (
                        <option key={category._id} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    {/* <option value="brazil">All categories</option>
                    <option value="bucharest">Category 1</option>
                    <option value="london">Category 2</option>
                    <option value="washington">Category 3</option> */}
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.2"
                    stroke="currentColor"
                    className="h-5 w-5 ml-1 mt-1 absolute top-2.5 right-2.5 text-slate-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </div>
              </div>
              <button className="flex-center !bg-dark-ink text-white rounded-md w-12 h-12">
                <i className="fa-regular fa-magnifying-glass fa-lg"></i>
              </button>
            </Space.Compact>
          </div>
          <div className="w-2/5 flex items-center justify-end space-x-4">
            <div className="cursor-pointer">
              <Badge count={cart.products?.length ?? 0} offset={[-5, 5]}>
                <IconButton
                  size="fa-xl"
                  icon="fa-cart-shopping"
                  onClick={handleClickCart}
                />
              </Badge>
            </div>

            <IconButton
              className=""
              size="fa-xl"
              icon="fa-heart"
              onClick={handleClickFavorite}
            />
            <IconButton
              className=""
              size="fa-xl"
              icon="fa-user"
              onClick={handleClickUser}
            />

            <div className="min-h-[48px]">
              <h5 className="ml-3 mt-2 leading-[20px] tracking-[0.18px]">
                {userData?.fullname || (
                  <span
                    className="cursor-pointer"
                    onClick={() => navigate('/sign-in')}
                  >
                    Sign In
                  </span>
                )}
              </h5>

              <Select
                className="border-none text-lg text-black font-extrabold w-[140px]"
                onChange={handleAccountOptions}
                options={accountOptions}
                value={accountOption}
                size="large"
              />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
