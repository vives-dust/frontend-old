<template>
  <v-card color="fifth" height="55">
    <v-row justify="center">
      <v-col cols="11">
        <v-tabs centered class="mt-2">
          <v-tab value="Home" to="/"> Home </v-tab>
          <v-tab value="About" to="/about">About </v-tab>
        </v-tabs>
      </v-col>

      <v-spacer />
      <v-col cols="auto" class="mt-3">
        <v-icon justify="right" class="mx-8"  size="30" icon="mdi:mdi-web" />
      </v-col>
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