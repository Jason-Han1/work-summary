﻿var  getname= ['房屋及结构物','专用设备'];


var  getvalue= ['1','2'];



var data = [];

for(var i = 0;i<getname.length;i++){

data.push({name:getname[i],value:getvalue[i]})

}



//var colorList = ['#4785FF','#FDC57B','#01CBB3','#5FD5F3','#FF78E7','#9991F5'];

//var colorList = ['#51A3FC','#36C78B','#FEC279','#968AF5','#E790E8','#D2D2D2'];

var colorList = ['#3E6DFF','#00FCFD'];



option = {

    tooltip: {

        trigger: 'item',

        formatter: "{b} <br/> {c}%"

    },

    graphic: {

        elements: [{

            type: "image",

            z: -1,

            style: {

                image:'data:image/png;base64,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',

                width:230,

                height: 230

            },

            left: 'center',

            top: 'center',

        }]

    },



    series: [{

        type: 'pie',

       radius: ['70', '102'],

        center: ["50%", "50%"],
        roseType: 'radius',

        itemStyle: {

            normal: {

                color: function(params) {

                    return colorList[params.dataIndex]

                }

            }

        },

        

       // myChart.setOption(data) // data伟echarts所需要传入的参数，就是配置参数最多的那个玩意

        //myChart.dispatchAction({ type: 'highlight', dataIndex: 0 }); // dataIndex属性伟data传入的索引值

        //myChart.dispatchAction({ type: 'showTip', seriesIndex: 0, position: [120, 220], dataIndex: 0 }); // 点击生成detip工具条位置

       // myChart.on('mouseover', (e) => {

       //   if (e.dataIndex !== 0) { // 当鼠标移除的时候 使默认的索引值去除默认选中

        //    myChart.dispatchAction({ type: 'downplay', dataIndex: 0 });

       //   }

      //  });

        

        label: {

            normal: {

                show: false,

            },

        },

        labelLine: {

            normal: {

                show: false

            }

        },

        data: data

    }]

};

