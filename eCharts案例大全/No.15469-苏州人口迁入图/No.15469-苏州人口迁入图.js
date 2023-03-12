var geoCoorddata = {
    '南京': [118.78, 32.04],
    '江宁': [118.83, 31.95],
    '六合': [118.83, 32.36],
    '江浦': [118.62, 32.07],
    '徐州': [117.2, 34.26],
    '连云港': [119.16, 34.59],
    '南通': [120.86, 32.01],
    '苏州': [120.62, 31.32],
    '常州': [119.95, 31.79],
    '丰县': [116.57, 34.79],
    '沛县': [116.93, 34.73],
    '赣榆': [119.11, 34.83],
    '东海': [118.75, 34.54],
    '新沂': [118.33, 34.38],
    '邳县': [117.97, 34.3],
    '睢宁': [117.94, 33.89],
    '铜山': [117.2, 34.26],
    '清江': [119.02, 33.59],
    '灌云': [119.23, 34.3],
    '灌南': [119.36, 34.09],
    '沭阳': [118.79, 34.12],
    '宿迁': [118.3, 33.96],
    '泗阳': [118.68, 33.73],
    '盱眙': [118.05, 33],
    '涟水': [119.26, 33.77],
    '淮阴': [119.02, 33.62],
    '淮安': [119.15, 33.5],
    '洪泽': [118.85, 33.28],
    '泗洪': [118.23, 33.46],
    '金湖': [119.02, 33.01],
    '盐城': [120.13, 33.38],
    '滨海': [119.84, 34.01],
    '阜宁': [119.79, 33.78],
    '射阳': [120.26, 33.77],
    '建湖': [119.77, 33.46],
    '响水': [119.56, 34.2],
    '大丰': [120.45, 33.19],
    '东台': [120.31, 32.84],
    '海安': [120.45, 32.57],
    '如皋': [120.56, 32.39],
    '如东': [121.18, 32.33],
    '启东': [121.66, 31.8],
    '海门': [121.15, 31.89],
    '南通': [121.05, 32.08],
    '扬州': [119.42, 32.39],
    '宝应': [119.32, 33.23],
    '兴化': [119.82, 32.93],
    '高邮': [119.45, 32.78],
    '泰兴': [120.02, 32.16],
    '泰县': [120.15, 32.51],
    '泰州': [119.9, 32.49],
    '靖江': [120.26, 32.03],
    '江都': [119.55, 32.43],
    '邗江': [119.42, 32.39],
    '仪征': [119.16, 32.27],
    '镇江': [119.44, 32.2],
    '丹徒': [119.44, 32.2],
    '扬中': [119.81, 32.24],
    '丹阳': [119.55, 32],
    '武进': [119.95, 31.78],
    '宜兴': [119.82, 31.36],
    '金坛': [119.56, 31.74],
    '溧阳': [119.48, 31.43],
    '句容': [119.16, 31.95],
    '溧水': [119.02, 31.65],
    '高淳': [118.87, 31.32],
    '江阴': [120.26, 31.91],
    '沙洲': [120.55, 31.86],
    '常熟': [120.74, 31.64],
    '太仓': [121.1, 31.45],
    '昆山': [120.95, 31.39],
    '吴县': [120.62, 31.32],
    '吴江': [120.63, 31.16]

    // ''
};


var data = [];
for (var x in geoCoorddata) {
    if (x == '苏州')
        continue;
    var lnglat = geoCoorddata[x];
    data.push({
        name: x,
        toname: '苏州',
        coords: [geoCoorddata[x], geoCoorddata['苏州']]
    })
}

option = {
    geo: {
        show: true,
        roam: true,
        center: [120.594903, 31.311581],
        zoom: 5,
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 1,
        data: data,
        //线上面的动态特效
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 4
        },
        lineStyle: {
            normal: {
                width: '',
                color: '#a6c84c',
                curveness: 0.2
            }
        }
    }, {
        type: 'effectScatter',
        mapType: 'china',
        coordinateSystem: 'geo',
        zlevel: 3,
        data: [{
            name: '苏州',
            value: geoCoorddata['苏州'].concat(200)
        }, ],
        rippleEffect: {
            period: 10,
            scale: 5,
            brushType: 'fill'
        },
    }]
};