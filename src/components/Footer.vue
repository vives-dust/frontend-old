<template>
  <v-footer class="text-medium-emphasis mt-5" color="fourth">
    <v-row justify="center">
      <v-col cols="3">
        <h1>DUST</h1>
        <p class="mt-3">{{t('footer.header',{},{locale: lang})}}</p>
        <p>{{t('footer.underHeader',{},{locale: lang})}}</p>
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
        <h3 class="text-disabled mb-5 mt-2">{{t('footer.links.title',{},{locale: lang})}}</h3>

        <p class="my-2">{{t('footer.links.one',{},{locale: lang})}}</p>
        <p class="my-2">{{t('footer.links.two',{},{locale: lang})}}</p>
        <p class="my-2">{{t('footer.links.three',{},{locale: lang})}}</p>
        <p class="my-2">{{t('footer.links.four',{},{locale: lang})}}</p>
      </v-col>

      <v-col cols="2">
        <h3 class="text-disabled mb-5 mt-2">{{t('footer.support.title',{},{locale: lang})}}</h3>

        <p class="my-2">{{t('footer.support.one',{},{locale: lang})}}</p>
        <p class="my-2">{{t('footer.support.two',{},{locale: lang})}}</p>
        <p class="my-2">{{t('footer.support.three',{},{locale: lang})}}</p>
        <p class="my-2">{{t('footer.support.four',{},{locale: lang})}}</p>
      </v-col>

      <v-col cols="2">
        <h3 class="text-disabled mb-5 mt-2">{{t('footer.legal.title',{},{locale: lang})}}</h3>

        <p class="my-2">{{t('footer.legal.one',{},{locale: lang})}}</p>
        <p class="my-2">{{t('footer.legal.two',{},{locale: lang})}}</p>
        <p class="my-2">{{t('footer.legal.three',{},{locale: lang})}}</p>
        <p class="my-2">{{t('footer.legal.four',{},{locale: lang})}}</p>
      </v-col>

      <v-col cols="auto">
        <h3 class="text-disabled mb-5 mt-2">{{t('footer.sitemap.title',{},{locale: lang})}}</h3>

        <p class="my-2">{{t('footer.sitemap.one',{},{locale: lang})}}</p>
        <p class="my-2">{{t('footer.sitemap.two',{},{locale: lang})}}</p>
        <p class="my-2">{{t('footer.sitemap.three',{},{locale: lang})}}</p>
        <p class="my-2">{{t('footer.sitemap.four',{},{locale: lang})}}</p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { useI18n } from 'vue-i18n';
export default {
  name: "footerBar",
    setup(){
    const {t,locale} = useI18n();

    return {t,locale}
  },
};
</script>

<style>
</style>