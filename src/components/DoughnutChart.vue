<template>
  <DoughnutChart :chartData="this.data" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: 'doughnutChart',
  components: { DoughnutChart },
  props:["data"]
});
</script>






    //  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //   datasets: [
    //     {
    //       label: 'depth sensor 1',
    //       data:  [40, 39, 10, 40, 39, 80, 100],
    //       borderColor: '#E6BF13',
    //       backgroundColor: '#E6BF13',
    //       fill: true,  
    //       tension: 0.4
    //     },