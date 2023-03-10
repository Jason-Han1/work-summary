// var myChart = echarts.init(document.getElementById('main'));

// 时间序列
var days_pie = ['march20', 'march21', 'march22', 'march23', 'march24', 'march25', 'march26', 'march27', 'march28', 'march30', 'march31', 'april1', 'april2', 'april3', 'april4', 'april5', 'april6', 'april7', 'april8', 'april9', 'april10', 'april11', 'april12', 'april13', 'april14', 'april15', 'april16', 'april17', 'april18', 'april28', 'april29', 'april30', 'may1', 'may2', 'may3', 'may4', 'may6', 'may7', 'may8', 'may9', 'may10', 'may11', 'may12', 'may13', 'may14', 'may15', 'may16', 'may17', 'may18', 'may19', 'may20', 'may21', 'may22', 'may23', 'may24', 'may25', 'may26', 'may27', 'may28', 'may29', 'may30', 'may31', 'june1', 'june2', 'june3', 'june4', 'june5', 'june6', 'june7', 'june8', 'june9', 'june10', 'june11', 'june12', 'june13', 'june14', 'june15', 'june16', 'june17', 'june18', 'june19', 'june20', 'june21', 'june22'];

// 数据[时间[相应评论条数]]
var data_pie = [
    [306, 926, 57],
    [275, 696, 48],
    [302, 718, 48],
    [289, 748, 34],
    [250, 652, 46],
    [229, 641, 42],
    [201, 570, 38],
    [228, 596, 30],
    [236, 553, 38],
    [162, 347, 28],
    [171, 442, 22],
    [163, 406, 38],
    [185, 444, 31],
    [176, 377, 38],
    [162, 389, 109],
    [197, 451, 60],
    [131, 399, 18],
    [137, 434, 21],
    [109, 364, 17],
    [102, 382, 22],
    [124, 394, 15],
    [118, 405, 15],
    [157, 379, 6],
    [107, 394, 8],
    [76, 297, 13],
    [75, 228, 17],
    [99, 329, 14],
    [97, 261, 14],
    [221, 771, 27],
    [307, 1045, 55],
    [404, 1278, 68],
    [401, 1175, 60],
    [486, 1323, 56],
    [445, 1329, 64],
    [381, 1145, 39],
    [397, 1171, 46],
    [372, 1131, 67],
    [412, 1152, 56],
    [430, 1198, 55],
    [387, 1046, 40],
    [332, 766, 31],
    [278, 961, 41],
    [349, 1225, 55],
    [364, 1068, 47],
    [376, 1233, 42],
    [379, 1160, 43],
    [397, 1037, 52],
    [336, 971, 33],
    [330, 1032, 35],
    [328, 1027, 33],
    [339, 1006, 51],
    [352, 1167, 42],
    [353, 1158, 46],
    [330, 935, 33],
    [326, 939, 31],
    [330, 827, 32],
    [298, 863, 22],
    [286, 918, 52],
    [293, 951, 32],
    [297, 853, 51],
    [296, 881, 31],
    [237, 807, 35],
    [291, 903, 38],
    [192, 689, 35],
    [239, 772, 43],
    [248, 839, 29],
    [287, 857, 39],
    [280, 767, 45],
    [277, 734, 42],
    [308, 838, 33],
    [293, 828, 33],
    [293, 816, 21],
    [258, 865, 24],
    [299, 843, 46],
    [267, 746, 31],
    [288, 703, 32],
    [468, 1146, 48],
    [432, 1197, 62],
    [420, 1178, 35],
    [429, 1130, 50],
    [501, 1156, 40],
    [470, 1099, 43],
    [412, 968, 38],
    [401, 1087, 35]
];

// 评论态度索引
var category_pie = ['positive', 'neutral', 'negative'];


var option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            playInterval: 500, //0.5s滚动一次
            // realtime = true,
            symbolSize: 1,
            // left: '5%',
            // right: '5%',
            // bottom: '0%',
            // width: '90%',
            // itemStyle: {
            //     borderWidth: 0
            // },
            controlStyle: {
                show: false
            },
            data: days_pie,
            tooltip: {
                formatter: days_pie
            },
        },
        // title: {
        //     text: '用户评论情感倾向分析',
        //     subtext: '数据来源于推特',
        //     left: 'center'
        // },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'horizontal',
            x: 'center',
            left: '42%',
            data: category_pie
        },
        graphic: {
            type: "text",
            left: "center",
            top: "45%",
            style: {
                text: "Emotional Tendency\n\nfrom Twitter",
                textAlign: "center",
                fill: "#333",
                fontSize: 30,
                fontWeight: 700
            }
        },
        series: [{
            name: 'tendency',
            type: 'pie',
            radius: ['50%', '65%'],
            // center: ['50%', '60%'],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    },
    options: []
};

for (var n = 0; n < days_pie.length; n++) {

    var res = [];
    for (j = 0; j < data_pie[n].length; j++) {
        res.push({
            name: category_pie[j],
            value: data_pie[n][j]
        });
    }
    option.options.push({
        series: [{
            data: res,
            // 色彩方案--------------------------------------------------------------------------------
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = ['#EE4266', '#FFD23F', '#0EAD69'];
                        return colorList[params.dataIndex]
                    }
                }
            }
        }]
    });
}



myChart.setOption(option);