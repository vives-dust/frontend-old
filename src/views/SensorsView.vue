<template>
  <v-row justify="center" v-if="loaded">
    <v-col cols="11" sm="8">
      <p class="text-h1 text-center mt-15 hidden-xs">
        Sensors of device {{ this.$route.params.id }}
      </p>
      <p
        class="text-h3 text-center mt-1 hidden-sm-and-up"
        style="font-size: 30px"
      >
        Sensors of device {{ this.$route.params.id }}
      </p>
      <v-divider class="mb-10 mt-3 hidden-xs"></v-divider>
      <v-divider class="mb-1 mt-1 hidden-sm-and-up"></v-divider>

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

      <p class="text-h3 text-left mt-15">Humidity Sensors</p>
      <v-divider class="mb-10 mt-3"></v-divider>
      <v-card class="my-5">
        <lineChart :data="lineChartData" />
      </v-card>
      <p class="text-h3 text-left mt-15">Temperature sensor</p>
      <v-divider class="mb-10 mt-3"></v-divider>
      <v-card class="my-5">
        <lineChart :data="lineChartData" />
      </v-card>
    </v-col>
  </v-row>
  <p class="text-h1"></p>
</template>

<script>
import { mapState } from "vuex";
import lineChart from "@/components/LineChart.vue";

export default {
  name: "sensorsViews",
  components: {
    lineChart,
  },
  data: () => ({
    selectTime: ["1h", "24h", "7d", "31d", "1y", "all"],
    select: "1h",
    loaded: false,
  }),
  methods: {
    ChartTimeChanged() {
      this.$store.commit("change_time", {
        time: this.select,
      });
      this.$store.dispatch("get_periodeData");
    },
  },
  created() {
    this.$store.commit("change_currentlySelectedPin", {
      currentlySelectedPin: this.devices[this.$route.params.id],
    });

    this.$store.dispatch("get_device");
    this.$store.dispatch("get_periodeData");
  },
  computed: {
    ...mapState(["timeData","devices"]),
    lineChartData() {
      return {
        labels: this.timeData.sensors.map((el) => {
          if (el.field == "moistureLevel_1") {
            return el.time;
          } else if (el.field == "moistureLevel_2") {
            return el.time;
          } else if (el.field == "moistureLevel_3") {
            return el.time;
          } else if (el.field == "moistureLevel_4") {
            return el.time;
          }
        }),

        datasets: [
          {
            data: this.timeData.sensors.map((el) => {
              if (el.field == "moistureLevel_1") {
                return el.value;
              }
            }),
            borderColor: "#DB4630",
            backgroundColor: "#DB4630",
            fill: false,
            tension: 0.4,
            borderWidth: 10,
            label: "moistureLevel_",
          },
          {
            data: this.timeData.sensors.map((el) => {
              if (el.field == "moistureLevel_2") {
                return el.value;
              }
            }),
            borderColor: "#E0C400",
            backgroundColor: "#E0C400",
            fill: false,
            tension: 0.4,
            borderWidth: 10,
            label: "moistureLevel_2",

          },
          {
            data: this.timeData.sensors.map((el) => {
              if (el.field == "moistureLevel_3") {
                return el.value;
              }
            }),
            borderColor: "#00E078",
            backgroundColor: "#00E078",
            fill: false,
            tension: 0.4,
            borderWidth: 10,
            label: "moistureLevel_2",

          },
          {
            data: this.timeData.sensors.map((el) => {
              if (el.field == "moistureLevel_4") {
                return el.value;
              }
            }),
            borderColor: "#2000DB",
            backgroundColor: "#2000DB",
            fill: false,
            tension: 0.4,
            borderWidth: 10,
            label: "moistureLevel_2",

          },
        ],
      };
    },
  },
  watch: {
    timeData() {
      this.loaded = true;
    },
  },
};
</script>

<style>
</style>