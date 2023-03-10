var points = [{
            name: "故障初判",
            //x,y坐标
            value: [0, 300],
            target: ['离线实验', '装置检修'],
            // offset: true,
        }, {
            name: "离线实验",
            value: [300, 300],
            target: ['告警确认', '在线数据审核']
        }, {
            name: "告警确认",
            value: [300, 500],
            target: ['离线实验'],
            offset: true
        }, {
            name: "装置检修",
            value: [300, 100],
            offset: true,
            target: ['在线数据审核'],
            selected: true
        }, {
            name: "在线数据审核",
            value: [600, 300],
            target: ['关闭']
        }, {
            name: "关闭",
            value: [900, 300]
        }];
        /*
           获取target在source中的坐标
           */
        var getPointCoordinate = function (source, targetName) {
            var targetItem = source.filter(item => {
                return item.name == targetName;
            });
            console.log('targetItem,', targetItem);
            return targetItem[0].value;
        }

        /*
        获取路径要添加的点
        */
        var getRoutePoint = function (startCoordinate, endPointName) {
            var endPoint = getPointCoordinate(points, endPointName);
            var gap = 100;
            var rs = [];
            let startPointX = startCoordinate[0];
            let startPointY = startCoordinate[1];
            let endPointX = endPoint[0];
            let endPointY = endPoint[1];
            //横坐标相同
            if (startPointX == endPointX) {
                var point1 = {
                    name: 'offset1' + endPointName,
                    value: [startPointX + gap, startPointY],
                    symbol: 'none',
                    target: ['offset2' + endPointName]
                };
                var point2 = {
                    name: 'offset2' + endPointName,
                    value: [startPointX + gap, endPointY],
                    symbol: 'none',
                    target: [endPointName]
                };
                rs.push(point1);
                rs.push(point2);
            } else if (startPointY == endPointY) {
                var point1 = {
                    name: 'offset1' + endPointName,
                    value: [startPointX, startPointY - gap],
                    symbol: 'none',
                    target: ['offset2' + endPointName]
                };
                var point2 = {
                    name: 'offset2' + endPointName,
                    value: [endPointX, startPointY - gap],
                    symbol: 'none',
                    target: [endPointName]
                };
                rs.push(point1);
                rs.push(point2);
            } else {
                rs.push({
                    name: 'offset1' + endPointName,
                    value: [endPointX, startPointY],
                    symbol: 'none',
                    target: [endPointName]
                });
            }
            return rs;
        }

        var handlePoints = function (points) {

            for (var i = 0; i < points.length; i++) {
                var item = points[i];
                //当前点坐标
                var currentCoordinate = item.value;
                //是否存在目标点连线
                if (item.target) {
                    var targetItem = item.target;
                    for (var j = 0; j < targetItem.length; j++) {
                        var selected = item.selected;
                        //是否需要偏移偏移需要虚拟点
                        if (item.offset) {
                            var routes = getRoutePoint(currentCoordinate, targetItem[j]);
                            var newTarget = [routes[0].name]
                            item.target = newTarget;
                            for (const key in routes) {
                                var element = routes[key];
                                element.selected = selected;
                                points.push(element)
                            }
                        }
                    }
                }
            }
            return points;
        }

        var newPoints = handlePoints(points);

        console.log('newPoints', newPoints)

        var linesData = function (points) {

            return [{
                coords: [
                    [300, 100],
                    [600, 100]
                ],                
            },{
                coords: [
                    [600, 100],
                    [600, 300]
                ]
            }]
        }

        var seriesData = function (data) {
            return data.map(item => ({
                name: item.name,
                symbol: item.symbol && item.symbol === 'none' ? 'none' : 'rect',
                symbolSize: item.name.indexOf('offset') != -1 ? 0 : [80, 40], //图标大小                 
                draggable: false,
                fixed: true,
                value: item.value,
                edgeSymbol: ['circle', 'arrow'],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: "#157eff"
                            },
                            {
                                offset: 1,
                                color: "#35c2ff"
                            }
                        ])
                    }
                }
            }));
        }
        console.log('seriesData', seriesData(newPoints))



        var links = function (data) {
            console.log('links data', data)
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var currentCoordinate = item.value;
                console.debug('currentCoordinate', currentCoordinate)
                if (item.target) {
                    console.debug('item.target', item.target)
                    for (var j = 0; j < item.target.length; j++) {
                        res.push({
                            source: item.name,
                            target: item.target[j],
                            lineStyle: {
                                normal: {
                                    color: "#12b5d0",
                                }
                            }
                        })
                    }
                }

            }
            console.log('links', res)

            return res;
        }


        // 指定图表的配置项和数据
        option = ({

            backgroundColor: "#fff",
            roam: true,
            xAxis: {
                show: false,
                type: "value"
            },
            yAxis: {
                show: false,
                type: "value"
            },
            tooltip: {},
            series: [{
                    type: "graph",
                    // zlevel: 5,

                    draggable: false,
                    coordinateSystem: "cartesian2d", //使用二维的直角坐标系（也称笛卡尔坐标系）

                    // edgeSymbolSize: [0, 8], //边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定
                    // edgeLabel: {
                    //   normal: {
                    //     textStyle: {
                    //       fontSize: 60
                    //     }
                    //   }
                    // },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [2, 6],

                    //关系图节点标记的图形
                    symbol: "rect",
                    symbolOffset: ['15%', 0],
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            opacity: 1,
                            // color: "#cccccc",
                            curveness: 0,
                            // 12b5d0
                            type: "dashed",
                            width: 1
                        }
                    },
                    data: seriesData(newPoints),
                    links: links(newPoints)

                },
                {
                    type: "lines",
                    coordinateSystem: "cartesian2d",
                    z: 1,
                    zlevel: 2,
                    animation: false,
                    effect: {
                        show: true,
                        period: 5,
                        trailLength: 0.01,
                        symbolSize: 6,
                        symbol: "arrow",
                        loop: true,
                        color: "rgba(55,155,255,0.5)"
                    },
                    lineStyle: {
                        curveness: 0,
                        color: '#0ca361',
                        opacity: 0.6,
                        width: 1,
                        type: "dashed"
                    },
                    data: linesData()
                }

            ]
        });