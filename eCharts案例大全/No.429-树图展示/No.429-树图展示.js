let src1 =
    'data:image/png;base64,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';

let src3 =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAABBCAMAAADCDfu7AAAAAXNSR0IArs4c6QAAALpQTFRFAAAAAP//M5nMLqLRLKbIMaXOMqPNLqPNMaHLjJOhipGfMaDMMKLLMKHMMKHMMaHLMaLML6HMi5Ogi5Kgi5KgMKDMMKHMMKHMMKHMITA6ITA7IjA8IjA9IjE9IjE+IjE/IzFAIzFBIzFCIzFDJDFEJDJEJDJFJDJGJDJHJTJIJTJJJTJKJTNKJjNLJjNMJjNNJjNOJzNPJzNQJzRRJzRSKDRUMKHMRlBsgouWg4uXg4yYhIyai5Kg4ubrSZ5CFAAAABl0Uk5TAAEKCxcfJD1ESUpue5WbrdLX5Obn6Orv/CvSSc4AAAF9SURBVFjD7dnHcsIwFIVhpwfSY1JIANu4C6u4Uoze/7VyHTZYZJXMFZMZ/Q/gb6Sdjyzrl52/NN/dW7o7e9rJt9pl6/Ktgx9O9MvW9XvTPJ5ax+imeb2wjtPd1d+/MbC32rIH+7K9rKsyF5wxihZjXORlVS/tfXlbV4XgNCMkRYuQjHJRVPW2J1eFlLJNkzhCK07SFpCi6sulADiJwsBHKwijBGhR9uWcyzaO/LmH2NyP4lbyvC8LCif2567roOW6QCctFX2ZZ2kHO7PpBKnpzOnoNON9mZEk7ODJJ1qTjg4TwlQ5DjwX4A+0gHa9IFZlCpftOVOAx0gBPXU8uG76kwxHHqMFhzaykY1sZCMb2chGNrKRjWxkIxv5v8sbPX/uG1VmRK51rBVrebiTSLnCX2hW8kDmmdzRqKsUwFJdpQQlepY4oi5xOUxxOtZHGOJydXFlixR/cU0XTF1cYd5mGcFemUnGhLoyH21Z1/qaMNqXhyN9LyjPQ8tkwu8LqFLXMDxIoH8AAAAASUVORK5CYII=';

