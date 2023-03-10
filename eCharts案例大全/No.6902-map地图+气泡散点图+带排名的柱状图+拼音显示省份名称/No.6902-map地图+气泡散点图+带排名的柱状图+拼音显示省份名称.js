var name_title = "Top Province of Total Population in China";
var subname = '虚拟数据(随便写的)'
var nameColor = '#4444FF';
var name_fontFamily = '等线';
var name_fontSize = 25;
var subname_fontSize = 15;
var mapName = 'china';
// 随便编的数据
var data = [{
        'name': '北京',
        'value': 1314
    },
    {
        'name': '天津',
        'value': 314
    },
    {
        'name': '河北',
        'value': 1628
    },
    {
        'name': '山西',
        'value': 314
    },
    {
        'name': '内蒙古',
        'value': 156
    },
    {
        'name': '辽宁',
        'value': 687
    },
    {
        'name': '吉林',
        'value': 520
    },
    {
        'name': '黑龙江',
        'value': 441
    },
    {
        'name': '上海',
        'value': 1212
    },
    {
        'name': '江苏',
        'value': 2999
    },
    {
        'name': '浙江',
        'value': 2102
    },
    {
        'name': '安徽',
        'value': 717
    },
    {
        'name': '福建',
        'value': 689
    },
    {
        'name': '江西',
        'value': 654
    },
    {
        'name': '山东',
        'value': 2431
    },
    {
        'name': '河南',
        'value': 1014
    },
    {
        'name': '湖北',
        'value': 715
    },
    {
        'name': '湖南',
        'value': 515
    },
    {
        'name': '广东',
        'value': 3841
    },
    {
        'name': '广西',
        'value': 355
    },
    {
        'name': '海南',
        'value': 874
    },
    {
        'name': '重庆',
        'value': 697
    },
    {
        'name': '四川',
        'value': 610
    },
    {
        'name': '贵州',
        'value': 254
    },
    {
        'name': '云南',
        'value': 647
    },
    {
        'name': '西藏',
        'value': 56
    },
    {
        'name': '陕西',
        'value': 650
    },
    {
        'name': '甘肃',
        'value': 164
    },
    {
        'name': '青海',
        'value': 221
    },
    {
        'name': '宁夏',
        'value': 124
    },
    {
        'name': '新疆',
        'value': 78
    },
    {
        'name': '香港',
        'value': 0
    },
    {
        'name': '澳门',
        'value': 0
    },
    {
        'name': '台湾',
        'value': 0
    }
];
// var dom1 = document.getElementById("myChart");
// var myChart = echarts.init(dom1);
/*获取地图数据*/
myChart.showLoading();
var mapFeatures = echarts.getMap(mapName).geoJson.features;
myChart.hideLoading();
var geoCoordMap = {};
mapFeatures.forEach(function(v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;

});
// 用于处理effectScatter气泡散点图，气泡的大小
var max = 4000,
    min = 10;
var maxSize4Pin = 100,
    minSize4Pin = 20;
