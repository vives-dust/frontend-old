<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import LeafLet from 'leaflet';
import { useDeviceStore } from '@/stores/devices';

const deviceStore = useDeviceStore()
// deviceStore.fetch_devices();

const center = ref([51.186917505979025, 3.2031807018500427] as LeafLet.LatLngTuple)
const zoom = ref(13)    // Max = 19

const setup_leaflet = function() {
  const container = LeafLet.map("map_container").setView(center.value, zoom.value);
  LeafLet.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
      maxZoom: 19,
    }
  ).addTo(container);
   
  // Show marker on the map
  // LeafLet.marker([51.186917505979025, 3.2031807018500427]).bindPopup('VIVES').addTo(container);

  watch(
    () => deviceStore.loading,
    (loading) => {
      console.log(`Loading changed to ${loading}`)
      if (!loading && !deviceStore.error) {
        for(let device of deviceStore.devices) {
          // console.log(device)
          LeafLet.marker([device.location.latitude + 0.1*Math.random(), device.location.longitude + 0.1*Math.random()])
          .bindPopup('VIVES').addTo(container);
        }
      }
    }
  )
}

onMounted(() => {
  setup_leaflet();
})

</script>

<template>
  <v-sheet>
    <div id="map_container"></div>
  </v-sheet>
</template>

<style scoped>
#map_container {
  height: 50vh;
}
</style>