let src4 =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABDCAYAAACSq1stAAAAAXNSR0IArs4c6QAACrpJREFUeNrtnL+PJEcVx7/vTe/Mzq5WOum4RYfwIh0xibH/AARkEIB0ZEiQQISExC0SAQEBCRkBMhFyaHQCWYAdrEAiR7Z0WLawTGAfJ/t0y4lgxP7sfo+gX1VXVVfPjx32bme2+9TqmZ65mdn36e/7VdVFuIxNlfAsNyLFNdzoEuDQM/4b9LqCpSWB5f///eT8reT5zhzfO8lAOUzO3e0Ep9cBIl0AHHXCcpBycDaTcw87vnsvY/iTzDkH1wHNg1xriLQ0tBywTZCHM+74jlHH+dMONR3beQc3BBqCnAXxWsCbBs5BywELYY1AGNrzp8H5Ycf3niWGv2nP3XkHNgSZQuxW4toBpIXA5ZQWQnOwHKgQ0kbwuOj43jIw8Hli/DMobkJxBp0KsRugrpv7LBYGl4N2I4A2BGHb3lOAMLHHZQDuvOPXlImBd+x56cFQBLGJn8CeuVL3+w5byqOZmenKK6+BlweXU9oE7NV1bI+LAOBgwfKhCqA5cDv2+DxwpTehmEC8CnMK7FLf2ilvUXATMIYgD60EsAn2sI5AqAD/fBpEB6w+EragGIAwsnPHBm8nAPoUwE0wJhCMQXgIYHequhr1qdKqA6QLgdsBYwLGBsi7RgftyJQ2SBR33AHQQRsnRq+gft8KwJ6Y0sYQnJv7DBV4C3Jd1Fd0vjIPuGMwChC2wTgCYQjGGGSgKLoQhgA4o7yBBxNDA8gDLaE4g2DLlF1CcQzG2IA9tQTqFIqHIB//1nwrOpU4D7hNME7BKMH8CfYB7IPtUxhQBsie66A+kp2H2yl5PKh/lXsPEaAFgLG/HP6AU3wXN/B1IryqwOv4D76dlB8aZcT3p3ZjVtxtpi4zVN0TU1MXuDEG/E/sQ3EvhBCB4wYaMaAhMDZg1AaqBs99Bs5PgD/eB0SAb3yrfvH3vwWOj2peqnYMGGqm0aIrzPGVH9J0txmqLkxOcuA+wD4qA6cAxBRjdgRZljCtC6nBYzFo4WNLM7ZeexXDB2/hv9/5Ps5HY2z/5lfYePtvDbhgpwikdv+AqwCSnGqodi5EIBA4ODIRHr34Enb/9NGdJ9t7D/ElKkPlNaq7Y+n+EzBumOK2wSm44n38WCr8KHSHo/cOsPngDagqlMw25FO8xlaaU0OgmsT4pCkgaQGDSvM+oH6P+6yrDA92gQbwGOSPNTzGx198Gbe/9s2XS1TlWPmjIqs6V4SPrY4bWlZZgLzi3sW+qIGzi3v03gFGD96AoHaNTlSqGnkvDaUWvEDe6BrLMgSEBKCDZK+Rl28IL3h8VeGBQFA71jZiH0ti1z/gwca54PNFJsNsuv43Anc5sayyBPM72CcxV2mgRv84wOjvb9bgoP7YeEWN/acm8cgDTsDqLIAaKVNVkv+7IsqzGEMGjVz+RWJpulnRMnYV4rbywlg3BOEU8O7yqD5PJe4pNzxG7x9g9M6bEAhEASE1Nmp2lCCH0NiYOcNGgBDDggKioEh1qKGFnyUyO+ZdlcSFagU45Xk3qg1YZ0EVYvsvWmRdZl0a1CMB2yCUVlwPwa7YduXt6IMDDN+tXaUoIFCIuSkxozUikABaEpMiN4pYUSFQcZ+pHlx09O+VjqwInb3q57Zpw9BBYx96COLDAQAqCVqoMiifbboME0Gsc90R1yGxRGRk4NSujjq+Se0yNYx30lZRNrWPn6tq5FrtysgoLD2HdtJyVZXnExa7PhPVaZQnACoV16VCmGm6RGViwzmn1snftLbX2ACq1WoODjlBKNw/EUTqiJSSPpake5Vzoyn81DVGkLTtfqdd8ldIfa776lRXW5MahyTk+1RFlKzcma/7r9rQ1ujKUIi6eCeANO7N20+kbVSRDlW0lRiVAVFMdJ+vbYOsALs6DlHy02pwkdtnotm9zXYPkqK2jKvfnOLUuTix5MESFQ2U4d7jVCK5mKcZwyYJTi4TXVh1V4ceuVKb6r/L4VENlOfOlSBsAEVF1A2vHlhtd/+d8rxfDrUnBhFREa3aobYwCckZNTR8rogPa7c0g53HfVwhj0mzTtrPLQbEkPq1YuFvqizcGcCwjvPqk8qEIZmCOkguROKkotPAuc6L5sFNi51rsGlFBJQAYYry6jEy6rpUvPKcO0TcoqpjXlAeaLtWy5YKOY+Wc6vz1IgroLqFN67YpZ6zlbdjo9hbNoI9DAooBVTCBEIsOWkMqEgUJrkOSQcoTOuD5tzq+irO/5kDYks2dD63WUIxAnAGwdgPnwbtLgdFGkV5t6hxqp90Rpq+5JwxqrNemzPerQFYrUAAEXe+48ymGJTBFIQtG9Ee4nsoj5PCWoFK6raVSACwapKTEKrYa6lLFcnv2uEyNVOkrzG4QVkNCiYGIYB3F4qJzb46DuZGntuknxMIKihGkOoLeL16/DsUj94CeeNWCaAEWgRCYpA5F6qaHfJp77py2eUyW0kFlQKCChcz4p3YtD6xkXTBJhgFKpRHGL/9a1TOiD62ha4zcYvakbxclmHXMPYNiEipIoDANoMq/iv3gunlN/3sZIkUGClBgarKu0yvvCqjNFnOwFl16vxqXMV4p9UAFQiCRHmHNuP4BIpbEBya2nbg7jUQmx2WJCSZmOYHRKt8EZ0W2P02JzxicC2odsIyCe7COfbzH8VPMT+HokDl3Z3FMVKNM81cYZ5mhv12gV4aEZQYShzDu2uTVB3AXUgEcMf2s9Btajt5iOLctFquV90FGqEEAQ20mpKwTMyF7kKi++1O7Xw06QdBwzkz9parx/rtYg0WEa4YVIIit6mR+lIXumdx0JcRwRQ7n3Fietq/5t2PZ7FVCmales++wwEMXeiJ1YAOoqI9Gt5VTF+DttUzU54V6E2Rnrvh4m5wq/AkAzGcSymhy9S22npw/8dsU7je27PH4lEkB/B+50ehNblHF+g19kAvIL0Bm52zjen22GAOoub2RGk9m0tJWKQeFArG84g0uOEkHDdoQwSAv2bo9UnJ5ScsRIQKPGDMHBLKQ+xqTy3a2uq3xZVns+BVkQwJEWnH3aKaD3AXjro9hQvbjhgsDKWOIj0EmF+2SnulPa8OS0WqRGABz36zqTHdp0G6Jh3+51MqEENyowoXcX89pGcb84jYjccUvTlWTXrCCn/rfr+tVswDDTDAx7f3XunhrVzMG7C7fa2Ht3LKEwaA2598+IMe3uplm2RTwoh7c6xYtlmvGcWPP/O5X/bKW7lNyG7a62Pe6sW8epr7px9/eG85eOnyo5nlSNduhdJLyf7nOOlvuKy7YqxLKs+tXuAWgHG3b/rbv2yUiXo+cwjK7EjNgolEtpQVIbwtmQDg8Msv/KJY/pqhaAEYSl+nXndz1t7ROpfhWmTR6pfaJJnLKw/J0ktedS637cHMGcoaW9qCcZRArc0pRGD91J8f/aRY/gvJVsgiDytaR6T3mQtoD8licQaSnDtFPe+LhSBLK49sVaxGdWwAleIVOPptVsbSKM1DC4TRrEVGBAX+/dUXfr4UPKbaWYaq0+YCQT1mS+gzlvkSFgcwXWeT7GhF+gXWYZmivPojxUMjvw4SRcsu9dsiMa+GyOBEeSAV0O5f/vXTpZXXXAjsV6fTUHm97BZWXn6xVFvyTWwNo845LAvBY7hVsiRYLcuvzdJX6XPFvHmWKTajMxR6+JXP/mwpeI9efKk3/PNLTPE/4sQmtlloZa0AAAAASUVORK5CYII=';
let src5 =
    'data:image/png;base64,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';

