option = {
    backgroundColor: '#00043A',
    tooltip: {
        trigger: 'axis',
        show: false,
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        show:false
    },
    grid: {
        left: '3%',
        right: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        splitLine: {
            show: false
        },
        type: 'value',
        show: false,
    }],
    yAxis: [{
        splitLine: {
            show: false
        },
        axisLine: { //y轴
            show: false
        },
        type: 'category',
        axisTick: {
            show: false
        },
        inverse: true,
        data: ['牵引高速断路器凝失效', '牵引高速断路器凝失效', '牵引高速断路器凝失效', '牵引高速断路器凝失效', '牵引高速断路器凝失效','牵引高速断路器凝失效','牵引高速断路器凝失效', '牵引高速断路器凝失效','牵引高速断路器凝失效','牵引高速断路器凝失效'],
        axisLabel: {
            color: '#A7D6F4',
            fontSize: 14,
        }
    }],
    series: [{
        name: '标准化',
        type: 'bar',
        barWidth: 12, // 柱子宽度
        label: {
            show: true,
            position: 'right', // 位置
            color: '#A7D6F4',
            fontSize: 14,
            distance: 15, // 距离
			formatter: '{c} 万公里' // 这里是数据展示的时候显示的数据
        }, // 柱子上方的数值
        itemStyle: {
            barBorderRadius: [0, 20, 20, 0], // 圆角（左上、右上、右下、左下）
            
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: '#51C5FD'
                }, {
                    offset: 1,
                    color: '#005BB1' 
                }], false), // 渐变
        },
        data: [400,380,360,340,320,300,280,260,240,220]
    }, ]
};