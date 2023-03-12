let XData = ['张浦', '锦溪', '巴城', '陆家', '千灯','淀山湖','花桥','曹安','石浦','中华园']
let valueData = [1100,900,1000,450,1150,950,450,450,445,1180]
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            show: true,
            status: 'shadow',
            z: -1,
            shadowStyle: {
                color: '#E6F7FF',
            },
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [
        {
            position: 'bottom',
            type: 'category',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#ECF1F6'
                }
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                rotate: 0,
                fontSize: 12,
                color: 'rgba(0, 0, 0, 0.72)'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#ECF1F6', '#ECF1F6'],
                    width: 0,
                    type: 'dashed'
                }
            },
            gridIndex: 0,
            data: XData,
        }
    ],
    yAxis: [
        {
            type: 'value',
            position: 'left',
            minInterval: 200,
            // maxInterval: 5,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                rotate: 0,
                fontSize: 12,
                color: 'rgba(0, 0, 0, 0.72)',
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#ECF1F6', '#ECF1F6'],
                    width: 1,
                    type: 'solid'
                }
            },
        }
    ],
    "dataZoom": [{
        "show": true,
        "height": 8,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 10,
        "end": 90,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '160%',
        handleStyle:{
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#fff',
                },
                {
                    offset: 1,
                    color: '#F0F5FA',
                },
            ]),
            borderColor: '#D1DCED'
        },
       textStyle:{
        color:"#333",
        fontSize: 14,
        zlevel: 10
       },
       borderColor: 'RGBA(221, 233, 242, 1)',
       backgroundColor: 'RGBA(221, 233, 242, 1)'
    }, {
        "type": "inside",
        "show": true,
        "height": 5,
        "start": 1,
        "end": 35
    }],
    series: [
        {
            name: '各派出所实有房屋数',
            type: 'bar',
            data: valueData,
            itemStyle: {
                 normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(53, 157, 245, 1)"
                        },
                        {
                            offset: 1,
                            color: "rgba(123, 200, 255, 1)"
                        }
                    ])
                }
            },
            barMaxWidth: '25%',
        }
    ]
};