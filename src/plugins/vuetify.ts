// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const myCustomTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    backgroundShift: '#CDCDCD',
    surface: '#FFFFFF',
    primary: '#11AD6F',
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

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomTheme',
    options: {
      customProperties: true
    },
    themes: {
      myCustomTheme,
    }
  },
})