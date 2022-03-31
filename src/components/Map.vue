<template>
  <v-card height="800" width="auto" justify="center">
  <l-map style="height:50vh">
    <l-geo-json :geojson="geojson" :options="geojsonOptions" />
  </l-map>
  </v-card>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LGeoJson } from "@vue-leaflet/vue-leaflet";
export default {
  name: "mapVue",
  components: {
    LMap,
    LGeoJson,
  },
   data () {
   return {
      geojson: {
        type: "FeatureCollection",
        features: [
          // ...
        ],
      },
      geojsonOptions: {
        // Options that don't rely on Leaflet methods.
      },
    };
  },
  async beforeMount() {
    // HERE is where to load Leaflet components!
    const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");

    // And now the Leaflet circleMarker function can be used by the options:
    this.geojsonOptions.pointToLayer = (feature, latLng) =>
      circleMarker(latLng, { radius: 8 });
    this.mapIsReady = true;
  },
};
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