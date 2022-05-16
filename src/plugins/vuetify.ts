// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { aliases, fa } from 'vuetify/lib/iconsets/fa'
import { mdi } from 'vuetify/lib/iconsets/mdi'
//Vuetify
import { createVuetify } from 'vuetify'
const myCustomTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#00FAE9',
    secondary: '#28C6FA',
    third: '#11AD6F',
    fourth: '#1186AD',
    fifth: '#0CFA9A',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}


//00FAE9

//0CFA9A

export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi,
    }
  },
  theme: {
    defaultTheme: 'myCustomTheme',
    options: {
      customProperties: true
    },
    themes: {
      myCustomTheme,
    }
  },

}
)
