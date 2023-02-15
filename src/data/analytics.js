
export const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const optionsScale = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        display: false,
        beginAtZero: true,
      },
      grid: {
        offset: true,
      },
      border: {
        display: false,
      },
    },
    y: {
      ticks: {
        display: false,
      },
      grid: {
        drawBorder: false,
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
};

export const dataScale = {
  labels,
  datasets: [
    {
      data: [],
    },
  ],
};



export const optionsChart = {
  responsive: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        drawBorder: false,
        display: false,
      },
      border:{
        display:false
      },
    },
    y: {
      ticks: {
        display: false,
      },
      grid: {
        drawBorder: false,
        display: false,
      },
      border: {
        display: false
      },
      max: 60,
    }
  },
  elements: {
    point: {
      radius: 0,
    }
  }
};

export const labelsChart = [0,2,3,4,6,7,9,10,11,12,14,17,18,21,22,23,25,26,28,30,31,32,34,36,37,40,42,44,45,47,48,50];

export const dataChart = {
  labels : labelsChart,
  datasets: [
    {
      fill: true,
      data: [0,2,8,8,16,12,32,44,20,12,16,42,38,48,20,26,19,24,28,20,30,32,34,27,40,44,42,40,32,30,26,40],
      borderColor: 'rgba(0, 148, 255, 0.9)',
      backgroundColor: 'rgba(0, 148, 255, 0.4)',
      borderWidth: 0.5,
      borderJoinStyle: 'round'
    },
  ],
};