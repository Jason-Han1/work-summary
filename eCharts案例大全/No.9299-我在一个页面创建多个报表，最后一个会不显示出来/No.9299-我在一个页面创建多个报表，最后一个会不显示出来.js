 var option = {
                      dataset: {
                          source: [
                              ['score', 'amount', 'product'],
                              [89.3, 58212, 'Matcha Latte'],
                              [57.1, 78254, 'Milk Tea'],
                              [74.4, 41032, 'Cheese Cocoa'],
                              [50.1, 12755, 'Cheese Brownie'],
                              [89.7, 20145, 'Matcha Cocoa'],
                              [68.1, 79146, 'Tea'],
                              [19.6, 91852, 'Orange Juice'],
                              [10.6, 101852, 'Lemon Juice'],
                              [32.7, 20112, 'Walnut Brownie']
                          ]
                      },
                      grid: {
                        containLabel: true,
                        top: 0,
                        bottom: 0,
                        right:0,   
                        left:0,
                      },
                      xAxis: {name: 'amount'},
                      yAxis: {type: 'category'},
                      series: [
                          {
                              type: 'bar',
                              encode: {
                                  x: 'amount',
                                  y: 'product'
                              }
                          }
                      ]
                  };