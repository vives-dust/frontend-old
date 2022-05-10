<template>
  <sensorPageTitle :currentDevice="this.currentlySelectedPin" />
  <v-row justify="center">
    <v-col cols="11" sm="8">
      <singleMarkerMap
        :height="xs ? 150 : 300"
      />
      <deviceValues class="my-5 hidden-xs" />
      <v-divider class="my-5 hidden-xs"></v-divider>


      <deviceValues class="my-1 hidden-sm-and-up" />
      <v-divider class="my-1 hidden-sm-and-up"></v-divider>


      <sparkline-graph />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { useDisplay } from "vuetify";
import sparklineGraph from "@/components/sparkline.vue";
import sensorPageTitle from "@/components/SensorPageTitle.vue";
import deviceValues from "@/components/LatestDeviceValueCards.vue";
import singleMarkerMap from "@/components/SingleMarkerMap.vue";
import { mapState } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "deviceView",
  components: {
    sensorPageTitle,
    singleMarkerMap,
    deviceValues,
    sparklineGraph,
  },
  created() {
    this.$store.commit("change_currentlySelectedPin", {
      currentlySelectedPin: this.devices[this.$route.params.id[0]], //params.id apparently returns an array, not a number.
    });
    
    this.$store.dispatch("get_device");
    this.$store.dispatch("get_periodeData");
    this.$store.commit("change_showSelect",{
      showSelect: true
    })

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