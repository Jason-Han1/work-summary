option = {
    title: {
        text: '环境状态消息',
        subtext: '实时更新'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    legend: {
        data:['温度', '光照强度','湿度']
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    dataZoom: {
        show: false,
        start: 0,
        end: 100
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: (function (){
                var now = new Date();
                var res = [];
                var len = 10;
                while (len--) {
                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                    now = new Date(now - 2000);
                }
                return res;
            })()
        },
        {
            type: 'category',
            boundaryGap: true,
            data: (function (){
                var res = [];
                var len = 10;
                while (len--) {
                    res.push(10 - len - 1);
                }
                return res;
            })()
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '温度/湿度',
            max: 80,
            min: 0,
            boundaryGap: [0.2, 0.2]
        },
        {
            type: 'value',
            scale: true,
            name: '光照强度',
            max: 1200,
            min: 0,
            boundaryGap: [0.2, 0.2]
        }
        
    ],
    series: [
        {
            name:'光照强度',
            type:'line',
            
            smooth: true,
            xAxisIndex: 1,
            yAxisIndex: 1,
            data:(function (){
                var res = [];
                var len = 10;
                while (len--) {
                    res.push(Math.round(Math.random() * 200+800));
                }
                return res;
            })()
        },
        {
            name:'温度',
            type:'line',
            smooth: true,
            areaStyle: {},
            data:(function (){
                var res = [];
                var len = 0;
                while (len < 10) {
                    res.push((Math.random()*5 + 15).toFixed(1) - 0);
                    len++;
                }
                return res;
            })()
        },
        {
            name:'湿度',
            type:'line',
            
            smooth: true,
            data:(function (){
                var res = [];
                var len = 0;
                while (len < 10) {
                    res.push((Math.random() * 5 + 30).toFixed(1) - 0);
                    len++;
                }
                return res;
            })()
        }
    ]
};

app.count = 11;
setInterval(function (){
    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

    var data0 = option.series[0].data;
    var data1 = option.series[1].data;
    var data2 = option.series[2].data;
    
    data0.shift();
    data0.push(Math.round(Math.random() * 200+800));
    data1.shift();
    data1.push((Math.random() * 5 + 15).toFixed(1) - 0);
    data2.shift();
    data2.push((Math.random() * 5 + 30).toFixed(1) - 0);

    option.xAxis[0].data.shift();
    option.xAxis[0].data.push(axisData);
    option.xAxis[1].data.shift();
    option.xAxis[1].data.push(app.count++);

    myChart.setOption(option);
}, 2100);
