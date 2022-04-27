<template>
  <v-row justify="center" class="text-center mb-2">
    <v-col v-for="sensor in device.sensors" :key="sensor._id">
      <v-card color="third">
        <v-card-title> {{ sensor.field }} </v-card-title>
        <v-card-text class="d-inline-flex align-center">
          <v-icon
            class="mr-8 ml-n4"
            size="60"
            icon="mdi:mdi-thermometer "
            v-if="sensor.type == 'temperature'"
          />
          <p v-if="sensor.type == 'temperature'">{{ sensor.value }} &deg;C</p>

          <v-icon
            class="mr-8 ml-n4"
            size="60"
            icon="mdi:mdi-water-percent"
            v-if="sensor.type == 'moisture'"
          />
          <v-icon
            class="mr-8 ml-n4"
            size="60"
            icon="mdi:mdi-tailwind"
            v-if="sensor.type == 'pressure'"
          />

          <p v-if="sensor.type != 'temperature'">{{ sensor.value }}</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

  <!-- <v-card class="mx-2" color="third">
    <v-card-title> temperature </v-card-title>
    <v-card-text class="d-inline-flex align-center">
      <v-icon class="mr-8 ml-n4" size="60" icon="mdi:mdi-thermometer " />
      <p>temp &deg;C</p>
    </v-card-text>
  </v-card>

  <v-card class="mx-2" color="third">
    <v-card-title> humidity </v-card-title>
    <v-card-text class="d-inline-flex align-center">
      <v-icon class="mr-8 ml-n4" size="60" icon="mdi:mdi-water-percent" />

      <p>something</p>
    </v-card-text>
  </v-card> -->

  <!-- <v-card class="mx-2" color="third">
    <v-card-title> pressure </v-card-title>
    <v-card-text class="d-inline-flex align-center">
      <v-icon class="mr-8 ml-n4" size="60" icon="mdi:mdi-tailwind" />
      <p>{{ device }}</p>
    </v-card-text>
  </v-card> -->
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "deviceValues",
  created() {
    this.device.sensors.forEach((sensor) => {
      if (!this.names.includes(sensor.type)) {
        this.names.push(sensor.type);
      }
    });
  },
  computed: mapState(["device"]),
  data() {
    return {
      names: [],
      values: [],
    };
  },
};
</script>

<style>
</style>