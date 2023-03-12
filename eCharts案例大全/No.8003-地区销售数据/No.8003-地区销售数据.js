setTimeout(function() {

    option = {
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: true
        },
        dataset: {
            source: [
                ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                ['Cheese Cocoa ', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ]
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            gridIndex: 0
        },
        grid: {
            top: '55%'
        },
        series: [{
                type: 'bar',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'bar',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'bar',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'bar',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'bar',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'bar',
                smooth: true,
                seriesLayoutBy: 'row'
            },

        ]
    };


    myChart.setOption(option);

});