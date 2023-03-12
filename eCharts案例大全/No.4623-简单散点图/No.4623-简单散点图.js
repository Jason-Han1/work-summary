var data = [
    [1, 4862.4],
    [2, 5294.7],
    [3, 5934.5],
    [4, 7171.0],
    [5, 8964.4],
    [6, 10202.2],
    [7, 11962.5],
    [8, 14928.3],
    [9, 16909.2],
    [10, 18547.9],
    [11, 21617.8],
    [12, 26638.1],
    [13, 34634.4],
    [14, 46759.4],
    [15, 58478.1],
    [16, 67884.6],
    [17, 74462.6],
    [18, 79395.7]
];

// See https://github.com/ecomfe/echarts-stat
// var myRegression = ecStat.regression('exponential', data);

// myRegression.points.sort(function(a, b) {
//     return a[0] - b[0];
// });

option = {
    backgroundColor: '#062C42',
    title: {
        text: '1981 - 1998 gross domestic product GDP (trillion yuan)',
    },
    color: ['#FAC305'],
    tooltip: {
        trigger: 'axis',
        // axisPointer: {
        //     type: 'cross'
        // }
    },
    xAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#42B9FF',
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            }
        },
        splitNumber: 20
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            show: false,
        }
    },
    series: [{
        name: 'scatter',
        type: 'scatter',
        emphasis: {
            itemStyle: {
                color: '#42B9FF',
                borderColor: '#062C42', 
                borderWidth: 2,
                shadowColor: '#42B9FF',
                shadowBlur: 2,
                //   shadowColor:'#42B9FF'
            },

            label: {
                show: true,
                position: 'right',
                color: '#42B9FF',
                fontSize: 16
            }
        },
        data: data
    }]
};