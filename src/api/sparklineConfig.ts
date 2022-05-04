let delayed:boolean;
const SparklineConfig1: any = {
    
    config: {
        options: {
            events:[],
            spanGaps: true,
            pointRadius: 0,
            animation: {
                duration:0
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                x: {
                    stacked: true,  
                    
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        display: false,
                    },
                },
                y: {
                    stacked: true,  
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