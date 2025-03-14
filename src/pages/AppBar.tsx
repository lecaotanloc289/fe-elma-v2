import { languages } from '@/locales';
import { Divider, Select } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
const AppBar = () => {
  const navigate = useNavigate();
  const handleOrderTracking = () => {
    // check login
    if (true) {
      navigate('/order-tracking');
    } else {
      // if not login -> let navigate
      navigate('/login');
    }
  };

  // CHANGE LANGUAGE
  const [lang, setLang] = useState('en');
  const { t, i18n } = useTranslation();
  const loadLanguages = () => {
    let language = localStorage.getItem('language') as any;
    if (language) {
      setLang(language);
    }
  };
  const handleSetLanguage = (value: any) => {
    console.log(value);
    setLang(value);
    localStorage.setItem(lang, value);
    i18n.changeLanguage(value);
  };

  useEffect(() => {
    loadLanguages();
    return () => {};
  }, []);

  return (
    <div className="w-3/4 mx-auto p-2">
      <div className="flex justify-between items-center">
        <div className="flex justify-evenly gap-2">
          <i
            className="fa-brands fa-square-facebook fa-xl"
            style={{ color: '#919EAB' }}
          ></i>
          <i
            className="fa-brands fa-twitter fa-xl"
            style={{ color: '#919EAB' }}
          ></i>
          <i
            className="fa-brands fa-youtube fa-xl"
            style={{ color: '#919EAB' }}
          ></i>
          <i
            className="fa-brands fa-instagram fa-xl"
            style={{ color: '#919EAB' }}
          ></i>
        </div>
        <div className="flex justify-evenly gap-2">
          <p
            onClick={handleOrderTracking}
            style={{ cursor: 'pointer' }}
            className="text-lg"
          >
            Order tracking
          </p>
          <p className="cursor">Help</p>
          <Select
            className="border-none"
            defaultValue="en"
            style={{ width: 140, marginTop: -4 }}
            onChange={handleSetLanguage}
            options={languages}
          />
        </div>
      </div>
      <Divider style={{ marginTop: 4, marginBottom: 4 }} />
      <h1 className="text-xl font-bold">Content inside 75% width container</h1>
      <h1>{t('login')}</h1>
      <i className="fa-regular fa-camera"></i>
    </div>
  );
};

export default AppBar;
