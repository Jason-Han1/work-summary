option = {    backgroundColor:'#fff',    tooltip: [{                show: true,                trigger: 'axis',                axisPointer: {       // 坐标轴指示器，坐标轴触发有效                    type: 'line'  // 默认为直线，可选为：'line' | 'shadow'                },                formatter:'{b}<br>我的认知得分:{c}<br>知识点达标分:{c1}',                            }],     grid: [{             x: '10%',             y: '12%',             width: '30%',             height: '76%'         },         {             x: '40%',             y: '12%',             width: '30%',             height: '76%',         },         {             x: '70%',             y: '12%',             width: '20%',             height: '76%'         }     ],     xAxis: [{             gridIndex: 0,             type: 'category',             data:['a','1','2','4'],             name:'',             nameLocation:'center',             axisTick: {                 show: false             },             axisLine: {                 lineStyle: {                     color: '#e0e7ff'                 }             },             boundaryGap:false,             triggerEvent: true,             axisLabel:{                 color:'transparent',             }         },         {             gridIndex: 1,             type: 'category',             data: ['b','2','3'],             name:'',             nameLocation:'center',             axisTick: {                 show: false             },             axisLine: {                 lineStyle: {                     color: '#e0e7ff'                 }             },             boundaryGap:false,             triggerEvent: true,             axisLabel:{                 color:'transparent',             }         },         {             gridIndex: 2,             type: 'category',             data: ['c','2','4','1'],             name:'',             nameLocation:'center',             axisTick: {                 show: false             },             axisLine: {                 lineStyle: {                     color: '#e0e7ff'                 }             },             boundaryGap:false,             triggerEvent: true,             axisLabel:{                 color:'transparent',             },         }     ],     yAxis: [{             gridIndex: 0,             type: 'value',             axisLine: {                 lineStyle: {                     type: 'dotted',                     color: '#e0e7ff'                 }             },             name: '认知得分',             splitLine: {                 lineStyle: {                     type: 'dotted',                     color: '#e8ecf1'                 }             },             axisLabel: {                 fontSize: 14,                 color: '#999'             },             nameTextStyle: {                 fontSize: 14,                 color: '#666'             },             min: 0,             max: 100         },         {             gridIndex: 1,             type: 'value',             axisLine: {                 show: true,                 lineStyle: {                     type: 'dotted',                     color: '#f6f7f9'                 }             },             axisTick: {                 show: false             },             axisLabel: {                 show: false             },             splitLine: {                 lineStyle: {                     type: 'dotted',                     color: '#e8ecf1'                 }             },             min: 0,             max: 100         },         {             gridIndex: 2,             type: 'value',             axisLine: {                 show: true,                 lineStyle: {                     type: 'dotted',                     color: '#f6f7f9'                 }             },             axisTick: {                 show: false             },             axisLabel: {                 show: false             },             splitLine: {                 lineStyle: {                     type: 'dotted',                     color: '#e8ecf1'                 }             },             min: 0,             max: 100         }     ],     series: [         // ...virtualLines,         {             xAxisIndex: 0,             yAxisIndex: 0,             data: [30,20,10,5],             type: 'line',             symbol: 'none',             lineStyle: {                 color: '#37c7f2'             },             areaStyle: {                 color: {                     type: 'linear',                     x: 0,                     y: 0,                     x2: 1,                     y2: 0,                     colorStops: [{                         offset: 0,                         color: '#fff'                     }, {                         offset: 1,                         color: '#37c7f2'                     }],                 }             },             smooth: true         }, {             xAxisIndex: 0,             yAxisIndex: 0,             data: [40,10,20,5],             type: 'line',             symbol: 'none',             lineStyle: {                 color: '#5dd677'             },             smooth: true         },{             xAxisIndex: 1,             yAxisIndex: 1,             data: [40,22,33],             type: 'line',             symbol: 'none',             lineStyle: {                 color: '#ffb787'             },             areaStyle: {                 color: {                     type: 'linear',                     x: 0,                     y: 0,                     x2: 1,                     y2: 0,                     colorStops: [{                         offset: 0,                         color: '#fff'                     }, {                         offset: 1,                         color: '#ffb787'                     }],                 }             },             smooth: true         },          {             xAxisIndex: 1,             yAxisIndex: 1,             data: [10,24,66],             type: 'line',             symbol: 'none',             lineStyle: {                 color: '#5dd677'             },             smooth: true         },         {             xAxisIndex: 2,             yAxisIndex: 2,             data: [50,33,55,66],             type: 'line',             symbol: 'none',             lineStyle: {                 color: '#ff8888'             },             areaStyle: {                 color: {                     type: 'linear',                     x: 0,                     y: 0,                     x2: 1,                     y2: 0,                     colorStops: [{                         offset: 0,                         color: '#fff'                     }, {                         offset: 1,                         color: '#ff8888'                     }],                 }             },             smooth: true         },         {             xAxisIndex: 2,             yAxisIndex: 2,             data: [20,13,35,16],             type: 'line',             symbol: 'none',             lineStyle: {                 color: '#5dd677'             },             smooth: true         }     ] };