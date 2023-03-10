var zhongguo = "/asset/get/s/data-1528971808162-BkOXf61WX.json";
var hainan = "/asset/get/s/data-1528971693521-r18nZaybm.json";
var xizang = "/asset/get/s/data-1528970391616-BJeoh2JW7.json";
var zhejiang = "/asset/get/s/data-1528970380661-SkH93h1-m.json";
var yunnan = "/asset/get/s/data-1528970362114-r1MK321WQ.json";
var xinjiang = "/asset/get/s/data-1528970349852-H18u22kWX.json";
var tianjin = "/asset/get/s/data-1528970339987-Hk2wnh1ZX.json";
var sichuan = "/asset/get/s/data-1528970319531-Hy_8n3y-m.json";
var shanxi = "/asset/get/s/data-1528970298351-HyzB32JZ7.json";
var shangxi = "/asset/get/s/data-1528970273819-B1cmnnk-Q.json";
var shanghai = "/asset/get/s/data-1528970254015-HJLfhnyWX.json";
var shangdong = "/asset/get/s/data-1528970240242-Byu-hhybX.json";
var qinghai = "/asset/get/s/data-1528970209434-Bytyh3kZ7.json";
var ningxia = "/asset/get/s/data-1528970150882-SJJ2j2yWQ.json";
var neimenggu = "/asset/get/s/data-1528970102554-HyJKo31bQ.json";
var liaoning = "/asset/get/s/data-1528970052404-BJhHihkbQ.json";
var jilin = "/asset/get/s/data-1528970024458-rkeEjhy-Q.json";
var jiangxi = "/asset/get/s/data-1528969991368-BkkMi31Zm.json";
var jiangsu = "/asset/get/s/data-1528969864934-BJ-qchkWQ.json";
var hunan = "/asset/get/s/data-1528969831328-Sykuqh1bX.json";
var hubei = "/asset/get/s/data-1528969822119-Bk8v93kZ7.json";
var henan = "/asset/get/s/data-1528969802719-HyXIqhk-m.json";
var heilongjiang = "/asset/get/s/data-1528969789631-ryLHcnJbm.json";
var hebei = "/asset/get/s/data-1528969737020-HJWMqhy-Q.json";
var guizhou = "/asset/get/s/data-1528969712502-Hy_g92yZQ.json";
var guangxi = "/asset/get/s/data-1528969706270-HJMg5hkWQ.json";
var guangdong = "/asset/get/s/data-1528969700634-BkT1qn1WQ.json";
var gansu = "/asset/get/s/data-1528969694316-BJLkc2yZX.json";
var chongqing = "/asset/get/s/data-1528969687660-r1ey9nkbX.json";
var aomen = "/asset/get/s/data-1528969612486-rJ4qtnyZm.json";
var anhui = "/asset/get/s/data-1528969607452-Hkk5tnJ-Q.json";
var beijing = "/asset/get/s/data-1528969604941-Hk6Ytn1WQ.json";
var fujian = "/asset/get/s/data-1528969599839-S1OFFn1ZQ.json";
var xianggang = "/asset/get/s/data-1528969589857-S1ROthJWm.json";

