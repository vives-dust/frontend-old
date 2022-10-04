import { createStore } from 'vuex'
import { Backend } from '@/api/backend'

export type State = { currentlySelectedPin: object, devices: object, device: object, time: string, timeData: object }

export const store = createStore({
  state: {
    currentlySelectedPin: {
      _id: 1,
    },
    devices: {},
    device: { "_id": "626699db4690ae738366373c", "name": "Prototype 1", "hardwareId": "eui-70b3d57ed0049f81", "description": "Our first prototype sensor", "location": { "latitude": 51.194154, "longitude": 3.21767, "height": 0 }, "sensors": [{ "field": "internalTemperature", "value": 23, "time": "2022-04-26T12:40:39.303Z", "_id": "626699db4690ae738366373d", "type": "temperature", "deviceId": "626699db4690ae738366373c" }, { "field": "moistureLevel_1", "value": 49444, "time": "2022-04-26T12:40:39.303Z", "_id": "626699db4690ae738366373e", "type": "moisture", "depth": -5, "deviceId": "626699db4690ae738366373c" }, { "field": "moistureLevel_2", "value": 49915, "time": "2022-04-26T12:40:39.303Z", "_id": "626699db4690ae738366373f", "type": "moisture", "depth": -12, "deviceId": "626699db4690ae738366373c" }, { "field": "moistureLevel_3", "value": 50007, "time": "2022-04-26T12:40:39.303Z", "_id": "626699db4690ae7383663740", "type": "moisture", "depth": -18, "deviceId": "626699db4690ae738366373c" }, { "field": "moistureLevel_4", "value": 50023, "time": "2022-04-26T12:40:39.303Z", "_id": "626699db4690ae7383663741", "type": "moisture", "depth": -22, "deviceId": "626699db4690ae738366373c" }] },
    time: '7d',
    timeData: {},
    showSelect: false,
    soilModel: "",
    showTrendline: false
  },
  getters: {

  },
  mutations: {
    change_currentlySelectedPin(state, payload) {
      state.currentlySelectedPin = payload.currentlySelectedPin
    },
    change_showTrendline(state, payload) {
      console.log("trendline changed to:", payload.showTrendline)
      state.showTrendline = payload.showTrendline
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
      console.log("timeChanged")
      state.time = payload.time
    },
    change_showSelect(state, payload) {
      state.showSelect = payload.showSelect
    },
    change_soilModel(state, payload) {
      state.soilModel = payload.soilModel
    },
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
          replaceFieldValues(response.data)
          commit('change_device', {
            "device": response.data
          })
          store.dispatch("get_soilModel",response.data.soilModelId)
        })
        .catch((error: any) => {
          console.log(error)
        })
    },

    get_periodeData({ commit, state }) {
      Backend.get_periodeData(state.currentlySelectedPin._id, state.time)
        .then((response: any) => {
          replaceFieldValues(response.data)

          commit('change_timeData', {
            "timeData": response.data
          })
        })
        .catch((error: any) => {
          console.log(error)
        })
    },

    get_soilModel({ commit, state }, soilmodelid) {
      Backend.get_soilModel(soilmodelid)
        .then((response: any) => {
          commit('change_soilModel', {
            "soilModel": response.data.name
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

function replaceFieldValues(device: any) {
  device.sensors.forEach((sensor: any, index: number) => {
    if (sensor.field == "internalTemperature") {
      device.sensors[index].field = "Internal Temperature"
    }
    else if (sensor.field == "moistureLevel_1") {
      device.sensors[index].field = "Moisture Level 1"

    }
    else if (sensor.field == "moistureLevel_2") {
      device.sensors[index].field = "Moisture Level 2"

    } else if (sensor.field == "moistureLevel_3") {
      device.sensors[index].field = "Moisture Level 3"

    } else if (sensor.field == "moistureLevel_4") {
      device.sensors[index].field = "Moisture Level 4"

    }else if (sensor.field == "TreeHydrometer") {
      device.sensors[index].field = "Tree Hydrometer"

    }else if (sensor.field == "outsideTemperature") {
      device.sensors[index].field = "Outside Temperature"

    }else if (sensor.field == "undergroundTemperature") {
      device.sensors[index].field = "Underground Temperaturee"

    }
  });
}
