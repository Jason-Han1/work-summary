var uploadedDataURL = "/asset/get/s/data-1576742942370-X6JMK0GY.png";
var colors = ['#02335C', '#044C86', '#0767B4', '#279FFE', '#8683e6', '#9692ff'];
var url = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAARCAMAAACLgl7OAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAaVBMVEUAAADBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcEAAAD45xibAAAAInRSTlMAmT6WJYwSfBMGZAFHmEgtkBeCCW0KAlI1k5QeiA10A1tc7ah1owAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAB7SURBVCjPtZDZDoAgDAQXvA+8bwX1/3/SGKIBEd+cx07TdgtIiAF0/mygDvnAoYDr2b3nnjP8wOaDUG6J4ncfR9cdScpMzbJECZEXT1/kesyy0n1VPv6AulF908Kg6+9DWN/hjWGUfhpgYV5Ov8ywwgUhguODddtXvXIAjuUEs/70/t4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMTItMTZUMTU6MzM6MDkrMDg6MDCzL2BEAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTEyLTE2VDE1OjMzOjA5KzA4OjAwwnLY+AAAAABJRU5ErkJggg==';
var lineargroup = [{
        value: 12,
        name: '辖区全部学校',
        oriname: "辖区全部学校",
        number: 12,
        color: ["rgba(3,51,92,0.5)", "rgba(3,51,92,0.8)"]
    },
    {
        value: 9,
        name: '覆盖学校',
        oriname: "覆盖学校",
        number: 9,
        color: ["rgba(5,75,132,0.7)", "rgba(5,75,132,0.7)"]
    },
    {
        value: 8,
        name: '已排课学校',
        oriname: "已排课学校",
        number: 8,
        color: ["rgba(8,101,176,0.6)", "rgba(8,101,176,0.6)"]
    },
    {
        value: 7,
        name: '走班学校',
        oriname: "走班学校",
        number: 7,
        color: ["rgba(38,154,246,0.5)", "rgba(38,154,246,0.5)"]
    }
];
var data1 = [];
var data2 = [];
for (var i = 0; i < lineargroup.length; i++) {
    var obj1 = {
        value: lineargroup[i].value,
        num: lineargroup[i].number,
        name: lineargroup[i].oriname
    };
    var obj2 = {
        value: lineargroup[i].value,
        name: lineargroup[i].name,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: lineargroup[i].color[0]
                }, {
                    offset: 1,
                    color: lineargroup[i].color[1]
                }]),
                borderWidth: 0,
                opacity: 1
            }
        },
    };
    data1.push(obj1);
    data2.push(obj2);
}
var option = {
    backgroundColor: '',
    color: colors,
    // tooltip: {
    //     trigger: "item",
    //     formatter: "{b} : {c}%"
    // },
    grid: {
        top: '-5',
        left: "2%",
        right: 20,
        height: "20",
        bottom: '0'
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        show: false,
        boundaryGap: false,
        type: "category",
        data: ["转化率", "转化率", "转化率", "转化率", "转化率"]
    }],
    series: [{
            top: 0,
            type: 'funnel',
            height: '240',
            gap: 15,
            minSize: 100,
            left: '20%',
            width: '60%',
            borderWidth:0,
            borderType:'dashed',
            label: {
                show: true,
                position: 'inside',
                fontSize: '13',
                formatter: function(d) {
                    var ins = d.name + '{aa|}\n' + d.data.num;
                    return ins
                },
                rich: {
                    aa: {
                        padding: [8, 0, 6, 0]
                    }
                }
            },
            data: data1
        },
        /*{
            top: 0,
            type: 'funnel',
            height: '400',
            gap: 20,
            minSize: 150,
            left: '8%',
            width: '60%',
            z: 2,
            label: {
                normal: {
                    color: '#333',
                    position: 'insideLeft',
                    padding: [11, 25],
                    formatter: function(d) {
                        var ins = '{aa|' + d.name + '}\n{bb|' + d.percent + '%1}';
                        return ins
                    },
                    rich: {
                        aa: {
                            align: 'center',
                            color: '#666',
                            fontSize: '12',
                            lineHeight: '30'
                        },
                        bb: {
                            align: 'center',
                            color: '#333',
                            fontSize: '22'
                        }
                    }
                }
            },
            data: data2
        },
        {
            type: 'pictorialBar',
            name: '',
            symbolSize: ['32', '17'],
            symbolPosition: 'center',
            symbol: url,
            animation: true,
            symbolClip: true,
            z: 10,
            data: [{
                    value: 100,
                },
                {
                    value: 100,
                },
                {
                    value: 100,
                },
                {
                    value: 100,
                }
            ]
        },
        {
            z: 1,
            top: 10,
            height: 280,
            type: 'graph',
            layout: 'none',
            symbolSize: 0,
            roam: false,
            edgeSymbol: ['circle', 'arrow'],
            // edgeSymbolSize: [4, 10],
            lineStyle: {
                normal: {
                    width: 2,
                  
                }
            },
            edgeLabel: {
                normal: {
                    show: true,
                    rotate: 90,
                    position: 'middle',
                    backgroundColor: '#e4f5da',
                    borderRadius: 4,
                    color: '#333',
                    verticalAlign: 'middle',
                    fontSize: 14,
                    legendHoverLink: true,
                    padding: [3, 20, 5, 10],
                    formatter: function(d) {
                        console.log(d)
                        if (d.value) {
                            var ins =  '{words|' + d.value + '%}';
                            return ins;
                        }
                    },
                    rich: {
                        img1: {
                            backgroundColor: {
                                image: uploadedDataURL,
                            },
                            width: 18,
                            height: 16
                        },
                        words: {
                            color: '#333',
                            position: 'right',
                            fontSize: 14,
                            lineHeight: 20,
                            padding: [0, 0, 5, 0],
                        }
                    }
                }
            },
            data: [{
                name: '意向',
                x: 400,
                y: 0
            }, {
                name: '方案',
                x: 400,
                y: 20
            }, {
                name: '商务',
                x: 400,
                y: 40
            }, {
                name: '即将成交',
                x: 400,
                y: 60
            }, {
                name: '贏單',
                x: 400,
                y: 80
            }],
            links: [{
                    source: '意向',
                    target: '方案',
                    value: '67.92',
                    lineStyle: {
                        normal: {
                            curveness: 9,
                            // color: {
                            //     type: 'linear',
                            //     x: 0,
                            //     y: 0,
                            //     x2: 0,
                            //     y2: 1,
                            //     colorStops: [{
                            //         offset: 0,
                            //         color: '#1cd389' // 0% 处的颜色
                            //     }, {
                            //         offset: 1,
                            //         color: '#668eff' // 100% 处的颜色
                            //     }],
                            //     global: false // 缺省为 false
                            // }
                        }
                    }
                },
                {
                    source: '方案',
                    target: '商务',
                    value: '35.21',
                    lineStyle: {
                        normal: {
                            curveness: 8,
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: '#668eff' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#ffc751' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        }
                    }
                },
                {
                    source: '商务',
                    target: '即将成交',
                    value: '18.21',
                    lineStyle: {
                        normal: {
                            curveness: 7,
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: '#ffc751' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#ff6e73' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        }
                    }
                }
            ],
            
        }*/
    ]
};