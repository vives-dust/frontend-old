<template>
  <v-card height="400" width="auto" justify="center">
    <l-map
      ref="map"
      v-model:zoom="zoom"
      :center="[device.location.latitude, device.location.longitude]"
    >
      <l-tile-layer
        :url="url"
        layer-type="base"
        name="OpenStreetMap"
        :max-zoom="18"
      />
      <l-marker
        :lat-lng="[device.location.latitude, device.location.longitude]"
      >
        <l-tooltip>
          Name: {{ device.name }} <br />
          Description: {{ device.description }} <br />
          Placed in location {{ device.location.latitude }},
          {{ device.location.longitude }}
        </l-tooltip>
      </l-marker>
    </l-map>
  </v-card>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { mapState } from "vuex";
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
export default {
  name: "singleMarkerMap",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
  },
  computed: mapState(["device"]),
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
  },
};
//https://github.com/vue-leaflet/vue3-demo-project/blob/master/src/App.vue
</script>

<style>
</style>