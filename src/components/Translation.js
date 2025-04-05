import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations';

// Get translated text from key path
export const getTranslation = (keyPath, lang) => {
  // If language is not provided, fall back to English
  const language = lang || 'en';
  
  // Split the key path by dots (e.g., "nav.home" => ["nav", "home"])
  const keys = keyPath.split('.');
  
  // Get the translation for the current language
  let translation = translations[language];
  
  // Navigate through the nested objects using the keys
  for (const key of keys) {
    if (translation && translation[key]) {
      translation = translation[key];
    } else {
      // If the key doesn't exist, fall back to English
      let fallback = translations.en;
      for (const fbKey of keys) {
        if (fallback && fallback[fbKey]) {
          fallback = fallback[fbKey];
        } else {
          fallback = keyPath; // Last resort fallback is the key itself
          break;
        }
      }
      translation = fallback;
      break;
    }
  }
  
  return translation;
};

// This component makes it easy to display translated text
export const T = ({ keyPath }) => {
  const { language } = useLanguage();
  const translatedText = getTranslation(keyPath, language);
  return <>{translatedText}</>;
};

// Hook to use translations in functional components
export const useTranslation = () => {
  const { language } = useLanguage();
  
  const translate = (keyPath) => {
    return getTranslation(keyPath, language);
  };
  
  return { translate };
};

export default { T, useTranslation, getTranslation };