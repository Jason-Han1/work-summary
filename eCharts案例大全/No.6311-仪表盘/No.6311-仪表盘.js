 var value = '75';
   var subtext = `样本量：2233`;
   var max =100;
   option = {
       title: {
           show: true,
           text: value || "仪表盘",
           subtext,
           subtextStyle: {
               align: "center",
           },
           left: 400,
           bottom: 10,
           textStyle: {
               color: '#414957',
               fontSize: 24,
               align: 'center',
               fontFamily: '"Microsoft Yahei","微软雅黑"',
           },
       },
       angleAxis: {
           axisLine: {
               show: false
           },
           axisLabel: {
               show: false
           },
           splitLine: {
               show: false
           },
           axisTick: {
               show: false
           },
           min: 0,
           max: 132,
           // boundaryGap: ['0', '10'],
           startAngle: 225
       },
       radiusAxis: {
           type: 'category',
           axisLine: {
               show: false
           },
           axisTick: {
               show: false
           },
           axisLabel: {
               show: false
           },
           data: ['a', 'b', 'c'],
           z: 10
       },
       polar: {
           radius: '105%'
       },
       series: [{
               type: 'bar',
               data: [, , value],
               z: 1,
               coordinateSystem: 'polar',
               barMaxWidth: 24.2,
               name: '警告事件',
               roundCap: true,
               color: new echarts.graphic.LinearGradient(
                   0, 0, 1, 0,
                   [{
                           offset: 0,
                           color: '#FFC4C4',
                       },
                       {
                           offset: 1,
                           color: '#DE585D',
                       }
                   ]
               ),
               barGap: '-100%',
           },
        //   {
        //       type: 'bar',
        //       data: [, , ],
        //       z: 2,
        //       coordinateSystem: 'polar',
        //       barMaxWidth: 24.2,
        //       name: '警告事件',
        //       roundCap: true,
        //       color: '#f00',
        //       barGap: '-100%',
        //   },
           {
               type: 'bar',
               data: [, , max],
               z: 0,
               silent: true,
               coordinateSystem: 'polar',
               barMaxWidth: 24.2,
               name: 'C',
               roundCap: true,
               color: '#F1F3F5',
               barGap: '-100%',
           },
        //   {
        //       type: 'pie',
        //       labelLine: {
        //           show: false
        //       },
        //       z: 1,
        //       radius: 14,
        //       data: [{
        //           value: 5,
        //           itemStyle: {
        //               color: 'rgba(108,116,132,0.15)',
        //           }
        //       }]
        //   },
        //   {
        //       type: 'pie',
        //       labelLine: {
        //           show: false
        //       },
        //       z: 10,
        //       radius: 3,
        //       data: [{
        //           value: 100,
        //           itemStyle: {
        //               color: '#fff',
        //           }
        //       }]
        //   },
           {
               type: 'gauge',
              radius: '75%',
               splitNumber: 4,
               max:max,
               detail: {
                   show: false,
               },
               axisLine: {
                   // 坐标轴线
                   lineStyle: {
                       // 属性lineStyle控制线条样式
                       color: [
                           [0, "#DE585D"],
                           [1, "#DE585D"]
                       ],
                       width: 25,
                       opacity: 0 //刻度背景宽度
                   }
               },
               "data": [{
                   "name": "",
                   "value": value,
               }],
               splitLine: {
                  length: 3, //长刻度节点线长度
                   lineStyle: {
                       width: 2,
                       color: "#c4c6cc"
                   } //刻度节点线
               },
               axisTick: {
                   show: true,
                   lineStyle: {
                       color: "#c4c6cc",
                       width: 2
                   },
                   length: 5,
                   splitNumber: 6
               },
               axisLabel: {
                   show: true,
                   color: '#333',
                   fontSize: 18,
               },
               pointer: {
                   show: false,
                   length: '70%',
                   itemStyle: {
                       color: '#DE585D',
                   }
               },
           },
           {
               "type": "pie",
              radius: ['91%', '82%'],
               "hoverAnimation": false,
               startAngle: 225,
               endAngle: 0,
               "data": [{
                       "name": "",
                      "value": value / max,
                       "label": {
                           show: false
                       },
                       "labelLine": {
                           show: false
                       },
                       itemStyle: {
                           color: 'rgba(0,0,0,0)'
                       }
                   },
                   { //画中间的图标
                       "name": "",
                       "value": 0,
                       "label": {
                           position: 'inside',
                           backgroundColor: 'blue',
                           borderRadius: 16,
                           padding: 16,
                           borderWidth: 0,
                           borderColor: "blue"

                       }
                   }, {
                       "name": "",
                       value: 1.32 - value / max,
                       "label": {
                           show: false
                       },
                       "labelLine": {
                           show: false
                       },
                       itemStyle: {
                           color: 'rgba(255,255,255,0)'
                       }
                   }
               ]
           }
       ],
       tooltip: {
           show: false
       },

   }