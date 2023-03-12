var data = {
    "distance_in_km": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
        24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
        78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99
    ],
    "pop_beijing": [51312, 183166, 261678, 303110, 316768, 233128, 169565, 184337, 158281, 132428, 123298,
        105225, 114717, 92757, 92764, 72298, 82104, 69581, 60675, 54159, 59806, 43911, 39181, 36341, 35516,
        29713, 26097, 28249, 23457, 21742, 20502, 20845, 15790, 15113, 12478, 11674, 9680, 9016, 8560, 7379, 7393,
        6228, 6351, 5841, 5016, 4673, 4854, 4178, 3845, 3834, 3452, 3021, 2955, 3073, 2657, 2655, 2676, 2543,
        2239, 2344, 2389, 2381, 2216, 2037, 1979, 1733, 1776, 1562, 1668, 1494, 1470, 1462, 1533, 1394, 1327, 1217,
        993, 1022, 980, 917, 855, 960, 733, 677, 699, 674, 653, 594, 491, 509, 444, 511, 511, 361, 388, 364, 353, 306, 343, 289
    ],
    "perc": [0.0147, 0.0673, 0.1425, 0.2295, 0.3205, 0.3874, 0.4361, 0.489, 0.5345, 0.5725, 0.6079, 0.6381, 0.6711, 0.6977,
        0.7243, 0.7451, 0.7687, 0.7886, 0.8061, 0.8216, 0.8388, 0.8514, 0.8627, 0.8731, 0.8833, 0.8918, 0.8993, 0.9074, 0.9142,
        0.9204, 0.9263, 0.9323, 0.9368, 0.9411, 0.9447, 0.9481, 0.9509, 0.9535, 0.9559, 0.958, 0.9602, 0.9619, 0.9638, 0.9654,
        0.9669, 0.9682, 0.9696, 0.9708, 0.9719, 0.973, 0.974, 0.9749, 0.9757, 0.9766, 0.9774, 0.9781, 0.9789, 0.9796, 0.9803,
        0.981, 0.9816, 0.9823, 0.983, 0.9835, 0.9841, 0.9846, 0.9851, 0.9856, 0.986, 0.9865, 0.9869, 0.9873, 0.9878, 0.9882,
        0.9885, 0.9889, 0.9892, 0.9895, 0.9897, 0.99, 0.9903, 0.9905, 0.9907, 0.9909, 0.9911, 0.9913, 0.9915, 0.9917, 0.9918,
        0.992, 0.9921, 0.9923, 0.9924, 0.9925, 0.9926, 0.9927, 0.9928, 0.9929, 0.993, 0.9931
    ]
};

option = {
    title:{
        text: '通勤距离图',
        left: 'center',
        top: '20%'
    },
    grid: {
      top: '25%',
      bottom: '25%'
    },
    xAxis: {
        type: 'category',
        data: data.distance_in_km,
        name: '通勤距离',
        nameLocation: 'center',
        nameTextStyle: {
            fontSize: 14
        },
        nameGap: 30,
        axisLabel: {
            interval: 9
        }
    },
    yAxis:[{
        name: '人数',
        nameTextStyle:{
            fontSize: 14
        }
    },{
        name: '累计比例',
        nameTextStyle: {
            fontSize: 14
        }
    }],
    series: [{
        name: '人数',
        type: 'bar',
        data: data.pop_beijing
    },{
        name: '累计比例',
        type: 'line',
        data: data.perc,
        yAxisIndex: 1
    }]
};