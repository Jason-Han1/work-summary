const uploadedDataURL = '/asset/get/s/data-1635390802457-HRSoVX4EN.json';

const symbolPass =
    'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM0MjAwNDAzNDA1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1MDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDEwMjRDMjI5LjI0OCAxMDI0IDAgNzk0Ljc1MiAwIDUxMlMyMjkuMjQ4IDAgNTEyIDBzNTEyIDIyOS4yNDggNTEyIDUxMi0yMjkuMjQ4IDUxMi01MTIgNTEyeiBtLTExNC4xNzYtMzEwLjk1NDY2N2E1My4zMzMzMzMgNTMuMzMzMzMzIDAgMCAwIDc1LjQzNDY2NyAwbDMyMy4zMjgtMzIzLjMyOGE1My4zMzMzMzMgNTMuMzMzMzMzIDAgMSAwLTc1LjQzNDY2Ny03NS40MzQ2NjZsLTI4Ny45MTQ2NjcgMjgzLjMwNjY2Ni0xMjguODUzMzMzLTEyOC44NTMzMzNhNTMuMzMzMzMzIDUzLjMzMzMzMyAwIDEgMC03NS40MzQ2NjcgNzUuNDM0NjY3bDE2OC44NzQ2NjcgMTY4Ljg3NDY2NnoiIGZpbGw9IiMxYWZhMjkiIHAtaWQ9IjI1MDEiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guNzc4MTA2OS4wLmkwIiBjbGFzcz0iIj48L3BhdGg+PC9zdmc+';
const symbolUp =
    'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM0NTI4NTM3NTE4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyNDQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDIwLjQ4Yy0yNzEuNDI4MjY2NjcgMC00OTEuNTIgMjIwLjA5MTczMzMzLTQ5MS41MiA0OTEuNTJzMjIwLjA5MTczMzMzIDQ5MS41MiA0OTEuNTIgNDkxLjUyIDQ5MS41Mi0yMjAuMDkxNzMzMzMgNDkxLjUyLTQ5MS41Mi0yMjAuMDkxNzMzMzMtNDkxLjUyLTQ5MS41Mi00OTEuNTJ6IG0yMjIuODIyNCA0NDcuODI5MzMzMzNjLTguNzM4MTMzMzMgOC43MzgxMzMzMy0xOS42NjA4IDEyLjU2MTA2NjY3LTMxLjEyOTYgMTIuNTYxMDY2NjctMTAuOTIyNjY2NjcgMC0yMi4zOTE0NjY2Ny00LjM2OTA2NjY3LTMxLjEyOTYtMTIuNTYxMDY2NjdMNTU1LjY5MDY2NjY3IDM1MC44OTA2NjY2N3Y0MjguMTY4NTMzMzNjMCAyNC4wMjk4NjY2Ny0xOS42NjA4IDQzLjY5MDY2NjY3LTQzLjY5MDY2NjY3IDQzLjY5MDY2NjY3cy00My42OTA2NjY2Ny0xOS42NjA4LTQzLjY5MDY2NjY3LTQzLjY5MDY2NjY3VjM1MC44OTA2NjY2N0wzNTAuODkwNjY2NjcgNDY4LjMwOTMzMzMzYy0xNi45MzAxMzMzMyAxNi45MzAxMzMzMy00NC43ODI5MzMzMyAxNi45MzAxMzMzMy02MS43MTMwNjY2NyAwLTE2LjkzMDEzMzMzLTE2LjkzMDEzMzMzLTE2LjkzMDEzMzMzLTQ0Ljc4MjkzMzMzIDAtNjEuNzEzMDY2NjZsMTg3LjMyMzczMzMzLTE4Ni43Nzc2YzcuNjQ1ODY2NjctMTEuNDY4OCAyMC43NTMwNjY2Ny0xOC41Njg1MzMzMyAzNi4wNDQ4LTE4LjU2ODUzMzM0IDE0Ljc0NTYgMCAyNy44NTI4IDcuNjQ1ODY2NjcgMzYuMDQ0OCAxOC41Njg1MzMzNEw3MzUuOTE0NjY2NjcgNDA2LjU5NjI2NjY3YzE2LjM4NCAxNi45MzAxMzMzMyAxNi4zODQgNDQuMjM2OC0xLjA5MjI2NjY3IDYxLjcxMzA2NjY2eiIgZmlsbD0iI0U1REUxRSIgcC1pZD0iMTI0NSI+PC9wYXRoPjwvc3ZnPg==';
