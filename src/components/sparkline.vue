<template>

  <p class="text-h3 text-left hidden-xs" v-if="loaded">Trendline bodem-vochtigheid</p>
  <v-container
    v-if="loaded"
    color="blue"
    class="mx-auto text-center hidden-xs"
    dark
  >
    <v-card elevation="0">
      <LineChart :chart-data="lineChartData" :options="options" />
    </v-card>
  </v-container>

  <!-- MOBILE -->
  <p class="text-left hidden-sm-and-up" style="font-size: 30px;" v-if="loaded">Trendline bodem-vochtigheid</p>

  <v-container
    v-if="loaded"
    color="blue"
    class="mx-auto text-center hidden-sm-and-up"
    dark
  >
    <v-card elevation="0">
      <LineChart :chart-data="lineChartData" :options="options" />
    </v-card>
  </v-container>

</template> 

<script lang="ts">
import SparklineConfig from "@/source/sparklineConfig";
import { LineChart } from "vue-chart-3";
import { mapState } from "vuex";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { defineComponent } from "vue";
export default defineComponent({
  name: "sparklineGraph",
  components: { LineChart },
  methods: {
    MouseOver(line: number) {
      if (line == 1) {
        this.color1 = "rgb(219, 70, 48,1)";
        this.color2 = "rgb(224, 196, 0, 0.1)";
        this.color3 = "rgb(0, 224, 120, 0.1)";
        this.color4 = "rgb(32, 0, 219, 0.1)";
      } else if (line == 2) {
        this.color1 = "rgb(219, 70, 48,0.1)";
        this.color2 = "rgb(224, 196, 0, 1)";
        this.color3 = "rgb(0, 224, 120, 0.1)";
        this.color4 = "rgb(32, 0, 219, 0.1)";
      } else if (line == 3) {
        this.color1 = "rgb(219, 70, 48,0.1)";
        this.color2 = "rgb(224, 196, 0, 0.1)";
        this.color3 = "rgb(0, 224, 120, 1)";
        this.color4 = "rgb(32, 0, 219, 0.1)";
      } else if (line == 4) {
        this.color1 = "rgb(219, 70, 48,0.1)";
        this.color2 = "rgb(224, 196, 0, 0.1)";
        this.color3 = "rgb(0, 224, 120, 0.1)";
        this.color4 = "rgb(32, 0, 219, 1)";
      }
    },
    MouseLeave() {
      this.color1 = "rgb(219, 70, 48)";
      this.color2 = "rgb(224, 196, 0)";
      this.color3 = "rgb(0, 224, 120)";
      this.color4 = "rgb(32, 0, 219)";
    },
    SparklineClicked() {
      this.$router.push({
        name: "sensors",
        params: { id: this.$route.params.id },
        query: { time: this.$store.state.time },
      });
    },

    calcMovingAvg(number: number) {
      this.counter++;
      this.sum += number;
      if (this.counter == 5) {
        return this.sum / this.counter;
      }
      if (this.counter == 6) {
        this.counter = 0;
        this.sum = 0;
      }
    },
  },
  computed: {
    ...mapState(["timeData"]),
    lineChartData() {
      return {
        labels: this.timeData.sensors.map((el: any) => {
          if (el.field == "moistureLevel_1") {
            return el.field;
          } else if (el.field == "moistureLevel_2") {
            return el.field;
          } else if (el.field == "moistureLevel_3") {
            return el.field;
          } else if (el.field == "moistureLevel_4") {
            return el.field;
          }
        }),

        datasets: [
          {
            data: this.timeData.sensors.map((el: any) => {
              if (el.field == "moistureLevel_1") {
                return this.calcMovingAvg(el.value);
              }
            }),
            label: "Moisture level one",
            borderColor: this.color1,
            backgroundColor: this.color1,
            fill: false,
            tension: 0.4,
            borderWidth: 10,
          },
          {
            data: this.timeData.sensors.map((el: any) => {
              if (el.field == "moistureLevel_2") {
                return this.calcMovingAvg(el.value);
              }
            }),
            borderColor: this.color2,
            label: "Moisture level two",
            backgroundColor: this.color2,
            fill: false,
            tension: 0.4,
            borderWidth: 10,
          },
          {
            data: this.timeData.sensors.map((el: any) => {
              if (el.field == "moistureLevel_3") {
                return this.calcMovingAvg(el.value);
              }
            }),
            borderColor: this.color3,
            label: "Moisture level three",
            backgroundColor: this.color3,
            fill: false,
            tension: 0.4,
            borderWidth: 10,
          },
          {
            data: this.timeData.sensors.map((el: any) => {
              if (el.field == "moistureLevel_4") {
                return this.calcMovingAvg(el.value);
              }
            }),
            borderColor: this.color4,
            label: "Moisture level four",
            backgroundColor: this.color4,
            fill: false,
            tension: 0.4,
            borderWidth: 10,
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
    color1: "rgb(219, 70, 48)",
    color2: "rgb(224, 196, 0)",
    color3: "rgb(0, 224, 120)",
    color4: "rgb(32, 0, 219)",
  }),
  watch: {
    timeData() {
      this.loaded = true;
    },
  },
});
</script>

<style>
</style>