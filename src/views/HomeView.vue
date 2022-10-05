<script setup lang="ts">
import { ref } from 'vue'
import informationCards from '@/components/InformationCards.vue'
import StatCard from '@/components/StatCard.vue'
import { useDeviceStore } from '@/stores/devices';

const deviceStore = useDeviceStore()
deviceStore.fetch_devices();

const static_stats = ref([
  { label: 'cities', icon: 'mdi-home-city', value: 3 },
  { label: 'users', icon: 'mdi-account', value: 8 },
])

</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-card elevation="5" class="hidden-sm-and-up">
        <v-img src="/img/nature.jpg" height="150" cover>
          <v-row class="text-center" justify="center">
            <v-col cols="12">
              <v-container>
                <h1
                  class="text-h2 font-weight-bold mb-4 mt-1"
                  style="color: white"
                >
                  DUST
                </h1>

                <h4 class="text-h4 font-weight-thin" style="color: white">
                  {{ $t("homePage.bannerText") }}
                </h4>
              </v-container>
            </v-col>
          </v-row>
        </v-img>
      </v-card>

      <v-card elevation="5" class="hidden-xs mt-10">
        <v-img src="/img/nature.jpg" height="400" cover>
          <v-row class="text-center" justify="center">
            <v-col cols="12">
              <v-container class="mt-16">
                <h1
                  class="text-h2 font-weight-bold mb-4 mt-12"
                  style="color: white"
                >
                  DUST
                </h1>

                <h4 class="text-h4 font-weight-thin" style="color: white">
                  {{ $t("homePage.bannerText") }}
                </h4>
              </v-container>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center" class="hidden-xs text-center">
    <v-col cols="10">
      <v-layout class="my-10"></v-layout>
      <p class="text-justify">
        {{ $t("homePage.introduction") }}
      </p>
      <p class="my-10 font-weight-bold">
        {{ $t("homePage.hieronderKaart") }} <br />
        {{ $t("homePage.drukOpEenPin") }}
      </p>
      <mapVue class="my-15" />
      <v-layout class="my-15"></v-layout>
    </v-col>
  </v-row>
  <!-- MOBILE -->
  <v-row justify="center" class="hidden-sm-and-up text-center">
    <v-col cols="11">
      <v-layout class="my-2"></v-layout>
      <p class="my-3 font-weight-bold">
        {{ $t("homePage.hieronderKaart") }} <br />
        {{ $t("homePage.drukOpEenPin") }}
      </p>
      <mapVue class="mt-2 mb-2" />
      <p class="text-justify">
        {{ $t("homePage.introduction") }}
      </p>
      <v-layout class="my-5"></v-layout>
    </v-col>
  </v-row>

  <v-row justify="center" class="py-15" style="background: rgb(var(--v-theme-backgroundShift), 0.2)">
    <v-col cols="12" md="10">
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4" lg="3">
          <StatCard :label="$t('devices')" :value="deviceStore.device_count" icon="mdi-cube" />
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <StatCard :label="$t('sensors')" :value="deviceStore.sensor_count" icon="mdi-car-cruise-control" />
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="stat in static_stats" :key="stat.label">
          <StatCard :label="$t(stat.label)" :value="stat.value" :icon="stat.icon" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>

</template>
