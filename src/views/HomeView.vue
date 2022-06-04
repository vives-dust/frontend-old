<template>
  <v-row>
    <v-col cols="12">
      <v-card elevation="5" class="hidden-sm-and-up mt-10">
        <v-img src="@/assets/nature.jpg" height="150" cover>
          <v-row class="text-center" justify="center">
            <v-col cols="12">
              <v-container>
                <h1
                  class="text-h2 font-weight-bold mb-4 mt-1"
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
  <v-row justify="center" class="hidden-xs">
    <v-col cols="10">
      <v-layout class="my-10"></v-layout>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <mapVue class="my-15" />
      <v-layout class="my-15"></v-layout>
    </v-col>
  </v-row>
  <!-- MOBILE -->
  <v-row justify="center" class="hidden-sm-and-up">
    <v-col cols="11">
      <v-layout class="my-2"></v-layout>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <mapVue class="mt-2 mb-2" />
      <v-layout class="my-5"></v-layout>
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
