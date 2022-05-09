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
      <div
        v-for="(data, index) in linechartDataNonMoisture.datasets"
        :key="index"
      >
        <p class="text-h3 text-left mt-15">{{ data.label }}</p>
        <v-divider class="mb-10 mt-3"></v-divider>
        <v-card class="my-5">
          <lineChart :data="CombineNoneMoistureData(index)" />
        </v-card>
      </div>
    </v-col>
  </v-row>
  <p class="text-h1"></p>
</template>

<script lang="ts">
import { mapState } from "vuex";
import lineChart from "@/components/LineChart.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "sensorsViews",
  components: {
    lineChart,
  },

  data: () => ({
    selectTime: ["1h", "24h", "7d", "31d", "1y", "all"],
    select: "1h",
    loaded: false,
    colors: [] as any[],
    formatedTime: "",
    linechartDataNonMoisture: {
      labels: [] as any[],
      datasets: [] as any[],           //might still cause problems
    },
    linechartDataMoisture: {
      labels: [] as any[],
      datasets: [] as any[],
    },
  }),
  methods: {
    FormatTime(time:string) {
      let dateObject = new Date(time);
      if (this.select == "1h") {
        this.formatedTime = `${dateObject.getHours()}:${dateObject.getMinutes()}`;
      } else if (this.select == "24h") {
        this.formatedTime = `${dateObject.getHours()}:${dateObject.getMinutes()}`;
      } else if (this.select == "7d") {
        this.formatedTime = `${dateObject.getDate()}/${dateObject.getMonth()} - ${dateObject.getHours()}h`;
      } else if (this.select == "31d") {
        this.formatedTime = `${dateObject.getDate()}/${dateObject.getMonth()} - ${dateObject.getHours()}h`;
      } else if (this.select == "1y") {
        this.formatedTime = `${dateObject.getDate()}/${dateObject.getMonth()}/${dateObject.getFullYear()}`;
      } else {
        this.formatedTime = `${dateObject.getDate()}/${dateObject.getMonth()}/${dateObject.getFullYear()}`;
      }
    },
    CombineNoneMoistureData(index:number) {
      return {
        labels: this.linechartDataNonMoisture.labels,
        datasets: [this.linechartDataNonMoisture.datasets[index]],
      };
    },
    ChartTimeChanged() {
      this.$store.commit("change_time", {
        time: this.select,
      });
      this.$store.dispatch("get_periodeData");
    },
    CreateDataMoisture(index:number) {
      return {
        data: this.timeData.sensors
          .map((el:any) => {
            if (el.field == this.device.sensors[index].field) {
              this.FormatTime(el.time);
              if (
                !this.linechartDataMoisture.labels.find(
                  (element) => element == this.formatedTime
                )
              ) {
                this.linechartDataMoisture.labels.push(this.formatedTime);
              }
              return el.value;
            }
          })
          .filter((el:any) => {
            return el != undefined;
          }),
        borderColor: this.colors[index],
        backgroundColor: this.colors[index],
        fill: false,
        tension: 0.4,
        borderWidth: 5,
        label: this.device.sensors[index].field,
      };
    },
    CreateDataNonMoisture(index:number) {
      return {
        data: this.timeData.sensors
          .map((el:any) => {
            if (el.field == this.device.sensors[index].field) {
              this.FormatTime(el.time);
              if (
                !this.linechartDataMoisture.labels.find(
                  (element) => element == this.formatedTime
                )
              ) {
                this.linechartDataNonMoisture.labels.push(this.formatedTime);
              }
              return el.value;
            }
          })
          .filter((el:any) => {
            return el != undefined;
          }),
        borderColor: this.colors[index],
        backgroundColor: this.colors[index],
        fill: false,
        tension: 0.4,
        borderWidth: 5,
        label: this.device.sensors[index].field,
      };
    },

    CreateSensorData() {
      this.linechartDataMoisture.labels = [];
      this.linechartDataNonMoisture.labels = [];
      for (let index = 0; index < this.device.sensors.length; index++) {
        if (this.device.sensors[index].field.includes("moistureLevel")) {
          if (
            this.linechartDataMoisture.datasets.findIndex(
              (element) => element == undefined
            ) == -1
          ) {
            this.linechartDataMoisture.datasets[index] =
              this.CreateDataMoisture(index);
          } else {
            this.linechartDataMoisture.datasets[
              this.linechartDataMoisture.datasets.findIndex(
                (element) => element == undefined
              )
            ] = this.CreateDataMoisture(index);
          }
        } else {
          if (
            this.linechartDataMoisture.datasets.findIndex(
              (element) => element == undefined
            ) == -1
          ) {
            this.linechartDataNonMoisture.datasets[index] =
              this.CreateDataNonMoisture(index);
          } else {
            this.linechartDataNonMoisture.datasets[
              this.linechartDataMoisture.datasets.findIndex(
                (element) => element == undefined
              )
            ] = this.CreateDataNonMoisture(index);
          }
        }
      }
      console.log(this.linechartDataMoisture, "LineChartDataNonMoisture");
    },
  },
  created() {
    this.$store.commit("change_currentlySelectedPin", {
      currentlySelectedPin: this.devices[this.$route.params.id[0]], //somehow params.id returns a string array.
    });

    this.$store.dispatch("get_device");
    this.$store.dispatch("get_periodeData");
    this.select = this.$route.query.time!.toString();
    this.device.sensors.forEach(() => {
      let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      this.colors.push(color);
    });
  },
  computed: {
    ...mapState(["timeData", "devices", "device"]),
  },
  watch: {
    timeData() {
      this.loaded = true;
      this.linechartDataNonMoisture.datasets = [];
      this.linechartDataMoisture.datasets = [];
      this.CreateSensorData();
    },
  },
});
</script>

<style>
</style>