let markLineData = []
let source =  [
            ['product', '2015', '2016'],
            ['系列1-1', 43.3],
            ['系列1-2', 83.1],
            ['系列1-3', 86.4],
            ['系列1-4', 72.4],
            ['系列1-5', 72.4],
            ['系列2-1', 53.9],
            ['系列2-2', 85.8],
            ['系列2-3', 145.8],
        ]

 // 添加“其他”
 addOtherData(source,3);

option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: source
    },
    series: [{
            type: 'pie',
            radius: "50%",
            center: ['25%', '50%'],
            label: {
                show: true,
                position: "inside",
            },
            startAngle: 45, // 起始角度 45 
            clockwise: false, // 逆时针 
            markLine:{
              lineStyle: {
                type: 'solid',
                color:"#BFBFBF"
              },
              symbol: 'none',
              data:markLineData
            }
        },
        {
            type: 'pie',
            radius: "30%",
            center: ['75%', '50%'],
            encode: {
                itemName: 'product',
                value: '2016',
            },
            label: {
                show: true,
                position: "inside"
            },
        }
    ]
};

// 获取表标线 对应点坐标
function getMarkLineData(percent) {
    // 1.获取画布 width,height
      let height = myChart.getHeight()
      let width = myChart.getWidth() 
        
    // 2.  根据 series[0].center 获取圆心坐标
      let x0 = width*0.25 // 圆心x轴坐标
    
    //3.圆边上点坐标
      // let x1   =   x0   +   r   *   cos(ao   *   3.14   /180   )
      // let y1   =   y0   +   r   *   sin(ao   *   3.14   /180   )
    
    // “其他” 终点坐标series[0].startAngle 45
      let x1 = x0 + (height/4) * Math.cos(45 * 3.14 / 180)
      let y1 = (height*0.5)   -   (height/4)   *   Math.sin(45   *   3.14   /180   )
      
      let ao = 360 * (percent/100) // 扇形角度
      
      let ao1 = 0 // 用来计算的坐标角度
      ao1=(ao<=45)?(45-ao):(360-(ao-45))
      if(ao1<270 && ao1>45)ao1=270 // 角度当270用，要不样式不好看
      
      let x2=0,y2=0;
      x2=x0 + (height/4) * Math.cos(ao1 * 3.14 / 180)
      y2 = (height*0.5)  -   (height/4)   *   Math.sin(ao1   *   3.14   /180   )
      
      return [[{x:x1,y:y1},{x: "75%", y: "35%"}],[{x:x2,y:y2},{x: "75%", y: "65%"}]]
}
// 添加其他 
function addOtherData(datasetSource,len){
     let percent = 0
      let sum=0 // 总计
      datasetSource.forEach((data,rowIndex)=>{
          if(rowIndex>0){ // 第一行数据不算
                let count=0
                for(let key of data){
                  let value = isNaN(key)?0:Number(key)
                  if(count===1)sum+=value
                  count++
                }
          }
      })
      let endData = datasetSource.slice(datasetSource.length-len)
      let other = ["其他"]
      for(let i=0;i<endData.length;i++){
        let j=0;
          for(let key of endData[i]){
            let value = isNaN(key)?0:key
            if(j)other[j]?(other[j]+=value):other.push(value)
            j++
          }
        endData[i].splice(1,0,"")
      }
      datasetSource.push(other)
      // "其他"占比
      percent = sum?((other[1]/sum)*100).toFixed(2):100
      markLineData = getMarkLineData(percent)
    }