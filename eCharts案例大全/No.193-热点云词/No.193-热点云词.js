      //说明
      //项目需要echarts-wordcloud.min.js
      /*      itemStyle: {
                    normal: {
                        opacity: .2 //自己项目中这里可以设置0全透明，然后可以写一个div背景加载一个美化过的云图片，重合放在这个图表下面。
                    }
                },*/
      //1、自己项目中上面的属性设置0全透明。
      //2、然后在页面上写一个div样式背景，加载一个美化过的云图片。
      //3、重合放在这个图表下面。-----绝对定位浮动等等方式
      //4、最后的效果就是进来时头像效果。


      //必须是全黑背景，echarts-wordcloud按背景渲染必须是黑色背景图
      let symbolUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiwAAAE4CAYAAAB42Kj5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REQ3REFGOUQwNTQ1MTFFQkJBMDI5OURDMTZBMTY1RDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REQ3REFGOUUwNTQ1MTFFQkJBMDI5OURDMTZBMTY1RDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERDdEQUY5QjA1NDUxMUVCQkEwMjk5REMxNkExNjVENyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERDdEQUY5QzA1NDUxMUVCQkEwMjk5REMxNkExNjVENyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Piyv1GkAAFU+SURBVHja7L0HfBzH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';
      const colorList = [
          '#3a96f5',
          '#5faaf7',
          '#78bafe',
          '#1563f2',
          '#add2f8',
          '#e24bf4',
          '#1acaff',
          '#ffde00',
          '#89fda5'
      ]
      let presents = [
          '想你',
          "晴天",
          "电话",
          "手机",
          "下雨",
          "暴雨",
          "多云",
          "雨衣",
          "屋檐",
          "大风",
          "台风",
          "下雪",
          "打雷",
          "小雨",
          "中雨",
          "大雨",
          "雷阵雨",
          "下雪",
          "小雪",
          "中雪",
          "大雪",
          "暴雪",
          "东风",
          "南风",
          "西北风",
          "北风",
          "闪电",
          "变形金刚",
          '棒棒糖',
          '忘了吧'
      ]

      var data = [];
      for (var i = 0; i < presents.length; ++i) {
          data.push({
              name: presents[i],
              value: (presents.length - i) * 20
          });
      }
      for (var i = 10; i < presents.length; ++i) {
          var cnt = Math.floor(Math.random() * 10);
          for (var j = 0; j < cnt; ++j) {
              data.push({
                  name: presents[i],
                  value: Math.random() * 10
              });
          }
      }
      var maskImage = new Image();
      maskImage.src = symbolUrl;
      option = {
          backgroundColor: '#0A2E5D',
          tooltip: {
              show: true
          },
          grid: {
              left: 0,
              bottom: 0,
              top: 0,
              right: 0,
          },
          xAxis: {
              type: "category",
              show: false
          },
          yAxis: {
              max: 100,
              show: false
          },
          series: [{
                  zlevel: -1,
                  type: 'pictorialBar',
                  name: 'pictorial',
                  silent: true,
                  symbol: 'image://' + symbolUrl, //按背景渲染云词
                  symbolSize: ['45.2%', '35.2%'],
                  symbolPosition: 'center',
                  barWidth: '100%',
                  barMaxWidth: '100%',
                  itemStyle: {
                      normal: {
                          opacity: .2 //自己项目中这里可以设置0全透明，然后可以写一个div背景加载一个美化过的云图片，重合放在这个图表下面。
                      }
                  },
                  data: [{
                      value: 100
                  }]
              },
              {
                  type: 'wordCloud',
                  sizeRange: [10, 52],
                  rotationRange: [0, 0],
                  maskImage: maskImage,
                  textPadding: 0,
                  gridSize: 5, //用于标记画布可用性的网格大小（以像素为单位）//字距越大，字距越大。
                  width: '45%',
                  height: '35%',
                  left: 'center',
                  top: 'center',
                  drawOutOfBound: false,
                  textStyle: {
                      normal: {
                          fontFamily: "sans-serif",
                          color: function() {
                              let index = Math.floor(Math.random() * colorList.length);
                              return colorList[index];
                          }
                      }
                  },
                  data: data
              },
          ]
      }