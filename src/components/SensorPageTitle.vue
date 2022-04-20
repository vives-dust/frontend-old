<template>
  <v-row justify="center">
    <v-col cols="8">
      <p class="text-h1 text-center mt-15">
        {{ currentSensor.name }}
      </p>
      <v-divider class="mb-10 mt-3"></v-divider>
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