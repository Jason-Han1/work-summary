var option = {
    title : {
	text: '收支统计',
	subtext: '',
	x:'center'
	},
    tooltip : {
    	trigger: 'item',
    	formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
    	orient : 'vertical',
    	x : 'left',
    	data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
    },
    toolbox: {
    	show : true,
    	feature : {
    		mark : {show: true},
    		dataView : {show: true, readOnly: false},
    		magicType : {
    			show: true, 
    			type: ['pie', 'funnel']
    		},
    		restore : {show: true},
    		saveAsImage : {show: true}
    	}
    },
    calculable : false,
    series : [
    	{
    		name:'访问来源',
    		type:'pie',
    		selectedMode: 'single',
    		radius : [0, 70],
    		
    		// for funnel
    		x: '20%',
    		width: '40%',
    		funnelAlign: 'right',
    		max: 1548,
    		
    		itemStyle : {
    			normal : {
    				label : {
    					position : 'inner'
    				},
    				labelLine : {
    					show : false
    				}
    			}
    		},
    		data:[
    			{value:335, name:'直达'},
    			{value:679, name:'营销广告'},
    			{value:1548, name:'搜索引擎', selected:true}
    		]
    	},
    	{
    		name:'访问来源',
    		type:'pie',
    		radius : [100, 140],
    		
    		// for funnel
    		x: '60%',
    		width: '35%',
    		funnelAlign: 'left',
    		max: 1048,
    		
    		data:[
    			{value:335, name:'直达'},
    			{value:310, name:'邮件营销'},
    			{value:234, name:'联盟广告'},
    			{value:135, name:'视频广告'},
    			{value:1048, name:'百度'},
    			{value:251, name:'谷歌'},
    			{value:147, name:'必应'},
    			{value:102, name:'其他'}
    		]
    	}
    ]
};
