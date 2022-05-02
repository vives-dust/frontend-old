<template>
  <sensorPageTitle :currentDevice="this.currentlySelectedPin" />
  <v-row justify="center">
    <v-col cols="11" sm="8">
      <singleMarkerMap
        :currentDevice="this.currentlySelectedPin"
        :height="xs ? 150 : 300"
      />
      <deviceValues class="my-5 hidden-xs" />
      <v-divider class="my-5 hidden-xs"></v-divider>


      <deviceValues class="my-1 hidden-sm-and-up" />
      <v-divider class="my-1 hidden-sm-and-up"></v-divider>


      <sparkline-graph />

      <!-- <p class="text-h3 text-left mt-15">Humidity Sensors</p>
      <v-divider class="mb-10 mt-3"></v-divider>
      <v-card class="my-5">
        <lineChart :data="lineChart1Data" />
      </v-card>
      <p class="text-h3 text-left mt-15">Temperature sensor</p>
      <v-divider class="mb-10 mt-3"></v-divider>
      <v-card class="my-5">
        <lineChart :data="lineChart2Data" />
      </v-card>
      <p class="text-h3 text-left mt-15">Light sensor</p>
      <v-divider class="mb-10 mt-3"></v-divider>
      <v-card class="my-5">
        <lineChart :data="lineChart3Data" />
      </v-card> -->
    </v-col>
  </v-row>
</template>

<script>
import { useDisplay } from "vuetify";
import sparklineGraph from "@/components/sparkline.vue";
import sensorPageTitle from "@/components/SensorPageTitle.vue";
import deviceValues from "@/components/LatestDeviceValueCards.vue";
import singleMarkerMap from "@/components/SingleMarkerMap.vue";
import { mapState } from "vuex";
export default {
  name: "deviceView",
  components: {
    sensorPageTitle,
    singleMarkerMap,
    deviceValues,
    sparklineGraph,
  },
  created() {
    this.$store.commit("change_currentlySelectedPin", {
      currentlySelectedPin: this.devices[this.$route.params.id],
    });
    
    this.$store.dispatch("get_device");
    this.$store.dispatch("get_periodeData");

  },
  computed: mapState(["devices", "currentlySelectedPin"]),
  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
  },
};
</script>

<style>
</style>