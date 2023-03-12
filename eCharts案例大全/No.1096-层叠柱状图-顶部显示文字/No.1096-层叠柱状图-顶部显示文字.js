option = {
    color: [
        '#60acfc',
        '#feb64d',
        '#5bc49f',
        '#ff7b7b',
        '#32d3eb',
        '#9287e7',
        '#4777cd',
        '#70ad47',
        '#61a6e4',
        '#ffc900',
        '#ff7820',
        '#8d50bf',
        '#02b67a',
        '#5470c6',
        '#91cc75',
        '#fac858',
        '#ee6666',
        '#73c0de',
        '#3ba272',
        '#fc8452',
        '#ea7ccc',
        '#00bfb7',
        '#ff6480',
        '#9a60b4',
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        y: 'center',
        align: 'left',
        padding: 10,
        data: ['苏宁', '考拉', '京东', '天猫', '淘宝'],
    },
    grid: {
        top: '4%',
        right: 160,
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        axisTick: {
            show: false,
        },
        data: ['Total', 'suning', 'kaola', 'jd', 'tmall', 'tb'],
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    series: [
        {
            type: 'bar',
            stack: 'one',
            align: 'inside',
            name: '淘宝',
            data: [12.51, '-', 10, '-', '-', 43],
            barWidth: '40%',
            label: {
                show: true,
                position: 'inside',
                fontSize: 12,
                color: 'white',
                textBorderWidth: 1,
                textBorderColor: 'inherit',
            },
            labelLayout: {
                hideOverlap: true,
            },
        },
        {
            type: 'bar',
            stack: 'one',
            align: 'inside',
            name: '天猫',
            data: [53.08, 10, 8, '-', 14, 17],
            barWidth: '40%',
            label: {
                show: true,
                position: 'inside',
                fontSize: 12,
                color: 'white',
                textBorderWidth: 1,
                textBorderColor: 'inherit',
            },
            labelLayout: {
                hideOverlap: true,
            },
        },
        {
            type: 'bar',
            stack: 'one',
            align: 'inside',
            name: '京东',
            data: [32.34, 27, 20, 100, 24, 12],
            barWidth: '40%',
            label: {
                show: true,
                position: 'inside',
                fontSize: 12,
                color: 'white',
                textBorderWidth: 1,
                textBorderColor: 'inherit',
            },
            labelLayout: {
                hideOverlap: true,
            },
        },
        {
            type: 'bar',
            stack: 'one',
            align: 'inside',
            name: '考拉',
            data: [0.09, '-', 52, '-', 32, 18],
            barWidth: '40%',
            label: {
                show: true,
                position: 'inside',
                fontSize: 12,
                color: 'white',
                textBorderWidth: 1,
                textBorderColor: 'inherit',
            },
            labelLayout: {
                hideOverlap: true,
            },
        },
        {
            type: 'bar',
            stack: 'one',
            align: 'inside',
            name: '苏宁',
            data: [1.97, 13, 10, '-', 20, 10],
            barWidth: '40%',
            label: {
                show: true,
                position: 'inside',
                fontSize: 12,
                color: 'white',
                textBorderWidth: 1,
                textBorderColor: 'inherit',
            },
            labelLayout: {
                hideOverlap: true,
            },
        },
        {
            type: 'bar',
            name: '总数',
            color: 'rgba(0,0,0,0)',
            data: [100, 50, 100, 100, 90, 100],
            barWidth: 0,
            label: {
                show: true,
                position: 'top',
                fontSize: 12,
            },
            z: -1,
            barGap: '-100%',
            labelLayout: {
                hideOverlap: true,
            },
        },
    ],
};
