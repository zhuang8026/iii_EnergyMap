var dom = document.getElementById('pie-top-container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false,
});
var app = {};

var option;

option = {
  title: {
    text: '智慧家電持有用戶佔比',
    subtext: '數據分析',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
  },
  // legend: {
  //   orient: 'vertical',
  //   left: 'left',
  // },
  legend: {
    type: 'scroll',
    orient: 'vertical',
    right: 10,
    top: 20,
    bottom: 20,
    textStyle: {
      fontSize: 16, // 調整 Legend 文字大小
    },
  },
  series: [
    {
      name: '設備數量',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 126, name: '有 126 台' },
        { value: 27, name: '沒有 27 台' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
      label: {
        fontSize: 16, // 調整文字大小
      },
    },
  ],
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