const symbolDown =
    'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM0NTI4NDk3NzE2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExMDIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDEwMDMuNTJjMjcxLjQyODI2NjY3IDAgNDkxLjUyLTIyMC4wOTE3MzMzMyA0OTEuNTItNDkxLjUycy0yMjAuMDkxNzMzMzMtNDkxLjUyLTQ5MS41Mi00OTEuNTItNDkxLjUyIDIyMC4wOTE3MzMzMy00OTEuNTIgNDkxLjUyIDIyMC4wOTE3MzMzMyA0OTEuNTIgNDkxLjUyIDQ5MS41MnogbS0yMjIuODIyNC00NDcuODI5MzMzMzNjOC43MzgxMzMzMy04LjczODEzMzMzIDE5LjY2MDgwMDAxLTEyLjU2MTA2NjY3IDMxLjEyOTYtMTIuNTYxMDY2NjcgMTAuOTIyNjY2NjcgMCAyMi4zOTE0NjY2NyA0LjM2OTA2NjY4IDMxLjEyOTYgMTIuNTYxMDY2NjdMNDY4LjMwOTMzMzMzIDY3My4xMDkzMzMzM2wwLTQyOC4xNjg1MzMzM2MwLTI0LjAyOTg2NjY3IDE5LjY2MDgtNDMuNjkwNjY2NjcgNDMuNjkwNjY2NjctNDMuNjkwNjY2NjdzNDMuNjkwNjY2NjcgMTkuNjYwOCA0My42OTA2NjY2NyA0My42OTA2NjY2N0w1NTUuNjkwNjY2NjcgNjczLjEwOTMzMzMzIDY3My4xMDkzMzMzMyA1NTUuNjkwNjY2NjdjMTYuOTMwMTMzMzMtMTYuOTMwMTMzMzMgNDQuNzgyOTMzMzMtMTYuOTMwMTMzMzMgNjEuNzEzMDY2NjcgMCAxNi45MzAxMzMzMyAxNi45MzAxMzMzMyAxNi45MzAxMzMzMyA0NC43ODI5MzMzMyAwIDYxLjcxMzA2NjY2bC0xODcuMzIzNzMzMzMgMTg2Ljc3NzZjLTcuNjQ1ODY2NjcgMTEuNDY4OC0yMC43NTMwNjY2NyAxOC41Njg1MzMzMy0zNi4wNDQ4IDE4LjU2ODUzMzM0LTE0Ljc0NTYgMC0yNy44NTI4LTcuNjQ1ODY2NjctMzYuMDQ0OC0xOC41Njg1MzMzNEwyODguMDg1MzMzMzMgNjE3LjQwMzczMzMzYy0xNi4zODQtMTYuOTMwMTMzMzMtMTYuMzg0LTQ0LjIzNjggMS4wOTIyNjY2Ny02MS43MTMwNjY2NnoiIGZpbGw9IiMzOUE1REQiIHAtaWQ9IjExMDMiPjwvcGF0aD48L3N2Zz4=';

