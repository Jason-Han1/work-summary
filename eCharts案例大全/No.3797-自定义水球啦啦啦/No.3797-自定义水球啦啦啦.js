var option = {
    backgroundColor: '#000',
    series: [{
        type: 'liquidFill',
        data: [0.7, 0.1, 0.55, 0.5, 0.4, 0.35, 0.3, 0.25, 0.2, 0.15, 0.1],
        radius: '90%',
        waveLength: '90%',
        waveHeight: '0',
        amplitude: 10,
        outline: {
            show: false
        },
        backgroundStyle: {
            borderColor: 'rgba(0, 0, 0, 0.5)',
            borderWidth: 1,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
        },
        color: ['#cc0000', '#cc3399'],
       shape:"path://M649.1 160c22.4 0 43.2 10.1 57 27.8 17.9 23 37.2 46.5 55.9 69.2 97.6 118.8 198.5 241.7 198.5 391.6 0 41.6-8.3 82.2-24.6 120.4-15.8 37.1-38.4 70.4-67.1 99.2-28.8 28.8-62.1 51.4-99.2 67.1-38.3 16.3-78.8 24.6-120.4 24.6s-82.2-8.3-120.4-24.6c-37.1-15.8-70.4-38.4-99.2-67.1-28.8-28.8-51.4-62.1-67.1-99.2-16.3-38.3-24.6-78.8-24.6-120.4 0-149.9 100.9-272.8 198.5-391.6 18.7-22.7 38-46.3 55.9-69.2 13.6-17.7 34.3-27.8 56.8-27.8m0-64c-40.1 0-80.2 17.5-107.4 52.4-111 142.2-268 295.3-268 500.2 0 205.9 169.4 375.4 375.4 375.4s375.4-169.4 375.4-375.4c0-205-157-358-267.9-500.2C729.2 113.5 689.1 96 649.1 96zM223.3 64.4c8.5 10.8 17.4 21.8 26.1 32.3 22.1 26.9 45 54.8 61.2 83.2 16 28 23.4 52.6 23.4 77.4 0 29.3-11.6 57-32.7 78.1-21.1 21.1-48.8 32.7-78.1 32.7s-57-11.6-78.1-32.7c-21.1-21.1-32.7-48.8-32.7-78.1 0-24.8 7.4-49.5 23.4-77.4 16.2-28.4 39.1-56.2 61.2-83.2 8.8-10.6 17.8-21.5 26.3-32.3m0-64.4c-18.7 0-37.3 8.1-50 24.4C121.6 90.6 48.5 161.8 48.5 257.3c0 95.9 78.9 174.7 174.7 174.7S398 353.1 398 257.3c0-95.4-73.1-166.7-124.7-232.9C260.6 8.1 241.9 0 223.3 0zM96 573.1c17.3 21.4 32 41.7 32 60.2 0 17.3-14.7 32-32 32s-32-14.7-32-32c0-18.5 14.7-38.7 32-60.2m0-81.1c-10.3 0-20.5 4.5-27.5 13.4C40.2 541.8 0 580.9 0 633.3c0 52.7 43.3 96 96 96s96-43.3 96-96c0-52.4-40.2-91.6-68.5-127.9-7-8.9-17.2-13.4-27.5-13.4z",
      
        label: {
            normal: {
                position: ['60%', '-50%'],
                formatter: function() {
                    return '';
                },
            }
        }
    }]

};
