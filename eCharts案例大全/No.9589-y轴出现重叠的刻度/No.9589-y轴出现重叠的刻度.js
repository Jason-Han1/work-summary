option = {
   legend: {
        data: ["88"]
            },
        grid: {
            bottom: 150,
                left: 80,
                right: 80
                },
            toolbox: {
                show: true,
                feature: {
                    saveAsImage: {}
                }
            },
            dataZoom: {         //************滚动条*************
            show: true,     //是否显示
            start: 0,       //初始化开始位置 单位%
            end: 50,        //初始化结束位置 单位%
            maxSpan: 100    //允许最大显示   单位%
                                        // zoomLock: true
            },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[
            220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330,
            310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290,
            330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 
            290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191,
            234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182,
            191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220,
            182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,
            220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310]
    }]
};