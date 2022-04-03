<template>
  <v-card rounded>
    <v-carousel hide-delimiters :show-arrows="false" cycle height="300">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        <v-row class="title fill-height" align="center" justify="center">
          <div style="color: green" class="pa-2 w-50 text-no-wrap rounded-lg">
            <h2>{{ item.title }}</h2>
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  name: "carouselVue",
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