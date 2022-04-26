import { createStore } from 'vuex'
import { Backend } from '@/api/backend'


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
    currentlySelectedPin: {
      id: 1,
      name: "brugge station",
      x: 51.037861,
      y: 4.240528,
    },
    devices:{},
    device:{
      id:Number
    }

  },
  getters: {

  },
  mutations: {
    change_currentlySelectedPin(state, payload) {
      state.currentlySelectedPin = payload.currentlySelectedPin
    },
    change_devices(state,payload){
      state.devices = payload.devices
      console.log(state.devices)
    }
  },
  actions: {
    get_devices({ commit, state }) {
      Backend.get_devices()
        .then((response: any) => {
          console.log(response);
          commit('change_devices', {
            "devices": response.data.data
          })
        })
        .catch((error: any) => {
          console.log(error)
        })
    },
    get_device({ commit, state }) {
      Backend.get_device(this.state.device.id)
        .then((response: any) => {
          console.log(response);
          commit('change_devices', {
            "devices": response.data
          })
        })
        .catch((error: any) => {
          console.log(error)
        })
    },
  },
  modules: {
  }
})
