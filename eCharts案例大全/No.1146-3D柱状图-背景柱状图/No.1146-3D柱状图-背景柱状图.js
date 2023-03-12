option = {
    backgroundColor:'#0b2347',
    grid: { left: '2%', right: '2%', bottom: '2%', top: '20%', containLabel: true },
    title: {
        show: true,
        text: '共计{a|418}条',
        top: '5%',
        textAlign: 'left',
        textStyle: {
            color: '#ffffff',
            fontSize: 14,
            rich: {
                a: { fontFamily: 'SQ', fontSize: 32, color: '#0cdae2', padding: [-10, 0, 0, 5], textAlign: 'center' },
            },
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'none' },
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderWidth: 0,
        textStyle: { color: '#fff' },
    },
    xAxis: [
        {
            type: 'category',
            color: '#59588D',
            data: ['农机服务', '农事服务', '金融服务', '劳务服务', '农技服务', '其他服务'],
            axisLabel: { color: '#FFFFFF', textStyle: { fontSize: 14 } },
            axisTick: { show: false },
            axisLine: { show: true, lineStyle: { color: '#335f89' } },
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '条',
            nameTextStyle: { color: '#fff' },
            axisLabel: { formatter: '{value}', color: '#FFFFFF', textStyle: { fontSize: 14 } },
            axisTick: { show: false },
            axisLine: { show: true, lineStyle: { color: '#335f89' } },
            splitLine: { lineStyle: { color: 'rgba(51,95,137,0.7)', type: 'dashed' } },
        },
    ],
    series: [
        {
            name: '背景',
            type: 'bar',
            zlevel: 0,
            barWidth: 20,
            barGap: '-100%',
            data: [119, 119, 119, 119, 119, 119],
            itemStyle: { normal: { color: 'rgba(14,46,108,0.3)' } },
        },
        {
            name: '数值列',
            type: 'bar',
            zlevel: 1,
            data: [119, 12, 81, 117, 2, 87],
            itemStyle: { normal: {} },
            barWidth: 20,
            label: { normal: { show: true, fontSize: 16, color: '#FFE34A', position: 'top' } },
        },
        {
            name: '背景-椭圆',
            type: 'pictorialBar',
            zlevel: 2,
            symbolSize: [20, 5],
            symbolOffset: [0, -3],
            data: [
                { value: 119, symbolPosition: 'end', itemStyle: { normal: { color: 'rgba(14,46,108,0.5)' } } },
                { value: 119, symbolPosition: 'end', itemStyle: { normal: { color: 'rgba(14,46,108,0.5)' } } },
                { value: 119, symbolPosition: 'end', itemStyle: { normal: { color: 'rgba(14,46,108,0.5)' } } },
                { value: 119, symbolPosition: 'end', itemStyle: { normal: { color: 'rgba(14,46,108,0.5)' } } },
                { value: 119, symbolPosition: 'end', itemStyle: { normal: { color: 'rgba(14,46,108,0.5)' } } },
                { value: 119, symbolPosition: 'end', itemStyle: { normal: { color: 'rgba(14,46,108,0.5)' } } },
            ],
        },
        {
            name: '数值列-椭圆',
            type: 'pictorialBar',
            symbolSize: [20, 5],
            symbolOffset: [0, -3],
            zlevel: 3,
            data: [
                { value: 119, symbolPosition: 'end', itemStyle: { normal: { color: '#11aded' } } },
                { value: 12, symbolPosition: 'end', itemStyle: { normal: { color: '#11aded' } } },
                { value: 81, symbolPosition: 'end', itemStyle: { normal: { color: '#11aded' } } },
                { value: 117, symbolPosition: 'end', itemStyle: { normal: { color: '#11aded' } } },
                { value: 2, symbolPosition: 'end', itemStyle: { normal: { color: '#11aded' } } },
                { value: 87, symbolPosition: 'end', itemStyle: { normal: { color: '#11aded' } } },
            ],
        },
        {
            name: '数值列-椭圆',
            type: 'pictorialBar',
            symbolSize: [20, 5],
            symbolOffset: [0, 3],
            zlevel: 4,
            data: [
                { value: 1, symbolPosition: 'end', itemStyle: { normal: { color: '#11aded' } } },
                { value: 1, symbolPosition: 'end', itemStyle: { normal: { color: '#11aded' } } },
                { value: 1, symbolPosition: 'end', itemStyle: { normal: { color: '#11aded' } } },
                { value: 1, symbolPosition: 'end', itemStyle: { normal: { color: '#11aded' } } },
                { value: 1, symbolPosition: 'end', itemStyle: { normal: { color: '#11aded' } } },
                { value: 1, symbolPosition: 'end', itemStyle: { normal: { color: '#11aded' } } },
            ],
        },
    ],
};
