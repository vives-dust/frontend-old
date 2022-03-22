// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  {
    theme: {
      themes: {
        light: {
          primary: '#F7C26C',
          secondary: '#b0bec5',
          third: '#F5A323',
          fourth:'#755C34',
          fifth:'#C2821B',  
        },
      },
    },
  }
)
