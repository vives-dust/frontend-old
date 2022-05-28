<template>
  <v-card elevation="5">
    <v-img
      class="mt-10"
      src="../assets/trees.jpg"
      :height="xs ? 150 : 400"
      cover
    >
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
              Why do nature a favor
            </h4>
          </v-container>
        </v-col>
      </v-row></v-img
    >
  </v-card>
  <v-row justify="center">
    <v-col cols="11" sm="8">
      <div class="text-center">
        <!-- All picture are under the creative common license -->
        <v-layout class="my-15"></v-layout>
        <p class="text-h5 text-justify mt-15 mb-5">
          {{ $t("aboutPage.introduction") }}
        </p>
      </div>
    </v-col>
  </v-row>

  <v-row justify="center" class="hidden-xs mb-15">
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
          <v-img height="130" src="../assets/lake.jpg" cover> </v-img>
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
          <v-img height="130" src="../assets/VIVES_Logo.png"> </v-img>
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
          <v-img height="130" src="../assets/trees2.jpg" cover> </v-img>
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
      <v-card height="400"  >
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