// AQI ??????
const AQI_LEVELS = [
  {
    icon: 'k1',
    label: '???',
    otherName: '??????',
    value: 1,
    min: 0,
    max: 50,
    proposal: '????????????????????????????????????????????????',
    influence: '???????????????????????????',
    color: '#00E500',
    lightColor: '#D2F5A5',
  },
  {
    icon: 'k2',
    label: '???',
    otherName: '??????',
    value: 2,
    min: 51,
    max: 100,
    proposal: '???????????????????????????????????????????????????????????????????????????????????????????????????',
    influence: '????????????????????????????????????????????????',
    color: '#FFFF00',
    lightColor: '#EBEBD8',
  },
  {
    icon: 'k3',
    label: '??????',
    otherName: '??????',
    value: 3,
    min: 101,
    max: 150,
    proposal: '??????????????????????????????????????????????????????????????????',
    influence: '??????????????????????????????????????????????????????????????????????????????????????????????????????',
    color: '#FF7E00',
    lightColor: '#F2E1C7',
  },
  {
    icon: 'k4',
    label: '??????',
    otherName: '??????',
    value: 4,
    min: 151,
    max: 200,
    proposal: '???????????????????????????????????????????????????????????????????????????????????????',
    influence: '??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
    color: '#FE0000',
    lightColor: '#F3D3D3',
  },
  {
    icon: 'k5',
    label: '??????',
    otherName: '??????',
    value: 5,
    min: 201,
    max: 300,
    proposal: '???????????????????????????????????????????????????????????????????????????????????????????????????',
    influence: '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
    color: '#99004C',
    lightColor: '#E5D2ED',
  },
  {
    icon: 'k6',
    label: '??????',
    otherName: '??????',
    value: 6,
    min: 301,
    max: '+',
    proposal: '????????????????????????????????????????????????????????????????????????????????????',
    influence: '???????????????????????????????????????????????????????????????????????????????????????????????????',
    color: '#7E0022',
    lightColor: '#F3CBD7',
  },
];

/**
 * @description ??????AQI??????
 * @params {number} value
 */
//  ??????AQI??????
const getLevel = (value) => {
    let index = 0;
    if (!value || value <= 50) index = 0;
    if (value > 50 && value <= 100) index = 1;
    if (value > 100 && value <= 150) index = 2;
    if (value > 150 && value <= 200) index = 3;
    if (value > 200 && value <= 300) index = 4;
    if (value > 300) index = 5;
    return { index, ...AQI_LEVELS[index] };
};

// ????????????????????????
const colorRange = (startColor, endColor) => ({
    type: 'linear',
    x: -0.33,
    y: 0.5,
    colorStops: [
        { offset: 0, color: startColor }, // 0% ????????????
        { offset: 0.5, color: startColor },
        { offset: 0.5, color: endColor },
        { offset: 1, color: endColor }, // 100% ????????????
    ],
    global: false, // ????????? false
});

// ????????????
const getTrend = (history, forecast) => {
    if (history === null || forecast === null) return '';
    const historyLevel = getLevel(history);
    const forecastLevel = getLevel(forecast);
    if (historyLevel.label === forecastLevel.label) return '??????';
    return history < forecast ? '??????' : '??????';
};

// ????????????????????????
const getSymbol = (history, forecast) => {
    const trend = getTrend(history, forecast);
    if (trend === '??????') return symbolPass;
    if (trend === '??????') return symbolUp;
    if (trend === '??????') return symbolDown;
    return '';
};

// ????????????????????????
const getTooltipRow = (params) => {
    return `
  <div style="display: flex; justify-content: space-between; min-width: 80px; padding-top: 3px;">
    <span style="${params.marker ? '' : 'padding-left: 18px'}">${params.marker || ''}</span>
    <span>${params.seriesName} ${params.value[2] || '-'}</span>
    <span style="padding-left: 15px">${params.value[1] ? '????????????' : '????????????'}</span>
  </div>`;
};

/**
 * @description ?????????????????????????????? echarts ?????????
 * @param {array} history ????????????
 * @param {array} forecast ????????????
 * @param {boolean} diff ?????????AQI??????????????????
 * @returns echartsData ??????echarts????????????
 */
