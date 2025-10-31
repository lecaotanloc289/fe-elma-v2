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
  // Change language
  const { lang, handleChangeLanguage } = useLanguage();
  const { t } = useTranslation();

  // Change account options
  const [accountOption, setAccountOption] = useState(1);

  const logOut = useAuthStore(state => state.logOut);
  const userData = useAuthStore(state => state.user);
  const categories = useCommonStore(state => state.categories);
  const cart = useCartStore(state => state.cart);

  const categoryOptions = categories.map(category => ({
    value: category._id,
    label: category.name,
  }));

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
  const handleAccountOptions = async (v: any) => {
    setAccountOption(v);
    if (v === 3) {
      await logOut();
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
  const handleClickOrderTracking = () => {
    navigate('/order-tracking');
  };
  const handleChangeCategory = (value: string) => {
    console.log(`selected ${value}`);
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
              onClick={handleClickOrderTracking}
            >
              {t('order-tracking')}
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
                name="search"
                id="search"
                className="!border-none !bg-white-lighter !min-w-[255px]"
                placeholder="Search something ..."
              />
              <div className="w-full max-w-sm border-l border-dark-lightest  ">
                <div className="bg-white-lighter border-l h-full  flex-center ">
                  <Select
                    className="border-none"
                    defaultValue="all"
                    style={{ width: 180 }}
                    onChange={handleChangeCategory}
                    virtual={false}
                    suffixIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.2"
                        stroke="currentColor"
                        className="h-5 w-5 ml-1 mt-1  text-slate-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                      </svg>
                    }
                    options={[
                      { value: 'all', label: 'All Category' },
                      ...categoryOptions,
                    ]}
                  />
                </div>
              </div>

              <button className="flex-center !bg-dark-ink text-white rounded-r-md w-12 h-12">
                <i className="fa-regular fa-magnifying-glass fa-lg"></i>
              </button>
            </Space.Compact>
          </div>
          <div className="w-2/5 flex items-center justify-end space-x-4">
            <div className="cursor-pointer">
              <Badge count={cart?.length ?? 0} offset={[-5, 5]}>
                <IconButton
                  size="fa-lg"
                  icon="fa-cart-shopping"
                  onClick={handleClickCart}
                />
              </Badge>
            </div>

            <IconButton
              className=""
              size="fa-lg"
              icon="fa-heart"
              onClick={handleClickFavorite}
            />
            <IconButton
              className=""
              size="fa-lg"
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
