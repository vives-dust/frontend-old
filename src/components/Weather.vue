<template>
  <v-container v-if="this.weather.weather">
    <p class="text-h2 text-left mt-15">Current weather</p>
    <v-divider class="mb-10 mt-3"></v-divider>


    <v-row>
      
    </v-row>

    <v-card max-height="400">
      <v-row justify="center" class="text-center my-2">
        <v-col cols="auto">
          <v-card color="fourth" width="500">
            <v-card-title>
              {{ weather.weather[0].main }}
            </v-card-title>
            <img height="150" :src="imgSrc" alt="OpenWeatherIcon" />
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center" class="text-center mb-2">
        <v-col cols="auto" class="d-inline-flex">
          <v-card class="mx-2" color="third">
            <v-card-title> temperature </v-card-title>
            <v-card-text class="d-inline-flex align-center">
              <v-icon
                class="mr-8 ml-n4"
                size="60"
                icon="mdi:mdi-thermometer "
              />
              <p>{{ weather.main.temp }} &deg;C</p>
            </v-card-text>
          </v-card>

          <v-card class="mx-2" color="third">
            <v-card-title> humidity </v-card-title>
            <v-card-text class="d-inline-flex align-center">
              <v-icon
                class="mr-8 ml-n4"
                size="60"
                icon="mdi:mdi-water-percent"
              />

              <p>{{ weather.main.humidity }}</p>
            </v-card-text>
          </v-card>

          <v-card class="mx-2" color="third">
            <v-card-title> pressure </v-card-title>
            <v-card-text class="d-inline-flex align-center">
              <v-icon
                class="mr-8 ml-n4"
                size="60"
                icon="mdi:mdi-thermometer "
              />
              <p>{{ weather.main.pressure }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { mapState } from "vuex";
import { defineComponent } from "vue";
export default defineComponent({
  name: "weatherInformation",
  data() {
    return {
      imgSrc: "",
      weatherData: "",
    };
  },
  watch: {
    weather() {
      this.imgSrc = `http://openweathermap.org/img/w/${this.weather.weather[0].icon}.png`;
    },
  },
  computed: mapState(["weather"]),
});
</script>

<style>
</style>