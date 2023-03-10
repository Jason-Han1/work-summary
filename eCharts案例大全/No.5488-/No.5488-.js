let iconRQ = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRkRBMEJBQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRkRBMEJCQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JGREEwQjhDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JGREEwQjlDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mT42iAAABQ0lEQVR42mL8LabOQCQIBOL1xChkItJAkLp+IBajpqFWQCwPxJ7UNDQCSgdQy1BmIA6Bsl2AmJMahjoAsTiUzQPETtQwNAKN709IAwvUayZQ/hcg/o0k/x6Ig9D0+ABxKJT9HYh/oMm/BBm6GYitgTgfiBmJcLkkEK/CIXcGiGNB3v8JxIVQF31gIA/8AeIWaNK7gRymG4BYH4hPkGjgXSC2A+JaWNChR9QjqIJeIP5PhIGzgdgAiI8Tin2QbSVAvIOAgROBOA0auUQlKV4gtidgqBGp6RSUFrmIKA/ESDEUPcGfBOIUIH6Lln29iTVUCIjdkJJKExDbAPFcqJdPEMpd2AwF5TBWaFKxBeJ6qOHIqaMbmjrcsBUw2AwNh7rKAEeaBaWOMiD2BeJvQOxOyFBuaFJJwZZU0MBWaHCIo0sABBgAetA4Jx5t/ToAAAAASUVORK5CYII="
let effectScattersymbol = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAEfklEQVRIiZWWy2/cVBTGf7avx/NI0iEzSSakCVQCQVUoFBCFVkiwQXTJhl2L2HQDEhsWIBZVV/0HWHUFYskOFtAVQqItSK2QClUpQmqakKRoJu+MM7avfdFxPIPjpq8zGsnyvef77nfOuefYqp75hgfYFPA6cASYAUay7RvAHPAbcBlYuB+Mus/a88BJ4NA91kez/4vAB8B14Gvg94clKgGngXcA60FycyYHOgf8AJwHwvyiXdg8nG0+8YgkfbMy33MZ1p6KPOAs8EzRW9WqDVWrTTqe17RspyzvTBL34iDo6G53SXf95YLLsxnWZ0AgLxz3zff6ix8CR3fJ9UpDlYnxI+7IyNO26+6zbNvF2vnJs7xTtdp+Va2OxmG4buI4H64mUAd+zSuSxL+9S0W1Oloea76CZaV71NxSyoBjYywLEoNl4nRvND3ZqLZax3rtzhXt+ys5GMH8UQqkn6OT+ZyIEi8jUfNLKUlSLqMnx9D7J7L/OLrZJHFd1Nwisld8xLeQs5NkxXCgWMLlZvOwJSSiwoBu1NEzkwTDVdrGoa1h1VFE9RFRQ1KrpWTiI76FfAn2ASE6Xkh803bdenocyyIeqpKMN9jWMXGoeWuiyqmnRnlhXxk/DAlsm3hqHOOVEfXiKxgFsuOqqEaqq/8suYjHmmwHmhHL4qPDk7z75GOMeoq/17c5e3WBy8s+vVKJSqOOu/TvAEN3/U4O9jlRtD9P5Hheo598PJfIsbGShBNP7OPjQxMcrJeZqCiOt4b5/KUpDtfLhDomKZdAubswcjZl53rXTvaye5Iqcl3CxFBVNsoYau7u+/1Ga5gRZWOZhNiyMI5zF0ZmI8XOIPDJgNQYpJJjY9gM9V07g9gQGzA7hQ/G3A2XmZ114f9p4ji9yVJlBCGe49DVhtmtkOsr/i7nL/9qs9jTadE4cYKldXbUuFfg2ZBi+CfrwqklUbTmKFVLFUUaZ7tHuVLmxnrA6Z9neXWsxtHxIb6bXeXGZsDtrZBKuYS1sgnJTjCSMFwtEC2orL0Paj/a6i46lcoUWSjUnTbmwBS65PLnesCcH/Ht/AY9HePHBrfioXoBankNg+ljFGfTHxK6i/k3uttti6rUYWYSO4pwZxdQYYRV9tg0Fh2d0LUVdqmE2tjCnV9MD6Xl8kbRmu52OwWii6LoVqZqcJ96nc61Sqt1TG66kLnzS5RuL2C8EmqoAraThtX2tyEM06KJZh7HGKODzvK1Aolg3+pXnUzGQckkQbgVtDtXMCbNrrQZPd3CDkKczhpOexlndR0rCFMVQiJ7xScOgq18bWXYg+4t4/dCNlV3Quj7K/6dO5ekd/VbUjTdYi+TcEkU5ICF5Qv90Z4ffOezBjsYfOLoLyxeUrVaU9WqMvgalu1UpIBNHG/HYbiqu/7SHjkRu5lhUiSS+3NmrykrQPcAu5fdzLCC/nqxM2wCnwLf53P2CCY+4isjXLAGttdXkIzjL4CfgPeBgw/JcwP46lE+t/omDp9k3f014GVgOvd1IyeeB64Cv2QdZm8D/gOkV87XV2/tuwAAAABJRU5ErkJggg=='
let data = [{
        name: "??????",
        value: [116.24, 39.55, 100],
        label: {
            position: [15, -5],
        },
        symbolSize: 15,
        symbol: effectScattersymbol
    },
    {
        name: "??????",
        value: [114.271522, 22.753644],
        label: {
            position: [15, 10],
        },
        symbolSize: 15,
        symbol: effectScattersymbol
    },
    {
        name: "??????",
        value: [106.54, 29.59],
        label: {
            position: [-25, 25],
        },
        symbolSize: 15,
        symbol: effectScattersymbol
    },
    {
        name: "??????",
        value: [118.78, 32.04],
        label: {
            position: [10, -20],
        },
        symbolSize: 15,
        symbol: effectScattersymbol
    },
    {
        name: "??????",
        value: [121.445, 31.213],
        label: {
            position: [15, 0],
        },
        symbolSize: 8,
        symbol: 'circle'
    },
    {
        name: "??????",
        value: [108.969, 34.285],
        label: {
            position: [-15, -30],
        },
        symbolSize: 8,
        symbol: 'circle'
    },
    {
        name: "??????",
        value: [112.065, 21.948],
        label: {
            position: [-45, 0],
        },
        symbolSize: 8,
        symbol: 'circle'
    },
    {
        name: "??????",
        value: [104.071, 30.67],
        label: {
            position: [-22, -25],
        },
        symbolSize: 8,
        symbol: 'circle'
    },


];

