option = {
    title: {
        text: "鑫满意利益曲线",
        subtext: "2万5年缴",
        x: "center"
    },
    tooltip: {
        trigger: "axis"
    },
    legend: {
        data: ["鑫满意", "银行"],
        x: "center",
        y: "bottom"
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: true
            },
            magicType: {
                show: false,
                type: ["line", "bar"]
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    xAxis: [
        {
            type: "category",
            boundaryGap: false,
            data: ["30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"]
        }
    ],
    yAxis: [
        {
            type: "value",
            name: "°C"
        }
    ],
    series: [
        {
            name: "鑫满意",
            type: "line",
            data: [15669, 33965, 54624, 77322, 100910, 104916, 109042, 113342, 117820, 122387, 127295, 132476, 137932, 143677, 149727, 156096, 162804, 169867, 177308, 185248, 193472, 202084, 211086, 220493, 230323, 240599, 251337, 262559, 274286, 286542, 299350],
            symbolSize: 0
        },
        {
            name: "银行",
            type: "line",
            data: [20600, 41818, 63672.54, 86182.7162, 109368.1977, 112649.2436, 116028.7209, 119509.5826, 123094.87, 126787.7161, 130591.3476, 134509.088, 138544.3607, 142700.6915, 146981.7122, 151391.1636, 155932.8985, 160610.8855, 165429.212, 170392.0884, 175503.8511, 180768.9666, 186192.0356, 191777.7967, 197531.1306, 203457.0645, 209560.7764, 215847.5997, 222323.0277, 228992.7185, 235862.5001],
            symbolSize: 0
        }
    ]
}