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
export default {
  name: "sensorPageTitle",
  props:["currentSensor"]
};
</script>

<style>
</style>