// 柱状图数据处理
var yData = [];
var barData = data.filter(function(item) {
    return item.value > 0;
});
barData = barData.sort(function(a, b) {
    return b.value - a.value;
});
for (var j = 0; j < barData.length; j++) {
    if (j < 10) {
        yData.push('0' + j + barData[j].name);
    } else {
        yData.push(j + barData[j].name);
    }
}
// ECharts配置
var option = {
    // 标题
    title: {
        text: name_title,
        subtext: subname,
        left: '300',
        top: 30,
        textStyle: {
            color: nameColor,
            fontFamily: name_fontFamily,
            fontSize: name_fontSize
        },
        subtextStyle: {
            fontSize: subname_fontSize,
            fontFamily: name_fontFamily
        }
    },
    // 提示框信息
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            var toolTiphtml = '';
            if (params.name === '南海诸岛') {
                toolTiphtml = '';
            } else if (typeof(params.value)[2] === "undefined") {
                toolTiphtml = params.value === 0 ? '' : (transferProvinceName(params.name) + ': ' + params.value);
            } else {
                toolTiphtml = transferProvinceName(params.name) + ': ' + params.value[2];
            }
            return toolTiphtml;
        }
    },
    // 视觉映射，数据范围Low--High
    visualMap: {
        show: true,
        min: 0,
        max: 4500,
        left: 'left',
        top: 'bottom',
        text: ['High', 'Low'], // 文本，默认为数值文本
        calculable: true,
        seriesIndex: [1],
        // 数据颜色范围，值越大颜色越深
        inRange: {
            color: ['#EFEFFF', '#4444FF']
        }
    },
    grid: {
        right: 25,
        top: 80,
        bottom: 20,
        width: '200'
    },
    xAxis: {
        show: false
    },
    yAxis: {
        type: 'category',
        inverse: true,
        nameGap: 16,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        // Y轴刻度标签，富文本展示
        axisLabel: {
            interval: 0,
            margin: 105,
            textStyle: {
                align: 'left',
                fontSize: 14
            },
            rich: {
                // 前三名, 序号颜色
                a: {
                    color: '#fff',
                    backgroundColor: '#f0515e',
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 2
                },
                // 第四名之后, 序号颜色
                b: {
                    color: '#fff',
                    backgroundColor: '#24a5cd',
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 2
                },
                // 前三名, 文字颜色
                x: {
                    color: '#f0515e'
                },
                // 第四名之后, 文字颜色
                y: {
                    color: '#24a5cd'
                }
            },
            // 处理前三名, 及其他的标签
            formatter: function(params) {
                if (parseInt(params.slice(0, 2)) < 3) {
                    return [
                        '{a|' + (parseInt(params.slice(0, 2)) + 1) + '}' + '  ' + '{x|' + transferProvinceName(params.slice(2)) + '}'
                    ].join('\n')
                } else {
                    return [
                        '{b|' + (parseInt(params.slice(0, 2)) + 1) + '}' + '  ' + '{y|' + transferProvinceName(params.slice(2)) + '}'
                    ].join('\n')
                }
            }
        },
        data: yData
    },
    // 地理坐标系组件,绘制地图,散点图等
    geo: {
        show: true,
        map: mapName,
        top: 100,
        left: 'left',
        right: '350',
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        roam: true,
        itemStyle: {
            // 地图hover颜色
            // emphasis: {
            //   areaColor: '#4444FF',
            // }
        },
        //是否显示南海诸岛
        regions: [{
            name: "南海诸岛",
            value: 0,
            itemStyle: {
                normal: {
                    areaColor: '#EFEFFF',
                    // opacity为0不绘制该图形
                    opacity: 1,
                    label: {
                        show: false
                    },
                }
            }
        }],
    },
    series: [
        // 散点图, 蓝色的点
        {
            name: '散点图',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
                return val[2] / 100;
            },
            label: {
                normal: {
                    formatter: function(obj) {
                        let name = transferProvinceName(obj.name);
                        return name || '';
                    },
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#4444FF'
                }
            }
        },
        // 地图
        {
            type: 'map',
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, // 地图长宽比
            showLegendSymbol: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: true,
            // itemStyle: {
            //   normal: {
            //     areaColor: '#031525',
            //     borderColor: '#3B5077',
            //   },
            //   emphasis: {
            //     areaColor: '#2B91B7'
            //   }
            // },
            animation: false,
            data: data
        },
        // 气泡散点图，红色气泡
        {
            name: '气泡散点图',
            type: 'scatter',
            coordinateSystem: 'geo',
            // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
            symbol: 'pin', //气泡
            symbolSize: function(val) {
                // 根据value值，设置symbol大小，根据实际情况自己调整
                if (val[2] === 0) {
                    return 0;
                }
                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                var b = maxSize4Pin - a * max;
                return a * val[2] + b * 1.2;
            },
            label: {
                normal: {
                    show: true,
                    formatter: function(obj) {
                        return obj.data.value[2];
                    },
                    textStyle: {
                        color: '#fff',
                        fontSize: 9,
                    }
                }
            },
            itemStyle: {
                normal: {
                    // 气泡颜色
                    color: '#F62157',
                }
            },
            zlevel: 6,
            data: convertData(data),
        },
        // 前五名，带有涟漪特效动画的散点（气泡）图，黄色
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 5)),
            symbolSize: function(val) {
                return val[2] / 120;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: function(obj) {
                        let name = transferProvinceName(obj.name);
                        return name || '';
                    },
                    position: 'right',
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: 'yellow',
                    shadowBlur: 10,
                    shadowColor: 'yellow'
                }
            },
            zlevel: 1
        },
        // 柱状图
        {
            name: '柱状图',
            type: 'bar',
            roam: false,
            visualMap: false,
            barMaxWidth: 20,
            zlevel: 2,
            barGap: 0,
            itemStyle: {
                normal: {
                    // 柱状图，渐变色
                    color: function(params) {
                        var colorList = [{
                                colorStops: [{
                                    offset: 0,
                                    color: '#f0515e'
                                }, {
                                    offset: 1,
                                    color: '#ef8554'
                                }]
                            },
                            {
                                colorStops: [{
                                    offset: 0,
                                    color: '#3c38e4'
                                }, {
                                    offset: 1,
                                    color: '#24a5cd'
                                }]
                            }
                        ];
                        if (params.dataIndex < 3) {
                            return colorList[0]
                        } else {
                            return colorList[1]
                        }
                    },
                },
                // 柱状图hover颜色
                emphasis: {
                    color: "#f0515e"
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textBorderWidth: 0
                }
            },
            data: barData
        }
    ]
};
myChart.setOption(option);

// 将中文省份名称转换为拼音名称
function transferProvinceName(name) {
    var provincesPinyin = ['Shanghai', 'Hebei', 'Shanxi', 'Neimenggu', 'Liaoning', 'Jilin', 'Heilongjiang', 'Jiangsu', 'Zhejiang', 'Anhui', 'Fujian', 'Jiangxi', 'Shandong', 'Henan', 'Hubei', 'Hunan', 'Guangdong', 'Guangxi', 'Hainan', 'Sichuan', 'Guizhou', 'Yunnan', 'Xizang', 'Shanxi1', 'Gansu', 'Qinghai', 'Ningxia', 'Xinjiang', 'Beijing', 'Tianjin', 'Chongqing', 'Xianggang', 'Aomen', 'Taiwan'];
    var provincesChinese = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门', '台湾'];
    var pinyinName = provincesPinyin[provincesChinese.indexOf(name)];
    return pinyinName || '';
}

// 用于处理散点图数据
function convertData(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
}

/**
 * 更多示例及完整代码示例下载：GitHub: https://github.com/Jackyyans/code123
 * 
 */

/**
 * 参考：
 * https://gallery.echartsjs.com/editor.html?c=xBJDR584vG
 * https://gallery.echartsjs.com/editor.html?c=xdExzKlpOh
 * 
 */