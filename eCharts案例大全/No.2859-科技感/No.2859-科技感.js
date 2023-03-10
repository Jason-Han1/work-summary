option = {
    backgroundColor:"#0B1837",
    color: ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05"],
    // title: {
    //     text: '网络/安全设备',
    //     left: '60',
    //     top: 0,
    //     textAlign: 'center',
    //     textStyle: {
    //         color: '#fff',
    //         fontSize: 14,
    //         fontWeight: 0
    //     }
    // },
    grid: {
        left: -100,
        top: 50,
        bottom: 10,
        right: 10,
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        type: "scroll",
        orient: "vartical",
        // x: "right",
        top: "center",
        right: "15",
        // bottom: "0%",
        itemWidth: 16,
        itemHeight: 8,
        itemGap: 16,
        textStyle: {
            color: '#A3E2F4',
            fontSize: 12,
            fontWeight: 0
        },
        data: ['IDS', 'VPN', '交换机', '防火墙', 'WAF', '堡垒机']
    },
    polar: {},
    angleAxis: {
        interval: 1,
        type: 'category',
        data: [],
        z: 10,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#0B4A6B",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            interval: 0,
            show: true,
            color: "#0B4A6B",
            margin: 8,
            fontSize: 16
        },
    },
    radiusAxis: {
        min: 40,
        max: 120,
        interval: 20,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#0B3E5E",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            formatter: '{value} %',
            show: false,
            padding: [0, 0, 20, 0],
            color: "#0B3E5E",
            fontSize: 16
        },
        splitLine: {
            lineStyle: {
                color: "#0B3E5E",
                width: 0,
                type: "solid"
            }
        }
    },
    calculable: true,
    series: [
        {
        type: 'pie',
        radius: ["5%", "10%"],
        hoverAnimation: false,
        labelLine: {
            normal: {
                show: false,
                length: 30,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        data: [{
            name: '',
            value: 0,
            itemStyle: {
                normal: {
                    color: "#0B4A6B"
                }
            }
        }]
    }, 
     {
            type: 'pie',
            // zlevel: 2,
            silent: true,
            radius: ['80%', '79%'],
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: _pie3()
        },
         {
            type: 'pie',
            // zlevel: 2,
            silent: true,
            radius: ['63%', '62%'],
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: _pie3()
        },
    {
        type: 'pie',
        radius: ["90%", "95%"],
        hoverAnimation: false,
        labelLine: {
            normal: {
                show: false,
                length: 30,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        name: "",
        data: [{
            name: '',
            value: 0,
            itemStyle: {
                normal: {
                    color: "#0B4A6B"
                }
            }
        }]
    },
    {
        stack: 'a',
        type: 'pie',
        radius: ['20%', '80%'],
        roseType: 'area',
        zlevel:10,
        label: {
            normal: {
                show: true,
                formatter: "{c}",
                textStyle: {
                    fontSize: 12,
                },
                position: 'outside'
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: true,
                length: 20,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        data: [{
                value: 10,
                name: 'IDS'
            },
            {
                value: 5,
                name: 'VPN'
            },
            {
                value: 15,
                name: '交换机'
            },
            {
                value: 25,
                name: '防火墙'
            },
            {
                value: 20,
                name: 'WAF'
            },
            {
                value: 35,
                name: '堡垒机'
            }
        ]
    }, 
    ]
}

myChart.on('mouseover', function(params) {
    stopTimer();
});
 
myChart.on('mouseout', function(params) {
    startTimer();
});
 
 
var timer;
 
function doing() {
    let option = myChart.getOption();
    option.series[1].startAngle = option.series[1].startAngle - 1;
    option.series[2].startAngle = option.series[2].startAngle + 1;
    // option.series[6].data[0].value = option.series[6].data[0].value + 1;
    myChart.setOption(option);
 
}
 
function startTimer() {
 
    timer = setInterval(doing, 100);
 
}
 
function stopTimer() {
 
    clearInterval(timer);
 
    xzTimer = null;
 
}
 
setTimeout(startTimer, 500);

function _pie3() {
    let dataArr = [];
    for (var i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: "rgb(126,190,255)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        }
 
    }
    return dataArr
}