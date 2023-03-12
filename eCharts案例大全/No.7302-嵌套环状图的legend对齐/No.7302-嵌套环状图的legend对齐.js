//本作品只为交流使用  数据为虚构测试数据
option = {
    
	    title : {	      
	        x:'center',
	        textStyle: {
	            fontSize: 20
	        },
	        subtext: '',
	        subtextStyle: {
	        	color: '#000',
	        	fontSize: 16
	        }
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a}->{b}: <br/>{c}  ({d}%)",
	        textStyle : {
	        	align:'left',
	        	fontSize:15
	        }
	    },
	    legend: {
        orient: 'vertical',
        x: 'left',
        y: '20%',
       textStyle: {
            color: '#77899c',
            rich: {
                uname: {
                    width:50,
                    align: 'left'
                },
                unum: {
                    width: 60,
                    align: 'right'
                }
            }
        },
        data: ['不同行业','微小','线下'],
        formatter:function(name){
	        	var oa0 = option.series[0].data;
	        	var oa1 = option.series[1].data;
	        	var sum0=0;
	        	var sum1=0;
	        	for(var j=0; j<oa0.length; j++)
	        	{
	        		sum0+=oa0[j].value;
	        		sum1+=oa1[j].value;
	        	}    	 
	        	for(var i = 0; i < option.series[0].data.length; i++){	        	 
                    if(name===oa0[i].name && i===0){
                     	return   '{uname|}'+'{unum|'+option.series[0].name+'}{uname|'+option.series[1].name+'}\n'+'{uname|'+ name +'}{unum|' + (oa0[i].value/sum0 * 100).toFixed(2)+'%' + '}' +'{unum|' + (oa1[i].value/sum1 * 100).toFixed(2)+'%' + '}';
                     }else if (name==oa0[i].name){
                        return	'{uname|'+ name +'}{unum|' + (oa0[i].value/sum0 * 100).toFixed(2)+'%' + '}' +'{unum|' + (oa1[i].value/sum1 * 100).toFixed(2)+'%' + '}';
                    }
	        	}
	        }
    },
	series : [
	     {
            name: '合作数据',
            type: 'pie',
            
            radius: ['45%', '60%'],//radius : ['30%', '50%'],
            center: ['50%', '40%'],
            label: {
                show: false,
                position: 'center'
            },
           emphasis: {
                label: {
                    formatter: "{a}",
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [{value:27519.53, name:'不同行业'},{value:318315.80, name:'微小'},{value:85285.03, name:'线下'}],
            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
        },
	{
            name: '数量数据',
            type: 'pie',
            
            radius: ['25%', '40%'],
            center: ['50%', '40%'],
            label: {
                show: false,
                position: 'center'
            },
           emphasis: {
                label: {
                    formatter: "{a}",
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [{value:27149.53, name:'不同行业'},{value:31115.80, name:'微小'},{value:85211.03, name:'线下'}],
            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
        },
	    ]
};
