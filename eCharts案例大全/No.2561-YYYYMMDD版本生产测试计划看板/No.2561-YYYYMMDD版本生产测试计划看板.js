var geoCoordMap = {
'上海': [121.4648, 31.2891],
'新疆': [86.9236, 41.5883],
'甘肃': [103.9901, 36.3043],
'江苏': [120.2062, 32.9208],
'广西': [108.479, 24.1152],
'江西': [116.0046, 28.6633],
'安徽': [117.29, 32.0581],
'内蒙古': [111.4124, 41.4901],
'黑龙江': [127.9688, 46.868],
'天津': [117.4219, 39.4189],
'山西': [112.3352, 37.9413],
'广东': [114.5107, 23.8196],
'四川': [103.9526, 30.7617],
'西藏': [91.1865, 30.1465],
'云南': [101.9199, 25.0663],
'浙江': [119.5313, 29.8773],
'湖北': [113.0896, 31.3628],
'辽宁': [123.1238, 42.1216],
'山东': [117.1582, 36.8701],
'河北': [115.4995, 38.6006],
'福建': [118.0543, 26.5222],
'青海': [97.4038, 35.8207],
'陕西': [109.1162, 34.2004],
'贵州': [106.6992, 26.7682],
'河南': [113.4668, 34.6234],
'重庆': [107.7539, 30.1904],
'宁夏': [106.3586, 38.1775],
'吉林': [125.8154, 44.2584],
'湖南': [111.8823, 28.2568],
'海南': [109.8500, 19.7028],
'北京': [116.4551, 40.4539],

};
//测试任务数量
var mapTackData =[ 
  [
        {name: "北京", value: Math.ceil(Math.random()*500)},{name: "上海", value: Math.ceil(Math.random()*500)},
         {name: "新疆", value: Math.ceil(Math.random()*500)}, {name: "西藏",value: Math.ceil(Math.random()*500)}, 
         {name: "宁夏", value: Math.ceil(Math.random()*500)}, {name: "甘肃",value: Math.ceil(Math.random()*500)}, 
         {name: "云南", value: Math.ceil(Math.random()*500)}, {name: "陕西",value: Math.ceil(Math.random()*500)}, 
         {name: "青海", value: Math.ceil(Math.random()*500)}, {name: "贵州",value: Math.ceil(Math.random()*500)}, 
         {name: "福建", value: Math.ceil(Math.random()*500)}, {name: "江西",value: Math.ceil(Math.random()*500)}, 
         {name: "四川", value: Math.ceil(Math.random()*500)}, {name: "江苏",value: Math.ceil(Math.random()*500)}, 
         {name: "安徽", value: Math.ceil(Math.random()*500)}, {name: "浙江",value: Math.ceil(Math.random()*500)}, 
         {name: "海南", value: Math.ceil(Math.random()*500)}, 
         {name: "天津", value: Math.ceil(Math.random()*500)}, {name: "重庆", value: Math.ceil(Math.random()*500)}, 
         {name: "广东", value: Math.ceil(Math.random()*500)}, {name: "广西", value: Math.ceil(Math.random()*500) }, 
         {name: "湖南", value: Math.ceil(Math.random()*500)}, {name: "湖北", value: Math.ceil(Math.random()*500)},
         {name: "河南", value: Math.ceil(Math.random()*500)}, {name: "河北", value: Math.ceil(Math.random()*500)},
         {name: "山东", value: Math.ceil(Math.random()*500)}, {name: "山西",value: Math.ceil(Math.random()*500)}, 
         {name: "黑龙江",value: Math.ceil(Math.random()*500)}, {name: "吉林", value: Math.ceil(Math.random()*500)}, 
         {name: "辽宁", value: Math.ceil(Math.random()*500)}, {name: "内蒙古", value: Math.ceil(Math.random()*500) }],
  [
        {name: "北京", value: Math.ceil(Math.random()*500)},{name: "上海", value: Math.ceil(Math.random()*500)},
         {name: "新疆", value: Math.ceil(Math.random()*500)}, {name: "西藏",value: Math.ceil(Math.random()*500) }, 
         {name: "宁夏", value: Math.ceil(Math.random()*500)}, {name: "甘肃",value: Math.ceil(Math.random()*500)}, 
         {name: "云南", value: Math.ceil(Math.random()*500)}, {name: "陕西",value: Math.ceil(Math.random()*500)}, 
         {name: "青海", value: Math.ceil(Math.random()*500)}, {name: "贵州",value: Math.ceil(Math.random()*500)}, 
         {name: "福建", value: Math.ceil(Math.random()*500)}, {name: "江西",value: Math.ceil(Math.random()*500)}, 
         {name: "四川", value: Math.ceil(Math.random()*500)}, {name: "江苏",value: Math.ceil(Math.random()*500)}, 
         {name: "安徽", value: Math.ceil(Math.random()*500)}, {name: "浙江",value: Math.ceil(Math.random()*500)}, 
         {name: "海南", value: Math.ceil(Math.random()*500)}, 
         {name: "天津", value: Math.ceil(Math.random()*500)}, {name: "重庆", value: Math.ceil(Math.random()*500)}, 
         {name: "广东", value: Math.ceil(Math.random()*500)}, {name: "广西", value: Math.ceil(Math.random()*500) }, 
         {name: "湖南", value: Math.ceil(Math.random()*500)}, {name: "湖北", value: Math.ceil(Math.random()*500)},
         {name: "河南", value: Math.ceil(Math.random()*500)}, {name: "河北", value: Math.ceil(Math.random()*500)},
         {name: "山东", value: Math.ceil(Math.random()*500)}, {name: "山西",value: Math.ceil(Math.random()*500)}, 
         {name: "黑龙江",value: Math.ceil(Math.random()*500)}, {name: "吉林", value: Math.ceil(Math.random()*500)}, 
         {name: "辽宁", value: Math.ceil(Math.random()*500)}, {name: "内蒙古", value: Math.ceil(Math.random()*500) }],
  [
        {name: "北京", value: Math.ceil(Math.random()*500)},{name: "上海", value: Math.ceil(Math.random()*500)},
         {name: "新疆", value: Math.ceil(Math.random()*500)}, {name: "西藏",value: Math.ceil(Math.random()*500) }, 
         {name: "宁夏", value: Math.ceil(Math.random()*500)}, {name: "甘肃",value: Math.ceil(Math.random()*500)}, 
         {name: "云南", value: Math.ceil(Math.random()*500)}, {name: "陕西",value: Math.ceil(Math.random()*500)}, 
         {name: "青海", value: Math.ceil(Math.random()*500)}, {name: "贵州",value: Math.ceil(Math.random()*500)}, 
         {name: "福建", value: Math.ceil(Math.random()*500)}, {name: "江西",value: Math.ceil(Math.random()*500)}, 
         {name: "四川", value: Math.ceil(Math.random()*500)}, {name: "江苏",value: Math.ceil(Math.random()*500)}, 
         {name: "安徽", value: Math.ceil(Math.random()*500)}, {name: "浙江",value: Math.ceil(Math.random()*500)}, 
         {name: "海南", value: Math.ceil(Math.random()*500)}, 
         {name: "天津", value: Math.ceil(Math.random()*500)}, {name: "重庆", value: Math.ceil(Math.random()*500)}, 
         {name: "广东", value: Math.ceil(Math.random()*500)}, {name: "广西", value: Math.ceil(Math.random()*500) }, 
         {name: "湖南", value: Math.ceil(Math.random()*500)}, {name: "湖北", value: Math.ceil(Math.random()*500)},
         {name: "河南", value: Math.ceil(Math.random()*500)}, {name: "河北", value: Math.ceil(Math.random()*500)},
         {name: "山东", value: Math.ceil(Math.random()*500)}, {name: "山西",value: Math.ceil(Math.random()*500)}, 
         {name: "黑龙江",value: Math.ceil(Math.random()*500)}, {name: "吉林", value: Math.ceil(Math.random()*500)}, 
         {name: "辽宁", value: Math.ceil(Math.random()*500)}, {name: "内蒙古", value: Math.ceil(Math.random()*500) }],
  [
        {name: "北京", value: Math.ceil(Math.random()*500)},{name: "上海", value: Math.ceil(Math.random()*500)},
         {name: "新疆", value: Math.ceil(Math.random()*500)}, {name: "西藏",value: Math.ceil(Math.random()*500) }, 
         {name: "宁夏", value: Math.ceil(Math.random()*500)}, {name: "甘肃",value: Math.ceil(Math.random()*500)}, 
         {name: "云南", value: Math.ceil(Math.random()*500)}, {name: "陕西",value: Math.ceil(Math.random()*500)}, 
         {name: "青海", value: Math.ceil(Math.random()*500)}, {name: "贵州",value: Math.ceil(Math.random()*500)}, 
         {name: "福建", value: Math.ceil(Math.random()*500)}, {name: "江西",value: Math.ceil(Math.random()*500)}, 
         {name: "四川", value: Math.ceil(Math.random()*500)}, {name: "江苏",value: Math.ceil(Math.random()*500)}, 
         {name: "安徽", value: Math.ceil(Math.random()*500)}, {name: "浙江",value: Math.ceil(Math.random()*500)}, 
         {name: "海南", value: Math.ceil(Math.random()*500)}, 
         {name: "天津", value: Math.ceil(Math.random()*500)}, {name: "重庆", value: Math.ceil(Math.random()*500)}, 
         {name: "广东", value: Math.ceil(Math.random()*500)}, {name: "广西", value: Math.ceil(Math.random()*500) }, 
         {name: "湖南", value: Math.ceil(Math.random()*500)}, {name: "湖北", value: Math.ceil(Math.random()*500)},
         {name: "河南", value: Math.ceil(Math.random()*500)}, {name: "河北", value: Math.ceil(Math.random()*500)},
         {name: "山东", value: Math.ceil(Math.random()*500)}, {name: "山西",value: Math.ceil(Math.random()*500)}, 
         {name: "黑龙江",value: Math.ceil(Math.random()*500)}, {name: "吉林", value: Math.ceil(Math.random()*500)}, 
         {name: "辽宁", value: Math.ceil(Math.random()*500)}, {name: "内蒙古", value: Math.ceil(Math.random()*500) }],
  [
        {name: "北京", value: Math.ceil(Math.random()*500)},{name: "上海", value: Math.ceil(Math.random()*500)},
         {name: "新疆", value: Math.ceil(Math.random()*500)}, {name: "西藏",value: Math.ceil(Math.random()*500) }, 
         {name: "宁夏", value: Math.ceil(Math.random()*500)}, {name: "甘肃",value: Math.ceil(Math.random()*500)}, 
         {name: "云南", value: Math.ceil(Math.random()*500)}, {name: "陕西",value: Math.ceil(Math.random()*500)}, 
         {name: "青海", value: Math.ceil(Math.random()*500)}, {name: "贵州",value: Math.ceil(Math.random()*500)}, 
         {name: "福建", value: Math.ceil(Math.random()*500)}, {name: "江西",value: Math.ceil(Math.random()*500)}, 
         {name: "四川", value: Math.ceil(Math.random()*500)}, {name: "江苏",value: Math.ceil(Math.random()*500)}, 
         {name: "安徽", value: Math.ceil(Math.random()*500)}, {name: "浙江",value: Math.ceil(Math.random()*500)}, 
         {name: "海南", value: Math.ceil(Math.random()*500)}, 
         {name: "天津", value: Math.ceil(Math.random()*500)}, {name: "重庆", value: Math.ceil(Math.random()*500)}, 
         {name: "广东", value: Math.ceil(Math.random()*500)}, {name: "广西", value: Math.ceil(Math.random()*500) }, 
         {name: "湖南", value: Math.ceil(Math.random()*500)}, {name: "湖北", value: Math.ceil(Math.random()*500)},
         {name: "河南", value: Math.ceil(Math.random()*500)}, {name: "河北", value: Math.ceil(Math.random()*500)},
         {name: "山东", value: Math.ceil(Math.random()*500)}, {name: "山西",value: Math.ceil(Math.random()*500)}, 
         {name: "黑龙江",value: Math.ceil(Math.random()*500)}, {name: "吉林", value: Math.ceil(Math.random()*500)}, 
         {name: "辽宁", value: Math.ceil(Math.random()*500)}, {name: "内蒙古", value: Math.ceil(Math.random()*500) }],
  [
        {name: "北京", value: Math.ceil(Math.random()*500)},{name: "上海", value: Math.ceil(Math.random()*500)},
         {name: "新疆", value: Math.ceil(Math.random()*500)}, {name: "西藏",value: Math.ceil(Math.random()*500) }, 
         {name: "宁夏", value: Math.ceil(Math.random()*500)}, {name: "甘肃",value: Math.ceil(Math.random()*500)}, 
         {name: "云南", value: Math.ceil(Math.random()*500)}, {name: "陕西",value: Math.ceil(Math.random()*500)}, 
         {name: "青海", value: Math.ceil(Math.random()*500)}, {name: "贵州",value: Math.ceil(Math.random()*500)}, 
         {name: "福建", value: Math.ceil(Math.random()*500)}, {name: "江西",value: Math.ceil(Math.random()*500)}, 
         {name: "四川", value: Math.ceil(Math.random()*500)}, {name: "江苏",value: Math.ceil(Math.random()*500)}, 
         {name: "安徽", value: Math.ceil(Math.random()*500)}, {name: "浙江",value: Math.ceil(Math.random()*500)}, 
         {name: "海南", value: Math.ceil(Math.random()*500)}, 
         {name: "天津", value: Math.ceil(Math.random()*500)}, {name: "重庆", value: Math.ceil(Math.random()*500)}, 
         {name: "广东", value: Math.ceil(Math.random()*500)}, {name: "广西", value: Math.ceil(Math.random()*500) }, 
         {name: "湖南", value: Math.ceil(Math.random()*500)}, {name: "湖北", value: Math.ceil(Math.random()*500)},
         {name: "河南", value: Math.ceil(Math.random()*500)}, {name: "河北", value: Math.ceil(Math.random()*500)},
         {name: "山东", value: Math.ceil(Math.random()*500)}, {name: "山西",value: Math.ceil(Math.random()*500)}, 
         {name: "黑龙江",value: Math.ceil(Math.random()*500)}, {name: "吉林", value: Math.ceil(Math.random()*500)}, 
         {name: "辽宁", value: Math.ceil(Math.random()*500)}, {name: "内蒙古", value: Math.ceil(Math.random()*500) }],
]
//测试任务进度
var mapRateData =[ 
  [
        {name: "北京", value: Math.ceil(Math.random()*100)},{name: "上海", value: Math.ceil(Math.random()*100)},
         {name: "新疆", value: Math.ceil(Math.random()*100)}, {name: "西藏",value: Math.ceil(Math.random()*100) }, 
         {name: "宁夏", value: Math.ceil(Math.random()*100)}, {name: "甘肃",value: Math.ceil(Math.random()*100)}, 
         {name: "云南", value: Math.ceil(Math.random()*100)}, {name: "陕西",value: Math.ceil(Math.random()*100)}, 
         {name: "青海", value: Math.ceil(Math.random()*100)}, {name: "贵州",value: Math.ceil(Math.random()*100)}, 
         {name: "福建", value: Math.ceil(Math.random()*100)}, {name: "江西",value: Math.ceil(Math.random()*100)}, 
         {name: "四川", value: Math.ceil(Math.random()*100)}, {name: "江苏",value: Math.ceil(Math.random()*100)}, 
         {name: "安徽", value: Math.ceil(Math.random()*100)}, {name: "浙江",value: Math.ceil(Math.random()*100)}, 
         {name: "海南", value: Math.ceil(Math.random()*100)}, 
         {name: "天津", value: Math.ceil(Math.random()*100)}, {name: "重庆", value: Math.ceil(Math.random()*100)}, 
         {name: "广东", value: Math.ceil(Math.random()*100)}, {name: "广西", value: Math.ceil(Math.random()*100) }, 
         {name: "湖南", value: Math.ceil(Math.random()*100)}, {name: "湖北", value: Math.ceil(Math.random()*100)},
         {name: "河南", value: Math.ceil(Math.random()*100)}, {name: "河北", value: Math.ceil(Math.random()*100)},
         {name: "山东", value: Math.ceil(Math.random()*100)}, {name: "山西",value: Math.ceil(Math.random()*100)}, 
         {name: "黑龙江",value: Math.ceil(Math.random()*100)}, {name: "吉林", value: Math.ceil(Math.random()*100)}, 
         {name: "辽宁", value: Math.ceil(Math.random()*100)}, {name: "内蒙古", value: Math.ceil(Math.random()*100) }],
  [
        {name: "北京", value: Math.ceil(Math.random()*100)},{name: "上海", value: Math.ceil(Math.random()*100)},
         {name: "新疆", value: Math.ceil(Math.random()*100)}, {name: "西藏",value: Math.ceil(Math.random()*100) }, 
         {name: "宁夏", value: Math.ceil(Math.random()*100)}, {name: "甘肃",value: Math.ceil(Math.random()*100)}, 
         {name: "云南", value: Math.ceil(Math.random()*100)}, {name: "陕西",value: Math.ceil(Math.random()*100)}, 
         {name: "青海", value: Math.ceil(Math.random()*100)}, {name: "贵州",value: Math.ceil(Math.random()*100)}, 
         {name: "福建", value: Math.ceil(Math.random()*100)}, {name: "江西",value: Math.ceil(Math.random()*100)}, 
         {name: "四川", value: Math.ceil(Math.random()*100)}, {name: "江苏",value: Math.ceil(Math.random()*100)}, 
         {name: "安徽", value: Math.ceil(Math.random()*100)}, {name: "浙江",value: Math.ceil(Math.random()*100)}, 
         {name: "海南", value: Math.ceil(Math.random()*100)}, 
         {name: "天津", value: Math.ceil(Math.random()*100)}, {name: "重庆", value: Math.ceil(Math.random()*100)}, 
         {name: "广东", value: Math.ceil(Math.random()*100)}, {name: "广西", value: Math.ceil(Math.random()*100) }, 
         {name: "湖南", value: Math.ceil(Math.random()*100)}, {name: "湖北", value: Math.ceil(Math.random()*100)},
         {name: "河南", value: Math.ceil(Math.random()*100)}, {name: "河北", value: Math.ceil(Math.random()*100)},
         {name: "山东", value: Math.ceil(Math.random()*100)}, {name: "山西",value: Math.ceil(Math.random()*100)}, 
         {name: "黑龙江",value: Math.ceil(Math.random()*100)}, {name: "吉林", value: Math.ceil(Math.random()*100)}, 
         {name: "辽宁", value: Math.ceil(Math.random()*100)}, {name: "内蒙古", value: Math.ceil(Math.random()*100) }],
  [
        {name: "北京", value: Math.ceil(Math.random()*100)},{name: "上海", value: Math.ceil(Math.random()*100)},
         {name: "新疆", value: Math.ceil(Math.random()*100)}, {name: "西藏",value: Math.ceil(Math.random()*100) }, 
         {name: "宁夏", value: Math.ceil(Math.random()*100)}, {name: "甘肃",value: Math.ceil(Math.random()*100)}, 
         {name: "云南", value: Math.ceil(Math.random()*100)}, {name: "陕西",value: Math.ceil(Math.random()*100)}, 
         {name: "青海", value: Math.ceil(Math.random()*100)}, {name: "贵州",value: Math.ceil(Math.random()*100)}, 
         {name: "福建", value: Math.ceil(Math.random()*100)}, {name: "江西",value: Math.ceil(Math.random()*100)}, 
         {name: "四川", value: Math.ceil(Math.random()*100)}, {name: "江苏",value: Math.ceil(Math.random()*100)}, 
         {name: "安徽", value: Math.ceil(Math.random()*100)}, {name: "浙江",value: Math.ceil(Math.random()*100)}, 
         {name: "海南", value: Math.ceil(Math.random()*100)}, 
         {name: "天津", value: Math.ceil(Math.random()*100)}, {name: "重庆", value: Math.ceil(Math.random()*100)}, 
         {name: "广东", value: Math.ceil(Math.random()*100)}, {name: "广西", value: Math.ceil(Math.random()*100) }, 
         {name: "湖南", value: Math.ceil(Math.random()*100)}, {name: "湖北", value: Math.ceil(Math.random()*100)},
         {name: "河南", value: Math.ceil(Math.random()*100)}, {name: "河北", value: Math.ceil(Math.random()*100)},
         {name: "山东", value: Math.ceil(Math.random()*100)}, {name: "山西",value: Math.ceil(Math.random()*100)}, 
         {name: "黑龙江",value: Math.ceil(Math.random()*100)}, {name: "吉林", value: Math.ceil(Math.random()*100)}, 
         {name: "辽宁", value: Math.ceil(Math.random()*100)}, {name: "内蒙古", value: Math.ceil(Math.random()*100) }],
  [
        {name: "北京", value: Math.ceil(Math.random()*100)},{name: "上海", value: Math.ceil(Math.random()*100)},
         {name: "新疆", value: Math.ceil(Math.random()*100)}, {name: "西藏",value: Math.ceil(Math.random()*100) }, 
         {name: "宁夏", value: Math.ceil(Math.random()*100)}, {name: "甘肃",value: Math.ceil(Math.random()*100)}, 
         {name: "云南", value: Math.ceil(Math.random()*100)}, {name: "陕西",value: Math.ceil(Math.random()*100)}, 
         {name: "青海", value: Math.ceil(Math.random()*100)}, {name: "贵州",value: Math.ceil(Math.random()*100)}, 
         {name: "福建", value: Math.ceil(Math.random()*100)}, {name: "江西",value: Math.ceil(Math.random()*100)}, 
         {name: "四川", value: Math.ceil(Math.random()*100)}, {name: "江苏",value: Math.ceil(Math.random()*100)}, 
         {name: "安徽", value: Math.ceil(Math.random()*100)}, {name: "浙江",value: Math.ceil(Math.random()*100)}, 
         {name: "海南", value: Math.ceil(Math.random()*100)}, 
         {name: "天津", value: Math.ceil(Math.random()*100)}, {name: "重庆", value: Math.ceil(Math.random()*100)}, 
         {name: "广东", value: Math.ceil(Math.random()*100)}, {name: "广西", value: Math.ceil(Math.random()*100) }, 
         {name: "湖南", value: Math.ceil(Math.random()*100)}, {name: "湖北", value: Math.ceil(Math.random()*100)},
         {name: "河南", value: Math.ceil(Math.random()*100)}, {name: "河北", value: Math.ceil(Math.random()*100)},
         {name: "山东", value: Math.ceil(Math.random()*100)}, {name: "山西",value: Math.ceil(Math.random()*100)}, 
         {name: "黑龙江",value: Math.ceil(Math.random()*100)}, {name: "吉林", value: Math.ceil(Math.random()*100)}, 
         {name: "辽宁", value: Math.ceil(Math.random()*100)}, {name: "内蒙古", value: Math.ceil(Math.random()*100) }],
  [
        {name: "北京", value: Math.ceil(Math.random()*100)},{name: "上海", value: Math.ceil(Math.random()*100)},
         {name: "新疆", value: Math.ceil(Math.random()*100)}, {name: "西藏",value: Math.ceil(Math.random()*100) }, 
         {name: "宁夏", value: Math.ceil(Math.random()*100)}, {name: "甘肃",value: Math.ceil(Math.random()*100)}, 
         {name: "云南", value: Math.ceil(Math.random()*100)}, {name: "陕西",value: Math.ceil(Math.random()*100)}, 
         {name: "青海", value: Math.ceil(Math.random()*100)}, {name: "贵州",value: Math.ceil(Math.random()*100)}, 
         {name: "福建", value: Math.ceil(Math.random()*100)}, {name: "江西",value: Math.ceil(Math.random()*100)}, 
         {name: "四川", value: Math.ceil(Math.random()*100)}, {name: "江苏",value: Math.ceil(Math.random()*100)}, 
         {name: "安徽", value: Math.ceil(Math.random()*100)}, {name: "浙江",value: Math.ceil(Math.random()*100)}, 
         {name: "海南", value: Math.ceil(Math.random()*100)}, 
         {name: "天津", value: Math.ceil(Math.random()*100)}, {name: "重庆", value: Math.ceil(Math.random()*100)}, 
         {name: "广东", value: Math.ceil(Math.random()*100)}, {name: "广西", value: Math.ceil(Math.random()*100) }, 
         {name: "湖南", value: Math.ceil(Math.random()*100)}, {name: "湖北", value: Math.ceil(Math.random()*100)},
         {name: "河南", value: Math.ceil(Math.random()*100)}, {name: "河北", value: Math.ceil(Math.random()*100)},
         {name: "山东", value: Math.ceil(Math.random()*100)}, {name: "山西",value: Math.ceil(Math.random()*100)}, 
         {name: "黑龙江",value: Math.ceil(Math.random()*100)}, {name: "吉林", value: Math.ceil(Math.random()*100)}, 
         {name: "辽宁", value: Math.ceil(Math.random()*100)}, {name: "内蒙古", value: Math.ceil(Math.random()*100) }],
  [
        {name: "北京", value: Math.ceil(Math.random()*100)},{name: "上海", value: Math.ceil(Math.random()*100)},
         {name: "新疆", value: Math.ceil(Math.random()*100)}, {name: "西藏",value: Math.ceil(Math.random()*100) }, 
         {name: "宁夏", value: Math.ceil(Math.random()*100)}, {name: "甘肃",value: Math.ceil(Math.random()*100)}, 
         {name: "云南", value: Math.ceil(Math.random()*100)}, {name: "陕西",value: Math.ceil(Math.random()*100)}, 
         {name: "青海", value: Math.ceil(Math.random()*100)}, {name: "贵州",value: Math.ceil(Math.random()*100)}, 
         {name: "福建", value: Math.ceil(Math.random()*100)}, {name: "江西",value: Math.ceil(Math.random()*100)}, 
         {name: "四川", value: Math.ceil(Math.random()*100)}, {name: "江苏",value: Math.ceil(Math.random()*100)}, 
         {name: "安徽", value: Math.ceil(Math.random()*100)}, {name: "浙江",value: Math.ceil(Math.random()*100)}, 
         {name: "海南", value: Math.ceil(Math.random()*100)}, 
         {name: "天津", value: Math.ceil(Math.random()*100)}, {name: "重庆", value: Math.ceil(Math.random()*100)}, 
         {name: "广东", value: Math.ceil(Math.random()*100)}, {name: "广西", value: Math.ceil(Math.random()*100) }, 
         {name: "湖南", value: Math.ceil(Math.random()*100)}, {name: "湖北", value: Math.ceil(Math.random()*100)},
         {name: "河南", value: Math.ceil(Math.random()*100)}, {name: "河北", value: Math.ceil(Math.random()*100)},
         {name: "山东", value: Math.ceil(Math.random()*100)}, {name: "山西",value: Math.ceil(Math.random()*100)}, 
         {name: "黑龙江",value: Math.ceil(Math.random()*100)}, {name: "吉林", value: Math.ceil(Math.random()*100)}, 
         {name: "辽宁", value: Math.ceil(Math.random()*100)}, {name: "内蒙古", value: Math.ceil(Math.random()*100) }]]
