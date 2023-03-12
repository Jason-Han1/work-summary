var data = [10,20, 30, 40, 50]
var titlename = ['太原市民政局', '太原市运输局', '太原市残联', '太原市报社', '太原市司法局'];
var valdata = [683, 234, 234, 523, 345]
var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
option = {
    backgroundColor: '#0e2147',
    xAxis: {
        show: false
    },
    yAxis: [{
        show: true,
        data: valdata,
        inverse: true,
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
            color: '#fff',
            formatter: function(value, index) {
                return [
                    (index + 1)
                ].join('\n')
            },
            rich: {
                lg: {
                    backgroundColor: '#339911',
                    color: '#fff',
                    borderRadius: 15,
                    // padding: 5,
                    align: 'center',
                    width: 15,
                    height: 15
                },
            }
        },


    }, {
        show: true,
        inverse: true,
        data: titlename,
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#fff',
            },
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },

    }],
    series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: data,
        barWidth: 30,
        itemStyle: {
            normal: {
                barBorderRadius: 30,
                color: '#1089E7'
            }
        },
        label: {
            normal: {
                show: false,
                position: 'inside',
                formatter: '{c}%'
            }
        },
    }, {
        name: '框',
        type: 'bar',
        yAxisIndex: 1,
        barGap: '-100%',
        data: [100, 100, 100, 100, 100],
        barWidth: 30,
        itemStyle: {
            normal: {
                color: 'none',
                borderColor: '#00c1de',
                borderWidth: 3,
                barBorderRadius: 15,
            }
        }
    }, ]
};