<template>
  <v-card rounded>
    <v-carousel
      hide-delimiters
      :show-arrows="false"
      cycle
      :height="xs ? 150 : 300"
    >
      <v-carousel-item v-for="(item, i) in items" :key="i" class="align-center">
          <v-img
            :src="item.src"
            max-height=900
          ></v-img>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
import { useDisplay } from "vuetify";
export default {
  name: "carouselVue",
  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
  },
  data() {
    return {
      items: [
        {
          src: require("@/assets/philipp.jpg"),
          title: "",
        },
        {
          src: require("@/assets/leaves.jpg"),
          title: "DUST",
        },
        {
          src: require("@/assets/vlaanderen2.jpg"),
          title: "",
        },
      ],
    };
  },
};
</script>

<style>
</style>