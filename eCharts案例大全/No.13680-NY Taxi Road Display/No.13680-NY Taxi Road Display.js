  $.getJSON('/asset/get/s/data-1524055280228-SkugT242f.json', function(regionsData) {
      // myChart.hideLoading();
      var data = regionsData.features;
      var hStep = 300 / (data.length - 1);
      var taxiRoutes = [];
      var i = 0;
      for (var x in data) {
          var lnglats = data[x].geometry.coordinates
          //if(taxiRoutes.length<500)
          taxiRoutes.push({
              coords: lnglats,
              lineStyle: {
                  color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * x))

              }
          })
      }
      var option = {
          maptalks3D: {
              center: [-74.01164278497646, 40.70769573605318],
              zoom: 14,
              pitch: 55,
              urlTemplate: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
              altitudeScale: 2,
              postEffect: {
                  enable: true,
                  FXAA: {
                      enable: true
                  }
              },
              light: {
                  main: {
                      intensity: 1,
                      shadow: true,
                      shadowQuality: 'high'
                  },
                  ambient: {
                      intensity: 0.
                  },
                  ambientCubemap: {
                      texture: '/asset/get/s/data-1491838644249-ry33I7YTe.hdr',
                      exposure: 1,
                      diffuseIntensity: 0.5,
                      specularIntensity: 2
                  }
              }
          },
          series: [{
              type: 'lines3D',
              coordinateSystem: 'maptalks3D',
              effect: {
                  show: true,
                  constantSpeed: 1,
                  trailWidth: 3,
                  trailLength: 1,
                  trailOpacity: 1,
                  spotIntensity: 10
              },
              blendMode: 'lighter',
              polyline: true,
              lineStyle: {
                  width: 5,
                  color: 'rgb(100, 100, 0)',
                  opacity: 0.
              },
              data: taxiRoutes
          }]
      }
      myChart.setOption(option);
      window.addEventListener('resize', function() {
          myChart.resize();
      });
  });