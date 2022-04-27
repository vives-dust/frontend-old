import { createStore } from 'vuex'
import { Backend } from '@/api/backend'


export default createStore({
  state: {
    currentlySelectedPin: {
      _id: 1,
    },
    devices: {},
    device: { "_id": "626699db4690ae738366373c", "name": "Prototype 1", "hardwareId": "eui-70b3d57ed0049f81", "description": "Our first prototype sensor", "location": { "latitude": 51.194154, "longitude": 3.21767, "height": 0 }, "sensors": [{ "field": "internalTemperature", "value": 23, "time": "2022-04-26T12:40:39.303Z", "_id": "626699db4690ae738366373d", "type": "temperature", "deviceId": "626699db4690ae738366373c" }, { "field": "moistureLevel_1", "value": 49444, "time": "2022-04-26T12:40:39.303Z", "_id": "626699db4690ae738366373e", "type": "moisture", "depth": -5, "deviceId": "626699db4690ae738366373c" }, { "field": "moistureLevel_2", "value": 49915, "time": "2022-04-26T12:40:39.303Z", "_id": "626699db4690ae738366373f", "type": "moisture", "depth": -12, "deviceId": "626699db4690ae738366373c" }, { "field": "moistureLevel_3", "value": 50007, "time": "2022-04-26T12:40:39.303Z", "_id": "626699db4690ae7383663740", "type": "moisture", "depth": -18, "deviceId": "626699db4690ae738366373c" }, { "field": "moistureLevel_4", "value": 50023, "time": "2022-04-26T12:40:39.303Z", "_id": "626699db4690ae7383663741", "type": "moisture", "depth": -22, "deviceId": "626699db4690ae738366373c" }] },
    time: '24h',
    timeData:{}
  },
  getters: {

  },
  mutations: {
    change_currentlySelectedPin(state, payload) {
      state.currentlySelectedPin = payload.currentlySelectedPin
    },
    change_devices(state, payload) {
      state.devices = payload.devices
    },
    change_device(state, payload) {
      state.device = payload.device
    },
    change_timeData(state, payload) {
      state.timeData = payload.timeData
    },
    change_time(state, payload) {
      state.time = payload.time
    }
  },
  actions: {
    get_devices({ commit, state }) {
      Backend.get_devices()
        .then((response: any) => {
          commit('change_devices', {
            "devices": response.data.data
          })
        })
        .catch((error: any) => {
          console.log(error)
        })
    },
    get_device({ commit, state }) {
      Backend.get_device(state.currentlySelectedPin._id)
        .then((response: any) => {
          

          commit('change_device', {
            "device": response.data
          })
        })
        .catch((error: any) => {
          console.log(error)
        })
    },

    get_periodeData({ commit, state }) {
      Backend.get_periodeData(state.currentlySelectedPin._id,state.time)
        .then((response: any) => {
          console.log(response.data)
          commit('change_timeData', {
            "timeData": response.data
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
