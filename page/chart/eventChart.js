let dom_month = document.getElementById('month-container');
let monthChart = echarts.init(dom_month, null, {
  renderer: 'canvas',
  useDirtyRect: false,
});
let month_app = {};

let month_option;

month_option = {
  title: {
    text: '數量(億)', // 收集資料筆數
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  legend: {
    data: ['1分鐘/筆'],
    textStyle: {
      fontSize: 20, // 调整图例文字的字体大小
    },
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], // 修改這裡
    axisLabel: {
      fontSize: 20, // 调整 Y 轴文字的字体大小
    },
  },
  yAxis: {
    type: 'value',
    // name: '數量（億）', // 在这里添加单位文字
    axisLabel: {
      fontSize: 20, // 调整 Y 轴文字的字体大小
      formatter: function (value, index) {
        // 将刻度值除以相应的倍数，使其变成两位数
        // return (value / 10000000).toFixed(2); // 1,000,000 为 10^6
        return Math.round(value / 10000000); // 或者使用 parseInt(value / 1000000)
      },
    },
  },
  series: [
    {
      name: '', // ex: 1分鐘/筆
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [422642685, 382131637, 422697001, 409064957, 422898819, 582094174, 601785005, 601521394, 685545684, 703271591, 685582599, 708761805],
    },
    // {
    //   name: '數據二',
    //   type: 'line',
    //   // stack: 'Total', // 設定相同的stack值
    //   data: [220, 132, 191, 234, 290, 330, 310, 182, 191, 234, 290, 330],
    // },
  ],
};

if (month_option && typeof month_option === 'object') {
  monthChart.setOption(month_option);
}

window.addEventListener('resize', monthChart.resize);
