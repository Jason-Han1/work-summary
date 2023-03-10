

var chinaContourUrl = "/asset/get/s/data-1469097271266-SkyrH7CP.json";

$.getJSON(chinaContourUrl, function (json) {
    echarts.registerMap('china-contour', json);
    
    myChart.setOption({
        geo: [{
            map: 'china',
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    shadowBlur: 50,
                    shadowColor: 'rgba(0, 0, 0, 0.2)'
                }
            }
        }, {
            map: 'china',
            itemStyle: {
                normal: {
                    borderColor: '#aaa'
                }
            }
        }]
    });
});
var latlong = {};
latlong.QYYZ001= {'latitude':29.507004, 'longitude':103.400912};
latlong.QYYZ002= {'latitude':29.957989, 'longitude':101.755331};
latlong.QYYZ003= {'latitude':31.595768, 'longitude':110.487231};
latlong.QYYZ004= {'latitude':29.685865, 'longitude':109.816396};
latlong.QYYZ005= {'latitude':28.732211, 'longitude':95.017836};
latlong.QYYZ006= {'latitude':34.584319, 'longitude':105.736932};
latlong.QYYZ007= {'latitude':31.474069, 'longitude':110.40021};
latlong.QYYZ008= {'latitude':29.747744, 'longitude':102.120066};
latlong.QYYZ009= {'latitude':31.31935, 'longitude':110.824406};
latlong.QYYZ010= {'latitude':30.207684, 'longitude':119.350295};
latlong.QYYZ011= {'latitude':29.567692, 'longitude':110.187336};
latlong.QYYZ012= {'latitude':30.078875, 'longitude':102.578305};
latlong.QYYZ013= {'latitude':30.124828, 'longitude':95.556585};
latlong.QYYZ014= {'latitude':24.812052, 'longitude':113.175778};
latlong.QYYZ015= {'latitude':30.732758, 'longitude':111.310981};
latlong.QYYZ016= {'latitude':30.00971, 'longitude':110.644489};
latlong.QYYZ017= {'latitude':28.360344, 'longitude':100.953057};
latlong.QYYZ018= {'latitude':28.681698, 'longitude':97.069124};
latlong.QYYZ019= {'latitude':26.874706, 'longitude':100.243241};
latlong.QYYZ020= {'latitude':33.536924, 'longitude':108.451796};
latlong.QYYZ021= {'latitude':33.065316, 'longitude':108.250518};
latlong.QYYZ022= {'latitude':30.56765, 'longitude':102.716894};
latlong.QYYZ023= {'latitude':32.291257, 'longitude':109.270397};
latlong.QYYZ024= {'latitude':27.913571, 'longitude':108.652976};
latlong.QYYZ025= {'latitude':25.244442, 'longitude':113.246956};
latlong.QYYZ026= {'latitude':31.766262, 'longitude':115.375246};
latlong.QYYZ027= {'latitude':31.579557, 'longitude':103.021281};
latlong.QYYZ028= {'latitude':26.996507, 'longitude':98.868659};
latlong.QYYZ029= {'latitude':27.891993, 'longitude':98.509416};
latlong.QYYZ030= {'latitude':25.868328, 'longitude':110.01025};
latlong.QYYZ031= {'latitude':31.005693, 'longitude':103.626674};
latlong.QYYZ032= {'latitude':28.599824, 'longitude':86.067461};
latlong.QYYZ033= {'latitude':33.790276, 'longitude':110.653812};
latlong.QYYZ034= {'latitude':29.124889, 'longitude':110.48162};
latlong.QYYZ035= {'latitude':20.731726, 'longitude':116.632489};
latlong.QYYZ036= {'latitude':33.620804, 'longitude':114.638765};
latlong.QYYZ037= {'latitude':33.942972, 'longitude':107.416865};
latlong.QYYZ038= {'latitude':31.039124, 'longitude':103.637342};
latlong.QYYZ039= {'latitude':25.605572, 'longitude':99.898375};
latlong.QYYZ040= {'latitude':35.258018, 'longitude':103.62902};
latlong.QYYZ041= {'latitude':32.947265, 'longitude':104.784206};
latlong.QYYZ042= {'latitude':33.398411, 'longitude':104.931228};
latlong.QYYZ043= {'latitude':30.827453, 'longitude':110.300617};
latlong.QYYZ044= {'latitude':29.801743, 'longitude':111.044287};
latlong.QYYZ045= {'latitude':25.275887, 'longitude':112.933447};
latlong.QYYZ046= {'latitude':27.863377, 'longitude':102.117888};
latlong.QYYZ047= {'latitude':28.050639, 'longitude':119.082297};
latlong.QYYZ048= {'latitude':29.141686, 'longitude':107.177888};
latlong.QYYZ049= {'latitude':29.015941, 'longitude':109.976124};
latlong.QYYZ050= {'latitude':26.932749, 'longitude':102.000726};
latlong.QYYZ051= {'latitude':28.23751, 'longitude':87.913745};
latlong.QYYZ052= {'latitude':25.693967, 'longitude':100.219209};
latlong.QYYZ053= {'latitude':24.683283, 'longitude':116.196142};
latlong.QYYZ054= {'latitude':30.679943, 'longitude':104.067923};
latlong.QYYZ055= {'latitude':27.815088, 'longitude':89.081382};
latlong.QYYZ056= {'latitude':26.070228, 'longitude':98.8593};
latlong.QYYZ057= {'latitude':27.452958, 'longitude':99.152723};
latlong.QYYZ058= {'latitude':29.866596, 'longitude':106.520342};
latlong.QYYZ059= {'latitude':35.713963, 'longitude':102.463877};
latlong.QYYZ060= {'latitude':22.431974, 'longitude':111.125429};
latlong.QYYZ061= {'latitude':29.886112, 'longitude':109.565069};
latlong.QYYZ062= {'latitude':29.235485, 'longitude':102.29397};
latlong.QYYZ063= {'latitude':28.8668, 'longitude':85.306389};
latlong.QYYZ064= {'latitude':31.888131, 'longitude':108.741855};
latlong.QYYZ065= {'latitude':29.513406, 'longitude':109.51443};
latlong.QYYZ066= {'latitude':33.63481, 'longitude':104.326323};
latlong.QYYZ067= {'latitude':23.346745, 'longitude':113.767687};
latlong.QYYZ068= {'latitude':25.607031, 'longitude':110.601021};
latlong.QYYZ069= {'latitude':33.01142, 'longitude':112.542842};
latlong.QYYZ070= {'latitude':34.0106, 'longitude':112.049511};
latlong.QYYZ071= {'latitude':30.084717, 'longitude':110.631968};
latlong.QYYZ072= {'latitude':26.548581, 'longitude':110.924698};
latlong.QYYZ073= {'latitude':31.939262, 'longitude':109.456711};
latlong.QYYZ074= {'latitude':28.279341, 'longitude':103.512505};
latlong.QYYZ075= {'latitude':26.911133, 'longitude':98.872921};
latlong.QYYZ076= {'latitude':29.035351, 'longitude':106.269282};
latlong.QYYZ077= {'latitude':31.509161, 'longitude':109.360531};
latlong.QYYZ078= {'latitude':32.24247, 'longitude':108.887181};
latlong.QYYZ079= {'latitude':34.15054, 'longitude':107.833844};
latlong.QYYZ080= {'latitude':35.529746, 'longitude':106.354023};
latlong.QYYZ081= {'latitude':27.695864, 'longitude':111.720664};
latlong.QYYZ082= {'latitude':27.695864, 'longitude':111.720664};
latlong.QYYZ083= {'latitude':29.734435, 'longitude':118.29357};
latlong.QYYZ084= {'latitude':33.892851, 'longitude':106.033317};
latlong.QYYZ085= {'latitude':33.28499, 'longitude':105.637974};
latlong.QYYZ086= {'latitude':34.742615, 'longitude':103.631906};
latlong.QYYZ087= {'latitude':23.680249, 'longitude':113.684824};
latlong.QYYZ088= {'latitude':24.937021, 'longitude':112.459189};
latlong.QYYZ089= {'latitude':24.852706, 'longitude':114.115404};
latlong.QYYZ090= {'latitude':26.902826, 'longitude':106.734996};
latlong.QYYZ091= {'latitude':33.224377, 'longitude':111.847405};
latlong.QYYZ092= {'latitude':33.472842, 'longitude':112.393666};
latlong.QYYZ093= {'latitude':30.308979, 'longitude':109.517433};
latlong.QYYZ094= {'latitude':30.173165, 'longitude':110.709999};
latlong.QYYZ095= {'latitude':28.917804, 'longitude':101.63508};
latlong.QYYZ096= {'latitude':33.317446, 'longitude':103.934044};
latlong.QYYZ097= {'latitude':32.136407, 'longitude':107.352775};
latlong.QYYZ098= {'latitude':29.783256, 'longitude':94.380416};
latlong.QYYZ099= {'latitude':29.24841, 'longitude':94.018213};
latlong.QYYZ100= {'latitude':25.785865, 'longitude':100.135962};
latlong.QYYZ101= {'latitude':24.371491, 'longitude':116.199543};
latlong.QYYZ102= {'latitude':24.687282, 'longitude':113.609891};
latlong.QYYZ103= {'latitude':23.86503, 'longitude':116.906123};
latlong.QYYZ104= {'latitude':24.680433, 'longitude':105.303213};
latlong.QYYZ105= {'latitude':28.146365, 'longitude':107.203542};
latlong.QYYZ106= {'latitude':27.070345, 'longitude':108.154109};
latlong.QYYZ107= {'latitude':42.169615, 'longitude':117.0679};
latlong.QYYZ108= {'latitude':33.912392, 'longitude':111.617014};
latlong.QYYZ109= {'latitude':32.128582, 'longitude':114.085491};
latlong.QYYZ110= {'latitude':31.719673, 'longitude':111.209905};
latlong.QYYZ111= {'latitude':30.932373, 'longitude':115.481022};
latlong.QYYZ112= {'latitude':27.695864, 'longitude':111.720664};
latlong.QYYZ113= {'latitude':27.695864, 'longitude':111.720664};
latlong.QYYZ114= {'latitude':25.939253, 'longitude':114.402605};
latlong.QYYZ115= {'latitude':33.6954, 'longitude':109.280549};
latlong.QYYZ116= {'latitude':33.953602, 'longitude':108.113541};
latlong.QYYZ117= {'latitude':27.331194, 'longitude':102.191734};
latlong.QYYZ118= {'latitude':26.573608, 'longitude':102.742967};
latlong.QYYZ119= {'latitude':28.776739, 'longitude':103.481388};
latlong.QYYZ120= {'latitude':29.530635, 'longitude':106.57254};
latlong.QYYZ121= {'latitude':26.633568, 'longitude':99.2639};
latlong.QYYZ122= {'latitude':29.614714, 'longitude':118.895765};
latlong.QYYZ123= {'latitude':30.259244, 'longitude':120.219375};
latlong.QYYZ124= {'latitude':27.896053, 'longitude':119.61929};
latlong.QYYZ125= {'latitude':33.549939, 'longitude':107.928836};
latlong.QYYZ126= {'latitude':32.812036, 'longitude':106.969741};
latlong.QYYZ127= {'latitude':37.550339, 'longitude':104.114129};
latlong.QYYZ128= {'latitude':35.55011, 'longitude':106.688911};
latlong.QYYZ129= {'latitude':34.726751, 'longitude':104.365403};
latlong.QYYZ130= {'latitude':34.614458, 'longitude':103.39362};
latlong.QYYZ131= {'latitude':23.561267, 'longitude':111.723487};
latlong.QYYZ132= {'latitude':23.120049, 'longitude':113.30765};
latlong.QYYZ133= {'latitude':24.515165, 'longitude':112.100806};
latlong.QYYZ134= {'latitude':24.070092, 'longitude':114.141775};
latlong.QYYZ135= {'latitude':23.552255, 'longitude':108.924274};
latlong.QYYZ136= {'latitude':24.089877, 'longitude':110.137776};
latlong.QYYZ137= {'latitude':23.552255, 'longitude':108.924274};
latlong.QYYZ138= {'latitude':25.343699, 'longitude':109.057863};
latlong.QYYZ139= {'latitude':26.688621, 'longitude':106.353814};
latlong.QYYZ140= {'latitude':36.125135, 'longitude':114.317124};
latlong.QYYZ141= {'latitude':33.973394, 'longitude':110.994724};
latlong.QYYZ142= {'latitude':33.486925, 'longitude':111.43899};
latlong.QYYZ143= {'latitude':33.748697, 'longitude':112.740309};
latlong.QYYZ144= {'latitude':32.989723, 'longitude':111.445396};
latlong.QYYZ145= {'latitude':31.209316, 'longitude':112.410562};
latlong.QYYZ146= {'latitude':29.918894, 'longitude':110.20022};
latlong.QYYZ147= {'latitude':30.482855, 'longitude':110.853968};
latlong.QYYZ148= {'latitude':30.872992, 'longitude':115.774302};
latlong.QYYZ149= {'latitude':25.499397, 'longitude':111.602042};
latlong.QYYZ150= {'latitude':27.281912, 'longitude':112.71963};
latlong.QYYZ151= {'latitude':28.576605, 'longitude':110.601178};
latlong.QYYZ152= {'latitude':28.672428, 'longitude':109.573905};
latlong.QYYZ153= {'latitude':26.325515, 'longitude':110.325303};
latlong.QYYZ154= {'latitude':32.902077, 'longitude':109.42358};
latlong.QYYZ155= {'latitude':34.066899, 'longitude':108.874256};
latlong.QYYZ156= {'latitude':31.830042, 'longitude':104.459694};
latlong.QYYZ157= {'latitude':27.599974, 'longitude':102.881928};
latlong.QYYZ158= {'latitude':29.050416, 'longitude':103.21674};
latlong.QYYZ159= {'latitude':31.855708, 'longitude':103.635043};
latlong.QYYZ160= {'latitude':27.09125, 'longitude':102.716634};
latlong.QYYZ161= {'latitude':28.702429, 'longitude':103.999118};
latlong.QYYZ162= {'latitude':29.599382, 'longitude':101.887279};
latlong.QYYZ163= {'latitude':31.986241, 'longitude':107.993811};
latlong.QYYZ164= {'latitude':37.550339, 'longitude':104.114129};
latlong.QYYZ165= {'latitude':30.367481, 'longitude':102.89916};
latlong.QYYZ166= {'latitude':31.168774, 'longitude':103.294317};
latlong.QYYZ167= {'latitude':25.06303, 'longitude':121.520109};
latlong.QYYZ168= {'latitude':24.396729, 'longitude':100.795206};
latlong.QYYZ169= {'latitude':22.111413, 'longitude':100.927318};
latlong.QYYZ170= {'latitude':25.049153, 'longitude':102.714601};
latlong.QYYZ171= {'latitude':24.499046, 'longitude':98.842542};
latlong.QYYZ172= {'latitude':22.879206, 'longitude':102.245327};
latlong.QYYZ173= {'latitude':23.901063, 'longitude':99.005736};
latlong.QYYZ174= {'latitude':29.102899, 'longitude':119.652576};
latlong.QYYZ175= {'latitude':28.52541, 'longitude':119.089342};
latlong.QYYZ176= {'latitude':27.536407, 'longitude':119.884868};
latlong.QYYZ177= {'latitude':29.359628, 'longitude':108.272868};
latlong.QYYZ178= {'latitude':29.440981, 'longitude':108.714808};
latlong.QYYZ179= {'latitude':24.743717, 'longitude':98.322123};
latlong.QYYZ180= {'latitude':21.73666, 'longitude':101.461959};
latlong.QYYZ181= {'latitude':40.888537, 'longitude':120.688361};
latlong.QYYZ182= {'latitude':35.426541, 'longitude':112.361527};
latlong.QYYZ183= {'latitude':35.221584, 'longitude':111.824787};
latlong.QYYZ184= {'latitude':33.993252, 'longitude':106.766104};
latlong.QYYZ185= {'latitude':34.003834, 'longitude':108.592481};
latlong.QYYZ186= {'latitude':34.100787, 'longitude':109.42339};
latlong.QYYZ187= {'latitude':33.385374, 'longitude':106.162834};
latlong.QYYZ188= {'latitude':35.105365, 'longitude':112.405268};
latlong.QYYZ189= {'latitude':27.748135, 'longitude':118.011543};
latlong.QYYZ190= {'latitude':31.287056, 'longitude':116.246675};
latlong.QYYZ191= {'latitude':30.901821, 'longitude':116.22007};
latlong.QYYZ192= {'latitude':24.668806, 'longitude':117.293055};
latlong.QYYZ193= {'latitude':26.643626, 'longitude':118.181883};
latlong.QYYZ194= {'latitude':27.235197, 'longitude':117.480572};
latlong.QYYZ195= {'latitude':27.044914, 'longitude':118.485147};
latlong.QYYZ196= {'latitude':27.235197, 'longitude':117.480572};
latlong.QYYZ197= {'latitude':25.919433, 'longitude':117.328535};
latlong.QYYZ198= {'latitude':34.005621, 'longitude':103.570446};
latlong.QYYZ199= {'latitude':34.429644, 'longitude':104.246726};
latlong.QYYZ200= {'latitude':38.103267, 'longitude':102.457625};
latlong.QYYZ201= {'latitude':38.103267, 'longitude':102.457625};
latlong.QYYZ202= {'latitude':33.919625, 'longitude':105.338531};
latlong.QYYZ203= {'latitude':35.999785, 'longitude':104.24429};
latlong.QYYZ204= {'latitude':24.347934, 'longitude':116.664124};
latlong.QYYZ205= {'latitude':23.276367, 'longitude':111.987268};
latlong.QYYZ206= {'latitude':23.974273, 'longitude':112.18024};
latlong.QYYZ207= {'latitude':24.340566, 'longitude':114.542977};
latlong.QYYZ208= {'latitude':24.33468, 'longitude':115.362292};
latlong.QYYZ209= {'latitude':23.666408, 'longitude':114.137243};
latlong.QYYZ210= {'latitude':22.690984, 'longitude':111.493242};
latlong.QYYZ211= {'latitude':21.668226, 'longitude':110.931245};
latlong.QYYZ212= {'latitude':25.189905, 'longitude':114.386583};
latlong.QYYZ213= {'latitude':25.148466, 'longitude':113.785474};
latlong.QYYZ214= {'latitude':24.509486, 'longitude':112.68133};
latlong.QYYZ215= {'latitude':24.22568, 'longitude':113.323169};
latlong.QYYZ216= {'latitude':23.688328, 'longitude':106.278822};
latlong.QYYZ217= {'latitude':24.5116, 'longitude':107.413534};
latlong.QYYZ218= {'latitude':24.560065, 'longitude':107.019716};
latlong.QYYZ219= {'latitude':25.306237, 'longitude':110.071405};
latlong.QYYZ220= {'latitude':23.247546, 'longitude':105.834705};
latlong.QYYZ221= {'latitude':23.552255, 'longitude':108.924274};
latlong.QYYZ222= {'latitude':24.392538, 'longitude':105.999827};
latlong.QYYZ223= {'latitude':26.067857, 'longitude':110.598427};
latlong.QYYZ224= {'latitude':23.538683, 'longitude':110.412601};
latlong.QYYZ225= {'latitude':25.291473, 'longitude':108.025552};
latlong.QYYZ226= {'latitude':27.496153, 'longitude':108.141064};
latlong.QYYZ227= {'latitude':27.986045, 'longitude':108.528302};
latlong.QYYZ228= {'latitude':40.347984, 'longitude':115.634061};
latlong.QYYZ229= {'latitude':39.366937, 'longitude':114.730451};
latlong.QYYZ230= {'latitude':34.437104, 'longitude':110.779737};
latlong.QYYZ231= {'latitude':32.136944, 'longitude':115.709743};
latlong.QYYZ232= {'latitude':35.543594, 'longitude':113.687892};
latlong.QYYZ233= {'latitude':32.883864, 'longitude':113.447174};
latlong.QYYZ234= {'latitude':32.49565, 'longitude':113.434169};
latlong.QYYZ235= {'latitude':31.646279, 'longitude':114.859089};
latlong.QYYZ236= {'latitude':32.079873, 'longitude':110.628795};
latlong.QYYZ237= {'latitude':31.085752, 'longitude':113.112261};
latlong.QYYZ238= {'latitude':29.425663, 'longitude':109.246714};
latlong.QYYZ239= {'latitude':30.239967, 'longitude':108.8271};
latlong.QYYZ240= {'latitude':29.55767, 'longitude':114.615246};
latlong.QYYZ241= {'latitude':29.736284, 'longitude':109.003815};
latlong.QYYZ242= {'latitude':31.244981, 'longitude':112.584826};
latlong.QYYZ243= {'latitude':32.037738, 'longitude':109.791237};
latlong.QYYZ244= {'latitude':29.397693, 'longitude':110.9362};
latlong.QYYZ245= {'latitude':26.495588, 'longitude':111.342809};
latlong.QYYZ246= {'latitude':28.013633, 'longitude':109.518882};
latlong.QYYZ247= {'latitude':28.603594, 'longitude':110.008149};
latlong.QYYZ248= {'latitude':27.239105, 'longitude':110.087193};
latlong.QYYZ249= {'latitude':27.695864, 'longitude':111.720664};
latlong.QYYZ250= {'latitude':28.563597, 'longitude':111.385039};
latlong.QYYZ251= {'latitude':27.557483, 'longitude':109.986959};
latlong.QYYZ252= {'latitude':27.259359, 'longitude':112.708767};
latlong.QYYZ253= {'latitude':26.786578, 'longitude':110.745815};
latlong.QYYZ254= {'latitude':27.40251, 'longitude':109.611105};
latlong.QYYZ255= {'latitude':27.103196, 'longitude':110.599739};
latlong.QYYZ256= {'latitude':25.199988, 'longitude':111.253887};
latlong.QYYZ257= {'latitude':29.225529, 'longitude':109.515961};
latlong.QYYZ258= {'latitude':28.762203, 'longitude':113.720846};
latlong.QYYZ259= {'latitude':27.695864, 'longitude':111.720664};
latlong.QYYZ260= {'latitude':25.914933, 'longitude':111.716294};
latlong.QYYZ261= {'latitude':32.069562, 'longitude':118.6417};
latlong.QYYZ262= {'latitude':31.932635, 'longitude':119.20708};
latlong.QYYZ263= {'latitude':32.057236, 'longitude':118.778074};
latlong.QYYZ264= {'latitude':32.069562, 'longitude':118.6417};
latlong.QYYZ265= {'latitude':29.71964, 'longitude':115.999848};
latlong.QYYZ266= {'latitude':27.261522, 'longitude':116.931717};
latlong.QYYZ267= {'latitude':24.772706, 'longitude':114.731825};
latlong.QYYZ268= {'latitude':29.666586, 'longitude':116.009736};
latlong.QYYZ269= {'latitude':26.590232, 'longitude':116.012116};
latlong.QYYZ270= {'latitude':28.109822, 'longitude':117.713461};
latlong.QYYZ271= {'latitude':29.263844, 'longitude':115.023159};
latlong.QYYZ272= {'latitude':33.427684, 'longitude':109.981319};
latlong.QYYZ273= {'latitude':35.860026, 'longitude':109.503789};
latlong.QYYZ274= {'latitude':34.502358, 'longitude':109.483933};
latlong.QYYZ275= {'latitude':33.371587, 'longitude':107.616093};
latlong.QYYZ276= {'latitude':32.517416, 'longitude':107.882774};
latlong.QYYZ277= {'latitude':32.890762, 'longitude':101.787569};
latlong.QYYZ278= {'latitude':30.719641, 'longitude':103.529467};
latlong.QYYZ279= {'latitude':29.431576, 'longitude':102.625136};
latlong.QYYZ280= {'latitude':26.591301, 'longitude':102.263927};
latlong.QYYZ281= {'latitude':28.514859, 'longitude':102.068914};
latlong.QYYZ282= {'latitude':37.550339, 'longitude':104.114129};
latlong.QYYZ283= {'latitude':32.625459, 'longitude':103.532712};
latlong.QYYZ284= {'latitude':29.599589, 'longitude':104.593976};
latlong.QYYZ285= {'latitude':28.769675, 'longitude':104.633019};
latlong.QYYZ286= {'latitude':28.59219, 'longitude':102.628681};
latlong.QYYZ287= {'latitude':37.550339, 'longitude':104.114129};
latlong.QYYZ288= {'latitude':30.958553, 'longitude':109.355667};
latlong.QYYZ289= {'latitude':29.694316, 'longitude':103.180159};
latlong.QYYZ290= {'latitude':27.892393, 'longitude':102.259591};
latlong.QYYZ291= {'latitude':31.509161, 'longitude':109.360531};
latlong.QYYZ292= {'latitude':28.515434, 'longitude':104.931149};
latlong.QYYZ293= {'latitude':24.086957, 'longitude':121.973871};
latlong.QYYZ294= {'latitude':24.086957, 'longitude':121.973871};
latlong.QYYZ295= {'latitude':25.875307, 'longitude':100.627538};
latlong.QYYZ296= {'latitude':26.072916, 'longitude':99.912156};
latlong.QYYZ297= {'latitude':25.943771, 'longitude':102.593027};
latlong.QYYZ298= {'latitude':26.911133, 'longitude':98.872921};
latlong.QYYZ299= {'latitude':23.102937, 'longitude':103.748419};
latlong.QYYZ300= {'latitude':24.08958, 'longitude':99.427632};
latlong.QYYZ301= {'latitude':26.911133, 'longitude':98.872921};
latlong.QYYZ302= {'latitude':23.586229, 'longitude':102.01884};
latlong.QYYZ303= {'latitude':26.491706, 'longitude':100.704921};
latlong.QYYZ304= {'latitude':25.73111, 'longitude':102.201176};
latlong.QYYZ305= {'latitude':25.275887, 'longitude':112.933447};
latlong.QYYZ306= {'latitude':29.487115, 'longitude':119.379533};
latlong.QYYZ307= {'latitude':29.189938, 'longitude':118.33165};
latlong.QYYZ308= {'latitude':30.612341, 'longitude':120.490411};
latlong.QYYZ309= {'latitude':28.738742, 'longitude':120.640606};
latlong.QYYZ310= {'latitude':30.958553, 'longitude':109.355667};
latlong.QYYZ311= {'latitude':31.121152, 'longitude':109.908611};
latlong.QYYZ312= {'latitude':33.850722, 'longitude':101.668977};
latlong.QYYZ313= {'latitude':26.343206, 'longitude':108.154491};
latlong.QYYZ314= {'latitude':24.905101, 'longitude':115.665148};
latlong.QYYZ315= {'latitude':27.757258, 'longitude':115.676082};
latlong.QYYZ316= {'latitude':36.599678, 'longitude':111.830836};
latlong.QYYZ317= {'latitude':33.684554, 'longitude':110.4438};
latlong.QYYZ318= {'latitude':32.911459, 'longitude':109.624834};
latlong.QYYZ319= {'latitude':34.532718, 'longitude':110.058188};
latlong.QYYZ320= {'latitude':32.914183, 'longitude':106.140871};


