<template>
  <v-card :height="xs ? 300 : 800" width="auto" justify="center">
    <l-map ref="map" v-model:zoom="zoom" :center="[51.037861, 4.240528]" @ready="handleMapSetup" :max-zoom="15">
      <l-tile-layer
        :url="url"
        layer-type="base"
        name="OpenStreetMap"
      />
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
import { useDisplay } from "vuetify";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
import { Map, Marker,  } from "leaflet"; //needed by markercluster
import { mapState } from "vuex";

import { MarkerClusterGroup } from "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
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
    };
  },
  methods: {
    pinClicked(pinid) {
      this.$router.push({ name: "device", params: { id: pinid } });
    },
    async handleMapSetup() {
      
      this.siteMarkersGroup = new MarkerClusterGroup();
      this.$refs.map.leafletObject.addLayer(this.siteMarkersGroup);
      await this.$nextTick();
      // `sites` is an array of objects with some coordinates.
      this.siteMarkersGroup.addLayers(
        this.devices.map((s) => {
          const options = { title: s.name, clickable: true, draggable: false };
          console.log(this.$refs.map,"MAP")
          return this.$refs.map.leafletObject.marker(
            s.location,
            options
          ).bindPopup(this.funcBuildingHTMLStringForPopup(s));
        })
      );
    },
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