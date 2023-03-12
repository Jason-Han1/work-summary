

texts = [0,254,770,1327,1969,2252,2796,3198,3702,4052,4469,4839,5304,5881,6079,6380,6913,7494,7926,8458,9065,9565,10041,10260,10786,11450,11806,12055,12556,13049,13673,13932,14301,15040,15306,15920,16243,16661,16975,17429,17813,18279,18632,19648,19869,20138,20672,20755,21482,21858,22485,23203,23579,24072,24585,25192,25572,26006,26404];
bottoms = [53.01,49.31,44.6,43.45,40.45,39.97,38.08,34.22,32.7,31.09,31.17,29.54,30.91,28.5,27.33,26.9,24.29,24.6,23.35,20.63,18.75,17.79,16.36,15.72,14.86,13.03,11.92,9.72,8.32,7.1,6.34,5.89,6.85,5.42,5.57,3.8,2.52,2.12,3.1,1.74,2.35,2.33,1.21,-1.23,-1.37,-0.72,-2.01,-2.38,-1.48,-2.98,-3.36,-3.64,-3.45,-3.73,-4.06,-4,-4.41,-6.14,-8.29];
tops = [56.95,52.82,49.81,47.51,44.53,43.61,41.21,39.22,38.12,37.32,36.63,35.94,34.49,32.39,31.84,30.98,29.56,28.33,26.92,24.74,22.7,22.19,20.87,20.3,18.84,16.93,15.46,14.67,13.64,12.82,12.09,12.08,11.66,10.84,10.62,9.32,8.81,8.44,8.28,8.13,8,7.68,7.51,6.61,6.33,6.2,5.47,5.5,5.46,5.15,4.74,4.18,3.92,3.33,2.69,2.13,1.46,0.75,-0.42];

option = {
    legend: {
        data:['填充区域下折现高','填充区域上折现高']
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    // dataZoom: [{
    //     type: 'inside',
    //     start: 0,
    //     end: 100
    // }, {
    //     start: 0,
    //     end: 100,
    //     handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
    //     handleSize: '80%',
    //     handleStyle: {
    //         color: '#fff',
    //         shadowBlur: 3,
    //         shadowColor: 'rgba(0, 0, 0, 0.6)',
    //         shadowOffsetX: 2,
    //         shadowOffsetY: 2
    //     }
    // }],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {
                onZero: false
            },
            data : texts
        }
    ],
    yAxis: {
	        type: 'value',
	        splitLine: {
                show: false
            }
	    },
    series : [
        {
            name:'填充区域上折现高',
            type:'line',
            symbol: 'none',
            smooth: true,
            areaStyle: {
                color: '#0000CD',
                origin: 'start',
                opacity: 0.5
            },
            color: 'blue',
            data:tops
        },
        {
            name:'填充区域下折现高',
            type:'line',
            symbol: 'none',
            smooth: true,
            areaStyle: {
                color: '#fff',
                origin: 'start',
                shadowColor: '#F3F3F3',
                shadowOffsetX: 1
            },
            color: 'yellow',
            data:bottoms
        }
    ]
};