latlong.XYCL001= {'latitude':29.507004, 'longitude':103.400912};
latlong.XYCL002= {'latitude':30.078875, 'longitude':102.578305};
latlong.XYCL003= {'latitude':31.474069, 'longitude':110.40021};
latlong.XYCL004= {'latitude':31.595768, 'longitude':110.487231};
latlong.XYCL005= {'latitude':30.56765, 'longitude':102.716894};
latlong.XYCL006= {'latitude':25.785865, 'longitude':100.135962};
latlong.XYCL007= {'latitude':29.957989, 'longitude':101.755331};
latlong.XYCL008= {'latitude':31.579557, 'longitude':103.021281};
latlong.XYCL009= {'latitude':31.31935, 'longitude':110.824406};
latlong.XYCL010= {'latitude':29.801743, 'longitude':111.044287};
latlong.XYCL011= {'latitude':32.16531, 'longitude':103.055487};
latlong.XYCL012= {'latitude':33.942972, 'longitude':107.416865};
latlong.XYCL013= {'latitude':33.398411, 'longitude':104.931228};
latlong.XYCL014= {'latitude':26.874706, 'longitude':100.243241};
latlong.XYCL015= {'latitude':33.065316, 'longitude':108.250518};
latlong.XYCL016= {'latitude':33.317446, 'longitude':103.934044};
latlong.XYCL017= {'latitude':27.452958, 'longitude':99.152723};
latlong.XYCL018= {'latitude':29.235485, 'longitude':102.29397};
latlong.XYCL019= {'latitude':27.891993, 'longitude':98.509416};
latlong.XYCL020= {'latitude':27.630986, 'longitude':104.241449};
latlong.XYCL021= {'latitude':30.827453, 'longitude':110.300617};
latlong.XYCL022= {'latitude':33.536924, 'longitude':108.451796};
latlong.XYCL023= {'latitude':31.039124, 'longitude':103.637342};
latlong.XYCL024= {'latitude':31.855708, 'longitude':103.635043};
latlong.XYCL025= {'latitude':31.509161, 'longitude':109.360531};
latlong.XYCL026= {'latitude':33.28499, 'longitude':105.637974};
latlong.XYCL027= {'latitude':33.892851, 'longitude':106.033317};
latlong.XYCL028= {'latitude':30.239967, 'longitude':108.8271};
latlong.XYCL029= {'latitude':32.24247, 'longitude':108.887181};
latlong.XYCL030= {'latitude':32.812036, 'longitude':106.969741};
latlong.XYCL031= {'latitude':31.986241, 'longitude':107.993811};
latlong.XYCL032= {'latitude':31.168774, 'longitude':103.294317};
latlong.XYCL033= {'latitude':34.876941, 'longitude':106.773064};
latlong.XYCL034= {'latitude':32.291257, 'longitude':109.270397};
latlong.XYCL035= {'latitude':29.530635, 'longitude':106.57254};
latlong.XYCL036= {'latitude':29.141686, 'longitude':107.177888};
latlong.XYCL037= {'latitude':29.918894, 'longitude':110.20022};
latlong.XYCL038= {'latitude':32.44104, 'longitude':105.819687};
latlong.XYCL039= {'latitude':34.584319, 'longitude':105.736932};
latlong.XYCL040= {'latitude':32.947265, 'longitude':104.784206};
latlong.XYCL041= {'latitude':27.986045, 'longitude':108.528302};
latlong.XYCL042= {'latitude':29.050416, 'longitude':103.21674};
latlong.XYCL043= {'latitude':32.079873, 'longitude':110.628795};
latlong.XYCL044= {'latitude':30.578576, 'longitude':109.939599};
latlong.XYCL045= {'latitude':30.732758, 'longitude':111.310981};
latlong.XYCL046= {'latitude':27.281912, 'longitude':112.71963};
latlong.XYCL047= {'latitude':34.364081, 'longitude':107.170645};
latlong.XYCL048= {'latitude':34.15054, 'longitude':107.833844};
latlong.XYCL049= {'latitude':33.380939, 'longitude':109.077371};
latlong.XYCL050= {'latitude':31.52757, 'longitude':101.804769};
latlong.XYCL051= {'latitude':32.337239, 'longitude':106.836181};
latlong.XYCL052= {'latitude':31.135396, 'longitude':102.475493};
latlong.XYCL053= {'latitude':22.879206, 'longitude':102.245327};
latlong.XYCL054= {'latitude':25.605572, 'longitude':99.898375};
latlong.XYCL055= {'latitude':29.734435, 'longitude':118.29357};
latlong.XYCL056= {'latitude':27.748135, 'longitude':118.011543};
latlong.XYCL057= {'latitude':31.719673, 'longitude':111.209905};
latlong.XYCL058= {'latitude':27.695864, 'longitude':111.720664};
latlong.XYCL059= {'latitude':33.993252, 'longitude':106.766104};
latlong.XYCL060= {'latitude':28.279341, 'longitude':103.512505};
latlong.XYCL061= {'latitude':29.747744, 'longitude':102.120066};
latlong.XYCL062= {'latitude':28.443545, 'longitude':103.10173};
latlong.XYCL063= {'latitude':32.446912, 'longitude':104.404308};
latlong.XYCL064= {'latitude':31.509161, 'longitude':109.360531};
latlong.XYCL065= {'latitude':28.013719, 'longitude':102.832818};
latlong.XYCL066= {'latitude':24.396729, 'longitude':100.795206};
latlong.XYCL067= {'latitude':29.189938, 'longitude':118.33165};
latlong.XYCL068= {'latitude':31.888131, 'longitude':108.741855};
latlong.XYCL069= {'latitude':30.958553, 'longitude':109.355667};
latlong.XYCL070= {'latitude':30.988053, 'longitude':116.085801};
latlong.XYCL071= {'latitude':29.886112, 'longitude':109.565069};
latlong.XYCL072= {'latitude':29.225529, 'longitude':109.515961};
latlong.XYCL073= {'latitude':27.695864, 'longitude':111.720664};
latlong.XYCL074= {'latitude':25.275887, 'longitude':112.933447};
latlong.XYCL075= {'latitude':33.013797, 'longitude':119.368489};
latlong.XYCL076= {'latitude':31.932635, 'longitude':119.20708};
latlong.XYCL077= {'latitude':35.598267, 'longitude':110.965122};
latlong.XYCL078= {'latitude':33.61296, 'longitude':106.959628};
latlong.XYCL079= {'latitude':34.921441, 'longitude':108.986701};
latlong.XYCL080= {'latitude':32.51586, 'longitude':105.190447};
latlong.XYCL081= {'latitude':29.599382, 'longitude':101.887279};
latlong.XYCL082= {'latitude':28.732211, 'longitude':95.017836};
latlong.XYCL083= {'latitude':26.070228, 'longitude':98.8593};
latlong.XYCL084= {'latitude':23.225356, 'longitude':104.902518};
latlong.XYCL085= {'latitude':21.960731, 'longitude':100.337382};
latlong.XYCL086= {'latitude':21.73666, 'longitude':101.461959};
latlong.XYCL087= {'latitude':25.3179, 'longitude':103.006525};
latlong.XYCL088= {'latitude':25.279978, 'longitude':98.499988};
latlong.XYCL089= {'latitude':27.891463, 'longitude':105.050283};
latlong.XYCL090= {'latitude':30.207684, 'longitude':119.350295};
latlong.XYCL091= {'latitude':24.983157, 'longitude':104.349279};
latlong.XYCL092= {'latitude':27.568916, 'longitude':104.833852};
latlong.XYCL093= {'latitude':33.63481, 'longitude':104.326323};
latlong.XYCL094= {'latitude':20.731726, 'longitude':116.632489};
latlong.XYCL095= {'latitude':23.552255, 'longitude':108.924274};
latlong.XYCL096= {'latitude':25.868328, 'longitude':110.01025};
latlong.XYCL097= {'latitude':25.343699, 'longitude':109.057863};
latlong.XYCL098= {'latitude':27.408562, 'longitude':105.333323};
latlong.XYCL099= {'latitude':30.308979, 'longitude':109.517433};
latlong.XYCL100= {'latitude':30.482855, 'longitude':110.853968};
latlong.XYCL101= {'latitude':29.567692, 'longitude':110.187336};
latlong.XYCL102= {'latitude':26.786578, 'longitude':110.745815};
latlong.XYCL103= {'latitude':29.397693, 'longitude':110.9362};
latlong.XYCL104= {'latitude':26.344269, 'longitude':114.370589};
latlong.XYCL105= {'latitude':35.695398, 'longitude':111.839209};
latlong.XYCL106= {'latitude':35.221584, 'longitude':111.824787};
latlong.XYCL107= {'latitude':32.70437, 'longitude':109.038045};
latlong.XYCL108= {'latitude':33.549939, 'longitude':107.928836};
latlong.XYCL109= {'latitude':34.003834, 'longitude':108.592481};
latlong.XYCL110= {'latitude':34.532718, 'longitude':110.058188};
latlong.XYCL111= {'latitude':34.100787, 'longitude':109.42339};
latlong.XYCL112= {'latitude':34.502358, 'longitude':109.483933};
latlong.XYCL113= {'latitude':32.517416, 'longitude':107.882774};
latlong.XYCL114= {'latitude':31.589182, 'longitude':104.368786};
latlong.XYCL115= {'latitude':31.830042, 'longitude':104.459694};
latlong.XYCL116= {'latitude':31.182047, 'longitude':107.424315};
latlong.XYCL117= {'latitude':27.706169, 'longitude':103.201059};
latlong.XYCL118= {'latitude':29.600959, 'longitude':103.760824};
latlong.XYCL119= {'latitude':28.776739, 'longitude':103.481388};
latlong.XYCL120= {'latitude':26.932749, 'longitude':102.000726};
latlong.XYCL121= {'latitude':31.504701, 'longitude':104.705519};
latlong.XYCL122= {'latitude':32.37214, 'longitude':106.401823};
latlong.XYCL123= {'latitude':37.550339, 'longitude':104.114129};
latlong.XYCL124= {'latitude':31.005693, 'longitude':103.626674};
latlong.XYCL125= {'latitude':24.086957, 'longitude':121.973871};
latlong.XYCL126= {'latitude':24.086957, 'longitude':121.973871};
latlong.XYCL127= {'latitude':28.681698, 'longitude':97.069124};
latlong.XYCL128= {'latitude':28.23751, 'longitude':87.913745};
latlong.XYCL129= {'latitude':25.94767, 'longitude':101.242913};
latlong.XYCL130= {'latitude':24.610506, 'longitude':99.92091};
latlong.XYCL131= {'latitude':26.335454, 'longitude':100.277175};
latlong.XYCL132= {'latitude':26.439596, 'longitude':99.750308};
latlong.XYCL133= {'latitude':22.111413, 'longitude':100.927318};
latlong.XYCL134= {'latitude':23.102937, 'longitude':103.748419};
latlong.XYCL135= {'latitude':23.746259, 'longitude':102.456249};
latlong.XYCL136= {'latitude':23.374087, 'longitude':104.246294};
latlong.XYCL137= {'latitude':23.362736, 'longitude':104.687854};
latlong.XYCL138= {'latitude':27.536407, 'longitude':119.884868};
latlong.XYCL139= {'latitude':29.544606, 'longitude':106.530635};
latlong.XYCL140= {'latitude':38.103268, 'longitude':102.457625};
latlong.XYCL141= {'latitude':35.258018, 'longitude':103.62902};
latlong.XYCL142= {'latitude':36.064227, 'longitude':103.823305};
latlong.XYCL143= {'latitude':35.55011, 'longitude':106.688911};
latlong.XYCL144= {'latitude':34.742528, 'longitude':106.14008};
latlong.XYCL145= {'latitude':34.111637, 'longitude':105.064091};
latlong.XYCL146= {'latitude':34.726751, 'longitude':104.365403};
latlong.XYCL147= {'latitude':23.399888, 'longitude':116.651794};
latlong.XYCL148= {'latitude':24.829665, 'longitude':106.517899};
latlong.XYCL149= {'latitude':25.306237, 'longitude':110.071405};
latlong.XYCL150= {'latitude':24.904568, 'longitude':108.827191};
latlong.XYCL151= {'latitude':25.936465, 'longitude':111.026435};
latlong.XYCL152= {'latitude':27.496153, 'longitude':108.141064};
latlong.XYCL153= {'latitude':33.973394, 'longitude':110.994724};
latlong.XYCL154= {'latitude':32.636994, 'longitude':110.801229};
latlong.XYCL155= {'latitude':30.173165, 'longitude':110.709999};
latlong.XYCL156= {'latitude':31.244981, 'longitude':112.584826};
latlong.XYCL157= {'latitude':28.317951, 'longitude':109.745746};
latlong.XYCL158= {'latitude':26.325515, 'longitude':110.325303};
latlong.XYCL159= {'latitude':27.361338, 'longitude':114.455591};
latlong.XYCL160= {'latitude':27.639544, 'longitude':113.859917};
latlong.XYCL161= {'latitude':27.891993, 'longitude':98.509416};
latlong.XYCL162= {'latitude':27.81113, 'longitude':114.400039};
latlong.XYCL163= {'latitude':35.529746, 'longitude':106.354023};
latlong.XYCL164= {'latitude':35.499834, 'longitude':112.867333};
latlong.XYCL165= {'latitude':33.684554, 'longitude':110.4438};
latlong.XYCL166= {'latitude':35.628414, 'longitude':108.953058};
latlong.XYCL167= {'latitude':35.860026, 'longitude':109.503789};
latlong.XYCL168= {'latitude':33.411703, 'longitude':110.766533};
latlong.XYCL169= {'latitude':32.902077, 'longitude':109.42358};
latlong.XYCL170= {'latitude':33.6954, 'longitude':109.280549};
latlong.XYCL171= {'latitude':31.939262, 'longitude':109.456711};
latlong.XYCL172= {'latitude':33.953602, 'longitude':108.113541};
latlong.XYCL173= {'latitude':30.719641, 'longitude':103.529467};
latlong.XYCL174= {'latitude':26.591301, 'longitude':102.263927};
latlong.XYCL175= {'latitude':28.917804, 'longitude':101.63508};
latlong.XYCL176= {'latitude':28.514859, 'longitude':102.068914};
latlong.XYCL177= {'latitude':28.360344, 'longitude':100.953057};
latlong.XYCL178= {'latitude':37.550339, 'longitude':104.114129};
latlong.XYCL179= {'latitude':27.548286, 'longitude':102.568091};
latlong.XYCL180= {'latitude':29.999716, 'longitude':103.009356};
latlong.XYCL181= {'latitude':28.59219, 'longitude':102.628681};
latlong.XYCL182= {'latitude':31.918552, 'longitude':106.113283};
latlong.XYCL183= {'latitude':30.367481, 'longitude':102.89916};
latlong.XYCL184= {'latitude':37.550339, 'longitude':104.114129};
latlong.XYCL185= {'latitude':25.875307, 'longitude':100.627538};
latlong.XYCL186= {'latitude':23.274581, 'longitude':99.270498};
latlong.XYCL187= {'latitude':25.693967, 'longitude':100.219209};
latlong.XYCL188= {'latitude':24.246115, 'longitude':102.21925};
latlong.XYCL189= {'latitude':25.467214, 'longitude':104.367452};
latlong.XYCL190= {'latitude':24.284812, 'longitude':102.999068};
latlong.XYCL191= {'latitude':23.683914, 'longitude':102.889674};
latlong.XYCL192= {'latitude':25.049153, 'longitude':102.714601};
latlong.XYCL193= {'latitude':26.633568, 'longitude':99.2639};
latlong.XYCL194= {'latitude':23.883928, 'longitude':100.094219};
latlong.XYCL195= {'latitude':24.329497, 'longitude':98.426939};
latlong.XYCL196= {'latitude':22.956555, 'longitude':104.270312};
latlong.XYCL197= {'latitude':23.346572, 'longitude':103.499689};
latlong.XYCL198= {'latitude':24.127817, 'longitude':104.110334};
latlong.XYCL199= {'latitude':24.535545, 'longitude':101.640322};
latlong.XYCL200= {'latitude':23.469601, 'longitude':99.885738};
latlong.XYCL201= {'latitude':26.491706, 'longitude':100.704921};
latlong.XYCL202= {'latitude':26.911133, 'longitude':98.872921};
latlong.XYCL203= {'latitude':25.943771, 'longitude':102.593027};
latlong.XYCL204= {'latitude':29.151779, 'longitude':120.985563};
latlong.XYCL205= {'latitude':31.121152, 'longitude':109.908611};
latlong.XYCL206= {'latitude':30.342003, 'longitude':107.921738};
latlong.XYCL207= {'latitude':28.951313, 'longitude':107.159108};

