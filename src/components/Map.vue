<template>
  <v-card height="800" width="auto" justify="center">
    <l-map ref="map" v-model:zoom="zoom" :center="[51.037861, 4.240528]">
      <l-tile-layer
        :url="url"
        layer-type="base"
        name="OpenStreetMap"
        :max-zoom="10"
      />
    </l-map>
  </v-card>
</template>

<script>
import { useI18n } from 'vue-i18n';
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
  setup() {
    const { t, locale } = useI18n();

    return { t, locale };
  },
};
//https://github.com/vue-leaflet/vue3-demo-project/blob/master/src/App.vue
</script>

<style>
</style>