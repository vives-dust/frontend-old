<script setup lang="ts">
import NavButton from '@/components/NavButton.vue'
 
const routes = [
  { label: 'home', route: '/', icon: 'mdi-home' },
  { label: 'about', route: '/about', icon: 'mdi-information' },
]
</script>

<template>
  <v-app-bar app>
    <v-row no-gutters>
      <v-col cols="2" offset="1">
        <v-btn variant="text" size="large" @click="$router.push('/')">DUST</v-btn>
      </v-col>
      <v-col cols="6" offset="1" class="text-center">
        <nav-button v-for="route in routes" :key="$t(route.label)" :text="route.label" :icon="route.icon" :to="route.route" />
      </v-col>
    </v-row>
  </v-app-bar>
</template>