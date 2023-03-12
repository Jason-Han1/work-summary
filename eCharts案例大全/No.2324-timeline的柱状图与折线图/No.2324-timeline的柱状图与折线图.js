option = {
        //timeline基本配置都写在baseoption 中
        baseOption: {
          timeline: {
            axisType: 'category',
            show: true,
            autoPlay: true,
            playInterval: 1000,
            data: ['2016', '2017', '2018', '2019', '2020'],
          },
          grid: {
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              axisLabel: {
                show: true,
                interval: 0,
                rotate: 40,
                textStyle: {
                  color: '#A6D3FD',
                  fontSize: 14,
                },
              },
              axisPointer: {
                show: true,
                type: 'shadow',
              },
              data: [
                '呼和浩特市',
                '包头市',
                '呼伦贝尔市',
                '兴安盟',
                '通辽市',
                '赤峰市',
                '锡林郭勒盟',
                '乌兰察布市',
                '鄂尔多斯市',
                '巴彦淖尔市',
                '乌海市',
                '阿拉善盟',
              ],
            },
          ],
          yAxis: [
            {
              type: 'value',
              name: '产值',
              axisLabel: {
                formatter: '{value}',
              },
            },
          ],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            },
          },
        },
        //变量则写在options中
        options: [
          {
            series: [
              {
                name: '产值',
                type: 'bar',
                data: [
                  1941872.2,
                  1524715.0,
                  4319656.3,
                  2202106.9,
                  4394336.5,
                  4853615.5,
                  1761604.0,
                  2199018.6,
                  1881512.1,
                  2688429.4,
                  71789.1,
                  196804.2,
                ],
              },
            ],
          },
          {
            series: [
              {
                name: '产值',
                type: 'bar',
                data: [
                  1802313.7,
                  1487434.7,
                  4316361.2,
                  2309097.5,
                  4409851.3,
                  4899200.5,
                  1828367.6,
                  2051764.4,
                  1909886.9,
                  2823823.9,
                  80757.7,
                  216496.2,
                ],
              },
            ],
          },
          //2018
          {
            series: [
              {
                name: '产值',
                type: 'bar',
                data: [
                  1895316.8,
                  1619753.0,
                  4449195.4,
                  2590237.0,
                  4529974.3,
                  5159293.9,
                  2064416.7,
                  2093261.5,
                  1984931.6,
                  3147915.9,
                  87985.3,
                  230875.3,
                ],
              },
            ],
          },
          //2019
          {
            series: [
              {
                name: '产值',
                type: 'bar',
                data: [
                  2002186.3,
                  1708424.5,
                  4647335.7,
                  2871780.7,
                  4708255.8,
                  5476002.2,
                  2272632.5,
                  2226361.4,
                  2084226.2,
                  3430631.3,
                  92219.0,
                  243365.9,
                ],
              },
            ],
          },
          //2020
          {
            series: [
              {
                name: '产值',
                type: 'bar',
                data: [
                  2233591,
                  1882694,
                  4953138,
                  3200221,
                  5110208,
                  5923994,
                  2504850,
                  2406611,
                  2303082,
                  3807968,
                  107521,
                  289674,
                ],
              },
            ],
          },
        ],
      };