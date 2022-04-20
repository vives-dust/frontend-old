<template>
  <sensorPageTitle />
  <v-row justify="center">
    <v-col cols="8">
      <v-card class="my-5 py-5">
        <v-row justify="center">
          <v-col cols="4">
            <doughnutChart :data="doughnutChart1Data" />
          </v-col>
          <v-col cols="4">
            <doughnutChart :data="doughnutChart2Data" />
          </v-col>
        </v-row>
      </v-card>
      <v-card class="my-5"> </v-card>
    </v-col>
  </v-row>
</template>

<script>
import sensorPageTitle from "@/components/SensorPageTitle.vue";
import doughnutChart from "@/components/DoughnutChart.vue";
export default {
  name: "sensorView",
  components: {
    sensorPageTitle,
    doughnutChart,
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
      doughnutChart2Data: {
        labels: ["january", "february", "march", "april", "may", "june"],
        datasets: [
          {
            data: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 10, 10],
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
    };
  },
};
</script>

<style>
</style>