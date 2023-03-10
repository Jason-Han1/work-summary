option = {
//          title: {
//              text: 'ECharts 入门示例'
//          },
            tooltip: {},
            legend: {
                data:['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [
            {
                name: '衬衫',
                type: 'bar',
                barGap:'-100%',
                 itemStyle: {
                 	normal: {
                    	color: '#C1232B'
                	}
            	},
//              data: [5, 20, 36, 10, 10, 20]
				data: [5, 0, 0, 0, 0, 0]
            },
            {
                name: '羊毛衫',
                type: 'bar',
                barGap:'-100%',
                 itemStyle: {
                 	normal: {
                    	color: '#B5C334'
                	}
            	},
//              data: [5, 20, 36, 10, 10, 20]
				data: [0, 20, 0, 0, 0, 0]
            },
            {
                name: '雪纺衫',
                type: 'bar',
                barGap:'-100%',
                 itemStyle: {
                 	normal: {
                    	color: '#FCCE10'
                	}
            	},
//              data: [5, 20, 36, 10, 10, 20]
				data: [0, 0, 36, 0, 0, 0]
            },
            {
                name: '裤子',
                type: 'bar',
                barGap:'-100%',
                 itemStyle: {
                 	normal: {
                    	color: '#E87C25'
                	}
            	},
//              data: [5, 20, 36, 10, 10, 20]
				data: [0, 0, 0, 10, 0, 0]
            },
            {
                name: '高跟鞋',
                type: 'bar',
                barGap:'-100%',
                 itemStyle: {
                 	normal: {
                    	color: '#27727B'
                	}
            	},
//              data: [5, 20, 36, 10, 10, 20]
				data: [0, 0, 0, 0, 10, 0]
            },
            {
                name: '袜子',
                type: 'bar',
                barGap:'-100%',
                 itemStyle: {
                 	normal: {
                    	color: '#FE8463'
                	}
            	},
//              data: [5, 20, 36, 10, 10, 20]
				data: [0, 0, 0, 0, 0, 20]
            },
              {
            name: '访问来源',
            type: 'pie',
            radius : '28%',
            center: ['75%', '35%'],
//          data:['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
//          data: [5, 20, 36, 10, 10, 20]

            data:[
                {value:5, name:'衬衫',itemStyle: {color: '#C1232B'}},
                {value:20, name:'羊毛衫',itemStyle: {color: '#B5C334'}},
                {value:36, name:'雪纺衫',itemStyle: {color: '#FCCE10'}},
                {value:10, name:'裤子',itemStyle: {color: '#E87C25'}},
                {value:10, name:'高跟鞋',itemStyle: {color: '#27727B'}},
                {value:20, name:'袜子',itemStyle: {color: '#FE8463'}}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
            ]
        };