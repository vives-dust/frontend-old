<template>
  <v-row justify="center">
    <v-col cols="8" xs="0">
      <carouselVue class="mt-10" />
      <v-divider class="my-5" />
      <h2>{{t('mapText')}}</h2>
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
import { useI18n } from 'vue-i18n';

export default {
  name: "HomeView",
  setup(){
    const {t,locale} = useI18n();

    return {t,locale}
  },
  components: {
    carouselVue,
    mapVue,
    informationCards,
  },
};
</script>
