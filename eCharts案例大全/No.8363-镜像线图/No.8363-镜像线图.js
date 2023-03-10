// 配置
option = {
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        }
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#ccc',
                type: 'dashed'
            }
        }
    },
    legend: {
        show: true,
        textStyle: {
            color: '#A6A6A6'
        }
    },
    grid: [{
            left: 50,
            right: 0,
            height: '35%'
        },
        {
            left: 50,
            right: 0,
            top: '52%',
            height: '35%'
        }
    ],
    xAxis: [{
            gridIndex: 0,
            type: 'category',
            splitNumber: 3,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                margin: 12,
                textStyle: {
                    color: '#A6A6A6',
                    fontSize: 14
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#eee'
                }
            },
            data: []
        },
        {
            gridIndex: 1,
            type: 'category',
            splitNumber: 3,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#eee'
                }
            },
            data: []
        }
    ],
    yAxis: [{
            gridIndex: 0,
            name: '(时间:秒)',
            nameGap: 20,
            nameTextStyle: {
                fontSize: 14,
                color: '#999'
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#A6A6A6',
                    fontSize: 14
                }
            },
            splitLine: {
                show: false
            }
        },
        {
            gridIndex: 1,
            name: '(数量:十万)',
            nameGap: 20,
            nameTextStyle: {
                fontSize: 14,
                color: '#999'
            },
            inverse: true,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#A6A6A6',
                    fontSize: 14
                }
            },
            splitLine: {
                show: false
            }
        }
    ],
    dataZoom: [{
        type: 'slider',
        height: 16,
        end: 100,
        bottom: 4,
        left: 50,
        right: 50,
        xAxisIndex: [0, 1],
        fillerColor: 'rgba(25,144,255,0.1)',
        borderColor: 'rgba(219,219,219,1)',
        dataBackground: {
            lineStyle: {
                color: 'rgba(219,219,219,1)'
            }
        }
    }],
    series: [{
            name: '当日',
            type: 'line',
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#1990FF',
                    shadowColor: 'rgba(25, 144, 255, 0.5)',
                    shadowBlur: 4,
                    shadowOffsetY: 2
                }
            },
            itemStyle: {
                normal: {
                    color: '#1990FF',
                    borderColor: '#1990FF',
                    borderWidth: 10,
                    opacity: 0.3
                }
            },
            data: []
        },
        {
            name: '今天',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#30DAD7',
                    shadowColor: 'rgb(48, 218, 215, 0.5)',
                    shadowBlur: 4,
                    shadowOffsetY: 2
                }
            },
            itemStyle: {
                normal: {
                    color: '#30DAD7',
                    borderColor: '#30DAD7',
                    borderWidth: 10,
                    opacity: 0.3
                }
            },
            data: []
        }
    ]
}
// 数据
const xAxisData = ['2019-1-1', '2019-1-2', '2019-1-3', '2019-1-4', '2019-1-5', '2019-1-6', '2019-1-7', '2019-1-8', '2019-1-9']
const seriesData = [123, 58, 221, 12, 45, 234, 42, 623, 45, ]
option.xAxis[0].data = xAxisData || ['2019-1-1', '2019-1-2', '2019-1-3', '2019-1-4']
option.xAxis[1].data = xAxisData || ['2019-1-1', '2019-1-2', '2019-1-3', '2019-1-4']
option.series[0].data = seriesData
option.series[1].data = seriesData