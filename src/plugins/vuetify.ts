// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { aliases, fa } from 'vuetify/lib/iconsets/fa'
import { mdi } from 'vuetify/lib/iconsets/mdi'
//Vuetify
import { createVuetify, ThemeDefinition } from 'vuetify'
// const myCustomLightTheme: ThemeDefinition = {   
//     dark: false,
//     colors: {
//       background: '#FFFFFF',
//       surface: '#FFFFFF',
//       primary: '#6200EE',
//       'primary-darken-1': '#3700B3',
//       secondary: '#03DAC6',
//       'secondary-darken-1': '#018786',
//       error: '#B00020',
//       info: '#2196F3',
//       success: '#4CAF50',
//       warning: '#FB8C00',
//     }
//   }
  




export default createVuetify({
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa,
        mdi,
      }
    },
  }
)