latlong.YNCL001= {'latitude':25.049153, 'longitude':102.714601};
latlong.YNCL002= {'latitude':25.693967, 'longitude':100.219209};
latlong.YNCL003= {'latitude':27.452958, 'longitude':99.152723};
latlong.YNCL004= {'latitude':25.943771, 'longitude':102.593027};
latlong.YNCL005= {'latitude':26.874706, 'longitude':100.243241};
latlong.YNCL006= {'latitude':21.960731, 'longitude':100.337382};
latlong.YNCL007= {'latitude':25.605572, 'longitude':99.898375};
latlong.YNCL008= {'latitude':25.374647, 'longitude':99.600792};
latlong.YNCL009= {'latitude':25.139971, 'longitude':105.380224};
latlong.YNCL010= {'latitude':28.351417, 'longitude':99.037554};
latlong.YNCL011= {'latitude':27.863377, 'longitude':102.117888};
latlong.YNCL012= {'latitude':24.246115, 'longitude':102.21925};
latlong.YNCL013= {'latitude':26.335454, 'longitude':100.277175};
latlong.YNCL014= {'latitude':23.374087, 'longitude':104.246294};
latlong.YNCL015= {'latitude':31.595768, 'longitude':110.487231};
latlong.YNCL016= {'latitude':29.957989, 'longitude':101.755331};
latlong.YNCL017= {'latitude':26.072916, 'longitude':99.912156};
latlong.YNCL018= {'latitude':24.357607, 'longitude':102.769728};
latlong.YNCL019= {'latitude':25.3179, 'longitude':103.006525};
latlong.YNCL020= {'latitude':27.806805, 'longitude':99.91327};
latlong.YNCL021= {'latitude':25.002544, 'longitude':104.857837};
latlong.YNCL022= {'latitude':27.331194, 'longitude':102.191734};
latlong.YNCL023= {'latitude':26.573608, 'longitude':102.742967};
latlong.YNCL024= {'latitude':29.747744, 'longitude':102.120066};
latlong.YNCL025= {'latitude':27.603028, 'longitude':101.467624};
latlong.YNCL026= {'latitude':26.633568, 'longitude':99.2639};
latlong.YNCL027= {'latitude':23.68779, 'longitude':104.255968};
latlong.YNCL028= {'latitude':25.785865, 'longitude':100.135962};
latlong.YNCL029= {'latitude':27.599974, 'longitude':102.881928};
latlong.YNCL030= {'latitude':28.917804, 'longitude':101.63508};
latlong.YNCL031= {'latitude':28.443545, 'longitude':103.10173};
latlong.YNCL032= {'latitude':28.360344, 'longitude':100.953057};
latlong.YNCL033= {'latitude':28.013719, 'longitude':102.832818};
latlong.YNCL034= {'latitude':26.591301, 'longitude':102.263927};
latlong.YNCL035= {'latitude':24.610506, 'longitude':99.92091};
latlong.YNCL036= {'latitude':23.96782, 'longitude':105.00649};
latlong.YNCL037= {'latitude':21.73666, 'longitude':101.461959};
latlong.YNCL038= {'latitude':23.362736, 'longitude':104.687854};
latlong.YNCL039= {'latitude':26.921382, 'longitude':104.224086};
latlong.YNCL040= {'latitude':31.039124, 'longitude':103.637342};
latlong.YNCL041= {'latitude':27.892393, 'longitude':102.259591};
latlong.YNCL042= {'latitude':30.078875, 'longitude':102.578305};
latlong.YNCL043= {'latitude':28.59219, 'longitude':102.628681};
latlong.YNCL044= {'latitude':25.363439, 'longitude':102.584103};
latlong.YNCL045= {'latitude':25.467214, 'longitude':104.367452};
latlong.YNCL046= {'latitude':22.787363, 'longitude':103.823449};
latlong.YNCL047= {'latitude':22.111413, 'longitude':100.927318};
latlong.YNCL048= {'latitude':23.102937, 'longitude':103.748419};
latlong.YNCL049= {'latitude':22.752861, 'longitude':100.899831};
latlong.YNCL050= {'latitude':23.639176, 'longitude':100.194875};
latlong.YNCL051= {'latitude':23.586229, 'longitude':102.01884};
latlong.YNCL052= {'latitude':27.748135, 'longitude':118.011543};
latlong.YNCL053= {'latitude':24.680433, 'longitude':105.303213};
latlong.YNCL054= {'latitude':28.639117, 'longitude':108.129046};
latlong.YNCL055= {'latitude':26.343206, 'longitude':108.154491};
latlong.YNCL056= {'latitude':26.795102, 'longitude':105.268687};
latlong.YNCL057= {'latitude':26.688621, 'longitude':106.353814};
latlong.YNCL058= {'latitude':25.499784, 'longitude':105.27763};
latlong.YNCL059= {'latitude':27.239105, 'longitude':110.087193};
latlong.YNCL060= {'latitude':29.567692, 'longitude':110.187336};
latlong.YNCL061= {'latitude':29.666586, 'longitude':116.009736};
latlong.YNCL062= {'latitude':32.812036, 'longitude':106.969741};
latlong.YNCL063= {'latitude':35.216832, 'longitude':108.494125};
latlong.YNCL064= {'latitude':28.766497, 'longitude':100.265891};
latlong.YNCL065= {'latitude':29.050416, 'longitude':103.21674};
latlong.YNCL066= {'latitude':27.706169, 'longitude':103.201059};
latlong.YNCL067= {'latitude':27.548286, 'longitude':102.568091};
latlong.YNCL068= {'latitude':31.986241, 'longitude':107.993811};
latlong.YNCL069= {'latitude':28.769675, 'longitude':104.633019};
latlong.YNCL070= {'latitude':29.24841, 'longitude':94.018213};
latlong.YNCL071= {'latitude':24.852355, 'longitude':102.391127};
latlong.YNCL072= {'latitude':25.120489, 'longitude':99.177996};
latlong.YNCL073= {'latitude':25.066356, 'longitude':101.529382};
latlong.YNCL074= {'latitude':26.413363, 'longitude':100.197916};
latlong.YNCL075= {'latitude':24.517287, 'longitude':103.783253};
latlong.YNCL076= {'latitude':22.879206, 'longitude':102.245327};
latlong.YNCL077= {'latitude':24.127817, 'longitude':104.110334};
latlong.YNCL078= {'latitude':24.65722, 'longitude':99.15749};
latlong.YNCL079= {'latitude':27.953163, 'longitude':103.652823};
latlong.YNCL080= {'latitude':26.491706, 'longitude':100.704921};
latlong.YNCL081= {'latitude':23.069203, 'longitude':102.819567};
latlong.YNCL082= {'latitude':26.911133, 'longitude':98.872921};
latlong.YNCL083= {'latitude':26.101685, 'longitude':102.927903};
latlong.YNCL084= {'latitude':24.618236, 'longitude':97.662678};
latlong.YNCL085= {'latitude':29.544606, 'longitude':106.530635};

