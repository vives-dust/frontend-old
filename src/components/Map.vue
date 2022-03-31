<template>
  <v-card height="800" width="auto" justify="center">
  <l-map ref="map" v-model:zoom="zoom" :center="[51.209348, 3.2246995]">
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
      :max-zoom="10"
    />
    <l-tile-layer
      url="https://s3.amazonaws.com/te512.safecast.org/{z}/{x}/{y}.png"
      attribution="<a href='https://blog.safecast.org/about/'>SafeCast</a> (<a href='https://creativecommons.org/licenses/by-sa/3.0/'>CC-BY-SA</a>"
      :min-zoom="5"
      :max-zoom="7"
    />
    </l-map>
  </v-card>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
export default {
  name: "mapVue",
  components: {
    LMap,
    LTileLayer,
  },
   data() {
    return {
      zoom: 2,
    };
  },
};
//https://github.com/vue-leaflet/vue3-demo-project/blob/master/src/App.vue
  // data() {
  //   return {
  //     center: [51.209348, 3.2246995],
  //     data: [],
  //     markerarray: [],
  //     map: null,
  //     loaded: false,
  //     icon: [],
  //     anchor: [],
  //     currentZoom: null,
  //     manIcon: "",
  //     maxBounds: [
  //       //south west
  //       [-90, -180],
  //       //north east
  //       [90, 180],
  //     ],
  //   };
  // },

  // mounted() {
  //   this.setupLeafletMap();
  // },
  // methods: {
  //   setupLeafletMap() {
  //     this.map = L.map("map", { center: this.center, zoom: 14 });
  //     L.tileLayer(
  //       "https://api.mapbox.com/styles/v1/{username}/{style_id}/tiles/{z}/{x}/{y}@2x?access_token={access_token}",
  //       {
  //         username: "flixushd",
  //         style_id: "cl1c3dprv001f14p2czv6gdte", //need to make a custom map for this.
  //         access_token: process.env.MAPBOX_TOKEN,
  //         z: "20",
  //         x: "1",
  //         y: "1",
  //       }
  //     ).addTo(this.map);

  //     this.map.setMaxBounds(this.maxBounds);
  //   },
  // },
</script>

<style>
</style>