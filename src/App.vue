<template>
  <v-app>
    <navigation-bar class="sticky"/>
    <router-view />
    <footerBar />
  </v-app>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import footerBar from "@/components/Footer.vue";
export default {
  components: {
    NavigationBar,
    footerBar,
  },
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