latlong.CZCL001= {'latitude':28.732211, 'longitude':95.017836};
latlong.CZCL002= {'latitude':27.452958, 'longitude':99.152723};
latlong.CZCL003= {'latitude':29.507004, 'longitude':103.400912};
latlong.CZCL004= {'latitude':27.891993, 'longitude':98.509416};
latlong.CZCL005= {'latitude':30.56765, 'longitude':102.716894};
latlong.CZCL006= {'latitude':30.078875, 'longitude':102.578305};
latlong.CZCL007= {'latitude':24.240469, 'longitude':98.865132};
latlong.CZCL008= {'latitude':26.911133, 'longitude':98.872921};

latlong.JBCL001= {'latitude':33.892851, 'longitude':106.033317};
latlong.JBCL002= {'latitude':26.070228, 'longitude':98.8593};
latlong.JBCL003= {'latitude':25.868328, 'longitude':110.01025};
latlong.JBCL004= {'latitude':29.507004, 'longitude':103.400912};
latlong.JBCL005= {'latitude':31.595768, 'longitude':110.487231};
latlong.JBCL006= {'latitude':32.24247, 'longitude':108.887181};
latlong.JBCL007= {'latitude':30.239967, 'longitude':108.8271};
latlong.JBCL008= {'latitude':29.736284, 'longitude':109.003815};
latlong.JBCL009= {'latitude':31.31935, 'longitude':110.824406};
latlong.JBCL010= {'latitude':34.15054, 'longitude':107.833844};
latlong.JBCL011= {'latitude':30.56765, 'longitude':102.716894};
latlong.JBCL012= {'latitude':30.078875, 'longitude':102.578305};
latlong.JBCL013= {'latitude':34.584319, 'longitude':105.736932};
latlong.JBCL014= {'latitude':25.499784, 'longitude':105.27763};
latlong.JBCL015= {'latitude':30.308979, 'longitude':109.517433};
latlong.JBCL016= {'latitude':29.71964, 'longitude':115.999848};
latlong.JBCL017= {'latitude':32.812036, 'longitude':106.969741};
latlong.JBCL018= {'latitude':32.291257, 'longitude':109.270397};
latlong.JBCL019= {'latitude':31.509161, 'longitude':109.360531};
latlong.JBCL020= {'latitude':28.279341, 'longitude':103.512505};

