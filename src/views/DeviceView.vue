<template>
  <!-- <sensorPageTitle :currentDevice="this.currentlySelectedPin" /> -->
  <v-row justify="center">
    <v-col cols="11" sm="8">
      <v-row>
        <sparkline-graph />
      </v-row>
    </v-col>
  </v-row>
  <v-row justify="center" no-gutters style="background-color: rgb(var(--v-theme-backgroundShift), 0.5)">
    <v-col cols="11" sm="8">
      <deviceValues class="my-5 hidden-xs" />
    </v-col>
  </v-row>
  <!-- <v-divider class="my-5 hidden-xs"></v-divider> -->

  <v-row justify="center" >
    <v-col cols="11" sm="8">
      <deviceValues class="my-1 hidden-sm-and-up" />
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
import { mapState } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "deviceView",
  components: {
    // sensorPageTitle,
    deviceValues,
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