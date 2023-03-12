setTimeout(function () {

    option = {
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', '2018-10-28-11', '2018-10-28-12', '2018-10-28-13', '2018-10-28-14', '2018-10-28-15', '2018-10-28-16', '2018-10-28-17', '2018-10-28-18', '2018-10-28-19', '2018-10-28-20', '2018-10-28-21', '2018-10-28-22', '2018-10-28-23', '2018-10-29-00', '2018-10-29-01', '2018-10-29-02', '2018-10-29-03', '2018-10-29-04', '2018-10-29-05', '2018-10-29-06', '2018-10-29-07', '2018-10-29-08', '2018-10-29-09', '2018-10-29-10', '2018-10-29-11', '2018-10-29-12', '2018-10-29-13', '2018-10-29-14', '2018-10-29-15', '2018-10-29-16', '2018-10-29-17', '2018-10-29-18', '2018-10-29-19', '2018-10-29-20', '2018-10-29-21', '2018-10-29-22', '2018-10-29-23', '2018-10-30-00', '2018-10-30-01', '2018-10-30-02', '2018-10-30-03', '2018-10-30-04', '2018-10-30-05', '2018-10-30-06', '2018-10-30-07', '2018-10-30-08', '2018-10-30-09', '2018-10-30-10', '2018-10-30-11', '2018-10-30-12', '2018-10-30-13', '2018-10-30-14', '2018-10-30-15', '2018-10-30-16', '2018-10-30-17', '2018-10-30-18', '2018-10-30-19', '2018-10-30-20', '2018-10-30-21', '2018-10-30-22', '2018-10-30-23', '2018-10-31-00', '2018-10-31-01', '2018-10-31-02', '2018-10-31-03', '2018-10-31-04', '2018-10-31-05', '2018-10-31-06', '2018-10-31-07', '2018-10-31-08', '2018-10-31-09', '2018-10-31-10', '2018-10-31-11', '2018-10-31-12', '2018-10-31-13', '2018-10-31-14', '2018-10-31-15', '2018-10-31-16', '2018-10-31-17', '2018-10-31-18', '2018-10-31-19', '2018-10-31-20', '2018-10-31-21', '2018-10-31-22', '2018-10-31-23', '2018-11-01-00', '2018-11-01-01', '2018-11-01-02', '2018-11-01-03', '2018-11-01-04', '2018-11-01-05', '2018-11-01-06', '2018-11-01-07', '2018-11-01-08', '2018-11-01-09', '2018-11-01-10', '2018-11-01-11', '2018-11-01-12', '2018-11-01-13', '2018-11-01-14', '2018-11-01-15', '2018-11-01-16', '2018-11-01-17', '2018-11-01-18', '2018-11-01-19', '2018-11-01-20', '2018-11-01-21', '2018-11-01-22', '2018-11-01-23', '2018-11-02-00', '2018-11-02-01', '2018-11-02-02', '2018-11-02-03', '2018-11-02-04', '2018-11-02-05', '2018-11-02-06', '2018-11-02-07', '2018-11-02-08', '2018-11-02-09', '2018-11-02-10', '2018-11-02-11', '2018-11-02-12', '2018-11-02-13', '2018-11-02-14', '2018-11-02-15', '2018-11-02-16', '2018-11-02-17', '2018-11-02-18', '2018-11-02-19', '2018-11-02-20', '2018-11-02-21', '2018-11-02-22', '2018-11-02-23', '2018-11-03-00', '2018-11-03-01', '2018-11-03-02', '2018-11-03-03', '2018-11-03-04', '2018-11-03-05', '2018-11-03-06', '2018-11-03-07', '2018-11-03-08', '2018-11-03-09', '2018-11-03-10', '2018-11-03-11', '2018-11-03-12', '2018-11-03-13', '2018-11-03-14', '2018-11-03-15', '2018-11-03-16', '2018-11-03-17', '2018-11-03-18', '2018-11-03-19', '2018-11-03-20', '2018-11-03-21', '2018-11-03-22', '2018-11-03-23', '2018-11-04-00', '2018-11-04-01', '2018-11-04-02', '2018-11-04-03', '2018-11-04-04', '2018-11-04-05', '2018-11-04-06', '2018-11-04-07', '2018-11-04-08', '2018-11-04-09', '2018-11-04-10', '2018-11-04-11'],
                ['设计', 0, 2, 0, 19, 133, 66, 44, 19, 5, 1, 6, 8, 11, 13, 77, 99, 75, 61, 66, 53, 45, 30, 28, 33, 31, 32, 26, 29, 19, 5, 9, 10, 4, 2, 6, 13, 16, 18, 1, 27, 34, 25, 146, 151, 61, 44, 44, 27, 49, 30, 14, 23, 11, 15, 13, 1, 0, 0, 1, 1, 20, 14, 12, 14, 42, 31, 6, 7, 11, 20, 14, 5, 9, 2, 9, 8, 2, 3, 1, 0, 1, 0, 0, 4, 7, 3, 56, 8, 24, 17, 4, 8, 11, 4, 8, 12, 2, 4, 0, 7, 8, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 14, 0, 0, 4, 1, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 5, 0, 0, 0, 0, 4, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 7, 0, 0, 0],
                ['施工', 0, 2, 0, 3, 12, 11, 5, 0, 0, 0, 1, 1, 2, 7, 29, 29, 50, 63, 36, 21, 20, 10, 17, 20, 9, 8, 7, 8, 11, 3, 2, 0, 2, 2, 6, 6, 7, 10, 0, 8, 9, 10, 40, 43, 9, 8, 4, 4, 3, 3, 2, 4, 3, 6, 3, 1, 0, 0, 1, 1, 2, 6, 7, 4, 4, 10, 2, 3, 3, 3, 0, 2, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 1, 1, 0, 0, 2, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                ['超载', 0, 19, 16, 30, 39, 47, 38, 15, 5, 21, 23, 27, 103, 133, 99, 79, 87, 118, 112, 117, 104, 91, 80, 144, 109, 88, 119, 134, 106, 94, 34, 18, 16, 5, 12, 34, 52, 148, 26, 182, 205, 203, 193, 232, 352, 226, 180, 126, 130, 186, 126, 132, 98, 45, 29, 19, 20, 0, 5, 10, 18, 59, 69, 189, 302, 179, 82, 110, 76, 119, 28, 68, 40, 31, 26, 55, 21, 26, 15, 0, 3, 3, 11, 6, 28, 45, 68, 26, 79, 19, 11, 13, 23, 18, 20, 15, 9, 15, 23, 29, 15, 8, 0, 5, 5, 0, 2, 2, 40, 5, 12, 6, 20, 16, 0, 16, 10, 9, 12, 7, 12, 4, 7, 0, 6, 0, 10, 1, 0, 0, 0, 6, 0, 1, 1, 86, 30, 29, 1, 0, 10, 14, 8, 14, 9, 2, 0, 7, 2, 3, 1, 0, 0, 0, 0, 0, 1, 38, 2, 17, 7, 6, 3, 13, 8, 13, 5, 10, 1],
                ['货车', 0, 32, 12, 39, 29, 29, 37, 11, 6, 14, 15, 7, 18, 25, 12, 31, 30, 44, 65, 86, 62, 59, 57, 94, 64, 45, 63, 62, 75, 79, 15, 13, 7, 8, 7, 16, 37, 69, 25, 98, 116, 112, 107, 130, 204, 130, 118, 90, 82, 120, 71, 71, 73, 23, 15, 5, 10, 0, 0, 1, 3, 39, 27, 93, 130, 74, 32, 40, 23, 44, 5, 27, 26, 15, 11, 48, 6, 11, 2, 0, 4, 0, 0, 1, 16, 21, 19, 11, 28, 15, 3, 4, 15, 7, 15, 8, 6, 10, 13, 20, 9, 0, 1, 0, 0, 0, 1, 0, 16, 2, 6, 5, 12, 4, 2, 6, 7, 2, 11, 2, 10, 0, 3, 0, 3, 0, 4, 0, 0, 0, 0, 3, 0, 0, 0, 31, 12, 11, 1, 0, 5, 3, 3, 6, 5, 0, 0, 4, 1, 1, 1, 0, 0, 0, 0, 0, 0, 7, 2, 6, 2, 2, 0, 5, 9, 2, 3, 0, 1],
                ['管理', 0, 1, 0, 0, 0, 1, 3, 2, 0, 1, 2, 1, 2, 1, 7, 4, 2, 7, 9, 7, 10, 9, 9, 5, 12, 6, 12, 25, 19, 17, 7, 1, 2, 1, 0, 3, 6, 18, 4, 21, 15, 14, 9, 9, 9, 40, 67, 38, 21, 23, 11, 7, 7, 7, 3, 1, 2, 0, 1, 1, 4, 8, 8, 6, 9, 4, 5, 3, 3, 9, 2, 6, 5, 2, 2, 6, 2, 3, 1, 0, 0, 0, 0, 0, 1, 3, 3, 5, 9, 1, 0, 3, 0, 1, 12, 1, 0, 1, 1, 5, 8, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 4, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 1, 1, 0, 2, 5, 1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 0, 0, 1, 0, 2, 0, 0, 0, 2, 0]
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '55%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},

            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                label: {
                    formatter: '{b}: {@2012} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '2012',
                    tooltip: '2012'
                }
            }
        ]
    };

    myChart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });

    myChart.setOption(option);

});