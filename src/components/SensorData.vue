<template>
  <v-row justify="center" v-if="loaded">
    <v-col cols="11" sm="8">
      <p v-show="showMoisture" class="text-h3 text-left mt-15 hidden-xs">
        Humidity Sensors
      </p>
      <p v-show="showMoisture" class="text-h4 text-left mt-2 hidden-sm-and-up">
        Humidity Sensors
      </p>

      <v-card v-show="showMoisture" class="my-5 hidden-xs">
        <lineChart :data="linechartDataMoisture" />
      </v-card>

      <v-card v-show="showMoisture" class="my-2 hidden-sm-and-up">
        <lineChart :data="linechartDataMoisture" />
      </v-card>
      <div
        v-for="(data, index) in linechartDataNonMoisture.datasets"
        :key="index"
      >
        <p class="text-h3 text-left mt-15 hidden-xs">{{ data.label }}</p>
        <p class="text-h4 text-left mt-3 hidden-sm-and-up">{{ data.label }}</p>

        <v-card class="my-5 hidden-xs">
          <lineChart :data="CombineNoneMoistureData(index)" />
        </v-card>

        <v-card class="my-2 hidden-sm-and-up">
          <lineChart :data="CombineNoneMoistureData(index)" />
        </v-card>
      </div>
    </v-col>
  </v-row>
  <v-layout class="mb-15"></v-layout>
</template>

<script lang="ts">
import { mapState } from "vuex";
import lineChart from "@/components/LineChart.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "sensorsData",
  components: {
    lineChart,
  },

  data: () => ({
    selectTime: ["1h", "24h", "7d", "31d", "1y", "all"],
    loaded: false,
    showMoisture: false,
    colors: [] as any[],
    linechartDataNonMoisture: {
      labels: [] as any[],
      datasets: [] as any[],
    },
    linechartDataMoisture: {
      labels: [] as any[],
      datasets: [] as any[],
    },
  }),
  methods: {
    FormatTime(time: string) {
      let dateObject = new Date(time);
      if (this.time == "1h") {
        return `${dateObject.getHours()}:${dateObject.getMinutes()}`;
      } else if (this.time == "24h") {
        return `${dateObject.getHours()}:${dateObject.getMinutes()}`;
      } else if (this.time == "7d") {
        return `${
          dateObject.getMonth() + 1
        }/${dateObject.getDate()} - ${dateObject.getHours()}h`;
      } else if (this.time == "31d") {
        return `${
          dateObject.getMonth() + 1
        }/${dateObject.getDate()} - ${dateObject.getHours()}h`;
      } else if (this.time == "1y") {
        return `${
          dateObject.getMonth() + 1
        }/${dateObject.getDate()}/${dateObject.getFullYear()}`;
      } else {
        return `${
          dateObject.getMonth() + 1
        }/${dateObject.getDate()}/${dateObject.getFullYear()}`;
      }
    },
    CombineNoneMoistureData(index: number) {
      return {
        labels: this.linechartDataNonMoisture.labels,
        datasets: [this.linechartDataNonMoisture.datasets[index]],
      };
    },
    CreateDataMoisture(index: number) {
      console.log(index, "index");

      console.log(this.colors, "colors");
      return {
        data: this.timeData.sensors
          .map((el: any) => {
            if (el.field == this.device.sensors[index].field) {
              let formatedTime = this.FormatTime(el.time);

              if (
                !this.linechartDataMoisture.labels.find(
                  (element) => element == formatedTime
                )
              ) {
                this.linechartDataMoisture.labels.push(formatedTime);
              }
              return el.value;
            }
          })
          .filter((el: any) => {
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
    CreateDataNonMoisture(index: number) {
      return {
        data: this.timeData.sensors
          .map((el: any) => {
            if (el.field == this.device.sensors[index].field) {
              let formatedTime = this.FormatTime(el.time);

              if (
                !this.linechartDataNonMoisture.labels.find(
                  (element) => element == formatedTime
                )
              ) {
                this.linechartDataNonMoisture.labels.push(formatedTime);
              }
              return el.value;
            }
          })
          .filter((el: any) => {
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
        if (this.device.sensors[index].field.includes("Moisture")) {
          this.showMoisture = true;
          this.$store.commit("change_showTrendline", {
            showTrendline: true,
          });
          if (
            this.linechartDataMoisture.datasets.findIndex(
              (element) => element == undefined
            ) == -1
          ) {
            this.linechartDataMoisture.datasets.push(
              this.CreateDataMoisture(index)
            );
          } else {
            this.linechartDataMoisture.datasets[
              this.linechartDataMoisture.datasets.findIndex(
                (element) => element == undefined
              )
            ] = this.CreateDataMoisture(index);
          }
        } else {
          if (
            this.linechartDataNonMoisture.datasets.findIndex(
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
    },
  },
  created() {
    this.$store.dispatch("get_device");
    this.$store.dispatch("get_periodeData");

    this.$store.commit("change_showSelect", {
      showSelect: true,
    });
  },
  computed: {
    ...mapState(["timeData", "devices", "device", "time"]),
  },
  watch: {
    timeData() {
      this.loaded = true;
      this.linechartDataNonMoisture.datasets = [];
      this.linechartDataMoisture.datasets = [];
      this.linechartDataMoisture.labels = [];
      this.CreateSensorData();
    },
    loaded() {

      this.device.sensors.forEach(() => {
        let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        this.colors.push(color);
      });
    },
  },
});
</script>

<style>
</style>