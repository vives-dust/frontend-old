<template>
  <v-row justify="center">
    <v-col cols="8">
      <p class="text-h2 text-center pt-15 pb-3">
        Sensor: {{ currentSensor.name }}
      </p>
      <v-divider class="mb-2"></v-divider>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "sensorPage",
  data() {
    return { id: "", currentSensor: null };
  },
  created() {
    this.id = this.$route.params.id;
    this.SearchForSensor(this.id);
  },
  methods: {
    SearchForSensor(id) {
      return this.pins.forEach((pin) => {
        if (pin.id == id) {
          this.currentSensor = pin;
        }
      });
      
    },
  },
  computed: mapState(["pins"]),
};
</script>

<style>
</style>