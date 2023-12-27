let data = [
  {
    title: '資料下載',
    content: `資料下載資料下載資料下載資料下載資料下載資料下載資料下載資料下載資料下載資料下載資料下載資料下載資料下載資料下載資料下載資料下載資料下載資料下載資料下載資料下載資料下載資料下載資料下載`,
  },
  {
    title: 'NILM電器拆解',
    content: `NILM電器拆解NILM電器拆解NILM電器拆解NILM電器拆解NILM電器拆解NILM電器拆解NILM電器拆解NILM電器拆解NILM電器拆解NILM電器拆解NILM電器拆解NILM電器拆解NILM電器拆解NILM電器拆解`,
  },
  {
    title: '服務運算',
    content: `服務運算服務運算服務運算服務運算服務運算服務運算服務運算服務運算服務運算服務運算服務運算服務運算服務運算服務運算服務運算服務運算服務運算服務運算服務運算服務運算`,
  },
  {
    title: 'AMI資料格式轉換',
    content: `AMI資料格式轉換AMI資料格式轉換AMI資料格式轉換AMI資料格式轉換AMI資料格式轉換AMI資料格式轉換AMI資料格式轉換AMI資料格式轉換AMI資料格式轉換AMI資料格式轉換`,
  },
];
document.addEventListener('DOMContentLoaded', function () {
  // Get all the icon elements
  var icons = document.querySelectorAll('.nav-tabs .presentation .icon');
  var h3Element = document.querySelector('.tab-pane h3');
  var pElement = document.querySelector('.tab-pane p');
  var nilmTable = document.querySelector('.nilm_table');
  var downloadTable = document.querySelector('.download_table');
  var serveIMG = document.querySelector('.serve_img');
  var tabContent = document.querySelector('.tab-content');

  // Add click event listeners to all icons
  icons.forEach(function (icon, index) {
    icon.addEventListener('click', function () {
      switch (index) {
        case 0:
          // delete previous icon class
          icon.classList.remove('fa-solid');
          icon.classList.remove('fa-download');
          callPostAPI(index + 1); // API
          // 替换内容
          setTimeout(() => {
            tabContent.classList.remove('end');
            downloadTable.classList.remove('none');
          }, 3000);

          break;
        case 1:
          // delete previous icon class
          icon.classList.remove('fa-brands');
          icon.classList.remove('fa-stack-overflow');
          callPostAPI(index + 1); // API

          // 替换内容
          setTimeout(() => {
            downloadTable.classList.add('none');
            nilmTable.classList.remove('none');
          }, 3000);
          break;
        case 2:
          // delete previous icon class

          icon.classList.remove('fa-solid');
          icon.classList.remove('fa-calculator');
          callThreeGetAPI();

          // 替换内容
          setTimeout(() => {
            nilmTable.classList.add('none');
            serveIMG.classList.remove('none');
          }, 3000);

          break;
        // case 3:
        //   // delete previous icon class
        //   icon.classList.remove('fa-bolt');
        //   icon.classList.remove('fa-retweet');
        //   callPostAPI(index); // API
        //   break;
        default:
          break;
      }
      // h3Element.innerText = data[index]['title'];
      // pElement.innerText = data[index]['content'];

      // add new icon class
      icon.classList.add('fas');
      icon.classList.add('fa-cog');

      // Add loading class to the clicked icon
      icon.classList.add('loading');
      var parentInner = icon.parentElement;
      parentInner.style.border = '8px solid #787878';

      // Set a timeout for 3 seconds (3000 milliseconds)
      setTimeout(() => {
        // Remove loading class from the clicked icon
        icon.classList.remove('loading');
        // Change the clicked icon to the next icon
        if (index <= icons.length - 1) {
          // Remove current icon class and add the next icon class
          icon.classList.remove('fa-cog');
          icon.classList.add('fa-check'); // Change this to the class of your B icon

          // Set color to red during loading
          icon.style.color = '#57b87b';

          // Set color to green upon completion
          // icons[index + 1].classList.add('completed');

          // Create a line element
          var line = document.createElement('div');
          line.className = 'connecting-line';
          document.body.appendChild(line);

          if (index != icons.length - 1) {
            // Set the line's position between A and B icons
            var iconA = icons[index].getBoundingClientRect();
            var iconB = icons[index + 1].getBoundingClientRect();
            line.style.width = iconB.left - iconA.right + 'px';
            line.style.left = iconA.right + 'px';
            line.style.top = iconA.top + iconA.height / 2 - 15 + 'px'; // Adjust for line height (30px / 2)
            icons[index + 1].classList.remove('disable');
          }

          // Change the border color of the parent element with the class 'inner'
          // var parentInner = icon.parentElement;
          parentInner.style.border = '8px solid #57b87b';

          document.getElementsByClassName('connecting-line')[
            index - 1
          ].style.background = '#57b87b';
        }
      }, 3000);
    });
  });
});

function resetBrowser() {
  callGetResetAPI();
  // 使用 location.reload() 刷新页面
  location.reload();
}

/**
 * 資料下載 => 1
 * NILM電器拆解 => 2
 * AMI資料格式轉換 => 3
 * */
function callPostAPI(num) {
  // Replace 'https://example.com/api' with your actual API endpoint
  var apiUrl = `http://172.16.78.26:8888/demo/process?type=${num}`;

  // Replace 'yourRequestBody' with the actual request body for your API
  var requestBody = { key: 'value' };

  // Example of a POST request using Axios
  axios
    .post(apiUrl, requestBody)
    .then((response) => {
      console.log('API response:', response.data);
      // Handle the API response as needed
    })
    .catch((error) => {
      console.error('API error:', error);
      // Handle the error as needed
    });
}

// 服務運算: 傑
function callThreeGetAPI() {
  var apiUrl = `http://43.201.186.180:8084/demo_user?user_type=1`;
  axios
    .get(apiUrl)
    .then((response) => {
      console.log('API response:', response.data);
    })
    .catch((error) => {
      console.error('API error:', error);
    });
}

// reset: 傑
function callGetResetAPI(num) {
  var apiUrl = `http://43.201.186.180:8084/demo_user?user_type=2`;
  axios
    .get(apiUrl)
    .then((response) => {
      console.log('API response:', response.data);
    })
    .catch((error) => {
      console.error('API error:', error);
    });
}
