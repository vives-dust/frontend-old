<template>
  <v-row justify="center" class="text-center mb-2">
    <v-col
      v-for="sensor in device.sensors"
      :key="sensor._id"
      cols="4"
      class="hidden-xs"
    >
      <v-card color="third">
        <v-card-title> {{ sensor.field }} </v-card-title>
        <v-card-text class="d-inline-flex align-center">
          <v-icon
            class="mr-8"
            size="60"
            icon="mdi:mdi-thermometer "
            v-if="sensor.type == 'temperature'"
          />
          <p v-if="sensor.type == 'temperature'">{{ sensor.value }} &deg;C</p>

          <v-icon
            class="mr-8"
            size="60"
            icon="mdi:mdi-water-percent"
            v-if="sensor.type == 'moisture'"
          />
          <v-icon
            class="mr-8"
            size="60"
            icon="mdi:mdi-tailwind"
            v-if="sensor.type == 'pressure'"
          />

          <p v-if="sensor.type != 'temperature'">{{ sensor.value }}</p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col
      class="hidden-sm-and-up"
      v-for="sensor in device.sensors"
      :key="sensor._id"
      cols="6"
    >
      <v-card color="third" class="mx-n2 my-n2">
        <v-card-title class="ml-n3 mb-n6 mt-n2"> {{ sensor.field }} </v-card-title>
        <v-card-text class="d-inline-flex align-center">
          <v-icon
            size="45"
            icon="mdi:mdi-thermometer "
            v-if="sensor.type == 'temperature'"
          />
          <p v-if="sensor.type == 'temperature'">{{ sensor.value }} &deg;C</p>

          <v-icon
            size="45"
            icon="mdi:mdi-water-percent"
            v-if="sensor.type == 'moisture'"
          />
          <v-icon
            size="45"
            icon="mdi:mdi-tailwind"
            v-if="sensor.type == 'pressure'"
          />

          <p v-if="sensor.type != 'temperature'">{{ sensor.value }}</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "deviceValues",
  computed: mapState(["device"]),
};
</script>

<style>
</style>