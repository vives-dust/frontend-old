<template>
  <v-card :height="xs ? 300 : 800" width="auto" justify="center">
    <l-map
      ref="map"
      v-model:zoom="zoom"
      :center="[51.037861, 4.240528]"
      :max-zoom="15"
      @ready="MapReady"
    >
      <l-tile-layer :url="url" layer-type="base" name="OpenStreetMap" />
      <template v-for="(device, index) in devices" :key="index">
        <l-marker
          :lat-lng="[device.location.latitude, device.location.longitude]"
          @click="pinClicked(index)"
        >
          <l-tooltip>
            Marker: {{ device.name }} <br />
            Description: {{ device.description }} <br />
            Placed in location {{ device.location.latitude }},
            {{ device.location.longitude }}
          </l-tooltip>
        </l-marker>
      </template>
    </l-map>
  </v-card>
</template>

<script>
//https://github.com/vue-leaflet/vue-leaflet/blob/master/docs/quickstart/index.md
import { useDisplay } from "vuetify";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
// import L from "leaflet";
import { mapState } from "vuex";
// import "../../node_modules/leaflet.markercluster/dist/MarkerCluster.css";
// import "../../node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css";
// import "../../node_modules/leaflet.markercluster/dist/leaflet.markercluster.js";


export default {
  name: "mapVue",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
  },
  data() {
    return {
      zoom: 9,
      urlConfig: {
        username: "flixushd",
        style_id: process.env.VUE_APP_STYLE_ID,
        acces_token: process.env.VUE_APP_MAPBOX_TOKEN,
      },
      siteMarkersGroup: null,

      url: "",
      map: null,
    };
  },
  methods: {
    pinClicked(pinid) {
      this.$router.push({ name: "device", params: { id: pinid } });
    },
    // MapReady() {
    //   this.$nextTick(() => {
    //     let map = this.$refs.map.leafletObject;
    //     let markers = L.markerClusterGroup();
    //     markers.addLayer(L.marker([52, 2]));
    //     markers.addLayer(L.marker([53.1, 5]));
    //     map.addLayer(markers);  
    //   });
    // },
  },
  mounted() {
    this.url = `https://api.mapbox.com/styles/v1/${this.urlConfig.username}/${this.urlConfig.style_id}/tiles/256/{z}/{x}/{y}@2x?access_token=${this.urlConfig.acces_token}`;
  },
  computed: mapState(["devices"]),
  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
  },
};

//https://github.com/vue-leaflet/vue3-demo-project/blob/master/src/App.vue
</script>

<style>
</style>