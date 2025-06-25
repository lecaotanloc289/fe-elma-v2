import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const useLanguage = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('language');
    if (saved) {
      setLang(saved);
      i18n.changeLanguage(saved);
    }
  }, []);

  const handleChangeLanguage = (value: string) => {
    setLang(value);
    localStorage.setItem('language', value);
    i18n.changeLanguage(value);
  };

  return { lang, handleChangeLanguage };
};

export { useLanguage };
