const set1 = [
    ['时间', '挂牌价', '到手优惠', '到手价', '凑单优惠', '凑单价'],
    ['2019/10/3 12:32', 245, 37.27, 207.73, 44.96, 200.04],
    ['2019/10/4 18:32', 203, 42.02, 160.98, 62.37, 140.63],
    ['2019/10/6 0:32', 210, 44.15, 165.85, 77.66, 132.34],
    ['2019/10/6 12:32', 233, 13.85, 219.15, 14.14, 218.86],
    ['2019/10/6 19:32', 208, 28.62, 179.38, 52.31, 155.69],
    ['2019/10/8 12:32', 210, 27.51, 182.49, 49.33, 160.67],
    ['2019/10/9 12:32', 237, 39.27, 197.73, 43.84, 193.16],
    ['2019/10/10 6:32', 235, 44.38, 190.62, 56.11, 178.89],
    ['2019/10/10 10:32', 220, 32.72, 187.28, 59.58, 160.42],
    ['2019/10/10 12:48', 227, 23.03, 203.97, 36.46, 190.54],
    ['2019/10/10 20:32', 201, 7.46, 193.54, 11.65, 189.35],
    ['2019/10/12 1:32', 235, 39.79, 195.21, 65.82, 169.18],
    ['2019/10/12 8:32', 236, 24.99, 211.01, 30.66, 205.34],
    ['2019/10/12 12:32', 234, 18.43, 215.57, 27.8, 206.2]
];

option = {
    dataset: [{
        source: set1,
    }],
    backgroundColor: '#fff',
    dataZoom: {
        type: 'slider',
        handleSize: '80%',
        height: 16,
        bottom: 8
    },
    legend: {
        left: 16,
        top: 8,
        data: set1[0].slice(1)
    },
    grid: {
        left: 48,
        right: 24,
        top: 48,
        bottom: 64
    },
    tooltip: {
        show: true
    },
    xAxis: {
        type: 'time'
    },
    yAxis: {
        type: 'value'
    },
    series: Array.from({
        length: 5
    }).map((key, idx) => ({
        name: set1[0][idx + 1],
        type: 'line',
        step: true,
        encode: {
            x: 0,
            y: idx + 1
        },
        markPoint: {
            data: [{
                    name: '最高',
                    type: 'max',
                },
                {
                    name: '最低',
                    type: 'min'
                }
            ],
            symbol: 'circle',
            symbolSize: '16',
            itemStyle: {
                opacity: 0.5
            },
            label: {
                show: false
            }
        }
    }))


};
myChart.resize({
    width: 728,
    height: 290
});