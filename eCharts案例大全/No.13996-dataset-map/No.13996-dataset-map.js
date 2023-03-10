option = {
    visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],           // 文本，默认为数值文本
        calculable: true,
        dimension:1,
    },
    tooltip:{
        padding: 0,
        enterable:true,
        transitionDuration:1,
        textStyle : {
            color: '#000',
            decoration: 'none',
        },
    },
    dataset: {
        source: [
            ['product', '2015', '2016', '2017'],
            ['北京', Math.round(Math.random()*1000)],
            ['天津', Math.round(Math.random()*1000)],
            ['上海', Math.round(Math.random()*1000)],
            ['河北', Math.round(Math.random()*1000)],
            ['河南', Math.round(Math.random()*1000)],
            ['云南', Math.round(Math.random()*1000)],
            ['黑龙江', Math.round(Math.random()*1000)],
            ['湖南', Math.round(Math.random()*1000)],
            ['安徽', Math.round(Math.random()*1000)],
            ['新疆', Math.round(Math.random()*1000)],
            ['江苏', Math.round(Math.random()*1000)],
            ['浙江', Math.round(Math.random()*1000)],
            ['江西', Math.round(Math.random()*1000)],
            ['湖北', Math.round(Math.random()*1000)],
            ['广西', Math.round(Math.random()*1000)],
            ['甘肃', Math.round(Math.random()*1000)],
            ['山西', Math.round(Math.random()*1000)],
            ['内蒙古', Math.round(Math.random()*1000)],
            ['吉林', Math.round(Math.random()*1000)],
            ['陕西', Math.round(Math.random()*1000)],
            ['福建', Math.round(Math.random()*1000)],
            ['贵州', Math.round(Math.random()*1000)],
            ['广东', Math.round(Math.random()*1000)],
            ['青海', Math.round(Math.random()*1000)],
            ['西藏', Math.round(Math.random()*1000)],
            ['四川', Math.round(Math.random()*1000)],
            ['宁夏', Math.round(Math.random()*1000)],
            ['海南', Math.round(Math.random()*1000)],
            ['台湾', Math.round(Math.random()*1000)],
            ['香港', Math.round(Math.random()*1000)],
            ['澳门', Math.round(Math.random()*1000)],
            ['山东', Math.round(Math.random()*1000)],
            ['辽宁', Math.round(Math.random()*1000)],
            ['重庆', Math.round(Math.random()*1000)],
        ]
    },
    series : [
        {
            name: '2015',
            type: 'map',
            mapType: 'china',
        },
        ]
}