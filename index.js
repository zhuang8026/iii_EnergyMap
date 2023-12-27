var svg = d3.select('svg');

const g = svg.append('g');

var svg = d3
  .select('svg')
  .attr('width', window.innerWidth)
  .attr('height', window.innerHeight);

// 定義一個濾鏡效果，增加3D效果
svg
  .append('defs')
  .append('filter')
  .attr('id', 'drop-shadow')
  .append('feDropShadow')
  .attr('dx', 3)
  .attr('dy', 3)
  .attr('stdDeviation', 3)
  .attr('flood-opacity', 0.4); // 設置透明度為0.5;

// // 加上畫布放大的功能
svg.call(
  d3.zoom().on('zoom', () => {
    g.attr('transform', d3.event.transform);
  })
);

let screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
console.log('屏幕宽度：' + screenWidth);

let svg_sreen = {
  center: [121.5, 23.7],
  scale: 12000,
};

if (screenWidth <= 1920 && screenWidth > 1600) {
  svg_sreen['center'] = [121.2, 23.75];
  svg_sreen['scale'] = 14500;
}

if (screenWidth <= 2560 && screenWidth > 1920) {
  svg_sreen['center'] = [120.9, 23.75];
  svg_sreen['scale'] = 22000;
}

// 120.979531, 23.978089
var projectmethod = d3
  .geoMercator()
  // .center([121.5, 24.5])
  // .scale(25000)
  .center(svg_sreen.center)
  .scale(svg_sreen.scale)
  .translate([svg.attr('width') / 2, svg.attr('height') / 2]);

var pathGenerator = d3.geoPath().projection(projectmethod);

