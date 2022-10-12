<script setup lang="ts">
import { ref } from 'vue'
import StatCard from '@/components/StatCard.vue'
import { useDeviceStore } from '@/stores/devices';
import HeroImage from '../components/HeroImage.vue';
import DeviceMap from '@/components/DeviceMap.vue'

const deviceStore = useDeviceStore()
deviceStore.fetch_devices();

const static_stats = ref([
  { label: 'cities', icon: 'mdi-home-city', value: 3 },
  { label: 'users', icon: 'mdi-account', value: 8 },
  { label: 'area', icon: 'mdi-image-area', value: '3204 m\u00B2' }
])

</script>

<template>

  <v-row justify="center" class="text-center" no-gutters>
    <v-col cols="12">
      <device-map />
    </v-col>
  </v-row>

  <v-row justify="center" class="text-center my-10">
    <v-col cols="10">
      <p class="text-justify">
        {{ $t("homePage.introduction") }}
      </p>
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
