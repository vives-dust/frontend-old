<template>
  <v-card
    color="white"
    height="auto"
    width="100%"
    class="mb-2"
    fixed
    app
    style="z-index: 20001"
    rounded="0"
    flat
  >
    <v-row no-gutters>
      <v-col cols="2" md="2" class="text-left">
        <div>
          <v-menu v-model="menu" transition="slide-x-transition">
            <template v-slot:activator="{ props }">
              <v-btn
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
            <v-list
              active
              bg-color="white"
              variant="plain"
              density="comfortable"
              elevation="10"
            >
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>
                  <v-btn color="white" @click="selectLanguage(item.lang)">
                    {{ item.title }}
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-col>

      <v-col cols="8" class="text-center hidden-xs" md="8">
        <v-tabs centered height="auto" color="red">
          <v-tab value="Home" to="/" exact class="pr-n2 mr-4 text-primary" >
            <v-icon size="25" class="mr-2 ml-n3" icon="mdi:mdi-home" color="primary" />
            {{ $t("navigationBar.home") }}
          </v-tab>
          <v-tab value="About" to="/about" class="text-primary"
            ><v-icon
              size="25"  color="primary"
              class="mr-2 ml-n3"
              icon="mdi:mdi-information"
            />{{ $t("navigationBar.about") }}
          </v-tab>
        </v-tabs>
      </v-col>

      <v-col cols="8" class="text-center hidden-sm-and-up" md="8">
        <v-tabs centered height="auto">
          <v-tab value="Home" to="/" exact class="pr-n2">
            <v-icon size="32"  icon="mdi:mdi-home" />
          </v-tab>
          <v-divider vertical class="mx-1 my-2"></v-divider>
          <v-tab exact value="About" to="/about"
            ><v-icon size="32"  icon="mdi:mdi-information" />
          </v-tab>
        </v-tabs>
      </v-col>

      <v-col cols="2" md="2" v-show="showSelect">
        <v-card elevation="0" color="primary" class="mr-3 mt-1 hidden-xs">
          <v-select
            density="compact"
            v-model="select"
            :items="selectTime"
            label="Select time"
            solo
            hide-details
            single-line
            @update:modelValue="ChartTimeChanged"
          ></v-select>
        </v-card>

        <v-card elevation="0" color="primary" class="hidden-sm-and-up mt-1" height="40">
          <v-select
            density="compact"
            v-model="select"
            :items="selectTime"
            solo
            hide-details
            single-line
            @update:modelValue="ChartTimeChanged"
          >
          </v-select>
        </v-card>
      </v-col>
      <v-col v-show="!showSelect" cols="1" class="hidden-xs"></v-col>
      <v-col v-show="!showSelect" class="text-right hidden-xs" cols="1">
        <v-img
          class="my-1 ml-15 hidden-xs"
          src="@/assets/LogoFelix_1.png"
          max-height="40 "
        ></v-img>
      </v-col>
      <v-img
        v-show="!showSelect"
        class="mr-1 mt-2 text-right hidden-sm-and-up"
        src="@/assets/LogoFelix_1.png"
        max-height="32"
      ></v-img>
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
  created() {
    this.select = this.$store.state.time;
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
