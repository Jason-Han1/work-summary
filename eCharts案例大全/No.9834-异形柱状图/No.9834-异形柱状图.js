var barImg = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAoCAYAAACb3CikAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE5RTdGNkVGRUQ1NzExRTlBNjQ3QzU0QUMxNjMzOEEzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE5RTdGNkYwRUQ1NzExRTlBNjQ3QzU0QUMxNjMzOEEzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTlFN0Y2RURFRDU3MTFFOUE2NDdDNTRBQzE2MzM4QTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTlFN0Y2RUVFRDU3MTFFOUE2NDdDNTRBQzE2MzM4QTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5DN6hBAAAHx0lEQVR42rSXe2xb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';
var data = [2, 12, 16, 4, 10, 50, 23];
var bgData = [];
for (var i = 0; i < data.length; i++) {
    bgData.push(1)
}
option = {
    backgroundColor:'#fff',
    grid: {
        left: 100,
        right: 100,
        top:100,
        bottom: 100
    },
    xAxis: {
        type: 'value',
        min: 0,
        max: 100,
        splitNumber: 10,
        axisLabel: {
            color: '#999',
            formatter: function(name) {
                return name + '%'
            }
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#999'
            }
        }
    },
    yAxis: [{
        type: "category",
        inverse: false,
        data:  ['4月', '5月', '6月', '7月', '8月', '9月', '10月'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            margin: 35,
            textStyle: {
                color: "#999",
                fontSize: 14,
            }

        }
    }],
    series: [{
        z: 4,
        type: "pictorialBar",
        symbolSize: ['30', '30'],
        symbolRepeat: "fixed",
        symbol: barImg,
        itemStyle: {
            opacity: 0.5
        },
        data: bgData,
    }, {
        z: 6,
        type: "pictorialBar",
        symbolSize: ['30', '30'],
        animation: true,
        symbol: barImg,
        symbolRepeat: "fixed",
        symbolClip: true,
        symbolPosition: "start",
        symbolOffset: [0, 0],
        itemStyle: {
            opacity: 1
        },
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: '#ec3d20',
                    fontSize: 14,
                    fontWeight: 500

                },
                formatter: function(obj) {
                    return obj.value + '%'
                },
                position: "right",
                offset: [35, 0]

            }
        },
        data: data
    }]
}