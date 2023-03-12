
      let dataMax = 60;
      const source = {
        data: [43, 10, 28, 35, 50, 19, 13],
        indicator: [
          { name: '家政服务', max: dataMax},
          { name: '助餐服务', max: dataMax},
          { name: '助医服务', max: dataMax},
          { name: '待办服务', max: dataMax},
          { name: '交谈服务', max: dataMax},
          { name: '康复服务', max: dataMax},
          { name: '助行服务', max: dataMax},
        ]
      }
      const source1 = {
        data: [50, 20, 35, 50, 55, 30, 23],
        indicator: [
          { name: '家政服务', max: dataMax},
          { name: '助餐服务', max: dataMax},
          { name: '助医服务', max: dataMax},
          { name: '待办服务', max: dataMax},
          { name: '交谈服务', max: dataMax},
          { name: '康复服务', max: dataMax},
          { name: '助行服务', max: dataMax},
        ]
      }
      const buildSeries = function(data){
        const helper = data.map((item, index) => {
          const arr = new Array(data.length);
          arr.splice(index, 1, item);
          return arr;
        })

        return [data, ...helper].map((item, index) => {
          return {
            type: 'radar',
            itemStyle: {
              color: '#31e586'
            },
            lineStyle: {
              color: index === 0 ? '#31e586' : 'transparent'
            },
            areaStyle: {
              color: index === 0 ? '#31e586' : 'transparent',
              opacity: 0.3
            },
            tooltip: {
              show: index === 0 ? false : true,
              formatter: function() {
                return source.indicator[index - 1].name + '不满意度：' + source.data[index - 1]+'%';
              }
            },
            z: index === 0 ? 1 : 2,
            data: [item]
          }
        })
      }
      
      const buildSeries1 = function(data){
        const helper = data.map((item, index) => {
          const arr = new Array(data.length);
          arr.splice(index, 1, item);
          return arr;
        })

        return [data, ...helper].map((item, index) => {
          return {
            type: 'radar',
            itemStyle: {
              color: '#31e586'
            },
            lineStyle: {
              color: index === 0 ? '#31e586' : 'transparent'
            },
            areaStyle: {
              color: index === 0 ? '#31e586' : 'transparent',
              opacity: 0.3
            },
            tooltip: {
              show: index === 0 ? false : true,
              formatter: function() {
                return source1.indicator[index - 1].name + '满意度：' + source1.data[index - 1]+'%';
              }
            },
            z: index === 0 ? 1 : 2,
            data: [item]
          }
        })
      }


      option = {
        backgroundColor: '#080b30',
        tooltip: {
          showContent: true
        },
        legend: {
          show: true,
          textStyle: {
            fontSize: 14,
            color: '#fff'
          }
        },
        radar: {
          // shape: 'circle',
          name: {
            show: true,
            color: '#fff',
            fontSize: '14px',
          },
          splitNumber: 4,
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(12,62,129,0)','rgba(12,62,129,0.3)','rgba(12,62,129,0)','rgba(12,62,129,0)']
            }
          },
          splitLine: {
            lineStyle: {
              color: '#0c3e81'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#0c3e81'
            }
          },
          indicator: source.indicator
        },
        series: [...buildSeries(source.data), ...buildSeries1(source1.data)]
      };