echarts.extendsMap = function(id, opt) {
    // ??????
    var chart = this.init(document.getElementById(id));

    var curGeoJson = {};
    var cityMap = {
        '??????': zhongguo,
        '??????': shanghai,
        '??????': hebei,
        '??????': shangxi,
        '?????????': neimenggu,
        '??????': liaoning,
        '??????': jilin,
        '?????????': heilongjiang,
        '??????': jiangsu,
        '??????': zhejiang,
        '??????': anhui,
        '??????': fujian,
        '??????': jiangxi,
        '??????': shangdong,
        '??????': henan,
        '??????': hubei,
        '??????': hunan,
        '??????': guangdong,
        '??????': guangxi,
        '??????': hainan,
        '??????': sichuan,
        '??????': guizhou,
        '??????': yunnan,
        '??????': xizang,
        '??????': shanxi,
        '??????': gansu,
        '??????': qinghai,
        '??????': ningxia,
        '??????': xinjiang,
        '??????': beijing,
        '??????': tianjin,
        '??????': chongqing,
        '??????': xianggang,
        '??????': aomen
    };
    var geoCoordMap = {
        "??????": [107.012225,40.337792],
        "??????": [123.476404,41.811854],
        "??????": [122.150954,41.146597],
        "????????????": [120.434446,27.523467],
        "??????": [116.845318,38.310486],
        "?????????": [118.504805,39.004067],
        "????????????": [118.088961,39.599362],
        "????????????": [117.639472,38.365606],
        "??????": [115.182225,35.326397],
        "??????": [115.050769,22.762251],
        "??????": [111.371802,24.741613],
        "?????????A": [113.233978,25.942699],
        "?????????B": [113.205002,25.440064],
        "????????????": [113.535842,22.863521],
        "????????????": [113.888854,29.667558],
        "????????????": [114.119833,29.669091],
        "??????": [111.906695,27.767901],
        "??????": [111.456005,30.50378],
        "??????????????????": [117.091077,34.378713],
        "????????????": [118.828047,32.273218],
        "??????": [119.801641,31.36496],
        "??????": [119.383774,32.188708],
        "??????": [113.888833,29.669091],
        "??????": [119.283774,32.188708],
        "?????????????????????": [118.927993,32.27431],
        "????????????": [118.64423,31.953574],
        "????????????": [117.291077,34.378713],
        "??????": [105.403904,26.387848],
        "?????????": [112.695363,34.744379],
        "??????": [113.113088,35.222327],
        "??????????????????": [113.215689,34.396153],
        "??????": [111.984763,34.746303],
        "??????": [114.061156,32.878627],
    };
    
    var levelColorMap = {
        '1': 'rgba(241, 109, 115, .8)',
        '2': 'rgba(255, 235, 59, .7)',
        '3': 'rgba(147, 235, 248, 1)'
    };

    var defaultOpt = {
        mapName: 'china', // ????????????
        goDown: false, // ????????????
        bgColor: '#404a59', // ???????????????
        activeArea: [], // ????????????,???echarts?????????
        data: [],
        // ????????????(?????????????????????????????????option???????????????)
        callback: function(name, option, instance) {}
    };
    if (opt) opt = this.util.extend(defaultOpt, opt);

    // ????????????
    var name = [opt.mapName];
    var idx = 0;
    var pos = {
        leftPlus: 115,
        leftCur: 150,
        left: 198,
        top: 50
    };

    var line = [
        [0, 0],
        [8, 11],
        [0, 22]
    ];
    // style
    var style = {
        font: '18px "Microsoft YaHei", sans-serif',
        textColor: '#eee',
        lineColor: 'rgba(147, 235, 248, .8)'
    };

    var handleEvents = {
        /**
         * i ????????????
         * o option
         * n ?????????
         **/
        resetOption: function(i, o, n) {
            var breadcrumb = this.createBreadcrumb(n);
            var j = name.indexOf(n);
            var l = o.graphic.length;
            if (j < 0) {
                o.graphic.push(breadcrumb);
                o.graphic[0].children[0].shape.x2 = 145;
                o.graphic[0].children[1].shape.x2 = 145;
                if (o.graphic.length > 2) {
                    var cityData = [];
                    var cityJson;
                    for (var x = 0; x < opt.data.length; x++) {
                        if(n === opt.data[x].city){
                            $([opt.data[x]]).each(function(index,data){
                                cityJson = {city:data.city,name:data.name,value:data.value,crew:data.crew,company:data.company,position:data.position,region:data.region};
                                cityData.push(cityJson)
                            }) 
                        }
                    }
                    
                    if(cityData!=null){
                        o.series[0].data = handleEvents.initSeriesData(cityData);
                    }else{
                        o.series[0].data = [];
                    }
                    
                    
                }
                name.push(n);
                idx++;
            } else {
                o.graphic.splice(j + 2, l);
                if (o.graphic.length <= 2) {
                    o.graphic[0].children[0].shape.x2 = 60;
                    o.graphic[0].children[1].shape.x2 = 60;
                    o.series[0].data = handleEvents.initSeriesData(opt.data);
                };
                name.splice(j + 1, l);
                idx = j;
                pos.leftCur -= pos.leftPlus * (l - j - 1);
            };

            o.geo.map = n;
            o.geo.zoom = 0.4;
            i.clear();
            i.setOption(o);
            this.zoomAnimation();
            opt.callback(n, o, i);
        },

        /**
         * name ?????????
         **/
        createBreadcrumb: function(name) {
            var cityToPinyin = {
                '??????': 'zhongguo',
                '??????': 'shanghai',
                '??????': 'hebei',
                '??????': 'shangxi',
                '?????????': 'neimenggu',
                '??????': 'liaoning',
                '??????': 'jilin',
                '?????????': 'heilongjiang',
                '??????': 'jiangsu',
                '??????': 'zhejiang',
                '??????': 'anhui',
                '??????': 'fujian',
                '??????': 'jiangxi',
                '??????': 'shangdong',
                '??????': 'henan',
                '??????': 'hubei',
                '??????': 'hunan',
                '??????': 'guangdong',
                '??????': 'guangxi',
                '??????': 'hainan',
                '??????': 'sichuan',
                '??????': 'guizhou',
                '??????': 'yunnan',
                '??????': 'xizang',
                '??????': 'shanxi',
                '??????': 'gansu',
                '??????': 'qinghai',
                '??????': 'ningxia',
                '??????': 'xinjiang',
                '??????': 'beijing',
                '??????': 'tianjin',
                '??????': 'chongqing',
                '??????': 'xianggang',
                '??????': 'aomen'
            };
            var breadcrumb = {
                type: 'group',
                id: name,
                left: pos.leftCur + pos.leftPlus,
                top: pos.top + 3,
                children: [{
                    type: 'polyline',
                    left: -90,
                    top: -5,
                    shape: {
                        points: line
                    },
                    style: {
                        stroke: '#fff',
                        key: name
                        // lineWidth: 2,
                    },
                    onclick: function() {
                        var name = this.style.key;
                        handleEvents.resetOption(chart, option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 'middle',
                    style: {
                        text: name,
                        textAlign: 'center',
                        fill: style.textColor,
                        font: style.font
                    },
                    onclick: function() {
                        var name = this.style.text;
                        handleEvents.resetOption(chart, option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 10,
                    style: {

                        name: name,
                        text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
                        textAlign: 'center',
                        fill: style.textColor,
                        font: '12px "Microsoft YaHei", sans-serif',
                    },
                    onclick: function() {
                        // console.log(this.style);
                        var name = this.style.name;
                        handleEvents.resetOption(chart, option, name);
                    }
                }]
            }

            pos.leftCur += pos.leftPlus;

            return breadcrumb;
        },

       // ??????effectscatter
        initSeriesData: function(data) {
            var temp = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    temp.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                        crew:data[i].crew,
						company:data[i].company,
						position:data[i].position,
						region:data[i].region
                    });
                }
            };
            return temp;
        },
        zoomAnimation: function() {
            var count = null;
            var zoom = function(per) {
                if (!count) count = per;
                count = count + per;
                // console.log(per,count);
                chart.setOption({
                    geo: {
                        zoom: count
                    }
                });
                if (count < 1) window.requestAnimationFrame(function() {
                    zoom(0.2);
                });
            };
            window.requestAnimationFrame(function() {
                zoom(0.2);
            });
        }
    };

    var option = {
        backgroundColor: opt.bgColor,
         tooltip: {
            show: true,
            trigger:'item',
            alwaysShowContent:false,
            backgroundColor:'rgba(50,50,50,0.7)',
            hideDelay:100,
            triggerOn:'mousemove',
            enterable:true,
            position:['60%','70%'],
            formatter:function(params, ticket, callback){
                return '?????????'+params.data.name+'<br/>'+'?????????'+params.data.crew+'?????????'+'<br/>'+'???????????????'+params.data.company+'<br/>'+'???????????????'+params.data.region+'<br/>'+'???????????????'+params.data.position
            }
        },
        graphic: [{
            type: 'group',
            left: pos.left,
            top: pos.top - 4,
            children: [{
                type: 'line',
                left: 0,
                top: -20,
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 60,
                    y2: 0
                },
                style: {
                    stroke: style.lineColor,
                }
            }, {
                type: 'line',
                left: 0,
                top: 20,
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 60,
                    y2: 0
                },
                style: {
                    stroke: style.lineColor,
                }
            }]
        }, 
        {
            id: name[idx],
            type: 'group',
            left: pos.left + 2,
            top: pos.top,
            children: [{
                type: 'polyline',
                left: 90,
                top: -12,
                shape: {
                    points: line
                },
                style: {
                    stroke: 'transparent',
                    key: name[0]
                },
                onclick: function() {
                    var name = this.style.key;
                    handleEvents.resetOption(chart, option, name);
                }
            }, {
                type: 'text',
                left: 0,
                top: 'middle',
                style: {
                    text: '??????',
                    textAlign: 'center',
                    fill: style.textColor,
                    font: style.font
                },
                onclick: function() {
                    handleEvents.resetOption(chart, option, '??????');
                }
            }, {
                type: 'text',
                left: 0,
                top: 10,
                style: {
                    text: 'China',
                    textAlign: 'center',
                    fill: style.textColor,
                    font: '12px "Microsoft YaHei", sans-serif',
                },
                onclick: function() {
                    handleEvents.resetOption(chart, option, '??????');
                }
            }]
        }],
        geo: {
            map: opt.mapName,
            roam: true,
            zoom: 1,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(147, 235, 248, 0)' // 0% ????????????
                        }, {
                            offset: 1,
                            color: 'rgba(147, 235, 248, .2)' // 100% ????????????
                        }],
                        globalCoord: false // ????????? false
                    },
                    shadowColor: 'rgba(128, 217, 248, 1)',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: '#389BB7',
                    borderWidth: 0
                }
            },
            regions: opt.activeArea.map(function(item) {
                if (typeof item !== 'string') {
                    return {
                        name: item.name,
                        itemStyle: {
                            normal: {
                                areaColor: item.areaColor || '#389BB7'
                            }
                        },
                        label: {
                            normal: {
                                show: item.showLabel,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    }
                } else {
                    return {
                        name: item,
                        itemStyle: {
                            normal: {
                                borderColor: '#91e6ff',
                                areaColor: '#389BB7'
                            }
                        }
                    }
                }
            })
        },
        series: [{
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            rippleEffect: {
                period:15,
                scale: 4,
                brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#FFC848',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: []
        }]
    };

    chart.setOption(option);
    // ????????????
    chart.on('click', function(params) {
        var _self = this;
        if (opt.goDown && params.name !== name[idx]) {
            if (cityMap[params.name]) {
                var url = cityMap[params.name];
                $.get(url, function(response) {
                    //console.log(response);
                    curGeoJson = response;
                    echarts.registerMap(params.name, response);
                    handleEvents.resetOption(_self, option, params.name);
                });
            }
        }
    });

    chart.setMap = function(mapName) {
        var _self = this;
        if (mapName.indexOf('???') < 0) mapName = mapName + '???';
        var citySource = cityMap[mapName];
        if (citySource) {
            var url = './map/' + citySource + '.json';
            $.get(url, function(response) {
                // console.log(response);
                curGeoJson = response;
                echarts.registerMap(mapName, response);
                handleEvents.resetOption(_self, option, mapName);
            });
        }
        
    };

    return chart;
};

$.getJSON(zhongguo, function(geoJson) {
    echarts.registerMap('??????', geoJson);
    var myChart = echarts.extendsMap('chart-panel', {
        bgColor: '#154e90', // ???????????????
        mapName: '??????', // ?????????
        text:'????????????',
        goDown: true, // ????????????
        // ????????????
        callback: function(name, option, instance) {
            //console.log(name, option, instance);
        },
        // ????????????            	
        data: []
    });
})
/*???????????????json?????????https://share.weiyun.com/5x12K4r*/