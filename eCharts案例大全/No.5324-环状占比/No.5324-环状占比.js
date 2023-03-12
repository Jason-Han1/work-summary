var data = {
    'name': '贷款',
    'value': [88], //百分比
    'nAmount': 1566557.14 //总额
};

option = {
    backgroundColor: '#03060F',
    title: {
        text: data.value[0] + '%',
        textStyle: {
            color: '#2A95F9',
            fontSize: 70
        },
        // subtext: data.name + '占比',
        // subtextStyle: {
        //     color: '#aaaaaa',
        //     fontSize: 30
        // },
        itemGap: 20,
        left: 'center',
        top: '47%'
    },
    graphic: [{
        type: 'text',
        z: 100,
        left: 'center',
        top: '80%',
        style: {
            fill: '#fff',
            text: data.name + '总额' + data.nAmount + '万',
            // text: [
            //     '横轴表示温度，单位是°C',
            //     '纵轴表示高度，单位是km',
            //     '右上角有一个图片做的水印',
            //     '这个文本块可以放在图中各',
            //     '种位置'
            // ].join('\n'),
            font: '18px Microsoft YaHei'
        }
    }],
    tooltip: {
        formatter: function(params) {
            return '<span style="color: #fff;">占比：' + params.value + '%</span>';
        }
    },
    angleAxis: {
        max: 100,
        clockwise: false, // 逆时针
        // 隐藏刻度线
        show: false
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
    },
    polar: [{
        center: ['50%', '50%'], //中心点位置
        radius: '100%' //图形大小
    }],
    series: [{
        type: 'bar',
        data: data.value,
        showBackground: true,
        polarIndex: 0,
        backgroundStyle: {
            color: '#022546',
            borderWidth: 10,
        },
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 30,
        itemStyle: {
            normal: {
                opacity: 1,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#008BFF'
                }, {
                    offset: 1,
                    color: '#0071FF'
                }]),
                shadowBlur: 5,
                shadowColor: '#2A95F9',
            }
        },
    }]
};