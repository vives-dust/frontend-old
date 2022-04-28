<template>
  <v-card v-if="loaded" color="fourth" class="mx-auto text-center" dark>
    <v-card-text>
      <div class="text-h4 font-weight-thin">moistureLevel3</div>
    </v-card-text>

    <v-divider></v-divider>
    <v-sheet class="mx-3 my-3" color="rgba(0, 0, 0, .12)">
      <LineChart :chart-data="lineChartData" :options="options" />
    </v-sheet>
  </v-card>
</template> 

<script>
import SparklineConfig from "@/api/sparklineConfig.ts";
import { LineChart } from "vue-chart-3";
import { mapState } from "vuex";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default {
  name: "sparklineGraph",
  components: { LineChart },
  computed: {
    ...mapState(["timeData"]),
    lineChartData() {
      return {
        labels: this.timeData.sensors.map((el) => {
              if (el.field == "moistureLevel_1") {
                this.counter++;
                return this.counter;
              }
              this.counter = 0
            }),

        datasets: [
          {
            data: this.timeData.sensors.map((el) => {
              if (el.field == "moistureLevel_1") {
                return el.value;
              }
            }),
            borderColor: "#E6AC1C",
            backgroundColor: "#E6AC1C",
            fill: false,
            tension: 0.4,
            borderWidth: 12,
          },
        ],
      };
    },
  },
  data: () => ({
    loaded: false,
    options: SparklineConfig.config.options,
    counter: 0
  }),
  watch: {
    timeData() {
      this.loaded = true;
    },
  },
};
</script>

<style>
</style>