
const SparklineConfig1 = {
    
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
                    display: true,
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