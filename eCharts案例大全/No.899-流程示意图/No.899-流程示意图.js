var symbol = {
  check: 'image:///asset/get/s/data-1636943448287-qjjyHghwU.png',
  close: 'image:///asset/get/s/data-1636943457581-OQJMeK3jB.png',
  submit: 'image:///asset/get/s/data-1636943461310-i_yepBUMB.png',
  wait: 'image:///asset/get/s/data-1636943464826-26GKBnu1h.png',
};

var data = [
  {
    name: '法院强制执行',
    symbol: symbol.submit,
    symbolSize: 32,
    x: 250,
    y: 850,
    label: { position: 'bottom' },
  },
  {
    name: '违法线索发现',
    symbol: symbol.check,
    symbolSize: 32,
    x: 450,
    y: 0,
    label: { position: 'bottom' },
  },
  {
    name: '结案',
    symbol: symbol.wait,
    symbolSize: 32,
    x: 450,
    y: 1000,
    label: { position: 'bottom' },
  },
  {
    name: '区县功能核查',
    symbol: symbol.check,
    symbolSize: 32,
    x: 450,
    y: 200,
    label: { position: 'bottom' },
  },
  {
    name: '市级核查',
    symbol: symbol.close,
    symbolSize: 32,
    x: 750,
    y: 300,
    label: { position: 'bottom' },
  },
  {
    name: '非立案核查',
    symbol: symbol.close,
    symbolSize: 32,
    x: 150,
    y: 450,
    label: { position: 'bottom' },
  },
  {
    name: '违法确认',
    symbol: symbol.check,
    symbolSize: 32,
    x: 450,
    y: 400,
    label: { position: 'bottom' },
  },
  {
    name: '行政处罚决定书',
    symbol: symbol.check,
    symbolSize: 32,
    x: 450,
    y: 600,
    label: { position: 'bottom' },
  },
  {
    name: '执行情况',
    symbol: symbol.check,
    symbolSize: 32,
    x: 450,
    y: 800,
    label: { position: 'bottom' },
  },
  {
    name: '市级排查',
    symbol: symbol.wait,
    symbolSize: 32,
    x: 150,
    y: 100,
    label: { position: 'bottom' },
  },
  {
    name: '结束',
    symbol: symbol.wait,
    symbolSize: 32,
    x: 450,
    y: 1200,
    label: { position: 'bottom' },
  },
];
var links = [
  {
    source: '法院强制执行',
    target: '结案',
    label: { show: true, formatter: '强制执行' },
    lineStyle: { normal: { curveness: -0.2, color: '#aaa' } },
  },
  {
    source: '违法线索发现',
    target: '区县功能核查',
    label: { show: true, formatter: '手动录入' },
    lineStyle: { normal: { curveness: 0.0, color: '#17a54d' } },
  },
  {
    source: '违法线索发现',
    target: '市级排查',
    label: { show: true, formatter: '自动录入' },
    lineStyle: { normal: { curveness: -0.2, color: '#aaa' } },
  },
  {
    source: '结案',
    target: '结束',
    label: null,
    lineStyle: { normal: { curveness: 0.0, color: '#aaa' } },
  },
  {
    source: '区县功能核查',
    target: '结束',
    label: { show: true, formatter: '涉及其他部门' },
    lineStyle: { normal: { curveness: 0.3, color: '#aaa' } },
  },
  {
    source: '区县功能核查',
    target: '市级核查',
    label: { show: true, formatter: '合法' },
    lineStyle: { normal: { curveness: 0.2, color: '#17a54d' } },
  },
  {
    source: '区县功能核查',
    target: '违法确认',
    label: { show: true, formatter: '不合法' },
    lineStyle: { normal: { curveness: 0.0, color: '#17a54d' } },
  },
  {
    source: '市级核查',
    target: '结束',
    label: { show: true, formatter: '同意' },
    lineStyle: { normal: { curveness: 0.3, color: '#aaa' } },
  },
  {
    source: '市级核查',
    target: '区县功能核查',
    label: { show: true, formatter: '不同意' },
    lineStyle: { normal: { curveness: 0.3, color: 'red' } },
  },
  {
    source: '非立案核查',
    target: '结束',
    label: { show: true, formatter: '同意' },
    lineStyle: { normal: { curveness: -0.3, color: '#aaa' } },
  },
  {
    source: '非立案核查',
    target: '违法确认',
    label: { show: true, formatter: '不同意' },
    lineStyle: { normal: { curveness: -0.3, color: 'red' } },
  },
  {
    source: '违法确认',
    target: '行政处罚决定书',
    label: { show: true, formatter: '立案' },
    lineStyle: { normal: { curveness: 0.0, color: '#17a54d' } },
  },
  {
    source: '违法确认',
    target: '非立案核查',
    label: { show: true, formatter: '非立案' },
    lineStyle: { normal: { curveness: -0.2, color: '#17a54d' } },
  },
  {
    source: '行政处罚决定书',
    target: '执行情况',
    label: { show: true, formatter: '执行' },
    lineStyle: { normal: { curveness: 0.0, color: '#17a54d' } },
  },
  {
    source: '执行情况',
    target: '法院强制执行',
    label: { show: true, formatter: '未执行到位' },
    lineStyle: { normal: { curveness: -0.2, color: '#1296db' } },
  },
  {
    source: '执行情况',
    target: '结案',
    label: { show: true, formatter: '执行到位' },
    lineStyle: { normal: { curveness: 0.0, color: '#aaa' } },
  },
  {
    source: '市级排查',
    target: '区县功能核查',
    label: { show: true, formatter: '非误报' },
    lineStyle: { normal: { curveness: -0.2, color: '#aaa' } },
  },
  {
    source: '市级排查',
    target: '结束',
    label: { show: true, formatter: '误报' },
    lineStyle: { normal: { curveness: -0.5, color: '#aaa' } },
  },
];
option = {
  toolbox: { feature: { saveAsImage: {} } },
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      type: 'graph',
      layout: 'none',
      symbolSize: 32,
      roam: true,
      label: {
        show: true,
        position: 'bottom',
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [1, 5],
      edgeLabel: {
        fontSize: 12,
      },
      data: data,
      // links: [],
      links: links,
      lineStyle: {
        opacity: 0.9,
        width: 2,
        curveness: 0,
      },
    },
  ],
};
