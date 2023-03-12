let bgColor = "#fff";
let color = [
    "#0c2270",
    "#06f3ff",
    "#FFC005",
    "#FF515A",
    "#8B5CFF",
    "#00CA69"
];
let echartData = [{
        name: "1",
        value1: 100,
        value2: 233
    },
    {
        name: "2",
        value1: 138,
        value2: 233
    },
    {
        name: "3",
        value1: 350,
        value2: 200
    },
    {
        name: "4",
        value1: 173,
        value2: 180
    },
    {
        name: "5",
        value1: 180,
        value2: 199
    },
    {
        name: "6",
        value1: 150,
        value2: 233
    },
    {
        name: "7",
        value1: 180,
        value2: 210
    },
    {
        name: "8",
        value1: 230,
        value2: 180
    }
];

let xAxisData = echartData.map(v => v.name);
//  ["1", "2", "3", "4", "5", "6", "7", "8"]
let yAxisData1 = echartData.map(v => v.value1);
// [100, 138, 350, 173, 180, 150, 180, 230]
let yAxisData2 = echartData.map(v => v.value2);
// [233, 233, 200, 180, 199, 233, 210, 180]
const hexToRgba = (hex, opacity) => {
    let rgbaColor = "";
    let reg = /^#[\da-f]{6}$/i;
    if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
      "0x" + hex.slice(3, 5)
    )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
    }
    return rgbaColor;
}

option = {
    backgroundColor: bgColor,
    color: color,
    legend: {
      right: 10,
      top: 10,
      show: false
    },
    tooltip: {
        trigger: "axis",
        formatter: function(params) {
            let html = '';
            params.forEach(v => {
                console.log(v)
                html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color[v.componentIndex]};"></span>
                ${v.seriesName}.${v.name}
                <span style="color:${color[v.componentIndex]};font-weight:700;font-size: 18px">${v.value}</span>
                万元`;
            })
            
    

            return html
        },
        extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: '#ffffff',
                shadowColor: 'rgba(225,225,225,1)',
                shadowBlur: 5
            }
        }
    },
    grid: {
        top: 100,
        containLabel: true
    },
    xAxis: [{
        type: "category",
        boundaryGap: false,
        axisLabel: {
            formatter: '{value}月',
            textStyle: {
                 color: "#fdfdfe",
                fontSize: 14,
            }
        },
        axisLine: {
            lineStyle: {
                color: "#3495fc"
            }
        },
        data: xAxisData
    }],
    yAxis: [{
        type: "value",
        name: '人',
        axisLabel: {
            textStyle: {
                color: "#fdfdfe",
                fontSize: 14,
            }
        },
        nameTextStyle: {
            color: "#666",
            fontSize: 12,
            lineHeight: 40
        },
        splitLine: {
            lineStyle: {
                type: "dashed",
                color: "#E9E9E9"
            }
        },
        axisLine: {
            lineStyle: {
                color: "#3495fc"
            }
        },
        axisTick: {
            show: false
        }
    }],
    series: [{
        name: "2018",
        type: "line",
        smooth: true,
        // showSymbol: false,/
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
            normal: {
                 color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    1,
                    0,
                    [{
                            offset: 0,
                            color: 'rgba(12, 34, 112, 0)'
                        },
                        {
                            offset: 1,
                            color: '#06f3ff'
                        }
                    ],
                    false
                ),
               
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    1,
                    0,
                    [{
                            offset: 0,
                            color: 'rgba(12, 34, 112, 0)'
                        },
                        {
                            offset: 1,
                            color: '#06f3ff'
                        }
                    ],
                    false
                ),
                shadowColor: hexToRgba(color[0], 0.1),
                shadowBlur: 10
            }
        },
        data: yAxisData1
    }, ]
};