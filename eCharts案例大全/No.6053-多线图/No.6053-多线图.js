data = [
    ["2000-06-05", 116],
    ["2000-06-06", 129],
    ["2000-06-07", 135],
    ["2000-06-08", 86],
    ["2000-06-09", 73],
    ["2000-06-10", 85],
    ["2000-06-11", 73],
    ["2000-06-12", 68],
    ["2000-06-13", 92],
    ["2000-06-14", 130],
    ["2000-06-15", 245],
    ["2000-06-16", 139],
    ["2000-06-17", 115],
    ["2000-06-18", 111],
    ["2000-06-19", 309],
    ["2000-06-20", 206],
    ["2000-06-21", 137],
    ["2000-06-22", 128],
    ["2000-06-23", 85],
    ["2000-06-24", 94],
    ["2000-06-25", 71],
    ["2000-06-26", 106],
    ["2000-06-27", 84],
    ["2000-06-28", 93],
    ["2000-06-29", 85],
    ["2000-06-30", 73],
    ["2000-07-01", 83],
    ["2000-07-02", 125],
    ["2000-07-03", 107],
    ["2000-07-04", 82],
    ["2000-07-05", 44],
    ["2000-07-06", 72],
    ["2000-07-07", 106],
    ["2000-07-08", 107],
    ["2000-07-09", 66],
    ["2000-07-10", 91],
    ["2000-07-11", 92],
    ["2000-07-12", 113],
    ["2000-07-13", 107],
    ["2000-07-14", 131],
    ["2000-07-15", 111],
    ["2000-07-16", 64],
    ["2000-07-17", 69],
    ["2000-07-18", 88],
    ["2000-07-19", 77],
    ["2000-07-20", 83],
    ["2000-07-21", 111],
    ["2000-07-22", 57],
    ["2000-07-23", 55],
    ["2000-07-24", 60]
];

var dateList = data.map(function(item) {
    return item[0];
});
var valueList = data.map(function(item) {
    return item[1];
});

option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        show: true
    },

    xAxis: [{
        data: dateList,
        gridIndex: 0,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }, {
        data: dateList,
        gridIndex: 1,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }, {
        data: dateList,
        gridIndex: 2,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }, {
        data: dateList,
        gridIndex: 3,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }, {
        data: dateList,
        gridIndex: 4
    }],
    yAxis: [{
        splitLine: {
            show: false
        }
    }, {
        splitLine: {
            show: false
        },
        gridIndex: 1
    }, {
        splitLine: {
            show: false
        },
        gridIndex: 2
    }, {
        splitLine: {
            show: false
        },
        gridIndex: 3
    }, {
        splitLine: {
            show: false
        },
        gridIndex: 4
    }],
    grid: [{
        top: 25,
        bottom: '80%'
    }, {
        top: '20%',
        bottom: '60%'
    }, {
        top: '40%',
        bottom: '40%'
    }, {
        top: '60%',
        bottom: '20%'
    }, {
        top: '80%',
        bottom: 25
    }],
    series: [{
        name: 'a',
        type: 'line',
        showSymbol: false,
        data: valueList,
        xAxisIndex: 0,
        yAxisIndex: 0
    }, {
        name: 'b',
        type: 'line',
        showSymbol: false,
        data: valueList,
        xAxisIndex: 1,
        yAxisIndex: 1
    }, {
        name: 'c',
        type: 'line',
        showSymbol: false,
        data: valueList,
        xAxisIndex: 2,
        yAxisIndex: 2
    }, {
        name: 'd',
        type: 'line',
        showSymbol: false,
        data: valueList,
        xAxisIndex: 3,
        yAxisIndex: 3
    }, {
        name: 'e',
        type: 'line',
        showSymbol: false,
        data: valueList,
        xAxisIndex: 4,
        yAxisIndex: 4
    }]
};