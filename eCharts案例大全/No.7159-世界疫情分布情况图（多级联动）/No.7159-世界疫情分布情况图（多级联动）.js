(function(config) {
    // let chart = echarts.init(document.getElementById("main"));
    myChart.on('legendselectchanged', function(params) {
        let options = this.getOption(),
            keys = Object.keys(params.selected),
            selected = [];

        // 获取选中目录的 category 值
        for (let item of keys) {
            if (params.selected[item]) {
                for (let term of config.level1)
                    if (item == term.name)
                        selected.push(term.category);
            }
        }

        // 根据 category 获取 series 中 data 数据项
        options.series[1].data = config.level2.filter(item => {
            return selected.includes(item.category);
        });

        this.setOption(options);
    });

    myChart.setOption({
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            x: 'center',
            y: 'bottom',
            data: ['Americas', 'Europe', 'Eastern Mediterranean', 'Western Pacific', 'South-East Asia', 'Africa']
        },
        // title: {
        //     text: "80%",
        //     left: "center",
        //     top: "48%",
        //     textStyle: {
        //         color: "#27D9C8",
        //         fontSize: 50,
        //         align: "center"
        //     }
        // },
        graphic: {
            type: "text",
            left: "center",
            top: "48%",
            style: {
                text: "全球疫情分布",
                textAlign: "center",
                fill: "#333",
                fontSize: 25,
                fontWeight: 700
            }
        },
        series: [{
                name: 'Continent',
                type: 'pie',
                label: {
                    normal: {
                        show: true,
                        rotate: true,
                        fontWeight: 'bold',
                        position: 'inner', //这个配置项是控制文案在扇形里显示，或者在扇形中心显示
                        fontSize: 12
                    }
                },
                itemStyle: {
                    normal: {
                        borderwidth: 1,
                        borderColor: '#fff',
                        /**
                         * 自定义饼图 扇形 颜色
                         * @param params
                         */
                        color(params) {
                            return params.data.color;
                        }
                    }
                },
                // center: ['50%', '50%'],
                radius: ['30%', '59.5%'],
                data: config.level1
            },
            {
                name: 'countries',
                type: 'pie',
                label: {
                    normal: {
                        show: false,
                        //rotate: true,
                        position: 'outer',
                        alignTo: 'edge',
                        margin: '10%',
                        // bleedMargin: 10,
                        // fontSize: 10
                    }
                },
                itemStyle: {
                    borderwidth: 1,
                    borderColor: '#fff',
                    normal: {
                        color(params) {
                            return params.data.color;
                        }
                    }
                },
                // center: ['50%', '50%'],
                radius: ['60%', '80%'],
                data: config.level2
            }
        ]
    });
})({
    "level1": [{
        "name": "Americas",
        "value": 3635043,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Europe",
        "value": 2391369,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Eastern Mediterranean",
        "value": 715703,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "South-East Asia",
        "value": 422820,
        "category": 3,
        "color": "#AED9E0"
    }, {
        "name": "Western Pacific",
        "value": 195414,
        "category": 4,
        "color": "#FFA69E"
    }, {
        "name": "Africa",
        "value": 153391,
        "category": 5,
        "color": "#F07167"
    }],
    "level2": [{
        "name": "Saint Kitts and Nevis",
        "value": 15,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Dominica",
        "value": 18,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Saint Lucia",
        "value": 19,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Belize",
        "value": 20,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Grenada",
        "value": 23,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Antigua and Barbuda",
        "value": 26,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Saint Vincent and the Grenadines",
        "value": 27,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Barbados",
        "value": 96,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Bahamas",
        "value": 103,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Trinidad and Tobago",
        "value": 117,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Guyana",
        "value": 158,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Suriname",
        "value": 168,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Jamaica",
        "value": 611,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Uruguay",
        "value": 847,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Paraguay",
        "value": 1230,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Nicaragua",
        "value": 1464,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Costa Rica",
        "value": 1538,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Cuba",
        "value": 2219,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Venezuela",
        "value": 2814,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "El Salvador",
        "value": 3373,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Haiti",
        "value": 3941,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Honduras",
        "value": 7669,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Guatemala",
        "value": 8561,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Bolivia",
        "value": 16165,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Panama",
        "value": 18586,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Dominican Republic",
        "value": 21437,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Argentina",
        "value": 27373,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Colombia",
        "value": 43810,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Ecuador",
        "value": 44440,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Canada",
        "value": 99146,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Mexico",
        "value": 133974,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Chile",
        "value": 154092,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Peru",
        "value": 214788,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Brazil",
        "value": 802828,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "US",
        "value": 2023347,
        "category": 0,
        "color": "#0081A7"
    }, {
        "name": "Holy See",
        "value": 12,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Greenland",
        "value": 13,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Liechtenstein",
        "value": 82,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Monaco",
        "value": 99,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Montenegro",
        "value": 324,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Malta",
        "value": 640,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "San Marino",
        "value": 691,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Georgia",
        "value": 831,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Andorra",
        "value": 852,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Cyprus",
        "value": 975,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Latvia",
        "value": 1094,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Kosovo",
        "value": 1326,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Albania",
        "value": 1385,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Slovenia",
        "value": 1488,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Slovakia",
        "value": 1541,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Lithuania",
        "value": 1752,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Iceland",
        "value": 1807,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Estonia",
        "value": 1965,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Kyrgyzstan",
        "value": 2166,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Croatia",
        "value": 2249,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Bosnia and Herzegovina",
        "value": 2832,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Bulgaria",
        "value": 3086,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Greece",
        "value": 3088,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "North Macedonia",
        "value": 3538,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Hungary",
        "value": 4039,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Luxembourg",
        "value": 4052,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Uzbekistan",
        "value": 4741,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Tajikistan",
        "value": 4834,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Finland",
        "value": 7064,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Norway",
        "value": 8608,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Azerbaijan",
        "value": 8882,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Czechia",
        "value": 9855,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Moldova",
        "value": 10727,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Serbia",
        "value": 12102,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Denmark",
        "value": 12222,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Kazakhstan",
        "value": 13872,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Armenia",
        "value": 14669,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Austria",
        "value": 17034,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Israel",
        "value": 18569,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Romania",
        "value": 21182,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Ireland",
        "value": 25238,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Poland",
        "value": 28201,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Ukraine",
        "value": 29706,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Switzerland",
        "value": 31044,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Portugal",
        "value": 35910,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Sweden",
        "value": 48288,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Netherlands",
        "value": 48451,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Belarus",
        "value": 51816,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Belgium",
        "value": 59711,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Turkey",
        "value": 174023,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Germany",
        "value": 186691,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "France",
        "value": 192493,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Italy",
        "value": 236142,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Spain",
        "value": 242707,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "United Kingdom",
        "value": 292860,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Russia",
        "value": 501800,
        "category": 1,
        "color": "#00AFB9"
    }, {
        "name": "Syria",
        "value": 164,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "Libya",
        "value": 393,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "West Bank and Gaza",
        "value": 487,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "Yemen",
        "value": 591,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "Jordan",
        "value": 890,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "Tunisia",
        "value": 1087,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "Lebanon",
        "value": 1402,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "Somalia",
        "value": 2513,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "Djibouti",
        "value": 4398,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "Sudan",
        "value": 6730,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "Morocco",
        "value": 8537,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "Bahrain",
        "value": 16667,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "Iraq",
        "value": 16675,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "Oman",
        "value": 19954,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "Afghanistan",
        "value": 22890,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "Kuwait",
        "value": 34432,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "Egypt",
        "value": 39726,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "United Arab Emirates",
        "value": 40986,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "Qatar",
        "value": 75071,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "Saudi Arabia",
        "value": 116021,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "Pakistan",
        "value": 125933,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "Iran",
        "value": 180156,
        "category": 2,
        "color": "#FED9B7"
    }, {
        "name": "Timor-Leste",
        "value": 24,
        "category": 3,
        "color": "#AED9E0"
    }, {
        "name": "Bhutan",
        "value": 62,
        "category": 3,
        "color": "#AED9E0"
    }, {
        "name": "Burma",
        "value": 260,
        "category": 3,
        "color": "#AED9E0"
    }, {
        "name": "Sri Lanka",
        "value": 1877,
        "category": 3,
        "color": "#AED9E0"
    }, {
        "name": "Maldives",
        "value": 1976,
        "category": 3,
        "color": "#AED9E0"
    }, {
        "name": "Thailand",
        "value": 3125,
        "category": 3,
        "color": "#AED9E0"
    }, {
        "name": "Nepal",
        "value": 4614,
        "category": 3,
        "color": "#AED9E0"
    }, {
        "name": "Indonesia",
        "value": 35295,
        "category": 3,
        "color": "#AED9E0"
    }, {
        "name": "Bangladesh",
        "value": 78052,
        "category": 3,
        "color": "#AED9E0"
    }, {
        "name": "India",
        "value": 297535,
        "category": 3,
        "color": "#AED9E0"
    }, {
        "name": "Papua New Guinea",
        "value": 8,
        "category": 4,
        "color": "#FFA69E"
    }, {
        "name": "Fiji",
        "value": 18,
        "category": 4,
        "color": "#FFA69E"
    }, {
        "name": "Laos",
        "value": 19,
        "category": 4,
        "color": "#FFA69E"
    }, {
        "name": "Cambodia",
        "value": 126,
        "category": 4,
        "color": "#FFA69E"
    }, {
        "name": "Brunei",
        "value": 141,
        "category": 4,
        "color": "#FFA69E"
    }, {
        "name": "Mongolia",
        "value": 197,
        "category": 4,
        "color": "#FFA69E"
    }, {
        "name": "Vietnam",
        "value": 332,
        "category": 4,
        "color": "#FFA69E"
    }, {
        "name": "Taiwan*",
        "value": 443,
        "category": 4,
        "color": "#FFA69E"
    }, {
        "name": "New Zealand",
        "value": 1504,
        "category": 4,
        "color": "#FFA69E"
    }, {
        "name": "Australia",
        "value": 7289,
        "category": 4,
        "color": "#FFA69E"
    }, {
        "name": "Malaysia",
        "value": 8369,
        "category": 4,
        "color": "#FFA69E"
    }, {
        "name": "South Korea",
        "value": 12003,
        "category": 4,
        "color": "#FFA69E"
    }, {
        "name": "Japan",
        "value": 17187,
        "category": 4,
        "color": "#FFA69E"
    }, {
        "name": "Philippines",
        "value": 24175,
        "category": 4,
        "color": "#FFA69E"
    }, {
        "name": "Singapore",
        "value": 39387,
        "category": 4,
        "color": "#FFA69E"
    }, {
        "name": "China",
        "value": 84216,
        "category": 4,
        "color": "#FFA69E"
    }, {
        "name": "Lesotho",
        "value": 4,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Western Sahara",
        "value": 9,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Seychelles",
        "value": 11,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Gambia",
        "value": 28,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Namibia",
        "value": 31,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Eritrea",
        "value": 41,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Botswana",
        "value": 48,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Burundi",
        "value": 85,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Angola",
        "value": 118,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Comoros",
        "value": 162,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Benin",
        "value": 305,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Zimbabwe",
        "value": 332,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Mauritius",
        "value": 337,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Liberia",
        "value": 410,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Eswatini",
        "value": 449,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Malawi",
        "value": 481,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Mozambique",
        "value": 489,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Rwanda",
        "value": 494,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Tanzania",
        "value": 509,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Togo",
        "value": 524,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Sao Tome and Principe",
        "value": 632,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Cabo Verde",
        "value": 657,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Uganda",
        "value": 679,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Congo (Brazzaville)",
        "value": 728,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Chad",
        "value": 848,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Burkina Faso",
        "value": 892,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Niger",
        "value": 974,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Sierra Leone",
        "value": 1085,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Zambia",
        "value": 1200,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Madagascar",
        "value": 1203,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Equatorial Guinea",
        "value": 1306,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Guinea-Bissau",
        "value": 1389,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Mauritania",
        "value": 1439,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "South Sudan",
        "value": 1670,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Mali",
        "value": 1722,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Central African Republic",
        "value": 1952,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Ethiopia",
        "value": 2670,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Kenya",
        "value": 3215,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Gabon",
        "value": 3463,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Guinea",
        "value": 4372,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Cote d'Ivoire",
        "value": 4404,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Congo (Kinshasa)",
        "value": 4515,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Senegal",
        "value": 4759,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Cameroon",
        "value": 8681,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Ghana",
        "value": 10358,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Algeria",
        "value": 10589,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "Nigeria",
        "value": 14554,
        "category": 5,
        "color": "#F07167"
    }, {
        "name": "South Africa",
        "value": 58568,
        "category": 5,
        "color": "#F07167"
    }]
});