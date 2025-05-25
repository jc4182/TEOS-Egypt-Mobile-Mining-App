import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to TEOS Mining!",
          mine: "Mine $TEOS",
          profile: "User  Profile",
        },
      },
      ar: {
        translation: {
          welcome: "مرحبًا بكم في تعدين TEOS!",
          mine: "تعدين $TEOS",
          profile: "الملف الشخصي للمستخدم",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
