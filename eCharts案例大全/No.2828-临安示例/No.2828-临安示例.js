var uploadedDataURL = "/asset/get/s/data-1625625929822-jM7vQZ5f2.json";




function showProvince() {
    var name = 'bj';

    // myChart.showLoading();
    
    

    $.get(uploadedDataURL, function(geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            backgroundColor: '#044060',
            title: {
                text: "临安示例",
            
                left: 'center',
                textStyle: {
                    color: '#ffffff'
                }
            },
            visualMap: {
                min: 0,
                max: 45000,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                inRange:{
                   color: ['yellow','lightskyblue', 'orangered']
                },
                textStyle: {
                    color: '#ffffff'
                }
            },
            series: [{
                type: 'map',
                mapType: name,
                label: {
                    normal: {
                        show: true,
                        color: '#ffffff'
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {

                    normal: {
                        borderColor: '#6eaadd',
                        areaColor: '#1083e2',
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                },
                animation: false,
                data: [{
                            name: '平安街道',
                            value: 18163
                        }, {
                            name: '文昌街道',
                            value: 22036               
                        }, {
                            name: '崮云湖街道',
                            value: 39825
                        }, {
                            name: '归德镇',
                            value: 28405
                        }, {
                            name: '张夏镇',
                            value: 15212
                        }, {
                            name: '五峰山街道',
                            value: 26681
                        }, {
                            name: '孝里镇',
                            value: 11161,
                        }, {
                            name: '双泉镇',
                            value: 20687
                        }, {
                            name: '马山镇',
                            value: 51488,
                        }, {
                            name: '万德镇',
                            value: 23053
                        }
                    ]
                    // animationDurationUpdate: 1000,
                    // animationEasingUpdate: 'quinticInOut'
            }]
        });
    });
}

var currentIdx = 0;

showProvince();