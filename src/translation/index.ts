
import i18n from 'react-native-i18n';
import en from './en';
import ar from './ar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nManager } from 'react-native';

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
  i18n.defaultLocale = lang;
  AsyncStorage.setItem('lang', lang);
};

export const langConfig = async (lang?: Lang) => {
  const defaultLang = await AsyncStorage.getItem('lang');
  i18n.translations = available_languages;

  let currentLang = i18n.currentLocale().split('-')[0];
  
  if (!Lang[currentLang as Lang]) {
    currentLang = Lang.en;
  }
  i18n.locale = defaultLang || lang || currentLang;
  i18n.defaultLocale = i18n.locale;
  I18nManager.allowRTL(true);

  await I18nManager.forceRTL(i18n.locale == Lang.ar);

  return i18n.locale;
};