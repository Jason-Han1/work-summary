option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '0°','45°','90°', '135°', '180°'
            ],
        },
        
        
        
        title: {
            subtext: '测试数据'
        },
        tooltip: {
        },
        legend: {
            left: 'right',
            data: ['1级浪', '2级浪', '3级浪', '4级浪', '5级浪', '6级浪'],
            selected: {
                '4级浪': false, '5级浪': false, '6级浪': false
            }
        },
        // calculable : true,
        grid: {
            top: 80,
            bottom: 100,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    // label: {
                    //     show: true,
                    //     formatter: function (params) {
                    //         return params.value.replace('\n', '');
                    //     }
                    // }
                }
            }
        },
        xAxis: [
            {   'name': '航速（kn）',
                'type':'value',
                'axisLabel':{'interval':'aotu'},
                'data':[
                    10,12,13,14,15,16,17,18,19
                ],
                splitLine: {show: false}
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '轴功率（kw）'
            }
        ],
        series: [
            {name: '4级浪', type: 'line'},
            {name: '5级浪', type: 'line'},
            {name: '6级浪', type: 'line'},
            {name: '1级浪', type: 'line'},
            {name: '2级浪', type: 'line'},
            {name: '3级浪', type: 'line'},
        ]
    },
    options: [
        {
            title: {text: '浪向0°,不同浪高下航速轴功率'},
            series: [
                {data: [[1,2],[2,5],[3,5], [4,6],[5,7]]},
                {data: [[1,4],[2,5],[3,7], [4,9],[5,17]]},
                {data: [[1,3],[2,2],[3,6], [4,16],[5,20]]},
                {data: [[1,1],[2,10],[3,4], [4,18],[5,21]]},
                {data: [[1,12],[2,6],[3,19], [4,25],[5,17]]},
                {data: [[1,4],[2,13],[3,17], [4,19],[5,11]]},
            ]
        },
        {
            title : {text: '浪向45°,不同浪高下航速轴功率'},
            series : [
                {data: [[1,200],[2,500],[3,500], [4,600],[5,700]]},
                {data: [[1,400],[2,500],[3,700], [4,900],[5,1700]]},
                {data: [[1,300],[2,200],[3,600], [4,160],[5,200]]},
                {data: [[1,100],[2,100],[3,400], [4,180],[5,210]]},
                {data: [[1,120],[2,60],[3,190], [4,250],[5,107]]},
                {data: [[1,400],[2,130],[3,170], [4,190],[5,110]]},

            ]
        },
        {
            title : {text: '浪向90°,不同浪高下航速轴功率'},
            series : [
                {data: [[1,2],[2,5],[3,5], [4,6],[5,7]]},
                {data: [[1,4],[2,5],[3,7], [4,9],[5,17]]},
                {data: [[1,3],[2,2],[3,6], [4,16],[5,20]]},
                {data: [[1,1],[2,10],[3,4], [4,18],[5,21]]},
                {data: [[1,12],[2,6],[3,19], [4,25],[5,17]]},
                {data: [[1,4],[2,13],[3,17], [4,19],[5,11]]},
            ]
        },
        {
            title : {text: '浪向135°,不同浪高下航速轴功率'},
            series : [
                {data: [[1,120],[2,150],[3,50], [4,60],[5,70]]},
                {data: [[1,140],[2,50],[3,670], [4,90],[5,170]]},
                {data: [[1,30],[2,20],[3,360], [4,1600],[5,1200]]},
                {data: [[1,110],[2,1300],[3,40], [4,180],[5,210]]},
                {data: [[1,120],[2,360],[3,190], [4,2350],[5,1370]]},
                {data: [[1,340],[2,1330],[3,1703], [4,1903],[5,1130]]},
            ]
        },
        {
            title : {text: '浪向180°,不同浪高下航速轴功率'},
            series : [
                {data: [[1,227],[2,355],[3,415], [4,166],[5,279]]},
                {data: [[1,54],[2,25],[3,70], [4,90],[5,170]]},
                {data: [[1,53],[2,22],[3,56], [4,156],[5,250]]},
                {data: [[1,12],[2,102],[3,24], [4,128],[5,212]]},
                {data: [[1,122],[2,62],[3,129], [4,225],[5,127]]},
                {data: [[1,419],[2,132],[3,172], [4,129],[5,121]]},
            ]
        },
    ]
};


console.log(JSON.stringify(option));
