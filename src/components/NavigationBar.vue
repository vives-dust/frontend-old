<template>
  <v-app-bar color="green darken-3">
    <v-tabs>
      <v-tab value="Home" to="/"> home </v-tab>
      <v-tab value="About" to="/about">About </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style>
</style>