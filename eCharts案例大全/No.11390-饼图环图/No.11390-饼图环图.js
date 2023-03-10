   var colors = ['#9b92fe', '#7ba5c6', '#1f62ea', '#1990e9', '#49ddfc', '#6bdafe', '#39f381', '#e9e37c'];
    // option
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: '10%',
           
            data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', ]
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '45%'],
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                color: colors,
                data: [
                    {
                        value: 335,
                        name: '直达'
                    },
                    {
                        value: 679,
                        name: '营销广告'
                    },
                    {
                        value: 1548,
                        name: '搜索引擎'
                    }
            ]
        },
            {
                name: '访问来源',
                type: 'pie',
                radius: ['64%', '85%'],
                color: colors,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    show: false
                },
                data: [
                    {
                        value: 335,
                        name: '直达'
                    },
                    {
                        value: 310,
                        name: '邮件营销'
                    },
                    {
                        value: 234,
                        name: '联盟广告'
                    },
                    {
                        value: 135,
                        name: '视频广告'
                    },
                    {
                        value: 1048,
                        name: '百度'
                    },
                    {
                        value: 251,
                        name: '谷歌'
                    },
                    {
                        value: 147,
                        name: '必应'
                    },
                    {
                        value: 102,
                        name: '其他'
                    }
            ]
        }
    ]
    };