option = {
    backgroundColor:"#0E233E",
    "series":[
        {
            "data":[
                {
                    "name":"name1",
                    "value":3,
                    "itemStyle":{
                        "color":{
                            "type":"radial",
                            "x":0.5,
                            "y":0.5,
                            "r":0.5,
                            "colorStops":[
                                {
                                    "offset":0,
                                    "color":"rgba(60,173,243,0)"
                                },
                                {
                                    "offset":1,
                                    "color":"rgba(60,173,243,0.5)"
                                }
                            ],
                            "global":false
                        },
                        "borderColor":"#3CADF3",
                        "borderWidth":2
                    }
                },
                {
                    "name":"name2",
                    "value":1,
                    "itemStyle":{
                        "color":{
                            "type":"radial",
                            "x":0.5,
                            "y":0.5,
                            "r":0.5,
                            "colorStops":[
                                {
                                    "offset":0,
                                    "color":"rgba(60,173,243,0)"
                                },
                                {
                                    "offset":1,
                                    "color":"rgba(60,173,243,0.5)"
                                }
                            ],
                            "global":false
                        },
                        "borderColor":"#3CADF3",
                        "borderWidth":2
                    }
                },
                {
                    "name":"name4",
                    "value":1,
                    "itemStyle":{
                        "color":{
                            "type":"radial",
                            "x":0.5,
                            "y":0.5,
                            "r":0.5,
                            "colorStops":[
                                {
                                    "offset":0,
                                    "color":"rgba(60,173,243,0)"
                                },
                                {
                                    "offset":1,
                                    "color":"rgba(60,173,243,0.5)"
                                }
                            ],
                            "global":false
                        },
                        "borderColor":"#3CADF3",
                        "borderWidth":2
                    }
                },
                {
                    "name":"name3",
                    "value":1,
                    "itemStyle":{
                        "color":{
                            "type":"radial",
                            "x":0.5,
                            "y":0.5,
                            "r":0.5,
                            "colorStops":[
                                {
                                    "offset":0,
                                    "color":"rgba(60,173,243,0)"
                                },
                                {
                                    "offset":1,
                                    "color":"rgba(60,173,243,0.5)"
                                }
                            ],
                            "global":false
                        },
                        "borderColor":"#3CADF3",
                        "borderWidth":2
                    }
                },
                {
                    "name":"name5",
                    "value":"66",
                    "itemStyle":{
                        "color":{
                            "type":"radial",
                            "x":0.5,
                            "y":0.5,
                            "r":0.5,
                            "colorStops":[
                                {
                                    "offset":0,
                                    "color":"rgba(112,67,232,0)"
                                },
                                {
                                    "offset":1,
                                    "color":"rgba(112,67,232,0.5)"
                                }
                            ],
                            "global":false
                        },
                        "borderColor":"#7043E8",
                        "borderWidth":2
                    }
                }
            ],
            "layout":"force",
            "symbol":"circle",
            symbolSize:70,
            "roam":false,
            "focusNodeAdjacency":false,
            "label":{
                "normal":{
                    "show":true,
                    "formatter":"{b}",
                    "color":"#fff",
                    "position":"inside"
                }
            },
            "edgeSymbol":[
                "",
                "arrow"
            ],
            "edgeSymbolSize":[
                1,
                9
            ],
            "type":"graph",
            "links":[
                {
                    "source":"name1",
                    "target":"name2",
                    "value":"2400000",
                    "lineStyle":{
                        "normal":{
                            "opacity":1,
                            "width":10,
                            "type":"dotted",
                            "curveness":0.3,
                            "color":"#04A9F8"
                        }
                    }
                },
                {
                    "source":"name1",
                    "target":"name3",
                    "value":"39",
                    "lineStyle":{
                        "normal":{
                            "opacity":1,
                            "width":6,
                            "type":"dotted",
                            "curveness":0.3,
                            "color":"#04A9F8"
                        }
                    }
                },
                {
                    "source":"name2",
                    "target":"name3",
                    "value":"39",
                    "lineStyle":{
                        "normal":{
                            "opacity":1,
                            "width":1,
                            "type":"dotted",
                            "curveness":0.3,
                            "color":"#04A9F8"
                        }
                    }
                },
                {
                    "source":"name4",
                    "target":"name5",
                    "value":"69",
                    "lineStyle":{
                        "normal":{
                            "opacity":1,
                            "width":1,
                            "type":"dotted",
                            "curveness":0.3,
                            "color":"#04A9F8"
                        }
                    }
                },
                {
                    "source":"name3",
                    "target":"name5",
                    "value":"39",
                    "lineStyle":{
                        "normal":{
                            "opacity":1,
                            "width":1,
                            "type":"dotted",
                            "curveness":0.3,
                            "color":"#04A9F8"
                        }
                    }
                }
            ],
            "force":{
                "repulsion":[
                    100,
                    600
                ],
                "edgeLength":[
                    50,
                    380
                ],
                "layoutAnimation":true
            }
        }
    ]
}