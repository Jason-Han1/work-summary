var data = [
    ['北京', 29606670, 865704],
    ['成都', 19974678, 337098],
    ['上海', 15337713, 311951],
    ['天津', 7690265, 249261],
    ['合肥', 7463377, 246580],
    ['保定', 4944984, 213972],
    ['郑州', 9063978, 212006],
    ['杭州', 9939205, 204254],
    ['广州', 11132403, 196400],
    ['石家庄', 4929591, 194584],
    ['重庆', 9712405, 193426],
    ['济南', 6426206, 189144],
    ['武汉', 10101802, 188482],
    ['西安', 9263277, 182013],
    ['温州', 6693456, 179247],
    ['苏州', 7460170, 175790],
    ['邯郸', 2519518, 173902],
    ['宁波', 5940733, 161661],
    ['徐州', 3331736, 160347],
    ['哈尔滨', 5395047, 156469],
    ['深圳', 9003278, 156152],
    ['临沂', 3505675, 152360],
    ['信阳', 3078942, 144732],
    ['唐山', 2894794, 137722],
    ['东莞', 6612096, 137445],
    ['安阳', 2306611, 133127],
    ['长沙', 6729346, 130504],
    ['青岛', 4772955, 128872],
    ['长春', 4632757, 127656],
    ['菏泽', 2026741, 126185],
    ['南京', 5856068, 118450],
    ['沧州', 2297719, 118018],
    ['沈阳', 4104078, 115890],
    ['泉州', 4256510, 108066],
    ['济宁', 2227574, 106151],
    ['商丘', 3083536, 103579],
    ['新乡', 2342006, 102970],
    ['邢台', 1713595, 101552],
    ['聊城', 1434898, 95364],
    ['无锡', 4341217, 95132],
    ['金华', 3156206, 91038],
    ['台州', 2959053, 90915],
    ['太原', 3961727, 90643],
    ['许昌', 1857545, 90083],
    ['常州', 2625182, 89242],
    ['廊坊', 1955159, 89201],
    ['昆明', 6148486, 87639],
    ['福州', 4110758, 86182],
    ['潍坊', 2597040, 85913],
    ['南阳', 2364031, 83789],
    ['德州', 1355917, 81213],
    ['连云港', 2292850, 78165],
    ['嘉兴', 2530099, 72180],
    ['阜阳', 1290411, 71179],
    ['衡水', 1182326, 68163],
    ['南通', 2667003, 67721],
    ['周口', 1478335, 67582],
    ['南昌', 2642764, 67409],
    ['大连', 3112683, 67242],
    ['贵阳', 3494768, 65588],
    ['绍兴', 2374332, 65449],
    ['咸阳', 2028933, 63593],
    ['枣庄', 1230770, 62358],
    ['上饶', 1569179, 62348],
    ['运城', 1921710, 61888],
    ['洛阳', 1798635, 61614],
    ['平顶山', 1241220, 60924],
    ['佛山', 3082712, 60881],
    ['厦门', 2695812, 60134],
    ['盐城', 1590417, 58848],
    ['扬州', 1964381, 58115],
    ['赣州', 1738487, 58024],
    ['开封', 1443322, 57176],
    ['濮阳', 999452, 57086],
    ['吉林', 1608818, 56996],
    ['驻马店', 1233190, 55602],
    ['惠州', 2214172, 54956],
    ['张家口', 1672398, 54721],
    ['焦作', 1320424, 54694],
    ['南宁', 2722269, 54605],
    ['兰州', 3099039, 54058],
    ['烟台', 1947813, 50798],
    ['宜春', 1476480, 50730],
    ['泰安', 1259101, 50534],
    ['宿迁', 1173667, 49841],
    ['呼和浩特', 2325539, 48906],
    ['淮安', 1236965, 48134],
    ['乌鲁木齐', 2295628, 47773],
    ['滨州', 1029521, 47102],
    ['海口', 2152477, 44219],
    ['承德', 821913, 44184],
    ['通辽', 874956, 41978],
    ['渭南', 1013918, 41513],
    ['中山', 1657189, 41418],
    ['临汾', 1112806, 41228],
    ['九江', 1013617, 40232],
    ['晋中', 1433269, 39885],
    ['秦皇岛', 880714, 39876],
    ['芜湖', 1233834, 39254],
    ['大庆', 939411, 39084],
    ['湖州', 1424138, 39031],
    ['衡阳', 1427214, 38849],
    ['赤峰', 977885, 38233],
    ['西宁', 1322751, 37902],
    ['淄博', 1259799, 37796],
    ['绥化', 807750, 37480],
    ['齐齐哈尔', 904113, 37265],
    ['银川', 1430873, 37227],
    ['吕梁', 887242, 36422],
    ['榆林', 1069251, 36028],
    ['绵阳', 1382909, 35620],
    ['泰州', 1548913, 35261],
    ['安庆', 878816, 34386],
    ['南充', 1443739, 34351],
    ['蚌埠', 691772, 33866],
    ['鞍山', 1112285, 33725],
    ['东营', 924879, 33594],
    ['漳州', 1165568, 32981],
    ['牡丹江', 672556, 31964],
    ['漯河', 773144, 31905],
    ['四平', 683640, 31364],
    ['葫芦岛', 647507, 31341],
    ['丽水', 870484, 30869],
    ['锦州', 729669, 30194],
    ['莆田', 1198804, 29588],
    ['日照', 808452, 29497],
    ['威海', 1076284, 29384],
    ['岳阳', 1219058, 29302],
    ['汕头', 1142089, 29054],
    ['襄阳', 1159949, 29036],
    ['滁州', 683187, 28761],
    ['泸州', 898507, 28708],
    ['玉林', 1068156, 28589],
    ['孝感', 924270, 28330],
    ['达州', 837899, 28324],
    ['长治', 803661, 27993],
    ['吉安', 623696, 27294],
    ['六安', 588338, 27011],
    ['湛江', 1223479, 26843],
    ['鄂尔多斯', 1082869, 26817],
    ['忻州', 719391, 26805],
    ['桂林', 1222259, 26230],
    ['曲靖', 1600973, 25288],
    ['包头', 804840, 24888],
    ['宜宾', 878733, 24782],
    ['衢州', 744066, 24670],
    ['松原', 516890, 24192],
    ['镇江', 970169, 24184],
    ['郴州', 731543, 24030],
    ['铁岭', 562730, 24023],
    ['淮南', 567042, 23910],
    ['鹤壁', 471077, 23723],
    ['朝阳', 499188, 23258],
    ['延边', 621231, 23014],
    ['抚州', 549730, 22942],
    ['揭阳', 865794, 22815],
    ['宝鸡', 711445, 22766],
    ['呼伦贝尔', 609862, 22722],
    ['德阳', 840498, 22523],
    ['佳木斯', 562936, 22263],
    ['大同', 686173, 22131],
    ['遵义', 1019666, 21796],
    ['怀化', 705798, 21791],
    ['荆州', 845447, 21630],
    ['江门', 1102556, 21617],
    ['宁德', 668426, 20583],
    ['淮北', 399913, 20242],
    ['黄冈', 666740, 20070],
    ['营口', 633490, 19981],
    ['宣城', 513340, 19925],
    ['永州', 595692, 19539],
    ['邵阳', 617547, 19531],
    ['宿州', 389865, 19359],
    ['株洲', 864782, 19333],
    ['晋城', 696715, 19304],
    ['伊犁', 562803, 19143],
    ['南平', 559088, 19139],
    ['延安', 439796, 18794],
    ['凉山', 565468, 18769],
    ['白城', 380776, 18564],
    ['娄底', 661871, 18275],
    ['通化', 476026, 17951],
    ['三明', 541281, 17930],
    ['景德镇', 450596, 17812],
    ['辽阳', 488702, 17798],
    ['黔东南', 713507, 17699],
    ['乐山', 1094856, 17515],
    ['三门峡', 478884, 17448],
    ['珠海', 824605, 16960],
    ['龙岩', 548303, 16894],
    ['庆阳', 455949, 16780],
    ['黑河', 463683, 16660],
    ['茂名', 660191, 16646],
    ['自贡', 565454, 16573],
    ['抚顺', 486391, 16541],
    ['兴安盟', 351889, 16532],
    ['眉山', 609334, 16279],
    ['黄石', 487878, 15881],
    ['十堰', 513520, 15804],
    ['内江', 555592, 15784],
    ['资阳', 526695, 15735],
    ['柳州', 689501, 15718],
    ['汉中', 470691, 15535],
    ['宜昌', 748383, 15500],
    ['阳泉', 421809, 15346],
    ['毕节', 596379, 15284],
    ['益阳', 535712, 15197],
    ['马鞍山', 484403, 15139],
    ['韶关', 475664, 14976],
    ['清远', 587507, 14908],
    ['张掖', 449491, 14840],
    ['亳州', 296140, 14677],
    ['阜新', 340298, 14612],
    ['肇庆', 565670, 14484],
    ['双鸭山', 316502, 14464],
    ['常德', 584070, 14367],
    ['白银', 529135, 13835],
    ['丹东', 483370, 13830],
    ['湘西', 445178, 13740],
    ['商洛', 440645, 13680],
    ['萍乡', 374092, 13655],
    ['平凉', 421122, 13620],
    ['汕尾', 479582, 13472],
    ['北海', 523613, 13389],
    ['盘锦', 382014, 13089],
    ['黔南', 815089, 13069],
    ['恩施', 421570, 13049],
    ['伊春', 317815, 12973],
    ['鸡西', 329229, 12848],
    ['河源', 349115, 12836],
    ['舟山', 497858, 12787],
    ['铜仁', 522969, 12653],
    ['安康', 327729, 12500],
    ['贵港', 480482, 12494],
    ['巴彦淖尔', 362104, 12017],
    ['乌兰察布', 329638, 11991],
    ['遂宁', 477775, 11923],
    ['武威', 464949, 11905],
    ['广元', 432628, 11715],
    ['潮州', 417449, 11669],
    ['黔西南', 423078, 11600],
    ['荆门', 446891, 11581],
    ['本溪', 361698, 11554],
    ['莱芜', 367818, 11546],
    ['梅州', 389999, 11396],
    ['鹤岗', 235901, 11306],
    ['阿坝', 459895, 11268],
    ['拉萨', 391138, 11196],
    ['湘潭', 470600, 11099],
    ['白山', 287435, 10971],
    ['池州', 265837, 10456],
    ['梧州', 409002, 10041],
    ['六盘水', 383208, 9945],
    ['阳江', 411851, 9917],
    ['广安', 397395, 9808],
    ['鹰潭', 211874, 9744],
    ['新余', 261508, 9544],
    ['随州', 330208, 9421],
    ['巴中', 335496, 9256],
    ['钦州', 396462, 9097],
    ['百色', 356015, 8958],
    ['天水', 247623, 8957],
    ['黄山', 263087, 8934],
    ['巴音郭楞', 290662, 8888],
    ['吴忠', 255943, 8765],
    ['咸宁', 263896, 8674],
    ['河池', 335870, 8645],
    ['锡林郭勒盟', 252764, 8564],
    ['张家界', 285836, 8450],
    ['辽源', 218556, 8326],
    ['济源', 222617, 8284],
    ['安顺', 325691, 8186],
    ['七台河', 173618, 8158],
    ['定西', 233576, 7872],
    ['红河', 383480, 7834],
    ['玉溪', 434672, 7724],
    ['昌吉', 266133, 7636],
    ['鄂州', 259327, 7589],
    ['大理', 415883, 7500],
    ['攀枝花', 294444, 7379],
    ['来宾', 305762, 7258],
    ['三亚', 278406, 6917],
    ['贺州', 211295, 6897],
    ['阿克苏', 241924, 6635],
    ['石河子', 263066, 6518],
    ['乌海', 181415, 6401],
    ['塔城', 141885, 6379],
    ['雅安', 232592, 6253],
    ['酒泉', 248277, 6237],
    ['昭通', 271709, 6120],
    ['西双版纳', 230051, 5899],
    ['甘孜', 187551, 5845],
    ['朔州', 187374, 5804],
    ['云浮', 233247, 5646],
    ['石嘴山', 160954, 5446],
    ['阿勒泰', 119894, 5446],
    ['固原', 115730, 5330],
    ['德宏', 187283, 5308],
    ['崇左', 252581, 5284],
    ['铜川', 153305, 5164],
    ['中卫', 126650, 5034],
    ['喀什', 199888, 4895],
    ['铜陵', 148938, 4854],
    ['保山', 184770, 4790],
    ['临夏', 149032, 4789],
    ['文山', 218143, 4601],
    ['仙桃', 161571, 4447],
    ['临沧', 164406, 4430],
    ['普洱', 179639, 4136],
    ['海西', 120350, 3933],
    ['天门', 138415, 3830],
    ['潜江', 146951, 3797],
    ['博尔塔拉', 80702, 3642],
    ['金昌', 135206, 3541],
    ['克拉玛依', 139711, 3498],
    ['大兴安岭', 85744, 3479],
    ['哈密', 133494, 3296],
    ['陇南', 138920, 3160],
    ['丽江', 190500, 3151],
    ['玉树', 34551, 3124],
    ['防城港', 119752, 2900],
    ['楚雄', 169019, 2827],
    ['吐鲁番', 103614, 2815],
    ['海东', 72204, 2596],
    ['阿拉善盟', 80279, 2443],
    ['甘南', 81210, 2392],
    ['海南', 49902, 2217],
    ['香港', 267266, 2169],
    ['日喀则', 35389, 2128],
    ['嘉峪关', 75620, 2102],
    ['黄南', 28136, 2002],
    ['儋州', 78438, 1913],
    ['万宁', 60484, 1800],
    ['海北', 41435, 1650],
    ['山南', 29861, 1630],
    ['林芝', 31411, 1477],
    ['文昌', 49782, 1378],
    ['琼海', 51914, 1363],
    ['怒江', 41897, 1323],
    ['那曲', 18739, 1309],
    ['陵水', 46015, 1222],
    ['迪庆', 90362, 1202],
    ['乐东', 28038, 1109],
    ['和田', 42631, 1066],
    ['昌都', 24451, 924],
    ['果洛', 23445, 879],
    ['克孜勒苏柯尔克孜', 25540, 751],
    ['澄迈县', 22594, 740],
    ['东方', 27996, 663],
    ['澳门', 74619, 659],
    ['临高县', 16297, 574],
    ['保亭', 11443, 465],
    ['定安县', 11819, 422],
    ['昌江', 16500, 386],
    ['白沙', 10080, 294],
    ['神农架', 12388, 282],
    ['五指山', 9834, 226],
    ['屯昌县', 8824, 207],
    ['琼中', 4381, 205],
    ['阿里', 5296, 167],
    ['阿拉尔', 4640, 141],
    ['五家渠', 673, 18],
    ['图木舒克', 153, 8]
];

