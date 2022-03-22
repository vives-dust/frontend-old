import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App).use(router)
  .use(router)
  .use(store)
  .use(vuetify, {
    theme: {
      themes: {
        light: {
          primary: '#F7C26C',
          secondary: '#b0bec5',
          third: '#F5A323',
          fourth:'#755C34',
          fifth:'#C2821B',  
        },
        dark:{
          primary: '#F7C26C',
          secondary: '#b0bec5',
          third: '#F5A323',
          fourth:'#755C34',
          fifth:'#C2821B',  
        }
      },
    },
  })
  .mount('#app')
