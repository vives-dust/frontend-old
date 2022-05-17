<template>
  <v-app>
    <navigation-bar class="sticky" />
    <router-view />
    <footerBar />
    <v-snackbar v-model="updateAvailable">
       <p> Update available - Please update</p> 

      <template v-slot:actions>
        <v-btn color="blue" variant="text" @click="Update"> Update </v-btn>
      </template>
    </v-snackbar>
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
  data: () => ({
    registration: null,
    updateAvailable: false,
    isRefreshing: false,
  }),
  created() {
    this.$store.dispatch("get_devices");
    document.addEventListener("swupdatefound", this.updateTheApp, {
      once: true,
    });
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (this.isRefreshing) return;
      this.isRefreshing = true;
      window.location.reload();
    });
  },
  methods: {
    updateTheApp(e) {
      this.registration = e.detail;
      this.updateAvailable = true;
    },
    Update() {
      this.updateAvailable = false;
      if (this.registration || this.registration.waiting) {
        this.registration.waiting.postMessage({ type: "SKIP_WAITING" });
      }
    },
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


