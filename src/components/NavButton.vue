<script setup lang="ts">
import { computed } from "@vue/runtime-core"
import { useRoute } from 'vue-router'

  const props = defineProps({
    text: { type: String, default: 'Home' },
    icon: { type: String, default: 'mdi-home' },
    to: { type: String, default: '/' },
    color: { type: String, default: 'primary' }
  })

  const route = useRoute()
  const active = computed(() => route.path === props.to)
</script>

<template>
  <v-btn :color="color" variant="text" size="large" @click="$router.push(props.to)" class="rounded-0">
    <span :class="`pb-1 ${active ? 'active' : 'inactive'}`">
      <v-icon class="mr-2" size="x-large">{{ props.icon }}</v-icon>
      {{ props.text }}
    </span>
  </v-btn>
</template>

<style scoped>
/* They all need border so they don't shift on click */
.inactive {
  border-bottom: 2px solid transparent;
}
.active {
  border-bottom: 2px solid rgb(var(--v-theme-primary));
}
</style>