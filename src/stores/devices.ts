import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { Backend } from '@/api/backend'

export const useDeviceStore = defineStore('device', () => {

  const devices = ref([])

  const device_count = computed(() => { return devices.value.length })
  const sensor_count = computed(() => { return devices.value.reduce((sum, dev : any) => { return sum + dev.sensors?.length },0 ) })

  async function fetch_devices() {
    Backend.get_devices()
    .then((response : any) => {
      devices.value = response.data.data;
    })
    .catch(() => {
      console.log("Failed to fetch devices from backend")
    })
  }

  return {
    devices,
    device_count,
    sensor_count,
    fetch_devices,
  }
})