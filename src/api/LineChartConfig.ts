let delayed: boolean;
const LineChartConfig: any = {

    config: {
        options: {
            spanGaps: true,
            pointRadius: 0,
            animation: {
                onComplete: () => {
                    delayed = true;
                },
                delay: (context: any) => {
                    let delay = 0;
                    if (
                        !delayed
                    ) {
                        delay = context.dataIndex * 1 + context.datasetIndex * 300;
                    }
                    return delay;
                },
            },
            scales: {
                x: {
                    grid:{
                        offset: true
                    },
                    ticks: {
                        autoSkipPadding: 15
                    }
                },
                y:{
                    grid:{
                        offset: true
                    },
                }
                
            }
        }
    }
}

export default LineChartConfig