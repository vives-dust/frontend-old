<template>
  <v-row>
    <v-col cols="11" sm="12">
      <v-card elevation="5" class="hidden-sm-and-up">
        <v-img src="@/assets/nature.jpg" height="150" cover />
      </v-card>

      <v-card elevation="5" class="hidden-xs mt-10">
        <v-img src="@/assets/nature.jpg" height="400" cover>
          <v-row class="text-center" justify="center">
            <v-col cols="12">
              <v-container class="mt-16">
                <h1
                  class="text-h2 font-weight-bold mb-4 mt-12"
                  style="color: white"
                >
                  DUST
                </h1>

                <h4 class="text-h4 font-weight-thin" style="color: white">
                  Do nature a favor
                </h4>
              </v-container>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col cols="11" sm="10">
      <v-layout class="my-15"></v-layout>
      <mapVue class="my-15 hidden-xs" />
      <mapVue class="mt-2 mb-2 hidden-sm-and-up" />
      <v-layout class="my-15"></v-layout>
    </v-col>
  </v-row>
  <v-row
    justify="center"
    style="background: rgb(var(--v-theme-backgroundShift), 0.2)"
    class="py-15"
  >
    <v-col cols="11" sm="10">

      <informationCards />

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
