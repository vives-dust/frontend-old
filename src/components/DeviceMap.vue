<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import LeafLet from 'leaflet';
import { useDeviceStore } from '@/stores/devices';

const deviceStore = useDeviceStore()

const center = ref({ lat: 51.21075496799041, lng: 3.2273173995302034 } as LeafLet.LatLngLiteral)
const zoom = ref(12)    // Max = 19

const map = {
  container: {} as LeafLet.Map,
  markers: {} as LeafLet.LayerGroup
}

const add_device_markers_to_map = function() {
  if (!deviceStore.loading && !deviceStore.error) {
    // Remove old layer of markers
    if (map.markers) map.container.removeLayer(map.markers)

    // Create layer with markers
    map.markers = LeafLet.layerGroup();
    deviceStore.devices.forEach((device) => LeafLet.marker([device.location.latitude, device.location.longitude]).bindPopup('VIVES').addTo(map.markers))
    map.markers.addTo(map.container);
  }
}

const setup_leaflet = function() {
  map.container = LeafLet.map("map_container").setView(center.value, zoom.value);
  LeafLet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
    maxZoom: 19,
  }).addTo(map.container);

  add_device_markers_to_map()

  watch(
    () => deviceStore.loading,
    (loading) => add_device_markers_to_map()
  )
}

onMounted(() => {
  // Map setup requires dom to be mounted
  setup_leaflet();
})

</script>

<template>
  <v-sheet>
    <div id="map_container">
      <div v-if="deviceStore.loading" id="map_progress" class="d-flex align-center justify-center h-100">
        <v-progress-circular
          color="primary"
          indeterminate
          :size="96"
          :width="6"
        >
          <v-icon size="96" icon="mdi-tree" />
        </v-progress-circular>
      </div>
    </div>
  </v-sheet>
</template>

<style scoped>
#map_container {
  height: 50vh;
}

#map_progress {
  z-index: 1000;
  position: relative;
}

</style>