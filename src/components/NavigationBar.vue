<template>
  <v-card color="primary" height="50">
    <v-tabs centered>
      <v-tab value="Home" to="/"> Home </v-tab>
      <v-tab value="About" to="/about">About </v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style>
</style>