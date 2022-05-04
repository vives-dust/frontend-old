<template>
  <v-card
    v-if="loaded"
    color="white"
    class="mx-auto text-center hidden-xs"
    dark
  >
    <v-row justify="center" class="mx-3 my-3">
      <v-col cols="auto">
        <v-card class="px-3 py-3" elevation="5">
          <p class="text-h4" style="color: #db4630">moistureLevel1</p>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="px-3 py-3" elevation="5">
          <p class="text-h4" style="color: #e0c400">moistureLevel2</p>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="px-3 py-3" elevation="5">
          <p class="text-h4" style="color: #00e078">moistureLevel3</p>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="px-3 py-3" elevation="5">
          <p class="text-h4" style="color: #2000db">moistureLevel4</p>
        </v-card>
      </v-col>
    </v-row>
    <v-card-actions>
      <v-select
        v-model="select"
        :items="selectTime"
        label="Select time"
        solo
        hide-details
        single-line
        prepend-icon="mdi:mdi-chart-timeline-variant-shimmer"
        @update:modelValue="ChartTimeChanged"
      ></v-select>
    </v-card-actions>

    <v-divider></v-divider>
    <v-card elevation="0" dense @click="SparklineClicked">
      <LineChart
        :chart-data="lineChartData"
        :options="options"
        @click="SparklineClicked"
      />
    </v-card>
  </v-card>

  <v-card
    v-if="loaded"
    color="white"
    class="mx-auto text-center hidden-sm-and-up"
    dark
  >
    <v-card elevation="0" dense @click="SparklineClicked"
      ><LineChart :chart-data="lineChartData" :options="options"
    /></v-card>
    <v-card-actions>
      <v-select
        v-model="select"
        :items="selectTime"
        label="Select time"
        solo
        hide-details
        single-line
        prepend-icon="mdi:mdi-chart-timeline-variant-shimmer"
        @update:modelValue="ChartTimeChanged"
      ></v-select>
    </v-card-actions>
    <v-row justify="center" class="mx-1 my-1">
      <v-col cols="auto">
        <v-card class="px-3 py-3" elevation="5">
          <p style="color: #db4630">moistureLevel1</p>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="px-3 py-3" elevation="5">
          <p style="color: #e0c400">moistureLevel2</p>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="px-3 py-3" elevation="5">
          <p style="color: #00e078">moistureLevel3</p>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="px-3 py-3" elevation="5">
          <p style="color: #2000db">moistureLevel4</p>
        </v-card>
      </v-col>
    </v-row>
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
    SparklineClicked() {
      this.$router.push({
        name: "sensors",
        params: { id: this.$route.params.id},
        query: { time: this.select }
      });
    },
    ChartTimeChanged() {
      this.$store.commit("change_time", {
        time: this.select,
      });
      this.$store.dispatch("get_periodeData");
    },
    calcMovingAvg(number) {
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
        labels: this.timeData.sensors.map((el) => {
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
            data: this.timeData.sensors.map((el) => {
              if (el.field == "moistureLevel_1") {
                return this.calcMovingAvg(el.value);
              }
            }),
            borderColor: "#DB4630",
            backgroundColor: "#DB4630",
            fill: false,
            tension: 0.4,
            borderWidth: 10,
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
            borderWidth: 10,
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
            borderWidth: 10,
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
    selectTime: ["1h", "24h", "7d", "31d", "1y", "all"],
    select: "1h",
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