<template>
  <DoughnutChart :chartData="this.data" :options="this.options" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: 'doughnutChart',
  components: { DoughnutChart },
  props:["data", "options"]
});
</script>