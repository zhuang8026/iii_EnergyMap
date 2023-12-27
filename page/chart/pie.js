var dom = document.getElementById('pie-container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false,
});
var app = {};

var option;

option = {
  title: {
    text: '智慧家電種類佔比',
    subtext: '數據分析',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
  },
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
        { value: 98, name: '電視 98 台' },
        { value: 26, name: '冷氣機 26 台' },
        { value: 31, name: '洗衣機 31 台' },
        { value: 22, name: '冰箱 22 台' },
        { value: 8, name: '開飲機 8 台' },

        { value: 21, name: '掃地機器人 21 台' },
        { value: 12, name: '空氣清淨機 12 台' },
        { value: 12, name: '電扇 12 台' },
        { value: 11, name: '除濕機 11 台' },
        { value: 3, name: '烘衣機 3 台' },
        { value: 2, name: '熱水器 2 台' },
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
