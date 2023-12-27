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

// 加上畫布放大的功能
// svg.call(
//   d3.zoom().on('zoom', () => {
//     g.attr('transform', d3.event.transform);
//   })
// );

// 120.979531, 23.978089
var projectmethod = d3
  .geoMercator()
  // .center([121.5, 24.5])
  // .scale(25000)
  .center([121.5, 23.7])
  .scale(12000)
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
        ? 350
        : city == '花蓮縣'
        ? 20
        : city == '新竹縣'
        ? 310
        : city == '桃園市'
        ? 310
        : city == '臺北市'
        ? 280
        : city == '新北市'
        ? 0
        : 0;
    let svg_ry =
      city == '臺中市'
        ? 50
        : city == '花蓮縣'
        ? 100
        : city == '新竹縣'
        ? 60
        : city == '桃園市'
        ? 50
        : city == '臺北市'
        ? 80
        : city == '新北市'
        ? 60
        : 0;

    let svg_tx =
      city == '臺中市'
        ? 235
        : city == '花蓮縣'
        ? -95
        : city == '新竹縣'
        ? 195
        : city == '桃園市'
        ? 195
        : city == '臺北市'
        ? 165
        : city == '新北市'
        ? -115
        : 0;
    let svg_ty =
      city == '臺中市'
        ? 15
        : city == '花蓮縣'
        ? 65
        : city == '新竹縣'
        ? 25
        : city == '桃園市'
        ? 15
        : city == '臺北市'
        ? 47
        : city == '新北市'
        ? 27
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

    // 色块的右下角箭头的尺寸
    const arrowWidth = 15;
    const arrowHeight = 15;

    // 在计算出的 SVG 座标位置放置色块和箭头
    const blockGroup = svg
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
      .style('fill', '#006284') // 色块填充颜色
      .attr('rx', 5) // 指定水平方向的圆角半径
      .attr('ry', 5); // 指定垂直方向的圆角半径
    // .on('click', () => {
    //   // 色块点击事件
    //   alert('Block Clicked!');
    // });

    let points =
      city == '花蓮縣' || city == '新北市'
        ? `0,${60} ${arrowWidth},${60} 0,${60 - arrowHeight}`
        : `${230 - arrowWidth},${60} ${230},${60} ${230},${60 - arrowHeight}`;

    // 添加箭头
    blockGroup
      .append('polygon')
      .attr('points', points)
      .style('fill', '#CB4042'); // 箭头颜色

    // 在矩形內新增文字
    svg
      .append('text')
      .attr('x', adjacentBlockPosition[0] - svg_tx) // 調整 X 座標，使文字居中在矩形內
      .attr('y', adjacentBlockPosition[1] - svg_ty) // 調整 Y 座標，使文字居中在矩形內
      .text(`${city == '桃園市' ? '桃竹苗' : city} ${people} 戶`)
      .attr('font-size', '30px') // 設置文字大小
      // .attr('font-weight', 'bold') // 設置文字大小
      .attr('fill', 'white') // 設置文字顏色
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
  // 在計算出的SVG座標位置放置色塊
  // svg
  //   .append('rect')
  //   .attr('x', adjacentBlockPosition[0] - svg_rx) // SVG X 座標
  //   .attr('y', adjacentBlockPosition[1] - svg_ry) // SVG Y 座標
  //   .attr('width', 230) // 色塊寬度
  //   .attr('height', 60) // 色塊高度
  //   .style('fill', '#006284') // 色塊填充顏色
  //   .attr('rx', 5) // 指定水平方向的圆角半径
  //   .attr('ry', 5); // 指定垂直方向的圆角半径
});
