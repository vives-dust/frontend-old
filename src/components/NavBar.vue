<script setup lang="ts">
import NavButton from '@/components/NavButton.vue'
 
const routes = [
  { label: 'home', route: '/', icon: 'mdi-home' },
  { label: 'about', route: '/about', icon: 'mdi-information' },
]
</script>

<template>
  <v-app-bar app>

    <v-spacer></v-spacer>

    <nav-button v-for="route in routes" :key="$t(route.label)" :text="route.label" :icon="route.icon" :to="route.route" />

    <v-spacer></v-spacer>
    
  </v-app-bar>
</template>