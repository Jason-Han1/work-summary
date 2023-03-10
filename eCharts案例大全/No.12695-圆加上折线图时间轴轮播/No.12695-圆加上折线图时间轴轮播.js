const delivery = [{
    name: '1',
    value: '2148'
}, {
    name: '2',
    value: '1371'
}, {
    name: '3',
    value: '2260'
}, {
    name: '4',
    value: '2228'
}, {
    name: '5',
    value: '2721'
}, {
    name: '6',
    value: '2473'
}, {
    name: '7',
    value: '2575'
}, {
    name: '8',
    value: '2744'
}, {
    name: '9',
    value: '2639'
}, {
    name: '10',
    value: '3000'
}]
const months = delivery.map(item => item.name)
const deliveryData = delivery.map(item => item.value)

var data = 20;
var loadData = [
    [{
        value: 30
    }, {
        value: 70
    }],
    [{
        value: 40
    }, {
        value: 60
    }],
    [{
        value: 50
    }, {
        value: 50
    }]
];
var center1 = [
    ['8%', '45%'],
    ['37%', '45%'],
    ['71%', '45%']
]; //三个圆的圆心
//			//最外一层颜色圈，由外到里第三层，斜线(要大于由外到里第二层的横坐标)，最小圆，由外到里第二层，由外到里第四层
var circle1 = [
    ['9%', '12%'],
    ['4%', '10%'], '8%', '5%', ['7%', '12%'],
    ['0%', '10%']
];
var colorList = [
    [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#5ae9b1'
    }, {
        offset: 1,
        color: '#e2d19d'
    }]), "#0d5e6d"],
    [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#f99b4e'
    }, {
        offset: 1,
        color: '#ffcc96'
    }]), "#0d5e6d"],
    [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#f95a4e'
    }, {
        offset: 1,
        color: '#fec090'
    }]), "#0d5e6d"]
]
var ArrPieSeries = []; //装每个的圆

for (let i = 0; i < loadData.length; i++) {
    var itemsStylesShan = {}; //装第一个不是渐变色的
    var itemsStylesShan2 = {}; //装第一个不是渐变色的
    itemsStylesShan.color = colorList[i][0];
    itemsStylesShan2.color = colorList[i][1];
    loadData[i][0].itemStyle = itemsStylesShan;
    loadData[i][1].itemStyle = itemsStylesShan2;

    ArrPieSeries.push({
            type: 'pie',
            radius: circle1[0],
            center: center1[i],
            hoverAnimation: false,
            z: 12,
            color: colorList[i],
            label: {
                normal: {
                    show: true,
                    formatter: function(params, i) {
                        if (params.dataIndex == 1) {
                            return params.percent.toFixed(0) + "%";
                        }
                    },
                    position: 'center',
                    color: "#0d5e6d",
                    fontSize: 20,
                    fontFamily: 'Font'
                }
            },
            data: loadData[i]
        },
        //      由里往外数第三圈
        {
            name: '遮罩4',
            type: 'pie',
            hoverAnimation: false,
            hoverOffset: 0,
            stillShowZeroSum: true,
            clickable: false,
            z: 2,
            radius: circle1[1],
            center: center1[i],
            itemStyle: {
                normal: {
                    color: '#046d70',
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 40
            }]
        },
        // 斜线
        {
            type: 'pie',
            hoverAnimation: false,
            z: 5,
            startAngle: 240,
            hoverOffset: 0,
            clickable: false,
            radius: circle1[2],
            center: center1[i],
            roseType: 'area',
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0)',
                    borderColor: '#fff',
                    borderWidth: 2
                },
            },
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 50
            }, {
                value: 50
            }]
        },
        //      最小的圆
        {
            type: 'pie',
            hoverAnimation: false,
            z: 7,
            startAngle: 240,
            hoverOffset: 0,
            clickable: false,
            radius: circle1[3],
            center: center1[i],
            roseType: 'area',
            itemStyle: {
                normal: {
                    color: '#44d3e3',
                }
            },
            label: {
                normal: {
                    show: false,
                    formatter: '{d}%',
                    position: 'center',
                    color: "#fff",
                    fontSize: 24,
                    fontFamily: 'Font'
                }
            },
            data: [100]
        },
        //内圈
        {
            name: '遮罩',
            type: 'pie',
            hoverAnimation: false,
            hoverOffset: 0,
            clickable: false,
            z: 7,
            radius: circle1[4],
            center: center1[i],
            itemStyle: {
                normal: {
                    color: '#03434c',
                    label: {
                        show: false
                    }
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 100
            }]
        }, {
            name: '遮罩1',
            type: 'pie',
            hoverAnimation: false,
            hoverOffset: 0,
            clickable: false,
            tooltip: {
                show: false
            },
            z: 1,
            radius: circle1[5],
            center: center1[i],
            itemStyle: {
                normal: {
                    color: '#44d3e3',
                    label: {
                        show: true
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 100
            }]
        })
}