let src6 =
    'data:image/png;base64,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';
var data2 = [
    {
        name: '深圳供电局',
        money: '800',
        label: {
            width: 180,
            height: 80,
            backgroundColor: {
                image: src1,
            },
        },
        children: [
            {
                //子集
                name: '全资（2家）',
                money: '800',
                label: {
                    width: 111,
                    height: 54,
                    backgroundColor: {
                        image: src3,
                    },
                },
                children: [
                    {
                        //子集
                        name: '深圳产投',
                        percent: '1.43%',
                        money: '800',
                        label: {
                            width: 94,
                            height: 54,
                            backgroundColor: {
                                image: src5,
                            },
                        },
                        children: [
                            {
                                //子集
                                name: '能源科技',
                                percent: '1.43%',
                                money: '800',
                                label: {
                                    width: 94,
                                    height: 54,
                                    backgroundColor: {
                                        image: src5,
                                    },
                                },
                            },
                        ],
                    },
                    {
                        //子集
                        name: '能源技术',
                        percent: '1.43%',
                        money: '800',
                        label: {
                            width: 94,
                            height: 54,
                            backgroundColor: {
                                image: src5,
                            },
                        },
                    },
                ],
            },
            {
                name: '控股（1家）',
                money: '800',
                label: {
                    width: 111,
                    height: 54,
                    backgroundColor: {
                        image: src3,
                    },
                },
                children: [
                    {
                        //子集
                        name: '低碳城',
                        percent: '1.43%',
                        money: '800',
                        label: {
                            width: 94,
                            height: 54,
                            backgroundColor: {
                                image: src4,
                            },
                        },
                    },
                ],
            },
            {
                name: '参股（6家）',
                money: '800',
                label: {
                    width: 111,
                    height: 54,
                    backgroundColor: {
                        image: src3,
                    },
                },
                children: [
                    {
                        name: '南网电动',
                        percent: '1.43%',
                        money: '800',
                        label: {
                            width: 94,
                            height: 54,
                            backgroundColor: {
                                image: src5,
                            },
                        },
                    },
                    {
                        name: '科技开发',
                        percent: '1.43%',
                        money: '800',
                        label: {
                            width: 94,
                            height: 54,
                            backgroundColor: {
                                image: src5,
                            },
                        },
                    },
                    {
                        name: '深研院',
                        percent: '1.43%',
                        money: '800',
                        label: {
                            width: 94,
                            height: 54,
                            backgroundColor: {
                                image: src5,
                            },
                        },
                    },
                    {
                        name: '前海供电',
                        percent: '1.43%',
                        money: '800',
                        label: {
                            width: 94,
                            height: 54,
                            backgroundColor: {
                                image: src4,
                            },
                        },
                    },
                    {
                        name: '南网财务',
                        percent: '1.43%',
                        money: '800',
                        label: {
                            width: 94,
                            height: 54,
                            backgroundColor: {
                                image: src6,
                            },
                        },
                    },
                    {
                        name: '混改基金',
                        percent: '1.43%',
                        money: '800',
                        label: {
                            width: 94,
                            height: 54,
                            backgroundColor: {
                                image: src6,
                            },
                        },
                    },
                ],
            },
        ],
    },
];

