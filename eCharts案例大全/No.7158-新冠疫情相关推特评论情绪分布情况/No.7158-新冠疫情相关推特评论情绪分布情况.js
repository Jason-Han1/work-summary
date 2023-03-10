var days_emotion = ['march20', 'march21', 'march22', 'march23', 'march24', 'march25', 'march26', 'march27', 'march28', 'march30', 'march31', 'april1', 'april2', 'april3', 'april4', 'april5', 'april6', 'april7', 'april8', 'april9', 'april10', 'april11', 'april12', 'april13', 'april14', 'april15', 'april16', 'april17', 'april18', 'april28', 'april29', 'april30', 'may1', 'may2', 'may3', 'may4', 'may6', 'may7', 'may8', 'may9', 'may10', 'may11', 'may12', 'may13', 'may14', 'may15', 'may16', 'may17', 'may18', 'may19', 'may20', 'may21', 'may22', 'may23', 'may24', 'may25', 'may26', 'may27', 'may28', 'may29', 'may30', 'may31', 'june1', 'june2', 'june3', 'june4', 'june5', 'june6', 'june7', 'june8', 'june9', 'june10', 'june11', 'june12', 'june13', 'june14', 'june15', 'june16', 'june17', 'june18', 'june19', 'june20', 'june21', 'june22'];

// 正向和负向评论随时间变动的数据
var data_emotion_positive = [538, 445, 474, 461, 412, 373, 340, 385, 371, 245, 270, 285, 316, 266, 262, 291, 217, 240, 199, 188, 192, 182, 223, 167, 130, 117, 175, 158, 388, 597, 697, 736, 822, 805, 633, 696, 658, 705, 723, 663, 539, 540, 631, 663, 670, 645, 687, 544, 585, 610, 605, 655, 618, 557, 593, 572, 542, 538, 536, 541, 524, 421, 540, 372, 447, 463, 536, 500, 498, 546, 515, 554, 495, 540, 482, 489, 791, 775, 769, 778, 820, 807, 694, 740];
var data_emotion_negative = [-134, -97, -114, -91, -97, -101, -81, -79, -90, -47, -51, -67, -62, -76, -137, -85, -57, -45, -42, -50, -31, -49, -24, -27, -31, -33, -31, -27, -119, -144, -184, -159, -175, -171, -138, -147, -180, -166, -179, -163, -90, -136, -220, -118, -188, -154, -114, -124, -110, -122, -126, -169, -187, -126, -96, -82, -81, -125, -129, -111, -87, -116, -98, -89, -91, -116, -111, -109, -92, -107, -100, -74, -78, -93, -77, -75, -126, -134, -104, -137, -140, -118, -94, -109];

// 类别索引
var category_emotion = ['positive', 'negative'];

option = {
    title: {
        text: '新冠疫情相关推特评论情绪分布情况'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: category_emotion
    },
    // grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     containLabel: true
    // },
    xAxis: [

        {
            data: days_emotion,
            type: 'category'
        }
    ],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },

    }],
    series: [{
            name: 'positive',
            type: 'bar',
            stack: '总量',
            color: '#66c0f4',
            // label: {
            //     show: true
            // },
            data: data_emotion_positive
        },
        {
            name: 'negative',
            type: 'bar',
            stack: '总量',
            color: '#f4506e', //df3150
            // label: {
            //     show: true,
            //     position: 'left'
            // },
            data: data_emotion_negative
        }
    ]
};
myChart.setOption(option);