var pro =['江苏','黑龙江','内蒙古','吉林','北京','辽宁','河北','天津','山西','陕西','甘肃','宁夏','青海','新疆','四川','重庆','山东','河南','安徽','湖北','浙江','福建','江西','湖南','贵州','云南','广东','广西','海南','上海','西藏']
var year = ['2021-06-17','2021-07-08','2021-07-15','2021-07-22','2021-07-27','2021-08-10'];
//柱状体宽度
let barWidth = 4;
//测试详细信息
var mapDetailed={}
//模拟数据赋值
for(var i = 0; i < pro.length; i++){
    var arr ={};
    var map ={};
    map['需要测试数量'] = Math.ceil(Math.random()*500);
    map['测试通过数量'] = Math.ceil(Math.random()*500);
    map['测试不通过数量'] = Math.ceil(Math.random()*500);
    map['不具备测试条件'] = Math.ceil(Math.random()*500);
    map['未测试数量'] = Math.ceil(Math.random()*500);
    var proName =pro[i]
    mapDetailed.name=proName
    mapDetailed[proName]=map
}
var myColor=['rgb(247,238,173)','rgba(217,55,49,0.62)','rgba(214,27,18,0.78)']
//地图模拟测试计划数据
var mapData = [ ];
/*柱子颜色区分*/  
var barColorsData = [];  
//数据模拟提前加数组
for(var i=0;i<year.length;i++){
     var j=[];
     mapData.push(j)
    
 }

