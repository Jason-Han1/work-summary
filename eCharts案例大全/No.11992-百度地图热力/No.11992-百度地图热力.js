var uploadedDataURL = "/asset/get/s/data-1551945994581-C9lvvQ-Yz.geojson";

$.getJSON(uploadedDataURL, function(data){
    echarts.registerMap('yizhuang', data);
    var points = [
  [116.5159, 39.8104],
  [116.4991, 39.8094],
  [116.5403, 39.8087],
  [116.5162, 39.8143],
  [116.5123, 39.8186],
  [116.5225, 39.8148],
  [116.5362, 39.756],
  [116.5334, 39.7516],
  [116.5388, 39.7262],
  [116.5285, 39.7796],
  [116.58, 39.8022],
  [116.581, 39.8023],
  [116.5338, 39.7742],
  [116.5274, 39.7754],
  [116.5302, 39.7712],
  [116.533, 39.7493],
  [116.5798, 39.8022],
  [116.5206, 39.7677],
  [116.5206, 39.7677],
  [116.54, 39.7478],
  [116.5395, 39.7231],
  [116.518, 39.7902],
  [116.5174, 39.7985],
  [116.5344, 39.7511],
  [116.5374, 39.7405],
  [116.5701, 39.8055],
  [116.5304, 39.8002],
  [116.534, 39.7511],
  [116.5304, 39.8002],
  [116.541, 39.7622],
  [116.5319, 39.7528],
  [116.5274, 39.7754],
  [116.5344, 39.7511],
  [116.5344, 39.7511],
  [116.5392, 39.7569],
  [116.5392, 39.7314],
  [116.5388, 39.757],
  [116.5341, 39.7401],
  [116.5131, 39.7835],
  [116.5035, 39.7952],
  [116.5011, 39.7639],
  [116.5055, 39.7672],
  [116.5055, 39.7643],
  [116.4926, 39.7594],
  [116.4919, 39.758],
  [116.4841, 39.7997],
  [116.5127, 39.7956],
  [116.5018, 39.7715],
  [116.5127, 39.7956],
  [116.5018, 39.7644],
  [116.486, 39.7992],
  [116.4952, 39.8005],
  [116.4907, 39.803],
  [116.4898, 39.7986],
  [116.4919, 39.7988],
  [116.4898, 39.7986],
  [116.5126, 39.789],
  [116.4898, 39.7986],
  [116.4898, 39.7986],
  [116.4955, 39.7445],
  [116.5044, 39.799],
  [116.5043, 39.8023],
  [116.4955, 39.7445],
  [116.4893, 39.7984],
  [116.4893, 39.7984],
  [116.4981, 39.802],
  [116.4974, 39.7692],
  [116.4962, 39.7608],
  [116.5073, 39.7996],
  [116.4975, 39.7559],
  [116.5052, 39.7639],
  [116.5045, 39.7674],
  [116.5, 39.7682],
  [116.4898, 39.7986],
  [116.5087, 39.8046],
  [116.484, 39.802],
  [116.5062, 39.7679],
  [116.4898, 39.7986],
  [116.4854, 39.8017],
  [116.4919, 39.8008],
  [116.5061, 39.7675],
  [116.4893, 39.7984],
  [116.5144, 39.8207],
  [116.5496, 39.8098],
  [116.5504, 39.8098],
  [116.5315, 39.7695],
  [116.5654, 39.8016],
  [116.5187, 39.7824],
  [116.5647, 39.8016],
  [116.5193, 39.7827],
  [116.5163, 39.7966],
  [116.5723, 39.8016],
  [116.565, 39.8016],
  [116.5182, 39.7767],
  [116.5348, 39.8017],
  [116.5653, 39.8016],
  [116.5657, 39.8024],
  [116.5143, 39.7787],
  [116.5154, 39.7795],
  [116.5053, 39.7928],
  [116.4963, 39.7689],
  [116.5011, 39.7988],
  [116.5018, 39.8],
  [116.4887, 39.7981],
  [116.5023, 39.7993],
  [116.4974, 39.7984],
  [116.5048, 39.7932],
  [116.5026, 39.8003],
  [116.4846, 39.8003],
  [116.4892, 39.7985],
  [116.5016, 39.8003],
  [116.5117, 39.7833],
  [116.5058, 39.7931],
  [116.5027, 39.7945],
  [116.4875, 39.8024],
  [116.4853, 39.8014],
  [116.5032, 39.7961],
  [116.5028, 39.7996],
  [116.4984, 39.7682],
  [116.5007, 39.7993],
  [116.4878, 39.8026],
  [116.4972, 39.8009],
  [116.5016, 39.8002],
  [116.4919, 39.7569],
  [116.4849, 39.8012],
  [116.4976, 39.8008],
  [116.504, 39.7973],
  [116.5048, 39.763],
  [116.5038, 39.7978],
  [116.5039, 39.7975],
  [116.4884, 39.803],
  [116.5015, 39.8004],
  [116.51, 39.7854],
  [116.5198, 39.8142],
  [116.5716, 39.8022],
  [116.5323, 39.7684],
  [116.5159, 39.7977],
  [116.5344, 39.7646],
  [116.5742, 39.8022],
  [116.5457, 39.7683],
  [116.5219, 39.7672],
  [116.5219, 39.7672],
  [116.5021, 39.7956],
  [116.5036, 39.7956],
  [116.5009, 39.7936],
  [116.4907, 39.803],
  [116.4998, 39.7997],
  [116.5004, 39.7971],
  [116.5021, 39.7967],
  [116.4999, 39.7977],
  [116.5126, 39.789],
  [116.4951, 39.7549],
  [116.5016, 39.8002],
  [116.4987, 39.768],
  [116.4981, 39.802],
  [116.5006, 39.794],
  [116.4998, 39.7997],
  [116.5011, 39.7979],
  [116.5014, 39.8011],
  [116.5006, 39.794],
  [116.4963, 39.7689],
  [116.5004, 39.7971],
  [116.4981, 39.802],
  [116.4971, 39.8011],
  [116.5024, 39.8113],
  [116.542, 39.8129],
  [116.5102, 39.8202],
  [116.5043, 39.8222],
  [116.5259, 39.8114],
  [116.5392, 39.816],
  [116.5187, 39.8119],
  [116.5023, 39.8113],
  [116.5402, 39.8087],
  [116.5365, 39.8156],
  [116.5175, 39.8123],
  [116.5413, 39.8168],
  [116.5399, 39.8085],
  [116.5013, 39.8104],
  [116.5407, 39.8089],
  [116.5359, 39.8153],
  [116.533, 39.7704],
  [116.516, 39.783],
  [116.5578, 39.7962],
  [116.5334, 39.7698],
  [116.5732, 39.8063],
  [116.5169, 39.7767],
  [116.5337, 39.7661],
  [116.5439, 39.764],
  [116.5441, 39.7643],
  [116.5164, 39.78],
  [116.5385, 39.7225],
  [116.5652, 39.8016],
  [116.5396, 39.8085],
  [116.5387, 39.7242],
  [116.5598, 39.7972],
  [116.5596, 39.7971],
  [116.4998, 39.7982],
  [116.4841, 39.8004],
  [116.51, 39.7854],
  [116.4974, 39.7984],
  [116.5117, 39.7833],
  [116.4945, 39.7985],
  [116.5027, 39.7945],
  [116.4853, 39.7995],
  [116.5016, 39.7639],
  [116.4852, 39.7998],
  [116.5008, 39.7978],
  [116.4993, 39.8006],
  [116.4853, 39.8003],
  [116.5049, 39.7991],
  [116.4927, 39.8001],
  [116.5082, 39.7881],
  [116.5116, 39.7844],
  [116.4923, 39.8005],
  [116.4989, 39.8073],
  [116.506, 39.797],
  [116.5042, 39.7637],
  [116.4925, 39.8],
  [116.5095, 39.8025],
  [116.4954, 39.8006],
  [116.4931, 39.8002],
  [116.515, 39.8207],
  [116.5323, 39.8229],
  [116.5152, 39.8207],
  [116.5042, 39.8222],
  [116.5768, 39.8023],
  [116.5503, 39.8016],
  [116.5334, 39.7548],
  [116.5739, 39.799],
  [116.5327, 39.7699],
  [116.5342, 39.7511],
  [116.515, 39.7731],
  [116.5509, 39.8041],
  [116.5725, 39.8021],
  [116.5503, 39.8005],
  [116.54, 39.7606],
  [116.5493, 39.8036],
  [116.5756, 39.8021],
  [116.5349, 39.7427],
  [116.5339, 39.77],
  [116.538, 39.7561],
  [116.5387, 39.7245],
  [116.5392, 39.7394],
  [116.538, 39.7558],
  [116.5137, 39.7736],
  [116.5756, 39.8021],
  [116.5752, 39.8024],
  [116.5738, 39.7995],
  [116.5139, 39.7725],
  [116.5144, 39.7725],
  [116.581, 39.8017],
  [116.5695, 39.8064],
  [116.5657, 39.8016],
  [116.5503, 39.8005],
  [116.5401, 39.761],
  [116.5391, 39.739],
  [116.5312, 39.7415],
  [116.5767, 39.7994],
  [116.5391, 39.7405],
  [116.5587, 39.7971],
  [116.5036, 39.7987],
  [116.4911, 39.8003],
  [116.4907, 39.803],
  [116.5016, 39.8005],
  [116.4958, 39.8007],
  [116.4961, 39.7608],
  [116.5051, 39.763],
  [116.4896, 39.7989],
  [116.5068, 39.765],
  [116.489, 39.7987],
  [116.4893, 39.7984],
  [116.486, 39.7994],
  [116.4912, 39.7713],
  [116.4915, 39.7588],
  [116.4955, 39.8006],
  [116.4889, 39.7987],
  [116.4827, 39.804],
  [116.4961, 39.7608],
  [116.4842, 39.8004],
  [116.4877, 39.8025],
  [116.5039, 39.8212],
  [116.517, 39.8122],
  [116.5102, 39.8202],
  [116.5035, 39.8209],
  [116.5034, 39.8212],
  [116.5022, 39.8218],
  [116.5007, 39.8143],
  [116.496, 39.8106],
  [116.5035, 39.8211],
  [116.5031, 39.8217],
  [116.5152, 39.8207],
  [116.5158, 39.8207],
  [116.5102, 39.8202],
  [116.4991, 39.812],
  [116.4959, 39.813],
  [116.535, 39.815],
  [116.5039, 39.8222],
  [116.4973, 39.81],
  [116.4975, 39.8094],
  [116.4975, 39.8094],
  [116.4975, 39.8094],
  [116.5102, 39.8202],
  [116.504, 39.8222],
  [116.5777, 39.8022],
  [116.5456, 39.8044],
  [116.5143, 39.8058],
  [116.5213, 39.7652],
  [116.5441, 39.7649],
  [116.5334, 39.7698],
  [116.5715, 39.8079],
  [116.5381, 39.7569],
  [116.5345, 39.7704],
  [116.5758, 39.8016],
  [116.5334, 39.7698],
  [116.5751, 39.8068],
  [116.5166, 39.7694],
  [116.5739, 39.8016],
  [116.5399, 39.7585],
  [116.5389, 39.7608],
  [116.5351, 39.7511],
  [116.536, 39.7537],
  [116.5334, 39.7698],
  [116.5404, 39.7612],
  [116.5334, 39.7698],
  [116.5334, 39.7698],
  [116.5741, 39.8016],
  [116.5781, 39.8022],
  [116.5726, 39.8075],
  [116.5413, 39.7625],
  [116.578, 39.8022],
  [116.5756, 39.8016],
  [116.5768, 39.8009],
  [116.5591, 39.7972],
  [116.548, 39.8044],
  [116.5334, 39.7698],
  [116.5334, 39.7698],
  [116.5481, 39.8018],
  [116.5586, 39.7966],
  [116.5586, 39.7966],
  [116.5201, 39.7978],
  [116.5153, 39.7785],
  [116.536, 39.751],
  [116.5394, 39.7354],
  [116.5391, 39.7411],
  [116.5724, 39.8022],
  [116.5354, 39.743],
  [116.4872, 39.8068],
  [116.4859, 39.7995],
  [116.4853, 39.8005],
  [116.4916, 39.8007],
  [116.4913, 39.801],
  [116.51, 39.7854],
  [116.51, 39.7854],
  [116.4907, 39.7989],
  [116.51, 39.7854],
  [116.4974, 39.7984],
  [116.4909, 39.799],
  [116.5103, 39.7857],
  [116.49, 39.7986],
  [116.4904, 39.7988],
  [116.51, 39.7854],
  [116.5117, 39.7833],
  [116.5027, 39.7945],
  [116.5027, 39.7945],
  [116.4945, 39.7985],
  [116.4945, 39.7985],
  [116.4945, 39.7985],
  [116.4974, 39.7984],
  [116.4861, 39.7992],
  [116.4865, 39.8018],
  [116.4858, 39.7996],
  [116.4794, 39.8033],
  [116.4949, 39.7678],
  [116.5041, 39.7647],
  [116.4854, 39.8005],
  [116.4974, 39.7984],
  [116.4974, 39.7984],
  [116.4974, 39.7984],
  [116.4974, 39.7984],
  [116.51, 39.7854],
  [116.51, 39.7854],
  [116.4974, 39.7984],
  [116.4974, 39.7984],
  [116.4974, 39.7984],
  [116.5027, 39.7945],
  [116.5027, 39.7945],
  [116.5027, 39.7945],
  [116.51, 39.7854],
  [116.5027, 39.7945],
  [116.5027, 39.7945],
  [116.51, 39.7854],
  [116.51, 39.7854],
  [116.5117, 39.7833],
  [116.4952, 39.8005],
  [116.4945, 39.7985],
  [116.51, 39.7854],
  [116.4898, 39.7986],
  [116.51, 39.7854],
  [116.5027, 39.7945],
  [116.51, 39.7854],
  [116.4974, 39.7984],
  [116.5072, 39.7672],
  [116.4974, 39.7984],
  [116.4974, 39.7984],
  [116.4967, 39.7968],
  [116.4946, 39.7952],
  [116.497, 39.7951],
  [116.4872, 39.8023],
  [116.4891, 39.7986],
  [116.4878, 39.8038],
  [116.5117, 39.7833],
  [116.5, 39.7945],
  [116.4863, 39.8018],
  [116.4913, 39.801],
  [116.4893, 39.7984],
  [116.5047, 39.79],
  [116.4963, 39.7608],
  [116.4906, 39.7989],
  [116.4929, 39.8001],
  [116.4959, 39.7999],
  [116.4945, 39.7985],
  [116.4835, 39.8042],
  [116.5101, 39.7851],
  [116.5027, 39.7945],
  [116.5027, 39.7945],
  [116.4966, 39.7607],
  [116.507, 39.7682],
  [116.5027, 39.7945],
  [116.5016, 39.8005],
  [116.4855, 39.8005],
  [116.5065, 39.7673],
  [116.51, 39.7854],
  [116.5107, 39.8203],
  [116.4932, 39.8171],
  [116.4975, 39.8097],
  [116.4975, 39.8098],
  [116.5173, 39.812],
  [116.5172, 39.8121],
  [116.549, 39.81],
  [116.5258, 39.8114],
  [116.5256, 39.8113],
  [116.5181, 39.8117],
  [116.4973, 39.81],
  [116.5328, 39.8139],
  [116.4975, 39.8094],
  [116.5171, 39.8123],
  [116.4975, 39.8094],
  [116.4975, 39.8094],
  [116.4975, 39.8094],
  [116.4973, 39.81],
  [116.4975, 39.8099],
  [116.5013, 39.8104],
  [116.4931, 39.817],
  [116.5176, 39.8118],
  [116.5359, 39.754],
  [116.5767, 39.8002],
  [116.5384, 39.7562],
  [116.5344, 39.7511],
  [116.5196, 39.7829],
  [116.5334, 39.771],
  [116.5337, 39.7712],
  [116.534, 39.7714],
  [116.538, 39.7558],
  [116.5336, 39.7712],
  [116.5381, 39.7565],
  [116.5384, 39.7558],
  [116.5768, 39.8013],
  [116.5769, 39.8011],
  [116.5737, 39.7997],
  [116.5768, 39.8014],
  [116.538, 39.756],
  [116.535, 39.7511],
  [116.5316, 39.7693],
  [116.5319, 39.7704],
  [116.5311, 39.77],
  [116.5723, 39.8022],
  [116.5316, 39.7703],
  [116.5769, 39.7989],
  [116.5399, 39.7579],
  [116.5381, 39.7568],
  [116.5724, 39.8022],
  [116.566, 39.8017],
  [116.5733, 39.8016],
  [116.5644, 39.8024],
  [116.5334, 39.7698],
  [116.5334, 39.7698],
  [116.5768, 39.8008],
  [116.5739, 39.7986],
  [116.5176, 39.7931],
  [116.5598, 39.7978],
  [116.5171, 39.7934],
  [116.5385, 39.7563],
  [116.5425, 39.7635],
  [116.5352, 39.7511],
  [116.5355, 39.7511],
  [116.5769, 39.8005],
  [116.5402, 39.7599],
  [116.5452, 39.8048],
  [116.5349, 39.7423],
  [116.5174, 39.7933],
  [116.5169, 39.7933],
  [116.517, 39.7933],
  [116.5384, 39.7559],
  [116.5385, 39.7566],
  [116.5768, 39.8006],
  [116.5325, 39.7706],
  [116.5393, 39.8084],
  [116.5767, 39.8],
  [116.5401, 39.8087],
  [116.5639, 39.8024],
  [116.5509, 39.8045],
  [116.5732, 39.8016],
  [116.5381, 39.757],
  [116.5384, 39.7561],
  [116.5331, 39.7709],
  [116.5399, 39.7582],
  [116.5196, 39.7829],
  [116.5397, 39.7596],
  [116.5385, 39.7567],
  [116.5163, 39.7802],
  [116.5373, 39.7593],
  [116.5381, 39.7567],
  [116.5173, 39.7934],
  [116.5391, 39.7293],
  [116.5386, 39.7568],
  [116.5768, 39.7992],
  [116.5644, 39.8025],
  [116.5761, 39.8016],
  [116.5385, 39.7563],
  [116.5399, 39.7586],
  [116.5349, 39.7427],
  [116.5143, 39.8058],
  [116.5386, 39.7569],
  [116.5587, 39.7967],
  [116.5597, 39.7978],
  [116.5352, 39.7511],
  [116.5594, 39.797],
  [116.5595, 39.797],
  [116.5313, 39.7696],
  [116.5618, 39.7818],
  [116.5644, 39.8017],
  [116.5357, 39.7511],
  [116.558, 39.7963],
  [116.5036, 39.7984],
  [116.4973, 39.7629],
  [116.4994, 39.8076],
  [116.4995, 39.801],
  [116.5029, 39.7986],
  [116.5031, 39.7985],
  [116.5033, 39.7984],
  [116.512, 39.7833],
  [116.4853, 39.7996],
  [116.4852, 39.7997],
  [116.4856, 39.7992],
  [116.5002, 39.808],
  [116.483, 39.8041],
  [116.51, 39.7854],
  [116.4998, 39.8079],
  [116.4858, 39.799],
  [116.4995, 39.8077],
  [116.51, 39.7854],
  [116.51, 39.7854],
  [116.4974, 39.7984],
  [116.4974, 39.7984],
  [116.4891, 39.7983],
  [116.4953, 39.8005],
  [116.5027, 39.7945],
  [116.5117, 39.7833],
  [116.5052, 39.7958],
  [116.4992, 39.8013],
  [116.5031, 39.7631],
  [116.4974, 39.7984],
  [116.4851, 39.7998],
  [116.5063, 39.7651],
  [116.4893, 39.7984],
  [116.4865, 39.7988],
  [116.5, 39.8079],
  [116.4878, 39.8037],
  [116.4881, 39.8028],
  [116.4997, 39.8078],
  [116.4893, 39.7984],
  [116.506, 39.797],
  [116.5052, 39.7963],
  [116.5053, 39.7928],
  [116.51, 39.7854],
  [116.51, 39.7854],
  [116.51, 39.7854],
  [116.4847, 39.8012],
  [116.4974, 39.7631],
  [116.4954, 39.7999],
  [116.4961, 39.8003],
  [116.4953, 39.8],
  [116.5049, 39.7991],
  [116.5117, 39.7833],
  [116.4929, 39.8002],
  [116.4856, 39.7993],
  [116.4993, 39.8076],
  [116.4932, 39.8002],
  [116.4861, 39.8017],
  [116.4857, 39.7991],
  [116.484, 39.8047],
  [116.4856, 39.8015],
  [116.4893, 39.7984],
  [116.4945, 39.7985],
  [116.4945, 39.7985],
  [116.4945, 39.7985],
  [116.51, 39.7854],
  [116.4827, 39.8041],
  [116.4884, 39.8029],
  [116.4957, 39.7997],
  [116.488, 39.8027],
  [116.493, 39.8002],
  [116.4845, 39.8048],
  [116.4966, 39.7611],
  [116.5027, 39.7945],
  [116.5025, 39.7631],
  [116.4841, 39.8047],
  [116.5001, 39.808],
  [116.4878, 39.8026],
  [116.4965, 39.769],
  [116.4881, 39.7602],
  [116.5027, 39.7635],
  [116.5095, 39.8026],
  [116.4844, 39.8048],
  [116.4842, 39.8047],
  [116.4857, 39.7992],
  [116.5049, 39.7963],
  [116.4849, 39.8012],
  [116.497, 39.7688],
  [116.4951, 39.8003],
  [116.484, 39.8046],
  [116.5003, 39.8081],
  [116.4893, 39.7984],
  [116.4954, 39.8006],
  [116.5175, 39.8124],
  [116.5034, 39.8223],
  [116.5, 39.8098],
  [116.4983, 39.8164],
  [116.5038, 39.821],
  [116.5038, 39.8216],
  [116.5038, 39.8219],
  [116.5047, 39.8223],
  [116.5034, 39.8211],
  [116.5151, 39.8207],
  [116.4975, 39.8096],
  [116.5034, 39.8213],
  [116.5035, 39.821],
  [116.4991, 39.8094],
  [116.5026, 39.8221],
  [116.542, 39.813],
  [116.4973, 39.81],
  [116.5034, 39.8222],
  [116.503, 39.8222],
  [116.5003, 39.816],
  [116.4973, 39.81],
  [116.4944, 39.8174],
  [116.4973, 39.81],
  [116.4975, 39.8094],
  [116.4973, 39.81],
  [116.4973, 39.81],
  [116.4975, 39.8094],
  [116.5328, 39.8229],
  [116.5361, 39.8154],
  [116.5035, 39.8219],
  [116.5789, 39.8022],
  [116.5387, 39.724],
  [116.5781, 39.8022],
  [116.5764, 39.8016],
  [116.5444, 39.7644],
  [116.5339, 39.7658],
  [116.5796, 39.8022],
  [116.5772, 39.8032],
  [116.5772, 39.8034],
  [116.533, 39.7709],
  [116.5772, 39.8038],
  [116.5713, 39.808],
  [116.5409, 39.7616],
  [116.5427, 39.7631],
  [116.5772, 39.8027],
  [116.5337, 39.7552],
  [116.5385, 39.7564],
  [116.5391, 39.724],
  [116.5348, 39.7511],
  [116.5772, 39.8034],
  [116.5509, 39.8025],
  [116.5767, 39.7988],
  [116.5791, 39.8022],
  [116.5509, 39.8045],
  [116.5403, 39.7611],
  [116.5438, 39.7641],
  [116.5402, 39.7611],
  [116.5772, 39.8029],
  [116.5329, 39.7697],
  [116.5337, 39.7703],
  [116.5794, 39.8022],
  [116.5727, 39.8017],
  [116.5416, 39.7621],
  [116.5772, 39.8037],
  [116.5772, 39.8014],
  [116.5313, 39.7698],
  [116.5795, 39.8022],
  [116.5391, 39.7289],
  [116.537, 39.751],
  [116.5361, 39.754],
  [116.5438, 39.7648],
  [116.5792, 39.8022],
  [116.5388, 39.7398],
  [116.5349, 39.7569],
  [116.5348, 39.7568],
  [116.5709, 39.8054],
  [116.5768, 39.8026],
  [116.5749, 39.8016],
  [116.5333, 39.7547],
  [116.5335, 39.755],
  [116.5432, 39.74],
  [116.5729, 39.8017],
  [116.5147, 39.779],
  [116.5375, 39.7371],
  [116.5656, 39.8024],
  [116.5742, 39.8016],
  [116.5198, 39.7946],
  [116.5651, 39.8024],
  [116.5316, 39.7693],
  [116.5382, 39.8081],
  [116.5776, 39.8017],
  [116.5777, 39.8017],
  [116.578, 39.8017],
  [116.539, 39.7569],
  [116.5435, 39.7641],
  [116.5397, 39.8085],
  [116.5403, 39.7598],
  [116.5337, 39.7712],
  [116.5405, 39.7613],
  [116.5401, 39.7462],
  [116.5189, 39.7825],
  [116.5811, 39.8017],
  [116.5772, 39.8027],
  [116.5411, 39.7242],
  [116.5774, 39.8022],
  [116.5418, 39.7622],
  [116.5772, 39.803],
  [116.5768, 39.8024],
  [116.5811, 39.8017],
  [116.5399, 39.759],
  [116.5726, 39.8074],
  [116.5507, 39.8014],
  [116.5592, 39.7973],
  [116.5782, 39.8017],
  [116.5784, 39.8017],
  [116.5787, 39.8017],
  [116.5776, 39.8022],
  [116.5468, 39.8044],
  [116.5352, 39.7571],
  [116.5778, 39.8017],
  [116.5767, 39.7996],
  [116.534, 39.7556],
  [116.5344, 39.756],
  [116.5739, 39.8016],
  [116.5652, 39.8023],
  [116.548, 39.8043],
  [116.5722, 39.808],
  [116.5727, 39.8074],
  [116.5603, 39.7979],
  [116.5717, 39.8077],
  [116.5344, 39.7511],
  [116.56, 39.7978],
  [116.5414, 39.762],
  [116.5385, 39.7225],
  [116.5428, 39.7246],
  [116.527, 39.799],
  [116.5422, 39.7631],
  [116.5339, 39.7554],
  [116.5292, 39.7405],
  [116.5357, 39.7418],
  [116.5359, 39.7507],
  [116.5714, 39.8079],
  [116.5585, 39.797],
  [116.5599, 39.7977],
  [116.5773, 39.8017],
  [116.5768, 39.8012],
  [116.5403, 39.7611],
  [116.5595, 39.7974],
  [116.5366, 39.751],
  [116.5437, 39.7641],
  [116.5409, 39.7617],
  [116.5791, 39.8022],
  [116.5779, 39.8022],
  [116.5509, 39.8033],
  [116.4954, 39.8005],
  [116.4928, 39.8001],
  [116.491, 39.8003],
  [116.4855, 39.8006],
  [116.496, 39.8004],
  [116.4889, 39.7987],
  [116.4893, 39.7984],
  [116.4893, 39.7984],
  [116.4958, 39.8007],
  [116.4968, 39.761],
  [116.4951, 39.8004],
  [116.491, 39.7991],
  [116.4955, 39.8046],
  [116.4843, 39.8004],
  [116.5016, 39.8005],
  [116.4862, 39.799],
  [116.4968, 39.7608],
  [116.4879, 39.8035],
  [116.4968, 39.7609],
  [116.5051, 39.7647],
  [116.5029, 39.7988],
  [116.4858, 39.8074],
  [116.4955, 39.7998],
  [116.4893, 39.7984],
  [116.4833, 39.8043],
  [116.4977, 39.7684],
  [116.4911, 39.7711],
  [116.4834, 39.8042],
  [116.4842, 39.8048],
  [116.486, 39.7993],
  [116.4856, 39.8006],
  [116.4856, 39.8015],
  [116.4857, 39.8007],
  [116.5016, 39.8005],
  [116.4877, 39.8025],
  [116.493, 39.7566],
  [116.4842, 39.7992],
  [116.4919, 39.7988],
  [116.5033, 39.7634],
  [116.4978, 39.7684],
  [116.4834, 39.8043],
  [116.4963, 39.8003],
  [116.4876, 39.8025],
  [116.4893, 39.7984],
  [116.5133, 39.7765],
  [116.4994, 39.8077],
  [116.4878, 39.8036],
  [116.5037, 39.7634],
  [116.4841, 39.8004],
  [116.4966, 39.7689],
  [116.5041, 39.7632],
  [116.491, 39.8004],
  [116.4976, 39.7685]
];
option = {
    bmap: {
        center: [116.5274, 39.7789],
        zoom: 13,
        roam: true,
        mapStyle: {
              'styleJson': [
                {
                  'featureType': 'water',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#031628'
                  }
                },
                {
                  'featureType': 'land',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#000102'
                  }
                },
                {
                  'featureType': 'highway',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                },
                {
                  'featureType': 'arterial',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'arterial',
                  'elementType': 'geometry.stroke',
                  'stylers': {
                    'color': '#0b3d51'
                  }
                },
                {
                  'featureType': 'local',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'railway',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'railway',
                  'elementType': 'geometry.stroke',
                  'stylers': {
                    'color': '#08304b'
                  }
                },
                {
                  'featureType': 'subway',
                  'elementType': 'geometry',
                  'stylers': {
                    'lightness': -70
                  }
                },
                {
                  'featureType': 'building',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'all',
                  'elementType': 'labels.text.fill',
                  'stylers': {
                    'color': '#857f7f'
                  }
                },
                {
                  'featureType': 'all',
                  'elementType': 'labels.text.stroke',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'building',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#022338'
                  }
                },
                {
                  'featureType': 'green',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#062032'
                  }
                },
                {
                  'featureType': 'boundary',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#465b6c'
                  }
                },
                {
                  'featureType': 'manmade',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#022338'
                  }
                },
                {
                  'featureType': 'label',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                }
              ]
            }
    },
    visualMap: {
        show: false,
        top: 'top',
        min: 0,
        max: 5,
        seriesIndex: 0,
        calculable: true,
        inRange: {
            color: ['blue', 'green', 'yellow', 'red']
        }
    },
    series: [{
        type: 'heatmap',
        coordinateSystem: 'bmap',
        data: points,
        pointSize: 4,
        blurSize: 8
    },{
        type: 'lines',
        coordinateSystem: 'bmap',
        data: data.features[0].geometry.coordinates,
        polyline: true,
        lineStyle: {
            width: 4,
            opacity: 0.7,
            color: '#bda29a'
        }
    }]
};
myChart.setOption(option);
})