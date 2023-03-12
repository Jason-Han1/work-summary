var data = [];
for (let i = 0; i < 8; ++i) {
    data.push(Math.round(Math.random() * 100));
}
var bg1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDQ3NDI0QTJENkVFMTFFQUJERjNCODFBQTEzNUFFNTYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDQ3NDI0QTFENkVFMTFFQUJERjNCODFBQTEzNUFFNTYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Qzk3QkIwOEQ5RkY1MTFFQThFMzVDNjE0ODZGMUNGRDgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Qzk3QkIwOEU5RkY1MTFFQThFMzVDNjE0ODZGMUNGRDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7n5CpxAAAAJUlEQVR42mJg+P/fF4gZYJgRzGBg8GWAgM0wGYQqZM5/IAYIMACSthzOFsmOvAAAAABJRU5ErkJggg==';
var back1 = new Image();
back1.src = bg1;
option = {
    title: [{
        text: 'Design elements✍',
        x: '50%',
        y: 30,
        textAlign: 'center',
        textStyle: {
            align: 'center',
            color: '#707b90',
            fontSize: 30,
            fontWeight: '100',
        },
    }],
    tooltip: {},
    legend: {show: false,},
    xAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        axisLine: {
            lineStyle: {
                color: '#79a5a5',
                width: '5',
            }
        },
        axisTick: {
            alignWithLabel: true
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#79a5a5'
            }
        },
    },
    yAxis: {
        type: 'value',
        name: '',
        splitLine: {
            lineStyle: {
                color: '#79a5a5'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#79a5a5',
            }
        },
        axisLine: {
            lineStyle: {
                color: '#79a5a5',
            }
        },
        axisLabel: {
            show: true,
            formatter: '{value} 吨',
            textStyle: {
                color: '#79a5a5',
            }
        },
        min: 0,
        // max: 100,
    },
    grid: {
        left: 15,
        bottom: 30,
        top: 100,
        right: 30,
        containLabel: true
    },
    series: [{
        name: 'H',
        data:data,
        type: 'line',
        symbol:'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAEdCAYAAADuAZ5NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3YjI2MDY0Zi1hMzc1LWNkNGMtOTY0OC0wOGQ3YWM4OTRjNmQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUJEQjZDODQwMDk5MTFFQkI5Q0RBODU4RUIzQzYyRDciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUJEQjZDODMwMDk5MTFFQkI5Q0RBODU4RUIzQzYyRDciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQyYWFjNjk3LTQ2MDAtZmY0ZC05OWU0LTVlOThkYzA1N2I3MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3YjI2MDY0Zi1hMzc1LWNkNGMtOTY0OC0wOGQ3YWM4OTRjNmQiLz4gPC9y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',
        symbolSize: [30,50],
        symbolOffset: ['0', '25'],
        symbolRotate: 0,
        label: {
            normal: {
                show: true
            }
        },
        lineStyle: {
            color: '#4bfffc',
            shadowColor: 'rgba(0,0,0,0.3)',
            shadowBlur: 2,
            shadowOffsetX:5,
            shadowOffsetY:5,
        },
        itemStyle: {
            color: ({
                data
            }) => {
                if (data <= 60) {
                    return '#f00 '
                }
                return '#4bfffc'
            }
        },
        markLine: {
            symbol: 'none',
            data: [
                [{
                    value: 60,
                    lineStyle: {
                        color: '#80e000',
                    },
                    label: {
                        color: '#e7fd9b',
                        textShadowColor: '#37a300',
                        textShadowBlur: '0',
                        textShadowOffsetX: 1,
                        textShadowOffsetY: 1,
                        position: 'middle',
                        formatter: '{c} %',
                        backgroundColor: '#80e000',
                        shadowColor: 'rgba(0,0,0,0.3)',
                        shadowBlur: 1,
                        shadowOffsetX:2,
                        shadowOffsetY:2,
                        padding: 5,
                        borderRadius: 5
                    },
                    coord: ['A', 60]
                }, {
                    coord: ['H', 60]
                }]
            ]
        },
        areaStyle: {
            normal: {
                color: {
                    image: back1,
                    repeat: 'repeat'
                },
            }
        },
    }]
};
function run () {
    var data = option.series[0].data;
    for (var i = 0; i < data.length; ++i) {
        if (Math.random() > 10) {
            data[i] += Math.round(Math.random() * 200);
        }
        else {
            data[i] += Math.round(Math.random() * 100);
        }
    }
    myChart.setOption(option);
}

setTimeout(function() {
    run();
}, 0);
setInterval(function () {
    run();
}, 3000);
const backImg = '/asset/get/s/data-1637570029671-qBA69ug7N.png';
myChart._dom.style.backgroundImage = "url('" + backImg + "')";