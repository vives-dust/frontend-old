<template>
  <v-card color="fourth" class="mx-auto text-center" dark>
    <v-card-text>
      <div class="text-h4 font-weight-thin">moistureLevel3</div>
    </v-card-text>

    <v-divider></v-divider>
    <v-sheet class="mx-3 my-3" color="rgba(0, 0, 0, .12)">
      <LineChart :chartData="lineChartData" :options="options" />
    </v-sheet>
  </v-card>
</template> 

<script>
import SparklineConfig from "@/api/sparklineConfig.ts";
import { LineChart } from "vue-chart-3";

import { Chart, registerables } from "chart.js";
var delayed;
Chart.register(...registerables);
export default {
  name: "sparklineGraph",
  components: { LineChart },
  data: () => ({
    options: SparklineConfig.config.options,
    lineChartData: {
      labels: ["", "", "", "", "", "", ""],

      datasets: [
        {
          label: "soil moisture level 1",
          data: [40, 39, 10, 40, 39, 80, 100],
          borderColor: "#E6AC1C",
          backgroundColor: "#E6AC1C",
          fill: false,
          tension: 0.4,
          pointHitRadius: 100,
          borderWidth: 12,
        },
      ],
    },
  }),
};
</script>

<style>
</style>