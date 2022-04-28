let delayed:boolean;
const SparklineConfig1: any = {
    
    config: {
        options: {
            events:[],
            spanGaps: true,
            pointRadius: 0,
            animation: {
                onComplete: () => {
                    delayed = true;
                },
                delay: (context:any) => {
                    let delay = 0;
                    if (
                        !delayed
                    ) {
                        delay = context.dataIndex * 1 + context.datasetIndex * 300;
                    }
                    return delay;
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        display: false,
                    },
                },
                y: {
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        display: false,
                    },
                },
            },
        }
    }
}

export default SparklineConfig1