var titleTextObject = {
    color: '#fff',
    rich: { //富文本
        white: {
            color: '#fff',
            fontSize: 16,
            padding: [5, 0, 0, 4]
        },
        circlewhite: {
            color: '#fff',
            fontSize: 18,
            padding: [10, 0, 0, 4]
        },
        bigwhite: {
            color: '#fff',
            fontSize: 22,
            fontFamliy: "Font",
            padding: [8, 0, 0, 4]
        },
        red: {
            color: '#f95a4e',
            fontSize: 18,
            padding: [10, 0, 0, 4]
        },
        newgreen: {
            color: '#51ebb3',
            fontSize: 18,
            padding: [10, 0, 0, 4]
        },
        orange: {
            color: '#f99b4e',
            fontSize: 18,
            padding: [10, 0, 0, 4]
        },
        neworange: {
            color: '#f8b551',
            fontSize: 17,
            fontWeight: 'normal',
            padding: [10, 0, 0, 4]
        },
        newblue: {
            color: '#00e7ff',
            fontSize: 17,
            fontWeight: 'normal',
            padding: [10, 0, 0, 4]
        }
    },
};





var lineListAddPie = [{
        name: '网络流量IN(Mbps)',
        type: 'line',
        symbolSize: 8,
        symbol: 'image://img/cloudData/circle1.png',
        xAxisIndex: 0,
        yAxisIndex: 0,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(1, 250, 252, 0.3)'
                }, {
                    offset: 0.9,
                    color: 'rgba(1, 250, 252, 0.3)'
                }], false),
                shadowColor: 'rgba(1, 250, 252, 0.3)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#01ecf0'
            }
        },
        markPoint: {
            itemStyle: {
                normal: {
                    color: 'rgba(248,181,81,0.7)',
                    borderColor: 'rgba(241,119,27,0.7)',
                    borderWidth: 2
                }
            },
            label: {
                normal: {
                    fontSize: 16
                }
            },
            data: [{
                    type: 'max',
                    name: '最大值'
                },
                {
                    type: 'min',
                    name: '最小值'
                }
            ]
        },
        markLine: {
            lineStyle: {
                normal: {
                    color: '#f98221'
                }
            },
            label: {
                normal: {
                    fontSize: 16
                }
            },
            data: [{
                type: 'average',
                name: '平均值'
            }]
        },
        data: deliveryData

    }, {
        name: '网络流量OUT(Mbps)',
        type: 'line',
        symbolSize: 8,
        symbol: 'image://img/cloudData/circle1.png',
        xAxisIndex: 1,
        yAxisIndex: 1,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(1, 250, 252, 0.3)'
                }, {
                    offset: 0.9,
                    color: 'rgba(1, 250, 252, 0.3)'
                }], false),
                shadowColor: 'rgba(1, 250, 252, 0.3)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#01ecf0'
            }
        },
        markPoint: {
            itemStyle: {
                normal: {
                    color: 'rgba(248,181,81,0.7)',
                    borderColor: 'rgba(241,119,27,0.7)',
                    borderWidth: 2
                }
            },
            label: {
                normal: {
                    fontSize: 16
                }
            },
            data: [{
                    type: 'max',
                    name: '最大值'
                },
                {
                    type: 'min',
                    name: '最小值'
                }
            ]
        },
        markLine: {
            lineStyle: {
                normal: {
                    color: '#f98221'
                }
            },
            label: {
                normal: {
                    fontSize: 16
                }
            },
            data: [{
                type: 'average',
                name: '平均值'
            }]
        },
        data: deliveryData
    }, {
        name: 'CPU(%)',
        type: 'line',
        symbol: 'image://img/cloudData/circle2.png', //改成小圆点图片路径，
        symbolSize: 8,
        xAxisIndex: 2,
        yAxisIndex: 2,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(241, 145, 73, 0.2)'
                }, {
                    offset: 0.9,
                    color: 'rgba(241, 145, 73, 0.2)'
                }], false),
                shadowColor: 'rgba(241, 145, 73, 0.2)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#f19149'
            }
        },
        markPoint: {
            itemStyle: {
                normal: {
                    color: 'rgba(0,186,255,0.7)',
                    borderColor: 'rgba(0,186,255,0.7)',
                    borderWidth: 2
                }
            },
            label: {
                normal: {
                    fontSize: 16
                }
            },
            data: [{
                    type: 'max',
                    name: '最大值'
                },
                {
                    type: 'min',
                    name: '最小值'
                }
            ]
        },
        markLine: {
            lineStyle: {
                normal: {
                    color: '#00baff'
                }
            },
            label: {
                normal: {
                    fontSize: 16
                }
            },
            data: [{
                type: 'average',
                name: '平均值'
            }]
        },
        data: deliveryData
    },
    {
        name: '内存(%)',
        type: 'line',
        symbol: 'image://img/cloudData/circle2.png', //改成小圆点图片路径，
        symbolSize: 8,
        xAxisIndex: 3,
        yAxisIndex: 3,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(241, 145, 73, 0.2)'
                }, {
                    offset: 0.9,
                    color: 'rgba(241, 145, 73, 0.2)'
                }], false),
                shadowColor: 'rgba(241, 145, 73, 0.2)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#f19149'
            }
        },
        markPoint: {
            itemStyle: {
                normal: {
                    color: 'rgba(0,186,255,0.7)',
                    borderColor: 'rgba(0,186,255,0.7)',
                    borderWidth: 2
                }
            },
            label: {
                normal: {
                    fontSize: 16
                }
            },
            data: [{
                    type: 'max',
                    name: '最大值'
                },
                {
                    type: 'min',
                    name: '最小值'
                }
            ]
        },
        markLine: {
            lineStyle: {
                normal: {
                    color: '#00baff'
                }
            },
            label: {
                normal: {
                    fontSize: 16
                }
            },
            data: [{
                type: 'average',
                name: '平均值'
            }]
        },
        data: deliveryData
    }, {
        name: '磁盘(%)',
        type: 'line',
        symbol: 'image://img/cloudData/circle2.png', //改成小圆点图片路径，
        symbolSize: 8,
        xAxisIndex: 4,
        yAxisIndex: 4,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(241, 145, 73, 0.3)'
                }, {
                    offset: 0.9,
                    color: 'rgba(241, 145, 73, 0.3)'
                }], false),
                shadowColor: 'rgba(241, 145, 73, 0.3)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#f19149'
            }
        },
        markPoint: {
            itemStyle: {
                normal: {
                    color: 'rgba(0,186,255,0.7)',
                    borderColor: 'rgba(0,186,255,0.7)',
                    borderWidth: 2
                }
            },
            label: {
                normal: {
                    fontSize: 16
                }
            },
            data: [{
                    type: 'max',
                    name: '最大值'
                },
                {
                    type: 'min',
                    name: '最小值'
                }
            ]
        },
        markLine: {
            lineStyle: {
                normal: {
                    color: '#00baff'
                }
            },
            label: {
                normal: {
                    fontSize: 16
                }
            },
            data: [{
                type: 'average',
                name: '平均值'
            }]
        },
        data: deliveryData
    },
];
lineListAddPie = lineListAddPie.concat(ArrPieSeries); //两个数组合并


