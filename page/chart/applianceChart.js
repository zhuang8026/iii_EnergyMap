var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false,
});
var app = {};

var option;

const data = {
  冷氣: 0.337982505,
  冰箱: 0.185191436,
  洗衣機: 0.177147518,
  開飲機: 0.14762322,
  電視: 0.144998207,
  電腦: 0.002963925,
  電鍋: 0.002866561,
  除濕機: 0.001226628,
};

const months = {
  January: 422642685,
  February: 382131637,
  March: 422697001,
  April: 409064957,
  May: 422898819,
  June: 582094174,
  July: 601785005,
  August: 601521394,
  September: 685545684,
  October: 703271591,
  November: 685582599,
  December: 708761805,
};

const resultArray = [];

// Loop through each appliance
for (const appliance in data) {
  const applianceData = {
    name: appliance,
    type: 'line',
    data: []
  };

  // Loop through each month to calculate and push the result into the data array
  for (const month in months) {
    const result = months[month] * data[appliance] * 1 / 4;
    applianceData.data.push(Math.round(result));
  }

  resultArray.push(applianceData);
}

console.log(resultArray);

option = {
  title: {
    text: '數量(千萬)', // 使用電器筆數
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['冷氣','冰箱','電視','開飲機','洗衣機','電鍋','除濕機','電腦',],
    textStyle: {
      fontSize: 20, // 调整图例文字的字体大小
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], // 修改這裡
    axisLabel: {
      fontSize: 20, // 调整 Y 轴文字的字体大小
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      fontSize: 20, // 调整 Y 轴文字的字体大小
      formatter: function (value, index) {
        // 将刻度值转换为科学计数法
        // return value.toExponential(2);
        return Math.round(value / 10000000); // 或者使用 parseInt(value / 1000000)
      },
    },
  },
  series: resultArray
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
