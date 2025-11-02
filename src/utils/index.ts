export const formatPrice = (price: number) =>
  new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price);

// import { useTranslation } from 'react-i18next'; // or your i18n solution

// export const formatPrice = (price: number) => {
//   const { i18n } = useTranslation();
//   const locale = i18n.language;

//   // Map locale to currency (could be from config/user preferences)
//   const currencyMap: Record<string, string> = {
//     vi: 'VND',
//     en: 'USD',
//     zh: 'CNY',
//   };

//   return new Intl.NumberFormat(locale, {
//     style: 'currency',
//     currency: currencyMap[locale] || 'USD',
//   }).format(price);
// };