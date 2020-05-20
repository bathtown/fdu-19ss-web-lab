# lab8 设计文档

- **姓名：胡彧锋**

- **学号：18307130207**

## 任务一

```js
// 提取通用函数
function nextImg() {
  // 切换图片
  let leftVal = parseInt(wrap.style.left);
  if (leftVal === -3600) wrap.style.left = '-1200px';
  else wrap.style.left = leftVal - 600 + 'px';
  // 变换按钮
  const onButton = buttons.getElementsByClassName('on')[0];
  if (onButton.nextElementSibling) {
    onButton.nextElementSibling.classList.add('on');
    onButton.classList.remove('on');
  } else {
    buttons.firstElementChild.classList.add('on');
    onButton.classList.remove('on');
  }
}

// 添加 listener
rightArrow.addEventListener('click', nextImg);
```

## 任务二

1. setInterval 返回值是个数字（id）
2. 每次要 clearInterval 要对应 setInterval 的返回值
3. body 的 onload 被 window 的 onload 冲掉了

   ```js
   document.body.onload = () => {
     console.log('body.onload');
   };

   // 无效
   document.body.addEventListener('load', () => {
     console.log('body.addEvent');
   });

   // 有效
   window.addEventListener('load', () => {
     console.log('body.addEvent');
   });
   ```

## 任务三

```js
// 保证每次只有一个为 on

// remove className 'on'
buttons.getElementsByClassName('on')[0].classList.remove('on');
// add className 'on'
button.classList.add('on');
```

## 任务四

```js
// set position
const setPosition = function (element, pos = 0) {
  const range = document.createRange(); // a range
  range.selectNodeContents(element);
  if (element.innerHTML.length > 0) {
    range.setStart(element.childNodes[0], pos);
  }
  range.collapse(true);

  const selection = window.getSelection(); // a selection
  selection.removeAllRanges();
  selection.addRange(range);
};
```

参考：[js 获取光标位置](https://blog.csdn.net/mafan121/article/details/78519348)

## 相关知识

### jQuery

#### 基础语法

```js
$(selector).action(); // `$` -> `jQuery`
```

#### 🤏 selector

| selector                   | explanation                                                             |
| -------------------------- | ----------------------------------------------------------------------- |
| `$("*")`                   | all elements                                                            |
| `$(this)`                  | current **object**                                                      |
| `$("p")`                   | all `<p> </p>`                                                          |
| `$("#intro")`              | `<element id = "intro"> </element>`                                     |
| `$("p.intro")`             | all `<p class='intro'> </p>`                                            |
| `$("p:first")`             | first `<p>`                                                             |
| `$("ul li:first")`         | first `<ul>`'s first `<li>`                                             |
| `$("ul li:first-child")`   | every `<ul>`'s first `<li>`                                             |
| `$("[href]")`              | `<element href = "..."> </element>`                                     |
| `$("a[target='_blank']")`  | `<a target='_blank'> </a>`                                              |
| `$("a[target!='_blank']")` | ! `<a target='_blank'> </a>`                                            |
| `$(":button")`             | all `<input type="button"></input>` & `<button type="button"></button>` |
| `$("tr:even")`             | even `<tr></tr>`                                                        |
| `$("tr:odd")`              | odd `<tr></tr>`                                                         |

#### 👋 methods

| method         | explanation                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------- |
| `click()`      |                                                                                                                  |
| `dblclick()`   |                                                                                                                  |
| `mouseenter()` |
| `mouseleave()` |
| `hover()`      | `$(selector).hover(inFunction,outFunction)` === `$( selector ).mouseenter( handlerIn ).mouseleave( handlerOut )` |
| `keypress()`   | `$("input").keypress(function)`                                                                                  |
| `keydown()`    |
| `keyup()`      |
| `submit()`     | `$("form").submit(function)`                                                                                     |
| `change()`     | Only applicable to form fields                                                                                   |
| `focus()`      |
| `blur()`       |
| `load()`       | ! Deprecated 1.8 \| is roughly equivalent to `$.get(url, data, success)`                                         |
| `resize()`     | `$(window).resize(function)`                                                                                     |
| `scroll()`     |
| `unload()`     | ! Deprecated 1.8                                                                                                 |

```js
// click() pass parameter

function foo(event) {
  console.log(event.data); // paras
  // do sth
}

var paras = { para1: 'sth1', para2: 'sth2' };
$('target').click(paras, foo);
```

#### 🤚 effects

| effect          | explanation                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------- |
| `hide()`        | `$(selector).hide( [duration] [, easing ] [, complete ] )` duration -> speed ["slow", "fast", ms] |
| `show()`        | `$(selector).show( [duration] [, easing ] [, complete ] )`                                        |
| `toggle()`      | toggle between `show()` & `hide()`: `$(selector).toggle( [duration] [, easing ] [, complete ] )`  |
| `fadeIn()`      | `$(selector).fadeIn( [speed] [, callback] );`                                                     |
| `fadeOut()`     | `$(selector).fadeOut( [speed] [, callback] );`                                                    |
| `fadeToggle()`  | fade toggle between `fadeIn()` & `fadeOut()`: `$(selector).fadeToggle([speed] [, callback] );`    |
| `fadeTo()`      | `$(selector).fadeTo( speed, opacity [, callback] );` opacity [0~1]                                |
| `slideDown()`   | `$(selector).slideDown(speed,callback);`                                                          |
| `slideUp()`     | `$(selector).slideUp(speed,callback);`                                                            |
| `slideToggle()` | `$(selector).slideToggle(speed,callback);`                                                        |
| `animate()`     | `$(selector).animate({params},speed,callback);`                                                   |
| `stop()`        | `$(selector).stop(stopAll: boolean, goToEnd: boolean);`                                           |

#### ☝ DOM operations

| method      | explanation                                 |
| ----------- | ------------------------------------------- |
| `text()`    | get innerText & change it                   |
| `html()`    | get contends, include HTML tags & change it |
| `val()`     | get form fields' value & change it          |
| `attr()`    | get objects' attributes & change it         |
| `append()`  | ~ `appendChild()`                           |
| `prepend()` |
| `after()`   | add after                                   |
| `before()`  | add before                                  |
| `remove()`  | remove object and its children              |
| `empty()`   | remove object's children                    |

#### 🌈 CSS

| method          | explanation                                                            |
| --------------- | ---------------------------------------------------------------------- |
| `addClass()`    | add className                                                          |
| `removeClass()` | remove className                                                       |
| `toggleClass()` | toggle className                                                       |
| `css()`         | `css("propertyname");` \| `css("propertyname","value");` \| `css({});` |
| `width()`       | get & change                                                           |
| `height()`      | 👆                                                                     |
| `innerWidth()`  | 👆                                                                     |
| `innerHeight()` | 👆                                                                     |
| `outerWidth()`  | 👆                                                                     |
| `outerHeight()` | 👆                                                                     |
