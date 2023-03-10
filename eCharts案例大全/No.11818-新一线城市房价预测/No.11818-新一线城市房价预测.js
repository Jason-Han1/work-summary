var xAxisData = ['2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10','2017-11','2017-12','2018-01', '2018-02', '2018-03', '2018-04'];
var legendData= ['预测值（18年1月 - 18年4月）','实际值（17年1月 - 18年4月）'];

var title = "北京房价预测";
var serieData = [];
var metaDate = [
    [58064, 59531, 61613, 54704, 53049, 51155, 51382, 53921, 58931, 58077, 57662, 57768, 56946, 54374, 55496, 56259],
    [58064, 59531, 61613, 54704, 53049, 51155, 51382, 53921, 58931, 58077, 57662, 57768, 57423, 56257, 55717, 54630]
]

// var title = "上海房价预测";
// var serieData = [];
// var metaDate = [
//     [52640, 53228, 52146, 51791, 53919, 53343, 52805, 50674, 50922, 50760, 49998, 50017, 51198, 50658, 50230, 50737],
//     [52640, 53228, 52146, 51791, 53919, 53343, 52805, 50674, 50922, 50760, 49998, 50017, 50619, 51873, 51935, 50583]
// ]

// var title = "广州房价预测";
// var serieData = [];
// var metaDate = [
//     [23744, 24427, 25131, 25369, 26061, 27329, 28196, 28508, 28814, 28254, 28009, 27578, 27550, 27491, 27800, 27861],
//     [23744, 24427, 25131, 25369, 26061, 27329, 28196, 28508, 28814, 28254, 28009, 27578, 27602, 28183, 29113, 28649]
// ]

// var title = "深圳房价预测";
// var serieData = [];
// var metaDate = [
//     [41691, 42322, 44910, 45251, 46162, 46631, 47369, 47462, 47540, 47445, 47610, 47996, 48119, 47982, 48002, 47937],
//     [41691, 42322, 44910, 45251, 46162, 46631, 47369, 47462, 47540, 47445, 47610, 47996, 48762, 49830, 50186, 49001]
// ]

// var title = "成都房价预测";
// var serieData = [];
// var metaDate = [
//     [8674, 8698, 9024, 9403, 9636, 9839, 9992, 10185, 10562, 11068, 11617, 12034, 12118, 12083, 12068, 12037],
//     [8674, 8698, 9024, 9403, 9636, 9839, 9992, 10185, 10562, 11068, 11617, 12034, 12375, 12542, 12825, 13005]
// ]

// var title = "杭州房价预测";
// var serieData = [];
// var metaDate = [
//     [21431, 21611, 22469, 22663, 22681, 22822, 23138, 23356, 22976, 22241, 22091, 21929, 21791, 22002, 22404, 22364],
//     [21431, 21611, 22469, 22663, 22681, 22822, 23138, 23356, 22976, 22241, 22091, 21929, 21589, 21352, 21319, 20975]
// ]

// var title = "重庆房价预测";
// var serieData = [];
// var metaDate = [
//     [6417, 6447, 6578, 6706, 6835, 7002, 7091, 7134, 7166, 7194, 7207, 7197, 7298, 7425, 7524, 7628],
//     [6417, 6447, 6578, 6706, 6835, 7002, 7091, 7134, 7166, 7194, 7207, 7197, 7217, 7242, 7267, 7314]
// ]

// var title = "武汉房价预测";
// var serieData = [];
// var metaDate = [
//     [13986, 14116, 14679, 15023, 15275, 15492, 15778, 15941, 16068, 16154, 16244, 16259, 16312, 16379, 16444, 16490],
//     [13986, 14116, 14679, 15023, 15275, 15492, 15778, 15941, 16068, 16154, 16244, 16259, 16254, 16263, 16402, 16467]
// ]

// var title = "苏州房价预测";
// var serieData = [];
// var metaDate = [
//     [15950, 16009, 16107, 15969, 15805, 15549, 15414, 15344, 15425, 15362, 15348, 15320, 15396, 15425, 15532, 15621],
//     [15950, 16009, 16107, 15969, 15805, 15549, 15414, 15344, 15425, 15362, 15348, 15320, 15301, 15338, 15485, 15588]
// ]

// var title = "西安房价预测";
// var serieData = [];
// var metaDate = [
//     [6557, 6574, 6665, 6940, 7219, 7626, 7794, 7957, 8032, 8192, 8681, 8880, 8876, 8999, 9137, 9029],
//     [6557, 6574, 6665, 6940, 7219, 7626, 7794, 7957, 8032, 8192, 8681, 8880, 8988, 9212, 9507, 10094]
// ]

// var title = "天津房价预测";
// var serieData = [];
// var metaDate = [
//     [23290, 23468, 24561, 25048, 25183, 24941, 24802, 24242, 23852, 23382, 22706, 22205, 22469, 22646, 22687, 22930],
//     [23290, 23468, 24561, 25048, 25183, 24941, 24802, 24242, 23852, 23382, 22706, 22205, 21899, 21751, 21784, 21604]
// ]

