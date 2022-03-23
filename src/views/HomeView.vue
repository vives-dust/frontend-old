<template>
  <v-row justify="center">
    <v-col cols="10">
      <carouselVue class="mt-10" />
      <v-divider class="my-5" />
      <h2>This is a secondary title</h2>
      <mapVue class="mt-5" />
      <v-divider class="my-5" />
      <informationCards />
    </v-col>
  </v-row>
</template>

<script>
import carouselVue from "@/components/Carousel.vue";
import mapVue from "@/components/Map.vue";
import informationCards from "@/components/InformationCards.vue";

export default {
  name: "HomeView",
  components: {
    carouselVue,
    mapVue,
    informationCards,
  },
};
</script>