option = {
    baseOption: {
        timeline: {
            show: false,
            axisType: 'category',
            autoPlay: true,
            symbolSize: 12,
            symbol: "image://img/data_share/small_icon.png",
            playInterval: 2000,
            top: '0%',
            left: '50%',
            right: '20%',
            label: {
                normal: {
                    color: '#fff',
                    fontSize: 16
                },
                emphasis: {
                    color: '#fff',
                    fontSize: 16
                }
            },
            lineStyle: {
                color: "#0b4e86"
            },
            controlStyle: {
                showPlayBtn: false,
                showPrevBtn: false,
                showNextBtn: false,
                normal: {
                    color: "#f00",
                    borderColor: "#0b4e86"
                }
            },
            checkpointStyle: { //『当前项』（checkpoint）的图形样式
                symbol: "image://img/data_share/small_active.png",
                symbolSize: 24
            },
            data: ['电信云机房', '中心机房', '视通机房'],
        },
        backgroundColor:"#013d5a",
        grid: [{
                x: '10%',
                y: '63%',
                width: '32%',
                height: '12%'
            },
            {
                x2: '10%',
                y: '63%',
                width: '32%',
                height: '12%'
            },
            {
                x: '7%',
                y: '85.5%',
                width: '21%',
                height: '8%'
            },
            {
                x: '40%',
                y: '85.5%',
                width: '21%',
                height: '8%'
            },
            {
                x: '70%',
                y: '85.5%',
                width: '21%',
                height: '8%'
            },
        ],
        title: [{
            text: '{circlewhite| CPU(核数)\n}{circlewhite|已使用 | 总资源}{newgreen|\n577 核 | 3144 核}',
            left: '14%',
            top: '41%',
            textAlign: 'left',
            textStyle: titleTextObject
        }, {
            text: '{circlewhite| 内存(GB)\n}{circlewhite|已使用 | 总资源}{orange|\n14814.8 G | 27447.2 G}',
            left: '43%',
            top: '41%',
            textAlign: 'left',
            textStyle: titleTextObject
        }, {
            text: '{circlewhite| FC存储(TB)\n}{circlewhite|已使用 | 总资源}{red|\n305.11 T | 27447.2 T}',
            left: '77%',
            top: '41%',
            textAlign: 'left',
            textStyle: titleTextObject
        }, {
            text: '{newblue| 网络流量IN在已分配资源中24小时的使用率}',
            left: '5.5%',
            top: '77.5%',
            textAlign: 'left',
            textStyle: titleTextObject
        }, {
            text: '{newblue| 网络流量OUT在已分配资源中24小时的使用率}',
            right: '9%',
            top: '77.5%',
            textAlign: 'left',
            textStyle: titleTextObject
        }, {
            text: '{neworange| CPU在已分配资源中24小时的使用率}',
            left: '2%',
            bottom: '0.6%',
            textAlign: 'left',
            textStyle: titleTextObject
        }, {
            text: '{neworange| 内存在已分配资源中24小时的使用率}',
            left: '34.5%',
            bottom: '0.6%',
            textAlign: 'left',
            textStyle: titleTextObject
        }, {
            text: '{neworange| 内存在已分配资源中24小时的使用率}',
            right: '4%',
            bottom: '0.6%',
            textAlign: 'left',
            textStyle: titleTextObject
        }],
        xAxis: [{
            type: 'category',
            gridIndex: 0,
            boundaryGap: false,
            data: months,
            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 16
            },
            axisLine: {
                lineStyle: {
                    color: '#00647e'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#01657d',
                    width: 1
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#01fafc'
                }
            }
        }, {
            type: 'category',
            boundaryGap: false,
            data: months,
            gridIndex: 1,
            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 16
            },
            axisLine: {
                lineStyle: {
                    color: '#00647e'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#01657d',
                    width: 1
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#01fafc'
                }
            }
        }, {
            type: 'category',
            boundaryGap: false,
            data: months,
            gridIndex: 2,
            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 16
            },
            axisLine: {
                lineStyle: {
                    color: '#00647e'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#01657d',
                    width: 1
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#01fafc'
                }
            }
        }, {
            type: 'category',
            boundaryGap: false,
            data: months,
            gridIndex: 3,
            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 16
            },
            axisLine: {
                lineStyle: {
                    color: '#00647e'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#01657d',
                    width: 1
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#01fafc'
                }
            }
        }, {
            type: 'category',
            boundaryGap: false,
            data: months,
            gridIndex: 4,
            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 16
            },
            axisLine: {
                lineStyle: {
                    color: '#00647e'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#01657d',
                    width: 1
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#01fafc'
                }
            }
        }],
        yAxis: [{
            type: 'value',
            name: '网络流量IN(Mbps)',
            gridIndex: 0,
            boundaryGap: true,
            axisLine: {
                lineStyle: {
                    color: '#01fafc'
                }
            },
            nameTextStyle: {
                color: "#fff",
                fontSize: 17,
            },
            nameGap: 20,
            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 16
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#01647b'
                }
            }
        }, {
            type: 'value',
            name: '网络流量OUT(Mbps)',
            boundaryGap: true,
            nameTextStyle: {
                color: "#fff",
                fontSize: 17,
            },
            nameGap: 20,
            axisLine: {
                lineStyle: {
                    color: '#01fafc'
                }
            },
            gridIndex: 1,
            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 16
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#01647b'
                }
            }
        }, {
            type: 'value',
            name: 'CPU(%)',
            nameTextStyle: {
                color: "#fff",
                fontSize: 17,
            },
            nameGap: 20,
            boundaryGap: true,
            axisLine: {
                lineStyle: {
                    color: '#01fafc'
                }
            },
            gridIndex: 2,
            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 16
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#01647b'
                }
            }
        }, {
            type: 'value',
            name: '内存(%)',
            nameTextStyle: {
                color: "#fff",
                fontSize: 17,
            },
            nameGap: 20,
            boundaryGap: true,
            axisLine: {
                lineStyle: {
                    color: '#01fafc'
                }
            },
            gridIndex: 3,
            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 16
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#01647b'
                }
            }
        }, {
            type: 'value',
            name: '磁盘(%)',
            boundaryGap: true,
            axisLine: {
                lineStyle: {
                    color: '#01fafc'
                }
            },
            nameTextStyle: {
                color: "#fff",
                fontSize: 17,
            },
            nameGap: 20,
            gridIndex: 4,
            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 16
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#01647b'
                }
            }
        }],
        series: lineListAddPie
    },
    options: [{
            title: [{
                    text: '{circlewhite| CPU(核数)\n}{circlewhite|已使用 | 总资源}{newgreen|\n677 核 | 3144 核}'
                },
                {
                    text: '{circlewhite| 内存(GB)\n}{circlewhite|已使用 | 总资源}{orange|\n14814.8 G | 17447.2 G}'
                },
                {
                    text: '{circlewhite| FC存储(TB)\n}{circlewhite|已使用 | 总资源}{red|\n305.11 T | 97447.2 T}'
                },
            ],
            series: [{
                    data: [2148, 1371, 3842, 3776, 4212, 8621, 6873, 4312, 9721, 1398]
                },
                {
                    data: [148, 371, 842, 776, 212, 621, 873, 312, 721, 398]
                },
                {
                    data: [248, 171, 342, 376, 412, 821, 673, 412, 921, 198]
                }, {
                    data: [218, 131, 382, 376, 422, 861, 683, 432, 971, 138]
                }, {
                    data: [214, 137, 384, 377, 421, 862, 687, 431, 972, 139]
                }, {
                    data: [{
                        value: 23
                    }, {
                        value: 77
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                },
                {
                    data: [{
                        value: 40
                    }, {
                        value: 60
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                },
                {
                    data: [{
                        value: 50
                    }, {
                        value: 50
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                },
            ]
        },
        {
            title: [{
                    text: '{circlewhite| CPU(核数)\n}{circlewhite|已使用 | 总资源}{newgreen|\n377 核 | 2144 核}'
                },
                {
                    text: '{circlewhite| 内存(GB)\n}{circlewhite|已使用 | 总资源}{orange|\n1424.8 G | 17447.2 G}'
                },
                {
                    text: '{circlewhite| FC存储(TB)\n}{circlewhite|已使用 | 总资源}{red|\n289.11 T | 17447.2 T}'
                },
            ],
            series: [{
                    data: [2418, 1731, 3842, 3776, 4212, 8211, 6873, 4132, 9721, 1398]
                },
                {
                    data: [148, 171, 842, 576, 212, 621, 873, 312, 271, 398]
                },
                {
                    data: [248, 141, 342, 376, 412, 421, 673, 412, 921, 198]
                }, {
                    data: [218, 131, 382, 376, 422, 861, 673, 432, 971, 138]
                }, {
                    data: [214, 137, 384, 177, 421, 362, 487, 431, 772, 339]
                }, {
                    data: [{
                        value: 23
                    }, {
                        value: 77
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                },
                {
                    data: [{
                        value: 40
                    }, {
                        value: 60
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                },
                {
                    data: [{
                        value: 50
                    }, {
                        value: 50
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                },
            ]
        },
        {
            title: [{
                    text: '{circlewhite| CPU(核数)\n}{circlewhite|已使用 | 总资源}{newgreen|\n677 核 | 3144 核}'
                },
                {
                    text: '{circlewhite| 内存(GB)\n}{circlewhite|已使用 | 总资源}{orange|\n14814.8 G | 17447.2 G}'
                },
                {
                    text: '{circlewhite| FC存储(TB)\n}{circlewhite|已使用 | 总资源}{red|\n305.11 T | 97447.2 T}'
                },
            ],
            series: [{
                    data: [2148, 1371, 3842, 3776, 4212, 8621, 6873, 4312, 9721, 1398]
                },
                {
                    data: [148, 371, 842, 776, 212, 621, 873, 312, 721, 398]
                },
                {
                    data: [248, 171, 342, 376, 412, 821, 673, 412, 921, 198]
                }, {
                    data: [218, 131, 382, 376, 422, 861, 6873, 432, 971, 138]
                }, {
                    data: [114, 137, 384, 177, 241, 462, 387, 131, 572, 139]
                }, {
                    data: [{
                        value: 30
                    }, {
                        value: 70
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                },
                {
                    data: [{
                        value: 20
                    }, {
                        value: 80
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                },
                {
                    data: [{
                        value: 40
                    }, {
                        value: 60
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                }, {
                    data: [{
                        value: 100
                    }]
                },
            ]
        },
    ]
};