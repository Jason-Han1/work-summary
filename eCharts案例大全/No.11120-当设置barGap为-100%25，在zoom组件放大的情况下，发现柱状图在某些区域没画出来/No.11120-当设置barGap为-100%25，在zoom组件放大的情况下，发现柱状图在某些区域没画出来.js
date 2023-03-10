option = {
    tooltip : {
      trigger: 'item'
    },
    legend: {
      itemGap: 5
    },
    grid: {
      top: '12%',
      left: '1%',
      right: '10%',
      containLabel: true
    },
    xAxis: 
    {
      type : 'category',
      axisTick: {
        alignWithLabel:true
      },
      "data": [
      "USA",
      "CHN",
      "JPN",
      "DEU",
      "GBR",
      "IND",
      "FRA",
      "BRA",
      "ITA",
      "CAN",
      "RUS",
      "KOR",
      "AUS",
      "ESP",
      "MEX",
      "IDN",
      "TUR",
      "NLD",
      "SAU",
      "CHE",
      "ARG",
      "SWE",
      "POL",
      "BEL",
      "THA",
      "IRN",
      "AUT",
      "NOR",
      "ARE",
      "NGA",
      "ISR",
      "ZAF",
      "HKG",
      "IRL",
      "DNK",
      "SGP",
      "MYS",
      "COL",
      "PHL",
      "PAK",
      "CHL",
      "FIN",
      "BGD",
      "EGY",
      "VNM",
      "PRT",
      "CZE",
      "ROU",
      "PER",
      "NZL",
      "GRC",
      "IRQ",
      "DZA",
      "QAT",
      "KAZ",
      "HUN",
      "AGO",
      "KWT",
      "SDN",
      "UKR",
      "MAR",
      "ECU",
      "CUB",
      "SVK",
      "LKA",
      "ETH",
      "KEN",
      "DOM",
      "GTM",
      "OMN",
      "MMR",
      "LUX",
      "PAN",
      "GHA",
      "BGR",
      "CRI",
      "URY",
      "HRV",
      "BLR",
      "LBN",
      "TZA",
      "MAC",
      "UZB",
      "SVN",
      "LTU",
      "SRB",
      "AZE",
      "JOR",
      "TUN",
      "PRY",
      "LBY",
      "TKM",
      "COD",
      "BOL",
      "CIV",
      "BHR",
      "CMR",
      "YEM",
      "LVA",
      "UGA",
      "EST",
      "ZMB",
      "NPL",
      "SLV",
      "ISL",
      "HND",
      "KHM",
      "TTO",
      "CYP",
      "ZWE",
      "SEN",
      "PNG",
      "AFG",
      "BIH",
      "BWA",
      "LAO",
      "MLI",
      "GEO",
      "GAB",
      "JAM",
      "PSE",
      "NIC",
      "MUS",
      "NAM",
      "ALB",
      "MOZ",
      "MLT",
      "BFA",
      "GNQ",
      "BHS",
      "BRN",
      "ARM",
      "MDG",
      "MNG",
      "MKD",
      "GIN",
      "TCD",
      "BEN",
      "RWA",
      "COG",
      "HTI",
      "MDA",
      "NER",
      "KGZ",
      "TJK",
      "SOM",
      "MWI",
      "GUM",
      "FJI",
      "MRT",
      "MDV",
      "MNE",
      "TGO",
      "BRB",
      "SWZ",
      "SLE",
      "GUY",
      "LBR",
      "BDI",
      "AND",
      "SUR",
      "TLS",
      "ABW",
      "LSO",
      "BTN",
      "CAF",
      "BLZ",
      "DJI",
      "CPV",
      "LCA",
      "SMR",
      "MNP",
      "ATG",
      "SYC",
      "GMB",
      "GNB",
      "SLB",
      "GRD",
      "COM",
      "KNA",
      "VUT",
      "WSM",
      "VCT",
      "ASM",
      "DMA",
      "TON",
      "STP",
      "FSM",
      "PLW",
      "MHL",
      "KIR",
      "NRU",
      "TUV"
      ],

    }
    ,
    yAxis: [
    {
      type : 'value',
      name : 'Budget (million USD)',
    }
    ],
    dataZoom: [
    {
      type: 'slider',
      show: true,
      start: 0,
      end: 100,
      handleSize: 8
    },
    {
      type: 'inside',
      start: 94,
      end: 100
    },
    ],
    series : [
    {
      "name": "Christian",
      "type": "bar",
      "itemStyle": { "color": "rgba(87, 112, 155, 255)" },
      "barMaxWidth": 30,
      "barGap": "-100%",
      "data": [
      ["USA", 19400000000000],
      ["DEU", 3680000000000],
      ["GBR", 2620000000000],
      ["FRA", 2580000000000],
      ["BRA", 2060000000000],
      ["ITA", 1930000000000],
      ["CAN", 1650000000000],
      ["AUS", 1320000000000],
      ["ESP", 1310000000000],
      ["MEX", 1150000000000],
      ["NLD", 826000000000],
      ["CHE", 679000000000],
      ["ARG", 637000000000],
      ["SWE", 538000000000],
      ["POL", 526000000000],
      ["BEL", 493000000000],
      ["AUT", 417000000000],
      ["NOR", 399000000000],
      ["ZAF", 349000000000],
      ["HKG", 341000000000],
      ["IRL", 334000000000],
      ["DNK", 325000000000],
      ["COL", 314000000000],
      ["PHL", 314000000000],
      ["CHL", 277000000000],
      ["FIN", 252000000000],
      ["PRT", 218000000000],
      ["CZE", 216000000000],
      ["PER", 211000000000],
      ["NZL", 206000000000],
      ["HUN", 139000000000],
      ["AGO", 122000000000],
      ["ECU", 104000000000],
      ["CUB", 96851000000],
      ["SVK", 95769031980],
      ["ETH", 80561496134],
      ["KEN", 79263075749],
      ["DOM", 75931656815],
      ["GTM", 75620095538],
      ["LUX", 62404461275],
      ["PAN", 62283756584],
      ["GHA", 58996776238],
      ["BGR", 58220973783],
      ["CRI", 57285984448],
      ["URY", 56156972158],
      ["HRV", 55213087271],
      ["BLR", 54456465473],
      ["TZA", 52090321003],
      ["SVN", 48769655479],
      ["LTU", 47168303744],
      ["PRY", 39667400816],
      ["COD", 37642482562],
      ["BOL", 37508642113],
      ["CIV", 37353276059],
      ["CMR", 34922782311],
      ["LVA", 30264454642],
      ["UGA", 25995031850],
      ["EST", 25921079612],
      ["ZMB", 25868142073],
      ["SLV", 24805439600],
      ["ISL", 23909289979],
      ["HND", 22978532897],
      ["TTO", 22079017627],
      ["CYP", 22054225828],
      ["ZWE", 22040902300],
      ["PNG", 20536314601],
      ["BIH", 18054854789],
      ["BWA", 17406565823],
      ["GAB", 15013950984],
      ["JAM", 14781107822],
      ["NIC", 13814261536],
      ["NAM", 13253698015],
      ["ALB", 13038538300],
      ["MOZ", 12645508634],
      ["MLT", 12518134319],
      ["GNQ", 12293579173],
      ["BHS", 12162100000],
      ["ARM", 11536590636],
      ["MDG", 11499803807],
      ["MKD", 11279509014],
      ["BEN", 9246696924],
      ["RWA", 9135454442],
      ["COG", 8701334800],
      ["HTI", 8408150518],
      ["MWI", 6303292264],
      ["GUM", 5859000000],
      ["FJI", 5061202767],
      ["MNE", 4844592067],
      ["TGO", 4757776485],
      ["BRB", 4673500000],
      ["SWZ", 4433664364],
      ["GUY", 3621046005],
      ["LBR", 3285455000],
      ["BDI", 3172416146],
      ["AND", 3012914131],
      ["SUR", 2995827901],
      ["TLS", 2954621000],
      ["ABW", 2700558659],
      ["LSO", 2578265358],
      ["CAF", 1949411659],
      ["BLZ", 1862614800],
      ["CPV", 1772706451],
      ["LCA", 1737504296],
      ["SMR", 1632860041],
      ["MNP", 1593000000],
      ["ATG", 1510084751],
      ["SYC", 1497959569],
      ["SLB", 1303453622],
      ["GRD", 1126882296],
      ["KNA", 992007403.1],
      ["VUT", 862879789],
      ["WSM", 840927996.6],
      ["VCT", 785222509.1],
      ["ASM", 634000000],
      ["DMA", 496727000],
      ["TON", 427659795.3],
      ["STP", 392570292.5],
      ["FSM", 336427500],
      ["PLW", 289823500],
      ["MHL", 204173430.1],
      ["KIR", 185572501.5],
      ["NRU", 113884908.4],
      ["TUV", 39731317.3]
      ]
    },
    {
      "name": "Buddhism",
      "type": "bar",
      "itemStyle": { "color": "rgba(157, 164, 91, 255)" },
      "barMaxWidth": 30,
      "barGap": "-100%",
      "data": [
      ["CHN", 12200000000000],
      ["JPN", 4870000000000],
      ["KOR", 1530000000000],
      ["THA", 455000000000],
      ["SGP", 324000000000],
      ["VNM", 224000000000],
      ["LKA", 87357205923],
      ["MMR", 67068745521],
      ["MAC", 50361201096],
      ["KHM", 22158209503],
      ["LAO", 16853087485],
      ["MNG", 11433635876],
      ["BTN", 2528007911]
      ]
    },
    {
      "name": "Hinduism",
      "type": "bar",
      "itemStyle": { "color": "rgba(165, 144, 95, 255)" },
      "barMaxWidth": 30,
      "barGap": "-100%",
      "data": [
      ["IND", 2600000000000],
      ["NPL", 24880266905],
      ["MUS", 13266427697]
      ]
    },
    {
      "name": "Orthodox",
      "type": "bar",
      "itemStyle": { "color": "rgba(102, 104, 150, 255)" },
      "barMaxWidth": 30,
      "barGap": "-100%",
      "data": [
      ["RUS", 1580000000000],
      ["ROU", 212000000000],
      ["GRC", 200000000000],
      ["UKR", 112000000000],
      ["SRB", 41431648801],
      ["GEO", 15081338092],
      ["MDA", 8128493432]
      ]
    },
    {
      "name": "Islam",
      "type": "bar",
      "itemStyle": { "color": "rgba(105, 135, 95, 255)" },
      "barMaxWidth": 30,
      "barGap": "-100%",
      "data": [
      ["IDN", 1020000000000],
      ["TUR", 852000000000],
      ["SAU", 687000000000],
      ["ARE", 383000000000],
      ["NGA", 376000000000],
      ["ISR", 351000000000],
      ["MYS", 315000000000],
      ["PAK", 305000000000],
      ["BGD", 250000000000],
      ["EGY", 235000000000],
      ["DZA", 168000000000],
      ["QAT", 167000000000],
      ["KAZ", 163000000000],
      ["KWT", 120000000000],
      ["SDN", 117000000000],
      ["MAR", 110000000000],
      ["OMN", 72642652796],
      ["UZB", 49677172714],
      ["JOR", 40068308451],
      ["TUN", 39952095561],
      ["LBY", 38107728083],
      ["TKM", 37926285714],
      ["YEM", 31267675216],
      ["SEN", 21070225735],
      ["AFG", 19543976895],
      ["MLI", 15334336144],
      ["PSE", 14498100000],
      ["BFA", 12322864245],
      ["BRN", 12128089002],
      ["GIN", 10472514515],
      ["TCD", 9871247732],
      ["NER", 8119710126],
      ["KGZ", 7564738836],
      ["TJK", 7146449583],
      ["SOM", 7052000000],
      ["MRT", 5024708656],
      ["MDV", 4865546027],
      ["SLE", 3775047334],
      ["DJI", 1844674435],
      ["GMB", 1489464788],
      ["GNB", 1346841897],
      ["COM", 1068124330]
      ]
    },
    {
      "name": "Shiite",
      "type": "bar",
      "itemStyle": { "color": "rgba(93, 127, 114, 255)" },
      "barMaxWidth": 30,
      "barGap": "-100%",
      "data": [
      ["IRN", 454000000000],
      ["IRQ", 192000000000],
      ["LBN", 53576985687],
      ["AZE", 40747792238],
      ["BHR", 35307127660]
      ]
    }
    ]
  };
