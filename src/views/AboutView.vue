<template>
  <div class="about">
    <aboutPage />
    <p>test</p>
  </div>
</template>

<script lang="ts">
import aboutPage from "@/components/AboutPage.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "aboutView",
  components: {
    aboutPage,
  },
  created() {
    this.$store.commit("change_showSelect", {
      showSelect: false,
    });
  },
});
</script>
