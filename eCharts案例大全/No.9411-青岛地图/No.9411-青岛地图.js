var uploadedDataURL = "/asset/get/s/data-1508307412468-Hy20ZuV6b.json";


function showProvince() {
    var name = 'qingdao';

    // myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            "geo": {
                "show": true,
                "map": "qingdao",
                "label": {
                    "normal": {
                        "show": false,
                        "color": "#fff"
                    },
                    "emphasis": {
                        "show": false,
                        "color": "#fff"
                    }
                },
                "zoom": 1.2,
                "roam": false,
                "itemStyle": {
                    "normal": {
                        "areaColor": "rgba(78, 159, 202, .5)",
                        "borderWidth": 1,
                        "borderColor": "#8dc2d6",
                        "shadowColor": "rgba(80, 163, 186, .8)",
                        "shadowBlur": 50
                    },
                    "emphasis": {
                        "areaColor": "rgba(107, 176, 207, .6)"
                    }
                }
            },
            "series": [{
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: [{
                        name: "",
                        value: [120.075966, 36.800892, 0]

                    }],
                    symbolSize: 14,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        },
                    },
                    //   itemStyle: {
                    //     normal: {
                    //       color: '#e93f42',
                    //       shadowBlur: 5,
                    //       shadowColor: '#f00'
                    //     }
                    //     }
                    itemStyle: {
                        color: '#e93f42',
                    }
                },
                {
                    "type": "scatter",
                    "coordinateSystem": "geo",
                    "data": [{
                            "name": "???????????????????????????????????????118???????????????1??????4???401???",
                            "value": [
                                120.42036504006357,
                                36.1097004800983,
                                0
                            ]
                        },
                        {
                            "name": "???????????????????????????????????????118???????????????1??????4???401???",
                            "value": [
                                120.42036504006357,
                                36.1097004800983,
                                0
                            ]
                        },
                        {
                            "name": "????????????????????????????????????7??????????????????????????????????????????7????????????1???2????????????",
                            "value": [
                                120.39433776955278,
                                36.05488272319778,
                                0
                            ]
                        },
                        {
                            "name": "????????????????????????????????????98??????????????????2??????4???408???",
                            "value": [
                                120.37293214343087,
                                36.07913360762258,
                                0
                            ]
                        },
                        {
                            "name": "????????????????????????????????????????????????5??????2??????2???202???",
                            "value": [
                                120.40810234113933,
                                36.172197780363774,
                                0
                            ]
                        },
                        {
                            "name": "???????????????????????????????????????269????????????1??????1??????1???102???",
                            "value": [
                                120.02547287889087,
                                36.265168148066195,
                                0
                            ]
                        },
                        {
                            "name": "???????????????????????????????????????269????????????1??????1??????1???101???",
                            "value": [
                                120.02547287889087,
                                36.265168148066195,
                                0
                            ]
                        },
                        {
                            "name": "???????????????????????????????????????269????????????1??????1??????1???101???",
                            "value": [
                                120.02547287889087,
                                36.265168148066195,
                                0
                            ]
                        },
                        {
                            "name": "????????????????????????????????????????????????5??????2??????2???202???",
                            "value": [
                                120.40810234113933,
                                36.172197780363774,
                                0
                            ]
                        },
                        {
                            "name": "???????????????????????????????????????95?????????7???706???",
                            "value": [
                                120.20898089131913,
                                36.04261756134677,
                                0
                            ]
                        }
                    ],
                    "symbolSize": 12,
                    "showEffectOn": "render",
                    "rippleEffect": {
                        "brushType": "stroke"
                    },
                    "hoverAnimation": true,
                    "itemStyle": {
                        "normal": {
                            "color": "yellow",
                            "shadowBlur": 5,
                            "shadowColor": "yellow"
                        }
                    }
                },

                {
                    "type": "map",
                    "mapType": "qingdao",
                    "aspectScale": 0.75,
                    "zoom": 1.2,
                    "geoIndex": 1,
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            },
                            formatter: function(val) {
                                let {
                                    name,
                                    value
                                } = val;
                                value = isNaN(value) ? 0 : value;
                                return `${name}\n???????????????${value}???`;
                            },
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    "itemStyle": {
                        "normal": {
                            "borderColor": "#9dc6d6",
                            "areaColor": "rgba(78, 159, 202, .8)"
                        },
                        "emphasis": {
                            "areaColor": "#6bb0cf"
                        }
                    },
                    "animation": false,
                    "data": [{
                            "name": "?????????",
                            "value": 338
                        },
                        {
                            "name": "?????????",
                            "value": 284
                        },
                        {
                            "name": "?????????",
                            "value": 103
                        },
                        {
                            "name": "?????????",
                            "value": 84
                        },
                        {
                            "name": "?????????",
                            "value": 74
                        },
                        {
                            "name": "?????????",
                            "value": 48
                        },
                        {
                            "name": "?????????",
                            "value": 48
                        },
                        {
                            "name": "?????????",
                            "value": 34
                        },
                        {
                            "name": "?????????",
                            "value": 16
                        },
                        {
                            "name": "?????????",
                            "value": 11
                        }
                    ]
                }
            ],
            "visualMap": {
                "show": false,
                "min": 11,
                "max": 338,
                "left": "left",
                "top": "bottom",
                "text": [
                    "???",
                    "???"
                ],
                "seriesIndex": [2],
                "inRange": {
                    "color": [
                        "#2d5e87",
                        "#204765"
                    ]
                },
                "textStyle": {
                    "color": "#fff"
                }
            }
        });
    });
}

var currentIdx = 0;

showProvince();