// var title = "南京房价预测";
// var serieData = [];
// var metaDate = [
//     [25000, 25057, 25471, 25700, 25887, 25914, 25995, 26036, 26004, 25877, 25768, 25733, 25762, 25809, 25889, 25957],
//     [25000, 25057, 25471, 25700, 25887, 25914, 25995, 26036, 26004, 25877, 25768, 25733, 25757, 25691, 25844, 25842]
// ]

// var title = "郑州房价预测";
// var serieData = [];
// var metaDate = [
//     [12128, 12145, 12463, 12750, 12911, 12948, 12993, 12985, 12968, 12956, 12928, 12859, 12941, 13062, 13141, 13225],
//     [12128, 12145, 12463, 12750, 12911, 12948, 12993, 12985, 12968, 12956, 12928, 12859, 12773, 12708, 12763, 12744]
// ]

// var title = "长沙房价预测";
// var serieData = [];
// var metaDate = [
//     [7815, 7880, 8216, 8714, 8994, 9277, 9240, 9296, 9411, 9537, 9763, 9873, 9921, 9992, 10088, 10111],
//     [7815, 7880, 8216, 8714, 8994, 9277, 9240, 9296, 9411, 9537, 9763, 9873, 9910, 9983, 10011, 10198]
// ]

// var title = "沈阳房价预测";
// var serieData = [];
// var metaDate = [
//     [7274, 7351, 7367, 7428, 7493, 7635, 7588, 7572, 7623, 7704, 7972, 7999, 8047, 8165, 8282, 8262],
//     [7274, 7351, 7367, 7428, 7493, 7635, 7588, 7572, 7623, 7704, 7972, 7999, 8013, 8026, 8141, 8188]
// ]

// var title = "青岛房价预测";
// var serieData = [];
// var metaDate = [
//     [13940, 14273, 15759, 17033, 16991, 17073, 17217, 17352, 17559, 17724, 17925, 18142, 18211, 18196, 18246, 18286],
//     [13940, 14273, 15759, 17033, 16991, 17073, 17217, 17352, 17559, 17724, 17925, 18142, 18564, 19169, 19947, 20575]
// ]

// var title = "宁波房价预测";
// var serieData = [];
// var metaDate = [
//     [14018, 14229, 14595, 15023, 15316, 15705, 16102, 16418, 16377, 16309, 16714, 17037, 16985, 17095, 17314, 17197],
//     [14018, 14229, 14595, 15023, 15316, 15705, 16102, 16418, 16377, 16309, 16714, 17037, 17137, 17444, 17723, 18097]
// ]

// var title = "东莞房价预测";
// var serieData = [];
// var metaDate = [
//     [11774, 11733, 11642, 12032, 12290, 13013, 12929, 12961, 13053, 13145, 13763, 13913, 13843, 13915, 14089, 13884],
//     [11774, 11733, 11642, 12032, 12290, 13013, 12929, 12961, 13053, 13145, 13763, 13913, 13947, 14180, 14122, 14256]
// ]

// var title = "无锡房价预测";
// var serieData = [];
// var metaDate = [
//     [8286, 8239, 8501, 8652, 8913, 9178, 9369, 9423, 9556, 9603, 9570, 9592, 9736, 9800, 9876, 10020],
//     [8286, 8239, 8501, 8652, 8913, 9178, 9369, 9423, 9556, 9603, 9570, 9592, 9598, 9575, 9709, 9815]
// ]

for(var v=0; v < legendData.length ; v++){
    var serie = {
        name:legendData[v],
        type: 'line',
        symbol:"circle",
        symbolSize:10,
        data: metaDate[v]
    };
    serieData.push(serie)
}
var colors = ["red","#0f375f"];
var option = {
    backgroundColor: '#eee',
    title : {text: title,textAlign:'left',textStyle:{color:"#000",fontSize:"16",fontWeight:"normal"}},
    legend: {
    	show:true,left:"right",data:legendData,y:"5%",
        itemWidth:18,itemHeight:12,textStyle:{color:"#000",fontSize:14},
    },
    color:colors,
    grid: {left: '2%',top:"12%",bottom: "5%",right:"5%",containLabel: true},
    tooltip : { trigger: 'axis',axisPointer : { type : 'shadow'}},
    xAxis: [
        {   
            type: 'category',
            axisLine: { show: true,lineStyle:{ color:'#000' }},
            axisLabel:{interval:0,textStyle:{color:'#000',fontSize:14} },
            axisTick : {show: false},
            data:xAxisData,
        },
    ],
    yAxis: [
        {   
            axisTick : {show: false},
            splitLine: {show:false},
            axisLabel:{textStyle:{color:'#000',fontSize:14} },
            axisLine: { show: true,lineStyle:{ color:'#000'}},
        },
    ],
    series:serieData
};