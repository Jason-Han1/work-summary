

option = {
    xAxis: {
        min: '0',
        max: '9',
        // splitNumber: 8,//显示的个数
        interval: 1,//隔几个显示
        name: '容积(L)',
        position: 'bottom',
        nameGap: 5, //轴名字距离轴距离
        splitLine: {
            show: false,
        },
        axisLabel: {
            show:false,//显示刻度值
            showMinLabel: false,
            showMaxLabel: false,
            //如果图表高度固定的话可以设置一个的固定值显示在零刻度线下面
            margin:'-150',//原先设置刻度线刻度值位置的方法，前提是当y轴固定情况下。y轴不固定换成了划线标记点方法来实现,但是前提是x轴固定
        },
        axisTick: {
            show: true,
            inside: true,
            // length:5,//刻度线长度
        },
        show: true,
    },
    grid: {
        right: '10%',
    },
    yAxis: {
        min: '15',
        max: '-9',
        axisLabel: {
            showMinLabel: false,
            showMaxLabel: false
        },
        splitNumber: 10,
        axisTick: {
            show: true,
            inside: true
        },
        name: '流速(L/S)',
        splitLine: {
            show: false
        },
        show: true,
    },
    series: [
        
    
        {
            name:'线1-粗',
            type: 'line',
            smooth: true,
            symbol:'none',
            data:[[3.909,0.0],[3.905,-0.25],[3.896,-0.216],[3.889,-0.2],[3.88,-0.216],[3.872,-0.183],[3.87,-0.133],[3.87,0.0],[3.87,0.1],[3.87,0.083],[3.87,-0.05],[3.87,-0.066],[3.87,0.05],[3.87,-0.1],[3.87,-0.116],[3.87,-0.116],[3.87,0.0],[3.87,0.083],[3.87,0.083],[3.87,0.0],[3.87,0.05],[3.87,0.05],[3.87,0.05],[3.87,0.0],[3.87,0.05],[3.87,-0.05],[3.865,-0.283],[3.847,-0.616],[3.792,-1.283],[3.731,-1.683],[3.659,-1.9],[3.581,-2.033],[3.499,-2.05],[3.414,-2.166],[3.325,-2.3],[3.231,-2.366],[3.136,-2.4],[3.039,-2.433],[2.942,-2.416],[2.845,-2.433],[2.746,-2.483],[2.648,-2.433],[2.549,-2.466],[2.451,-2.4],[2.355,-2.5],[2.258,-2.416],[2.162,-2.383],[2.066,-2.383],[1.972,-2.35],[1.88,-2.333],[1.784,-2.416],[1.687,-2.416],[1.59,-2.433],[1.494,-2.4],[1.398,-2.416],[1.302,-2.366],[1.209,-2.333],[1.114,-2.383],[1.019,-2.4],[0.924,-2.383],[0.828,-2.366],[0.734,-2.283],[0.646,-2.183],[0.56,-2.1],[0.479,-1.966],[0.402,-1.816],[0.335,-1.566],[0.279,-1.25],[0.235,-1.0],[0.199,-0.8],[0.17,-0.733],[0.14,-0.75],[0.114,-0.483],[0.106,0.05],[0.106,0.0],[0.106,0.066],[0.108,0.15],[0.114,0.133],[0.113,-0.133],[0.11,-0.066],[0.11,0.083],[0.111,0.116],[0.117,0.166],[0.12,0.05],[0.12,0.0],[0.116,-0.15],[0.112,-0.083],[0.112,0.083],[0.112,0.066],[0.112,0.0],[0.112,-0.083],[0.109,-0.15],[0.101,-0.25],[0.091,-0.25],[0.085,-0.1],[0.085,-0.1],[0.078,-0.183],[0.077,-0.066],[0.077,-0.05],[0.075,-0.216],[0.06,-0.45],[0.039,-0.566],[0.019,-0.466],[0.003,-0.266],[0.004,0.116],[0.004,0.066],[0.005,0.066],[0.0,-0.116],[0.003,0.116],[0.003,0.0],[0.004,0.083],[0.004,-0.05],[0.006,0.116],[0.006,0.0],[0.009,0.116],[0.009,-0.066],[0.01,0.116],[0.015,0.116],[0.015,0.083],[0.015,0.0],[0.015,0.0],[0.015,0.0],[0.015,0.0],[0.015,0.0],[0.015,0.05],[0.015,0.05],[0.015,0.0],[0.015,0.0],[0.015,0.05],[0.015,0.05],[0.015,0.066],[0.015,0.083],[0.015,0.0],[0.015,-0.05],[0.015,-0.116],[0.009,-0.183],[0.01,0.3],[0.13,4.033],[0.372,7.466],[0.706,8.883],[1.067,9.0],[1.415,8.466],[1.745,8.033],[2.039,6.75],[2.272,5.35],[2.467,4.6],[2.635,3.95],[2.785,3.55],[2.917,3.15],[3.034,2.7],[3.136,2.433],[3.227,2.183],[3.308,1.883],[3.38,1.716],[3.445,1.566],[3.506,1.45],[3.562,1.35],[3.614,1.25],[3.661,1.116],[3.703,1.033],[3.743,0.95],[3.78,0.916],[3.815,0.833],[3.847,0.733],[3.873,0.6],[3.897,0.6],[3.92,0.566],[3.942,0.533],[3.962,0.466],[3.979,0.416],[3.995,0.4],[4.009,0.266],[4.015,0.066],[4.016,0.0],[4.018,0.083],[4.021,0.066],[4.02,-0.083],[4.015,-0.1],[4.014,0.05],[4.016,0.0],[4.017,0.05],[4.018,0.05],[4.02,0.05],[4.022,0.05],[4.023,0.0],[4.025,0.05]],//要渲染的坐标
            itemStyle : {  
                normal : {  
                    lineStyle:{  
                        color:'#333333',
                        width: 2,
                    }  
                }  
            }
        },
        {
            name:'线2-细',
            type: 'line',
            smooth: true,
            symbol:'none',
            data:[[3.539,0.0],[3.536,-0.066],[3.536,0.0],[3.533,-0.116],[3.527,-0.133],[3.527,0.083],[3.53,0.066],[3.527,-0.15],[3.519,-0.25],[3.508,-0.266],[3.497,-0.25],[3.487,-0.266],[3.477,-0.266],[3.47,0.0],[3.47,-0.066],[3.47,0.1],[3.47,0.066],[3.47,-0.083],[3.47,-0.1],[3.47,0.0],[3.47,0.0],[3.47,-0.066],[3.47,-0.116],[3.463,-0.3],[3.447,-0.466],[3.425,-0.616],[3.391,-0.9],[3.347,-1.283],[3.285,-1.766],[3.203,-2.2],[3.109,-2.433],[3.011,-2.383],[2.915,-2.4],[2.819,-2.4],[2.723,-2.433],[2.624,-2.45],[2.527,-2.383],[2.428,-2.433],[2.331,-2.45],[2.233,-2.416],[2.136,-2.433],[2.037,-2.45],[1.94,-2.433],[1.843,-2.4],[1.747,-2.383],[1.65,-2.45],[1.552,-2.516],[1.453,-2.516],[1.355,-2.416],[1.259,-2.416],[1.162,-2.4],[1.067,-2.366],[0.976,-2.25],[0.884,-2.35],[0.789,-2.366],[0.695,-2.333],[0.603,-2.266],[0.515,-2.2],[0.43,-2.083],[0.348,-1.966],[0.274,-1.733],[0.209,-1.55],[0.151,-1.333],[0.105,-0.966],[0.074,-0.6],[0.057,-0.333],[0.048,-0.166],[0.041,-0.183],[0.033,-0.25],[0.02,-0.35],[0.009,-0.183],[0.008,-0.116],[0.001,-0.15],[0.0,0.05],[0.0,-0.083],[0.0,0.066],[0.0,0.066],[0.01,0.466],[0.098,2.983],[0.274,5.566],[0.539,7.166],[0.835,7.483],[1.138,7.633],[1.446,7.833],[1.757,7.616],[2.044,6.766],[2.275,5.183],[2.466,4.55],[2.643,4.266],[2.805,3.833],[2.95,3.45],[3.076,2.883],[3.183,2.516],[3.276,2.166],[3.355,1.85],[3.424,1.616],[3.485,1.433],[3.537,1.25],[3.585,1.15],[3.629,1.05],[3.67,1.016],[3.709,0.95],[3.747,0.9],[3.78,0.8],[3.811,0.75],[3.84,0.7],[3.867,0.633],[3.891,0.566],[3.911,0.466],[3.927,0.35],[3.94,0.3],[3.95,0.216],[3.959,0.266],[3.971,0.283],[3.982,0.3],[3.994,0.283],[4.005,0.233],[4.013,0.15],[4.018,0.15],[4.026,0.2],[4.033,0.166],[4.038,0.083],[4.042,0.116],[4.047,0.1],[4.048,0.0],[4.049,0.05],[4.05,0.0],[4.053,0.133],[4.059,0.15],[4.064,0.116],[4.068,0.066],[4.068,-0.05],[4.067,0.0],[4.067,0.0],[4.067,0.05],[4.069,0.0],[4.07,0.05],[4.071,0.0],[4.071,0.0],[4.071,0.0],[4.071,0.0],[4.071,0.0],[4.067,-0.25],[4.058,-0.216],[4.051,-0.2],[4.042,-0.216],[4.034,-0.183],[4.032,-0.133],[4.032,0.0],[4.032,0.1],[4.032,0.083],[4.032,-0.05],[4.032,-0.066],[4.032,0.05],[4.032,-0.1],[4.032,-0.116],[4.032,-0.116],[4.032,0.0],[4.032,0.083],[4.032,0.083],[4.032,0.0],[4.032,0.05],[4.032,0.05],[4.032,0.05],[4.032,0.0],[4.032,0.05],[4.032,-0.05],[4.027,-0.283],[4.009,-0.616],[3.954,-1.283],[3.893,-1.683],[3.821,-1.9],[3.743,-2.033],[3.661,-2.05],[3.576,-2.166],[3.487,-2.3],[3.393,-2.366],[3.298,-2.4],[3.201,-2.433],[3.104,-2.416],[3.007,-2.433],[2.908,-2.483],[2.81,-2.433],[2.711,-2.466],[2.613,-2.4],[2.517,-2.5],[2.42,-2.416],[2.324,-2.383],[2.228,-2.383],[2.134,-2.35],[2.042,-2.333],[1.946,-2.416],[1.849,-2.416],[1.752,-2.433],[1.656,-2.4],[1.56,-2.416],[1.464,-2.366],[1.371,-2.333],[1.276,-2.383],[1.181,-2.4],[1.086,-2.383],[0.99,-2.366],[0.896,-2.283],[0.808,-2.183],[0.722,-2.1],[0.641,-1.966],[0.564,-1.816],[0.497,-1.566],[0.441,-1.25],[0.397,-1.0],[0.361,-0.8],[0.332,-0.733],[0.302,-0.75],[0.276,0.0]],
            itemStyle : {  
                normal : {  
                    lineStyle:{  
                        color:'#333333',
                        width: 1,
                    }  
                }  
            }
       
        }
    ] 
};