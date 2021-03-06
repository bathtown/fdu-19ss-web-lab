//1. 获取url中名为name的参数。在URL输入框输入url，点击同行submit按钮后，其中的参数名为name的参数值需要出现在Argument value输入框内。
//如果没有名为name的参数，那么可以在Argument value输入框出现任何值。
//请仅在showWindowHref函数内写代码。

//提示：url指代 （若干字符串）?（参数名1）=（参数1值）&（参数2）=（参数2值）...  这样的字符串。具体可以上网查找。例如：hjsdghgbj?name=666666&group=876。
//url、url_submit、url_result指代对应id的三个对象，其中url和url_result可以通过url.value或者url_result.value获得值。
//字符数组处理可以使用相关函数
let url = document.getElementById("url");
let url_submit = document.getElementById("url_submit");
let url_result = document.getElementById("url-result");
url_submit.addEventListener('click', showWindowHref);
function showWindowHref () {
  // get input value
  const str = url.value;
  // reset output value
  url_result.value = "";
  // empty case
  if (str.match(/[?|&]name/) === null) {
    url_result.value = "no 'name', please try again :)";
  }
  else {
    // use RegExp :)
    // "name=value&..." or "name=value", value may contain '&', so we should be careful!
    // **BUG: hjsdghgbj?name=&&&group=876
    const reg = /name=(.[^&]*)/g;
    var match = reg.exec(str);
    while (match !== null) {
      // console.log(match);
      // match is like: ["name=software", "software", index: 0, input: "name=software&content=hello", groups: undefined]
      url_result.value += match[1] + " ";
      // repeat
      match = reg.exec(str);
    }
    // delete blank at both ends
    url_result.value = url_result.value.trim();
  }
}
//2. 每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
//注意：你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
//与设置时间相关的函数可以上网查找。

//提示：mul为html中id为"mul"的元素对象，可直接通过mul.value获得其内的输入值。
let mul = document.getElementById("mul");
(function timeTest () {
  mul.value = 1;
  var add = setInterval(mulValueAdd, 5000);
  function mulValueAdd () {
    mul.value *= 2;
    // console.log(mul.value);
    // console.log(new Date().getSeconds());
    // !! INFO: note that mul.value is a String!
    if ((new Date().getSeconds() === 0) || (mul.value === "1024"))
      clearInterval(add);
  }
})();
//3. 判断输入框most里出现最多的字符，并统计出来。统计出是信息在most_result输入框内以"The most character is:" + index + " times:" + max的形式显示。
//如果多个出现数量一样则选择一个即可。
//请仅在arrSameStr函数内写代码。

//提示：most、result、most_submit的解释及其.value与上面类似。
let most = document.getElementById("most");
let result = document.getElementById("most-result");
let most_submit = document.getElementById("most_submit");
most_submit.addEventListener('click', arrSameStr);
function arrSameStr () {
  const letterArr = most.value.split('');
  const letterArrLen = letterArr.length;
  // console.log(letterArr);
  let letterWeight = {};
  for (let i = 0; i < letterArrLen; i++) {
    // !! INFO: note that  letterWeight.letterArr[i] is useless and letterWeight[letterArr[i]] is better!
    if (letterWeight.hasOwnProperty(letterArr[i]))
      letterWeight[letterArr[i]] += 1;
    else
      letterWeight[letterArr[i]] = 1;
  }
  // console.log(letterWeight);
  var letters = Object.getOwnPropertyNames(letterWeight);
  // console.log(letters);
  const letterLen = letters.length;
  // initialize
  let index = letters[0];
  let max = letterWeight[index];
  for (let j = 1; j < letterLen; j++) {
    if (letterWeight[index] < letterWeight[letters[j]]) {
      index = letters[j];
      max = letterWeight[letters[j]];
    }
  }
  result.value = "The most character is:" + index + " times:" + max;
  // console.log(result.value);
}
