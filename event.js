// 从 localStorage 中获取存储的值
let storedData = localStorage.getItem('count');
// 将存储的值转换为数字，如果为空则使用默认值
let count = parseInt(storedData, 10) || 6883600956;

// 更新计数器的值，并将其保存到 localStorage
function updateCount() {
  count += 1;
  localStorage.setItem('count', count.toString());

  // 这里可以添加更新 UI 或其他操作的代码
}

// 设置定时器，每3秒钟调用一次 updateCount 函数
setInterval(updateCount, 3000);
let data = {
  count: storedData,
};

jQuery(document).ready(function ($) {
  //TODO: Implement this getJSON call when Sean puts the JSON file in the app.
  //$.getJSON('DAFILE.json', function(data) {
  setupFlipclock();
  setInterval(function () {
    onePlay();
  }, 3000);
  // It may be possible to set the getJSON call in a timer instead of animating once every half second.

  // Initialize the clock from an integer in our JSON object.
  function setupFlipclock() {
    let count = data.count;
    let cards = count.split('');
    // Now that we have an array of values, each representing a place in our long digit, we must set the classes for our html stack.
    // In this case, 'active' is the number we want to show, and 'before' is the number that comes before it.
    $('#billion_' + (cards[0] - 1)).addClass('before');
    $('#billion_' + cards[0]).addClass('active');

    $('#TTmillion_' + (cards[1] - 1)).addClass('before');
    $('#TTmillion_' + cards[1]).addClass('active');

    $('#tenmillion_' + (cards[2] - 1)).addClass('before');
    $('#tenmillion_' + cards[2]).addClass('active');

    $('#millionPlay_' + (cards[3] - 1)).addClass('before');
    $('#millionPlay_' + cards[3]).addClass('active');

    $('#hThousandPlay_' + (cards[4] - 1)).addClass('before');
    $('#hThousandPlay_' + cards[4]).addClass('active');

    $('#tThousandPlay_' + (cards[5] - 1)).addClass('before');
    $('#tThousandPlay_' + cards[5]).addClass('active');

    $('#thousandPlay_' + (cards[6] - 1)).addClass('before');
    $('#thousandPlay_' + cards[6]).addClass('active');

    $('#hundredPlay_' + (cards[7] - 1)).addClass('before');
    $('#hundredPlay_' + cards[7]).addClass('active');

    $('#tenPlay_' + (cards[8] - 1)).addClass('before');
    $('#tenPlay_' + cards[8]).addClass('active');

    $('#onePlay_' + (cards[9] - 1)).addClass('before');
    $('#onePlay_' + cards[9]).addClass('active');
  }

  // Idealy these could all be driven by one function.
  function onePlay() {
    let aa = $('ul.onePlay li.active');
    // If the card rolls over to zero, trigger the next card.
    if ($('.inn', aa).html() == '9') {
      tenPlay();
    }
    if (aa.html() == undefined) {
      aa = $('ul.onePlay li').eq(0);
      aa.addClass('before')
        .removeClass('active')
        .next('li')
        .addClass('active')
        .closest('body')
        .addClass('play');
    } else if (aa.is(':last-child')) {
      $('ul.onePlay li').removeClass('before');
      aa.addClass('before').removeClass('active');
      aa = $('ul.onePlay li').eq(0);
      aa.addClass('active').closest('body').addClass('play');
    } else {
      $('ul.onePlay li').removeClass('before');
      aa.addClass('before')
        .removeClass('active')
        .next('li')
        .addClass('active')
        .closest('body')
        .addClass('play');
    }
  }

  //TODO: Figure out why ten column rolls over on the first go around but hundred doesn't.
  function tenPlay() {
    let aa = $('ul.tenPlay li.active');
    if ($('.inn', aa).html() == '9') {
      hundredPlay();
    }
    if (aa.html() == undefined) {
      aa = $('ul.tenPlay li').eq(0);
      aa.addClass('before')
        .removeClass('active')
        .next('li')
        .addClass('active')
        .closest('body')
        .addClass('play');
    } else if (aa.is(':last-child')) {
      $('ul.tenPlay li').removeClass('before');
      aa.addClass('before').removeClass('active');
      aa = $('ul.tenPlay li').eq(0);
      aa.addClass('active').closest('body').addClass('play');
    } else {
      $('ul.tenPlay li').removeClass('before');
      aa.addClass('before')
        .removeClass('active')
        .next('li')
        .addClass('active')
        .closest('body')
        .addClass('play');
    }
  }

  function hundredPlay() {
    let aa = $('ul.hundredPlay li.active');
    if ($('.inn', aa).html() == '9') {
      thousandPlay();
    }
    if (aa.html() == undefined) {
      aa = $('ul.hundredPlay li').eq(0);
      aa.addClass('before')
        .removeClass('active')
        .next('li')
        .addClass('active')
        .closest('body')
        .addClass('play');
    } else if (aa.is(':last-child')) {
      $('ul.hundredPlay li').removeClass('before');
      aa.addClass('before').removeClass('active');
      aa = $('ul.hundredPlay li').eq(0);
      aa.addClass('active').closest('body').addClass('play');
    } else {
      $('ul.hundredPlay li').removeClass('before');
      aa.addClass('before')
        .removeClass('active')
        .next('li')
        .addClass('active')
        .closest('body')
        .addClass('play');
    }
  }

  function thousandPlay() {
    let aa = $('ul.thousandPlay li.active');

    if ($('.inn', aa).html() == '9') {
      tThousandPlay();
    }
    if (aa.html() == undefined) {
      aa = $('ul.thousandPlay li').eq(0);
      aa.addClass('before')
        .removeClass('active')
        .next('li')
        .addClass('active')
        .closest('body')
        .addClass('play');
    } else if (aa.is(':last-child')) {
      $('ul.thousandPlay li').removeClass('before');
      aa.addClass('before').removeClass('active');
      aa = $('ul.thousandPlay li').eq(0);
      aa.addClass('active').closest('body').addClass('play');
    } else {
      $('ul.thousandPlay li').removeClass('before');
      aa.addClass('before')
        .removeClass('active')
        .next('li')
        .addClass('active')
        .closest('body')
        .addClass('play');
    }
  }

  function tThousandPlay() {
    let aa = $('ul.tThousandPlay li.active');
    console.log($('.inn', aa).html());
    if ($('.inn', aa).html() == '9') {
      hThousandPlay();
    }
    if (aa.html() == undefined) {
      aa = $('ul.tThousandPlay li').eq(0);
      aa.addClass('before')
        .removeClass('active')
        .next('li')
        .addClass('active')
        .closest('body')
        .addClass('play');
    } else if (aa.is(':last-child')) {
      $('ul.tThousandPlay li').removeClass('before');
      aa.addClass('before').removeClass('active');
      aa = $('ul.tThousandPlay li').eq(0);
      aa.addClass('active').closest('body').addClass('play');
    } else {
      $('ul.tThousandPlay li').removeClass('before');
      aa.addClass('before')
        .removeClass('active')
        .next('li')
        .addClass('active')
        .closest('body')
        .addClass('play');
    }
  }

  function hThousandPlay() {
    let aa = $('ul.hThousandPlay li.active');
    if ($('.inn', aa).html() == '9') {
      millionPlay();
    }
    if (aa.html() == undefined) {
      aa = $('ul.hThousandPlay li').eq(0);
      aa.addClass('before')
        .removeClass('active')
        .next('li')
        .addClass('active')
        .closest('body')
        .addClass('play');
    } else if (aa.is(':last-child')) {
      $('ul.hThousandPlay li').removeClass('before');
      aa.addClass('before').removeClass('active');
      aa = $('ul.hTousandPlay li').eq(0);
      aa.addClass('active').closest('body').addClass('play');
    } else {
      $('ul.hThousandPlay li').removeClass('before');
      aa.addClass('before')
        .removeClass('active')
        .next('li')
        .addClass('active')
        .closest('body')
        .addClass('play');
    }
  }

  function millionPlay() {
    let aa = $('ul.millionPlay li.active');

    if (aa.html() == undefined) {
      aa = $('ul.millionPlay li').eq(0);
      aa.addClass('before')
        .removeClass('active')
        .next('li')
        .addClass('active')
        .closest('body')
        .addClass('play');
    } else if (aa.is(':last-child')) {
      $('ul.millionPlay li').removeClass('before');
      aa.addClass('before').removeClass('active');
      aa = $('ul.hThousandPlay li').eq(0);
      aa.addClass('active').closest('body').addClass('play');
    } else {
      $('ul.millionPlay li').removeClass('before');
      aa.addClass('before')
        .removeClass('active')
        .next('li')
        .addClass('active')
        .closest('body')
        .addClass('play');
    }
  }
  // }); closes our JSON function
});
