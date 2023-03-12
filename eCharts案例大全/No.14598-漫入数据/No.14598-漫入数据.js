var geoCoordMap = {
    '阿克苏': [81.156013, 40.349444],
    '阿里': [81.107669, 30.404557],
    '阿勒泰': [87.926214, 47.890136],
    '阿图什': [76.867154, 40.13123],
    '安庆': [117.058739, 30.537898],
    '安康': [109.038045, 32.70437],
    '巴中': [106.757916, 31.869189],
    '鞍山': [123.007763, 41.118744],
    '白城': [122.840777, 45.621086],
    '安阳': [114.351807, 36.110267],
    '白山': [126.435798, 41.945859],
    '百色': [106.631821, 23.901512],
    '包头': [109.846239, 40.647119],
    '宝鸡': [107.170645, 34.364081],
    '蚌埠': [117.35708, 32.929499],
    '保定': [115.49481, 38.886565],
    '保山': [99.177996, 25.120489],
    '北海': [109.122628, 21.472718],
    '滨州': [117.968292, 37.405314],
    '常德': [111.653718, 29.012149],
    '博乐': [81.874285, 44.844209],
    '常州': [119.981861, 31.771397],
    '朝阳': [116.521695, 39.958953],
    '沧州': [116.863806, 38.297615],
    '潮州': [116.630076, 23.661812],
    '郴州': [113.037704, 25.782264],
    '成都': [104.067923, 30.679943],
    '滁州': [118.32457, 32.317351],
    '赤峰': [118.930761, 42.297112],
    '德令哈': [97.162832, 37.727059],
    '丹东': [124.338543, 40.129023],
    '大庆': [125.02184, 46.596709],
    '大连': [121.593478, 38.94871],
    '德阳': [104.402398, 31.13114],
    '德州': [116.328161, 37.460826],
    '鄂州': [114.895594, 30.384439],
    '东胜': [109.764419, 39.805586],
    '东莞': [113.763434, 23.043024],
    '防城港': [108.351791, 21.617398],
    '佛山': [113.134026, 23.035095],
    '福州': [119.330221, 26.047125],
    '阜阳': [115.820932, 32.901211],
    '阜新': [121.660822, 42.01925],
    '格尔木': [92.701667, 35.580972],
    '固原': [106.285268, 36.021523],
    '共和': [100.064876, 36.538342],
    '广元': [105.819687, 32.44104],
    '广州': [113.30765, 23.120049],
    '贵池': [117.508478, 30.514086],
    '贵阳': [106.709177, 26.629907],
    '桂林': [110.26092, 25.262901],
    '哈尔滨': [126.657717, 45.773225],
    '定西': [104.626638, 35.586056],
    '海东': [102.085207, 36.51761],
    '海口': [110.330802, 20.022071],
    '海拉尔': [120.042882, 49.279245],
    '海晏': [100.843355, 37.114748],
    '邯郸': [114.482694, 36.609308],
    '汉中': [107.045478, 33.081569],
    '合肥': [117.282699, 31.866942],
    '杭州': [120.219375, 30.259244],
    '合作': [103.085649, 34.99726],
    '个旧': [103.149155, 23.305692],
    '河池': [108.069948, 24.699521],
    '河源': [114.713721, 23.757251],
    '鹤壁': [114.29777, 35.755426],
    '黑河': [127.50083, 50.25069],
    '衡阳': [112.583819, 26.898164],
    '衡水': [115.686229, 37.746929],
    '葫芦岛': [120.860758, 40.74303],
    '呼和浩特': [111.660351, 40.828319],
    '菏泽': [115.46336, 35.26244],
    '湖州': [120.137243, 30.877925],
    '淮南': [117.018639, 32.642812],
    '怀化': [109.986959, 27.557483],
    '淮北': [116.791447, 33.960023],
    '淮阴1': [118.935664, 33.664059],
    '淮阴2': [118.935664, 33.664059],
    '黄冈': [114.906618, 30.446109],
    '黄石': [115.050683, 30.216127],
    '集宁': [113.112832, 41.027766],
    '惠州': [114.410658, 23.11354],
    '吉首': [109.770926, 28.317143],
    '吉林': [126.564544, 43.871988],
    '济南': [117.024967, 36.682785],
    '佳木斯': [130.284735, 46.81378],
    '嘉兴': [120.760428, 30.773992],
    '江汉': [114.266384, 30.610951],
    '济宁': [116.600798, 35.402122],
    '江门': [113.078125, 22.575117],
    '焦作': [113.211836, 35.234608],
    '金昌': [102.208126, 38.516072],
    '晋城': [112.867333, 35.499834],
    '揭阳': [116.379501, 23.547999],
    '锦州': [121.147749, 41.130879],
    '金华': [119.652576, 29.102899],
    '荆门': [112.21733, 31.042611],
    '景洪': [100.927318, 22.111413],
    '康定': [101.755331, 29.957989],
    '酒泉': [98.508415, 39.741474],
    '克拉玛依': [84.92699, 45.203919],
    '库尔勒': [85.709418, 41.7055],
    '奎屯': [85.013934, 44.559557],
    '昆明': [102.714601, 25.049153],
    '莱芜': [117.684667, 36.233654],
    '拉萨': [91.111891, 29.662557],
    '廊坊': [116.703602, 39.518611],
    '兰州': [103.823305, 36.064226],
    '离石': [111.313142, 37.552339],
    '丽江': [100.229628, 26.875351],
    '连云港': [119.173872, 34.601549],
    '丽水': [119.929576, 28.4563],
    '辽阳': [123.172451, 41.273339],
    '乐山': [103.760824, 29.600958],
    '辽源': [125.133686, 42.923303],
    '聊城': [115.986869, 36.455829],
    '林芝': [94.349985, 29.666941],
    '临汾': [111.538788, 36.099745],
    '临河': [107.44184, 40.932018],
    '临沂': [118.340768, 35.072409],
    '柳州': [109.422402, 24.329053],
    '临沧': [100.092613, 23.887806],
    '龙岩': [117.017997, 25.078685],
    '六盘水': [104.852087, 26.591866],
    '泸州': [105.44397, 28.89593],
    '六安': [116.505253, 31.755558],
    '娄底': [111.996396, 27.741073],
    '潞西': [98.426939, 24.329497],
    '漯河': [114.046061, 33.576279],
    '洛阳': [112.447525, 34.657368],
    '马鞍山': [118.515882, 31.688528],
    '玛沁': [99.794262, 34.504017],
    '马尔康': [102.023305, 32.019304],
    '茂名': [110.931245, 21.668226],
    '梅州': [116.126403, 24.304571],
    '绵阳': [104.705519, 31.504701],
    '牡丹江': [129.608035, 44.588521],
    '南京': [118.778074, 32.057236],
    '南平': [118.181883, 26.643626],
    '南通': [120.873801, 32.014665],
    '南充': [106.105554, 30.800965],
    '南宁': [108.297234, 22.806493],
    '宁波': [121.579006, 29.885259],
    '内江': [105.073056, 29.599462],
    '南阳': [112.542842, 33.01142],
    '宁德': [119.542082, 26.656527],
    '攀枝花': [101.722423, 26.587571],
    '盘锦': [122.073228, 41.141248],
    '平顶山': [113.300849, 33.745301],
    '莆田': [119.077731, 25.44845],
    '濮阳': [115.026627, 35.753298],
    '平凉': [106.688911, 35.55011],
    '齐齐哈尔': [123.987289, 47.3477],
    '黔南': [107.523205, 26.264536],
    '黔东南': [107.985353, 26.583992],
    '钦州': [108.638798, 21.97335],
    '秦皇岛': [119.604368, 39.945462],
    '黔西南': [104.900558, 25.095148],
    '青岛': [120.384428, 36.105215],
    '清远': [113.040773, 23.698469],
    '衢州': [118.875842, 28.95691],
    '曲靖': [103.782539, 25.520758],
    '泉州': [118.600362, 24.901652],
    '日喀则': [88.956063, 29.26816],
    '三门峡': [111.181262, 34.78332],
    '三明': [117.642194, 26.270835],
    '日照': [119.50718, 35.420225],
    '山南': [91.750644, 29.229027],
    '汕头': [116.72865, 23.383908],
    '厦门': [118.103886, 24.489231],
    '汕尾': [115.372924, 22.778731],
    '商丘': [115.641886, 34.438589],
    '上海': [121.487899, 31.249162],
    '韶关': [113.594461, 24.80296],
    '绍兴': [120.592467, 30.002365],
    '邵阳': [111.461525, 27.236811],
    '深圳': [114.025974, 22.546054],
    '沈阳': [123.432791, 41.808645],
    '十堰': [110.801229, 32.636994],
    '石河子': [86.041865, 44.308259],
    '石家庄': [114.522082, 38.048958],
    '朔州': [112.479928, 39.337672],
    '石嘴山': [106.379337, 39.020223],
    '四平': [124.391382, 43.175525],
    '思茅': [100.855253, 22.739133],
    '苏州1': [120.619907, 31.317987],
    '松原': [124.832995, 45.136049],
    '遂宁': [105.564888, 30.557491],
    '台州': [121.440613, 28.668283],
    '泰安': [117.089415, 36.188078],
    '太原': [112.550864, 37.890277],
    '唐山': [118.183451, 39.650531],
    '天津': [117.210813, 39.14393],
    '天水': [105.736932, 34.584319],
    '通辽': [122.260363, 43.633756],
    '通化': [125.94265, 41.736397],
    '商州': [109.873271, 33.895485],
    '铜川': [108.968067, 34.908368],
    '铜陵': [117.819429, 30.94093],
    '吐鲁番': [89.266025, 42.678925],
    '威海': [122.093958, 37.528787],
    '温州': [120.690635, 28.002838],
    '潍坊': [119.142634, 36.716115],
    '渭南': [109.483933, 34.502358],
    '乌兰浩特': [122.081534, 46.116944],
    '乌海': [106.831999, 39.683177],
    '乌鲁木齐': [87.564988, 43.84038],
    '无锡': [120.305456, 31.570037],
    '芜湖': [118.384108, 31.36602],
    '梧州': [111.305472, 23.485395],
    '吴忠': [106.208254, 37.993561],
    '武都': [105.134553, 33.293917],
    '武汉': [114.3162, 30.581084],
    '西峰': [107.673674, 35.677201],
    '西昌': [102.117888, 27.863377],
    '西宁': [101.767921, 36.640739],
    '锡林浩特': [116.136948, 44.078961],
    '咸宁': [114.300061, 29.880657],
    '襄樊': [112.176326, 32.094934],
    '孝感': [113.935734, 30.927955],
    '新乡': [113.91269, 35.307258],
    '忻州': [112.727939, 38.461031],
    '邢台': [114.520487, 37.069531],
    '徐州': [117.188107, 34.271553],
    '信阳': [114.085491, 32.128582],
    '许昌': [113.835312, 34.02674],
    '宿州': [116.988692, 33.636772],
    '宣城': [118.752096, 30.951642],
    '烟台': [121.309555, 37.536562],
    '延安': [109.50051, 36.60332],
    '盐城': [120.148872, 33.379862],
    '雅安': [103.009356, 29.999716],
    '延吉': [129.471302, 43.059667],
    '扬州2': [119.427778, 32.408505],
    '扬州1': [119.427778, 32.408505],
    '阳江': [111.97701, 21.871517],
    '阳泉': [113.569238, 37.869529],
    '伊宁': [81.289048, 44.020356],
    '宜宾': [104.633019, 28.769675],
    '益阳': [112.366547, 28.588088],
    '银川': [106.206479, 38.502621],
    '营口': [122.233391, 40.668651],
    '宜昌': [111.310981, 30.732758],
    '榆次': [112.843737, 37.650825],
    '永州': [111.614648, 26.435972],
    '玉林': [110.151676, 22.643974],
    '玉溪': [102.545068, 24.370447],
    '榆林': [109.745926, 38.279439],
    '岳阳': [113.146196, 29.378007],
    '云浮': [112.050946, 22.937976],
    '运城': [111.006854, 35.038859],
    '枣庄': [117.279305, 34.807883],
    '张家界': [110.48162, 29.124889],
    '湛江': [110.365067, 21.257463],
    '张掖': [100.459892, 38.93932],
    '张家口': [114.893782, 40.811188],
    '漳州': [117.676205, 24.517065],
    '长沙': [112.979353, 28.213478],
    '长治': [113.120292, 36.201664],
    '长春': [125.313642, 43.898338],
    '昭通': [103.725021, 27.340633],
    '镇江': [119.455835, 32.204409],
    '郑州': [113.649644, 34.75661],
    '肇庆': [112.479653, 23.078663],
    '重庆': [106.530635, 29.544606],
    '舟山': [122.169872, 30.03601],
    '周口': [114.654102, 33.623741],
    '珠海': [113.562447, 22.256915],
    '自贡': [104.776071, 29.359157],
    '淄博': [118.059134, 36.804685],
    '驻马店': [114.049154, 32.983158],
    '上饶': [117.955464, 28.457623],
    '上饶':[117.955464,28.457623],
'阿左':[105.038247,39.547806],
'白银':[104.205649,36.501822],
'毕节':[106.734996,26.902826],
'昌吉':[89.594844,44.027679],
'承德':[117.933822,40.992521],
'楚雄':[101.328638,24.880252],
'达川':[107.494973,31.214199],
'大理':[100.111732,25.909943],
'大同':[113.290509,40.113744],
'东营':[118.612643,37.408666],
'恩施':[109.517433,30.308979],
'广安':[102.89916,30.367481],
'哈密':[93.502911,42.82016],
'和田':[79.949779,37.115381],
'黄山':[118.143892,30.299],
'荆沙':[112.410562,31.209316],
'喀什':[75.998116,39.471196],
'临夏':[103.200576,35.585835],
'六库':[98.859932,25.860677],
'随枣':[113.379358,31.717858],
'塔城':[83.003909,46.741463],
'铜仁':[109.168558,27.674903],
'文山':[104.03094,23.41601],
'西安':[108.953098,34.2778],
'伊春':[128.047414,47.356592],
'中甸':[101.592952,24.864213],
'中山':[113.42206,22.545178]

};
var BJData = [
    [{
        name: '阿克苏',
        value: 13
    }, {
        name: '上饶'
    }],
    [{
name:'阿勒泰',
	value:1	
}, {
name: '上饶'
 }],
[{
name:'阿里',
	value:1	
}, {
name: '上饶'
 }],
[{
name:'阿图什',
	value:3	
}, {
name: '上饶'
 }],
[{
name:'阿左',
	value:6	
}, {
name: '上饶'
 }],
[{
name:'安康',
	value:120	
}, {
name: '上饶'
 }],
[{
name:'安庆',
	value:362	

}, {
name: '上饶'
 }],
[{
name:'安阳',
	value:143	
}, {
name: '上饶'
 }],
[{
name:'鞍山',
	value:36	
}, {
name: '上饶'
 }],
[{
name:'巴中',
	value:42	
}, {
name: '上饶'
 }],
[{
name:'白城',
	value:12	
}, {
name: '上饶'
 }],
[{
name:'白山',
	value:12	
}, {
name: '上饶'
 }],
[{
name:'白银',
	value:21	
}, {
name: '上饶'
 }],
[{
name:'百色',
	value:122	
}, {
name: '上饶'
 }],
[{
name:'蚌埠',
	value:207	
}, {
name: '上饶'
 }],
[{
name:'包头',
	value:29	
}, {
name: '上饶'
 }],
[{
name:'宝鸡',
	value:83	
}, {
name: '上饶'
 }],
[{
name:'保定',
	value:121	
}, {
name: '上饶'
 }],
[{
name:'保山',
	value:75	
}, {
name: '上饶'
 }],
[{
name:'北海',
	value:43	
}, {
name: '上饶'
 }],
[{
name:'毕节',
	value:315	
}, {
name: '上饶'
 }],
[{
name:'滨州',
	value:24	
}, {
name: '上饶'
 }],
[{
name:'博乐',
	value:4	
}, {
name: '上饶'
 }],
[{
name:'沧州',
	value:47	
}, {
name: '上饶'
 }],
[{
name:'昌吉',
	value:9	
}, {
name: '上饶'
 }],
[{
name:'常德',
	value:211	
}, {
name: '上饶'
 }],
[{
name:'常州',
	value:410	
}, {
name: '上饶'
 }],
[{
name:'朝阳',
	value:6	
}, {
name: '上饶'
 }],
[{
name:'潮州',
	value:186	
}, {
name: '上饶'
 }],
[{
name:'郴州',

	value:124	
}, {
name: '上饶'
 }],
[{
name:'成都',
	value:742	
}, {
name: '上饶'
 }],
[{
name:'承德',
	value:23	
}, {
name: '上饶'
 }],
[{

name:'赤峰',
	value:22	
}, {
name: '上饶'
 }],
[{

name:'滁州',
	value:178	
}, {
name: '上饶'
 }],
[{
name:'楚雄',
	value:44	
}, {
name: '上饶'
 }],
[{
name:'达川',
	value:165	
}, {
name: '上饶'
 }],
[{
name:'大理',
	value:62	
}, {
name: '上饶'
 }],
[{
name:'大连',
	value:109	
}, {
name: '上饶'
 }],
[{
name:'大庆',
	value:45	
}, {
name: '上饶'
 }],
[{
name:'大同',
	value:31	
}, {
name: '上饶'
 }],
[{
name:'丹东',
	value:26	
}, {
name: '上饶'
 }],
[{
name:'德令哈',
	value:4	
}, {
name: '上饶'
 }],
[{
name:'德阳',
	value:106	
}, {
name: '上饶'
 }],
[{
name:'德州',
	value:31	
}, {
name: '上饶'
 }],
[{
name:'定西',
	value:13	
}, {
name: '上饶'
 }],
[{
name:'东莞',
	value:1785	
}, {
name: '上饶'
 }],
[{
name:'东胜',
	value:23	
}, {
name: '上饶'
 }],
[{
name:'东营',
	value:20	
}, {
name: '上饶'
 }],
[{
name:'鄂州',
	value:43	
}, {
name: '上饶'
 }],
[{
name:'恩施',
	value:201	
}, {
name: '上饶'
 }],
[{
name:'防城港',
	value:30	
}, {
name: '上饶'
 }],
[{
name:'佛山',
	value:809	
}, {
name: '上饶'
 }],
[{
name:'福州',
	value:2574	
}, {
name: '上饶'
 }],
[{
name:'阜新',
	value:18	
}, {
name: '上饶'
 }],
[{
name:'阜阳',
	value:604	
}, {
name: '上饶'
 }],
[{
name:'格尔木',
	value:5	
}, {
name: '上饶'
 }],
[{
name:'个旧',
	value:114	
}, {
name: '上饶'
 }],
[{
name:'共和',
	value:1	
}, {
name: '上饶'
 }],
[{
name:'固原',
	value:3	
}, {
name: '上饶'
 }],
[{
name:'广安',
	value:164	
}, {
name: '上饶'
 }],
[{
name:'广元',
	value:42	
}, {
name: '上饶'
 }],
[{
name:'广州',
	value:2050	
}, {
name: '上饶'
 }],
[{
name:'贵池',
	value:1088	
}, {
name: '上饶'
 }],
[{
name:'贵阳',
	value:702	
}, {
name: '上饶'
 }],
[{
name:'桂林',
	value:264	
}, {
name: '上饶'
 }],
[{
name:'哈尔滨',
	value:75	
}, {
name: '上饶'
 }],
[{
name:'哈密',
	value:6	
}, {
name: '上饶'
 }],
[{
name:'海东',
	value:9	
}, {
name: '上饶'
 }],
[{
name:'海口',
	value:340	
}, {
name: '上饶'
 }],
[{
name:'海拉尔',
	value:14	
}, {
name: '上饶'
 }],
[{
name:'海晏',
	value:6	
}, {
name: '上饶'
 }],
[{
name:'邯郸',
	value:254	
}, {
name: '上饶'
 }],
[{
name:'汉中',
	value:84	
}, {
name: '上饶'
 }],
[{
name:'杭州',
	value:13851	
}, {
name: '上饶'
 }],
[{
name:'合肥',
	value:608	
}, {
name: '上饶'
 }],
[{
name:'合作',
	value:5	
}, {
name: '上饶'
 }],
[{
name:'和田',
	value:3	
}, {
name: '上饶'
 }],
[{
name:'河池',
	value:103	
}, {
name: '上饶'
 }],
[{
name:'河源',
	value:67	
}, {
name: '上饶'
 }],
[{
name:'菏泽',
	value:194	
}, {
name: '上饶'
 }],
[{
name:'鹤壁',
	value:32	
}, {
name: '上饶'
 }],
[{
name:'黑河',
	value:7	
}, {
name: '上饶'
 }],
[{
name:'衡水',
	value:66	
}, {
name: '上饶'
 }],
[{
name:'衡阳',
	value:208	
}, {
name: '上饶'
 }],
[{
name:'呼和浩特',
	value:30	
}, {
name: '上饶'
 }],
[{
name:'葫芦岛',
	value:18	
}, {
name: '上饶'
 }],
[{
name:'湖州',
	value:609	
}, {
name: '上饶'
 }],
[{
name:'怀化',
	value:251	
}, {
name: '上饶'
 }],
[{
name:'淮北',
	value:78	
}, {
name: '上饶'
 }],
[{
name:'淮南',
	value:128	
}, {
name: '上饶'
 }],
[{
name:'淮阴1',
	value:87	
}, {
name: '上饶'
 }],
[{
name:'淮阴2',
	value:167	
}, {
name: '上饶'
 }],
[{
name:'黄冈',
	value:329	
}, {
name: '上饶'
 }],
[{
name:'黄山',
	value:436	
}, {
name: '上饶'
 }],
[{
name:'黄石',
	value:262	
}, {
name: '上饶'
 }],
[{
name:'惠州',
	value:383	
}, {
name: '上饶'
 }],
[{
name:'吉林',
	value:27	
}, {
name: '上饶'
 }],
[{
name:'吉首',
	value:85	
}, {
name: '上饶'
 }],
[{
name:'集宁',
	value:9	
}, {
name: '上饶'
 }],
[{
name:'济南',
	value:120	
}, {
name: '上饶'
 }],
[{
name:'济宁',
	value:143	
}, {
name: '上饶'
 }],
[{
name:'佳木斯',
	value:16	
}, {
name: '上饶'
 }],
[{
name:'嘉兴',
	value:2021	
}, {
name: '上饶'
 }],
[{
name:'江汉',
	value:75	
}, {
name: '上饶'
 }],
[{
name:'江门',
	value:162	
}, {
name: '上饶'
 }],
[{
name:'焦作',
	value:87	
}, {
name: '上饶'
 }],
[{
name:'揭阳',
	value:105	
}, {
name: '上饶'
 }],
[{
name:'金昌',
	value:12	
}, {
name: '上饶'
 }],
[{
name:'金华',
	value:15547	
}, {
name: '上饶'
 }],
[{
name:'锦州',
	value:19	
}, {
name: '上饶'
 }],
[{
name:'晋城',
	value:30	
}, {
name: '上饶'
 }],
[{
name:'荆门',
	value:117	
}, {
name: '上饶'
 }],
[{
name:'荆沙',
	value:184	
}, {
name: '上饶'
 }],
[{
name:'景洪',
	value:45	
}, {
name: '上饶'
 }],
[{
name:'酒泉',
	value:20	
}, {
name: '上饶'
 }],
[{
name:'喀什',
	value:7	
}, {
name: '上饶'
 }],
[{
name:'康定',
	value:3	
}, {
name: '上饶'
 }],
[{
name:'克拉玛依',
	value:2	
}, {
name: '上饶'
 }],
[{
name:'库尔勒',
	value:11	
}, {
name: '上饶'
 }],
[{
name:'奎屯',
	value:3	
}, {
name: '上饶'
 }],
[{
name:'昆明',
	value:582	
}, {
name: '上饶'
 }],
[{
name:'拉萨',
	value:14	
}, {
name: '上饶'
 }],
[{
name:'莱芜',
	value:42	
}, {
name: '上饶'
 }],
[{
name:'兰州',
	value:73	
}, {
name: '上饶'
 }],
[{
name:'廊坊',
	value:96	
}, {
name: '上饶'
 }],
[{
name:'乐山',
	value:52	
}, {
name: '上饶'
 }],
[{
name:'离石',
	value:24	
}, {
name: '上饶'
 }],
[{
name:'丽江',
	value:101	
}, {
name: '上饶'
 }],
[{
name:'丽水',
	value:652	
}, {
name: '上饶'
 }],
[{
name:'连云港',
	value:160	
}, {
name: '上饶'
 }],
[{
name:'辽阳',
	value:25	
}, {
name: '上饶'
 }],
[{
name:'辽源',
	value:3	
}, {
name: '上饶'
 }],
[{
name:'聊城',
	value:39	
}, {
name: '上饶'
 }],
[{
name:'林芝',
	value:1	
}, {
name: '上饶'
 }],
[{
name:'临沧',
	value:46	
}, {
name: '上饶'
 }],
[{
name:'临汾',
	value:44	
}, {
name: '上饶'
 }],
[{
name:'临河',
	value:9	
}, {
name: '上饶'
 }],
[{
name:'临夏',
	value:30	
}, {
name: '上饶'
 }],
[{
name:'临沂',
	value:150	
}, {
name: '上饶'
 }],
[{
name:'柳州',
	value:131	
}, {
name: '上饶'
 }],
[{
name:'六安',
	value:221	
}, {
name: '上饶'
 }],
[{
name:'六库',
	value:26	
}, {
name: '上饶'
 }],
[{
name:'六盘水',
	value:128	
}, {
name: '上饶'
 }],
[{
name:'龙岩',
	value:175	
}, {
name: '上饶'
 }],
[{
name:'娄底',
	value:186	
}, {
name: '上饶'
 }],
[{
name:'泸州',
	value:135	
}, {
name: '上饶'
 }],
[{
name:'潞西',
	value:47	
}, {
name: '上饶'
 }],
[{
name:'洛阳',
	value:202	
}, {
name: '上饶'
 }],
[{
name:'漯河',
	value:61	
}, {
name: '上饶'
 }],
[{
name:'马鞍山',
	value:57	
}, {
name: '上饶'
 }],
[{
name:'马尔康',
	value:21	
}, {
name: '上饶'
 }],
[{
name:'玛沁',
	value:1	
}, {
name: '上饶'
 }],
[{
name:'茂名',
	value:31	
}, {
name: '上饶'
 }],
[{
name:'梅州',
	value:65	
}, {
name: '上饶'
 }],
[{
name:'绵阳',
	value:139	
}, {
name: '上饶'
 }],
[{
name:'牡丹江',
	value:24	
}, {
name: '上饶'
 }],
[{
name:'南充',
	value:87	
}, {
name: '上饶'
 }],
[{
name:'南京',
	value:596	
}, {
name: '上饶'
 }],
[{
name:'南宁',
	value:216	
}, {
name: '上饶'
 }],
[{
name:'南平',
	value:953	
}, {
name: '上饶'
 }],
[{
name:'南通',
	value:291	
}, {
name: '上饶'
 }],
[{
name:'南阳',
	value:255	
}, {
name: '上饶'
 }],
[{
name:'内江',
	value:77	
}, {
name: '上饶'
 }],
[{
name:'宁波',
	value:8548	
}, {
name: '上饶'
 }],
[{
name:'宁德',
	value:381	
}, {
name: '上饶'
 }],
[{
name:'攀枝花',
	value:16	
}, {
name: '上饶'
 }],
[{
name:'盘锦',
	value:2	
}, {
name: '上饶'
 }],
[{
name:'平顶山',
	value:386	
}, {
name: '上饶'
 }],
[{
name:'平凉',
	value:10	
}, {
name: '上饶'
 }],
[{
name:'莆田',
	value:557	
}, {
name: '上饶'
 }],
[{
name:'濮阳',
	value:80	
}, {
name: '上饶'
 }],
[{
name:'齐齐哈尔',
	value:14	
}, {
name: '上饶'
 }],
[{
name:'黔东南',
	value:261	
}, {
name: '上饶'
 }],
[{
name:'黔南',
	value:234	
}, {
name: '上饶'
 }],
[{
name:'黔西南',
	value:120	
}, {
name: '上饶'
 }],
[{
name:'钦州',
	value:41	
}, {
name: '上饶'
 }],
[{
name:'秦皇岛',
	value:33	
}, {
name: '上饶'
 }],
[{
name:'青岛',
	value:122	
}, {
name: '上饶'
 }],
[{
name:'清远',
	value:83	
}, {
name: '上饶'
 }],
[{
name:'衢州',
	value:3922	
}, {
name: '上饶'
 }],
[{
name:'曲靖',
	value:134	
}, {
name: '上饶'
 }],
[{
name:'泉州',
	value:3599	
}, {
name: '上饶'
 }],
[{
name:'日喀则',
	value:1	
}, {
name: '上饶'
 }],
[{
name:'日照',
	value:24	
}, {
name: '上饶'
 }],
[{
name:'三门峡',
	value:44	
}, {
name: '上饶'
 }],
[{
name:'三明',
	value:368	
}, {
name: '上饶'
 }],
[{
name:'厦门',
	value:3110	
}, {
name: '上饶'
 }],
[{
name:'山南',
	value:8	
}, {
name: '上饶'
 }],
[{
name:'汕头',
	value:442	
}, {
name: '上饶'
 }],
[{
name:'汕尾',
	value:21	
}, {
name: '上饶'
 }],
[{
name:'商丘',
	value:273	
}, {
name: '上饶'
 }],
[{
name:'商州',
	value:21	
}, {
name: '上饶'
 }],
[{
name:'上海',
	value:10011	
}, {
name: '上饶'
 }],
[{
name:'韶关',
	value:104	
}, {
name: '上饶'
 }],
[{
name:'邵阳',
	value:124	
}, {
name: '上饶'
 }],
[{
name:'绍兴',
	value:2500	
}, {
name: '上饶'
 }],
[{
name:'深圳',
	value:3608	
}, {
name: '上饶'
 }],
[{
name:'沈阳',
	value:149	
}, {
name: '上饶'
 }],
[{
name:'十堰',
	value:131	
}, {
name: '上饶'
 }],
[{
name:'石河子',
	value:5	
}, {
name: '上饶'
 }],
[{
name:'石家庄',
	value:130	
}, {
name: '上饶'
 }],
[{
name:'石嘴山',
	value:23	
}, {
name: '上饶'
 }],
[{
name:'朔州',
	value:8	
}, {
name: '上饶'
 }],
[{
name:'思茅',
	value:37	
}, {
name: '上饶'
 }],
[{
name:'四平',
	value:23	
}, {
name: '上饶'
 }],
[{
name:'松原',
	value:12	
}, {
name: '上饶'
 }],
[{
name:'苏州1',
	value:1889	
}, {
name: '上饶'
 }],
[{
name:'随枣',
	value:96	
}, {
name: '上饶'
 }],
[{
name:'遂宁',
	value:42	
}, {
name: '上饶'
 }],
[{
name:'塔城',
	value:1	
}, {
name: '上饶'
 }],
[{
name:'台州',
	value:3220	
}, {
name: '上饶'
 }],
[{
name:'太原',
	value:122	
}, {
name: '上饶'
 }],
[{
name:'泰安',
	value:60	
}, {
name: '上饶'
 }],
[{
name:'唐山',
	value:52	
}, {
name: '上饶'
 }],
[{
name:'天津',
	value:291	
}, {
name: '上饶'
 }],
[{
name:'天水',
	value:34	
}, {
name: '上饶'
 }],
[{
name:'通化',
	value:14	
}, {
name: '上饶'
 }],
[{
name:'通辽',
	value:9	
}, {
name: '上饶'
 }],
[{
name:'铜川',
	value:11	
}, {
name: '上饶'
 }],
[{
name:'铜陵',
	value:68	
}, {
name: '上饶'
 }],
[{
name:'铜仁',
	value:227	
}, {
name: '上饶'
 }],
[{
name:'吐鲁番',
	value:7	
}, {
name: '上饶'
 }],
[{
name:'威海',
	value:23	
}, {
name: '上饶'
 }],
[{
name:'潍坊',
	value:83	
}, {
name: '上饶'
 }],
[{
name:'渭南',
	value:79	
}, {
name: '上饶'
 }],
[{
name:'温州',
	value:10537	
}, {
name: '上饶'
 }],
[{
name:'文山',
	value:64	
}, {
name: '上饶'
 }],
[{
name:'乌海',
	value:3	
}, {
name: '上饶'
 }],
[{
name:'乌兰浩特',
	value:6	
}, {
name: '上饶'
 }],
[{
name:'乌鲁木齐',
	value:43	
}, {
name: '上饶'
 }],
[{
name:'无锡',
	value:759	
}, {
name: '上饶'
 }],
[{
name:'芜湖',
	value:257	
}, {
name: '上饶'
 }],
[{
name:'吴忠',
	value:12	
}, {
name: '上饶'
 }],
[{
name:'梧州',
	value:67	
}, {
name: '上饶'
 }],
[{
name:'武都',
	value:25	
}, {
name: '上饶'
 }],
[{
name:'武汉',
	value:542	
}, {
name: '上饶'
 }],
[{
name:'西安',
	value:498	
}, {
name: '上饶'
 }],
[{
name:'西昌',
	value:160	
}, {
name: '上饶'
 }],
[{
name:'西峰',
	value:11	
}, {
name: '上饶'
 }],
[{
name:'西宁',
	value:42	
}, {
name: '上饶'
 }],
[{
name:'锡林浩特',
	value:23	
}, {
name: '上饶'
 }],
[{
name:'咸宁',
	value:123	
}, {
name: '上饶'
 }],
[{
name:'襄樊',
	value:282	
}, {
name: '上饶'
 }],
[{
name:'孝感',
	value:100	
}, {
name: '上饶'
 }],
[{
name:'忻州',
	value:42	
}, {
name: '上饶'
 }],
[{
name:'新乡',
	value:144	
}, {
name: '上饶'
 }],
[{
name:'信阳',
	value:252	
}, {
name: '上饶'
 }],
[{
name:'邢台',
	value:57	
}, {
name: '上饶'
 }],
[{
name:'宿州',
	value:211	
}, {
name: '上饶'
 }],
[{
name:'徐州',
	value:411	
}, {
name: '上饶'
 }],
[{
name:'许昌',
	value:76	
}, {
name: '上饶'
 }],
[{
name:'宣城',
	value:220	
}, {
name: '上饶'
 }],
[{
name:'雅安',
	value:32	
}, {
name: '上饶'
 }],
[{
name:'烟台',
	value:54	
}, {
name: '上饶'
 }],
[{
name:'延安',
	value:17	
}, {
name: '上饶'
 }],
[{
name:'延吉',
	value:17	
}, {
name: '上饶'
 }],
[{
name:'盐城',
	value:266	
}, {
name: '上饶'
 }],
[{
name:'扬州1',
	value:192	
}, {
name: '上饶'
 }],
[{
name:'扬州2',
	value:191	
}, {
name: '上饶'
 }],
[{
name:'阳江',
	value:42	
}, {
name: '上饶'
 }],
[{
name:'阳泉',
	value:11	
}, {
name: '上饶'
 }],
[{
name:'伊春',
	value:20	
}, {
name: '上饶'
 }],
[{
name:'伊宁',
	value:12	
}, {
name: '上饶'
 }],
[{
name:'宜宾',
	value:236	
}, {
name: '上饶'
 }],
[{
name:'宜昌',
	value:137	
}, {
name: '上饶'
 }],
[{
name:'益阳',
	value:133	
}, {
name: '上饶'
 }],
[{
name:'银川',
	value:30	
}, {
name: '上饶'
 }],
[{
name:'营口',
	value:25	
}, {
name: '上饶'
 }],
[{
name:'永州',
	value:126	
}, {
name: '上饶'
 }],
[{
name:'榆次',
	value:19	
}, {
name: '上饶'
 }],
[{
name:'榆林',
	value:15	
}, {
name: '上饶'
 }],
[{
name:'玉林',
	value:108	
}, {
name: '上饶'
 }],
[{
name:'玉溪',
	value:24	
}, {
name: '上饶'
 }],
[{
name:'岳阳',
	value:263	
}, {
name: '上饶'
 }],
[{
name:'云浮',
	value:19	
}, {
name: '上饶'
 }],
[{
name:'运城',
	value:44	
}, {
name: '上饶'
 }],
[{
name:'枣庄',
	value:45	
}, {
name: '上饶'
 }],
[{
name:'湛江',
	value:86	
}, {
name: '上饶'
 }],
[{
name:'张家界',
	value:71	
}, {
name: '上饶'
 }],
[{
name:'张家口',
	value:37	
}, {
name: '上饶'
 }],
[{
name:'张掖',
	value:13	
}, {
name: '上饶'
 }],
[{
name:'漳州',
	value:411	
}, {
name: '上饶'
 }],
[{
name:'长春',
	value:89	
}, {
name: '上饶'
 }],
[{
name:'长沙',
	value:1137	
}, {
name: '上饶'
 }],
[{
name:'长治',
	value:58	
}, {
name: '上饶'
 }],
[{
name:'昭通',
	value:264	
}, {
name: '上饶'
 }],
[{
name:'肇庆',
	value:71	
}, {
name: '上饶'
 }],
[{
name:'镇江',
	value:167	
}, {
name: '上饶'
 }],
[{
name:'郑州',
	value:401	
}, {
name: '上饶'
 }],
[{
name:'中甸',
	value:11	
}, {
name: '上饶'
 }],
[{
name:'中山',
	value:931	
}, {
name: '上饶'
 }],
[{
name:'重庆',
	value:971	
}, {
name: '上饶'
 }],
[{
name:'舟山',
	value:154	
}, {
name: '上饶'
 }],
[{
name:'周口',
	value:251	
}, {
name: '上饶'
 }],
[{
name:'珠海',
	value:230	
}, {
name: '上饶'
 }],
[{
name:'驻马店',
	value:268	
}, {
name: '上饶'
 }],
[{
name:'淄博',
	value:63	
}, {
name: '上饶'
 }],
[{
name:'自贡',
	value:44	
}, {
name: '上饶'
 }],





];
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord,
                value: dataItem[0].value
            }, {
                coord: toCoord,
            }]);
        }
    }
    return res;
};