//生成从minNum到maxNum的随机数 地图用
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * ( maxNum - minNum + 1 ) + minNum, 10);
      //或者 Math.floor(Math.random()*( maxNum - minNum + 1 ) + minNum );
      break;
    default:
      return 0;
      break;
  }
} 
for (var i=0;i<year.length;i++) {
    var barColors={}
        for(var j=0;j<pro.length;j++){
            var proValue = randomNum(1, 3);
            var proName  =pro[j]
            mapData[i].push({
            "name":proName,
            "value":proValue,
            });
            
            barColors[proName]=proValue;
                 
        }
         barColorsData.push(barColors);
    }
    
// for (item in barColorsData1) {
//     console.log(barColorsData1[item])
// }
// for (item in barColorsData) {
//     var maps =barColorsData[item]
//     //  console.log(item+"--"+barColorsData1[item])
//     for (items in maps) {
//          console.log(items+"--"+maps[items])
//     }
// }
// console.log(barColorsData1[0]['黑龙江'])

/*柱子Y名称*/
var categoryData = [];
var barData = [];     
for (var i = 0; i < mapRateData.length; i++) {
    mapRateData[i].sort(function sortNumber(a,b){return a.value-b.value});
        barData.push([]);
        categoryData.push([]);
        for (var j = 0; j < mapRateData[i].length; j++) {
            barData[i].push(mapRateData[i][j].value);
            categoryData[i].push(mapRateData[i][j].name);
            
        }
    }
