option = {
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "cross",
            "crossStyle": {
                "color": "#999"
            }
        }
    },
    "legend": {
        "top": 10,
        "data": ["CO", "NO2", "O3", "PM10", "PM2.5", "SO2", "折线的lenged"]
    },
    "xAxis": [{
        "type": "category",
        "data": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        "name": "月份"
    }],
    "yAxis": [{
        "type": "value",
        "name": "μg/m³"
    }, {
        "type": "value",
        "name": "mg/m³"
    }],
    "color": ["#0e9ea9", "#f65eab", "#ffbd6d", "#ab73ce", "#0099fd", "#996b6b", "#1faeea", "#00d4c4", "#785654", "#59b0e3"],
    "series": [{
        "name": "CO",
        "type": "bar",
        "data": [20, 14.9, 70, 23.2, 25.6, 76.7, 135.6, 162.2, 132.6, 20, 6.4, 3.3]
    }, {
        "name": "NO2",
        "type": "bar",
        "data": [2, 41.9, 70, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20, 6.4, 3.3]
    }, {
        "name": "O3",
        "type": "bar",
        "data": [10, 4.9, 70, 23.2, 125.6, 76.7, 135.6, 162.2, 32.6, 20, 6.4, 3.3]
    }, {
        "name": "PM10",
        "type": "bar",
        "data": [120, 1419, 70, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20, 6.4, 3.3]
    }, {
        "name": "PM2.5",
        "type": "bar",
        "data": [80, 14.9, 70, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20, 6.4, 3.3]
    }, {
        "name": "SO2",
        "type": "bar",
        "data": [20, 4.9, 70, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20, 6.4, 3.3]
    }, {
        "name": "line",
        "type": "line",
        "yAxisIndex": 1,
        "data": [3, 5.9, 70, 23.2, 25.6, 8.7, 135.6, 162.2, 32.6, 20, 16.4, 3.3],
        "label": {
            "normal": {
                "show": true,
                "position": "top"
            }
        }
    }]
}