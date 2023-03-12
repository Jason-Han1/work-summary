var xData = function() {
    var data = [];
    for (var i = 2010; i < 2101; i++) {
        data.push(i + "");
    }
    return data;
}();
var maerdaifu = [0.028501815, 0.059638599, 0.093590013, 0.124985954, 0.157011107, 0.196091348, 0.22951874, 0.26131585, 0.298809237, 0.33322558, 0.361312557, 0.396012539, 0.431072508, 0.466498753, 0.502279679, 0.538427585, 0.57493678, 0.611807542, 0.64904014, 0.686634834, 0.724598221, 0.762917909, 0.801600427, 0.840646004, 0.88006141, 0.919833813, 0.959969917, 1.000469921, 1.041334019, 1.082562393, 1.12414838, 1.166098897, 1.208421048, 1.251094173, 1.294139243, 1.337542382, 1.381310716, 1.425444378, 1.469936275, 1.514793656, 1.560009324, 1.605590611, 1.651530218, 1.697835555, 1.744499227, 1.791521187, 1.838908966, 1.886655021, 1.934766957, 1.983229429, 2.032057742, 2.081244165, 2.130788623, 2.18069104, 2.230951338, 2.281569432, 2.332545237, 2.383878663, 2.435569616, 2.487618, 2.540023717, 2.592778464, 2.645890257, 2.69935071, 2.753176228, 2.807341751, 2.861872111, 2.916742012, 2.971976511, 3.02755008, 3.083479457, 3.139755934, 3.19637927, 3.253357878, 3.310682936, 3.368345471, 3.426362657, 3.484725556, 3.543425088, 3.602478636, 3.661868251, 3.721602516, 3.781681181, 3.842094988, 3.902852625, 3.963944763, 4.025380159, 4.087158557, 4.149261358, 4.211706521, ];
var mashaoer = [0.017101089, 0.035783159, 0.056154008, 0.074991573, 0.094206664, 0.117654809, 0.137711244, 0.15678951, 0.179285542, 0.199935348, 0.216787534, 0.237607523, 0.258643505, 0.279899252, 0.301367807, 0.323056551, 0.344962068, 0.367084525, 0.389424084, 0.4119809, 0.434758933, 0.457750745, 0.480960256, 0.504387602, 0.528036846, 0.551900288, 0.57598195, 0.600281953, 0.624800411, 0.649537436, 0.674489028, 0.699659338, 0.725052629, 0.750656504, 0.776483546, 0.802525429, 0.82878643, 0.855266627, 0.881961765, 0.908876194, 0.936005595, 0.963354366, 0.990918131, 1.018701333, 1.046699536, 1.074912712, 1.10334538, 1.131993012, 1.160860174, 1.189937657, 1.219234645, 1.248746499, 1.278473174, 1.308414624, 1.338570803, 1.368941659, 1.399527142, 1.430327198, 1.461341769, 1.4925708, 1.52401423, 1.555667079, 1.587534154, 1.619610426, 1.651905737, 1.684405051, 1.717123267, 1.750045207, 1.783185907, 1.816530048, 1.850087674, 1.88385356, 1.917827562, 1.952014727, 1.986409761, 2.021007283, 2.055817594, 2.090835333, 2.126055053, 2.161487182, 2.197120951, 2.23296151, 2.269008709, 2.305256993, 2.341711575, 2.378366858, 2.415228095, 2.452295134, 2.489556815, 2.527023913, ];
var tuwalu = [0.002850182, 0.00596386, 0.009359002, 0.012498596, 0.015701111, 0.019609135, 0.022951874, 0.026131586, 0.029880924, 0.033322558, 0.036131256, 0.039601254, 0.043107251, 0.046649876, 0.050227968, 0.053842759, 0.057493679, 0.061180755, 0.064904014, 0.068663484, 0.072459823, 0.076291791, 0.080160043, 0.084064601, 0.088006141, 0.091983382, 0.095996992, 0.100046993, 0.104133402, 0.10825624, 0.112414838, 0.11660989, 0.120842105, 0.125109418, 0.129413925, 0.133754239, 0.138131072, 0.142544438, 0.146993628, 0.151479366, 0.156000933, 0.160559062, 0.165153022, 0.169783556, 0.174449923, 0.179152119, 0.183890897, 0.188665503, 0.193476696, 0.198322943, 0.203205775, 0.208124417, 0.213078863, 0.218069105, 0.223095134, 0.228156944, 0.233254524, 0.238387867, 0.243556962, 0.248761801, 0.254002372, 0.259277847, 0.264589026, 0.269935071, 0.275317623, 0.280734176, 0.286187212, 0.291674202, 0.297197652, 0.302755009, 0.308347946, 0.313975594, 0.319637927, 0.325335788, 0.331068294, 0.336834548, 0.342636266, 0.348472556, 0.354342509, 0.360247864, 0.366186826, 0.372160252, 0.378168119, 0.384209499, 0.390285263, 0.396394477, 0.402538016, 0.408715856, 0.414926136, 0.421170653, ];
var jilibasi = [0.076954901, 0.161024218, 0.252693036, 0.337462077, 0.423929989, 0.529446641, 0.619700597, 0.705552796, 0.80678494, 0.899709066, 0.975543904, 1.069233856, 1.163895773, 1.259546635, 1.356155133, 1.453754479, 1.552329307, 1.651880365, 1.752408378, 1.853914052, 1.956415198, 2.059878355, 2.164321153, 2.269744211, 2.376165807, 2.483551295, 2.591918776, 2.701268788, 2.811601851, 2.922918463, 3.035200626, 3.148467021, 3.26273683, 3.377954269, 3.494175958, 3.611364432, 3.729538934, 3.848699822, 3.968827944, 4.089942872, 4.212025176, 4.335094649, 4.459131588, 4.584156, 4.710147912, 4.837107206, 4.96505421, 5.093968556, 5.223870784, 5.354719458, 5.486555905, 5.619359245, 5.753129282, 5.887865809, 6.023568613, 6.160237468, 6.297872141, 6.43647239, 6.576037963, 6.716568602, 6.858064037, 7.000501854, 7.143903694, 7.288246917, 7.433575817, 7.579822729, 7.727054701, 7.875203432, 8.02433658, 8.174385217, 8.325394535, 8.477341021, 8.630224029, 8.784066272, 8.938843926, 9.094532773, 9.251179173, 9.408759001, 9.567247738, 9.726692319, 9.887044279, 10.04832679, 10.21053919, 10.37365647, 10.53770209, 10.70265086, 10.86852643, 11.03532811, 11.20300567, 11.37160761];
option = {
    title: {
        text: '堆叠区域图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['马尔代夫', '图瓦卢', '基里巴斯', '马绍尔']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: xData,
        },
        {
            axisLabel: {
                interval: 10,
            }
        }
    ],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: '马尔代夫',
            type: 'line',
            stack: '总量',
            areaStyle: {
                normal: {}
            },
            data: maerdaifu
        },
        {
            name: '图瓦卢',
            type: 'line',
            stack: '总量',
            areaStyle: {
                normal: {}
            },
            data: tuwalu
        },
        {
            name: '基里巴斯',
            type: 'line',
            stack: '总量',
            areaStyle: {
                normal: {}
            },
            data: jilibasi
        },
        {
            name: '马绍尔',
            type: 'line',
            stack: '总量',
            areaStyle: {
                normal: {}
            },
            data: mashaoer
        },
        // {
        //     name:'搜索引擎',
        //     type:'line',
        //     stack: '总量',
        //     label: {
        //         normal: {
        //             show: true,
        //             position: 'top'
        //         }
        //     },
        //     areaStyle: {normal: {}},
        //     data:[820, 932, 901, 934, 1290, 1330, 1320]
        // }
    ]
};