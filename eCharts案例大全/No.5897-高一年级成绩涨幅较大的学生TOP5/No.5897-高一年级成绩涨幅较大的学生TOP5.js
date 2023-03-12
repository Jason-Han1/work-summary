var myChart1Data = [{
        name: '陈光正',
        value: 72,
        sum: 10
    },
    {
        name: '张豹',
        value: 63,
        sum: 10
    },
    {
        name: '袁世权',
        value: 51,
        sum: 10
    },
    {
        name: '段凯',
        value: 48,
        sum: 10
    },
    {
        name: '闫海',
        value: 46,
        sum: 10
    }
];
getArrByKey = (data, k) => {
    let key = k || "value";
    let res = [];
    if (data) {
        data.forEach(function(t) {
            res.push(t[key]);
        });
    }
    return res;
};
opt = {
    index: 0
}
myChart1Data = myChart1Data.sort((a, b) => {
    return b.value - a.value
});



option = {
    title: {
          text: '高一年级成绩涨幅较大的学生TOP5',
          textStyle: {
            fontSize: 25,
            fontWeight: 'normal'
            // color: '#fff'
          },
          x: 'center'
        },
    grid: {
        top: '2%',
        bottom: -15,
        right: 10,
        left: -30,
        containLabel: true
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        triggerEvent: true,
        show: true,
        inverse: true,
        data: getArrByKey(myChart1Data, 'name'),
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            align: 'left',
            margin: 100,
            fontSize: 13,
            formatter: function(value, index) {
                if (opt.index === 0 && index < 3) {
                    return '{idx' + index + '|} {title|' + value + '}'
                } else if (opt.index !== 0 && (index + opt.index) < 9) {
                    return '{idx|0' + (1 + index + opt.index) + '} {title|' + value + '}'
                } else {
                    return '{idx|' + (1 + index + opt.index) + '} {title|' + value + '}'
                }
            },
            rich: {
                idx0: {
                    color: '#FB375E',
                    backgroundColor: {
                        image: '../img/icon_ranking_01.png'
                    },
                    width: 22,
                    height: 28,
                },
                idx1: {
                    color: '#FF9023',
                    backgroundColor: {
                        image: '../img/icon_ranking_02.png'
                    },
                    width: 22,
                    height: 28,
                },
                idx2: {
                    color: '#01B599',
                    backgroundColor: {
                        image: '../img/icon_ranking_03.png'
                    },
                    width: 22,
                    height: 28,
                },
                idx: {
                    color: '#333',
                    borderRadius: 100,
                    padding: [5, 8]
                },
                title: {
                    // width: 200,
                    fontSize: 14,
                    color: '#000'
                }
            }
        },
    }, {
        triggerEvent: true,
        show: true,
        inverse: true,
        data: getArrByKey(myChart1Data, 'name'),
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            color: '#000',
            align: 'left',
            margin: 20,
            fontSize: 18,
            formatter: function(value, index) {
                return myChart1Data[index].value
            },
        }
    }],
    series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: myChart1Data,
            barWidth: 15,
            itemStyle: {
                color: '#5fb878',
                barBorderRadius: 30,
            }
        },
        {
            type: "bar",
            barWidth: 15,
            xAxisIndex: 0,
            barGap: "-100%",
            data: [100, 100, 100, 100, 100, 100, 100],
            itemStyle: {
                normal: {
                    color: "#e8f0eb",
                    barBorderRadius: 14
                }
            },
            zlevel: -1
        }
    ]
};