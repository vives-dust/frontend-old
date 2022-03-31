<template>
  <v-card color="fifth" height="auto">
    <v-row>
      <v-col cols="1" class="text-left">
        <div>
          <v-menu v-model="menu" transition="slide-x-transition">
            <template v-slot:activator="{ props }">
              <v-btn
                color="fifth"
                dark
                v-bind="props"
                elevation="0"
                height="auto"
                class="mt-3"
              >
                <v-icon size="33" icon="mdi:mdi-web" />
              </v-btn>
            </template>
            <v-list color="fifth">
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>
                  <v-btn color="fifth" @click="selectLanguage(item.lang)">
                    {{ item.title }}
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-col>

      <v-col cols="10" class="text-center">
        <v-tabs centered class="mt-2" height="auto">
          <v-tab value="Home" to="/"> Home </v-tab>
          <v-tab value="About" to="/about">About </v-tab>
        </v-tabs>
      </v-col>
      <v-col cols="1"> </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { useI18n } from 'vue-i18n';
export default {
  name: "NavigationBar",
  data() {
    return {
      menu: false,
      items: [
        { title: "\ud83c\uddfa\ud83c\uddf8 English", lang: "en" },
        { title: "\uD83C\uDDE7\uD83C\uDDEA Dutch", lang: "nl" },
      ],
    };
  },
  methods: {
    toggleshowingLanguageSelectionTool() {
      this.showingLanguageSelectionTool = !this.showingLanguageSelectionTool;
    },
    selectLanguage(language) {
      this.$i18n.locale = language;
      this.menu = false;
    },
  },
  setup() {
    const { t, locale } = useI18n();

    return { t, locale };
  },
};
</script>

<style>
</style>