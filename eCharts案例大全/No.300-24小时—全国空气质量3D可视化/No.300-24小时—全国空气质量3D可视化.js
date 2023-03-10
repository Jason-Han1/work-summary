timeLineData = []
datalist = []
fetch('https://24h-aqi-list.vercel.app/api')
    .then(function(response) {
        return response.json()
    })
    .then(function(json) {
        datalist = json
        datalist = datalist.reverse()
        for (item of datalist) {
            let str = item[0][0]
            let itemdata = item[1]
            let itemdatalist = [{
                name: "基准",
                value: 0
            }]
            for (let j in allarealist) {
                let newitemdata = {
                    name: allarealist[j],
                    value: 50
                }
                for (i of itemdata) {
                    if (i.area === allarealist[j]) {
                        newitemdata.value = i.aqi
                    } else {

                    }
                }
                itemdatalist.push(newitemdata)
            }
            let gettime = str.split(' ')[1].split(':')[0]
            timetext = ''
            if (Number(gettime) >= 12) {
                timetext = item[0][0] + '   ' + 'P.M'
            } else if (Number(gettime) <= 11) {
                timetext = item[0][0] + '   ' + 'A.M'
            }
            timeLineData.push(Number(gettime))
            option.baseOption.timeline.data.push(Number(gettime));
            option.options.push({
                title: [{
                    text: timetext,
                    textAlign: 'center',
                    left: '50%',
                    top: '10%',
                    textStyle: {
                        fontSize: 30,
                        color: 'rgba(255, 255, 255, 0.7)'
                    }
                }, {
                    text: '全国主要城市空气质量',
                    subtext: 'data from pm25.com',
                    sublink: 'http://www.pm25.com/',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                }],
                series: [{
                    data: convertData(itemdatalist),
                }]
            });
        }
        myChart.setOption(option);
    })
    .catch(function(ex) {
        console.log('parsing failed', ex)
    })

option = {
    baseOption: {
        backgroundColor: '#08304a',
        timeline: {
            show: true,
            axisType: 'category',
            tooltip: {
                show: true,
                formatter: function(params) {
                    console.log(params);
                    return params.name + '时';
                }
            },
            autoPlay: true,
            currentIndex: 6,
            playInterval: 2000,
            label: {
                normal: {
                    show: true,
                    interval: 'auto',
                    formatter: '{value}时',
                },
            },
            data: [],
        },
        tooltip: {
            show: true,
            formatter: (params) => {
                let data = "位置:" + params.name + "<br/>" + "AQI值:" + params.value[2] + "<br/>";
                return data;
            },
        },
        legend: {
            selectedMode: 'single',
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['AQI'],
            textStyle: {
                color: '#fff',
            },
        },
        visualMap: {
            textStyle: {
                color: '#fff',
            },
            itemWidth: 30,
            itemHeight: 21,
            pieces: [{
                min: 0,
                max: 50,
                label: '优',
                color: '#6ccc06'
            }, {
                min: 51,
                max: 100,
                label: '良',
                color: '#fbd029'
            }, {
                min: 101,
                max: 150,
                label: '轻度污染',
                color: '#fe8800'
            }, {
                min: 151,
                max: 200,
                label: '中度污染',
                color: '#fe0000'
            }, {
                min: 201,
                max: 300,
                label: '重度污染',
                color: '#970454'
            }, {
                min: 301,
                max: 500,
                label: '严重污染',
                color: '#62001e'
            }, ],
        },
        geo3D: {
            environment: 'black',
            boxHeight: 20,
            map: 'china',
            roam: true,
            realisticMaterial: {
                detailTexture: '#666',
                textureTiling: 1,
                metalness: 0,
                roughness: 0.5,

            },
            label: {
                show: false,
                textStyle: {
                    color: '#fff', //地图初始化区域字体颜色
                    fontSize: 18,
                    opacity: 1,
                    backgroundColor: 'rgba(0,23,11,0)'
                },
            },
            postEffect: {
                enable: true,
                SSAO: {
                    enable: true,
                    radius: 1,
                    quality: 'high'
                }
            },
            shading: 'lambert',
            lambertMaterial: {
                detailTexture: '',
                textureTiling: 20
            },
            itemStyle: {
                color: 'https://aqi.zfe.space/images/pisa.hdr',
                opacity: 0.007,
                borderWidth: 0,
                borderColor: 'rgba(0,23,11,0)'
            },
            emphasis: { //当鼠标放上去  地区区域是否显示名称
                label: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 3,
                        backgroundColor: 'rgba(0,23,11,0)'
                    }
                }
            },
            //shading: 'lambert',
            light: {
                main: {
                    intensity: 1,
                    shadow: false,
                    shadowQuality: 'high'
                },
                ambient: {
                    intensity: 1.
                },
                ambientCubemap: {
                    texture: 'https://aqi.zfe.space/images/pisa.hdr',
                    exposure: 3,
                    diffuseIntensity: 0.5,
                    specularIntensity: 2
                }
            }
        },
        series: [{
            name: 'AQI',
            type: "bar3D",
            coordinateSystem: 'geo3D',
            barSize: 0.8, //柱子粗细
            shading: 'realistic',
            realisticMaterial: {
                metalness: 1,
                roughness: 0.2,
            },
            minHeight: 0.1,
            instancing: true,
            animation: true,
            animationDurationUpdate: 500,
            opacity: 1,
            bevelSize: 0.3,
            label: {
                show: false,
                formatter: '{b}'
            },
            data: [],
        }]
    },
    options: [],
};
var convertData = function(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        var geoCoord = geoCoordMap[arr[i].name];
        if (geoCoord) {
            res.push({
                name: arr[i].name,
                value: geoCoord.concat(arr[i].value)
            });
        }
    }
    return res;
};

//进行图标参数设置
function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
if (screen.width < 768) {
    option.baseOption.series[0].shading = "lambert"
    myChart.setOption(option);
}