var color = ['#a6c84c', '#ffa022', '#46bee9'];
var series = [];
[
    ['上饶', BJData]
].forEach(function(item, i) {
    series.push(

        {
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 4,
                trailLength: 0.02,
                symbol: 'arrow',
                symbolSize: 5,
            },
            lineStyle: {
                normal: {
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },

            data: convertData(item[1])
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 4
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [5, 0],
                    formatter: '{b}'
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'circle',
            symbolSize: function(val) {
                return 4 + val[2] / 100000;
            },
            itemStyle: {
                normal: {
                    show: false,
                    color: '#f00'
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[0].name,
                    value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                };
            }),
        },
        //被攻击点
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 4
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    //			                offset:[5, 0],

                    color: '#00ffff',
                    formatter: '{b}',
                    textStyle: {
                        color: "#00ffff"
                    }
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'pin',
            symbolSize: 30,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#9966cc'
                }
            },
            data: [{
                name: item[0],
                value: geoCoordMap[item[0]].concat([100]),
            }],
        }
    );
});

option = {
    backgroundColor: '#404a59',

    visualMap: {
        min: 0,
        max: 16000,
        calculable: true,
        color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        layoutCenter: ['50%', '53%'],
        layoutSize: "108%",
        itemStyle: {
            normal: {
                color: 'rgba(51, 69, 89, .5)',
                borderColor: 'rgba(100,149,237,1)'
            },
            emphasis: {
                color: 'rgba(37, 43, 61, .5)'
            }
        }
    },

    series: series
};