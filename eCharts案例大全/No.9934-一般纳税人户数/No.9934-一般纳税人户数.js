// Generate data
var category = ['2012年','2013年','2014年','2015年','2016年','2017年','2018年'];
var dottedBase = [];
var lineData = [18092,24045,32808
                ,36097,44715,50415
                ,56061,59521,18092,24045,32808
                ,36097,44715,50415,39867,44715,48444,50415
                ,50061,32677,49521,32808];
var barData = [4600,5500,7500
                ,8500,12500,21500
                ,23200,25250,4600,5500,6500
                ,8500,22500,21500,9900,12500,14000,21500
                ,23200,24450,25250,7500];
var rateData = [];               
32808
for (var i = 0; i < 33; i++) {
    // var date = i+2001;
    // category.push(date)
    var rate=barData[i]/lineData[i]*100;
    rateData[i] = rate.toFixed(2);
}


// option
option = {
    title: {
        text: '',
        x: 'center',
        y: 0,
        textStyle:{
            color:'#B4B4B4',
            fontSize:16,
            fontWeight:'normal',
        },
        
    },
    backgroundColor: '#0d235e',
    tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.1)',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#7B7DDC'
            }
        }
    },
    legend: {
        data: ['正常经营户数', '一般纳税人户数','正常经营比例',],
        textStyle: {
            color: '#B4B4B4'
        },
        top:'7%',
    },
    grid:{
        x:'12%',
        width:'82%',
        y:'12%',
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#B4B4B4'
            }
        },
        axisTick:{
            show:false,
        },
    },
    yAxis: [{

        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#B4B4B4',
            }
        },
        
        axisLabel:{
            formatter:'{value} ',
        }
    },
        {

        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#B4B4B4',
            }
        },
        axisLabel:{
            formatter:'{value} ',
        }
    }],
    
    series: [{
        name: '正常经营比例',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 8,
        yAxisIndex: 1,
        itemStyle: {
                normal: {
                color:'#F02FC2'},
        },
        data: rateData
    }, 
    
    {
        name: '正常经营户数',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#956FD4'},
                        {offset: 1, color: '#3EACE5'}
                    ]
                )
            }
        },
        data: barData
    }, 
    
    {
        name: '一般纳税人户数',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(156,107,211,0.5)'},
                        {offset: 0.2, color: 'rgba(156,107,211,0.3)'},
                        {offset: 1, color: 'rgba(156,107,211,0)'}
                    ]
                )
            }
        },
        z: -12,
        
        data: lineData
    }, 
   ]
};