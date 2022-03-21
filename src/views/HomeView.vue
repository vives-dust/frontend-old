<template>

  <carouselVue/>

  <mapVue/>
</template>

<script>
import carouselVue from "@/components/Carousel.vue";
import mapVue from '@/components/Map.vue';

export default {
  name: "HomeView",
  components: {
    carouselVue,
    mapVue,
  },
};
</script>