function searchSpotBg(type) {
    return type === 1
        ? 'linear-gradient(-90deg, #0168CE, #27AFE0)'
        : type === 2
        ? 'linear-gradient(-90deg, #008C4F, #44F093)'
        : 'linear-gradient(270deg, #CB6000, #FFAB1A)';
}

option = {
    tooltip: {
        show: 'true',
        trigger: 'item',
        formatter: function (params) {
            let data = params.data;
            let str = `  <div
    style="background:#333;display: flex;justify-content: space-between;color: #FFFFFF;line-height: 20px;">
    <div>
      <p>全称</p>
      <p>业务板块</p>
      <p>累计投资金额</p>
    </div>
    <div>
      <p>${data.fullName || '--'}</p>
      <p><span style="display:inline-block;margin-right:5px;width:10px;height:10px;background:${searchSpotBg(
          data.type
      )}"></span>新兴业务</p>
      <p>${data.money || '--'}${data.cell || '万元'}</p>
    </div>
  </div>`;
            return str;
        },
    },
    series: [
        {
            type: 'tree',
            orient: 'vertical',
            name: '自然资源厅',
            edgeShape: 'polyline', //链接线是折现还是曲线
            data: data2,
            width: 1100, //树形图宽
            height: 547, //树形图高
            top: '20%',
            left: '10%',
            symbolSize: [60, 38], //设置自己选择区域的宽高

            symbol: 'rect', //子级选择区域的形状默认circle(圆形),rect矩形
            roam: true, //鼠标移到区块时会显示一个灰色背景的title，移动不同区域时是否开启滑动动画
            initialTreeDepth: 10,
            itemStyle: {
                //symbol的样式
                color: '#333',
                borderColor: '#333',
            },
            label: {
                normal: {
                    position: [30, 15],
                    verticalAlign: 'middle',
                    align: 'center',
                    backgroundColor: '#99d97c',
                    color: '#fff',
                    padding: 3,
                    formatter: function (params) {
                        let money = params.data.money ? '' + params.data.money : '';
                        let percent = params.data.percent ? params.data.percent : '';
                        let name = params.name.substring(0, 11) + '\n' + params.name.substring(11);
                        let konggu = params.value ? params.value : '';
                        if (konggu) {
                            return [`{percent|${percent}}`, `{name|${name}}`, `{money|${money}}`].join('\n');
                        } else {
                            return [
                                `{konggu|${konggu}}`,
                                `{percent|${percent}}`,
                                `{name|${name}}`,
                                `{money|${money}}`,
                            ].join('\n');
                        }
                    },
                    rich: {
                        percent: {
                            color: '#FFF',
                            padding: [-40, 0],
                            height: 18,
                            distance: 10,
                            align: 'left',
                            verticalAlign: 'top',
                            fontSize: 12,
                            borderWidth: 1,
                            fontWeight: 'normal',
                        },
                        name: {
                            height: 18,
                            color: '#FFF',
                            padding: [2, 0],
                            align: 'center',
                            fontSize: 12,
                        },
                        money: {
                            height: 18,
                            color: '#fff',
                            padding: [-20, 0],
                            align: 'center',
                            fontSize: 12,
                            borderWidth: 2,
                            fontWeight: 'normal',
                        },
                    },
                },
            },
            leaves: {
                label: {
                    normal: {
                        position: [30, 15],
                        verticalAlign: 'middle',
                        align: 'center',
                        backgroundColor: '#f3857c',
                        // formatter: ['{box|{b}}'].join('\n'),
                        // rich: {
                        //     box: {
                        //         height: 18,
                        //         color: '#fff',
                        //         padding: [20, 20],
                        //         align: 'center',
                        //     },
                        // },
                        formatter: function (params) {
                            console.log(params);
                            let money = params.data.money;
                            let percent = params.data.percent;
                            let name = params.name.substring(0, 11) + '\n' + params.name.substring(11);

                            return [`{percent|${percent}}`, `{name|${name}}`, `{money|${money}}`].join('\n');
                        },
                        rich: {
                            percent: {
                                color: '#FFF',
                                padding: [-30, 0],
                                height: 18,
                                distance: 10,
                                align: 'left',
                                verticalAlign: 'top',
                                fontSize: 12,
                                borderWidth: 1,
                                fontWeight: 'normal',
                            },
                            name: {
                                height: 22,
                                color: '#FFF',
                                padding: [13, 0, 0, 0],
                                align: 'center',
                                fontSize: 12,
                            },
                            money: {
                                height: 18,
                                color: '#fff',
                                padding: [-20, 0],
                                align: 'center',
                                fontSize: 12,
                                borderWidth: 2,
                                fontWeight: 'normal',
                            },
                        },
                    },
                },
            },
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#0E769D', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#939597', // 100% 处的颜色
                        },
                    ],
                    global: false, // 缺省为 false
                },
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750,
        },
    ],
};
