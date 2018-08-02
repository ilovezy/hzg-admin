window.urlParse = function () {
  //从url获取到参数字符串
  let url = window.location.search;
  let obj = {}
  let reg = /[?&][^?&]+=[^?&]+/g;
  //match() 方法可以在字符串内检索指定的值 或找到一个或多个正则表达式的匹配。
  let arr = url.match(reg)
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substr(1).split('=')
      let key = decodeURIComponent(tempArr[0])
      let value = decodeURIComponent(tempArr[1])
      obj[key] = value
    })
  }
  return obj
}

/**
 * 生成指定长度的随机字符串
 * @param len
 * @returns {string}
 */
window.randomString = function (len) {
  len = len || 32;
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  var maxPos = chars.length;
  var pwd = '';
  for (var i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

/**
 * 金额转大写
 * @param num
 * @returns {string|*}
 */
window.numberToChines = function (num) {
  if (num != 0 && !num) return '';
  var strOutput = '';
  var strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
  num += '00';
  var intPos = num.indexOf('.');
  if (intPos >= 0)
    num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
  strUnit = strUnit.substr(strUnit.length - num.length);
  for (var i = 0; i < num.length; i++)
    strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i, 1), 1) + strUnit.substr(i, 1);
  return strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, '零元');
}

/**
 * 查询字符串参数
 * @returns {Object}
 * @constructor
 */
window.getRequest = function () {
  var url = location.search; //获取url中"?"符后的字串
  var theRequest = {};
  if (url.indexOf('?') != -1) {
    var str = url.substr(1);
    var strs = str.split('&');
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
    }
  }
  return theRequest;
}

/**
 * dataURL 转 Blob
 * @param dataurl
 * @returns {Blob}
 */
window.dataURLtoBlob = function (dataurl) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {type: mime});
}

window.moneyFormat = function (money) {
  var n = parseFloat(money / 100).toFixed(2);
  var re = /(\d{1,3})(?=(\d{3})+(?:\.))/g;
  return n.replace(re, '$1,');
}


/**
 * js数字精度转换
 */
window.formatFloat = function (f, digit) {
  var m = Math.pow(10, digit);
  return Math.round(f * m, 10) / m;
}

/**
 * 分钟数转成小时表示
 * @param number
 * @returns {string}
 */
window.intToHours = function (number) {
  //如果的整数
  if (number % 1 == 0) {
    var hours = Math.floor(number / 60),
      minutes = number % 60;
  }
  hours = hours < 10 ? '0'.concat(hours) : hours;
  minutes = minutes < 10 ? '0'.concat(minutes) : minutes;

  return hours + ':' + minutes
}

window.getMonthLastDate = function (timestamp) {
  var date = new Date(parseInt(timestamp));
  var y = date.getFullYear();
  var m = date.getMonth() + 2;
  var time = y + '-' + m + '-01'
  time = new Date(time).getTime() - 1000;
  return time;
};

/*
  获取日期相差多少天
  need moment
* */
window.getSubDays = function (endDate, startDate) {
  return moment(parseInt(endDate)).diff(moment(parseInt(startDate)), 'days') + 1;
}

//判断课时是否为整数
window.deleteZero = function (classHour) {
  return (new Number(classHour)).valueOf()
}

// 名字替换为中间带 * 的样子
window.formatName = function (str) {
  var tempStr = ''
  if (!str.length) {
    tempStr = ''
  }
  if (str.length == 1) {
    tempStr = str
  }
  if (str.length == 2) {
    tempStr = str.replace(/^(.).*(.)$/, '$1*')
  }
  if (str.length > 2) {
    var num = str.length - 2;
    var temp = '';
    for (var i = 0; i < num; i++) {
      temp += '*'
    }
    var reg = '$1' + temp + '$2'
    tempStr = str.replace(/^(.).*(.)$/, reg)
  }
  return tempStr
}


// 手机号替换为中间带 * 的样子
window.formatPhone = function (str) {
  if (!str){
    return ''
  }
  var tempStr = ''
  if (!isValidPhone(str)) {
    tempStr = str
  } else {
    tempStr = str.substr(0, 3) + '****' + str.substr(7);
  }
  return tempStr
}

window.formatThousands = function (str) {
  str += ''
  if (str.length > 3) {
    return str.replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
      return s + ','
    })
  } else {
    return str
  }
}
