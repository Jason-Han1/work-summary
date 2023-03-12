const driectionMap = new Map([
  ['北风', 'data:image/png;base64,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'],
  ['西北风', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAjqSURBVHhe7ZptjFRXGcf/577M7jK7tPvGi7a11rK0tU2/GRNNtWnqB7XVaELUhJjG6IrIAlWrNSaG+IlEYlKlUIWCaCvdLBtqpaU1VFQslFKCUJayIKUUkX1f2Hmfe+/x/9y5C0t2Zndm987wkv1tbu45z7lz557/Oc9znnNnMcMMM8wwwwwTsFHXYYuOBrUbDhWc83JHu74t47gPnB1KNsLEX2HXfoBvqZGg+YZgQgGEBR16eTztLD53MVXP6mYofRiqbjdaEMeDyslddf0yqQB3tutmw8D6CynnoZ6RdDU0zvNTu+B5+2A57UB9Fq0qEVx+3TGpAHSDmywbK5SLbw6nnAaKcFPQ9AHFeJ8z4gUeb0M5XWhtuBC0XTdMKoDQ0qnvVxqvaKDmQtJRY0QQ+njEAf0cXBxGtPbPGKE0bSqda762KUqAj3XqOZaHn8DAMq0RyyNCjtyMeAue3gnDpZvc3I+lKha0XpMUJYDQsk0v5sVrWGymCMN0B9WbTwQfdQZa91OM30OrLujEPnyvOQ7FeXSNUbQAH31Rz404WMviV32DxtBQMmv2xjKz/Xp+uGTqXnb8JbjufjTPbsdZRPC4SgbtV52iBbilXdfUmljBIfwBq42+sTgRAvRJft27UOYL8NzD0NFT14J7FC2AcOc2fYsBvMYP3R2YfBEGKUJfUSL4/JfuwaCpNgBuF3pmv4LPMrpcpZyiJAFantdNqMZKevJyVi+nx74IDkVIFyuCIPGgm+7xN7jebtTgdQzEE/jRPIpTOUoSQFjYqb/ER/8di805S8DURAjQJyjEWT4Ng6bRjUzNwUoto5zRpZF28CaHbkdQvYxCfcMsy2mKRqawV1ALKOCD8PBLusVm2LEnsT7+iN/0lK7yz2Wi5BlA/1ULO30X+BmPXDAcRbEbHoYGElm7P56pC6xT5R0e/4ahOqCdo0hcPIvHbw199ShdALJwu65javwaZ8InA9NYtLhDSCIQfYq5xDDgPUM36cYSbsTatYlFfIIQmJIA9/1F16fTaGNxBW9wc856BSGL4JPiwWUUr8Lx9qAm/XcYTVk8psQ+ZaYkgLBgm36AAaSDxSuD4WV8EfopwkB4IsjKIc98hMX3oIxn4er30Rs9jFXK868okZKD4ChVFo7zSbYG1Xwo/tU3Re1MY9QOK+EZHbD7WHyU8WgtY8QmzI0txfrYQ37LM9r2z0Uy5Rkg3NWpv609rJaOBqZ8yMgM9Y9kqgaS2dqcKVTk/hxI7wBgykZsO9x0F6oaetCqsrlLCjMtASQY8usZpfG5wFQIX4S+kWzVYDJTDhHG0kX3GOD5NxTkNJbM2i8rV6GN2LQFYCxextuvpAhNgbkQnsSEvlhFRBC4cqhjPO+A4b2Bltp/YjdnyiqVyTXnmJYAwt2d+l5uj3dQ3tsCU2EkS5CZUDkRZKk0eezncRJZZxOU14Ok04cn5pyXC6YcBEehnL3svATDSf2Ncsv31TfX2an6Gru8OT9HBdozufOkDJlPwMt+ATq7GqYRgZUWUXymPQOEuzr01+kGv2bxysywMDIyQ70jmRpup6fxm4N0Us6cWNJh6Y7HTSUjMzyxyYST5VEfhWUe4Lduxoo5/5BPjBKKAPe06wbXwDrebVFgmhQ+rssvL14Ev4NyDjomdRldv/NiDxLD0esEZXKaqz1cKn/KchJtjWeDlkuEIsDtm3R1ZDaW8mZPsDonZ52c8SLQ4j+/nIOO+CMqdXZQRlXw24L2cfgjztsaHbDst9HWtDpoyEsoAgj37NDz3BR2snh/zlIc7IYvwrnhZHQkFq/xLaMd9i8o1NE8KHWRHR/ih1bDUjuxbN57QUtBph0ER/HSyLIj21ksKevjZ0zX0/VeOmErlyHVZSy9NOrFdt5/m9QN097AUW/Fyvnrium8EJoA735FDbgeDrBHU9iccHenYJUw1pdRxhmY5uswvS/CdldjWeOrQUtRhCaAwMRzH2ewzIKSyGYduFSveOjnktkp9Sd2/ldIpL6G5beewJJ5vcEFRROqAN3fwADDzyGOZEkP4nGqZyhCkSS5lsu7xB/jw/MXY6D5aTz5Efr91AgtCF6iXZstJnbxxp8JLBMibh5LJHF+YNgXojC+n/dzxJ/mtD+EtuaXcvbpEeoMEG63IXt/8cNB31AEiXRm4s4r4zQTmTc58g8zq1sbVueF8GcAWbhNf4oniQWTbZC4tGv0DA7jYjz/6z7LNI7BMF90XGsdVjScCcyhEfoMELSN4xzQPwTVCXFcFxknv/8bhpGM2PaJSCT6VDk6L5RFgO5HVb9S8tqKPlsE2WyQ9IznnJtN/jDRGv1fUA+dsgggzD/MGaCxN6jmRUv05+jn836l1GAkYv8irVJlGflRyiZA78dR7RmQnVfBJZGdRDqTZRy4Mgeg3anm1LctdQJtC8r6C1HZBOhapGLawMssTvj/Q06eBMhQXBTg/nbkO41vBKayUTYBBMPwR/+PPK54DTVK1nERT44fYKWMNanvz3s2qJaVsgogwZAOfoSLbYG3P5LNBsWAiG29U11lHwyqZaesAgjxD0GSlvE/ppJ0hgFwTAJkmirNpW9P7LuN8oNLRSi7ANXMcPn3Fgfbfwk5lixzgLExwNPerlRzj/zwWjHKLsDJz6u0Y2Ar3eBcYPKRkff8zudmgGkaZ2prottw1K9WjLILIFQ5kMW+kyJcDEx+CpxIp/3NkGGobJVl9WrH3YtV9+YNmOWiIgJwSRzUJg5ShEsOL8XL7q/iGcdbHlvaJD9kVJSKCCAw2u/h6flcjeuivATJJUAZy1JramdHuvyGClMxAY5/WY1w1h9i0c/rxQWYB3hc8rqruPQNP1Y/LPZKUzEBhBNHsIGnY7L3lyTIMgxPabVlpLWp5NdoYVFRAe74NOqY97xM9+9PcQ9AtiajTfKL0lWjogKcelhdYE6wVxnKskzjP7NqIv/C6aPjNwMVpKICCCkLXcz/N2Yy2SO26T5X6WXvmmDulvgjTRv7wvq/oWlR8Rkgb417+gd7+i+kin4PfuPxc20FpRlmuKoA/we4jsnLif8wqgAAAABJRU5ErkJggg=='],
  ['西风', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAXZSURBVHhe7ZpdbBRVFMfPnZndbdlSoGyXlSIfptCK4SP6AMHPhMSINlGLQEgwLlVKAKGtDyY+GF98UuIL2G0TjE8mWogYH4iaGEmMJhITMRhpqyQClRbbQrtf3d3uzvXcmbNhdzuzu4X9apnfQ/ee/6btnDPn3vu/swsWFhYWFhYWFhbznePXnqLRfUb31ENwcqIX+rhMShqMXucfPn8LcLYfGGuFaPg6dLpX0jtpzK8C9PpdkJAwadiP0cOaNj2FP3gfHHPv0eIMJHqd23RPPQm+4KegSqOY/Aeo6Mkn4gDxGGYpfa7FBszdDnjvDzt4Vu0HjnebsS2kpjM1iRlKMeh6wEHKDOZeAXqCm0AVSWttXquLBsTC2AHTALL9MnTUryd1BnNnCnwc2Itt/h3e8YuYfAcq5sknsO1F8gIO5/WBMZXdASdurwFFES0uWn0FqdnhHCDipwBRHFvgmOsCRTOozAL0hJ4Hrrbh5e0kJX+iQQA1oY+ZHIIuT40eGFM5BTjpXwoKbmFiUQMwnbNZiUdx24tQgMjKBehYZrxAEuVfA3rDT+Dc/gSTH8XkP0Tl7pIXdz01eYGknKORKeXpgB+4ApcDbdrcBraV1HsjEsD5r1JAsOnl0LV6mCJDSluA7uBG7Llkmy/SxQIg3J4wPKlI8i3o9CylyJTSTIGe8B5s82+w3L9j8p2oFC75pNvLhEm/0igrxesA3+3VwGkLA3hQF4uAcHtG2OyH4Gh9D0WmFL4A3cEd+FdF0rt0oYgk3V4mjHHoWp5XdxemAN18CbBQmza3GTxCanERba+d9AyQlRu4/TVQlJV7WwN8/sfxjp/C5McwOl6y5IXbM0teQ/qJBjmZfQeIJytjYTqM8G2klpZUt2eEzf4izv+vKcpK/gU4EdwACm1hDBaTWnoy3V4mTErg8VehKCe5C+AL7NYfLcFzpJQPcdfF3c+GrFzB+d9IUU6MC9AbXgkqFy2OBxIwfJZWFozcXiay7RR0uA9QlBPDAqz6It5ml+XduEJuIqkiuDI04o6rataFu8ZZ7QserDtMYU6yToH1fbwxoYCXrOtyXS0fkdg0XB0epciYaod9cOpIfROFOcl7EWw+w/dySSvGsySVhfHJAIxN4FQwQZbkeKLTY6MwJ3kXIEnzV3wDj2sd4cXfXqKrpUV0gegGM2oXVr/gP1CX8ygsmLUR6n+JXRp4hb01cAlcWIDXUfpRf6d0NLizH/LUOPfSMCez7gAj1p7hW7CSoiPEP67S1eIyGQzDyPgERelUOWzDkSPuvNasghQgycZvuTMSAi/TH1s/RnLR+Hf0FgTDM02RJDGudpbyMGRA82n+DMjgRdv+GklFYeDqDRqls6im+tBke13O4/Cs14B86d/Fzve3Mi+3QT3uHG9jqf+ktwrKCncdjdKJq7CbhlkpWgcYse4s38ES2vQo6LOCm7cmYSIQokjHYbfdjr5pUp0USlqAJGiwVsbRYDGuLZprdPXeuDJ0E+KJOydEhpnVLID6wMEGcVQ3pSwFSAUN1k5091684BaS7ooo+oJ/Mlxibc2C9/3tS96l0JCyFyBJUx9vYtgVKtpuvKhlJM+KTJforLL/Fjpc/yiFhlRMAVJpOsP34fIsbPd2kvLm6sgYRKL6U2K7zRaKHXXPkY/GDFh7lm+WxKKpmyzzT4NTSCRU+HtohCKcBk7HVv9B1y8UzqBo22Ah+OtldhFtd0fNOLg4g3aUftbfMUeWJfAsvfPAioP8Bg0NqegOMAIN1ja8ai8WROwgpqe+pEt0VjkGQ4ddpsfjOVeAJI3neK0cwSLotnszyWkMXhsGmyzFYsc88+grMgasO823M7Td2O/7SNIITUVh6L9xtMXOPZPti/tITqOi14B8GdzFvh9oZa/aFPDg2eMdvK0DQndWO2DxQieOuKnznBcdYETzl7xFxemBBqt1aGR8KHTEVbzPJysZNFhrGj6L+My+Knv/8NH1p2lkYWFhYWFhYWEBAPA/nqnHkpTvH1wAAAAASUVORK5CYII='],
  ['西南风', 'data:image/png;base64,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'],
  ['南风', 'data:image/png;base64,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'],
  ['东南风', 'data:image/png;base64,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'],
  ['东风', 'data:image/png;base64,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'],
  ['东北风', 'data:image/png;base64,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']
])
option = {
  backgroundColor: '#080b30',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgba(0, 255, 233,0)'
          }, {
            offset: 0.5,
            color: 'rgba(255, 255, 255,1)'
          }, {
            offset: 1,
            color: 'rgba(0, 255, 233,0)'
          }],
          global: false
        }
      }
    }
  },
  grid: {
    'x': 50,
    'y': 10,
    'x2': 30,
    'y2': 40,
    'bottom': 60,
    'borderWidth': 1
  },
  xAxis: [{
    type: 'category',
    'gridIndex': 0,
    'axisLabel': {
      'show': true,
      'color': '#FFFFFF'
    },
    'axisLine': {
      'lineStyle': {
        'color': '#007279'
      }
    },
    splitArea: {
      // show: true,
      color: '#f00',
      lineStyle: {
        color: '#f00'
      }
    },
    splitLine: {
      show: false
    },
    boundaryGap: false,
    data: ['8：00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00']

  }],

  yAxis: [{
    type: 'value',
    min: 0,
    // max: 140,
    splitNumber: 4,
    'splitLine': { 'show': true, 'lineStyle': { 'color': '#007279' } },
    'axisLabel': { 'color': 'rgba(255,255,255,0)' },
    'axisLine': { 'lineStyle': { 'color': '#007279' } },
    axisTick: {
      show: true
    }
  }],
  series: [{
    smooth: true,
    name: '风向风速',
    type: 'line',
    showAllSymbol: true,
    symbol (value, params) {
      return `image://${driectionMap.get(params.data.durection)}`
    },
    symbolSize: 25,
    lineStyle: {
      normal: {
        color: '#6c50f3',
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowBlur: 0,
        shadowOffsetY: 5,
        shadowOffsetX: 5
      }
    },
    label: {
      show: true,
      position: 'top',
      textStyle: {
        color: '#6c50f3'
      }
    },
    itemStyle: {
      color: '#6c50f3',
      borderColor: '#fff',
      borderWidth: 3,
      shadowColor: 'rgba(0, 0, 0, .3)',
      shadowBlur: 0,
      shadowOffsetY: 2,
      shadowOffsetX: 2
    },
    tooltip: {
      show: true
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(108,80,243,0.3)'
        },
        {
          offset: 1,
          color: 'rgba(108,80,243,0)'
        }
        ], false),
        shadowColor: 'rgba(108,80,243, 0.9)',
        shadowBlur: 20
      }
    },
    data: [
      { value: 50.84, durection: '北风' },
      { value: 25.97, durection: '西北风' },
      { value: 32.79, durection: '西风' },
      { value: 81.55, durection: '西南风' },
      { value: 38.35, durection: '南风' },
      { value: 14.02, durection: '东南风' },
      { value: 24.02, durection: '东风' },
      { value: 54.02, durection: '东北风' }
    ]
  }

  ]
}
