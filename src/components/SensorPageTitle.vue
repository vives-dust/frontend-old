<template>
  <v-row justify="center">
    <v-col cols="11" sm="8">
      <p class="text-h1 text-center mt-15 hidden-xs">
        {{ currentDevice.name }}
      </p>
      <p class="text-h3 text-center mt-1 hidden-sm-and-up" style="font-size: 30px;">
        {{ currentDevice.name }}
      </p>
      <v-divider class="mb-10 mt-3 hidden-xs"></v-divider>
      <v-divider class="mb-1 mt-1  hidden-sm-and-up"></v-divider>

    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "sensorPageTitle",
  props: ["currentDevice"],
};
</script>

<style>
</style>