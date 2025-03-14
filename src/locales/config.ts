import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from '../locales/en/translation.json'
import translationVI from '../locales/vi/translation.json'
import translationZH from '../locales/zh/translation.json'
export const LANGUAGE = "language";

const resources = {
    en: { translation: translationEN },
    vi: { translation: translationVI },
    zh: { translation: translationZH },
};
const language = localStorage.getItem(LANGUAGE);
i18next.use(initReactI18next).init({
    lng: language || 'en', // if you're using a language detector, do not define the lng option
    debug: true,
    resources
})
