var uploadedDataURL = "/asset/get/s/data-1551157482870-q6hT30rbC.png";
var bgImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAF+CAYAAADNzDlVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAilJREFUeNrs1rENwjAURdEfC0pmQAwBDfuwE8wDDSULIGagTGEcFNHQpfPXseT0V0ryzrA/XzcRsWt3HX2fsd1XSRITc8O2JIn5RZVIdsr87mU54xT0TBL1/Sms2uPd7qPXivvp+PfKpfuGBAkStPxMf7muLXe43FiO5ViO5VjOsAoSxHIsx3Isx3Isx3KGVZAglmM5lmM5lmM5liMFQYJYjuVYjuVYjuVYTpAgQSzHcizHcizHcoZVkCCWYzmWYzmWYzmWM6yCBLEcy7Ecy7Ecy7GcIEGCWI7lWI7lWI7lDKsgQYJYjuVYjuVYjuUMqyBBLMdyLMdyLMdyLGdYBQliOZZjOZZjOZZjOUGCBLEcy7Ecy7EcyxlWQYJYjuVYjuVYjuVYzrAKEsRyLMdyLMdyLMdypCBIEMuxHMuxHMuxnGEVJEgQy7Ecy7Ecy7GcYRUkiOVYjuVYjuVYjuUMqyBBLMdyLMdyLMdyLCdIkCCWYzmWYzmWYznDKkgQy7Ecy7Ecy7EcyxlWQYJYjuVYjuVYjuVYjhQECWI5lmM5lmM5ljOsggQJYjmWYzmWYzmWM6yCBLEcy7Ecy7Ecy7GcYRUkiOVYjuVYjuVYjuUECRLEcizHcizHcixnWAUJYjmWYzmWYzmWYznDKkgQy7Ecy7Ecy7Ecy5GCIEEsx3Isx3Isx3IsJ0iQIJZjOZZjOZZjOcMqSBDLsRzLsRzL9Wy5odZqhwQJWn4+AgwApGqd0LftHcgAAAAASUVORK5CYII=';
var fillImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAF+CAYAAADNzDlVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABFhJREFUeNrs3U+O1DgUgHHblUFzhb7GCCHNtnfMFUasOA9HYEWfAQlpZq6AEOIIdPcFZgMVe5L6Q6pLzQjFLZK2fpZSKbVioQ8n9b68+Dnxz39fXYYYrkIIF+Fxt5the5kagQkHhtepEZhvUCk01tLh3Gul3aZQwovxSwMwn8cfhW74+Lul66jJawgQIEB1QJfDdj1s5ZFvI8NzLsfluByX43KAlmzjKRdyTkYIEJeb6XK5JC7H5bhchculmLmcOASoAqjPGyMEiMtVuFyMhctxOS5X4XKlRC4nDgECBIjLLeVyXSnpqhQux+W43FyXi/Jy4hCgKqC+74wQIC5XkZdLKcvLcTkuV+FyOScuJw4Bmt/MlwPE5WprH4LaBy7H5WpcbvjgcuIQIECAuByXe0iXy4eJtOONXilx2NJh238PIYbpmPP9qvpc7O5YU+r351/KB9hyAl7C3WPO9+vqs3O5hkZocrn9H+PJwdP3Y87h/n9sNX24HKBFgLaesQLiclUul9Q+yMvJy1Xl5bLaB3EIUE3biVzvGSsgLjfb5Yb7ci7H5bhchcvFWLicOAQIECAux+W43P1QXcmpuWuotbyc2gdxCFBF29c+FHk5QFzOfDl5OS63jMsFtQ/iECBAgLgcl+Ny34PqcoMrot+cFkzEWIbtuN9/H0/R/yuyWFGf2zR8vBiLIHa5hTsFE3FGkcWifT4Pey63fqDt9hemsOYWSylGaM2t++P6zWUjS7KNuZGX1pdbO5S83Mqb9eXEIUC1gfV4r2GEAP08IHk5LsfluNzkcsEzVnEIULXLFS4HiMvNdrnh+uFyXI7LVbhcTN7hJQ4BqnU5eTlAXG6+y/XbjstxOS5X4XJ93nA5cQhQrcupYwXE5Wa7XLRWMJfjclUuV6wVLA4BAgSIyy3ncl0p6aoULsfluNxcl4vRM1ZxCBAgQFxuybWC25ov1+Wc2nK543tOj/tpeYxpOz9mzX3GERpd7uI4PWZcGuO8Hf82vSr07n5FfW7TZrPlcuIQoAqgL19+NUKAuFyFyw1xyDPWVbtci9dQY/Pl+o7LiUOA5rdD7cPGCAHicubLcTkut4jLmS8nDgF6CJdT+wCIy3kfK5fjcsu43HA/xOXEIUCVLnffhAYjBIjL/ZjLZevLcTkuV+Vyyfpy4hCgKqCvX58YIUBcbr7Lxd8/vb1u6Gf7hstxuZ/tcp6xikOAAAHicubLPYz2BHk5LsfluJzA+tja7hlrr/YBEJeb63Lx2cd38nJcjstVuFyyvpw4BAgQIC7H5bgcl3u0Lpd77/AShwBVNGuSAOJylS739MNf7blcSv1+uFI+LFmbT5avzbv/gOmY8/2q+lzc+ZWbqvZPK76OS9duvrNfV5/2XG4YMS4nDgECBIjLcbmHdLmGzjh5OS7H5cShxoGsLweIy1W63G/v/+FyXI7LVbic+XLiECBAgLgcl+NyXI7LrcXlYilFHAIEaH77T4ABAKzsRPWz+TQ7AAAAAElFTkSuQmCCgg';
var chartData = [{
        name: '??????',
        value: 800,
        grade: 1
    },
    {
        name: '??????',
        value: 720,
        grade: 2
    },
    {
        name: '??????',
        value: 680,
        grade: 3
    },
    {
        name: '??????',
        value: 520,
        grade: 4
    },
    {
        name: '??????',
        value: 460,
        grade: 5
    },
    {
        name: '??????',
        value: 380,
        grade: 6
    },
    {
        name: '??????',
        value: 320,
        grade: 7
    },
    {
        name: '??????',
        value: 300,
        grade: 8
    },
    {
        name: '??????',
        value: 298,
        grade: 9
    },
];

