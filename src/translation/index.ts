
import i18n from 'react-native-i18n';
import en from './en';
import ar from './ar';

export enum Lang {
  en = "en",
  ar = "ar"
}

export const available_languages = {
  en,
  ar
};

export const setLang = (lang: Lang) => {
  i18n.locale = lang;
}

export const langConfig = (lang?: Lang) => {
  i18n.translations = available_languages;
  let currentLang = i18n.currentLocale().split('-')[0];
  if (!Lang[currentLang as Lang]) {
    currentLang = Lang.en;
  }
  i18n.locale = lang || currentLang;
  return i18n.locale;
}