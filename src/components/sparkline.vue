<template>
  <v-card v-if="loaded" color="fourth" class="mx-auto text-center" dark>
    <v-card-text color="primary">
      <p class="text-h4 red--text" style="color: '#E6AC1C'">moistureLevel3</p>
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
  methods: {
    calcMovingAvg(number) {
      this.counter++;
      this.sum += number;
      console.log("counter = ", this.counter);
      console.log("sum = ", this.sum);
      if (this.counter == 20) {
        return this.sum / this.counter;
      }
      if (this.counter == 21) {
        this.counter = 0;
        this.sum = 0;
      }
    },
  },
  computed: {
    ...mapState(["timeData"]),
    lineChartData() {
      return {
        labels: this.timeData.sensors.map((el) => {
          if (el.field == "moistureLevel_1") {
            return el.field;
          }
          else if (el.field == "moistureLevel_2") {
            return el.field;
          } else if (el.field == "moistureLevel_3") {
            return el.field;
          } else if (el.field == "moistureLevel_4") {
            return el.field;
          }
        }),

        datasets: [
          {
            data: this.timeData.sensors.map((el) => {
              if (el.field == "moistureLevel_1") {
                console.log(this.data)
                return this.calcMovingAvg(el.value)
              }
            }),
            borderColor: "#DB4630",
            backgroundColor: "#DB4630",
            fill: false,
            tension: 0.3,
            borderWidth: 12,
          },
          {
            data: this.timeData.sensors.map((el) => {
              if (el.field == "moistureLevel_2") {
                return this.calcMovingAvg(el.value);
              }
            }),
            borderColor: "#E0C400",
            backgroundColor: "#E0C400",
            fill: false,
            tension: 0.4,
            borderWidth: 15,
          },
          {
            data: this.timeData.sensors.map((el) => {
              if (el.field == "moistureLevel_3") {
                return this.calcMovingAvg(el.value);
              }
            }),
            borderColor: "#00E078",
            backgroundColor: "#00E078",
            fill: false,
            tension: 0.4,
            borderWidth: 15,
          },
          {
            data: this.timeData.sensors.map((el) => {
              if (el.field == "moistureLevel_4") {
                return this.calcMovingAvg(el.value);
              }
            }),
            borderColor: "#2000DB",
            backgroundColor: "#2000DB",
            fill: false,
            tension: 0.2,
            borderWidth: 15,
          },
        ],
      };
    },
  },
  data: () => ({
    loaded: false,
    options: SparklineConfig.config.options,
    counter: 0,
    sum: 0,
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