var bgData = [];
var itemData = [];
// ?????????????????????value,??????????????????
chartData.forEach(function(items, index) {
    itemData.push(items.value);
})
// ???????????????????????????,??????????????????????????????
chartData.forEach(function(items, index) {
    bgData.push({
        name: items.name,
        value: Math.max.apply(null, itemData)
    });
})
// ?????????????????????
var maxValue = Math.max.apply(null, itemData);
// ?????? distance????????????
var scale = 1;
//???????????????
var rich = {
    white: {
        color: "#fff",
        align: 'left',
        fontSize: 10 * scale,
        padding: [0, 0]
    },
};
var option = {
    backgroundColor: '#FFF',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(param) {
            //alert(param.data.grade);
            //alert(JSON.stringify(param));
            var str = "";
            str = param[0].data.name + ":" + param[1].data.value +
                "</br>?????????" + chartData[param[0].dataIndex].grade;
            return str;
        },
    },
    grid: {
        left: '3%',
        right: '6%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: [{
        type: 'category',
        data: (function(data) {
            var arr = [];
            data.forEach(function(items) {
                arr.push(items.name);
            });
            return arr;
        })(chartData),

        boundaryGap: ['20%', '20%'],
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                fontSize: 10 * scale,
                color: '#3fdaff'
            },
            formatter: function(value) {
                if (value != null && value != undefined) {
                    var valueLength = value.length;
                    if (valueLength > 5) {
                        value = value.substring(0, 5) + "...";
                    }
                }
                return value;
            }
        }
    }],
    xAxis: [{
        type: 'value',
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: true,
            inside: true,
            length: 10 * scale,
            lineStyle: {
                color: '#0b5263'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#0b5263',
                fontSize: 10 * scale
            },
            formatter: function(value) {
                if (value != null && value != undefined) {
                    var valueLength = value.length;
                    if (valueLength > 5) {
                        value = value.substring(0, 5) + "...";
                    }
                }
                return value;
            }
        },
    }],
    dataZoom: [ //???x??????????????????
        {
            start: 0, //?????????0
            end: 8, //?????????100
            type: 'slider',
            show: true,
            orient: "vertical",
            //xAxisIndex: [0],
            handleSize: 0, //???????????? ??????2?????????????????????
            width: 15,
            left: 10, //???????????????
            top: 10, //???????????????
            bottom: 30, //???????????????
            handleColor: '#99ADC7', //h?????????????????????
            handleStyle: {
                borderColor: "#99ADC7",
                borderWidth: "0",
                shadowBlur: 0,
                background: "#FFF",
                shadowColor: "#ddd",
            },
            fillerColor: '#99ADC7', //???????????????????????????
            borderColor: "#DBDBDB", //????????????
            backgroundColor: '#FFF', //??????????????????????????????????????????
            showDataShadow: false, //???????????????????????? ??????auto
            showDetail: false, //????????????????????????????????????????????? ??????true
            handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
            filterMode: 'filter',
        },
        //?????????????????????????????????
        {
            type: 'inside',
            show: true,
            //xAxisIndex: [0],
            orient: "vertical",
            start: 0, //?????????1
            end: 8, //?????????100
        },
    ],
    series: [
        //??????
        {
            name: 'bg',
            type: 'pictorialBar',
            barWidth: '45%',
            // barGap: '0%',
            silent: true,
            label: {
                normal: {
                    show: false,
                    position: "top",
                    distance: 20 * scale,
                    formatter: function(params) {
                        var stuNum = 0;
                        chartData.forEach(function(value, index, array) {
                            if (params.name == value.name) {
                                stuNum = value.value;
                            }
                        })
                        return stuNum + '{white| ???}';
                    },
                    textStyle: {
                        color: "#ffc72b",
                        fontSize: 10 * scale
                    },
                    rich: rich
                }
            },
            symbol: 'image://' + bgImg,
            symbolClip: false,
            symbolBoundingData: maxValue,
            symbolSize: ['100%', 20],
            data: bgData,
            "symbolRepeat": "fixed",
        },
        {
            name: '??????',
            type: 'pictorialBar',
            barWidth: '45%',
            barGap: '-100%',
            data: chartData,
            z: 3,
            symbol: 'image://' + fillImg,
            symbolClip: true,
            symbolBoundingData: maxValue,
            symbolSize: ['100%', 20],
            "symbolRepeat": "fixed",
        },
    ]
};