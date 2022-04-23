<template>
  <sensorPageTitle :currentSensor="this.currentSensor" />
  <v-row justify="center">
    <v-col cols="11" sm="8">
      <singleMarkerMap :currentSensor="this.currentSensor" :height="xs ? 250 : 300" />
      <p class="text-h2 text-left mt-15">Summary</p>
      <v-divider class="mb-10 mt-3"></v-divider>
      <v-card class="my-5 py-5" >
        <v-row justify="center">
          <v-col cols="6" sm="4">
            <doughnutChart class="hidden-sm-and-up" :data="doughnutChart1Data" :options="doughnutChart1Options"/>
            <doughnutChart class="hidden-xs" :data="doughnutChart1Data"/>

          </v-col>
          <v-col cols="6" sm="4">
            <doughnutChart class="hidden-sm-and-up" :data="doughnutChart2Data" :options="doughnutChart2Options"/>
            <doughnutChart class="hidden-xs" :data="doughnutChart1Data"/>
          </v-col>
        </v-row>
      </v-card>
      <p class="text-h3 text-left mt-15">Humidity Sensors</p>
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
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { useDisplay } from "vuetify";
import sensorPageTitle from "@/components/SensorPageTitle.vue";
import doughnutChart from "@/components/DoughnutChart.vue";
import lineChart from "@/components/LineChart.vue";
import singleMarkerMap from "@/components/SingleMarkerMap.vue";
import { mapState } from "vuex";
export default {
  name: "sensorView",
  components: {
    sensorPageTitle,
    doughnutChart,
    lineChart,
    singleMarkerMap,
  },
  created() {
    this.id = this.$route.params.id;
    this.SearchForSensor(this.id);
  },
  methods: {
    SearchForSensor(id) {
      return this.pins.forEach((pin) => {
        if (pin.id == id) {
          this.currentSensor = pin;
        }
      });
    },
  },
  computed: mapState(["pins"]),
   setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
  },
  data() {
    return {
      id: "",
      currentSensor: null,
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
      doughnutChart1Options:{
        plugins:{
          legend:{
            display: false
          }
        }
      },
      doughnutChart2Options:{
        plugins:{
          legend:{
            display: false
          }
        }
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
      lineChart1Data: {
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
            label: "soil moisture level 1",
            data: [40, 39, 10, 40, 39, 80, 100],
            borderColor: "#E6AC1C",
            backgroundColor: "#E6AC1C",
            fill: false,
            tension: 0.4,
            pointHitRadius: 100,
          },
          {
            label: "soil moisture level 2",
            data: [80, 90, 70, 100, 70, 110, 60],
            borderColor: "#49E658",
            backgroundColor: "#49E658",
            fill: false,
            tension: 0.4,
            pointHitRadius: 100,
          },
          {
            label: "soil moisture level 3",
            data: [150, 140, 130, 160, 150, 120, 150],
            borderColor: "#E6B332",
            backgroundColor: "#E6B332",
            fill: false,
            tension: 0.4,
            pointHitRadius: 100,
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