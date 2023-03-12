const img =
    'data:image/png;base64,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';
var sexData = [
    {
        name: '男性',
        value: 30,
    },
    {
        name: '女性',
        value: 10,
    },
];

let sum = sexData.reduce((prev, curr) => prev + curr.value, 0);
let start = 180 - (sexData[0].value / sum - 0.04) * 180;
var data = [];
var color = ['#22F1FA', '#FF2F60'];
for (var i = 0; i < sexData.length; i++) {
    data.push(
        {
            value: sexData[i].value,
            name: sexData[i].name,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor: color[i],
                },
            },
        },
        {
            value: sum * 0.04,
            name: '',
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0,
                },
            },
        }
    );
}
option = {
    backgroundColor: '#0A2E5D',
    color: color,
    graphic: {
        elements: [
            {
                type: 'image',
                z: 1,
                style: {
                    image: img,
                    width: 210,
                    height: 210,
                },
                left: 'center',
                top: 'center',
            },
        ],
    },
    tooltip: {
        show: true,
        formatter: '{b}：{d}%',
    },
    toolbox: {
        show: false,
    },
    series: [
        {
            name: '',
            type: 'pie',
            clockWise: false,
            radius: [112, 115],
            startAngle: start,
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: [0, -20],
                        color: '#ddd',
                        formatter: function (params) {
                            var percent = ((params.value / sum) * 100).toFixed(0);
                            if (params.name !== '') {
                                return params.name + '：' + params.value + '';
                            } else {
                                return '';
                            }
                        },
                    },
                    labelLine: {
                        length: 30,
                        length2: 50,
                        show: true,
                        color: '#00ffff',
                    },
                },
            },
            data: data,
            z: 2,
        },
    ],
};
