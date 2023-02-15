export const customerData = {
  series: [76, 67, 61],
  options: {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: -90,
        endAngle: 270,
        expandOnClick: false,
        hollow: {
          margin: 10,
          size: '50%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        }
      }
    },
    colors: ['#00CCF9', '#0987E1', '#1900B4'],
  },
};