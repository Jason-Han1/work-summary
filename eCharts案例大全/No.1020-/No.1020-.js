 var option = {
     backgroundColor:'#323a5e',
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '14%',
          top:'16%',
          containLabel: true
        },
         legend: {
        data: ['1', '昨天登记', '今天登记'],
        right: 10,
        top:12,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
    },
        xAxis: {
          type: 'category',
          data: ['口岸医院','镇政府','某某商城','邮储银行','菜市场','检查点','机关食堂','物流中心'],
          axisLine: {
            lineStyle: {
              color: 'white'

            }
          },
          axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
              fontFamily: 'Microsoft YaHei'
            }
          },
        },

        yAxis: {
          type: 'value',
          max:'1200',
          axisLine: {
            show: false,
            lineStyle: {
              color: 'white'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.3)'
            }
          },
          axisLabel: {}
        },
        "dataZoom": [{
          "show": true,
          "height": 12,
          "xAxisIndex": [
            0
          ],
          bottom:'8%',
          "start": 10,
          "end": 90,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '110%',
          handleStyle:{
            color:"#d3dee5",

          },
          textStyle:{
            color:"#fff"},
          borderColor:"#90979c"
        }, {
          "type": "inside",
          "show": true,
          "height": 15,
          "start": 1,
          "end": 35
        }],
        series: [
        
        {
          name: '昨天登记',
          type: 'bar',
          barWidth: '15%',
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#8bd46e'
                }, {
                    offset: 1,
                    color: '#09bcb7'
                }]),
                barBorderRadius: 11,
            }
            
          },
          data: [400, 500, 500, 500, 500, 400,400, 500, 400]
        },
        {
          name: '今天登记',
          type: 'bar',
          barWidth: '15%',
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#248ff7'
                }, {
                    offset: 1,
                    color: '#6851f1'
                }]),
            barBorderRadius: 11,
            }
          },
          data: [400, 600, 700, 700, 1000, 400, 400, 600, 800]
        }]
      };

      var app = {
        currentIndex: -1,
      };
      setInterval(function () {
        var dataLen = option.series[0].data.length;

        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: app.currentIndex
        });
        app.currentIndex = (app.currentIndex + 1) % dataLen;
        //console.log(app.currentIndex);
        // 高亮当前图形
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: app.currentIndex,
        });
        // 显示 tooltip
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: app.currentIndex
        });


      }, 1000);