import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'leaflet/dist/leaflet.css';
import { i18n } from './plugins/vue-i18n'
import { store } from './store'
import { createPinia } from 'pinia'

const pinia = createPinia()

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(i18n)
  .use(store)
  .use(pinia)
  .mount('#app')



