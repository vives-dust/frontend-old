<template>
  <v-card>
    <LineChart :chartData="lineChartData" :options="options" />
  </v-card>
</template> 

<script>
import SparklineConfig from "@/api/sparklineConfig.ts";
import { LineChart } from "vue-chart-3";

import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
export default {
  name: "sparklineGraph",
  components: { LineChart },
  data: () => ({
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks:{
            display: false
          }
        },
        y: {
          grid: {
            display: false,
          },
                    ticks:{
            display: false
          }
        },
      },
    },
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