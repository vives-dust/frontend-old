<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-card elevation="5">
        <v-img src="@/assets/leaves300-300.jpg" class="mb-5" width="100%" />
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col cols="11" sm="10">
      <!-- <carouselVue class="mt-16" /> -->
      <mapVue class="mt-5 mb-10" />
    </v-col>
  </v-row>
  <v-row
    no-gutters
    justify="center"
    style="background: rgb(var(--v-theme-backgroundShift), 0.5)"
  >
    <v-col cols="11" sm="10">
      <informationCards class="mb-10" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
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
    //console.log(this.$vuetify.theme.themes.myCustomTheme.colors.background)
  },
  components: {
    mapVue,
    informationCards,
  },
});
</script>
