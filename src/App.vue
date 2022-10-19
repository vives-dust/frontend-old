<script setup lang="ts">
import footerBar from "@/components/Footer.vue";
import NavBar from '@/components/NavBar.vue'
import { useDeviceStore } from '@/stores/devices';

const deviceStore = useDeviceStore()
deviceStore.fetch_devices();

</script>

<template>
  <v-app>
    <nav-bar />
    <v-main>
      <router-view />
    </v-main>
    <footer-bar class="mb-10 hidden-sm-and-up"/>
    <footer-bar class="hidden-xs"/>
    <!-- <navigation-bar class="sticky hidden-sm-and-up" style="bottom: 0px;" /> -->
  </v-app>
</template>