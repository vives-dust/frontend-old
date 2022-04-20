<template>
  <LineChart :chartData="this.data" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: 'lineChart',
  components: { LineChart },
  props:["data"]
});
</script>






