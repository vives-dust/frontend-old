<template>

  <v-row justify="center" class="hidden-xs">
    <v-col cols="1"> </v-col>
    <v-col cols="2" md="2">
      <v-hover v-slot="{ isHovering, props }">
        <v-card height="500" v-bind="props" :elevation="isHovering ? 16 : 2">
          <v-img height="130" src="../assets/sensor.jpg"> </v-img>
          <h2 class="ma-3">{{ $t("aboutPage.card1.title") }}</h2>
          <p class="ml-3">
            {{ $t("aboutPage.card1.text") }}
          </p>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="2" md="2">
      <v-hover v-slot="{ isHovering, props }">
        <v-card height="500" v-bind="props" :elevation="isHovering ? 16 : 2">
          <v-img height="130" src="../assets/bier2.jpg"> </v-img>
          <h2 class="ma-3">{{ $t("aboutPage.card2.title") }}</h2>
          <p class="ml-3">
            {{ $t("aboutPage.card2.text") }}
          </p>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="2" md="2">
      <v-hover v-slot="{ isHovering, props }">
        <v-card height="500" v-bind="props" :elevation="isHovering ? 16 : 2">
          <v-img height="130" src="../assets/vlaanderen1.jpg"> </v-img>
          <h2 class="ma-3">{{ $t("aboutPage.card3.title") }}</h2>
          <p class="ml-3">
            {{ $t("aboutPage.card3.text") }}
          </p>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="2" md="2">
      <v-hover v-slot="{ isHovering, props }">
        <v-card height="500" v-bind="props" :elevation="isHovering ? 16 : 2">
          <v-img height="130" src="../assets/VIVES_Logo.png"> </v-img>
          <h2 class="ma-3">{{ $t("aboutPage.card4.title") }}</h2>
          <p class="ml-3">
            {{ $t("aboutPage.card4.text") }}
          </p>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="1"> </v-col>
  </v-row>

</template>

<script lang="ts">
import { useDisplay } from "vuetify";
export default {
  name: "aboutPage",

  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
  },
};
</script>
<style>
</style>