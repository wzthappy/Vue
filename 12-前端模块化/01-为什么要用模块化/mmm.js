(function () {
  // 1. 想使用flag
  if (moduleA.flag) {
    console.log('小明是天才， 哈哈哈');
  }

  // 2. 想使用sum函数
  console.log(moduleA.sum(40, 50));
})();

var aaa = require('./aaa');
var flag = aaa.flag;
var sum = aaa.sum;
//  =====
var {flag, sum} = require('./aaa');