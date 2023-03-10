option = {
    tooltip: {
        trigger: 'axis',
        formatter: function(params, ticket, callback) {

            var res = params[0].name;

            for (var i = 0, l = params.length; i < l; i++) {
                if (params[i].seriesType === 'line') {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + 'h';
                } else {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + '个';
                }
            }
            return res;

        }
    },
    grid: {
        containLabel: true
    },
    legend: {
        data: [{
            name:'生猪',
            icon: 'circle',
            borderColor: '#CC6666',
            backgroundColor: "#CC6666",
            borderWidth: 2
        },{
            name:'能繁母猪',
            icon: 'circle',
            borderColor: '#CC6666',
            backgroundColor: "#CC6666",
            borderWidth: 2
        }],
        textStyle:{
            fontWeight: 'bold'
        }
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        data: ['2009-01','2009-02','2009-03','2009-04','2009-05','2009-06','2009-07','2009-08','2009-09','2009-10','2009-11','2009-12','2010-01','2010-02','2010-03','2010-04','2010-05','2010-06','2010-07','2010-08','2010-09','2010-10','2010-11','2010-12','2011-01','2011-02','2011-03','2011-04','2011-05','2011-06','2011-07','2011-08','2011-09','2011-10','2011-11','2011-12','2012-01','2012-02','2012-03','2012-04','2012-05','2012-06','2012-07','2012-08','2012-09','2012-10','2012-11','2012-12','2013-01','2013-02','2013-03','2013-04','2013-05','2013-06','2013-07','2013-08','2013-09','2013-10','2013-11','2013-12','2014-01','2014-02','2014-03','2014-04','2014-05','2014-06','2014-07','2014-08','2014-09','2014-10','2014-11','2014-12','2015-01','2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09','2015-10','2015-11','2015-12','2016-01','2016-02','2016-03','2016-04','2016-05','2016-06','2016-07','2016-08','2016-09','2016-10','2016-11','2016-12','2017-01','2017-02','2017-03','2017-04','2017-05','2017-06','2017-07','2017-08','2017-09','2017-10','2017-11','2017-12','2018-01','2018-02','2018-03','2018-04','2018-05','2018-06','2018-07','2018-08','2018-09','2018-10','2018-11','2018-12','2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09']
    }],
    dataZoom: [{
        type: 'slider',
        xAxisIndex: 0,
        filterMode: 'empty',
        start: 0,
        end: 100
    }, {
        type: 'slider',
        yAxisIndex: 0,
        filterMode: 'empty',
        start: 0,
        end: 100
    }, {
        type: 'inside',
        xAxisIndex: 0,
        filterMode: 'empty',
        start: 0,
        end: 100
    }, {
        type: 'inside',
        yAxisIndex: 0,
        filterMode: 'empty',
        start: 0,
        end: 100
    }],
    yAxis: [{
        type: 'value',
        name: '生猪',
        min: 0,
        position: 'right',
        axisLabel: {
            formatter: '{value} 万头'
        },
        splitLine:{       
          show:false
        }
    }, {
        type: 'value',
        name: '能繁母猪',
        min: 0,
        position: 'left',
        axisLabel: {
            formatter: '{value} 万头'
        },
        splitLine:{       
          show:false
        }
    }],
    series: [ {
        name: '生猪',
        type: 'line',
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        lineStyle: {
            normal: {
                width: 4,
                color: "#993333",
                opacity: 0.8
            }
        },
        itemStyle: {
            color: "#993333",
            borderWidth: 1,
            opacity: 0.9
        },
        data: [45616,44594,44861,45489,45325,44720,45006,45816,46516,46921,46590,46900,45500,44330,44130,43600,43370,43670,44000,44180,45450,45440,45470,45380,44510,44410,44750,44920,45280,45640,46142,46557,47158,47516,47625,47334,46467,45846,46167,46306,46121,46213,46213,46629,47235,47282,46904,46294,44813,43962,44358,44669,44758,45206,45748,46160,46483,46762,46856,45731,43810,43416,43416,42852,42809,42895,43024,43282,43628,43541,43149,42157,40555,38973,38700,38692,38615,38461,38538,38731,38963,39080,38806,38379,37343,36671,37001,37223,37372,37634,37596,37671,37709,37709,37483,36733,35668,35597,35953,36097,35556,35485,35237,35061,34991,34921,34886,34153,33743,33439,33907,33636,32997,32601,32340,32243,32501,32534,32306,31111,29338,27754,27421,26626,25508,24207,21932,19783,19190]
    },{
        name: '能繁母猪',
        type: 'line',
        label: {
            normal: {
                show: true,
                position: 'bottom',
            }
        },
        lineStyle: {
            normal: {
                width: 4,
                color: "#CC6666",
                opacity: 0.8
            }
        },
        itemStyle: {
            color: "#CC6666",
            borderWidth: 1,
            opacity: 0.9
        },
        data: [4964,4987,4942,4922,4880,4832,4810,4816,4840,4875,4873,4910,4870,4890,4840,4760,4700,4680,4630,4580,4700,4690,4660,4750,4740,4730,4710,4695,4710,4720,4786,4815,4845,4880,4905,4928,4950,4949,4954,4954,4949,4954,4939,4959,5063,5078,5063,5068,5068,5058,5033,5013,5013,5008,4998,5013,5008,4998,4973,4938,4908,4869,4791,4686,4639,4593,4538,4502,4479,4421,4368,4289,4190,4110,4040,3971,3923,3899,3876,3860,3852,3848,3825,3798,3783,3760,3760,3771,3760,3760,3752,3729,3710,3703,3684,3666,3651,3633,3633,3633,3604,3586,3554,3522,3497,3487,3466,3424,3414,3414,3417,3369,3285,3242,3180,3145,3136,3098,3058,2988,2882,2738,2675,2608,2608,2376,2165,1968,1913]
    }]
};
