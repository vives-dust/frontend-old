<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
    <footerBar class="mb-10 hidden-sm-and-up"/>
    <footerBar class="hidden-xs"/>
    <!-- <navigation-bar class="sticky hidden-sm-and-up" style="bottom: 0px;" /> -->
  </v-app>
</template>

<script>
import footerBar from "@/components/Footer.vue";
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    footerBar,
    NavBar
  },
  data: () => ({
    isRefreshing: false,
  }),
  created() {
    this.$store.dispatch("get_devices");
  },
};
</script>