const transformData = (history, forecast, isDiff = true) => {
    const xAxisData = [...new Set([...Object.keys(history)])].sort();
    // const xAxisData = [...new Set([...Object.keys(history), ...Object.keys(forecast)])].sort();
    const yAxisData = ['????????????', '????????????'];

    let seriesDatas = [];
    const seriesData = [];
    const markPointData = [];

    for (let i = 0; i < xAxisData.length; i++) {
        for (let j = 0; j < yAxisData.length; j++) {
            const key = xAxisData[i];
            const historyValue = (history[key] || {}).aqi || null;
            const forecastValue = (forecast[key] || {}).aqi || null;
            seriesData.push([i, j, j ? historyValue : forecastValue]);
            if (j) {
                const symbol = getSymbol(historyValue, forecastValue);
                markPointData.push({
                    show: Boolean(symbol),
                    xAxis: i,
                    yAxis: 1,
                    symbolSize: 20,
                    symbol,
                });
            }
        }
    }
    // ???AQI??????????????????
    if (isDiff) {
        seriesDatas = AQI_LEVELS.map(({ label, min, max, color }) => {
            const data = seriesData.filter(([, , value]) => {
                if (max === '+') return value >= min;
                return value >= min && value <= max;
            });
            return { name: label, data, color };
        });
    }

    return { xAxisData, yAxisData, seriesData, seriesDatas, markPointData };
};

$.getJSON(uploadedDataURL, (data) => {
    const { history, forecast } = data;
    console.log(data);
    const { xAxisData, yAxisData, seriesDatas, markPointData } = transformData(history || {}, forecast || {});
    const myOption = {
        title: {
            text: '?????????????????????????????????',
            left: 'center',
        },
        grid: {
            height: 80,
            top: 70,
            left: 58,
            right: 10,
            bottom: 50,
        },
        tooltip: {
            position: 'top',
            trigger: 'axis',
            formatter: (params) => {
                if (params.length !== 2) return '';
                const [paramsOne, paramsTwo] = params;
                const result = [];
                const dateStr = (paramsTwo || {}).axisValue || (paramsOne || {}).axisValue;
                if (dateStr) result.push(dateStr);
                const trendStr = paramsOne.value[1]
                    ? getTrend(paramsOne.value[2], paramsTwo.value[2])
                    : getTrend(paramsTwo.value[2], paramsOne.value[2]);
                if (trendStr) result.push(`&nbsp;&nbsp;&nbsp;&nbsp; ${trendStr}`);
                if (paramsOne.value[1]) {
                    if (paramsOne) result.push(getTooltipRow(paramsOne));
                    if (paramsTwo) result.push(getTooltipRow(paramsTwo));
                } else {
                    if (paramsTwo) result.push(getTooltipRow(paramsTwo));
                    if (paramsOne) result.push(getTooltipRow(paramsOne));
                }
                return result.join('');
            },
        },
        xAxis: {
            type: 'category',
            data: xAxisData,
            splitArea: {
                show: true,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        yAxis: [
            {
                type: 'category',
                data: yAxisData,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
            },
            {
                type: 'value',
            },
        ],
        legend: {
            show: true,
            icon: 'circle',
            bottom: 0,
        },
        visualMap: [
            {
                show: false,
                type: 'piecewise',
                pieces: [
                    ...AQI_LEVELS.map((v) => ({
                        lt: v.max,
                        gte: v.min,
                        color: v.color,
                    })),
                    {
                        value: AQI_LEVELS[0].max,
                        color: colorRange(AQI_LEVELS[0].color, AQI_LEVELS[1].color),
                    },
                    {
                        value: AQI_LEVELS[1].max,
                        color: colorRange(AQI_LEVELS[1].color, AQI_LEVELS[2].color),
                    },
                    {
                        value: AQI_LEVELS[2].max,
                        color: colorRange(AQI_LEVELS[2].color, AQI_LEVELS[3].color),
                    },
                    {
                        value: AQI_LEVELS[3].max,
                        color: colorRange(AQI_LEVELS[3].color, AQI_LEVELS[4].color),
                    },
                ],
            },
        ],
        series: [
            ...seriesDatas.map(({ name, data, color }) => ({
                name,
                data,
                type: 'heatmap',
                label: {
                    show: true,
                },
                itemStyle: {
                    color,
                    borderWidth: 5,
                    borderColor: '#fff',
                },
            })),
            {
                type: 'line',
                color: '#41C15A',
                markPoint: {
                    symbolOffset: [0, -35],
                    data: markPointData,
                },
            },
        ],
    };
    myChart.setOption(myOption);
});
