<template>
  <v-card color="fifth" height="auto">
    <v-row no-gutters >
      <v-tabs centered class="mt-2">
        <v-tab value="Home" to="/"> Home </v-tab>
        <v-tab value="About" to="/about">About </v-tab>
      </v-tabs>
      <v-spacer />
      <v-icon
        class="mt-3 mx-5"
        size="30"
        icon="mdi:mdi-web"
      />
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