latlong.HZCL001= {'latitude':29.507004, 'longitude':103.400912};
latlong.HZCL002= {'latitude':28.951313, 'longitude':107.159108};
latlong.HZCL003= {'latitude':27.891993, 'longitude':98.509416};
latlong.HZCL004= {'latitude':25.693967, 'longitude':100.219209};
latlong.HZCL005= {'latitude':30.078875, 'longitude':102.578305};
latlong.HZCL006= {'latitude':25.605572, 'longitude':99.898375};
latlong.HZCL007= {'latitude':29.747744, 'longitude':102.120066};
latlong.HZCL008= {'latitude':29.235485, 'longitude':102.29397};
latlong.HZCL009= {'latitude':31.039124, 'longitude':103.637342};
latlong.HZCL010= {'latitude':25.279978, 'longitude':98.499988};
latlong.HZCL011= {'latitude':27.706169, 'longitude':103.201059};
latlong.HZCL012= {'latitude':26.874706, 'longitude':100.243241};
latlong.HZCL013= {'latitude':30.56765, 'longitude':102.716894};
latlong.HZCL014= {'latitude':32.446912, 'longitude':104.404308};
latlong.HZCL015= {'latitude':29.141686, 'longitude':107.177888};
latlong.HZCL016= {'latitude':26.343206, 'longitude':108.154491};
latlong.HZCL017= {'latitude':26.408769, 'longitude':106.291405};
latlong.HZCL018= {'latitude':27.699961, 'longitude':106.93126};
latlong.HZCL019= {'latitude':31.595768, 'longitude':110.487231};
latlong.HZCL020= {'latitude':29.050416, 'longitude':103.21674};
latlong.HZCL021= {'latitude':29.507004, 'longitude':103.400912};
latlong.HZCL022= {'latitude':29.957989, 'longitude':101.755331};
latlong.HZCL023= {'latitude':31.579557, 'longitude':103.021281};
latlong.HZCL024= {'latitude':32.136407, 'longitude':107.352775};
latlong.HZCL025= {'latitude':26.940087, 'longitude':101.58605};
latlong.HZCL026= {'latitude':25.875307, 'longitude':100.627538};
latlong.HZCL027= {'latitude':25.049153, 'longitude':102.714601};
latlong.HZCL028= {'latitude':26.070228, 'longitude':98.8593};
latlong.HZCL029= {'latitude':24.538084, 'longitude':99.515112};
latlong.HZCL030= {'latitude':28.279341, 'longitude':103.512505};
latlong.HZCL031= {'latitude':27.452958, 'longitude':99.152723};
latlong.HZCL032= {'latitude':29.141687, 'longitude':107.177888};


latlong.BHCL001 = {'latitude':28.951313, 'longitude':107.159108};

latlong.BHCL002 = {'latitude':35.951313, 'longitude':107.159108};
latlong.BHCL003 = {'latitude':35.951313, 'longitude':119.159108};
latlong.BHCL004 = {'latitude':35.951313, 'longitude':137.159108};
latlong.BHCL005 = {'latitude':35.951313, 'longitude':127.159108};
latlong.BHCL006 = {'latitude':38.951313, 'longitude':107.159108};
latlong.BHCL007 = {'latitude':45.951313, 'longitude':107.159108};
latlong.AE = {'latitude':24, 'longitude':1};

