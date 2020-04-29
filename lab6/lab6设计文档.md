# lab6 设计文档

- **姓名：胡彧锋**

- **学号：18307130207**

## problem 01

1. 使用 JS 闭包，写在函数内的变量，只有局部作用域，难点在于如果是 `setInterval` 5 秒运行一次的话，就会错过**整分**，所以我采取了每隔一秒执行一次 `check` 函数，再每隔 5 秒执行 `double` 函数
2. 具体代码如下：

```js
// double 函数
function double() {
  value *= 2;
  counter++;
  console.log('value is ' + value + ' now, second is ' + new Date().getSeconds() + ' now.');
}
// check 函数
const check = setInterval(function () {
  let now = new Date();
  // 每隔五秒运行一次 double 函数
  if ((60 + now.getSeconds() - start.getSeconds()) % 5 === 0) {
    double();
  }
  // 到某一整分钟停止
  if (now.getMinutes() !== start.getMinutes()) {
    console.log('second is ' + new Date().getSeconds() + ' now. 到某一整分钟，停止。');
    return clearInterval(check);
  } // 运行10次停止
  else if (counter === 10) {
    console.log('value is ' + value + ' now, 运行10次，停止。');
    return clearInterval(check);
  }
}, 1000);
```

## problem 02

1. 中国移动电话号码是 11 位，以这些数字开头：134,135,136,137,138,139,150,151,152,157,158,159,182,183,184,187,188,147,178,1705
2. 邮箱格式是 xxx@xxx.xxx
3. 匹配邮箱的正则为 `/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/` 表示只包含字母、数字、下划线（\_）和短折线（-），且中间有 @ 和 .

## problem 03

## problem 04

## problem 05

## problem 06

## problem 07

## problem 08

## 相关截图

## 相关知识
