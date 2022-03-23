<template>
  <v-card color="fifth" height="50">
    <v-row justify="center" class="mt-1">
      <v-tabs centered>
        <v-tab  value="Home" to="/"> Home </v-tab>
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