let LableData = [{
        name: "??????",
        value: [122.24, 39.0],
        lable: [10, 1]
    },
    /* {
         name: "??????",
         value: [116.271522, 20.753644],
         lable: [10, 1]
     },*/
    {
        name: "??????",
        value: [100.54, 27.0],
        lable: [10, 1]
    },
    {
        name: "??????",
        value: [124.4, 32.5],
        lable: [10, 1]
    },
    {
        name: "??????",
        value: [120.3, 21.5],
        lable: [10, 1]
    },
];

option = {
    backgroundColor: '#000f1e',
    xAxis: [],
    yAxis: [],
    grid: [],
    geo: {
        map: 'china',
        aspectScale: 0.85,
        layoutCenter: ["50%", "50%"], //????????????
        layoutSize: '140%',
        itemStyle: {
            normal: {
                shadowColor: '#276fce',
                shadowOffsetX: 0,
                shadowOffsetY: 15,
                opacity: 0.5,
            },
            emphasis: {
                areaColor: '#276fce',

            }
        },
        regions: [{
            name: '????????????',
            itemStyle: {
                areaColor: 'rgba(0, 10, 52, 1)',

                borderColor: 'rgba(0, 10, 52, 1)',
                normal: {
                    opacity: 0,
                    label: {
                        show: false,
                        color: "#009cc9",
                    }
                },


            },
            label: {
                show: false,
                color: '#FFFFFF',
                fontSize: 12,
            },


        }],

    },
    series: [
        // ????????????
        {
            type: 'map',
            mapType: 'china',
            aspectScale: 0.85,
            layoutCenter: ["50%", "50%"], //????????????
            layoutSize: '140%',
            zoom: 1, //???????????????????????????
            // roam: true, //???????????????????????????
            scaleLimit: { //???????????????????????????
                min: 1,
                max: 2
            },
            itemStyle: {
                normal: {
                    areaColor: '#0c274b',
                    borderColor: '#1cccff',
                    borderWidth: 1.5
                },
                emphasis: {
                    areaColor: '#0c274b',
                    borderColor: '#1cccff',
                    borderWidth: 2,
                    opacity: 1,
                    label: {
                        show: false,
                        color: "#fff"
                    }
                }
            },
        },
        { //???????????????
            name: '??????',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [{
                name: '??????',
                value: [116.24, 41.55, 100],
            }, ],
            symbol: iconRQ,
            symbolSize: 20,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false
                }
            },
        },
        // ???????????????
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            // symbolSize: 8,
            rippleEffect: { //???????????????
                period: 3,
                scale: 5,
                brushType: 'fill',
                color: '#808080'
            },
            label: {
                normal: {
                    show: true,

                    formatter: '{b}',
                    color: '#fff',
                    fontWeight: "bold",
                    fontSize: 18
                }
            },
            data: data,
            itemStyle: { //???????????????
                normal: {
                    show: true,
                    color: '#a9aaab',
                    shadowBlur: 20,
                    // shadowColor: '#808080'
                },
            },

        },
        // ??? ??? ???
        {
            type: 'lines',
            zlevel: 1, //??????????????????????????????????????????
            polyline: true,
            effect: {
                show: true,
                period: 10,
                trailLength: 0.7,
                color: '#fff', //???????????????
                symbol: 'arrow',
                symbolSize: 6
            },
            lineStyle: {
                normal: {
                    color: '#fff', //????????????
                    width: 0.5,
                    curveness: 0.2,
                    shadowColor: '#fff',
                }
            },
            data: [{
                    fromName: "??????",
                    toName: "??????",
                    coords: [
                        [114.271522, 22.753644],
                        [116.24, 39.55],
                    ]
                },
                {

                    fromName: "??????",
                    toName: "??????",
                    coords: [
                        [114.271522, 22.753644],
                        [118.78, 32.04],
                    ]
                },
                {

                    fromName: "??????",
                    toName: "??????",
                    coords: [
                        [106.54, 29.59],
                        [118.78, 32.04],
                    ]
                },
                {

                    fromName: "??????",
                    toName: "??????",
                    coords: [
                        [118.78, 32.04],
                        [116.24, 39.55],
                    ]
                },
                {

                    fromName: "??????",
                    toName: "??????",
                    coords: [
                        [116.24, 39.55],
                        [106.54, 29.59],
                    ]
                },
                {
                    fromName: "??????",
                    toName: "??????",
                    coords: [
                        [114.271522, 22.753644],
                        [106.54, 29.59],
                    ]
                },
                /* {
                     fromName: "??????",
                     toName: "??????",
                     coords: [
                         [108.969, 34.285],
                         [116.24, 39.55, 100],
                     ]
                 },
                 {
                     fromName: "??????",
                     toName: "??????",
                     coords: [
                         [108.969, 34.285],
                         [104.071,30.67],
                     ]
                 },
                 {
                     fromName: "??????",
                     toName: "??????",
                     coords: [
                         [106.54, 29.59],
                         [104.071,30.67],
                     ]
                 },
                 {
                     fromName: "??????",
                     toName: "??????",
                     coords: [
                         [112.065,21.948],
                         [114.271522, 22.753644],
                     ]
                 },
                 {
                     fromName: "??????",
                     toName: "??????",
                     coords: [
                         [112.065,21.948],
                         [106.54, 29.59],
                     ]
                 },
                 {
                     fromName: "??????",
                     toName: "??????",
                     coords: [
                         [121.445,31.213],
                         [114.271522, 22.753644],
                     ]
                 },
                 {
                     fromName: "??????",
                     toName: "??????",
                     coords: [
                         [121.445,31.213],
                         [118.78, 32.04],
                     ]
                 },
                 {
                     fromName: "??????",
                     toName: "??????",
                     coords: [
                         [114.271522, 22.753644],
                         [108.969, 34.285],
                     ]
                 },*/
            ],

        },

        { //lable
            name: 'lable',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin',
            symbolSize: [50, 20],
            hoverAnimation: true,
            zlevel: 2,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: "#ffe500",
                        fontSize: 16,
                        fontWeight: 'bold',
                        lineHeight: 15,

                    },
                    formatter: function(params) {

                        return params.data.lable[0] + "G" + '/' + params.data.lable[1] + "G"
                    }
                }
            },

            itemStyle: {
                normal: {
                    color: 'transparent', //????????????
                    opacity: 1,

                }
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            data: LableData,


        },

    ]
};

