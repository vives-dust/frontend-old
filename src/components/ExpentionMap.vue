<template>
  <v-col cols="12">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title
          class="d-flex justify-center align-center"
        >
          <v-icon color="secondary" icon="mdi:mdi-map-marker" class="mr-4"></v-icon>
          Click to toggle the map
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <map-vue/>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-col>
</template>

<script>
import mapVue from "@/components/Map.vue";
export default {
  name: "expentionMap",
  components:{
      mapVue
  }
};
</script>

<style>
</style>