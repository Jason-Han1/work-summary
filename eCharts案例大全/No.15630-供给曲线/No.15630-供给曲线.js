option = {
    title: {
        text: '市场均衡',
        textStyle: {
            fontSize: 25
        },
        right: '50%'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Qd供给曲线', 'Qs需求曲线'],
        top: '50%',
        right: '5%',
        textStyle: {
            fontSize: 15
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        show: false
    },
    xAxis: {
        type: 'value',
        name: 'Q',
        nameTextStyle: {
            fontSize: 15,
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        name: 'P',
        splitLine: {
            show: false
        },
        nameTextStyle: {
            fontSize: 15,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    graphic: [{
        type: 'text',
        left: 'center',
        top: 'center',
        z: 100,
        style: {
            fill: '#fff',
            text: '知了学习社',
            font: 'bold 15px Microsoft YaHei'
        }
    }],
    series: [{
        name: 'Qd供给曲线',
        type: 'line',
        coordinateSystem: 'cartesian2d',
        line: {
            connectNulls: true
        },
        data: [
            [0.3, 0.540540541],
            [0.4, 0.555555556],
            [0.5, 0.571428571],
            [0.6, 0.588235294],
            [0.7, 0.606060606],
            [0.8, 0.625],
            [0.9, 0.64516129],
            [1, 0.666666667],
            [1.1, 0.689655172],
            [1.2, 0.714285714],
            [1.3, 0.740740741],
            [1.4, 0.769230769],
            [1.5, 0.8],
            [1.6, 0.833333333],
            [1.7, 0.869565217],
            [1.8, 0.909090909],
            [1.9, 0.952380952],
            [2, 1],
            [2.1, 1.052631579],
            [2.2, 1.111111111],
            [2.3, 1.176470588],
            [2.4, 1.25],
            [2.5, 1.333333333],
            [2.6, 1.428571429],
            [2.7, 1.538461538],
            [2.8, 1.666666667],
            [2.9, 1.818181818],
            [3, 2],
            [3.1, 2.222222222],
            [3.2, 2.5],
            [3.3, 2.857142857],
        ]
    }, {
        name: 'Qs需求曲线',
        type: 'line',
        coordinateSystem: 'cartesian2d',
        data: [
            [0.7, 2.857142857],
            [0.8, 2.5],
            [0.9, 2.222222222],
            [1, 2],
            [1.1, 1.818181818],
            [1.2, 1.666666667],
            [1.3, 1.538461538],
            [1.4, 1.428571429],
            [1.5, 1.333333333],
            [1.6, 1.25],
            [1.7, 1.176470588],
            [1.8, 1.111111111],
            [1.9, 1.052631579],
            [2, 1],
            [2.1, 0.952380952],
            [2.2, 0.909090909],
            [2.3, 0.869565217],
            [2.4, 0.833333333],
            [2.5, 0.8],
            [2.6, 0.769230769],
            [2.7, 0.740740741],
            [2.8, 0.714285714],
            [2.9, 0.689655172],
            [3, 0.666666667],
            [3.1, 0.64516129],
            [3.2, 0.625],
            [3.3, 0.606060606],
            [3.4, 0.588235294],
            [3.5, 0.571428571],
            [3.6, 0.555555556],
            [3.7, 0.540540541]
        ]
    }]
};