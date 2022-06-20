
const SparklineConfig1 = {
    
    config: {
        options: {
            spanGaps: true,
            pointRadius: 0,
            plugins: {
                legend: {
                    display: true,
                    labels:{
                        padding: 15
                    }
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