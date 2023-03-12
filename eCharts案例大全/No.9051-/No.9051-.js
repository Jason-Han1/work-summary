function initEcharts(id, xArr, peak_demand_high_arr, peak_demand_low_arr, peak_max_arr, peak_min_arr, load_net_arr, load_arr, wind_arr, solar_arr) {
    myChart.clear();
    var option = {
        tooltip: {
            trigger: 'axis',
            formatter: function(params) {
                var result = '';
                for (var i = 0; i < params.length; i++) {
                    result += params[i].seriesName + '：' +
                        params[i].value + "/万千瓦" + '<br/>';
                }
                return result;
            }
        },
        graphic: [],
        toolbox: {
            show: true,
            x: '81%',
            y: '3%',
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        legend: {
            data: ['容量需求上限', "容量需求下限", '调峰容量上限', '调峰容量下限', '净负荷', '负荷', '风电', '光伏'],
            x: 'center',
            y: 'bottom'
        },

        grid: {
            y2: 80
        },
        xAxis: [{
            name: '时间/15min',
            splitLine: {
                show: false
            }, //去除网格线
            type: 'category',
            splitNumber: 8,
            splitArea: {
                show: true
            },
            axisLine: {
                lineStyle: {
                    color: '#666',
                    width: 2
                },
                symbol: ['none', 'arrow']
            },
            axisLabel: { //调整x轴的lable
                interval: 2,
                textStyle: {
                    fontSize: 12 // 让字体变大
                }
            },
            data: xArr
        }],
        calculable: true,
        yAxis: [{
            name: '万千瓦',
            splitLine: {
                show: false
            }, //去除网格线
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#666',
                    width: 2
                },
                symbol: ['none', 'arrow']
            },
            axisLabel: { //调整x轴的lable
                textStyle: {
                    fontSize: 12 // 让字体变大
                }
            }
        }],
        visualMap: {
            top: 0,
            left: 170,
            itemHeight: 10, //颜色块大小
            padding: [0, 0, 0, 0], //内间距
            itemGap: 2, //上下间距
            seriesIndex: 1,
            pieces: [{
                    min: 5000,
                    color: 'red',
                    label: '超过最大调峰容量'
                }, // 不指定 max，表示 max 为无限大（Infinity）。
                //  {min: -500, max: 500,color: '#00FFFF', label: '正常'},
                {
                    min: -500,
                    max: 5000,
                    color: '#575757',
                    label: '低于最小调峰容量'
                }
            ],
            formatter: function(value) { //标签的格式化工具。
                alert(value);
                return 'aaaa' + value; // 范围标签显示内容。
            }
        },
        series: []
    };
    option.series.push({
            name: '容量需求上限',
            type: 'line',
            symbol: 'none',
            color: '#4472C4',
            data: peak_demand_high_arr,
            smooth: true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 2,
                        type: 'dotted'
                    }
                }
            }
        }, {
            name: '容量需求下限',
            type: 'line',
            symbol: 'none',
            color: '#ED7D31',
            data: peak_demand_low_arr,
            smooth: true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 2,
                        type: 'dotted'
                    }
                }
            }

        }, {
            name: '调峰容量上限',
            type: 'line',
            symbol: 'none',
            color: '#A5A5A5',
            data: peak_max_arr,
            smooth: true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 2,
                        type: 'solid'
                    }
                }
            }

        }, {
            name: '调峰容量下限',
            type: 'line',
            symbol: 'none',
            color: '#FFC000',
            data: peak_min_arr,
            smooth: true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 2,
                        type: 'solid'
                    }
                }
            }

        }, {
            name: '净负荷',
            type: 'line',
            symbol: 'none',
            color: '#5B9BD5',
            data: load_net_arr,
            smooth: true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 2,
                        type: 'solid' //'dotted'虚线 'solid'实线
                    }
                }
            }

        }

        , {
            name: '负荷',
            type: 'line',
            symbol: 'none',
            color: '#70AD47',
            data: load_arr,
            smooth: true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 2,
                        type: 'solid' //'dotted'虚线 'solid'实线
                    }
                }
            }

        }

        , {
            name: '风电',
            type: 'line',
            symbol: 'none',
            color: '#264478',
            data: wind_arr,
            smooth: true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 2,
                        type: 'solid' //'dotted'虚线 'solid'实线
                    }
                }
            }
        }

        , {
            name: '光伏',
            type: 'line',
            symbol: 'none',
            color: '#9E480E',
            data: solar_arr,
            smooth: true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 2,
                        type: 'solid' //'dotted'虚线 'solid'实线
                    }
                }
            }

        }
    );

    myChart.setOption(option);
}

var xArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96];
var peak_demand_high_arr = [6060.684736638638, 6023.696223995172, 5997.274880571096, 5976.634768294658, 5956.6024795886615, 5943.804302536733, 5929.829282637194, 5907.254495681557, 5882.7364144134535, 5864.403232482477, 5845.84156284115, 5833.556023818356, 5820.940878841998, 5814.0552405070885, 5807.61895298606, 5805.929874238012, 5804.230060628143, 5805.44653667942, 5814.6780348522325, 5826.231442883931, 5843.131083839408, 5868.256640868165, 5915.2645530996915, 5974.680128135194, 6046.059213308934, 6147.914378519016, 6237.152916414926, 6289.175028460199, 6267.304597050055, 6235.988736346881, 6263.384001010006, 6339.238125585345, 6416.015020224793, 6483.343572664859, 6505.166864695577, 6482.435572491867, 6451.872145377597, 6421.799532581169, 6395.906092884498, 6361.347863955268, 6313.354550015879, 6289.566664921048, 6262.673665917591, 6230.775417580158, 6205.094214422043, 6184.061871867185, 6112.332901980018, 6039.008204599543, 5943.906465860895, 5839.767459274123, 5802.65036916349, 5818.493662723732, 5858.442242645896, 5936.88435826794, 6005.704269523276, 6062.9965352991, 6130.34569392783, 6195.865933537594, 6258.039066461904, 6329.142402010011, 6390.216679671906, 6472.411137648483, 6572.100213552683, 6651.922213635775, 6715.454266226606, 6766.8248027132095, 6836.364744658638, 6893.872082257087, 6919.248649538765, 6952.294301799537, 7005.7953766780365, 7032.659295557728, 7048.18044147398, 7034.967549116567, 7031.924781350747, 7009.3174599665645, 6977.451574460022, 6931.263595488708, 6894.144430274685, 6846.488818223428, 6816.808933284909, 6779.524423048673, 6747.842539055079, 6707.487862664352, 6649.2058249408265, 6625.977562557856, 6591.890635923424, 6510.450883502183, 6415.1889019251, 6326.547439649471, 6244.931299460364, 6170.355808500227, 6131.219326500367, 6178.589022630866, 6219.299837260368, 6184.038228073964];
var peak_demand_low_arr = [4741.786531598229, 4704.7980189547625, 4678.376675530687, 4657.736563254249, 4637.704274548252, 4624.906097496324, 4610.931077596785, 4588.356290641148, 4563.838209373044, 4545.505027442067, 4526.943357800741, 4514.657818777947, 4502.0426738015885, 4495.157035466679, 4488.720747945651, 4487.031669197603, 4485.331855587734, 4486.548331639011, 4495.779829811823, 4507.333237843522, 4524.232878798999, 4549.358435827756, 4596.366348059282, 4655.781923094784, 4727.161008268525, 4829.016173478607, 4918.254711374517, 4970.27682341979, 4948.406392009646, 4917.090531306471, 4944.485795969596, 5020.339920544936, 5097.116815184384, 5164.445367624449, 5186.2686596551675, 5163.537367451458, 5132.973940337188, 5102.90132754076, 5077.007887844089, 5042.449658914858, 4994.45634497547, 4970.668459880639, 4943.775460877182, 4911.877212539749, 4886.196009381633, 4865.163666826776, 4793.434696939608, 4720.109999559134, 4625.008260820486, 4520.869254233714, 4483.752164123081, 4499.595457683323, 4539.544037605487, 4617.986153227531, 4686.8060644828665, 4744.098330258691, 4811.447488887421, 4876.967728497185, 4939.140861421495, 5010.244196969602, 5071.318474631496, 5153.512932608074, 5253.202008512274, 5333.024008595366, 5396.5560611861965, 5447.9265976728, 5517.466539618229, 5574.9738772166775, 5600.3504444983555, 5633.396096759127, 5686.897171637627, 5713.761090517319, 5729.282236433571, 5716.069344076158, 5713.026576310338, 5690.419254926155, 5658.553369419613, 5612.365390448299, 5575.246225234276, 5527.590613183019, 5497.910728244499, 5460.626218008264, 5428.94433401467, 5388.589657623943, 5330.307619900417, 5307.079357517447, 5272.992430883015, 5191.552678461774, 5096.290696884691, 5007.649234609062, 4926.033094419955, 4851.457603459818, 4812.321121459958, 4859.690817590456, 4900.401632219959, 4865.140023033555];
var peak_max_arr = [6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 6860.18044147398, 6860.18044147398, 6860.18044147398, 6860.18044147398, 6860.18044147398, 6860.18044147398, 6860.18044147398, 6860.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 7048.18044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398, 6507.68044147398];
var peak_min_arr = [4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 4948.9902207369905, 4948.9902207369905, 4948.9902207369905, 4948.9902207369905, 4948.9902207369905, 4948.9902207369905, 4948.9902207369905, 4948.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 5136.9902207369905, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699, 4596.49022073699];
var load_net_arr = [4841.612861984373, 4804.6243493409065, 4778.203005916831, 4757.562893640393, 4737.530604934396, 4724.732427882468, 4710.757407982929, 4688.182621027292, 4663.664539759188, 4645.331357828211, 4626.769688186885, 4614.484149164091, 4601.869004187733, 4594.983365852823, 4588.547078331795, 4586.857999583747, 4585.158185973878, 4586.374662025155, 4595.606160197967, 4607.159568229666, 4624.059209185143, 4649.1847662139, 4696.192678445426, 4755.608253480928, 4826.987338654669, 4928.842503864751, 5018.081041760661, 5070.103153805934, 5048.23272239579, 5016.916861692615, 5044.3121263557405, 5120.16625093108, 5196.943145570528, 5264.271698010593, 5286.094990041312, 5263.363697837602, 5232.800270723332, 5202.727657926904, 5176.834218230233, 5142.2759893010025, 5094.282675361614, 5070.494790266783, 5043.601791263326, 5011.703542925893, 4986.022339767777, 4964.98999721292, 4893.261027325752, 4819.936329945278, 4724.83459120663, 4620.695584619858, 4583.578494509225, 4599.421788069467, 4639.370367991631, 4717.812483613675, 4786.632394869011, 4843.924660644835, 4911.273819273565, 4976.794058883329, 5038.967191807639, 5110.070527355746, 5171.1448050176405, 5253.339262994218, 5353.028338898418, 5432.85033898151, 5496.382391572341, 5547.752928058944, 5617.292870004373, 5674.8002076028215, 5700.1767748844995, 5733.2224271452715, 5786.723502023771, 5813.587420903463, 5829.108566819715, 5815.895674462302, 5812.852906696482, 5790.245585312299, 5758.379699805757, 5712.191720834443, 5675.07255562042, 5627.416943569163, 5597.737058630643, 5560.452548394408, 5528.770664400814, 5488.415988010087, 5430.133950286561, 5406.905687903591, 5372.818761269159, 5291.379008847918, 5196.117027270835, 5107.475564995206, 5025.859424806099, 4951.283933845962, 4912.147451846102, 4959.5171479766, 5000.227962606103, 4964.966353419699];
var load_arr = [5300.062861984373, 5259.891016007573, 5231.478005916831, 5207.80456030706, 5183.938938267729, 5168.682427882468, 5151.757407982929, 5129.849287693959, 5105.189539759188, 5087.748024494878, 5065.186354853552, 5046.825815830757, 5029.969004187733, 5013.616699186156, 5000.363744998462, 4994.516332917081, 4991.316519307211, 4993.966328691822, 4999.831160197968, 5007.9063424232145, 5024.328832841057, 5049.570518902072, 5094.016871993814, 5152.632178212111, 5226.79862897725, 5329.545729671203, 5421.834267567113, 5476.326003268299, 5462.729496589339, 5439.817668144228, 5483.876104850364, 5584.097433726779, 5698.275672452249, 5806.698042096615, 5873.657355632709, 5903.458052676312, 5925.7091416910735, 5942.81609878712, 5957.420777370018, 5964.770075322508, 5952.298804393872, 5963.14774725603, 5968.876791263326, 5963.535532173206, 5961.271802133369, 5960.568491836576, 5905.741941304246, 5842.126114891515, 5755.933515937812, 5651.282143759643, 5609.213978380192, 5612.608347209252, 5632.17843250776, 5686.744204043782, 5730.352824976538, 5757.054499354513, 5782.245862284318, 5803.513682539243, 5815.421492882908, 5832.167570366499, 5836.243998566028, 5853.896789875938, 5877.89285502745, 5887.4559841428, 5897.499595873416, 5901.216100101955, 5927.463837746309, 5953.4523581404555, 5962.736452303854, 5991.875652951723, 6046.700383744202, 6076.283388645398, 6095.359373271327, 6090.295674462302, 6093.777906696482, 6077.678918645633, 6050.31303313909, 6010.075054167776, 5978.0642222870865, 5934.9836102358295, 5908.145391963977, 5875.510881727741, 5849.045664400814, 5810.415988010087, 5756.7256169532275, 5739.330687903591, 5712.393761269159, 5637.620675514585, 5548.008693937501, 5461.017231661873, 5381.117758139432, 5312.283933845962, 5277.7974518461015, 5327.942147976601, 5371.752962606102, 5343.791353419699];
var wind_arr = [458.4500000000001, 455.2666666666666, 453.2749999999999, 450.24166666666645, 446.4083333333331, 443.9500000000001, 441, 441.6666666666667, 441.52500000000003, 442.41666666666674, 438.4166666666665, 432.3416666666667, 428.1000000000001, 418.63333333333327, 411.8166666666667, 407.6583333333334, 406.15833333333325, 407.5916666666668, 404.225, 400.6500000000002, 398.1083333333333, 397.70833333333337, 393.55, 389.82499999999993, 387.9833333333333, 385.1333333333334, 385.84999999999997, 385.8250000000001, 389.7333333333335, 388.34166666666664, 386.8166666666666, 381.2, 376.5583333333333, 368.8833333333333, 356.43333333333334, 342.84166666666675, 327.2583333333334, 314.1583333333335, 300.6833333333334, 291.8166666666667, 285.16666666666674, 281.1583333333333, 278.775, 277.0416666666667, 278.40000000000015, 279.76666666666677, 285.6583333333333, 288.88333333333344, 294.56666666666666, 298.68333333333334, 301.3666666666667, 302.11666666666673, 302.21666666666664, 302.21666666666664, 304.16666666666674, 306.775, 303.9666666666666, 303.55833333333334, 300.25, 297.25833333333344, 293.9916666666668, 288.7833333333333, 285.1333333333334, 277.85833333333335, 273.13333333333327, 267.60833333333335, 259.80000000000007, 253.88333333333338, 252.0166666666667, 253.0833333333333, 256.7833333333334, 259.99166666666656, 266.025, 274.4, 280.92499999999995, 287.43333333333334, 291.93333333333334, 297.8833333333333, 302.9916666666667, 307.56666666666666, 310.40833333333336, 315.0583333333334, 320.27500000000003, 322.0000000000001, 326.5916666666667, 332.425, 339.575, 346.24166666666673, 351.89166666666665, 353.54166666666674, 355.25833333333344, 361, 365.6500000000001, 368.42499999999995, 371.5250000000001, 378.825];
var solar_arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.09677419354838711, 2.161290322580645, 2.6774193548387095, 4.274193548387097, 7.198924731182796, 11.827956989247314, 15.569892473118282, 17.90322580645162, 20.397849462365592, 24.763440860215056, 34.55913978494623, 52.74731182795698, 82.73118279569894, 124.77419354838709, 173.5430107526882, 231.12903225806448, 297.252688172043, 365.6505376344087, 425.9301075268818, 479.90322580645164, 530.6774193548388, 572.8494623655913, 611.4946236559139, 646.5, 674.7903225806455, 696.8494623655915, 715.8118279569895, 726.8225806451613, 733.3064516129034, 736.5322580645163, 731.9032258064516, 724.268817204301, 711.0698924731183, 690.5913978494623, 666.7150537634409, 639.5537634408603, 606.3548387096777, 567.005376344086, 523.1612903225805, 476.204301075269, 424.83870967741933, 371.10752688172045, 311.7741935483872, 239.73118279569894, 176.747311827957, 127.98387096774195, 85.85483870967741, 50.370967741935495, 24.76881720430108, 10.543010752688172, 5.569892473118279, 3.1935483870967745, 2.704301075268817, 0.22580645161290322, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
initEcharts('chart', xArr, peak_demand_high_arr, peak_demand_low_arr, peak_max_arr, peak_min_arr, load_net_arr, load_arr, wind_arr, solar_arr);