<template>
    <navigation-bar />
    <router-view />
    <footerBar/>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import footerBar from '@/components/Footer.vue';
export default {
  components: {
    NavigationBar,
    footerBar
  },
};
</script>

