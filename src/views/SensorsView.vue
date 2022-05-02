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
        <lineChart :data="linechartDataMoisture" />
      </v-card>
      <div v-for="(data,index) in linechartDataNonMoisture.dataset" :key="index">
        <p class="text-h3 text-left mt-15">nothing</p>
        <v-divider class="mb-10 mt-3"></v-divider>
        <v-card class="my-5">
          <lineChart :data="linechartDataNonMoisture" />
        </v-card>
      </div>
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

    linechartDataNonMoisture: {
      labels: [],
      datasets: [],                   //this needs to be inside of an array to add to diffrent graphs in the v-for loop
    },
    linechartDataMoisture: {
      labels: [],
      datasets: [],
    },
  }),
  methods: {
    ChartTimeChanged() {
      this.$store.commit("change_time", {
        time: this.select,
      });
      this.$store.dispatch("get_periodeData");
    },
    CreateSensorData() {
      this.device.sensors.forEach((sensor) => {
        console.log(sensor.field);
        if (sensor.field.includes("moistureLevel")) {
          this.linechartDataMoisture.datasets.push({
            data: this.timeData.sensors.map((el) => {
              if (el.field == sensor.field) {
                this.linechartDataMoisture.labels.push(el.time);
                return el.value;
              }
            }),
            borderColor: "#DB4630",
            backgroundColor: "#DB4630",
            fill: false,
            tension: 0.4,
            borderWidth: 10,
            label: sensor.field,
          });
        } else {
          console.log("else aangeroepen");
          this.linechartDataNonMoisture.datasets.push({
            data: this.timeData.sensors.map((el) => {
              if (el.field == sensor.field) {
                this.linechartDataNonMoisture.labels.push(el.time);
                return el.value;
              }
            }),
            borderColor: "#DB4630",
            backgroundColor: "#DB4630",
            fill: false,
            tension: 0.4,
            borderWidth: 10,
            label: sensor.field,
          });
        }
      });
    },
  },
  created() {
    this.$store.commit("change_currentlySelectedPin", {
      currentlySelectedPin: this.devices[this.$route.params.id],
    });

    this.$store.dispatch("get_device");
    this.$store.dispatch("get_periodeData");
    this.dataSetNonMoisture = [];
  },
  computed: {
    ...mapState(["timeData", "devices", "device"]),
  },
  watch: {
    timeData() {
      this.loaded = true;
      this.dataSetNonMoisture = [];
      this.dataSetMoisture = [];
      this.CreateSensorData();
    },
  },
};
</script>

<style>
</style>