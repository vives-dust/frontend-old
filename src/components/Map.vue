<template>
  <v-card height="800" width="auto" justify="center">
    <l-map ref="map" v-model:zoom="zoom" :center="[51.037861, 4.240528]">
      <l-tile-layer
        :url="url"
        layer-type="base"
        name="OpenStreetMap"
        :max-zoom="10"
      />
      <template v-for="pin in pins" :key="pin.id">
        <l-marker :lat-lng="[pin.x, pin.y]"> </l-marker>
      </template>
    </l-map>
  </v-card>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import { mapState } from 'vuex'
export default {
  name: "mapVue",
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 9,
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
  },
  computed: mapState([
  'pins'
])
};
//https://github.com/vue-leaflet/vue3-demo-project/blob/master/src/App.vue
</script>

<style>
</style>