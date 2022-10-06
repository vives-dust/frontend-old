<template>
  <v-app>
    <navigation-bar class="sticky hidden-xs" />
    <v-main class="ma-0 pa-0">
      <router-view />
    </v-main>
    <footerBar class="mb-10 hidden-sm-and-up"/>
    <footerBar class="hidden-xs"/>
    <navigation-bar class="sticky hidden-sm-and-up" style="bottom: 0px;" />
  </v-app>
</template>

<script>
// import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from "@/components/NavigationBar.vue";
import footerBar from "@/components/Footer.vue";
export default {
  components: {
    NavigationBar,
    footerBar,
  },
  data: () => ({
    isRefreshing: false,
  }),
  created() {
    this.$store.dispatch("get_devices");
  },
};
</script>
<style>
@media screen and (max-width: 700px) {
  html {
    scrollbar-width: none;
    overflow-x: clip;
  }
  html,
  body {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
}
</style>


