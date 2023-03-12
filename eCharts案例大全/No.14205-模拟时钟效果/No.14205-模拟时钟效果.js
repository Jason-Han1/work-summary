//  使用要点：
//  1、大表盘是由时、分、秒三个series[]数据项重叠构成
//  2、24小时、星期、月三个小表盘，以及日期，各自使用了一个series[]数据项
//  3、animation应设为0，避免指针归零是有“掉下来的感觉”
// 问题？？？？
// 1. 星期，我想做到汉字效果但是文字不随着圆的弧度而动？？？求大神解决
//模拟解决：
// 有人回复使用pie图模拟星期的时间转盘，如图所示
option = {
    tooltip: { 
        // formatter: "{a}：{c}"
        backgroundColor: '#fff',
        borderColor: '#f60',
        borderWidth: '1px',
        textStyle: {
            color: '#333'
        },
        formatter: function(param) {
            var time = Math.floor(param.value);
            if(param.seriesIndex === 0){
              return '<em style="color:' + param.color + ';">当前小时:' + time + '</em>' 
            }
            if(param.seriesIndex === 1){
              return '<em style="color:' + param.color + ';">当前星期:' + time + '</em>' 
            }
            if(param.seriesIndex === 2){
              return '<em style="color:' + param.color + ';">当前月份:' + time + '</em>' 
            }
            if(param.seriesIndex === 4){
              return '<em style="color:' + param.color + ';">当前小时:' + time + '</em>' 
            }
            if(param.seriesIndex === 5){
              return '<em style="color:' + param.color + ';">当前分钟:' + time + '</em>' 
            }
            if(param.seriesIndex === 6){
              return '<em style="color:' + param.color + ';">当前秒:' + time + '</em>' 
            }
        }
    },
    backgroundColor: "rgba(0,0,0,0.1)",
    series: [{ //小表盘24小时
        name: '小时',
        type: 'gauge',
        center: ['28%', '50%'], // 默认全局居中
        radius: '22%', //仪表盘半径
        min: 0,
        max: 24,
        startAngle: 90,
        endAngle: -269.9999,
        splitNumber: 24,
        animation: 0,
        pointer: { //仪表盘指针
            show: 1,
            length: '90%',
            width: 3
        },
        itemStyle: { //仪表盘指针样式
            normal: {
                color: '#00b0b0',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10,
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        },
        axisLine: { //仪表盘轴线样式 
            lineStyle: {
                color: [
                    [1, '#337ab7']
                ],
                width: 6
            }
        },
        splitLine: { //分割线样式 
            length: 6,
            lineStyle: {
                width: 1
            }
        },
        axisTick: { //仪表盘刻度样式
            show: 0,
            splitNumber: 5, //分隔线之间分割的刻度数
            length: 5, //刻度线长
            lineStyle: {
                color: ['#ffffff']
            }
        },
        axisLabel: { //刻度标签
            show: 1,
            distance: 2, //标签与刻度线的距离
            textStyle: {
                color: '#0000ff'
            },
            formatter: function(t) {
                switch (t + '') {
                    case '0':
                        return '';
                    case '1':
                        return '';
                    case '2':
                        return '';
                    case '3':
                        return '3';
                    case '4':
                        return '';
                    case '5':
                        return '';
                    case '6':
                        return '6';
                    case '7':
                        return '';
                    case '8':
                        return '';
                    case '9':
                        return '9';
                    case '10':
                        return '';
                    case '11':
                        return '';
                    case '12':
                        return '12';
                    case '13':
                        return '';
                    case '14':
                        return '';
                    case '15':
                        return '15';
                    case '16':
                        return '';
                    case '17':
                        return '';
                    case '18':
                        return '18';
                    case '19':
                        return '';
                    case '20':
                        return '';
                    case '21':
                        return '21';
                    case '22':
                        return '';
                    case '23':
                        return '';
                    case '24':
                        return '24';
                }
            }
        },
        title: { //仪表盘标题
            show: 1,
            offsetCenter: ['250%', '-250%'],
            textStyle: {
                color: '#333',
                fontSize: 24,
                fontWeight: 'bold'
            }
        },
        detail: { //仪表盘显示数据
            show: 0,
            formatter: '{value}',
            offsetCenter: [0, '60%']
        },
        data: [{
            name: '当前时间:\n'
        }]
    }, { ///////////////////////////////////////////////小表盘星期
        name: '星期',
        type: 'gauge',
        center: ['72%', '50%'], // 默认全局居中
        radius: '22%', //仪表盘半径
        min: 0,
        max: 7,
        startAngle: 90,
        endAngle: -269.9999,
        splitNumber: 7,
        animation: 0,
        pointer: { //仪表盘指针
            show: true,
            length: '80%',
            width: 3
        },
        itemStyle: { //仪表盘指针样式
            normal: {
                color: '#00b0b0',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10,
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        },
        axisLine: { //仪表盘轴线样式 
            lineStyle: {
                color: [
                    [0.07, 'rgba(192, 0, 0, 0.5)'],
                    [0.21, 'rgba(0, 0, 192, 0.5)'],
                    [0.35, 'rgba(0, 64, 192, 0.5)'],
                    [0.50, 'rgba(0, 96, 192, 0.5)'],
                    [0.64, 'rgba(0, 164, 192, 0.5)'],
                    [0.78, 'rgba(0, 128, 64, 0.5)'],
                    [0.93, 'rgba(192, 128, 0, 0.5)'],
                    [1, 'rgba(192, 0, 0, 0.5)']
                ],
                width: 0
            }
        },
        splitLine: { //分割线样式 
            show: 0,
            length: 18,
            lineStyle: {
                width: 1
            }
        },
        axisTick: {
            show: 0
        }, //仪表盘刻度样式
        axisLabel: { //刻度标签
            show: 1,
            distance: -15, //标签与刻度线的距离
            textStyle: {
                color: '#ffffff'
            },
            formatter: function(t) {
                return "";
                // switch (t + '') {
                    // case '0':
                    //     return '7';
                    // case '1':
                    //     return '1';
                    // case '2':
                    //     return '2';
                    // case '3':
                    //     return '3';
                    // case '4':
                    //     return '4';
                    // case '5':
                    //     return '5';
                    // case '6':
                    //     return '6';
                    // case '0':
                    //     return '星期日';
                    // case '1':
                    //     return '星期一';
                    // case '2':
                    //     return '星期二';
                    // case '3':
                    //     return '星期三';
                    // case '4':
                    //     return '星期四';
                    // case '5':
                    //     return '星期五';
                    // case '6':
                    //     return '星期六';    //这里的汉字怎么随着这个圆的弧度显示而不是水平显示
                // }
            }
        },
        title: {
            show: 0
        }, //仪表盘标题
        detail: {
            show: 0
        }, //仪表盘显示数据
        data: [{}]
    }, { ///////////////////////////////////////////////小表盘月
        name: '月份',
        type: 'gauge',
        center: ['50%', '72%'], // 默认全局居中
        radius: '22%', //仪表盘半径
        min: 0,
        max: 12,
        startAngle: 90,
        endAngle: -269.9999,
        splitNumber: 12,
        animation: 0,
        pointer: { //仪表盘指针
            show: 1,
            length: '90%',
            width: 3
        },
        itemStyle: { //仪表盘指针样式
            normal: {
                color: '#00b0b0',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10,
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        },
        axisLine: { //仪表盘轴线样式 
            lineStyle: {
                color: [
                    [1, '#337ab7']
                ],
                width: 6
            }
        },
        splitLine: { //分割线样式 
            show: 1,
            length: 6,
            lineStyle: {
                width: 1
            }
        },
        axisTick: {
            show: 0
        }, //仪表盘刻度样式
        axisLabel: { //刻度标签
            show: 1,
            distance: 1, //标签与刻度线的距离
            textStyle: {
                color: '#0000ff',
                fontFamily: '宋体'
            },
            formatter: function(t) {
                switch (t + '') {
                    case '2':
                        return '2';
                    case '4':
                        return '4';
                    case '6':
                        return '6';
                    case '8':
                        return '8';
                    case '10':
                        return '10';
                    case '12':
                        return '12';
                }
            }
        },
        detail: {
            show: 0
        }, //仪表盘显示数据
        data: [{}]
    }, { ///////////////////////////////////////////////小表盘日
        type: 'gauge',
        center: ['50%', '72%'], // 默认全局居中
        radius: '22%', //仪表盘半径
        animation: 0,
        pointer: {
            width: 0
        }, //仪表盘指针
        axisLine: { //仪表盘轴线样式 
            lineStyle: {
                show: 0,
                width: 0
            }
        },
        splitLine: {
            show: 0
        }, //分割线样式 
        axisTick: {
            show: 0
        }, //仪表盘刻度样式
        axisLabel: {
            show: 0
        }, //刻度标签
        detail: { //仪表盘显示数据
            show: 1,
            formatter: function(e) {
                if (e < 10)
                    e = '0' + e;
                return e;
            },
            offsetCenter: ['160%', 0],
            borderWidth: 2,
            borderColor: '#337ab7',
            backgroundColor: '#fff',
            height: 20,
            width: 28,
            textStyle: {
                color: '#f60',
                fontSize: 16,
                fontWeight: 'bold'
            },
        },
        data: [{}]
    }, { ///////////////////////////////////////////////大表盘时针
        name: '小时',
        type: 'gauge',
        radius: '90%', //仪表盘半径
        min: 0,
        max: 12,
        startAngle: 90,
        endAngle: -269.9999,
        splitNumber: 12,
        animation: 0,
        pointer: { //仪表盘指针
            length: '70%',
            width: 6
        },
        itemStyle: { //仪表盘指针样式
            normal: {
                color: '#109A39',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10,
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        },
        axisLine: { //仪表盘轴线样式 
            show: 0,
            lineStyle: {
                color: [
                    [1, '#337ab7']
                ],
                width: 10,
                shadowColor: 'rgba(0, 0, 0, 0.8)',
                shadowBlur: 12,
                shadowOffsetX: 3,
                shadowOffsetY: 3
            }
        },
        splitLine: { //分割线样式 
            length: 10,
            lineStyle: {
                width: 2
            }
        },
        axisTick: { //仪表盘刻度样式
            show: true,
            splitNumber: 5, //分隔线之间分割的刻度数
            length: 5, //刻度线长
            lineStyle: {
                color: ['#ffffff']
            }
        },
        axisLabel: {
            show: 0
        }, //刻度标签
        title: {
            show: 0
        }, //仪表盘标题
        detail: {
            show: 0
        }, //仪表盘显示数据
        data: [{}]
    }, { ///////////////////////////////////////////////大表盘分针
        name: '分钟',
        type: 'gauge',
        radius: '90%', //仪表盘半径
        min: 0,
        max: 60,
        startAngle: 90,
        endAngle: -269.9999,
        splitNumber: 12,
        animation: 0,
        pointer: { //仪表盘指针
            length: '85%',
            width: 6
        },
        itemStyle: { //仪表盘指针样式
            normal: {
                color: '#ca8622',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10,
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        },
        axisLine: { //仪表盘轴线样式 
            show: 0,
            lineStyle: {
                width: 0
            }
        },
        splitLine: { //分割线样式 
            length: 10,
            lineStyle: {
                width: 2
            }
        },
        axisTick: { //仪表盘刻度样式
            show: true,
            splitNumber: 5, //分隔线之间分割的刻度数
            length: 5, //刻度线长
            lineStyle: {
                color: ['#ffffff']
            }
        },
        axisLabel: {
            show: 0
        }, //刻度标签
        title: {
            show: 0
        }, //仪表盘标题
        detail: {
            show: 0
        }, //仪表盘显示数据
        data: [{}]
    }, { ///////////////////////////////////////////////大表盘秒针
        name: '秒',
        type: 'gauge',
        radius: '90%', //仪表盘半径
        min: 0,
        max: 60,
        startAngle: 90,
        endAngle: -269.9999,
        splitNumber: 12,
        animation: 0,
        pointer: { //仪表盘指针
            show: true,
            length: '95%',
            width: 4
        },
        itemStyle: { //仪表盘指针样式
            normal: {
                color: '#00b0b0',
                shadowColor: 'rgba(0, 0, 0, 0.8)',
                shadowBlur: 10,
                shadowOffsetX: 4,
                shadowOffsetY: 4
            }
        },
        axisLine: { //仪表盘轴线样式 
            lineStyle: {
                color: [
                    [1, '#337ab7']
                ],
                width: 10
            }
        },
        splitLine: { //分割线样式 
            length: 10,
            lineStyle: {
                width: 2
            }
        },
        axisTick: { //仪表盘刻度样式
            show: 1,
            splitNumber: 5, //分隔线之间分割的刻度数
            length: 5, //刻度线长
            lineStyle: {
                color: ['#fff']
            }
        },
        axisLabel: { //刻度标签
            show: 1,
            distance: 6, //标签与刻度线的距离
            textStyle: {
                fontWeight: 'bold',
                fontSize: 16
            },
            formatter: function(t) {
                switch (t + '') {
                    case '0':
                        return '';
                    case '5':
                        return '1';
                    case '10':
                        return '2';
                    case '15':
                        return '3';
                    case '20':
                        return '4';
                    case '25':
                        return '5';
                    case '30':
                        return '6';
                    case '35':
                        return '7';
                    case '40':
                        return '8';
                    case '45':
                        return '9';
                    case '50':
                        return '10';
                    case '55':
                        return '11';
                    case '60':
                        return '12';
                }
            }
        },
        title: {
            show: 0
        }, //仪表盘标题
        detail: { //仪表盘显示数据
            show: 0,
            formatter: '{value}',
            offsetCenter: [0, '60%']
        },
        data: [{}]
    }, {
        name: '星期',
        type: 'pie',
        hoverAnimation: false,
        animation: false,
        center: ['72%', '50%'],
        radius: ['15%', '22.5%'],
        startAngle: 64.28,
        label: {
            normal: {
                show: false,
                position: 'inside'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        markPoint: {
            symbolSize: 1,
            label: {
                normal: {
                    show: true,
                    formatter: function(t){
                        return t.name
                    }
                }
            },
            data: [
                {
                    name: '星期日',
                    x: '72%',
                    y: '41%'
                },
                {
                    name: '星期一',
                    x: '77.5%',
                    y: '44.5%',
                    label: {
                        normal: {
                            rotate: -51.42
                        }
                    }
                },
                {
                    name: '星期二',
                    x: '78.7%',
                    y: '52%',
                    label: {
                        normal: {
                            rotate: -102.84
                        }
                    }
                },
                {
                    name: '星期三',
                    x: '75%',
                    y: '58.5%',
                    label: {
                        normal: {
                            rotate: -154.28
                        }
                    }
                },
                {
                    name: '星期四',
                    x: '69%',
                    y: '58.5%',
                    label: {
                        normal: {
                            rotate: -205.7
                        }
                    }
                },
                {
                    name: '星期五',
                    x: '65.5%',
                    y: '52%',
                    label: {
                        normal: {
                            rotate: -257.12
                        }
                    }
                },
                {
                    name: '星期六',
                    x: '66.8%',
                    y: '44.2%',
                    label: {
                        normal: {
                            rotate: 51.46
                        }
                    }
                }
            ]
        },
        data: [
            {name: '星期日', value: 1},
            {name: '星期一', value: 1},
            {name: '星期二', value: 1},
            {name: '星期三', value: 1},
            {name: '星期四', value: 1},
            {name: '星期五', value: 1},
            {name: '星期六', value: 1},
        ],
        z: 1
    }]
};
myChart.setOption(option);
clearInterval(timeTicket);
var timeTicket = setInterval(function() {
    var datetime = new Date();
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    var date = datetime.getDate();
    var h = datetime.getHours();
    var m = datetime.getMinutes();
    var s = datetime.getSeconds();
    var week = datetime.getDay();
    var ms = datetime.getMilliseconds();
    var minutes = m + s / 60;
    var hours_24 = h + m / 60;
    var hours_12;
    if (hours_24 > 12){
        hours_12 = hours_24 - 12;
    }
    else{
        hours_12 = hours_24;
    }
    var seconds = s + ms / 1000;
    var cur_mon = new Date(year, month, 0);
    var cur_mon_count = cur_mon.getDate(); //当前月份总天数
    var month = month + date / cur_mon_count;
    if (month > 12){
        month = month - 12;
    }
    var strmonth = datetime.getMonth() + 1;    
    var str = year + "-" + checktime(strmonth) + "-" + checktime(date) + " "+ checktime(h) + ":" + checktime(m) + ":" + checktime(s); 
    option.series[0].data[0].name = '当前时间:\n' + str;
    option.series[0].data[0].value = (hours_24).toFixed(2);
    option.series[1].data[0].value = (week).toFixed(0);
    option.series[2].data[0].value = (month).toFixed(2);
    option.series[3].data[0].value = (date).toFixed(0);
    option.series[4].data[0].value = (hours_12).toFixed(2);
    option.series[5].data[0].value = (minutes).toFixed(2);
    option.series[6].data[0].value = (seconds).toFixed(2);
    myChart.setOption(option, true);
}, 100);
function checktime(str){
    if(str < 10){
        return '0' + str;
    }
	return str;
}
