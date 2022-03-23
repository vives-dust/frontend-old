<template>
  <v-card color="primary" height="50">
    <v-row justify="center" align="center">
      <v-tabs centered>
        <v-tab value="Home" to="/"> Home </v-tab>
        <v-tab value="About" to="/about">About </v-tab>
      </v-tabs>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style>
</style>