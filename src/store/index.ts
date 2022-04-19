import { createStore } from 'vuex'

export default createStore({
  state: {
    pins: [
      {
        id: 1,
        name: "brugge station",
        x: 51.037861,
        y: 4.240528,
      },
      {
        id: 2,
        name: "autostrade",
        x: 51.047861,
        y: 4.240528,
      },
      {
        id: 3,
        name: "brugge kinopolis",
        x: 51.147861,
        y: 4.240528,
      },
      {
        id: 4,
        name: "brugge burg",
        x: 51.247861,
        y: 4.240528,
      },
    ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
