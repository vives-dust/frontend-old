<script setup lang="ts">
const props = defineProps({
  image: { type: String, required: true },
  title: { type: String },
  subtitle: { type: String },
  height: { type: [Number, String], default: 400 }
})
</script>

<template>
  <v-img :src="image" :height="height" cover>
    <v-sheet height="100%" class="bg-transparent d-flex flex-column justify-center">
      <h1 class="text-h2 font-weight-bold text-white text-center">{{ title }}</h1>
      <h4 class="text-h4 font-weight-light text-white text-center">{{ subtitle }}</h4>
    </v-sheet>
  </v-img>
</template>