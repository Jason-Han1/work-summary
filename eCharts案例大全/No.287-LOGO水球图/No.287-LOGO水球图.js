// shape path路径 可以去任意图标网站找，比如 以下三个路径，取SVG path标签 d属性

// 钉钉
// https://www.iconfont.cn/search/index?searchType=icon&q=%E9%92%89%E9%92%89
// 微信
// https://www.iconfont.cn/search/index?searchType=icon&q=%E5%BE%AE%E4%BF%A1&page=1&fromCollection=1&fills=&tag=
// QQ
// https://www.iconfont.cn/search/index?searchType=icon&q=QQ&page=1&fromCollection=1&fills=&tag=



option = {
    series: [{
        type: 'liquidFill',
        radius: '30%',
        center: ['25%', '50%'],
        data: [0.7],
        shape: 'path://M863.552 398.816c-1.568 6.56-5.376 16.16-10.752 27.744h0.128l-0.64 1.056c-31.264 67.072-112.96 198.592-112.96 198.592s-0.128-0.32-0.448-0.8l-23.872 41.6h115.072l-219.776 292.736 49.888-199.136H569.6l31.456-131.68c-25.44 6.144-55.52 14.624-91.168 26.08 0 0-48.192 28.288-138.88-54.4 0 0-61.12-53.92-25.664-67.424 15.072-5.728 73.184-12.992 118.912-19.2 61.792-8.32 99.84-12.8 99.84-12.8s-190.56 2.88-235.744-4.256c-45.216-7.104-102.528-82.656-114.752-149.056 0 0-18.88-36.448 40.64-19.2 59.52 17.28 305.824 67.2 305.824 67.2S239.712 297.504 218.4 273.504c-21.312-24-62.72-131.008-57.344-196.768 0 0 2.336-16.384 19.136-12 0 0 236.832 108.416 398.784 167.744s302.752 89.536 284.576 166.336z',
        backgroundStyle: {
            borderWidth: 10,
            borderColor: 'rgb(255, 192, 203)',
            color: 'transparent',
            shadowColor: 'rgb(0, 192, 203)',
            shadowBlur: 3 
            // 三条数据都显示shadowBlur 火狐浏览器有bug，未知原因
        },
        // color: ['rgba(255, 192, 203, .5)'],
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 1,
                color: 'rgba(0, 192, 203, 1)'
            }, {
                offset: 0.5,
                color: 'rgba(0, 192, 203, .5)'
            }, {
                offset: 0,
                color: 'rgba(0, 192, 203, .1)'
            }],
            globalCoord: false
        },
        outline: {
            show: false
        },
        label: {
            formatter: ''
        },
    }, {
        type: 'liquidFill',
        radius: '30%',
        center: ['50%', '50%'],
        data: [0.5],
        shape: 'path://M670.023548 368.251062c10.259668 0 20.38119 0.787946 30.53648 1.902326-27.361161-127.435391-163.538657-222.082004-319.066873-222.082004-173.813674 0-316.202639 118.450762-316.202639 268.934079 0 86.831624 47.341215 158.128437 126.509299 213.512838l-31.583323 95.101985 110.560048-55.386448c39.524179 7.748475 71.228251 15.809057 110.716614 15.809057 9.930163 0 19.771299-0.451278 29.473265-1.187035-6.123464-21.147646-9.771551-43.274596-9.771551-66.340941C401.265478 480.380862 519.85234 368.251062 670.023548 368.251062L670.023548 368.251062zM500.047272 282.537911c23.887037 0 39.591717 15.70468 39.591717 39.470967 0 23.679305-15.705704 39.542598-39.591717 39.542598-23.627117 0-47.410799-15.863293-47.410799-39.542598C452.636472 298.17403 476.366943 282.537911 500.047272 282.537911L500.047272 282.537911zM278.751167 361.551476c-23.731494 0-47.619554-15.863293-47.619554-39.542598 0-23.76731 23.88806-39.470967 47.619554-39.470967s39.488363 15.636119 39.488363 39.470967C318.23953 345.688183 302.482661 361.551476 278.751167 361.551476L278.751167 361.551476zM278.751167 361.551476M958.709483 614.70822c0-126.403898-126.543068-229.42832-268.652669-229.42832-150.485363 0-268.915659 103.09503-268.915659 229.42832 0 126.753869 118.498858 229.462089 268.915659 229.462089 31.514761 0 63.272046-7.886621 94.89016-15.809057l86.690408 47.567365-23.76731-79.048357C911.351895 749.174748 958.709483 686.041872 958.709483 614.70822L958.709483 614.70822zM602.842473 575.132876c-15.70468 0-31.618115-15.633049-31.618115-31.618115 0-15.739473 15.914458-31.583323 31.618115-31.583323 24.010857 0 39.576367 15.84385 39.576367 31.583323C642.41884 559.499827 626.853329 575.132876 602.842473 575.132876L602.842473 575.132876zM776.78099 575.132876c-15.565511 0-31.445176-15.633049-31.445176-31.618115 0-15.739473 15.809057-31.583323 31.445176-31.583323 23.801079 0 39.576367 15.84385 39.576367 31.583323C816.356334 559.499827 800.581046 575.132876 776.78099 575.132876L776.78099 575.132876zM776.78099 575.132876',
        backgroundStyle: {
            borderWidth: 10,
            borderColor: 'rgb(255, 165, 0)',
            color: 'transparent',
            shadowColor: 'rgba(189, 16, 112, 1)',
            shadowBlur: 3
        },
        // color: ['rgba(255, 192, 203, .5)'],
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 1,
                color: 'rgba(189, 16, 112, 1)'
            }, {
                offset: 0.5,
                color: 'rgba(189, 16, 112, .5)'
            }, {
                offset: 0,
                color: 'rgba(189, 16, 112, 0.1)'
            }],
            globalCoord: false
        },
        outline: {
            show: false
        },
        label: {
            formatter: ''
        },
    },{
        type: 'liquidFill',
        radius: '30%',
        center: ['75%', '50%'],
        data: [0.4],
        shape: 'path://M264.533333 384c0 0-38.4 12.8-25.6 98.133333 0 0-72.533333 59.733333-85.333333 153.6 0 0-8.533333 157.866667 81.066667 21.333333 0 0 21.333333 51.2 55.466667 98.133333 0 0-68.266667 21.333333-59.733333 76.8 0 0-4.266667 64 140.8 59.733333 0 0 102.4-8.533333 132.266667-46.933333L512 844.8l0 0 12.8 0c29.866667 42.666667 132.266667 46.933333 132.266667 46.933333 145.066667 4.266667 140.8-59.733333 140.8-59.733333 4.266667-55.466667-59.733333-76.8-59.733333-76.8 38.4-46.933333 55.466667-98.133333 55.466667-98.133333 89.6 140.8 81.066667-21.333333 81.066667-21.333333-17.066667-93.866667-85.333333-153.6-85.333333-153.6 8.533333-85.333333-25.6-98.133333-25.6-98.133333C750.933333 123.733333 520.533333 128 512 128l0 0C503.466667 128 273.066667 123.733333 264.533333 384z',
        backgroundStyle: {
            borderWidth: 10,
            borderColor: 'rgba(0, 158, 204, 1)',
            color: 'transparent',
            shadowColor: 'rgb(255, 192, 203)',
            shadowBlur: 3
        },
        // color: ['rgba(255, 192, 203, .5)'],
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 1,
                color: 'rgba(255, 192, 203, 1)'
            }, {
                offset: 0.5,
                color: 'rgba(255, 192, 203, 0.5)'
            }, {
                offset: 0,
                color: 'rgba(255, 192, 203, 0.1)'
            }],
            globalCoord: false
        },
        outline: {
            show: false
        },
        label: {
            formatter: ''
        },
    }]
};