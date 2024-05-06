import React from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources: {
    en: {
      translation: {
        "Welcome to React": "Welcome ",
      },
    },
    ar: {
      translation: {
        "Welcome to React": "مرحبا",
      },
    },
  },
  lng: "ar", // if you're using a language detector, do not define the lng option
  fallbackLng: "en",
  detection:{
    order: ['htmlTag','querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator',  'path', 'subdomain'],
    caches: ['cookie']
  }
});

function App() {
  const { t } = useTranslation();

  return <h2>{t("Welcome to React")}</h2>;
}
