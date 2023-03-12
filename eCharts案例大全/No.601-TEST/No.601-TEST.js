option = {
    backgroundColor: {
        type: 'radial',
        x: 0.5,
        y: 0.4,
        r: 0.3,
        colorStops: [{
            offset: 0,
            color: '#895355'
        }, {
            offset: .5,
            color: '#593640'
        }, {
            offset: 1,
            color: '#39273d'
        }],
        globalCoord: false
    },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        type: 'scroll',
        show: true,
        top: 10,
        left: 'center',
        itemWidth: 14,
        itemHeight: 10,
        itemGap: 48,
        width: 600,
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
        textStyle: {
            color: '#fff',
            fontSize: 12,
        },
    },
    textStyle: {
        color: '#fff',
    },
    visualMap: {
        min: 0,
        max: 100,
        calculable: true,
        itemWidth: 14,
        itemHeight: 165,
        align: 'left',
        color: ['#3f4199', '#5d54b5', '#a0589e', '#e76281', '#fe846d', '#feda5b'],
        right: 30,
        top: '30%',
        textStyle: {
            color: '#fff',
            fontSize: 14,
        }
    },
    radar: {
        center: ['50%', '50%'],
        radius: 180,
        startAngle: 90,
        nameGap: 16,
        splitNumber: 4,
        shape: 'polygon',
        axisLine: {
            show: true,
            lineStyle: {
                // color: '#564d8e',
                width: 1,
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                // color: '#4b476f',
                width: 1,
            },
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: 'rgba(0, 0, 0,0)'
            },
        },
        indicator: [{
                text: 'A',
                max: 100
            },
            {
                text: 'B ',
                max: 100
            },
            {
                text: 'C',
                max: 100
            },
            {
                text: 'D',
                max: 100
            },
            {
                text: 'E',
                max: 100
            },
            {
                text: 'F',
                max: 100
            }
        ]
    },
    series: {
        name: '',
        type: 'radar',
        symbol: 'none',
        areaStyle: {
            emphasis: {
                opacity: 0.3,
            },
        },
        lineStyle: {
            normal: {
                width: 0.8,
            },
        },
        data: [{
                name: 'A',
                value: [100, 80, 30, 30, 40, 80]
            },
            {
                name: 'B',
                value: [95, 75, 35, 35, 45, 75]
            },
            {
                name: 'C',
                value: [90, 72, 40, 40, 50, 70]
            },
            {
                name: 'D',
                value: [85, 70, 45, 45, 55, 65]
            },
            {
                name: 'E',
                value: [80, 68, 50, 50, 60, 60]
            },
            {
                name: 'F',
                value: [75, 65, 55, 55, 65, 55]
            },
            {
                name: 'G',
                value: [70, 62, 60, 60, 70, 50]
            },
            {
                name: 'H',
                value: [65, 60, 65, 65, 75, 45]
            },
            {
                name: 'I',
                value: [60, 58, 70, 70, 80, 40]
            },
            {
                name: 'J',
                value: [55, 55, 75, 75, 85, 35]
            }
        ]
    }
};