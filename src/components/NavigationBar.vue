<template>
  <v-card color="fourth" height="auto">
    <v-row align="center" no-gutters>
      <v-col cols="3" class="text-left">
        <div>
          <v-menu v-model="menu" transition="slide-x-transition">
            <template v-slot:activator="{ props }">
              <v-btn
                color="fourth"
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
            <v-list color="fourth">
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>
                  <v-btn color="fourth" @click="selectLanguage(item.lang)">
                    {{ item.title }}
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-col>

      <v-col cols="11" class="text-center" md="6">
        <v-tabs centered height="auto">
          <v-tab value="Home" to="/" exact class="pr-n2">
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
      <v-col cols="0" md="3">
        <v-select
          v-model="select"
          :items="selectTime"
          label="Select time"
          solo
          hide-details
          single-line
          @update:modelValue="ChartTimeChanged"
          :v-show="showSelect"
          class="my-n5"
        ></v-select>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
export default defineComponent({
  name: "NavigationBar",
  computed: {
    ...mapState(["showSelect"]),
  },
  data() {
    return {
      menu: false,
      breakpoints: "",
      selectTime: ["1h", "24h", "7d", "31d", "1y", "all"],
      select: "1h",
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
    selectLanguage(language: string) {
      this.$i18n.locale = language;
      this.menu = false;
    },
    ChartTimeChanged() {
      this.$store.commit("change_time", {
        time: this.select,
      });
      this.$store.dispatch("get_periodeData");
    },
  },
});
</script>

<style>
p {
  font-size: 17px;
}
</style>