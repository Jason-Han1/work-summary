var scale = 1;
var echartData = [{
    value: 40,
    name: '微博'
}, {
   
    value: 30,
    name: '新浪娱乐'
}, {
    value: 10,
    name: '今日头条'
}, {
    value: 20,
    name: '知乎'
}]
var rich = {
    yellow: {
        show: 'false',
        color: "#ffc72b",
        fontSize: 28 * scale,
        padding: [7, 6],
        align: 'center'
    },
    total: {
        color: "#ffc72b",
        fontSize: 40 * scale,
        align: 'center'
    },
    white: {
        color: "#fff",
        align: 'center',
        fontSize: 14 * scale,
        padding: [21, 0]
    },
    blue: {
        color: '#49dff0',
        fontSize: 16 * scale,
        align: 'center'
    },
    hr: {
        borderColor: '#0b5263',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
}
option = {
    backgroundColor: '#031f2d',
    title: {
        text:'总来源数',
        left:'center',
        top:'53%',
        padding:[24,0],
        textStyle:{
            color:'#fff',
            fontSize:18*scale,
            align:'center'
        }
    },
    legend: {
        selectedMode:false,
        formatter: function(name) {
            var total = 0; //各科正确率总和
            var averagePercent; //综合正确率
            echartData.forEach(function(value, index, array) {
                total += value.value;
            });
            return '{total|' + total + '}';
        },
        data: [echartData[0].name],
        // data: ['高等教育学'],
        // itemGap: 50,
        left: 'center',
        top: 'center',
        icon: 'none',
        align:'center',
        textStyle: {
            color: "#fff",
            fontSize: 16 * scale,
            rich: rich
        },
    },
    series: [{
        name: '总考生数量',
        type: 'pie',
        radius: ['42%', '50%'],
        color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
        hoverAnimation: false,
        
        label: {
            normal: {
                formatter: function(params, ticket, callback) {
                    var total = 0; //考生总数量
                    var percent = 0; //考生占比
                    echartData.forEach(function(value, index, array) {
                        total += value.value;
                    });
                    percent = ((params.value / total) * 100).toFixed(1);
                    return '{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '}\n{blue|' + percent + '%}';
                },
                rich: rich
            },
        },
        labelLine: {
            normal: {
                length: 55 * scale,
                length2: 0,
                lineStyle: {
                    color: '#0b5263'
                }
            }
        },
        data: echartData
    }]
};