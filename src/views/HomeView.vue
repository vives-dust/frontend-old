<template>
  <v-row justify="center">
    <v-col cols="11" sm="8">
      <carouselVue class="mt-10" />
      <v-divider class="my-5" />
      <h2>{{ t("mapText") }}</h2>
      <mapVue class="mt-5" />
      <v-divider class="my-5" />
      <informationCards />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import carouselVue from "@/components/Carousel.vue";
import mapVue from "@/components/Map.vue";
import informationCards from "@/components/InformationCards.vue";
import { useI18n } from "vue-i18n";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  setup() {
    const { t, locale } = useI18n();

    return { t, locale };
  },
  created() {
    this.$store.commit("change_showSelect", {
      showSelect: false,
    });
  },
  components: {
    carouselVue,
    mapVue,
    informationCards,
  },
});
</script>
