<template>
  <p class="text-h3 text-left hidden-xs" v-if="loaded">
    Trendline bodem-vochtigheid
  </p>
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
  <p class="text-left hidden-sm-and-up" style="font-size: 30px" v-if="loaded">
    Trendline bodem-vochtigheid
  </p>

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

    // calcMovingAvg(number: number) {
    //   this.counter++;
    //   this.sum += number;
    //   if (this.counter == 5) {
    //     return this.sum / this.counter;
    //   }
    //   if (this.counter == 6) {
    //     this.counter = 0;
    //     this.sum = 0;
    //   }
    // },
  },
  computed: {
    ...mapState(["timeData"]),
    lineChartData() {
      return {
        labels: this.labels,

        // this.timeData.sensors
        //   .filter(function (sensor: any) {
        //     if (sensor.field != "Moisture Level 1") {
        //       return false;
        //     }
        //     return true;
        //   })
        //   .map((el: any) => {
        //     return el.time;
        //   }),

        datasets: [
          {
            data: this.timeData.sensors
              .filter((sensor: any) => {
                if (sensor.field != "Moisture Level 1") {
                  return false;
                }
                if (this.counter0 > 6) {
                  this.counter0 = 0;
                  this.sum0 = 0;
                }
                this.counter0++;
                this.sum0 += sensor.value;
                console.log(this.sum0, "sum");
                console.log(this.counter0, "counter");

                if (this.counter0 != 6) {
                  
                  return false;
                }
                console.log("returning true");
                return true;
              })
              .map((el: any) => {
                this.labels.push(el.time);
                console.log(this.sum0, "sum in map");
                return this.sum0 / this.counter0;
              }),
            label: "Moisture level 1",
            borderColor: this.color1,
            backgroundColor: this.color1,
            fill: false,
            tension: 0.4,
            borderWidth: 10,
          },
          {
            data: this.timeData.sensors
              .filter((sensor: any) => {
                if (sensor.field != "Moisture Level 2") {
                  return false;
                }
                return true;
              })
              .map((el: any) => {
                if (el.field == "Moisture Level 2") {
                  if (this.counter1 > 5) {
                    this.counter1 = 0;
                    this.sum1 = 0;
                  }
                  this.counter1++;
                  this.sum1 += el.value;
                  if (this.counter1 == 5) {
                    return this.sum1 / this.counter1;
                  }
                }
              }),
            borderColor: this.color2,
            label: "Moisture level 2",
            backgroundColor: this.color2,
            fill: false,
            tension: 0.4,
            borderWidth: 10,
          },
          {
            data: this.timeData.sensors
              .filter((sensor: any) => {
                if (sensor.field != "Moisture Level 3") {
                  return false;
                }
                return true;
              })
              .map((el: any) => {
                if (el.field == "Moisture Level 3") {
                  if (this.counter2 > 5) {
                    this.counter2 = 0;
                    this.sum2 = 0;
                  }
                  this.counter2++;
                  this.sum2 += el.value;
                  if (this.counter2 == 5) {
                    return this.sum2 / this.counter2;
                  }
                  if (this.counter2 == 6) {
                    this.counter2 = 0;
                    this.sum2 = 0;
                  }
                }
              }),
            borderColor: this.color3,
            label: "Moisture level 3",
            backgroundColor: this.color3,
            fill: false,
            tension: 0.4,
            borderWidth: 10,
          },
          {
            data: this.timeData.sensors
              .filter((sensor: any) => {
                if (sensor.field != "Moisture Level 4") {
                  return false;
                }
                return true;
              })
              .map((el: any) => {
                if (el.field == "Moisture Level 4") {
                  if (this.counter3 > 6) {
                    this.counter3 = 0;
                    this.sum3 = 0;
                  }
                  this.counter3++;
                  this.sum3 += el.value;
                  if (this.counter3 == 5) {
                    return this.sum3 / this.counter3;
                  }
                }
              }),
            borderColor: this.color4,
            label: "Moisture level 4",
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
    counter0: 0,
    counter1: 0,
    counter2: 0,
    counter3: 0,
    labels: [] as any,
    sum0: 0,
    sum1: 0,
    sum2: 0,
    sum3: 0,

    color1: "rgb(219, 70, 48)",
    color2: "rgb(224, 196, 0)",
    color3: "rgb(0, 224, 120)",
    color4: "rgb(32, 0, 219)",
  }),
  watch: {
    timeData() {
      this.loaded = true;
      setTimeout(() => {
        console.log(this.lineChartData);
      }, 5000);
    },
  },
});
</script>

<style>
</style>