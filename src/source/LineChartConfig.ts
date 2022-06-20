
const LineChartConfig = {

    config: {
        options: {
            spanGaps: true,
            pointRadius: 0,
            // animation: {
            //     onComplete: () => {
            //         delayed = true;
            //     },
            //     delay: (context: any) => {
            //         let delay = 0;
            //         if (
            //             !delayed
            //         ) {
            //             delay = context.dataIndex * 1 + context.datasetIndex * 300;
            //         }
            //         return delay;
            //     },
            // },
            scales: {
                x: {
                    ticks: {
                        autoSkipPadding: 15
                    }
                },
                
            }
        }
    }
}

export default LineChartConfig