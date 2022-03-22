<template>
  <!-- <v-card color="primary" height="50">
    <v-tabs centered > 
      <v-tab value="Home" to="/"> Home </v-tab>
      <v-tab value="About" to="/about">About </v-tab>
    </v-tabs>
  </v-card> -->
  <v-app id="inspire">
    <v-app-bar app color="primary" elevation="4" shaped>
      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab value="Home" to="/"> Home </v-tab>
        <v-tab value="About" to="/about">About </v-tab>
      </v-tabs>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style>
</style>