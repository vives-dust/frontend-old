<template>
  <v-row justify="center">
    <v-col cols="8">
      <p class="text-h2 text-center pt-15 pb-3">{{ $t("aboutPage.title") }}</p>
      <v-divider class="mb-2"></v-divider>
      <div class="text-center mt-5">
        <v-card elevation="2" shaped>
          <v-img src="../assets/vlaanderen1.jpg" height="350"></v-img>
          <!-- All picture are under the creative common license -->
        </v-card>

        <p class="text-h5 text-justify mt-5 mb-16">
          {{ $t("aboutPage.introduction") }}
        </p>
      </div>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col cols="1"> </v-col>
    <v-col cols="2" md="2">
      <v-card height="500">
        <v-img height="130" src="../assets/sensor.jpg"> </v-img>
        <h2 class="ma-3">{{ $t("aboutPage.card1.title") }}</h2>
        <p class="ml-3">
          {{ $t("aboutPage.card1.text") }}
        </p>
      </v-card>
    </v-col>
    <v-col cols="2" md="2">
      <v-card height="500">
        <v-img height="130" src="../assets/bier2.jpg"> </v-img>
        <h2 class="ma-3">{{ $t("aboutPage.card2.title") }}</h2>
        <p class="ml-3">
          {{ $t("aboutPage.card2.text") }}
        </p>
      </v-card>
    </v-col>
    <v-col cols="2" md="2">
      <v-card height="500">
        <v-img height="130" src="../assets/vlaanderen1.jpg"> </v-img>
        <h2 class="ma-3">{{ $t("aboutPage.card3.title") }}</h2>
        <p class="ml-3">
          {{ $t("aboutPage.card3.text") }}
        </p>
      </v-card>
    </v-col>
    <v-col cols="2" md="2">
      <v-card height="500">
        <v-img height="130" src="../assets/VIVES_Logo.png"> </v-img>
        <h2 class="ma-3">{{ $t("aboutPage.card4.title") }}</h2>
        <p class="ml-3">
          {{ $t("aboutPage.card4.text") }}
        </p>
      </v-card>
    </v-col>
    <v-col cols="1"> </v-col>
  </v-row>
</template>

<script>
export default {
  name: "aboutPage",
};
</script>

<style>
</style>