var min = Infinity;
var max = -Infinity;
data.forEach(function (item) {
    max = Math.max(item[2], max);
    min = Math.min(item[2], min);
});

var geoJsonUrl = 'https://rawgit.com/ecomfe/echarts/master/map/json/china-cities.json';
$.getJSON(geoJsonUrl, function (json) {
    echarts.registerMap('china-cities', json);
    
    myChart.setOption({
        backgroundColor: '#404a59',
        geo: {
            map: 'china-cities',
            silent: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111',
                    borderWidth: 0.1
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: [{
            type: 'scatter',
            coordinateSystem: 'geo',
            data: []
        }]
    });
    
    
    var geo = myChart.getModel().getComponent('geo').coordinateSystem;
        
    var points = [];
    data.forEach(function (item) {
        var randomCount = Math.round(item[2] / (max / 1000));
        console.log(randomCount);
        var name = item[0].replace('柯尔克孜', '');
        var region = geo.getRegion(name);
        if (!region) {
            return;
        }
        var rect = region.getBoundingRect();
        
        console.log(randomCount);
        for (var i = 0; i < randomCount; i++) {
            var coord = [Infinity, Infinity];
            while (!region.contain(coord)) {
                coord[0] = rect.x + Math.random() * rect.width;
                coord[1] = rect.y + Math.random() * rect.height;
            }
            points.push(coord);
        }
    });
    
    myChart.setOption({
        series: [{
            data: points,
            blendMode: 'lighter',
            symbolSize: 2,
            itemStyle: {
                normal: {
                    shadowBlur: 2,
                    shadowColor: 'rgba(37, 140, 249, 0.2)',
                    color: 'rgba(37, 140, 249, 0.2)'
                }
            },
        }]
    })
    
});