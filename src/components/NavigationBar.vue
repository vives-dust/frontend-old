<template>
  <v-card color="fifth" height="auto">
    <v-row align="center" no-gutters>
      <v-col cols="1" class="text-left">
        <div>
          <v-menu v-model="menu" transition="slide-x-transition">
            <template v-slot:activator="{ props }">
              <v-btn
                color="fifth"
                v-bind="props"
                elevation="0"
                id="languageSelection"
                height="47px"
              >
                <p v-if="this.$i18n.locale === 'en'">
                  {{ this.items[0].code }} en
                </p>
                <p v-else>{{ this.items[1].code }} nl</p>
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

      <v-col cols="11" class="text-center" md="10">
        <v-tabs centered height="auto">
          <v-tab value="Home" to="/" class="pr-n2">
            <v-icon size="25" class="mr-2 ml-n3" icon="mdi:mdi-home" />
            {{ $t("navigationBar.home") }}
          </v-tab>
          <v-divider vertical class="mx-2 my-2"></v-divider>
          <v-tab value="About" to="/about"
            ><v-icon
              size="25"
              class="mr-2 ml-n3"
              icon="mdi:mdi-information"
            />{{ $t("navigationBar.about") }}
          </v-tab>
        </v-tabs>
      </v-col>
      <v-col cols="0" md="1"> </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      menu: false,
      breakpoints: "",
      items: [
        {
          title: "\ud83c\uddfa\ud83c\uddf8 English",
          lang: "en",
          code: "\ud83c\uddfa\ud83c\uddf8",
        },
        {
          title: "\uD83C\uDDE7\uD83C\uDDEA Nederlands",
          lang: "nl",
          code: "\uD83C\uDDE7\uD83C\uDDEA",
        },
      ],
    };
  },
  methods: {
    selectLanguage(language) {
      this.$i18n.locale = language;
      this.menu = false;
    },
  },
};
</script>

<style>
p {
  font-size: 17px;
}
</style>