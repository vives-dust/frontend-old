<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  icon: { type: String, default: 'mdi-thermometer' },
  label: { type: String, default: 'Counter' },
  value: { type: [String, Number], default: '?' },
  color: { type: String, default: 'primary' },
  loading: { type: Boolean, default: false }
})

</script>

<template>
  <v-card :loading="loading">
    <v-container class="d-flex flex-row justify-space-around align-center">
      <v-icon :icon="props.icon" :color="props.color" size="72" />
      <v-card variant="text">
        <v-card-text class="text-h5 text-center">{{ label }}</v-card-text>
        <v-card-text class="text-h3 text-center font-weight-bold">{{ value }}</v-card-text>
      </v-card>
    </v-container>
  </v-card>
</template>