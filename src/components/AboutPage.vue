<template>
  <v-row justify="center">
    <v-col cols="8">
      <p class="text-h2 text-center pt-15 pb-3">About the project</p>
      <v-divider class="mb-2"></v-divider>
      <div class="text-center mt-5">
        <v-card elevation="2" shaped>
          <v-img src="../assets/vlaanderen1.jpg" height="350"></v-img>
          <!-- All picture are under the creative common license -->
        </v-card>

        <p class="text-h5 text-justify mt-5">
          We build an application, some prototypes and the firmware going with
          it. So everything that would be needed to scale this project up. The
          idea is that everyone who needs a soil moisture sensor can use our
          open source schematics to make their own hardware. Then add a device
          to our user-friendly website, and you should be good to go. Data flows
          from your device directly to our site where you can see all data that
          comes from your device. Even placed in interactive graphs and
          everything!
        </p>
      </div>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col cols="1"> </v-col>
    <v-col cols="2" md="2">
      <v-card height="500">
        <v-img height="130" src="../assets/sensor.jpg"> </v-img>
        <h2 class=" ma-3">What is this project</h2>
        <p class="ml-3">this project is about making sure the world drinks enough water, what we mean by that is we want to measure where and how much water gets picked up by the ground. Tis is very presious information for institutions to have.</p>
      </v-card>
    </v-col>
    <v-col cols="2" md="2">
      <v-card height="500">
        <v-img height="130" src="../assets/bier2.jpg"> </v-img>
        <h2 class=" ma-3">Why dust?</h2>
        <p class="ml-3">this project is about making sure the world drinks enough water, what we mean by that is we want to measure where and how much water gets picked up by the ground. Tis is very presious information for institutions to have.</p>
      </v-card>
    </v-col>
    <v-col cols="2" md="2">
      <v-card height="500">
        <v-img height="130" src="../assets/vlaanderen1.jpg"> </v-img>
        <h2 class=" ma-3">Where are we from</h2>
        <p class="ml-3">this project is about making sure the world drinks enough water, what we mean by that is we want to measure where and how much water gets picked up by the ground. Tis is very presious information for institutions to have.</p>
      </v-card>
    </v-col >
    <v-col cols="2" md="2">
      <v-card height="500">
        <v-img height="130" src="../assets/VIVES_Logo.png"> </v-img>
        <h2 class=" ma-3">About the environment</h2>
        <p class="ml-3">this project is about making sure the world drinks enough water, what we mean by that is we want to measure where and how much water gets picked up by the ground. Tis is very presious information for institutions to have.</p>
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