var mapData = [
{'code':'QYYZ001' , 'name':'????????????', 'value':87, 'color':'yellow'},
{'code':'QYYZ002' , 'name':'?????????', 'value':36, 'color':'yellow'},
{'code':'QYYZ003' , 'name':'???????????????', 'value':34, 'color':'yellow'},
{'code':'QYYZ004' , 'name':'??????????????????????????????????????????', 'value':34, 'color':'yellow'},
{'code':'QYYZ005' , 'name':'?????????', 'value':27, 'color':'yellow'},
{'code':'QYYZ006' , 'name':'?????????', 'value':23, 'color':'yellow'},
{'code':'QYYZ007' , 'name':'???????????????????????????????????????', 'value':23, 'color':'yellow'},
{'code':'QYYZ008' , 'name':'?????????', 'value':23, 'color':'yellow'},
{'code':'QYYZ009' , 'name':'?????????', 'value':21, 'color':'yellow'},
{'code':'QYYZ010' , 'name':'?????????', 'value':21, 'color':'yellow'},
{'code':'QYYZ011' , 'name':'?????????', 'value':20, 'color':'yellow'},
{'code':'QYYZ012' , 'name':'?????????', 'value':20, 'color':'yellow'},
{'code':'QYYZ013' , 'name':'?????????', 'value':17, 'color':'yellow'},
{'code':'QYYZ014' , 'name':'?????????????????????', 'value':16, 'color':'yellow'},
{'code':'QYYZ015' , 'name':'?????????', 'value':16, 'color':'yellow'},
{'code':'QYYZ016' , 'name':'???????????????????????????????????????', 'value':15, 'color':'yellow'},
{'code':'QYYZ017' , 'name':'?????????????????????', 'value':15, 'color':'yellow'},
{'code':'QYYZ018' , 'name':'?????????', 'value':15, 'color':'yellow'},
{'code':'QYYZ019' , 'name':'????????????????????????', 'value':15, 'color':'yellow'},
{'code':'QYYZ020' , 'name':'??????', 'value':15, 'color':'yellow'},
{'code':'QYYZ021' , 'name':'??????', 'value':14, 'color':'yellow'},
{'code':'QYYZ022' , 'name':'?????????', 'value':14, 'color':'yellow'},
{'code':'QYYZ023' , 'name':'??????', 'value':14, 'color':'yellow'},
{'code':'QYYZ024' , 'name':'???????????????????????????????????????', 'value':13, 'color':'yellow'},
{'code':'QYYZ025' , 'name':'?????????', 'value':13, 'color':'yellow'},
{'code':'QYYZ026' , 'name':'?????????', 'value':12, 'color':'yellow'},
{'code':'QYYZ027' , 'name':'??????', 'value':12, 'color':'yellow'},
{'code':'QYYZ028' , 'name':'?????????', 'value':12, 'color':'yellow'},
{'code':'QYYZ029' , 'name':'??????????????????????????????', 'value':12, 'color':'yellow'},
{'code':'QYYZ030' , 'name':'?????????????????????', 'value':11, 'color':'yellow'},
{'code':'QYYZ031' , 'name':'??????', 'value':11, 'color':'yellow'},
{'code':'QYYZ032' , 'name':'????????????', 'value':11, 'color':'yellow'},
{'code':'QYYZ033' , 'name':'????????????????????????????????????', 'value':11, 'color':'yellow'},
{'code':'QYYZ034' , 'name':'????????????????????????????????????', 'value':10, 'color':'yellow'},
{'code':'QYYZ035' , 'name':'????????????', 'value':10, 'color':'yellow'},
{'code':'QYYZ036' , 'name':'?????????', 'value':10, 'color':'yellow'},
{'code':'QYYZ037' , 'name':'??????', 'value':10, 'color':'yellow'},
{'code':'QYYZ038' , 'name':'????????????', 'value':10, 'color':'yellow'},
{'code':'QYYZ039' , 'name':'?????????????????????', 'value':10, 'color':'yellow'},
{'code':'QYYZ040' , 'name':'?????????', 'value':9, 'color':'yellow'},
{'code':'QYYZ041' , 'name':'??????', 'value':9, 'color':'yellow'},
{'code':'QYYZ042' , 'name':'?????????', 'value':9, 'color':'yellow'},
{'code':'QYYZ043' , 'name':'?????????', 'value':9, 'color':'yellow'},
{'code':'QYYZ044' , 'name':'?????????', 'value':9, 'color':'yellow'},
{'code':'QYYZ045' , 'name':'?????????', 'value':9, 'color':'yellow'},
{'code':'QYYZ046' , 'name':'?????????', 'value':9, 'color':'yellow'},
{'code':'QYYZ047' , 'name':'?????????', 'value':9, 'color':'yellow'},
{'code':'QYYZ048' , 'name':'?????????', 'value':9, 'color':'yellow'},
{'code':'QYYZ049' , 'name':'?????????', 'value':8, 'color':'yellow'},
{'code':'QYYZ050' , 'name':'?????????', 'value':8, 'color':'yellow'},
{'code':'QYYZ051' , 'name':'?????????', 'value':8, 'color':'yellow'},
{'code':'QYYZ052' , 'name':'?????????', 'value':8, 'color':'yellow'},
{'code':'QYYZ053' , 'name':'?????????', 'value':7, 'color':'yellow'},
{'code':'QYYZ054' , 'name':'?????????', 'value':7, 'color':'yellow'},
{'code':'QYYZ055' , 'name':'?????????', 'value':7, 'color':'yellow'},
{'code':'QYYZ056' , 'name':'?????????', 'value':7, 'color':'yellow'},
{'code':'QYYZ057' , 'name':'????????????????????????', 'value':7, 'color':'yellow'},
{'code':'QYYZ058' , 'name':'??????', 'value':7, 'color':'yellow'},
{'code':'QYYZ059' , 'name':'????????????????????????', 'value':7, 'color':'yellow'},
{'code':'QYYZ060' , 'name':'?????????', 'value':6, 'color':'yellow'},
{'code':'QYYZ061' , 'name':'?????????', 'value':6, 'color':'yellow'},
{'code':'QYYZ062' , 'name':'?????????', 'value':6, 'color':'yellow'},
{'code':'QYYZ063' , 'name':'?????????', 'value':6, 'color':'yellow'},
{'code':'QYYZ064' , 'name':'?????????', 'value':6, 'color':'yellow'},
{'code':'QYYZ065' , 'name':'??????????????????????????????', 'value':5, 'color':'yellow'},
{'code':'QYYZ066' , 'name':'??????', 'value':5, 'color':'yellow'},
{'code':'QYYZ067' , 'name':'?????????', 'value':5, 'color':'yellow'},
{'code':'QYYZ068' , 'name':'?????????', 'value':5, 'color':'yellow'},
{'code':'QYYZ069' , 'name':'??????', 'value':5, 'color':'yellow'},
{'code':'QYYZ070' , 'name':'??????', 'value':5, 'color':'yellow'},
{'code':'QYYZ071' , 'name':'????????????????????????????????????', 'value':5, 'color':'yellow'},
{'code':'QYYZ072' , 'name':'?????????', 'value':5, 'color':'yellow'},
{'code':'QYYZ073' , 'name':'??????', 'value':5, 'color':'yellow'},
{'code':'QYYZ074' , 'name':'?????????', 'value':5, 'color':'yellow'},
{'code':'QYYZ075' , 'name':'?????????????????????????????????', 'value':5, 'color':'yellow'},
{'code':'QYYZ076' , 'name':'??????', 'value':5, 'color':'yellow'},
{'code':'QYYZ077' , 'name':'?????????', 'value':5, 'color':'yellow'},
{'code':'QYYZ078' , 'name':'??????', 'value':5, 'color':'yellow'},
{'code':'QYYZ079' , 'name':'??????', 'value':5, 'color':'yellow'},
{'code':'QYYZ080' , 'name':'?????????', 'value':5, 'color':'yellow'},
{'code':'QYYZ081' , 'name':'????????????????????????????????????', 'value':4, 'color':'yellow'},
{'code':'QYYZ082' , 'name':'????????????????????????????????????', 'value':4, 'color':'yellow'},
{'code':'QYYZ083' , 'name':'?????????', 'value':4, 'color':'yellow'},
{'code':'QYYZ084' , 'name':'??????', 'value':4, 'color':'yellow'},
{'code':'QYYZ085' , 'name':'??????', 'value':4, 'color':'yellow'},
{'code':'QYYZ086' , 'name':'?????????', 'value':4, 'color':'yellow'},
{'code':'QYYZ087' , 'name':'?????????', 'value':4, 'color':'yellow'},
{'code':'QYYZ088' , 'name':'?????????', 'value':4, 'color':'yellow'},
{'code':'QYYZ089' , 'name':'?????????', 'value':4, 'color':'yellow'},
{'code':'QYYZ090' , 'name':'???????????????????????????????????????', 'value':4, 'color':'yellow'},
{'code':'QYYZ091' , 'name':'?????????', 'value':4, 'color':'yellow'},
{'code':'QYYZ092' , 'name':'?????????', 'value':4, 'color':'yellow'},
{'code':'QYYZ093' , 'name':'?????????', 'value':4, 'color':'yellow'},
{'code':'QYYZ094' , 'name':'????????????????????????', 'value':4, 'color':'yellow'},
{'code':'QYYZ095' , 'name':'?????????', 'value':4, 'color':'yellow'},
{'code':'QYYZ096' , 'name':'????????????', 'value':4, 'color':'yellow'},
{'code':'QYYZ097' , 'name':'?????????', 'value':4, 'color':'yellow'},
{'code':'QYYZ098' , 'name':'?????????', 'value':4, 'color':'yellow'},
{'code':'QYYZ099' , 'name':'?????????', 'value':4, 'color':'yellow'},
{'code':'QYYZ100' , 'name':'?????????', 'value':4, 'color':'yellow'},
{'code':'QYYZ101' , 'name':'??????', 'value':3, 'color':'yellow'},
{'code':'QYYZ102' , 'name':'?????????', 'value':3, 'color':'yellow'},
{'code':'QYYZ103' , 'name':'?????????', 'value':3, 'color':'yellow'},
{'code':'QYYZ104' , 'name':'?????????', 'value':3, 'color':'yellow'},
{'code':'QYYZ105' , 'name':'?????????????????????????????????????????????', 'value':3, 'color':'yellow'},
{'code':'QYYZ106' , 'name':'?????????', 'value':3, 'color':'yellow'},
{'code':'QYYZ107' , 'name':'????????????', 'value':3, 'color':'yellow'},
{'code':'QYYZ108' , 'name':'?????????', 'value':3, 'color':'yellow'},
{'code':'QYYZ109' , 'name':'????????????', 'value':3, 'color':'yellow'},
{'code':'QYYZ110' , 'name':'?????????', 'value':3, 'color':'yellow'},
{'code':'QYYZ111' , 'name':'?????????', 'value':3, 'color':'yellow'},
{'code':'QYYZ112' , 'name':'?????????', 'value':3, 'color':'yellow'},
{'code':'QYYZ113' , 'name':'??????', 'value':3, 'color':'yellow'},
{'code':'QYYZ114' , 'name':'?????????', 'value':3, 'color':'yellow'},
{'code':'QYYZ115' , 'name':'??????', 'value':3, 'color':'yellow'},
{'code':'QYYZ116' , 'name':'??????', 'value':3, 'color':'yellow'},
{'code':'QYYZ117' , 'name':'?????????', 'value':3, 'color':'yellow'},
{'code':'QYYZ118' , 'name':'?????????', 'value':3, 'color':'yellow'},
{'code':'QYYZ119' , 'name':'?????????????????????', 'value':3, 'color':'yellow'},
{'code':'QYYZ120' , 'name':'?????????', 'value':3, 'color':'yellow'},
{'code':'QYYZ121' , 'name':'??????????????????????????????', 'value':3, 'color':'yellow'},
{'code':'QYYZ122' , 'name':'?????????', 'value':3, 'color':'yellow'},
{'code':'QYYZ123' , 'name':'?????????', 'value':3, 'color':'yellow'},
{'code':'QYYZ124' , 'name':'?????????????????????', 'value':3, 'color':'yellow'},
{'code':'QYYZ125' , 'name':'??????', 'value':3, 'color':'yellow'},
{'code':'QYYZ126' , 'name':'??????', 'value':3, 'color':'yellow'},
{'code':'QYYZ127' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ128' , 'name':'??????', 'value':2, 'color':'yellow'},
{'code':'QYYZ129' , 'name':'??????', 'value':2, 'color':'yellow'},
{'code':'QYYZ130' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ131' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ132' , 'name':'??????', 'value':2, 'color':'yellow'},
{'code':'QYYZ133' , 'name':'???????????????????????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ134' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ135' , 'name':'????????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ136' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ137' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ138' , 'name':'?????????????????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ139' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ140' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ141' , 'name':'??????', 'value':2, 'color':'yellow'},
{'code':'QYYZ142' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ143' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ144' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ145' , 'name':'??????', 'value':2, 'color':'yellow'},
{'code':'QYYZ146' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ147' , 'name':'????????????????????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ148' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ149' , 'name':'??????', 'value':2, 'color':'yellow'},
{'code':'QYYZ150' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ151' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ152' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ153' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ154' , 'name':'??????', 'value':2, 'color':'yellow'},
{'code':'QYYZ155' , 'name':'??????', 'value':2, 'color':'yellow'},
{'code':'QYYZ156' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ157' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ158' , 'name':'?????????????????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ159' , 'name':'??????', 'value':2, 'color':'yellow'},
{'code':'QYYZ160' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ161' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ162' , 'name':'???????????????????????????????????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ163' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ164' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ165' , 'name':'??????', 'value':2, 'color':'yellow'},
{'code':'QYYZ166' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ167' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ168' , 'name':'?????????????????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ169' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ170' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ171' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ172' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ173' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ174' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ175' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ176' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ177' , 'name':'??????????????????????????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ178' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ179' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ180' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ181' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ182' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ183' , 'name':'?????????', 'value':2, 'color':'yellow'},
{'code':'QYYZ184' , 'name':'??????', 'value':2, 'color':'yellow'},
{'code':'QYYZ185' , 'name':'??????', 'value':2, 'color':'yellow'},
{'code':'QYYZ186' , 'name':'??????', 'value':2, 'color':'yellow'},
{'code':'QYYZ187' , 'name':'??????', 'value':2, 'color':'yellow'},
{'code':'QYYZ188' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ189' , 'name':'????????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ190' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ191' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ192' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ193' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ194' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ195' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ196' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ197' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ198' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ199' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ200' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ201' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ202' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ203' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ204' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ205' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ206' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ207' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ208' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ209' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ210' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ211' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ212' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ213' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ214' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ215' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ216' , 'name':'????????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ217' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ218' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ219' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ220' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ221' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ222' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ223' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ224' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ225' , 'name':'????????????????????????????????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ226' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ227' , 'name':'??????????????????????????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ228' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ229' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ230' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ231' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ232' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ233' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ234' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ235' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ236' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ237' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ238' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ239' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ240' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ241' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ242' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ243' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ244' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ245' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ246' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ247' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ248' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ249' , 'name':'????????????????????????????????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ250' , 'name':'???????????????????????????????????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ251' , 'name':'????????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ252' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ253' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ254' , 'name':'?????????????????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ255' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ256' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ257' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ258' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ259' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ260' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ261' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ262' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ263' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ264' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ265' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ266' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ267' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ268' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ269' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ270' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ271' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ272' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ273' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ274' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ275' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ276' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ277' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ278' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ279' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ280' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ281' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ282' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ283' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ284' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ285' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ286' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ287' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ288' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ289' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ290' , 'name':'?????????????????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ291' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ292' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ293' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ294' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ295' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ296' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ297' , 'name':'???????????????????????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ298' , 'name':'????????????????????????????????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ299' , 'name':'?????????????????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ300' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ301' , 'name':'???????????????????????????????????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ302' , 'name':'?????????????????????????????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ303' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ304' , 'name':'??????????????????????????????????????????????????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ305' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ306' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ307' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ308' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ309' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ310' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ311' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ312' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ313' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ314' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ315' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ316' , 'name':'?????????', 'value':1, 'color':'yellow'},
{'code':'QYYZ317' , 'name':'??????', 'value':1, 'color':'yellow'},
{'code':'QYYZ318' , 'name':'??????', 'value':1, 'color':'yellow'},

{'code':'XYCL001' , 'name':'????????????', 'value':147, 'color':'#33FF33'},
{'code':'XYCL002' , 'name':'?????????', 'value':40, 'color':'#33FF33'},
{'code':'XYCL003' , 'name':'???????????????????????????????????????', 'value':38, 'color':'#33FF33'},
{'code':'XYCL004' , 'name':'???????????????', 'value':38, 'color':'#33FF33'},
{'code':'XYCL005' , 'name':'?????????', 'value':33, 'color':'#33FF33'},
{'code':'XYCL006' , 'name':'?????????', 'value':33, 'color':'#33FF33'},
{'code':'XYCL007' , 'name':'?????????', 'value':29, 'color':'#33FF33'},
{'code':'XYCL008' , 'name':'??????', 'value':29, 'color':'#33FF33'},
{'code':'XYCL009' , 'name':'?????????', 'value':23, 'color':'#33FF33'},
{'code':'XYCL010' , 'name':'?????????', 'value':23, 'color':'#33FF33'},
{'code':'XYCL011' , 'name':'?????????', 'value':19, 'color':'#33FF33'},
{'code':'XYCL012' , 'name':'??????', 'value':16, 'color':'#33FF33'},
{'code':'XYCL013' , 'name':'?????????', 'value':15, 'color':'#33FF33'},
{'code':'XYCL014' , 'name':'????????????????????????', 'value':15, 'color':'#33FF33'},
{'code':'XYCL015' , 'name':'??????', 'value':13, 'color':'#33FF33'},
{'code':'XYCL016' , 'name':'????????????', 'value':13, 'color':'#33FF33'},
{'code':'XYCL017' , 'name':'????????????????????????', 'value':13, 'color':'#33FF33'},
{'code':'XYCL018' , 'name':'?????????', 'value':11, 'color':'#33FF33'},
{'code':'XYCL019' , 'name':'??????????????????????????????', 'value':11, 'color':'#33FF33'},
{'code':'XYCL020' , 'name':'?????????', 'value':11, 'color':'#33FF33'},
{'code':'XYCL021' , 'name':'?????????', 'value':10, 'color':'#33FF33'},
{'code':'XYCL022' , 'name':'??????', 'value':10, 'color':'#33FF33'},
{'code':'XYCL023' , 'name':'????????????', 'value':10, 'color':'#33FF33'},
{'code':'XYCL024' , 'name':'??????', 'value':10, 'color':'#33FF33'},
{'code':'XYCL025' , 'name':'?????????', 'value':10, 'color':'#33FF33'},
{'code':'XYCL026' , 'name':'??????', 'value':9, 'color':'#33FF33'},
{'code':'XYCL027' , 'name':'??????', 'value':9, 'color':'#33FF33'},
{'code':'XYCL028' , 'name':'?????????', 'value':9, 'color':'#33FF33'},
{'code':'XYCL029' , 'name':'??????', 'value':9, 'color':'#33FF33'},
{'code':'XYCL030' , 'name':'??????', 'value':9, 'color':'#33FF33'},
{'code':'XYCL031' , 'name':'?????????', 'value':9, 'color':'#33FF33'},
{'code':'XYCL032' , 'name':'?????????', 'value':9, 'color':'#33FF33'},
{'code':'XYCL033' , 'name':'??????', 'value':8, 'color':'#33FF33'},
{'code':'XYCL034' , 'name':'??????', 'value':8, 'color':'#33FF33'},
{'code':'XYCL035' , 'name':'?????????', 'value':8, 'color':'#33FF33'},
{'code':'XYCL036' , 'name':'?????????', 'value':8, 'color':'#33FF33'},
{'code':'XYCL037' , 'name':'?????????', 'value':7, 'color':'#33FF33'},
{'code':'XYCL038' , 'name':'?????????', 'value':7, 'color':'#33FF33'},
{'code':'XYCL039' , 'name':'?????????', 'value':6, 'color':'#33FF33'},
{'code':'XYCL040' , 'name':'??????', 'value':6, 'color':'#33FF33'},
{'code':'XYCL041' , 'name':'??????????????????????????????', 'value':6, 'color':'#33FF33'},
{'code':'XYCL042' , 'name':'?????????????????????', 'value':6, 'color':'#33FF33'},
{'code':'XYCL043' , 'name':'??????', 'value':5, 'color':'#33FF33'},
{'code':'XYCL044' , 'name':'?????????', 'value':5, 'color':'#33FF33'},
{'code':'XYCL045' , 'name':'?????????', 'value':5, 'color':'#33FF33'},
{'code':'XYCL046' , 'name':'?????????', 'value':5, 'color':'#33FF33'},
{'code':'XYCL047' , 'name':'??????', 'value':5, 'color':'#33FF33'},
{'code':'XYCL048' , 'name':'??????', 'value':5, 'color':'#33FF33'},
{'code':'XYCL049' , 'name':'??????', 'value':5, 'color':'#33FF33'},
{'code':'XYCL050' , 'name':'?????????', 'value':5, 'color':'#33FF33'},
{'code':'XYCL051' , 'name':'?????????', 'value':5, 'color':'#33FF33'},
{'code':'XYCL052' , 'name':'?????????', 'value':5, 'color':'#33FF33'},
{'code':'XYCL053' , 'name':'?????????', 'value':5, 'color':'#33FF33'},
{'code':'XYCL054' , 'name':'?????????????????????', 'value':5, 'color':'#33FF33'},
{'code':'XYCL055' , 'name':'?????????', 'value':4, 'color':'#33FF33'},
{'code':'XYCL056' , 'name':'????????????', 'value':4, 'color':'#33FF33'},
{'code':'XYCL057' , 'name':'?????????', 'value':4, 'color':'#33FF33'},
{'code':'XYCL058' , 'name':'??????', 'value':4, 'color':'#33FF33'},
{'code':'XYCL059' , 'name':'??????', 'value':4, 'color':'#33FF33'},
{'code':'XYCL060' , 'name':'?????????', 'value':4, 'color':'#33FF33'},
{'code':'XYCL061' , 'name':'?????????', 'value':4, 'color':'#33FF33'},
{'code':'XYCL062' , 'name':'?????????', 'value':4, 'color':'#33FF33'},
{'code':'XYCL063' , 'name':'?????????', 'value':4, 'color':'#33FF33'},
{'code':'XYCL064' , 'name':'??????', 'value':4, 'color':'#33FF33'},
{'code':'XYCL065' , 'name':'?????????', 'value':4, 'color':'#33FF33'},
{'code':'XYCL066' , 'name':'?????????????????????', 'value':4, 'color':'#33FF33'},
{'code':'XYCL067' , 'name':'?????????', 'value':4, 'color':'#33FF33'},
{'code':'XYCL068' , 'name':'?????????', 'value':4, 'color':'#33FF33'},
{'code':'XYCL069' , 'name':'?????????', 'value':4, 'color':'#33FF33'},
{'code':'XYCL070' , 'name':'???????????????????????????????????????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL071' , 'name':'?????????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL072' , 'name':'?????????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL073' , 'name':'?????????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL074' , 'name':'?????????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL075' , 'name':'?????????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL076' , 'name':'?????????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL077' , 'name':'??????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL078' , 'name':'??????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL079' , 'name':'??????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL080' , 'name':'?????????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL081' , 'name':'???????????????????????????????????????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL082' , 'name':'?????????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL083' , 'name':'?????????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL084' , 'name':'????????????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL085' , 'name':'?????????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL086' , 'name':'?????????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL087' , 'name':'?????????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL088' , 'name':'?????????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL089' , 'name':'?????????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL090' , 'name':'?????????', 'value':3, 'color':'#33FF33'},
{'code':'XYCL091' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL092' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL093' , 'name':'??????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL094' , 'name':'????????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL095' , 'name':'????????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL096' , 'name':'?????????????????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL097' , 'name':'?????????????????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL098' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL099' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL100' , 'name':'????????????????????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL101' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL102' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL103' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL104' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL105' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL106' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL107' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL108' , 'name':'??????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL109' , 'name':'??????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL110' , 'name':'??????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL111' , 'name':'??????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL112' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL113' , 'name':'??????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL114' , 'name':'??????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL115' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL116' , 'name':'??????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL117' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL118' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL119' , 'name':'?????????????????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL120' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL121' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL122' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL123' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL124' , 'name':'??????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL125' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL126' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL127' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL128' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL129' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL130' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL131' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL132' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL133' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL134' , 'name':'?????????????????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL135' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL136' , 'name':'???????????????????????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL137' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL138' , 'name':'?????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL139' , 'name':'??????????????????', 'value':2, 'color':'#33FF33'},
{'code':'XYCL140' , 'name':'??????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL141' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL142' , 'name':'??????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL143' , 'name':'??????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL144' , 'name':'??????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL145' , 'name':'??????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL146' , 'name':'??????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL147' , 'name':'?????????????????????????????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL148' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL149' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL150' , 'name':'????????????????????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL151' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL152' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL153' , 'name':'??????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL154' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL155' , 'name':'????????????????????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL156' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL157' , 'name':'??????????????????????????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL158' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL159' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL160' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL161' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL162' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL163' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL164' , 'name':'??????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL165' , 'name':'??????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL166' , 'name':'??????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL167' , 'name':'??????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL168' , 'name':'??????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL169' , 'name':'??????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL170' , 'name':'??????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL171' , 'name':'??????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL172' , 'name':'??????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL173' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL174' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL175' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL176' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL177' , 'name':'?????????????????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL178' , 'name':'??????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL179' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL180' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL181' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL182' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL183' , 'name':'??????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL184' , 'name':'??????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL185' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL186' , 'name':'?????????????????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL187' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL188' , 'name':'?????????????????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL189' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL190' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL191' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL192' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL193' , 'name':'??????????????????????????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL194' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL195' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL196' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL197' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL198' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL199' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL200' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL201' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL202' , 'name':'????????????????????????????????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL203' , 'name':'???????????????????????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL204' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL205' , 'name':'?????????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL206' , 'name':'??????', 'value':1, 'color':'#33FF33'},
{'code':'XYCL207' , 'name':'???????????????????????????????????????', 'value':1, 'color':'#33FF33'},
{'code':'YNCL001' , 'name':'?????????', 'value':42, 'color':'#00FFFF'},
{'code':'YNCL002' , 'name':'?????????', 'value':23, 'color':'#00FFFF'},
{'code':'YNCL003' , 'name':'????????????????????????', 'value':20, 'color':'#00FFFF'},
{'code':'YNCL004' , 'name':'???????????????????????????', 'value':17, 'color':'#00FFFF'},
{'code':'YNCL005' , 'name':'????????????????????????', 'value':16, 'color':'#00FFFF'},
{'code':'YNCL006' , 'name':'?????????', 'value':14, 'color':'#00FFFF'},
{'code':'YNCL007' , 'name':'?????????????????????', 'value':14, 'color':'#00FFFF'},
{'code':'YNCL008' , 'name':'?????????', 'value':9, 'color':'#00FFFF'},
{'code':'YNCL009' , 'name':'?????????', 'value':7, 'color':'#00FFFF'},
{'code':'YNCL010' , 'name':'?????????', 'value':7, 'color':'#00FFFF'},
{'code':'YNCL011' , 'name':'?????????', 'value':6, 'color':'#00FFFF'},
{'code':'YNCL012' , 'name':'?????????????????????', 'value':6, 'color':'#00FFFF'},
{'code':'YNCL013' , 'name':'?????????', 'value':6, 'color':'#00FFFF'},
{'code':'YNCL014' , 'name':'???????????????????????????', 'value':6, 'color':'#00FFFF'},
{'code':'YNCL015' , 'name':'???????????????', 'value':5, 'color':'#00FFFF'},
{'code':'YNCL016' , 'name':'?????????', 'value':5, 'color':'#00FFFF'},
{'code':'YNCL017' , 'name':'?????????', 'value':5, 'color':'#00FFFF'},
{'code':'YNCL018' , 'name':'?????????', 'value':5, 'color':'#00FFFF'},
{'code':'YNCL019' , 'name':'?????????', 'value':5, 'color':'#00FFFF'},
{'code':'YNCL020' , 'name':'????????????????????????????????????', 'value':5, 'color':'#00FFFF'},
{'code':'YNCL021' , 'name':'?????????', 'value':4, 'color':'#00FFFF'},
{'code':'YNCL022' , 'name':'?????????', 'value':4, 'color':'#00FFFF'},
{'code':'YNCL023' , 'name':'?????????', 'value':4, 'color':'#00FFFF'},
{'code':'YNCL024' , 'name':'?????????', 'value':4, 'color':'#00FFFF'},
{'code':'YNCL025' , 'name':'?????????', 'value':4, 'color':'#00FFFF'},
{'code':'YNCL026' , 'name':'??????????????????????????????', 'value':4, 'color':'#00FFFF'},
{'code':'YNCL027' , 'name':'?????????', 'value':4, 'color':'#00FFFF'},
{'code':'YNCL028' , 'name':'?????????', 'value':4, 'color':'#00FFFF'},
{'code':'YNCL029' , 'name':'?????????', 'value':3, 'color':'#00FFFF'},
{'code':'YNCL030' , 'name':'?????????', 'value':3, 'color':'#00FFFF'},
{'code':'YNCL031' , 'name':'?????????', 'value':3, 'color':'#00FFFF'},
{'code':'YNCL032' , 'name':'?????????????????????', 'value':3, 'color':'#00FFFF'},
{'code':'YNCL033' , 'name':'?????????', 'value':3, 'color':'#00FFFF'},
{'code':'YNCL034' , 'name':'?????????', 'value':3, 'color':'#00FFFF'},
{'code':'YNCL035' , 'name':'?????????', 'value':3, 'color':'#00FFFF'},
{'code':'YNCL036' , 'name':'?????????', 'value':3, 'color':'#00FFFF'},
{'code':'YNCL037' , 'name':'?????????', 'value':3, 'color':'#00FFFF'},
{'code':'YNCL038' , 'name':'?????????', 'value':3, 'color':'#00FFFF'},
{'code':'YNCL039' , 'name':'?????????????????????????????????', 'value':2, 'color':'#00FFFF'},
{'code':'YNCL040' , 'name':'????????????', 'value':2, 'color':'#00FFFF'},
{'code':'YNCL041' , 'name':'?????????????????????', 'value':2, 'color':'#00FFFF'},
{'code':'YNCL042' , 'name':'?????????', 'value':2, 'color':'#00FFFF'},
{'code':'YNCL043' , 'name':'?????????', 'value':2, 'color':'#00FFFF'},
{'code':'YNCL044' , 'name':'?????????', 'value':2, 'color':'#00FFFF'},
{'code':'YNCL045' , 'name':'?????????', 'value':2, 'color':'#00FFFF'},
{'code':'YNCL046' , 'name':'?????????????????????', 'value':2, 'color':'#00FFFF'},
{'code':'YNCL047' , 'name':'?????????', 'value':2, 'color':'#00FFFF'},
{'code':'YNCL048' , 'name':'?????????????????????', 'value':2, 'color':'#00FFFF'},
{'code':'YNCL049' , 'name':'???????????????????????????????????????', 'value':2, 'color':'#00FFFF'},
{'code':'YNCL050' , 'name':'??????????????????????????????????????????', 'value':2, 'color':'#00FFFF'},
{'code':'YNCL051' , 'name':'?????????????????????????????????', 'value':2, 'color':'#00FFFF'},
{'code':'YNCL052' , 'name':'????????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL053' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL054' , 'name':'?????????????????????????????????????????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL055' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL056' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL057' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL058' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL059' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL060' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL061' , 'name':'??????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL062' , 'name':'??????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL063' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL064' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL065' , 'name':'?????????????????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL066' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL067' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL068' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL069' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL070' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL071' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL072' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL073' , 'name':'?????????????????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL074' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL075' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL076' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL077' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL078' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL079' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL080' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL081' , 'name':'?????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL082' , 'name':'???????????????????????????????????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL083' , 'name':'????????????????????????????????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL084' , 'name':'????????????????????????????????????', 'value':1, 'color':'#00FFFF'},
{'code':'YNCL085' , 'name':'??????????????????', 'value':1, 'color':'#00FFFF'},

{'code':'HZCL001' , 'name':'????????????', 'value':37, 'color':'#FF7744'},
{'code':'HZCL002' , 'name':'???????????????????????????????????????', 'value':23, 'color':'#FF7744'},
{'code':'HZCL003' , 'name':'??????????????????????????????', 'value':9, 'color':'#FF7744'},
{'code':'HZCL004' , 'name':'?????????', 'value':8, 'color':'#FF7744'},
{'code':'HZCL005' , 'name':'?????????', 'value':7, 'color':'#FF7744'},
{'code':'HZCL006' , 'name':'?????????????????????', 'value':5, 'color':'#FF7744'},
{'code':'HZCL007' , 'name':'?????????', 'value':5, 'color':'#FF7744'},
{'code':'HZCL008' , 'name':'?????????', 'value':4, 'color':'#FF7744'},
{'code':'HZCL009' , 'name':'????????????', 'value':3, 'color':'#FF7744'},
{'code':'HZCL010' , 'name':'?????????', 'value':3, 'color':'#FF7744'},
{'code':'HZCL011' , 'name':'?????????', 'value':3, 'color':'#FF7744'},
{'code':'HZCL012' , 'name':'????????????????????????', 'value':3, 'color':'#FF7744'},
{'code':'HZCL013' , 'name':'?????????', 'value':2, 'color':'#FF7744'},
{'code':'HZCL014' , 'name':'?????????', 'value':2, 'color':'#FF7744'},
{'code':'HZCL015' , 'name':'?????????', 'value':2, 'color':'#FF7744'},
{'code':'HZCL016' , 'name':'?????????', 'value':1, 'color':'#FF7744'},
{'code':'HZCL017' , 'name':'?????????', 'value':1, 'color':'#FF7744'},
{'code':'HZCL018' , 'name':'?????????', 'value':1, 'color':'#FF7744'},
{'code':'HZCL019' , 'name':'???????????????', 'value':1, 'color':'#FF7744'},
{'code':'HZCL020' , 'name':'?????????????????????', 'value':1, 'color':'#FF7744'},
{'code':'HZCL021' , 'name':'????????????', 'value':1, 'color':'#FF7744'},
{'code':'HZCL022' , 'name':'?????????', 'value':1, 'color':'#FF7744'},
{'code':'HZCL023' , 'name':'??????', 'value':1, 'color':'#FF7744'},
{'code':'HZCL024' , 'name':'?????????', 'value':1, 'color':'#FF7744'},
{'code':'HZCL025' , 'name':'?????????', 'value':1, 'color':'#FF7744'},
{'code':'HZCL026' , 'name':'?????????', 'value':1, 'color':'#FF7744'},
{'code':'HZCL027' , 'name':'?????????', 'value':1, 'color':'#FF7744'},
{'code':'HZCL028' , 'name':'?????????', 'value':1, 'color':'#FF7744'},
{'code':'HZCL029' , 'name':'??????????????????????????????????????????', 'value':1, 'color':'#FF7744'},
{'code':'HZCL030' , 'name':'?????????', 'value':1, 'color':'#FF7744'},
{'code':'HZCL031' , 'name':'????????????????????????', 'value':1, 'color':'#FF7744'},
{'code':'HZCL032' , 'name':'?????????', 'value':1, 'color':'#FF7744'},

{'code':'JBCL001' , 'name':'??????', 'value':14, 'color':'#FF00FF'},
{'code':'JBCL002' , 'name':'?????????', 'value':6, 'color':'#FF00FF'},
{'code':'JBCL003' , 'name':'?????????????????????', 'value':4, 'color':'#FF00FF'},
{'code':'JBCL004' , 'name':'????????????', 'value':4, 'color':'#FF00FF'},
{'code':'JBCL005' , 'name':'???????????????', 'value':3, 'color':'#FF00FF'},
{'code':'JBCL006' , 'name':'??????', 'value':3, 'color':'#FF00FF'},
{'code':'JBCL007' , 'name':'?????????', 'value':2, 'color':'#FF00FF'},
{'code':'JBCL008' , 'name':'?????????', 'value':2, 'color':'#FF00FF'},
{'code':'JBCL009' , 'name':'?????????', 'value':2, 'color':'#FF00FF'},
{'code':'JBCL010' , 'name':'??????', 'value':2, 'color':'#FF00FF'},
{'code':'JBCL011' , 'name':'?????????', 'value':2, 'color':'#FF00FF'},
{'code':'JBCL012' , 'name':'?????????', 'value':2, 'color':'#FF00FF'},
{'code':'JBCL013' , 'name':'?????????', 'value':1, 'color':'#FF00FF'},
{'code':'JBCL014' , 'name':'?????????', 'value':1, 'color':'#FF00FF'},
{'code':'JBCL015' , 'name':'?????????', 'value':1, 'color':'#FF00FF'},
{'code':'JBCL016' , 'name':'?????????', 'value':1, 'color':'#FF00FF'},
{'code':'JBCL017' , 'name':'??????', 'value':1, 'color':'#FF00FF'},
{'code':'JBCL018' , 'name':'??????', 'value':1, 'color':'#FF00FF'},
{'code':'JBCL019' , 'name':'??????', 'value':1, 'color':'#FF00FF'},
{'code':'JBCL020' , 'name':'?????????', 'value':1, 'color':'#FF00FF'},

{'code':'CZCL001' , 'name':'?????????', 'value':12, 'color':'blue'},
{'code':'CZCL002' , 'name':'????????????????????????', 'value':4, 'color':'blue'},
{'code':'CZCL003' , 'name':'????????????', 'value':3, 'color':'blue'},
{'code':'CZCL004' , 'name':'??????????????????????????????', 'value':3, 'color':'blue'},
{'code':'CZCL005' , 'name':'?????????', 'value':2, 'color':'blue'},
{'code':'CZCL006' , 'name':'?????????', 'value':1, 'color':'blue'},
{'code':'CZCL007' , 'name':'??????????????????????????????????????????', 'value':1, 'color':'blue'},
{'code':'CZCL008' , 'name':'????????????????????????????????????', 'value':1, 'color':'blue'},

{'code':'BHCL001' , 'name':'???????????????????????????????????????', 'value':11, 'color':'#666666'},
];

var max = -Infinity;
var min = Infinity;
mapData.forEach(function (itemOpt) {
    if (itemOpt.value > max) {
        max = itemOpt.value;
    }
    if (itemOpt.value < min) {
        min = itemOpt.value;
    }
});
option = {
    title : {
        text: '',
        subtext: '',
        left: 'center',
    },
    tooltip : {
        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:['#666666','#5555FF','#FF00FF','#FF7744','#00FFFF','#33FF33','#FFFF00'],
	series : [
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: mapData.map(function (itemOpt) {
                return {
                    name: itemOpt.name,
                    value: [
                        latlong[itemOpt.code].longitude,
                        latlong[itemOpt.code].latitude,
                        itemOpt.value
                    ],
                    label: {
                        emphasis: {
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: itemOpt.color
                        }
                    }
                };
            })
        },
	        {
	            name: '????????????????????????',
	            type: 'pie',
	            radius : '20%',
	            center: ['center', '17%'],
	            data:[
	                {value:11, name:'????????????'},
	                {value:27, name:'????????????'},
	                {value:54, name:'????????????'},
	                {value:133, name:'????????????'},
	                {value:345, name:'?????????'},
	                {value:1102, name:'????????????'},
	                {value:1398, name:'???????????????'}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
    ],
	legend: {
	        orient: 'vertical',
	        x: 'left',
	        y:'bottom',
	        data: ['????????????','????????????','????????????','????????????','?????????','????????????','???????????????'],
	        formatter: "{name}"
	    },
    visualMap: {
        show: false,
        min: 0,
        max: max,
        inRange: {
            symbolSize: [6, 60]
        }
    },
    geo: {
        name: '???????????????????????????',
        type: 'map',
        map: 'china',
        roam: true,
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
            },
            emphasis: {
            }
        }
    },
};