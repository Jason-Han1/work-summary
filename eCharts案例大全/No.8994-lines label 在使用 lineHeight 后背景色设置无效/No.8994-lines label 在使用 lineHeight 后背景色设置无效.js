option = {
    title: {
        text: 'lines label'
    },
    xAxis: {
        type: 'category',
        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27'],
        scale: true,
    },
    yAxis: {
        scale: true,
    },
    series: [{
        type: 'k',
        data: [
            [20, 30, 10, 35],
            [40, 35, 30, 55],
            [33, 38, 33, 40],
            [40, 40, 32, 42]
        ]
    }, {
        id: 'lines',
        name: 'lines',
        type: 'lines',
        z: 10,
        coordinateSystem: 'cartesian2d',
        label: {
            show: true,
            position: 'middle',
            lineHeight: 1, // this makes backgroundColor not working
            backgroundColor: 'yellow',
            formatter: item => 'afwoeifj',
        },
        data: [{
            coords: [
                ['2017-10-24', 40],
                ['2017-10-27', 20]
            ]
        }, ]
    }]
};