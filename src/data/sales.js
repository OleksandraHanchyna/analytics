export const options = {
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
      max: 28,
    }
  },
};

const labels = [2,4,6,8,10,12,14,16,18,20,22,24,26,28];

export const data = {
  labels,
  datasets: [
    {
      data: [4,6,8,10,7,13,18,15,12,10,22,23,28,19],
      barThickness: 3,
    },
  ],
};