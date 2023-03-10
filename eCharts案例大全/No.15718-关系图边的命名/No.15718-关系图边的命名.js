var option = {
		title : {
			text : '自动机'
		},
		tooltip : {},
		animationDurationUpdate : 1500,
		animationEasingUpdate : 'quinticInOut',
		series : [ {
			type : 'graph',
			layout : 'none',
			symbolSize : 50,
			roam : false,
			label : {
				normal : {
					show : true
				}
			},
			edgeSymbol : [ 'circle', 'arrow' ],
			edgeSymbolSize : [ 4, 10 ],
			edgeLabel : {
				normal : {
					textStyle : {
						fontSize : 20
					}
				}
			},
			data : [ {
				name : 'I0',
				x : 300,
				y : 300
			}, {
				name : '节点1',
				x : 700,
				y : 300
			}, {
				name : '节点2',
				x : 800,
				y : 300
			}, {
				name : '节点3',
				x : 550,
				y : 100
			}, {
				name : '节点4',
				x : 550,
				y : 500
			} ],
			// links: [],
			links : [ {
				source : 0,
				target : 1,
				name : '开展',
				tooltip : {trigger: 'item',
					formatter: function(params, ticket, callback) {
			            return params.data.name;
			        }
				},
				symbolSize : [ 5, 20 ],
				label : {
					normal : {
						formatter: function(params, ticket, callback) {
							params.name=params.data.name;
							return params.name;
				        },
						show : true
					}
				},
				lineStyle : {
					normal : {
						width : 5,
						curveness : 0.2
					}
				}
			}, {
				source : '节点2',
				target : '节点1',
				label : {
					normal : {
						show : true
					}
				},
				lineStyle : {
					normal : {
						curveness : 0.2
					}
				}
			}, {
				source : '节点1',
				target : '节点3'
			}, {
				source : '节点2',
				target : '节点3'
			}, {
				source : '节点2',
				target : '节点4'
			}, {
				source : '节点1',
				target : '节点4',
				name : '开展',
				tooltip : {trigger: 'item',
					formatter: function(params, ticket, callback) {
			            return params.data.name;
			        }
				}
			} ],
			lineStyle : {
				normal : {
					opacity : 0.9,
					width : 2,
					curveness : 0
				}
			}
		} ]
	};
	myChart.setOption(option);