<template>
  <v-row justify="center">
    <v-col cols="auto">
      <carouselVue class="ma-5" />
    </v-col>
  </v-row>

  <v-row justify="center">
    <v-col cols="auto">
      <mapVue class="ma-5" />
    </v-col>
  </v-row>
</template>

<script>
import carouselVue from "@/components/Carousel.vue";
import mapVue from "@/components/Map.vue";

export default {
  name: "HomeView",
  components: {
    carouselVue,
    mapVue,
  },
};
</script>
