<template>
  <v-row justify="center" class="mt-8">
    <v-col cols="11" sm="8">

      <div class="text-center mt-5">
        <v-card elevation="2" shaped :height="xs ? 150 : 300" width="auto">
          <!-- <v-img
            src="../assets/vlaanderen1.jpg"
            :height="xs ? 150 : 300"
            width="auto"
          ></v-img> -->
          <!-- All picture are under the creative common license -->
        </v-card>

        <p class="text-h5 text-justify mt-5 mb-16">
          {{ $t("aboutPage.introduction") }}
        </p>
      </div>
    </v-col>
  </v-row>

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
          <!-- <v-img height="130" src="../assets/bier2.jpg"> </v-img> -->
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
          <!-- <v-img height="130" src="../assets/vlaanderen1.jpg"> </v-img> -->
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

  <!-- FOR MOBILE -->
  <v-row justify="center" class="hidden-sm-and-up">
    <v-col cols="11" class="hidden-sm-and-up">
      <v-divider class="mt-n15 mb-6"></v-divider>
      <v-card height="400">
        <v-card max-height="150" elevation="0">
          <v-img height="strech" src="../assets/sensor.jpg"> </v-img>
        </v-card>
        <h2 class="ma-3">{{ $t("aboutPage.card1.title") }}</h2>
        <p class="ml-3">
          {{ $t("aboutPage.card1.text") }}
        </p>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center" class="hidden-sm-and-up">
    <v-col cols="11">
      <v-card height="400">
        <v-card height="150" elevation="0">
          <!-- <v-img height="strech" src="../assets/bier2.jpg"> </v-img> -->
        </v-card>
        <h2 class="ma-3">{{ $t("aboutPage.card2.title") }}</h2>
        <p class="ml-3">
          {{ $t("aboutPage.card2.text") }}
        </p>
      </v-card>
    </v-col>
  </v-row>

  <v-row justify="center" class="hidden-sm-and-up">
    <v-col cols="11">
      <v-card height="400">
        <v-card height="150" elevation="0">
          <!-- <v-img height="strech" src="../assets/vlaanderen1.jpg"> </v-img> -->
        </v-card>
        <h2 class="ma-3">{{ $t("aboutPage.card3.title") }}</h2>
        <p class="ml-3">
          {{ $t("aboutPage.card3.text") }}
        </p>
      </v-card>
    </v-col>
  </v-row>

  <v-row justify="center" class="hidden-sm-and-up">
    <v-col cols="11">
      <v-card height="400">
        <v-card height="150" elevation="0">
          <v-img height="strech " src="../assets/VIVES_Logo.png"> </v-img>
        </v-card>
        <h2 class="ma-3">{{ $t("aboutPage.card4.title") }}</h2>
        <p class="ml-3">
          {{ $t("aboutPage.card4.text") }}
        </p>
      </v-card>
    </v-col>
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