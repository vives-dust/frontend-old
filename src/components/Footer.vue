<template>
  <v-footer class="text-medium-emphasis mt-5" color="fourth">
    <v-row justify="center">
      <v-col cols="3">
        <h1>DUST</h1>
        <p class="mt-3">{{$t('footer.header')}}</p>
        <p>{{$t('footer.underHeader')}}</p>
        <v-col class="mt-3">
          <v-icon
            class="mr-8 ml-n4"
            size="60"
            icon="mdi:mdi-car-cruise-control "
          />
          <v-icon class="mx-8" size="60" icon="mdi:mdi-id-card" />
          <v-icon class="mx-8" size="60" icon="mdi:mdi-github" />
        </v-col>
      </v-col>

      <v-col cols="2">
        <h3 class="text-disabled mb-5 mt-2">{{$t('footer.links.title')}}</h3>

        <p class="my-2">{{$t('footer.links.one')}}</p>
        <p class="my-2">{{$t('footer.links.two')}}</p>
        <p class="my-2">{{$t('footer.links.three')}}</p>
        <p class="my-2">{{$t('footer.links.four')}}</p>
      </v-col>

      <v-col cols="2">
        <h3 class="text-disabled mb-5 mt-2">{{$t('footer.support.title')}}</h3>

        <p class="my-2">{{$t('footer.support.one')}}</p>
        <p class="my-2">{{$t('footer.support.two')}}</p>
        <p class="my-2">{{$t('footer.support.three')}}</p>
        <p class="my-2">{{$t('footer.support.four')}}</p>
      </v-col>

      <v-col cols="2">
        <h3 class="text-disabled mb-5 mt-2">{{$t('footer.legal.title')}}</h3>

        <p class="my-2">{{$t('footer.legal.one')}}</p>
        <p class="my-2">{{$t('footer.legal.two')}}</p>
        <p class="my-2">{{$t('footer.legal.three')}}</p>
        <p class="my-2">{{$t('footer.legal.four')}}</p>
      </v-col>

      <v-col cols="auto">
        <h3 class="text-disabled mb-5 mt-2">{{$t('footer.sitemap.title')}}</h3>

        <p class="my-2">{{$t('footer.sitemap.one')}}</p>
        <p class="my-2">{{$t('footer.sitemap.two')}}</p>
        <p class="my-2">{{$t('footer.sitemap.three')}}</p>
        <p class="my-2">{{$t('footer.sitemap.four')}}</p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { useI18n } from 'vue-i18n';
export default {
  name: "footerBar"
};
</script>

<style>
</style>