<script setup lang="ts">
import StatCard from '@/components/StatCard.vue'
import { useDeviceStore } from '@/stores/devices';
import DeviceMap from '@/components/DeviceMap.vue'

const deviceStore = useDeviceStore()
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
          <StatCard :loading="deviceStore.loading" :label="$t('devices')" :value="deviceStore.device_count" icon="mdi-cube" />
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <StatCard :loading="deviceStore.loading" :label="$t('sensors')" :value="deviceStore.sensor_count" icon="mdi-car-cruise-control" />
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <StatCard :loading="deviceStore.loading" :label="$t('trees')" :value="deviceStore.tree_count" icon="mdi-tree" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>

</template>
