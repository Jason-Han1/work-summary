var set1 = [
    ['商品', '指标正面', '指标负面', '负面'],
    ['商品13', 438, 426, 180],
    ['商品15', 392, 396, 331],
    ['商品6', 322, 293, 222],
    ['商品8', 366, 388, 328],
    ['商品3', 251, 461, 588],
    ['商品10', 394, 210, 170],
    ['商品2', 319, 477, 324],
    ['商品9', 282, 442, 294],
    ['商品16', 346, 293, 405],
    ['商品12', 297, 471, 317],
    ['商品5', 287, 474, 348],
    ['商品1', 224, 364, 360],
    ['商品7', 217, 407, 256],
    ['商品4', 389, 458, 512],
    ['商品14', 336, 285, 291],
    ['商品11', 306, 202, 213]
];

option = {
    // backgroundColor:'#fff',
    grid: {
        top: 32,
        left: 48,
        right: 48,
        bottom: 24,
    },
    dataset: {
        source: set1
    },
    // legend: {
    //     left: 16,
    //     top: 0,
    // },
    yAxis: {
        name: '指标负面'
    },
    xAxis: {
        name:'指标\n正面'
    },
    series: [
        {
            type:'scatter',
            encode:{
                x:1,
                y:2
            },
        }, 
    ]
};
myChart.resize({
    width: 536,
    height: 320
})