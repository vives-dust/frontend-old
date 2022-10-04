<template>
  <v-footer class="text-medium-emphasis mt-3" color="fourth">
    <v-row justify="center" class="hidden-xs">
      <v-col cols="3">
        <h1>DUST</h1>
        <p class="mt-3">{{ $t("footer.header") }}</p>
        <p>{{ $t("footer.underHeader") }}</p>
        <v-col class="d-flex" cols="10">
          <v-img class="mr-8" src="@/assets/VIVES_Logo.png" height="50px" />
          <v-img class="mr-16" src="@/assets/LogoFelix_1.png" height="50px" />
        </v-col>
      </v-col>

      <v-col cols="2">
        <h3 class="text-disabled mb-5 mt-2">
          {{ $t("footer.links.title") }}
        </h3>

        <p class="my-2"></p>
        <p class="my-2">
          <a
            href="https://www.vives.be/nl"
            target="_blank"
            style="color: white"
            >{{ $t("footer.links.one") }}</a
          >
        </p>
        <p class="my-2">
          <a
            href="https://iot-incubator.be/"
            target="_blank"
            style="color: white"
            >{{ $t("footer.links.two") }}</a
          >
        </p>
        <p class="my-2">
          <a
            href="https://github.com/VIVES-Elektronica-ICT-Brugge"
            target="_blank"
            style="color: white"
            >{{ $t("footer.links.three") }}</a
          >
        </p>
        <p class="my-2">
          <a
            href="https://thesis-dust-felix-2022.netlify.app/"
            target="_blank"
            style="color: white"
            >{{ $t("footer.links.four") }}</a
          >
        </p>
      </v-col>

      <v-col cols="2">
        <h3 class="text-disabled mb-5 mt-2">
          {{ $t("footer.support.title") }}
        </h3>
        <a href="mailto:piet.cordemans@vives.be" style="color: white">
          <p class="my-2">{{ $t("footer.support.one") }}</p>
        </a>
        <p class="my-2">{{ $t("footer.support.two") }}</p>
        <p class="my-2">{{ $t("footer.support.three") }}</p>
        <p class="my-2">{{ $t("footer.support.four") }}</p>
      </v-col>

      <v-col cols="2">
        <h3 class="text-disabled mb-5 mt-2">
          {{ $t("footer.legal.title") }}
        </h3>

        <p class="my-2">{{ $t("footer.legal.one") }}</p>
        <!-- <p class="my-2">{{ $t("footer.legal.two") }}</p>
        <p class="my-2">{{ $t("footer.legal.three") }}</p>
        <p class="my-2">{{ $t("footer.legal.four") }}</p> -->
      </v-col>

      <v-col cols="auto">
        <h3 class="text-disabled mb-5 mt-2">
          {{ $t("footer.sitemap.title") }}
        </h3>

        <a href="mailto:felix.falk2903@gmail.com" style="color: white">
          <p class="my-2">{{ $t("footer.sitemap.one") }}</p>
        </a>
        <!-- <p class="my-2">{{ $t("footer.sitemap.three") }}</p>
        <p class="my-2">{{ $t("footer.sitemap.four") }}</p> -->
      </v-col>
    </v-row>

    <v-container class="hidden-sm-and-up" style="text-align: center">
      <v-row>
        <v-col>
          <h1>DUST</h1>
          <p class="mt-3">{{ $t("footer.header") }}</p>
          <p>{{ $t("footer.underHeader") }}</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <h3 class="text-disabled mb-5 mt-2">
            {{ $t("footer.links.title") }}
          </h3>

          <p class="my-2">
            <a
              href="https://www.vives.be/nl"
              target="_blank"
              style="color: white"
              >{{ $t("footer.links.one") }}</a
            >
          </p>
          <p class="my-2">
            <a
              href="https://iot-incubator.be/"
              target="_blank"
              style="color: white"
              >{{ $t("footer.links.two") }}</a
            >
          </p>
          <p class="my-2">
            <a
              href="https://github.com/VIVES-Elektronica-ICT-Brugge"
              target="_blank"
              style="color: white"
              >{{ $t("footer.links.three") }}</a
            >
          </p>
          <p class="my-2">
            <a
              href="https://thesis-dust-felix-2022.netlify.app/"
              target="_blank"
              style="color: white"
              >{{ $t("footer.links.four") }}</a
            >
          </p>
        </v-col>

        <v-col cols="6">
          <h3 class="text-disabled mb-5 mt-2">
            {{ $t("footer.support.title") }}
          </h3>

          <a href="mailto:piet.cordemans@vives.be" style="color: white">
            <p class="my-2">{{ $t("footer.support.one") }}</p>
          </a>
          <p class="my-2">{{ $t("footer.support.two") }}</p>
          <p class="my-2">{{ $t("footer.support.three") }}</p>
          <p class="my-2">{{ $t("footer.support.four") }}</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <h3 class="text-disabled mb-5 mt-2">
            {{ $t("footer.legal.title") }}
          </h3>

          <p class="my-2">{{ $t("footer.legal.one") }}</p>
          <!-- <p class="my-2">{{ $t("footer.legal.two") }}</p>
          <p class="my-2">{{ $t("footer.legal.three") }}</p>
          <p class="my-2">{{ $t("footer.legal.four") }}</p> -->
        </v-col>

        <v-col cols="6">
          <h3 class="text-disabled mb-5 mt-2">
            {{ $t("footer.sitemap.title") }}
          </h3>

          <a href="mailto:felix.falk2903@gmail.com" style="color: white">
            <p class="my-2">{{ $t("footer.sitemap.one") }}</p>
          </a>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col class="d-flex" cols="12">
          <v-img class="ml-n5" src="@/assets/VIVES_Logo.png" height="50px" />
          <v-img class="mr-n4" src="@/assets/LogoFelix_1.png" height="50px" />
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<!-- <script setup lang="ts">
  import { useI18n } from "vue-i18n";

  const { t, locale } = useI18n();
</script> -->