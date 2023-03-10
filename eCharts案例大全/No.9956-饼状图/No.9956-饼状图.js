
var m2R2Data= [
               {value:335, legendname:'种类01',name:"种类01  335",itemStyle:{color:"#8d7fec"}},
               {value:335, legendname:'种类09',name:"种类11  335",itemStyle:{color:"#57e7ec"}},
               {value:335, legendname:'种类10',name:"种类12  335",itemStyle:{color:"#cf9ef1"}}, 
            ];


 option = {
    title: [
    {
        text: '标题',
        textStyle: {
            fontSize: 16,
            color: "black"
        },
        left: "2%"
    },    
    {
        text: '合计',
        subtext: 12312+'个',
        textStyle:{
            fontSize:20,
            color:"black"
        },
        subtextStyle: {
            fontSize: 20,
            color: 'black'
        },
        textAlign:"center",
        x: '34.5%',
        y: '44%',
    }],
    tooltip: {
        trigger: 'item',
        formatter:function (parms){
          var str=  parms.seriesName+"</br>"+
            parms.marker+""+parms.data.legendname+"</br>"+
            "数量："+ parms.data.value+"</br>"+
            "占比："+ parms.percent+"%";
            return  str ;
        }
    },
    legend: {
        type:"scroll",
        orient: 'vertical',
        left:'70%',
        align:'left',
        top:'middle',
        textStyle: {
            color:'#8C8C8C'
        },
        height:250
    },
    series: [
        {
            name:'标题',
            type:'pie',
            center: ['35%', '50%'],
            radius: ['40%', '65%'],
             clockwise: false, //饼图的扇区是否是顺时针排布
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'outter',
                     formatter:function (parms){
                         return parms.data.legendname
                     }
                }
            },
            labelLine: {
                normal: {
                  length:5,
                  length2:3,
                  smooth:true,
                }
            },
            data:m2R2Data
        }
    ]
};