// var projectmethod = d3.geoMercator().center([123, 24]).scale(5500);
// var pathGenerator = d3.geoPath().projection(projectmethod);
d3.json('./COUNTY_MOI_1090820.json').then((data) => {
  const geometries = topojson.feature(data, data.objects['COUNTY_MOI_1090820']);

  g.append('path');
  const paths = g.selectAll('path').data(geometries.features);

  paths
    .enter()
    .append('path')
    .attr('d', pathGenerator)
    .attr('class', 'county')

    .style('filter', 'url(#drop-shadow)') // 使用濾鏡效果

    // 加上簡易版本 tooltip
    .append('title')
    .text((d) => d.properties['COUNTYNAME']);

  // 在地圖上顯示縣市名稱
  g.selectAll('text')
    .data(geometries.features)
    .enter()
    .append('text')
    .attr('x', (d) => pathGenerator.centroid(d)[0])
    .attr('y', (d) => pathGenerator.centroid(d)[1])
    .text((d) => `${d.properties['COUNTYNAME']}`)
    .attr('text-anchor', 'middle') // 文字錨點設在中央
    .attr('dy', '0.4em') // 調整文字位置
    .attr('class', 'county-label');

  // '臺中市', '花蓮縣', '新北市', '臺北市', '桃園市', '新竹縣'
  g.selectAll('path')
    .filter((d) => {
      return ['新北市'].some((city) =>
        d.properties['COUNTYNAME'].includes(city)
      );
    })
    .style('fill', '#21a1a0')
    .on('mouseover', function () {
      // 鼠標懸停時的事件處理
      d3.select(this).style('fill', '#4bd0ce'); // 變色
    })
    .on('mouseout', function () {
      // 鼠標離開時的事件處理
      d3.select(this).style('fill', '#21a1a0'); // 恢復預設填充顏色
    });

  g.selectAll('path')
    .filter((d) => {
      return ['臺北市'].some((city) =>
        d.properties['COUNTYNAME'].includes(city)
      );
    })
    .style('fill', '#A5DEE4')
    .on('mouseover', function () {
      // 鼠標懸停時的事件處理
      d3.select(this).style('fill', '#4bd0ce'); // 變色
    })
    .on('mouseout', function () {
      // 鼠標離開時的事件處理
      d3.select(this).style('fill', '#A5DEE4'); // 恢復預設填充顏色
    });

  g.selectAll('path')
    .filter((d) => {
      return ['桃園市'].some((city) =>
        d.properties['COUNTYNAME'].includes(city)
      );
    })
    .style('fill', '#33A6B8')
    .on('mouseover', function () {
      // 鼠標懸停時的事件處理
      d3.select(this).style('fill', '#4bd0ce'); // 變色
    })
    .on('mouseout', function () {
      // 鼠標離開時的事件處理
      d3.select(this).style('fill', '#33A6B8'); // 恢復預設填充顏色
    });

  g.selectAll('path')
    .filter((d) => {
      return ['新竹縣'].some((city) =>
        d.properties['COUNTYNAME'].includes(city)
      );
    })
    .style('fill', '#33A6B8')
    .on('mouseover', function () {
      // 鼠標懸停時的事件處理
      d3.select(this).style('fill', '#4bd0ce'); // 變色
    })
    .on('mouseout', function () {
      // 鼠標離開時的事件處理
      d3.select(this).style('fill', '#33A6B8'); // 恢復預設填充顏色
    });

  g.selectAll('path')
    .filter((d) => {
      return ['臺中市'].some((city) =>
        d.properties['COUNTYNAME'].includes(city)
      );
    })
    .style('fill', '#7DB9DE')
    .on('mouseover', function () {
      // 鼠標懸停時的事件處理
      d3.select(this).style('fill', '#4bd0ce'); // 變色
    })
    .on('mouseout', function () {
      // 鼠標離開時的事件處理
      d3.select(this).style('fill', '#7DB9DE'); // 恢復預設填充顏色
    });

  g.selectAll('path')
    .filter((d) => {
      return ['花蓮縣'].some((city) =>
        d.properties['COUNTYNAME'].includes(city)
      );
    })
    .style('fill', '#5DAC81')
    .on('mouseover', function () {
      // 鼠標懸停時的事件處理
      d3.select(this).style('fill', '#4bd0ce'); // 變色
    })
    .on('mouseout', function () {
      // 鼠標離開時的事件處理
      d3.select(this).style('fill', '#5DAC81'); // 恢復預設填充顏色
    });

  // 台中市的名字
  const targetCity = [
    '新北市',
    '臺中市',
    '花蓮縣',
    '臺北市',
    '桃園市',
    // '新竹縣',
  ];

  targetCity.map((city) => {
    let geometry = geometries.features.find(
      (feature) => feature.properties['COUNTYNAME'] === city
    );

    let center = pathGenerator.centroid(geometry);

    // 计算相邻色块的位置
    let adjacentBlockPosition = [center[0] + 50, center[1]]; // 调整 X 坐标

    let svg_rx =
      city == '臺中市'
        ? 430
        : city == '花蓮縣'
        ? -40
        : city == '新竹縣'
        ? 310
        : city == '桃園市'
        ? 400
        : city == '臺北市'
        ? 400
        : city == '新北市'
        ? -30
        : 0;
    let svg_ry =
      city == '臺中市'
        ? 30
        : city == '花蓮縣'
        ? 50
        : city == '新竹縣'
        ? 60
        : city == '桃園市'
        ? 0
        : city == '臺北市'
        ? 50
        : city == '新北市'
        ? -10
        : 0;

    let svg_tx =
      city == '臺中市'
        ? 315
        : city == '花蓮縣'
        ? -155
        : city == '新竹縣'
        ? 195
        : city == '桃園市'
        ? 280
        : city == '臺北市'
        ? 280
        : city == '新北市'
        ? -145
        : 0;
    let svg_ty =
      city == '臺中市'
        ? -3
        : city == '花蓮縣'
        ? 15
        : city == '新竹縣'
        ? 25
        : city == '桃園市'
        ? -33
        : city == '臺北市'
        ? 15
        : city == '新北市'
        ? -43
        : 0;

    let people =
      city == '臺中市'
        ? 150
        : city == '花蓮縣'
        ? 27
        : city == '新竹縣'
        ? 6
        : city == '桃園市'
        ? 128
        : city == '臺北市'
        ? 73
        : city == '新北市'
        ? 387
        : 0;

    // 在计算出的 SVG 座标位置放置色块和箭头
    const blockGroup = g
      .append('g')
      .attr(
        'transform',
        `translate(${adjacentBlockPosition[0] - svg_rx},${
          adjacentBlockPosition[1] - svg_ry
        })`
      );

    // 添加色块
    blockGroup
      .append('rect')
      .attr('width', 230) // 色块宽度
      .attr('height', 60) // 色块高度
      .style('stroke', '#fff') // 设置边框颜色
      .style('stroke-width', '5') // 设置边框宽度
      .style('fill', 'rgba(255, 255, 255, 0.5)') // 去除填充颜色
      // .style('fill-opacity', '0.5') // 设置背景透明度，值在0（完全透明）和1（完全不透明）之间
      .attr('rx', 5) // 指定水平方向的圆角半径
      .attr('ry', 5) // 指定垂直方向的圆角半径
      .on('click', () => console.log('click!'));

    // 在右中部分添加一条线
    blockGroup
      .append('line')
      .attr('x1', city == '新北市' || city == '花蓮縣' ? 0 : 230) // 起始点 x 坐标
      .attr('y1', city == '新北市' || city == '花蓮縣' ? 30 : 30) // 起始点 y 坐标
      .attr('x2', city == '新北市' || city == '花蓮縣' ? -80 : 350) // 终点 x 坐标
      .attr('y2', city == '新北市' || city == '花蓮縣' ? 30 : 30) // 终点 y 坐标
      .style('stroke', '#fff') // 设置线的颜色
      .style('stroke-width', '2'); // 设置线的宽度

    // 在线的末端添加一个小球
    blockGroup
      .append('circle')
      .attr('cx', city == '新北市' || city == '花蓮縣' ? -80 : 350) // 圆心 x 坐标（与线的终点 x 坐标一致）
      .attr('cy', city == '新北市' || city == '花蓮縣' ? 30 : 30) // 圆心 y 坐标（与线的终点 y 坐标一致）
      .attr('r', 5) // 圆的半径
      .style('fill', '#fff'); // 设置小球的颜色

    // // 添加箭头
    // // 色块的右下角箭头的尺寸
    // const arrowWidth = 15;
    // const arrowHeight = 15;
    // let points =
    //   city == '花蓮縣' || city == '新北市'
    //     ? `0,${60} ${arrowWidth},${60} 0,${60 - arrowHeight}`
    //     : `${230 - arrowWidth},${60} ${230},${60} ${230},${60 - arrowHeight}`;
    // blockGroup
    //   .append('polygon')
    //   .attr('points', points)
    //   .style('fill', '#CB4042'); // 箭头颜色

    // 在矩形內新增文字
    g.append('text')
      .attr('x', adjacentBlockPosition[0] - svg_tx) // 調整 X 座標，使文字居中在矩形內
      .attr('y', adjacentBlockPosition[1] - svg_ty) // 調整 Y 座標，使文字居中在矩形內

      .text(`${city == '桃園市' ? '桃竹' : city} `) // 添加地区名部分

      // 在地区名后添加放大的数字和“户”
      // .append('tspan')
      // .text(`${people} 戶`)
      // .attr('font-size', '40px') // 设置放大后的文字大小
      // .attr('fill', '#006284') // 设置放大后的文字颜色

      .text(`${city == '桃園市' ? '桃竹' : city} ${people} 戶`)
      .attr('font-size', '30px') // 設置文字大小
      // .attr('font-weight', 'bold') // 設置文字大小
      .attr('fill', '#006284') // 設置文字顏色
      .attr('text-anchor', 'middle') // 文字錨點設在中央
      .attr('alignment-baseline', 'middle') // 對齊方式設置為中央
      .attr('cursor', 'pointer')
      .on('click', () => {
        // 色块点击事件
        window.location.href = `./page/process/index.html`;
      });
  });

  let countp = document.getElementById('countp');
  countp.addEventListener('click', () => {
    window.location.href = `./page/chart/index.html`;
  });
});
