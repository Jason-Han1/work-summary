options =

    [{
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#000'
                    }
                },
                backgroundColor: 'rgba(255,255,255,1)',
                padding: [5, 10],
                textStyle: {
                    color: '#7588E4',
                },
                extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
            },
            title: {
                text: '订阅号文章阅读人数'
            },
            xAxis: {
                type: 'category',
                name: '日期',
                splitLine: {
                    show: false
                },
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
            },
            yAxis: {
                type: 'value',
                name: '阅读人数',
                min: 0,
            },
            series: [{
                name: '09月',
                type: 'line',
                data: [65,755,107,123,87,74,556,4260,281,325,80,367,616,63,50,407,523,154,1363,708,67,56,53,56,45,757,2506,286,696,838]
            }, {
                name: '10月',
                type: 'line',
                data: [178,105,231,120,969,585,130,189,80,469,1076,176,445,145,136,79,50,520,3003,1536,1412,229,1882,1523,254,150,2471,954,415,170,111]
            }]
        },

        {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#000'
                    }
                },
                backgroundColor: 'rgba(255,255,255,1)',
                padding: [5, 10],
                textStyle: {
                    color: '#7588E4',
                },
                extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
            },

            title: {
                text: '订阅号文章阅读次数'
            },
            xAxis: {
                type: 'category',
                name: '日期',
                splitLine: {
                    show: false
                },
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
            },
            yAxis: {
                type: 'value',
                name: '阅读次数',
                min: 0,
            },
            series: [{
                name: '09月',
                type: 'line',
                data: [142,985,159,189,167,131,733,4796,346,446,127,533,736,121,141,547,673,226,1538,844,121,75,84,82,76,889,2790,340,911,1024]
            }, {
                name: '10月',
                type: 'line',
                data: [248,162,278,180,1116,782,240,275,142,589,1476,310,580,203,198,136,151,798,4047,2153,1814,416,2182,1851,349,268,3404,1162,557,317,184]
            }]
        }
    ]