<template>
  <v-carousel
    hide-delimiters
    :show-arrows="false"
    cycle
    height="auto"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    >
    <v-row class="title fill-height" align="center" justify="center">
          <div style="color: white" class="pa-2 w-50 text-no-wrap rounded-lg">
            <h2>{{ item.title }}</h2>
          </div>
        </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "carouselVue",
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          title: "example text"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          title: "hello world"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          title: "and another example"
        },
      ],
    };
  },
};
</script>

<style>
</style>