var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };
        
        option = {
            timeline: {
                data: year,
                currentIndex:year.length-1,
                axisType: 'category',
                autoPlay: false,
                playInterval: 3000,
                left: '10%',
                right: '10%',
                bottom: '3%',
                width: '80%',
                symbolSize: 10,
                lineStyle: {
                    color: '#555'
                },
                checkpointStyle: {
                    borderColor: '#555',
                    borderWidth: 1
                },
                controlStyle: {
                    showNextBtn: true,
                    showPrevBtn: true,
                    normal: {
                        color: '#666',
                        borderColor: '#666'
                    }
                },
            },
            baseOption: {
                animation: true,
                animationDuration: 1000,
                animationEasing: 'cubicInOut',
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut',
                grid: {
                    right: '5%',
                    top: '10%',
                    bottom: '10%',
                    width: '18%'
                },
                tooltip: {
                    trigger: 'item', 
                    formatter: function(a){
                        
                         var info ="";
                         if(barColorsData[n-1][a['name']]==1){
                          info="<strong>生产冒烟省分</strong>"
                         }else if (barColorsData[n-1][a['name']]==2){
                          info="<strong>生产测试省份</strong>"
                         }else if (barColorsData[n-1][a['name']]==3){
                          info="<strong>生产测试省份&冒烟省份</strong>" 
                         }
                       var name =a['name'];
                        return (info+':'+name
                                +'</br>需要测试数量:'+mapDetailed[a['name']]['需要测试数量']
                               +'</br>测试通过数量:'+mapDetailed[a['name']]['测试通过数量']
                               +'<br>测试不通过数量:'+mapDetailed[a['name']]['测试不通过数量']
                               +'<br>不具备测试条件:'+mapDetailed[a['name']]['不具备测试条件']
                               +'<br>未测试数量:'+mapDetailed[a['name']]['未测试数量'])
                    }
                    
                    
                },
                visualMap: {
                 type: 'piecewise',
                 showLabel:'true',
                 seriesIndex: [1],
                 left:'5%',
                 bottom :'15%',
                 text: ['生产测试计划'],
                 pieces: [
                    {
                        min:3,
                        max:3,
                        label: '生产测试省分&冒烟测省分',
                        //   color: '#c1232b'
                           color: 'rgba(214,27,18,0.78)'
                    },
                    {
                        min:1,
                        max:1,
                        label: '生产冒烟省分',
                        //   color: '#fcce10'
                           color: 'rgb(247,238,173)'
                    },
                    {
                        min:2,
                        max:2,
                        label: '生产测试省分',
                        //  color: '#c2dffa'
                           color: 'rgba(217,55,49,0.62)' 
                    }
                ],
                textStyle: {
                    color: '#000000',
                },

                },
                geo: {
                    map: 'china',
                    center: [113.83531246, 34.0267395887],
                    label: {
                        emphasis: {
                            show: false,//鼠标上去不显示省份名字
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            areaColor: '#fff'
                        }
                    }
                },
            },
            options: []

        };
        for (var n = 0; n < year.length; n++) {
            var statistic_name = "各省测试进度排名";
            var titleName =year[n]+"版本生产测试进度看板";
            option.options.push({
                title: [{
                         text:titleName,
                         //subtext: '   ',
                        //  left: '25%',
                        //  top: '1%',
                         textStyle: {
                             color: '#000000',
                            fontSize: 25
                         }
                    },
                    {
                        id: 'statistic',
                        text: statistic_name,
                        left: '75%',
                        top: '3%',
                        textStyle: {
                            color: '#000000',
                            fontSize: 16
                        }
                    }
                ],
                xAxis: {
                     show: false
                },
                yAxis:[
                    {
                    type: 'category',
                    nameGap: 16,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#000000'
                        }
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#000000'
                        }
                    },
                     axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#000000'
                        }
                    }
                    ,
                    data: categoryData[n]
                },
                    {
                    type: 'category',
                    axisTick: 'none',
                    axisLine: 'none',
                    show: true,
                    data:barData[n].sort((a, b) => b - a),
                    axisLabel: {
        
                        interval:0,//全部显示
                        show:true,
                        fontSize: 10,
                        color: '#333',
                        formatter:'{value}%'
                     }
                }
                ],
                series: [
                    //未知作用
                    {
                        //文字和标志
                        name: 'light',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapRateData[n]),
                        symbolSize: function(val) {
                            return 6;
                        },
                        label: {
                            normal: {
                                
                                 show: true,
                                 position: "bottom", //显示位置
                                 offset: [0, 0], //偏移设置
                                 color: "#000000",
                                 formatter: "{b}", //圆环显示文字
                                 fontWeight: "bold",
                                 fontSize: 11
                            }
                        },
                        itemStyle: {
                             color :'transparent',
                        }
                    },
                    //地图
                    {
                        
                        type: 'map',
                        map: 'china',
                        geoIndex: 0,
                        data: mapData[n]
                    },
                    //各省测试任务冒烟柱状图
                    {
                     type: 'bar',
                     data: barData[n].sort((a, b) => a - b),
                     barWidth: barWidth,
                      itemStyle: {
                          normal: {
                              color: function(params) {
                                let paramsProName = params.name;
                                if(barColorsData[n-1][paramsProName]==1){
                                  return myColor[0]
                                }else if (barColorsData[n-1][paramsProName]==2){
                                  return myColor[1] 
                                }else if (barColorsData[n-1][paramsProName]==3){
                                  return myColor[2]  
                                }
                                 
                              },
                          }
                      },
                     z: 2,
                     animation: true,
                     animationEasing:'cubicOut'
                    },
                    {
                        type: 'scatter',
                        yAxisIndex: 0,
                        symbol: 'rect',
                        symbolSize: [1,3],
                        data: barData[n],
                        itemStyle: {
                            normal: {
                                borderColor: '#fac858',
                                color: '#E2F2FF',
                            }
                        },
                        z: 2
                    },
                    {
                        name: '外框',
                        type: 'bar',
                        yAxisIndex: 0,
                        barGap: '-100%',
                        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100,100, 100, 100, 100, 100, 100, 100, 100, 100, 100,100, 100, 100, 100, 100, 100, 100, 100, 100, 100,100],
                        barWidth: barWidth,
                        itemStyle: {
                            normal: {
                                color: 'rgba(194,185,185,0.2)'
                            }
                        },
                        z: 0
                    },
                    //生产冒烟省分
                    {
                       name: '生产冒烟省份',
                       type: 'scatter',
                    //   type: 'effectScatter',
                       coordinateSystem: 'geo',
                       data: convertData(mapTackData[n]),
                       symbol: 'pin',
                       color:'#f2d643', //颜色
                       symbolSize: function(val) {
                           return val[1];
                       },
                      symbolOffset: [1,10],
                       label: {
                           show:true,
                           fontStyle: 'normal' ,
                           position: 'inside',
                           color:'#333',
                           formatter: function(params) {
                               return params.value[2];
                           },
                       }
                   },
                ]
            });
         }



