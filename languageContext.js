import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import en from '../public/locales/en.json';
import fa from '../public/locales/fa.json';

const LanguageContext = createContext();

const translations = { en, fa };

export const LanguageProvider = ({ children }) => {
  const { locale, defaultLocale } = useRouter();
  const [lang, setLang] = useState(locale || defaultLocale);

  useEffect(() => {
    setLang(locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'fa' ? 'rtl' : 'ltr';
  }, [locale]);
  
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ t, lang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLocalization = () => useContext(LanguageContext);
