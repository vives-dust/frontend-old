<template>
  <LineChart :chartData="this.data" :options="this.options"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
import LineChartConfig from '@/source/LineChartConfig'

Chart.register(...registerables);

export default defineComponent({
  name: 'lineChart',
  components: { LineChart },
  props:["data"],
  data: () => ({
    options: LineChartConfig.config.options,
  }),
});
</script>






