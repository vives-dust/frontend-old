import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { Backend } from '@/api/backend'

export const useDeviceStore = defineStore('device', () => {

  const devices = ref([])

  const device_count = computed(() => { return devices.value.length })
  const sensor_count = computed(() => { return devices.value.reduce((sum, dev : any) => { return sum + dev.sensors?.length },0 ) })

  const loading = ref(false);
  const error = ref('');

  async function fetch_devices() {
    loading.value = true;
    error.value = '';
    Backend.get_devices()
    .then((response : any) => {
      devices.value = response.data.data;
      loading.value = false;
    })
    .catch(() => {
      console.log("Failed to fetch devices from backend")
      loading.value = false;
      error.value = 'Failed to fetch devices from backend';
    })
  }

  return {
    devices,
    device_count,
    sensor_count,
    loading,
    error,
    fetch_devices,
  }
})