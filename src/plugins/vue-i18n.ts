import en from '../translations/en.json'
import nl from '../translations/nl.json'
import { createI18n } from 'vue-i18n'



export const i18n = createI18n({
  locale: 'nl',
  messages: {
    en: en,
    nl: nl,
  },
  fallbackLocale: 'nl',
  globalInjection: true,
});
