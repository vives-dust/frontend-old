import { createStore } from 'vuex'
import { Backend } from '@/api/backend'


export default createStore({
  state: {
    currentlySelectedPin: {
      _id: 1,
      name: "brugge station",
      x: 51.037861,
      y: 4.240528,
    },
    devices:{},
    device:{}

  },
  getters: {

  },
  mutations: {
    change_currentlySelectedPin(state, payload) {
      state.currentlySelectedPin = payload.currentlySelectedPin
    },
    change_devices(state,payload){
      state.devices = payload.devices
    },
    change_device(state,payload){
      state.device = payload.device
      console.log(state.device)
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
      Backend.get_device(this.state.currentlySelectedPin._id)
        .then((response: any) => {
          commit('change_device', {
            "device": response.data
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
