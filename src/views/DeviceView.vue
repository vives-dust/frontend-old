<template>
  <!-- <sensorPageTitle :currentDevice="this.currentlySelectedPin" /> -->
  <v-card elevation="5">
    <v-img
      class="mt-10"
      src="@/assets/panorama-nature_1920.jpg"
      :height="xs ? 150 : 400"
      cover
    ></v-img>
  </v-card>
  <v-layout class="mt-15 hidden-xs"></v-layout>
  <v-row justify="center hidden-xs">
    <v-col cols="11" sm="8" class="my-15">
      <v-row>
        <sparkline-graph />
      </v-row>
    </v-col>
  </v-row>
  <!-- MOBILE -->
  <v-row justify="center hidden-sm-and-up">
    <v-col cols="11" sm="8" class="my-10">
      <v-row>
        <sparkline-graph />
      </v-row>
    </v-col>
  </v-row>

  <v-row
    justify="center"
    no-gutters
    style="background-color: rgb(var(--v-theme-backgroundShift), 0.2)"
  >
    <v-col cols="11" sm="8">
      <p class="text-h3 text-left hidden-xs mt-16 mb-4">Realtime meetingen</p>
      <deviceValues class="mb-16 hidden-xs" />
    </v-col>
  </v-row>
  <!-- <v-divider class="my-5 hidden-xs"></v-divider> -->

  <v-row justify="center">
    <v-col cols="11" sm="8">
      <deviceValues class="my-1 hidden-sm-and-up" />
    </v-col>
  </v-row>

  <v-row>
    <v-col>
      <sensor-data />
    </v-col>
  </v-row>
  <!-- <v-divider class="my-1 hidden-sm-and-up"></v-divider> -->

  <!-- <v-row justify="center" class="my-3">
    <v-col cols="11" sm="8">
      <singleMarkerMap :height="xs ? 150 : 300" />
    </v-col>
  </v-row> -->
</template>

<script lang="ts">
import { useDisplay } from "vuetify";
import sparklineGraph from "@/components/sparkline.vue";
import sensorPageTitle from "@/components/DevicePageTitle.vue";
import deviceValues from "@/components/LatestDeviceValueCards.vue";
import singleMarkerMap from "@/components/SingleMarkerMap.vue";
import sensorData from "@/components/SensorData.vue";
import { mapState } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "deviceView",
  components: {
    // sensorPageTitle,
    deviceValues,
    sensorData,
    sparklineGraph,
  },
  created() {
    this.$store.commit("change_currentlySelectedPin", {
      currentlySelectedPin: this.devices[this.$route.params.id[0]], //params.id apparently returns an array, not a number.
    });

    this.$store.dispatch("get_device");
    this.$store.dispatch("get_periodeData");
    this.$store.commit("change_showSelect", {
      showSelect: true,
    });
  },
  computed: mapState(["devices", "currentlySelectedPin"]),
  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
  },
});
</script>

<style>
</style>