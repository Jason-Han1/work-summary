 var option = {
     backgroundColor: '#0e2147',
     grid: {
         left: '2.5%',
         top: '19.5%',
         right: '2.8%',
         bottom: '22%',
         containLabel: true
     },
     tooltip: {
         trigger: 'axis',
         borderColor: '#43845D',
         borderWidth: 1,
         backgroundColor: 'rgba(11,42,89,0.3)',
         borderRadius: 20,
         padding: 10,
         textStyle: {
             color: '#fff',
             fontSize: 30
         },
         axisPointer: {
             lineStyle: {
                 color: '#fef018',
                 width: '3'
             }
         }
     },
     xAxis: [{
         type: 'category',
         name: '个数',
         nameLocation: 'center',
         nameGap: 35,
         nameTextStyle: {
             color: '#8796AD',
             fontSize: '16',
         },
         axisLabel: {
             interval: 10,
             textStyle: {
                 color: '#8796AD',
                 fontSize: '14',
             }
         },
         data: [1,
             2,
             3,
             4,
             5,
             6,
             7,
             8,
             9,
             10,
             11,
             12,
             13,
             14,
             15,
             16,
             17,
             18,
             19,
             20,
             21,
             22,
             23,
             24,
             25,
             26,
             27,
             28,
             29,
             30,
             31,
             32,
             33,
             34,
             35,
             36,
             37,
             38,
             39,
             40,
             41,
             42,
             43,
             44,
             45,
             46,
             47,
             48,
             49,
             50,
             51,
             52,
             53,
             54,
             55,
             56,
             57,
             58,
             59,
             60,
             61,
             62,
             63,
             64,
             65,
             66,
             67,
             68,
             69,
             70,
             71,
             72,
             73,
             74,
             75,
             76,
             77,
             78,
             79,
             80,
             81,
             82,
             83,
             84,
             85,
         ],
         axisLine: {
             lineStyle: {
                 width: 2,
                 color: 'rgba(63,92,122,1)'
             }
         },
         axisTick: {
             show: false
         },
     }],
     yAxis: [{
         type: 'value',
         name: '变化率/A',
         nameLocation: 'middle',
         nameGap: 45,
         nameTextStyle: {
             color: '#8796AD',
             fontSize: '16',
         },
         axisLabel: {
             textStyle: {
                 color: '#8796AD',
                 fontSize: '14',
             }
         },
         axisTick: {
             show: false
         },
         axisLine: {
             lineStyle: {
                 width: 2,
                 color: 'rgba(160,160,160,0.3)',
             }
         },
         splitLine: {
             lineStyle: {
                 color: 'rgba(160,160,160,0.3)',
             }
         },
     }, ],
     series: [{
         type: 'bar',
         name: '变化率',
         barWidth: '40%',
         itemStyle: {
             normal: {
                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                     offset: 0,
                     color: '#de682e'
                 }, {
                     offset: 1,
                     color: '#ecc232'
                 }]),
             }
         },
         label: {
             normal: {
                 show: false
             }
         },
         data: [-0.0216435185185184,
             0.00145061728395052, -0.0225771604938273, -0.0280246913580248, -0.020162037037037, -0.0144135802469136, -0.0186111111111112, -0.0316203703703708, -0.00981481481481491, -0.00981481481481491, -0.0132330246913581, -0.0144984567901235, -0.0186111111111112,
             0.0130478395061728, -0.0206327160493828, -0.0264043209876546,
             0.00143518518518534,
             0.00597222222222239, -0.00436728395061755,
             0.00629629629629665,
             0.00955246913580267, -0.0264043209876546,
             0.000169753086419706, -0.00760802469135807,
             0.0011342592592592, -0.00516975308641988,
             0.00246141975308636,
             0.0011342592592592, -0.0208101851851853,
             0.00312499999999998, -0.0130324074074076, -0.00436728395061755, -0.00911265432098761, -0.00479938271604931,
             0.00726851851851871, -0.0098842592592593,
             0.00743827160493822, -0.00734567901234559, -0.0205709876543212,
             0.00211419753086415, -0.00501543209876529, -0.0229706790123456, -0.0260802469135803, -0.00147376543209876,
             0.00564043209876543, -0.00929783950617285, -0.0117052469135804, -0.00307098765432125, -0.00981481481481491, -0.00958333333333351, -0.0105864197530865, -0.00583333333333344, -0.0157484567901235, -0.0189506172839508, -0.0152160493827162, -0.0149614197530864, -0.0132330246913581, -0.0238117283950618, -0.020162037037037, -0.00371913580246903, -0.021219135802469, -0.028348765432099, -0.0146913580246914, -0.0238117283950618, -0.00209876543209882,
             0.00308641975308658, -0.0086342592592593, -0.00736882716049386, -0.0205709876543212, -0.00697530864197535,
             0.0011342592592592, -0.0104783950617285, -0.00981481481481491, -0.0182793209876544, -0.0149614197530864, -0.0140895061728395, -0.0168595679012346, -0.0063117283950618, -0.00371913580246919, -0.00436728395061735,
             0.00341049382716047, -0.0100308641975306,
             0.000169753086419706, -0.0146064814814816,
             0.000169753086419706,
         ]

     }]
 };