myChart.on('mouseover', function(params) {
    let option = myChart.getOption();

    if (params.name == '??????') {
        option.series[2].data[1].symbolSize = 50;
        // option.series[2].data[1].symbol = effectScattersymbol;
        option.series[2].data[1].symbolRotate = 60;
        myChart.setOption(option);

    } else if (params.name == '??????') {
        option.series[2].data[0].symbolSize = 50;
        option.series[2].data[1].symbolRotate = 60;
        myChart.setOption(option);

    } else if (params.name == '??????') {
        option.series[2].data[3].symbolSize = 50;
        myChart.setOption(option);

    } else if (params.name == '??????') {
        option.series[2].data[2].symbolSize = 50;
        myChart.setOption(option);

    }
});
myChart.on('mouseout', function(params) {
    let option = myChart.getOption();
    for (let i = 0; i < 4; i++) {
        if (option.series[2].data[i].symbolSize == 50) {
            option.series[2].data[i].symbolSize = 15;
            // option.series[2].data[1].symbol = 'circle'
        }
    }
    myChart.setOption(option);

});

 myChart.on('dblclick', function (params) {

        if (params.name == "??????") {
            window.location.href='http://192.168.2.122:8082/';
        }else  if (params.name == "??????") {

            window.location.href='http://113.105.80.199:8012';
        }else  if (params.name == "??????") {

            window.location.href='http://113.105.80.199:8012';
        }else  if (params.name == "??????") {

            window.location.href='http://113.105.80.199:8012';
        }else  if (params.name == "??????") {

            window.location.href='http://113.105.80.199:8012';
        }else  if (params.name == "??????") {

            window.location.href='http://113.105.80.199:8012';
        }else  if (params.name == "??????") {

            window.location.href='http://113.105.80.199:8012';
        }else  if (params.name == "??????") {

            window.location.href='http://113.105.80.199:8012';
        }

    });
    myChart.on('click', function (params) {
        let option = ChartMap.getOption();
        for(let i=0;i<4;i++){
            if (option.series[2].data[i].symbolSize == 50) {
                option.series[2].data[i].symbolSize = 15;
                // option.series[2].data[1].symbol = 'circle'
            }
        }
        myChart.setOption(option);
        if (params.name == '??????') {
            option.series[2].data[1].symbolSize = 50;
            // option.series[2].data[1].symbol = effectScattersymbol;
            option.series[2].data[1].symbolRotate = 60;
            myChart.setOption(option);

        } else if (params.name == '??????') {
            option.series[2].data[0].symbolSize = 50;
            option.series[2].data[1].symbolRotate = 60;
            myChart.setOption(option);

        } else if (params.name == '??????') {
            option.series[2].data[3].symbolSize = 50;
            myChart.setOption(option);

        } else if (params.name == '??????') {
            option.series[2].data[2].symbolSize = 50;
            myChart.setOption(option);

        }
        

    });

setInMap()

function setInMap() {
    /** ?????????????????? */
    setIntervalMap = setInterval(function() {
        let option = myChart.getOption();
        for (let i = 0; i < option.series[4].data.length; i++) {
            option.series[4].data[i].lable[1] = getRandom(10, 100, 0);
            option.series[4].data[i].lable[0] = getRandom(1, 10, 0);
        }
        myChart.setOption(option);

    }, 10000);
}

function getRandom(start, end, fixed) {
    let differ = end - start;
    let random = Math.random();
    return (start + differ * random).toFixed(fixed)
}