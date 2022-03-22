<template>
  <v-toolbar color="secondary">
    <v-tabs class="">
      <v-tab value="Home" to="/"> home </v-tab>
      <v-tab value="About" to="/about">About </v-tab>
    </v-tabs>
  </v-toolbar>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style>
</style>