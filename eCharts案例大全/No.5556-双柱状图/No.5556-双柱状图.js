var getxy = ['22:18', '22:23', '22:25','22:28','22:30','22:33','22:35','22:40','22:18', '22:23', '22:25','22:28','22:30','22:33','22:35','22:40'];
var getlx1 = [10,15, 30, 45, 55, 60, 62, 80,80,62, 60, 55, 45, 30, 15, 10];
var getlx2 = [8,5, 25, 30, 35, 55, 62, 78,65,55, 60, 45, 42, 15, 12, 5];


var option = {
    backgroundColor: '#091C3D',
	tooltip: { //提示框组件
		trigger: 'axis',
		formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
		axisPointer: {
			type: 'none',
		},
		textStyle: {
			color: '#fff',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 12,
		}
	},
	grid: {
		left: '10%',
		right: '10%',
		bottom: '10%',
		top:'40%',
	//	padding:'0 0 10 0',
		containLabel: true,
	},
    legend: {//图例组件，颜色和名字
        right:'10%',
		top:'30%',
		itemGap: 16,
		itemWidth: 18,
		itemHeight: 10,
        data:[{
            name:'健康度',
            //icon:'image://../wwwroot/js/url2.png', //路径
        },
        {
            name:'可用度',
        }],
        textStyle: {
			color: '#a8aab0',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 12,            
        }
    },
	xAxis: [
		{
			type: 'category',
		//	boundaryGap: true,//坐标轴两边留白
			data: getxy,
			axisLabel: { //坐标轴刻度标签的相关设置。
		//		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
			//	margin:15,
				textStyle: {
					color: '#a8aab0',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 12,
				},
				rotate:0,
			},
			axisTick:{//坐标轴刻度相关设置。
				show: false,
			},
			axisLine:{//坐标轴轴线相关设置
				lineStyle:{
					color:'#2B66D7',
					opacity:0.8
				}
			},
			splitLine: { //坐标轴在 grid 区域中的分隔线。
				show: false,
			}
		}
	],
	yAxis: [
		{
			type: 'value',
			splitNumber: 5,
			axisLabel: {
				textStyle: {
					color: '#a8aab0',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 12,
				}
			},
			axisLine:{
				show: false
			},
			axisTick:{
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#20274F'],
					//opacity:0.06
				}
			}

		}
	],
    series : [
        {
            name:'健康度',
            type:'bar',
            data: getlx1,
            barWidth: 10,
            barGap:0,//柱间距离
            // label: {//图形上的文本标签
            //     normal: {
            //       show: true,
            //       position: 'top',
            //       textStyle: {
            //           color: '#a8aab0',
            //           fontStyle: 'normal',
            //           fontFamily: '微软雅黑',
            //           fontSize: 12,   
            //       },
            //     },
            // },
          itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#2B66D7'
                    }, {
                        offset: 1,
                        color: '#2B66D7'
                    }]),
                    barBorderRadius: 0,
                    borderWidth: 0,
                }
            },
        },
        {
            name:'可用度',
            type:'bar',
            data: getlx2,
            barWidth: 10,
            barGap:0,//柱间距离
             itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#05B8CD'
                    }, {
                        offset: 1,
                        color: '#05B8CD'
                    }]),
                    barBorderRadius: 0,
                    borderWidth: 0,
                }
            },
        }
    ]
};