<template>
  <sensorPageTitle :currentDevice="this.currentlySelectedPin" />
  <v-row justify="center">
    <v-col cols="11" sm="8">
      <singleMarkerMap
        :currentDevice="this.currentlySelectedPin"
        :height="xs ? 150 : 300"
      />
      <deviceValues class="my-5" />
      <sparkline-graph/>

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
import sparklineGraph from "@/components/sparkline.vue"
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
    sparklineGraph
  },
  created() {
    console.log('creating deviceview')
    this.$store.commit("change_currentlySelectedPin", {
      currentlySelectedPin: this.devices[this.$route.params.id],
    });
      this.$store.dispatch("get_device");
  },
  computed: mapState(["devices", "currentlySelectedPin"]),
  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
  },
  data() {
    return {
      doughnutChart1Data: {
        labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
        datasets: [
          {
            data: [30, 40, 60, 70, 5],
            backgroundColor: [
              "#77CEFF",
              "#0079AF",
              "#123E6B",
              "#97B0C4",
              "#A5C8ED",
            ],
          },
        ],
      },
      doughnutChart1Options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
      doughnutChart2Options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
      doughnutChart2Data: {
        labels: ["january", "february", "march", "april", "may", "june"],
        datasets: [
          {
            data: [8, 8, 8, 8, 8, 30],
            backgroundColor: [
              "#77CEFF",
              "#0079AF",
              "#123E6B",
              "#97B0C4",
              "#A5C8ED",
            ],
          },
        ],
      },


      lineChart2Data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Temperature",
            data: [40, 39, 10, 40, 39, 80, 100],
            borderColor: "#B34E3E",
            backgroundColor: "#B34E3E ",
            fill: true,
            tension: 0.4,
            pointHitRadius: 100,
          },
        ],
      },

      lineChart3Data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Light",
            data: [50, 100, 100, 20, 150, 10, 80],
            borderColor: "#E0E600",
            backgroundColor: "#E0E600 ",
            fill: true,
            tension: 0.4,
            pointHitRadius: 100,
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>