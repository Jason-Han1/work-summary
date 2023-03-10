var uploadedDataURL = "/asset/get/s/data-1504625299896-Hkh5zB3tZ.json";
// 包涵线路：
// ['1', '10', '100', '1001', '1004', '101', '102', '103', '104', '105', '106', '107', '108', '109', '11', '1101', '1102', '1107', '111', '112', '113', '114', '115', '116', '118', '119', '12', '120', '1201', '1202', '1203', '1204', '121', '1218', '1219', '121B', '122', '123', '124', '125', '126', '127', '129', '13', '130', '1300', '1301', '1302', '131', '132', '133', '134', '135', '136', '137', '138', '139', '14', '140', '1400', '1401', '1402', '1403', '1404', '1406', '1408', '141', '142', '143', '144', '145', '148', '149', '15', '1501', '1502', '1503', '1504', '151', '153', '156', '16', '1600', '1601', '1602', '1603', '1604', '17', '170', '1701', '1702', '1703', '171', '173', '174', '176', '177', '178', '179', '18', '180', '185', '186', '187', '188', '189', '19', '190', '1901', '1902', '191', '192', '193', '193B', '194', '195', '196', '197', '198', '199', '2', '20', '200', '201', '202', '203', '204', '205', '206', '207', '208', '209', '21', '210', '211', '212', '213', '213B', '215', '216', '217', '218', '219', '22', '220', '221', '222', '223', '224', '225', '226', '227', '228', '23', '230', '24', '25', '251', '259', '26', '260', '262', '263', '265', '266', '267', '268', '269', '27', '270', '271', '272', '274', '276', '277', '279', '280', '282', '283', '284', '285', '286', '286B', '287', '288', '289', '29', '290', '291', '292', '293', '294', '295', '296', '297', '298', '299', '3', '30', '300', '302', '303', '303B', '304', '305', '306', '307', '308', '309', '31', '310', '311', '312', '313', '315', '316', '317', '318', '32', '320', '321', '322', '323', '324', '325', '326', '327', '328', '33', '330', '331', '334', '335', '336', '337', '338', '339', '34', '340', '341', '342', '345', '346', '347', '348', '349', '35', '350', '351', '352', '353', '354', '355', '356', '357', '358', '359', '36', '360', '361', '362', '364', '365', '366', '367', '368', '369', '37', '370', '371', '372', '373', '374', '375', '376', '377', '378', '379', '38', '380', '381', '382', '383', '384', '384B', '385', '386', '387', '388', '389', '39', '390', '391', '392', '393', '394', '394B', '395', '396', '397', '398', '399', '4', '40', '400', '401', '403', '407', '41', '416', '419', '419B', '42', '43', '432', '433', '439', '44', '448', '449', '45', '46', '47', '48', '488', '49', '5', '50', '506', '509', '51', '511', '514', '514B', '515', '516', '52', '523', '528', '53', '535', '54', '55', '56', '57', '58', '588', '59', '591', '592', '593', '594', '596', '598', '598B', '599', '6', '60', '61', '62', '63', '64', '65', '66', '67', '671', '672', '673', '674', '675', '676', '68', '69', '7', '70', '71', '72', '73', '74', '75', '76', '77', '770', '78', '784', '79', '8', '80', '801', '807', '81', '814', '82', '822', '83', '84', '840', '85', '86', '868', '87', '88', '89', '9', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99','B1', 'B2', 'B3', 'B4', 'B7', 'B8', 'B支1', 'B支2', 'B支3', 'B支4', 'B支5', 'B支6', 'B支7', 'B支8','游2','游8','游10']
myChart.setOption(
option = {
    bmap: {
        center: [120.17, 30.27],
        zoom: 12,
        roam: true,
        mapStyle: {
          styleJson: [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'land',
                'elementType': 'all',
                'stylers': {
                    'color': '#f3f3f3'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                    'color': '#fdfdfd'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'green',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'subway',
                'elementType': 'all',
            }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'local',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'building',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'label',
                'elementType': 'labels.text.fill',
                'stylers': {
                    'color': '#999999'
                }
            }]
        }
    },
    series: []
})
myChart.showLoading()
$.getJSON(uploadedDataURL, function(data) {
    var num = 300 / data.length;
    var lines=[]
    for (var x = 0; x < data.length; x += 1) {
        var line=[[data[x][0][0]/1000000,data[x][0][1]/1000000]];
        for (var y = 1; y < data[x].length; y += 1) {
            var xs=data[x][y][0]/1000000+line[y-1][0]
            var ys=data[x][y][1]/1000000+line[y-1][1]
            line.push([xs,ys]);
        }
        lines.push({
            coords: line,
        });
    };
    myChart.hideLoading();
    myChart.setOption(
    option = {
        series: [{
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: lines,
            silent: true,
            lineStyle: {
                normal: {
                    color: '#c23531',
                    opacity: 0.5,
                    width: 1
                }
            },
            progressiveThreshold: 500,
            progressive: 200
        }]
    });
});