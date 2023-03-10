option = {
    backgroundColor:"#001420",
	tooltip: {
		formatter: "{a}年度百分比 : {b}",
		textStyle: {
			color: "#fff",
			fontSize: 15.4
		},
		fontSize: 0.0
	},
	series: [{
		center: ["18.3%", "60%"],
		radius: "65%",
		startAngle: 240,
		endAngle: 30,
		min: 0,
		max: 100,
		splitNumber: 10,
		axisLine: {
			lineStyle: {
				color: [
					["1", (function() {
						return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
							offset: 0,
							color: '#00d5ff'
						}, {
							offset: 1,
							color: '#ffbe00'
						}]);
					})()],
					["1", "#222e7d"]
				],
				width: 10,
				fontSize: 15.0,
				shadowColor: "rgba(0, 213, 255,1)",
				shadowBlur: 180,
				shadowOffsetX: 0,
				shadowOffsetY: 0
			}
		},
		axisTick: {
			length: 10,
			lineStyle: {
				width: 1
			},
			alignWithLabel: false
		},
		axisLabel: {
			textStyle: {
				color: "#00d5ff",
				fontSize: 17.0
			},
			distance: 8
		},
		splitLine: {
			lineStyle: {
				width: 3
			},
			length: 13
		},
		pointer: {
			length: "70%",
			width: 10
		},
		title: {
			fontWeight: "bolder",
			fontSize: 25,
			color: "#fff",
			fontStyle: "italic"
		},
		detail: {
			backgroundColor: "rgba(255, 190, 0, 1)",
			formatter: function(value) {
				return '2018';
			},
			fontSize: 20,
			textColor: "#fff"
		},
		name: "2018",
		type: "gauge",
		z: 3,
		data: [{
			value: 20,
			name: "20%"
		}]
	}, {
		center: ["81.7%", "60%"],
		radius: "65%",
		startAngle: 150,
		endAngle: -60,
		min: 0,
		max: 100,
		splitNumber: 10,
		axisLine: {
			lineStyle: {
				color: [
					["1", (function() {
						return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
							offset: 0,
							color: '#00d5ff'
						}, {
							offset: 1,
							color: '#ffbe00'
						}]);
					})()],
					["1", "#222e7d"]
				],
				width: 10,
				fontSize: 15.0,
				shadowColor: "rgba(0, 213, 255,1)",
				shadowBlur: 60,
				shadowOffsetX: 0,
				shadowOffsetY: 0
			}
		},
		axisTick: {
			length: 10,
			lineStyle: {
				width: 1
			},
			alignWithLabel: false
		},
		axisLabel: {
			textStyle: {
				color: "#00d5ff",
				fontSize: 17.0
			},
			distance: 5
		},
		splitLine: {
			lineStyle: {
				width: 3
			},
			length: 13
		},
		pointer: {
			length: "70%",
			width: 10
		},
		title: {
			fontWeight: "bolder",
			fontSize: 25,
			color: "#fff",
			fontStyle: "italic"
		},
		detail: {
			backgroundColor: "rgba(255, 190, 0, 1)",
			formatter: function(value) {
				return '2020'
			},
			fontSize: 20,
			textColor: "#fff"
		},
		name: "2020",
		type: "gauge",
		z: 3,
		data: [{
			value: 100,
			name: "100%"
		}]
	}, {
		center: ["50%", "57%"],
		radius: "90%",
		min: 0,
		max: 100,
		splitNumber: 10,
		axisLine: {
			lineStyle: {
				color: [
					["1", (function() {
						return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
							offset: 0,
							color: '#00d5ff'
						}, {
							offset: 1,
							color: '#ffbe00'
						}]);
					})()],
					["1", "#222e7d"]
				],
				width: 15,
				fontSize: 20.0,
				shadowColor: "rgba(0, 213, 255,1)",
				shadowBlur: 60,
				shadowOffsetX: 0,
				shadowOffsetY: 0
			}
		},
		axisTick: {
			length: 15,
			lineStyle: {
				width: 1
			},
			alignWithLabel: false
		},
		axisLabel: {
			textStyle: {
				color: "#00d5ff",
				fontSize: 20.0
			},
			distance: 5
		},
		splitLine: {
			lineStyle: {
				width: 3
			},
			length: 17
		},
		pointer: {
			length: "70%",
			width: 10
		},
		title: {
			fontWeight: "bolder",
			fontSize: 30,
			color: "#fff",
			fontStyle: "italic"
		},
		detail: {
			show: true,
			backgroundColor: "rgba(255, 190, 0, 1)",
			formatter: function(value) {
				return '2019';
			},
			fontSize: 25,
			textColor: "#fff"
		},
		name: "2019",
		type: "gauge",
		z: 3,
		data: [{
			value: 50,
			name: "50%"
		}]
	}]
};