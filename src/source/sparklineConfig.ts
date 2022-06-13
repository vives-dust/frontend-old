
const SparklineConfig1 = {
    
    config: {
        options: {
            events:[],
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
                    stacked: false,  
                    
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        display: false,
                    },
                },
                y: {
                    stacked: false,  
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