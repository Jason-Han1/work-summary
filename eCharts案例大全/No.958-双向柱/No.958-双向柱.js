    var xData = ['发电量', '服装', '钢材', '合成氨', '化学纤维', '轿车', '焦炭', '轿车', '机制纸及纸板', '农用化肥', ]
    var lastYearData = [510.5, 125.42, 68, 568.42, 26.58, 36.76, 0,121.01,22.9,11,4.65 ];
    var thisYearData = [510.5, 125.42, 68, 568.42, 26.58, 36.76, 0,121.01,22.9,11,4.65 ];
    var timeLineData = [1];
    let legend=['2017', '2018'];
    var background = "#fff"; //背景 
    let textColor = "#000";
    let lineColor="rgba(0,0,0,0.2)";
    let colors = [{
            borderColor: "rgba(227,161,96,1)",
            start: "rgba(227,161,96,0.8)",
            end: "rgba(227,161,96,0.3)"
        },
        {
            borderColor: "rgba(0,222,255,1)",
            start: "rgba(0,222,255,0.3)",
            end: "rgba(0,222,255,0.8)"
        },
    ];
    let borderData = [];
    let scale = 2;
    borderData = xData.map(item => {
        return scale;
    });
    var option = {
        baseOption: {
            backgroundColor: background,
            timeline: {
                show: false,
                top: 0,
                data: []
            },
            tooltip:{
                trigger:'axis'
            },
            legend: {
                top: '5%',
                right: '5%',
                itemWidth: 20,
                itemHeight: 8,
                //itemGap: 343,
                icon: 'horizontal',
                textStyle: {
                    color: '#333',
                    fontSize: 20,
                },
                data: legend
            },
            grid: [{
                show: false,
                left: '5%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '37%'
            }, {
                show: false,
                left: '51%',
                top: '10%',
                bottom: '8%',
                width: '0%'
            }, {
                show: false,
                right: '2%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '37%'
            }],
            xAxis: [{
                type: 'value',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    color: textColor
                },
                splitLine:{
                    show: true,
                    lineStyle:{
                        color:lineColor
                    }
                },
            }, {
                gridIndex: 1,
                show: false
            }, {
                gridIndex: 2,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    color: textColor
                },
                 splitLine:{
                     show: true,
                    lineStyle:{
                        color:lineColor
                    }
                },
            }],
            yAxis: [{
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:lineColor
                    }
                },
               
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: xData
            }, {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    padding:[30,0,0,0],
                    textStyle: {
                        color: '#000',
                        fontSize: 20
                    },
                    align: "center"

                },
                data: xData.map(function(value) {
                    return {
                        value: value,
                        textStyle: {
                            align: 'center'
                        }
                    }
                })
            }, {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                     show: true,
                    lineStyle:{
                        color:lineColor
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false

                },
                data: xData
            }],
            series: []

        },
        options: []
    }

    option.baseOption.timeline.data.push(timeLineData[0])
    option.options.push({
        series: [{
                name: "2017",
                type: "bar",
                barWidth: 25,
                stack: "1",
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: colors[0].start
                            },
                            {
                                offset: 1,
                                color: colors[0].end
                            }
                        ]),
                    }
                },
                label: {
                    normal: {
                        show: false,
                    }
                },
                data: lastYearData,
                animationEasing: "elasticOut"
            },
            {
                name: "2017",
                type: "bar",
                barWidth: 25,
                stack: "1",
                itemStyle: {
                    normal: {
                        color: colors[0].borderColor

                    }
                },
                data: borderData
            },
            {
                name: "2018",
                type: "bar",
                stack: "2",
                barWidth: 25,
                xAxisIndex: 2,
                yAxisIndex: 2,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: colors[1].start
                            },
                            {
                                offset: 1,
                                color: colors[1].end
                            }
                        ]),
                    }
                },
                label: {
                    normal: {
                        show: false,
                    }
                },
                data: thisYearData,
                animationEasing: "elasticOut"
            },
            {
                name: "2018",
                type: "bar",
                xAxisIndex: 2,
                yAxisIndex: 2,
                barWidth: 25,
                stack: "2",
                itemStyle: {
                    normal: {
                        color: colors[1].borderColor

                    }
                },
                data: borderData
            },
        ]
    });