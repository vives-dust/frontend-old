<template>
  <sensorPageTitle />
  <v-row justify="center">
    <v-col cols="8">
      <v-card>
        <barChart />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import sensorPageTitle from "@/components/SensorPageTitle.vue";
import barChart from "@/components/BarChart.vue";
export default {
  name: "sensorView",
  components: {
    sensorPageTitle,
    barChart,
  },
};
</script>

<style>
</style>