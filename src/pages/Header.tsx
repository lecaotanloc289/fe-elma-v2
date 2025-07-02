import { HomeIcon, IconButton, SocialIcon } from '@/component';
import { languages } from '@/locales';
import { useLanguage } from '@/services/hooks';
import { Badge, Divider, Input, Select, Space } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
const Header = () => {
  const navigate = useNavigate();

  const socialIcons = [
    { name: 'fa-square-facebook', link: '' },
    { name: 'fa-twitter', link: '' },
    { name: 'fa-youtube', link: '' },
    { name: 'fa-instagram', link: '' },
  ];

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
  };

  const handleBackToHome = () => {
    navigate('/');
  };
  // Check login
  const handleClickCart = () => {
    navigate('/cart');
  };
  const handleClickFavorite = () => {
    navigate('/favorite');
  };
  const handleClickUser = () => {
    navigate('/user');
  };
  const handleOrderTracking = () => {
    navigate('/order-tracking');
    // navigate('/login');
  };

  return (
    <div>
      <div className="w-4/5 mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex justify-evenly gap-2">
            {socialIcons.map((icon) => (
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
              {t('Help')}
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
              <Input placeholder="Search something ..." />
              <Select
                size="large"
                className="p-4"
                defaultValue="All categories"
                options={accountOptions}
              />
              <button
                style={{ borderTopRightRadius: 8, borderBottomRightRadius: 8 }}
              >
                <i className="fa-regular fa-magnifying-glass fa-lg"></i>
              </button>
            </Space.Compact>
          </div>
          <div className="w-2/5 flex items-center justify-end space-x-4">
            <div className="cursor-pointer">
              <Badge count={0} showZero offset={[-15, 5]}>
                <IconButton
                  size="fa-xl"
                  icon="fa-cart-shopping"
                  onClick={handleClickCart}
                />
              </Badge>
            </div>

            <IconButton
              size="fa-xl"
              icon="fa-heart"
              onClick={handleClickFavorite}
            />
            <IconButton size="fa-xl" icon="fa-user" onClick={handleClickUser} />

            <div className="min-h-[48px]">
              <h5 className="ml-3 mt-2 leading-[20px] tracking-[0.18px]">
                Join Elma
              </h5>
              <Select
                style={{ fontWeight: 'bold' }}
                className="border-none text-lg text-black font-bold w-[140px]"
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
