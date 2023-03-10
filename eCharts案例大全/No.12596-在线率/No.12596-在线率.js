option = {
    "tooltip": {
        trigger: 'axis',
        "formatter": "{a}, {b}, {c}%"
    },
    "legend": {
        "data": ["湖北山洪灾害监测预警系统站点在线率"]
    },
    "toolbox": {
        "show": false
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    "xAxis": {
        "type": "category",
        "data": ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06", "01-07", "01-08", "01-09", "01-10", "01-11", "01-12", "01-13", "01-14", "01-15", "01-16", "01-17", "01-18", "01-19", "01-20", "01-21", "01-22", "01-23", "01-24", "01-25", "01-26", "01-27", "01-28", "01-29", "01-30", "01-31", "02-01", "02-02", "02-03", "02-04", "02-05", "02-06", "02-07", "02-08", "02-09", "02-10", "02-11", "02-12", "02-13", "02-14", "02-15", "02-16", "02-17", "02-18", "02-19", "02-20", "02-21", "02-22", "02-23", "02-24", "02-25", "02-26", "02-27", "02-28", "03-01", "03-02", "03-03", "03-04", "03-05", "03-06", "03-07", "03-08", "03-09", "03-10", "03-11", "03-12", "03-13", "03-14", "03-15", "03-16", "03-17", "03-18", "03-19", "03-20", "03-21", "03-22", "03-23", "03-24", "03-25", "03-26", "03-27", "03-28", "03-29", "03-30", "03-31", "04-01", "04-02", "04-03", "04-04", "04-05", "04-06", "04-07", "04-08", "04-09", "04-10", "04-11", "04-12", "04-13", "04-14", "04-15", "04-16", "04-17", "04-18", "04-19", "04-20", "04-21", "04-22", "04-23", "04-24", "04-25", "04-26", "04-27", "04-28", "04-29", "04-30", "05-01", "05-02", "05-03", "05-04", "05-05", "05-06", "05-07", "05-08", "05-09", "05-10", "05-11", "05-12", "05-13", "05-14", "05-15", "05-16", "05-17", "05-18", "05-19", "05-20", "05-21", "05-22", "05-23", "05-24", "05-25", "05-26", "05-27", "05-28", "05-29", "05-30", "05-31", "06-01", "06-02", "06-03", "06-04", "06-05", "06-06", "06-07", "06-08", "06-09", "06-10", "06-11", "06-12", "06-13", "06-14", "06-15", "06-16", "06-17", "06-18", "06-19", "06-20", "06-21", "06-22", "06-23", "06-24", "06-25", "06-26", "06-27", "06-28", "06-29", "06-30", "07-01", "07-02", "07-03", "07-04", "07-05", "07-06", "07-07", "07-08", "07-09", "07-10", "07-11", "07-12", "07-13", "07-14", "07-15", "07-16", "07-17", "07-18", "07-19", "07-20", "07-21", "07-22", "07-23", "07-24", "07-25", "07-26", "07-27", "07-28", "07-29", "07-30", "07-31", "08-01", "08-02", "08-03", "08-04", "08-05", "08-06", "08-07", "08-08", "08-09", "08-10", "08-11", "08-12", "08-13", "08-14", "08-15", "08-16", "08-17", "08-18", "08-19", "08-20", "08-21", "08-22", "08-23", "08-24", "08-25", "08-26", "08-27", "08-28", "08-29", "08-30", "08-31", "09-01", "09-02", "09-03", "09-04", "09-05", "09-06", "09-07", "09-08", "09-09", "09-10", "09-11", "09-12", "09-13", "09-14", "09-15", "09-16", "09-17", "09-18", "09-19", "09-20", "09-21", "09-22", "09-23", "09-24", "09-25", "09-26", "09-27", "09-28", "09-29", "09-30", "10-01", "10-02", "10-03", "10-04", "10-05", "10-06", "10-07", "10-08", "10-09", "10-10", "10-11", "10-12", "10-13", "10-14", "10-15", "10-16", "10-17", "10-18", "10-19", "10-20", "10-21", "10-22", "10-23", "10-24", "10-25", "10-26", "10-27", "10-28", "10-29", "10-30", "10-31", "11-01", "11-02", "11-03", "11-04", "11-05", "11-06", "11-07", "11-08", "11-09", "11-10", "11-11", "11-12", "11-13", "11-14", "11-15", "11-16", "11-17", "11-18", "11-19", "11-20", "11-21", "11-22", "11-23", "11-24", "11-25", "11-26", "11-27", "11-28", "11-29", "11-30", "12-01", "12-02", "12-03", "12-04", "12-05", "12-06", "12-07", "12-08", "12-09", "12-10", "12-11", "12-12", "12-13", "12-14", "12-15", "12-16", "12-17", "12-18", "12-19"],
        "axisLabel": {
            "interval": 0
        }
    },
    "yAxis": {
        "type": "value",
        "axisLabel": {
            "formatter": "{value}%"
        }
    },
    "series": [{
        "name": "湖北山洪灾害监测预警系统站点在线率",
        "type": "line",
        markLine: {
            label:{
                show:true,
                formatter: '{b} {c}%'
            },
            data: [{
                type: 'average',
                name: '平均值'
            }]
        },
        markPoint: {
            label:{
                show:true,
                formatter: '{b} {c}%'
            },
            data: [{
                    type: 'max',
                    name: '最大值'
                },
                {
                    type: 'min',
                    name: '最小值'
                }
            ]
        },
        "itemStyle": {
            "normal": {
                "label": {
                    "show": false,
                    "formatter": "{c}%"
                },
                "labelLine": {
                    "show": true
                }
            }
        },
        "data": [61.38, 70.2, 70.42, 65.52, 62.94, 61.81, 58.98, 65.84, 66.28, 68.86, 66.75, 70.5, 69.67, 67.67, 69.35, 64.82, 68.01, 70.55, 69.06, 67.97, 66.74, 70.73, 72.8, 72.4, 70.91, 69.1, 66.09, 63.55, 71.27, 73.05, 70.87, 69.86, 72.18, 69.21, 64.35, 71.97, 71.78, 69.02, 69.46, 69.24, 68.01, 64.13, 64.39, 63.84, 65.36, 61.3, 64.13, 62.89, 61.33, 62.06, 62.79, 61.55, 68.34, 69.06, 69.13, 67.9, 71.06, 71.42, 69.71, 70.15, 69.25, 67.84, 66.75, 71.94, 71.17, 73.21, 75.53, 73.68, 69.94, 72.19, 74.51, 71.86, 75.82, 76, 72.55, 71.57, 70.3, 69.45, 69.6, 68.34, 74.18, 74.86, 65.78, 59.57, 70.58, 71.86, 71.29, 73.73, 73.87, 73.48, 72.07, 70.95, 72.83, 69.87, 68.62, 68.55, 68.23, 73.26, 72.4, 75.45, 76.53, 77.1, 76.2, 75.2, 75.2, 76.53, 77.28, 76.56, 77.61, 76.68, 72.91, 73.19, 76.36, 77.54, 77.27, 77.81, 76.66, 77.32, 75.08, 71.99, 71.49, 76.18, 74.37, 76.14, 78.83, 77.73, 77.78, 76.7, 76.21, 77.86, 76.07, 78.32, 77.22, 79.63, 80.15, 79.01, 80.35, 81.63, 80.22, 78.35, 80.54, 82.24, 82.66, 83.31, 83.27, 80.78, 81.2, 82.92, 81.41, 82.04, 83.47, 83.05, 80.32, 81.63, 81.71, 80.46, 83.57, 83.81, 81.7, 78.21, 75.83, 80.35, 81.63, 81.7, 80.25, 79.71, 77.67, 77.54, 82.78, 84.09, 84.2, 84.3, 84.33, 81.54, 81.78, 81.6, 83.56, 84.21, 82.53, 81.74, 82.5, 80.75, 81.61, 81.71, 82.12, 84.59, 84.97, 85.07, 83.42, 82.36, 82.78, 82.64, 83.05, 82.36, 82.36, 80.34, 80.45, 81.61, 81.14, 80.76, 81.21, 81.21, 80.31, 83.03, 82.33, 81.92, 81.62, 82.68, 81.92, 81.38, 83.12, 83.36, 83.56, 83.9, 84.24, 85.24, 81.44, 83.7, 83.64, 81.62, 84.01, 85.72, 83.84, 82.4, 85.62, 85.31, 85.34, 84.08, 85.66, 85.04, 82.04, 83.09, 82.46, 84.64, 82.77, 85.29, 83.45, 81.44, 85.52, 85.66, 84.51, 85.78, 84.24, 84.92, 82.6, 85.15, 82.77, 84.64, 85.7, 84.61, 83.59, 82.57, 84.14, 85.03, 84.79, 85.09, 85.03, 82.28, 80.53, 83.94, 82.61, 84.07, 85.2, 85.64, 82.99, 84.79, 82.99, 82.85, 85.06, 83.03, 83.85, 84.7, 84.36, 82.56, 81, 80.08, 77.65, 80.99, 78.4, 77.6, 79.75, 80.32, 79.13, 81.03, 80.93, 78.83, 74.34, 81.68, 82.56, 83.47, 83.84, 80.62, 77.36, 72.81, 78.31, 79.9, 82.38, 82.55, 82.93, 79.26, 75.53, 79.26, 83.57, 83.2, 81.64, 81.5, 79.36, 80.24, 80.96, 79.06, 79.74, 80.89, 80.52, 79.46, 77.02, 82.17, 82.17, 81.96, 81.72, 80.67, 81.38, 81.45, 83.21, 84.27, 81.97, 81.9, 81.63, 78.78, 76.75, 80.54, 83.93, 76.75, 81.9, 81.22, 79.36, 78.27, 77.97, 78.38, 77.91, 75.97, 75.57, 73.47, 71.06, 75.61, 79.43, 79.36, 78.14, 79.06, 75.74, 76.52, 79.19, 79.5, 78.35]
    }]
}