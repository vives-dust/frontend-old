<template>
  <v-card height="400" width="auto" justify="center">
    <l-map ref="map" v-model:zoom="zoom" :center="[currentDevice.location.latitude, currentDevice.location.longitude]">
      <l-tile-layer
        :url="url"
        layer-type="base"
        name="OpenStreetMap"
        :max-zoom="18"
      />
      <l-marker :lat-lng="[currentDevice.location.latitude, currentDevice.location.longitude]">
        <l-tooltip>
          Name: {{ currentDevice.name }} <br />
          Placed in location {{ currentDevice.x }}, {{ currentDevice.y }}
        </l-tooltip>
      </l-marker>
    </l-map>
  </v-card>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
export default {
  name: "singleMarkerMap",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
  },
  props: ["currentDevice"],
  data() {
    return {
      zoom: 13,
      urlConfig: {
        username: "flixushd",
        style_id: process.env.VUE_APP_STYLE_ID,
        acces_token: process.env.VUE_APP_MAPBOX_TOKEN,
      },

      url: "",
    };
  },
  mounted() {
    this.url = `https://api.mapbox.com/styles/v1/${this.urlConfig.username}/${this.urlConfig.style_id}/tiles/256/{z}/{x}/{y}@2x?access_token=${this.urlConfig.acces_token}`;
  }
};
//https://github.com/vue-leaflet/vue3-demo-project/blob/master/src/App.vue
</script>

<style>
</style>