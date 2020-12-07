import { NativeModules, Platform } from 'react-native';
import 'moment/min/moment-with-locales';
import moment from 'moment';

export function setMomentLocale() {
  if (Platform.OS === 'ios') {
    const locale = NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0];
    moment.locale(locale);
  } else if (Platform.OS === 'android') {
    const locale = NativeModules.I18nManager.localeIdentifier;
    moment.locale(locale);
  }
}
