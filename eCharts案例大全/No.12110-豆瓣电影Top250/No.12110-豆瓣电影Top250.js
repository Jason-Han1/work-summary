option = {
    // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            rotate: -90
        },
        data: [1931, 1936, 1939, 1940, 1942, 1950, 1952, 1953, 1954, 1957, 1960, 1961, 1965, 1966, 1968, 1971, 1972, 1974, 1975, 1979, 1982, 1983, 1984, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017]
    },
    // 声明一个 Y 轴，数值轴。
    yAxis: {
        type: 'value'
    },
    tooltip: {
        show: true,
        formatter(params) {
            const items = data[params.name]
            return `${params.name} 年 ${items.length} 部<br/>---------------------<br/>` + 
                items.map(item => item.title)
                .join('<br/>')
        }
    },
    // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
    series: [{
        name: '豆瓣Top250',
        type: 'line',
        smooth: true,
        data: [1, 1, 1, 1, 1, 1, 1, 2, 1, 3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 5, 2, 3, 5, 2, 7, 11, 9, 4, 9, 5, 8, 7, 9, 7, 7, 12, 4, 9, 6, 9, 10, 14, 10, 5, 10, 9, 10, 7, 3]
    }]
    
}

const data = { '1931': 
   [ { title: '城市之光',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2170238803.jpg' } ],
  '1936': 
   [ { title: '摩登时代',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2173707976.jpg' } ],
  '1939': 
   [ { title: '乱世佳人',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1963126880.jpg' } ],
  '1940': 
   [ { title: '魂断蓝桥',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2351134499.jpg' } ],
  '1942': 
   [ { title: '卡萨布兰卡',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1244791866.jpg' } ],
  '1950': 
   [ { title: '罗生门',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1864872647.jpg' } ],
  '1952': 
   [ { title: '雨中曲',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1612355875.jpg' } ],
  '1953': 
   [ { title: '罗马假日',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2189265085.jpg' },
     { title: '东京物语',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910832390.jpg' } ],
  '1954': 
   [ { title: '七武士',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p647099823.jpg' } ],
  '1957': 
   [ { title: '十二怒汉',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2173577632.jpg' },
     { title: '十二怒汉',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2173577632.jpg' },
     { title: '控方证人',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1505392928.jpg' } ],
  '1960': 
   [ { title: '惊魂记',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1021883305.jpg' } ],
  '1961': 
   [ { title: '大闹天宫',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2266298961.jpg' } ],
  '1965': 
   [ { title: '音乐之声',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p453788577.jpg' } ],
  '1966': 
   [ { title: '黄金三镖客',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2101693489.jpg' },
     { title: '虎口脱险',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2399597512.jpg' } ],
  '1968': 
   [ { title: '2001太空漫游',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792189453.jpg' } ],
  '1971': 
   [ { title: '发条橙',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p529908155.jpg' } ],
  '1972': 
   [ { title: '教父',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1853232210.jpg' } ],
  '1974': 
   [ { title: '教父2',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2194138787.jpg' } ],
  '1975': 
   [ { title: '飞越疯人院',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792238287.jpg' } ],
  '1979': 
   [ { title: '哪吒闹海',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2516566783.jpg' } ],
  '1982': 
   [ { title: 'E.T. 外星人',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p984732992.jpg' } ],
  '1983': 
   [ { title: '天书奇谭',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p842504080.jpg' } ],
  '1984': 
   [ { title: '风之谷',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1917567652.jpg' },
     { title: '美国往事',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p477229647.jpg' } ],
  '1986': 
   [ { title: '天空之城',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1446261379.jpg' },
     { title: '英雄本色',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2504997087.jpg' } ],
  '1987': 
   [ { title: '倩女幽魂',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2414157745.jpg' },
     { title: '忠犬八公物语',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2297934945.jpg' },
     { title: '末代皇帝',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p452089833.jpg' } ],
  '1988': 
   [ { title: '碧海蓝天',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p455722535.jpg' },
     { title: '天堂电影院',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910901025.jpg' },
     { title: '萤火虫之墓',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2237136718.jpg' },
     { title: '雨人',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p942376281.jpg' },
     { title: '龙猫',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2540924496.jpg' } ],
  '1989': 
   [ { title: '死亡诗社',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910824340.jpg' },
     { title: '魔女宅急便',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p456676352.jpg' } ],
  '1990': 
   [ { title: '剪刀手爱德华',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p480956937.jpg' },
     { title: '阿飞正传',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2525770523.jpg' },
     { title: '教父3',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2169664351.jpg' } ],
  '1991': 
   [ { title: '沉默的羔羊',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1593414327.jpg' },
     { title: '牯岭街少年杀人事件',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p848381236.jpg' },
     { title: '纵横四海',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2272146906.jpg' },
     { title: '终结者2：审判日',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910909085.jpg' },
     { title: '末路狂花',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p794583044.jpg' } ],
  '1992': 
   [ { title: '闻香识女人',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p925123037.jpg' },
     { title: '新龙门客栈',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1421018669.jpg' } ],
  '1993': 
   [ { title: '射雕英雄传之东成西就',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1993903133.jpg' },
     { title: '完美的世界',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2190556408.jpg' },
     { title: '唐伯虎点秋香',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1946455272.jpg' },
     { title: '喜宴',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2249048907.jpg' },
     { title: '霸王别姬',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910813120.jpg' },
     { title: '辛德勒的名单',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p492406163.jpg' },
     { title: '青蛇',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p584021784.jpg' } ],
  '1994': 
   [ { title: '阳光灿烂的日子',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p967457079.jpg' },
     { title: '重庆森林',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792381411.jpg' },
     { title: '活着',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513253791.jpg' },
     { title: '燃情岁月',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1023654037.jpg' },
     { title: '东邪西毒',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1982176012.jpg' },
     { title: '肖申克的救赎',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg' },
     { title: '这个杀手不太冷',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p511118051.jpg' },
     { title: '阿甘正传',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p510876377.jpg' },
     { title: '饮食男女',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910899751.jpg' },
     { title: '狮子王',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p726659067.jpg' },
     { title: '低俗小说',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910902213.jpg' } ],
  '1995': 
   [ { title: '勇敢的心',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1374546770.jpg' },
     { title: '非常嫌疑犯',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537319495.jpg' },
     { title: '攻壳机动队',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910922395.jpg' },
     { title: '大话西游之月光宝盒',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1280323646.jpg' },
     { title: '爱在黎明破晓前',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p452582315.jpg' },
     { title: '侧耳倾听',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p456692072.jpg' },
     { title: '大话西游之大圣娶亲',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2455050536.jpg' },
     { title: '情书',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p449897379.jpg' },
     { title: '七宗罪',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p457631605.jpg' } ],
  '1996': 
   [ { title: '英国病人',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2408623752.jpg' },
     { title: '甜蜜蜜',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1962839732.jpg' },
     { title: '猜火车',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p513567548.jpg' },
     { title: '勇闯夺命岛',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p636048104.jpg' } ],
  '1997': 
   [ { title: '春光乍泄',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p465939041.jpg' },
     { title: '心灵捕手',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480965695.jpg' },
     { title: '幽灵公主',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1613191025.jpg' },
     { title: '变脸',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2173855883.jpg' },
     { title: '千钧一发',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2195672555.jpg' },
     { title: '未麻的部屋',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1351050722.jpg' },
     { title: '美丽人生',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p510861873.jpg' },
     { title: '泰坦尼克号',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p457760035.jpg' },
     { title: '小鞋子',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2165511465.jpg' } ],
  '1998': 
   [ { title: '两杆大烟枪',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792443418.jpg' },
     { title: '海上钢琴师',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p511146807.jpg' },
     { title: '楚门的世界',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p479682972.jpg' },
     { title: '追随',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1150103377.jpg' },
     { title: '拯救大兵瑞恩',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1014542496.jpg' } ],
  '1999': 
   [ { title: '第六感',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2220184425.jpg' },
     { title: '美国丽人',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p571671715.jpg' },
     { title: '枪火',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1538646661.jpg' },
     { title: '搏击俱乐部',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1910926158.jpg' },
     { title: '喜剧之王',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1043597424.jpg' },
     { title: '菊次郎的夏天',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p751835224.jpg' },
     { title: '绿里奇迹',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p767586451.jpg' },
     { title: '黑客帝国',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p451926968.jpg' } ],
  '2000': 
   [ { title: '荒岛余生',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2207673534.jpg' },
     { title: '鬼子来了',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1181775734.jpg' },
     { title: '一一',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2119675128.jpg' },
     { title: '花样年华',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910828286.jpg' },
     { title: '记忆碎片',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p641688453.jpg' },
     { title: '梦之安魂曲',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p884936202.jpg' },
     { title: '西西里的美丽传说',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792400696.jpg' } ],
  '2001': 
   [ { title: '天使爱美丽',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p803896904.jpg' },
     { title: '黑鹰坠落',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910900710.jpg' },
     { title: '我是山姆',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p652417775.jpg' },
     { title: '人工智能',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792257137.jpg' },
     { title: '怪兽电力公司',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2513247938.jpg' },
     { title: '千与千寻',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1606727862.jpg' },
     { title: '指环王1：魔戒再现',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1354436051.jpg' },
     { title: '美丽心灵',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1665997400.jpg' },
     { title: '哈利·波特与魔法石',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p804947166.jpg' } ],
  '2002': 
   [ { title: '猫鼠游戏',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p453924541.jpg' },
     { title: '指环王2：双塔奇兵',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p909265336.jpg' },
     { title: '上帝之城',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p455677490.jpg' },
     { title: '谍影重重',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1597183981.jpg' },
     { title: '冰川时代',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1910895719.jpg' },
     { title: '无间道',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2233971046.jpg' },
     { title: '钢琴家',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792484461.jpg' } ],
  '2003': 
   [ { title: '致命ID',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p453720880.jpg' },
     { title: '加勒比海盗',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1596085504.jpg' },
     { title: '大鱼',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p692813374.jpg' },
     { title: '指环王3：王者无敌',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910825503.jpg' },
     { title: '杀人回忆',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p480225538.jpg' },
     { title: '黑客帝国3：矩阵革命',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p443461818.jpg' },
     { title: '真爱至上',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p475600770.jpg' } ],
  '2004': 
   [ { title: '蝴蝶效应',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2209066019.jpg' },
     { title: '哈尔的移动城堡',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2174346180.jpg' },
     { title: '爱在日落黄昏时',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910924055.jpg' },
     { title: '幸福终点站',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792263736.jpg' },
     { title: '可可西里',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2363208684.jpg' },
     { title: '谍影重重2',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p667644866.jpg' },
     { title: '卢旺达饭店',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2159368352.jpg' },
     { title: '恋恋笔记本',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p483604864.jpg' },
     { title: '电锯惊魂',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2163771304.jpg' },
     { title: '无人知晓',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p661160053.jpg' },
     { title: '放牛班的春天',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910824951.jpg' },
     { title: '撞车',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2075132390.jpg' } ],
  '2005': 
   [ { title: '断背山',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p513535588.jpg' },
     { title: 'V字仇杀队',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1465235231.jpg' },
     { title: '战争之王',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p453719066.jpg' },
     { title: '傲慢与偏见',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p452005185.jpg' } ],
  '2006': 
   [ { title: '血钻',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1244017073.jpg' },
     { title: '窃听风暴',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1808872109.jpg' },
     { title: '红辣椒',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p672363704.jpg' },
     { title: '香水',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p470006658.jpg' },
     { title: '穿越时空的少女',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2079334286.jpg' },
     { title: '当幸福来敲门',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1312700744.jpg' },
     { title: '疯狂的石头',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p712241453.jpg' },
     { title: '致命魔术',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480383375.jpg' },
     { title: '被嫌弃的松子的一生',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p453723669.jpg' } ],
  '2007': 
   [ { title: '秒速5厘米',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p982896012.jpg' },
     { title: '遗愿清单',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p708613284.jpg' },
     { title: '荒野生存',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p465687407.jpg' },
     { title: '地球上的星星',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1973489335.jpg' },
     { title: '谍影重重3',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792223507.jpg' },
     { title: '这个男人来自地球',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p513303986.jpg' } ],
  '2008': 
   [ { title: '入殓师',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p594972928.jpg' },
     { title: '穿条纹睡衣的男孩',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1473670352.jpg' },
     { title: '蝙蝠侠：黑暗骑士',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p462657443.jpg' },
     { title: '浪潮',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1344888983.jpg' },
     { title: '朗读者',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1140984198.jpg' },
     { title: '贫民窟的百万富翁',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2434249040.jpg' },
     { title: '机器人总动员',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1461851991.jpg' },
     { title: '步履不停',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p672446737.jpg' },
     { title: '本杰明·巴顿奇事',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2192535722.jpg' } ],
  '2009': 
   [ { title: '玛丽和马克思',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1820615077.jpg' },
     { title: '阿凡达',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2180085848.jpg' },
     { title: '海盗电台',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p769608791.jpg' },
     { title: '飞屋环游记',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2364094053.jpg' },
     { title: '恐怖游轮',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p462470694.jpg' },
     { title: '海洋',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p497010372.jpg' },
     { title: '忠犬八公的故事',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p524964016.jpg' },
     { title: '三傻大闹宝莱坞',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p579729551.jpg' },
     { title: '无耻混蛋',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p770734475.jpg' },
     { title: '海豚湾',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p455222172.jpg' } ],
  '2010': 
   [ { title: '禁闭岛',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1832875827.jpg' },
     { title: '告白',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p689520756.jpg' },
     { title: '国王的演讲',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p768879237.jpg' },
     { title: '驯龙高手',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p450042258.jpg' },
     { title: '神偷奶爸',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792776858.jpg' },
     { title: '借东西的小人阿莉埃蒂',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p617533616.jpg' },
     { title: '玩具总动员3',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1283675359.jpg' },
     { title: '你看起来好像很好吃',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p709670262.jpg' },
     { title: '岁月神偷',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p456666151.jpg' },
     { title: '黑天鹅',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p719282906.jpg' },
     { title: '盗梦空间',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p513344864.jpg' },
     { title: '怦然心动',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p663036666.jpg' },
     { title: '初恋这件小事',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1505312273.jpg' },
     { title: '让子弹飞',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1512562287.jpg' } ],
  '2011': 
   [ { title: '我爱你',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1075591188.jpg' },
     { title: '勇士',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1145536386.jpg' },
     { title: '阳光姐妹淘',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1374786017.jpg' },
     { title: '超脱',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1305562621.jpg' },
     { title: '哈利·波特与死亡圣器(下)',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p917846733.jpg' },
     { title: '萤火之森',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1272904657.jpg' },
     { title: '熔炉',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1363250216.jpg' },
     { title: '触不可及',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1454261925.jpg' },
     { title: '一次别离',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2189835254.jpg' },
     { title: '源代码',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p988260245.jpg' } ],
  '2012': 
   [ { title: '狩猎',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1546987967.jpg' },
     { title: '少年派的奇幻漂流',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1784592701.jpg' },
     { title: '被解救的姜戈',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1959232369.jpg' },
     { title: '无敌破坏王',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1735642656.jpg' },
     { title: '蝙蝠侠：黑暗骑士崛起',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1706428744.jpg' } ],
  '2013': 
   [ { title: '辩护人',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2158166535.jpg' },
     { title: '恐怖直播',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2016930906.jpg' },
     { title: '时空恋旅人',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2070153774.jpg' },
     { title: '达拉斯买家俱乐部',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2166160837.jpg' },
     { title: '7号房的礼物',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1816276065.jpg' },
     { title: '疯狂原始人',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1867084027.jpg' },
     { title: '再次出发之纽约遇见你',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2250287733.jpg' },
     { title: '爱在午夜降临前',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2074715729.jpg' },
     { title: '彗星来的那一夜',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2187896711.jpg' },
     { title: '素媛',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2118532944.jpg' } ],
  '2014': 
   [ { title: '布达佩斯大饭店',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2178872593.jpg' },
     { title: '消失的爱人',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2221768894.jpg' },
     { title: '小森林 夏秋篇',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2221319641.jpg' },
     { title: '模仿游戏',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2255040492.jpg' },
     { title: '爆裂鼓手',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2220776342.jpg' },
     { title: '超能陆战队',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2224568669.jpg' },
     { title: '心迷宫',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2275298525.jpg' },
     { title: '荒蛮故事',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2192834364.jpg' },
     { title: '星际穿越',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2206088801.jpg' } ],
  '2015': 
   [ { title: '聚焦',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2263822658.jpg' },
     { title: '海蒂和爷爷',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2332944143.jpg' },
     { title: '疯狂的麦克斯4：狂暴之路',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2236181653.jpg' },
     { title: '小森林 冬春篇',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2215147728.jpg' },
     { title: '一个叫欧维的男人决定去死',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2406624993.jpg' },
     { title: '房间',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2259715855.jpg' },
     { title: '海街日记',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2232247487.jpg' },
     { title: '二十二',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2457609817.jpg' },
     { title: '头脑特工队',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2266293606.jpg' },
     { title: '小萝莉的猴神大叔',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510956726.jpg' } ],
  '2016': 
   [ { title: '摔跤吧！爸爸',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2457983084.jpg' },
     { title: '你的名字。',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2395733377.jpg' },
     { title: '完美陌生人',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522331945.jpg' },
     { title: '海边的曼彻斯特',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2496940327.jpg' },
     { title: '血战钢锯岭',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2398141939.jpg' },
     { title: '疯狂动物城',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2315672647.jpg' },
     { title: '看不见的客人',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2498971355.jpg' } ],
  '2017': 
   [ { title: '请以你的名字呼唤我',
       image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505525050.jpg' },
     { title: '三块广告牌',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2510081688.jpg' },
     { title: '寻梦环游记',
       image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2503997609.jpg' } ] }