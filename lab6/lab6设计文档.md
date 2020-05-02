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
3. 匹配邮箱的正则为

   ```js
   `/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/`;
   ```

   表示只包含字母、数字、下划线（\_）和短折线（-），且中间有 @ 和 .

## problem 03

1. 解决用到了正则表达式的 **反向引用**，它允许在正则表达式内部引用之前（左侧）的捕获分组匹配的文本，其形式是`\num`，其中 num 表示所引用分组的编号（即正则表达式前面用 `()` 括起来的部分）。

   ```js
   var regExp = /\b([a-z]+) \1\b/gim;
   //                  ↑____| 这里的 '\1' 引用了前面的 '([a-z]+)'
   ```

2. 参考：[正则的反向引用](https://blog.csdn.net/dengjianyuan1/article/details/80511970)

## problem 04

1. 解决思路：分别提取所有字符，用 set 特性去重，再比较

   ```js
   function testKeyBoard(wantInput, actualInput) {
     // 思路：分别提取所有字符，set 去重，再比较
     // set 对于大小写字母是敏感的，全转化为 大/小 写
     const wantInputArray = wantInput.toUpperCase().split('');
     const actualInputArray = actualInput.toUpperCase().split('');
     // 去重
     let wantInputSet = new Set(wantInputArray);
     // 比较
     actualInputArray.forEach((x) => wantInputSet.delete(x));
     console.log(wantInputSet);
   }
   ```

## problem 05

解决思路：

1. 分组

   ```js
   const reversedStrArray = str.split(/\s+/); // 分组，删除中间空白
   ```

2. 倒置

   ```js
   for (let i = len - 1; i >= 0; i--) {
     reversedStr = reversedStr + reversedStrArray[i] + ' ';
   }
   ```

3. 输出

## problem 06

1. 解题思路：从前往后走，如果查看目标数字在不在 map 中，在 => 输出 | 不在 => 加入 map

   ```js
   function twoSum(nums, target) {
     const numMap = new Map();
     const len = nums.length;
     for (let i = 0; i < len; i++) {
       const targetNum = target - nums[i];
       if (numMap.has(targetNum)) {
         console.log([numMap.get(targetNum), i]); // console.log 出一个数组
       }
       numMap.set(nums[i], i); // 没有就添加，这里 key 和 value 不是常规意义上的 key 和 value
     }
   }
   ```

2. 也可以用 [滑动窗口算法](https://www.zhihu.com/question/314669016)

## problem 07

1. 解题思路：有点像 kmp 算法？
2. 滑动窗口算法

   ```js
   function lengthOfLongestSubstring(str) {
     const len = str.length;
     let maxlen = 0;
     const map = new Map();
     for (let i = 0, j = 0; i < len; i++) {
       if (map.has(str[i])) {
         j = Math.max(map.get(str[i]), j);
       }
       map.set(str[i], i + 1);
       maxlen = Math.max(maxlen, i - j + 1);
     }
     console.log(maxlen);
   }
   ```

## problem 08

- 见 **相关知识 > 继承** 部分

## 相关截图

<img src="./img/lab6%20(1).png" width=1000px>
<img src="./img/lab6%20(2).png" width=1000px>
<img src="./img/lab6%20(3).png" width=1000px>

## 相关知识

### Set

1. Set 类似于数组，但是成员的值都是唯一的，没有重复的值。

   ```js
   // Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
   const set = new Set([1, 2, 3, 4, 4]);
   [...set];
   // [1, 2, 3, 4]
   ```

2. ✍ properties:`Set.prototype.size`: size
3. 👋 methods

   | property                      | explanation                                                     |
   | ----------------------------- | --------------------------------------------------------------- |
   | `Set.prototype.add(value)`    | add value to set, return itself(so we can apply chain approach) |
   | `Set.prototype.delete(value)` | delete value, return successful/not (Boolean)                   |
   | `Set.prototype.has(value)`    |
   | `Set.prototype.clear()`       | delete all, no return                                           |
   | `Set.prototype.keys()`        | key iterator                                                    |
   | `Set.prototype.values()`      | value iterator(same as👆)                                       |
   | `Set.prototype.entries()`     | entry iterator(key & value are the same)                        |
   | `Set.prototype.forEach()`     | function each                                                   |

4. 数组去重

   ```js
   function dedupe(array) {
     return Array.from(new Set(array)); // Array.from方法可以将 Set 结构转为数组。
   }

   dedupe([1, 1, 2, 3]); // [1, 2, 3]

   // or

   let arr = [3, 5, 2, 2, 5, 5];
   let unique = [...new Set(arr)];
   // [3, 5, 2]
   ```

5. WeakSet

   - WeakSet 结构与 Set 类似，也是不重复的值的集合，但是，它与 Set 有两个区别：
     - WeakSet 的成员只能是 **对象**
     - WeakSet 中的对象都是 **弱引用**
   - 👋 methods

     | method                          | explanation |
     | ------------------------------- | ----------- |
     | WeakSet.prototype.add(value)    | add         |
     | WeakSet.prototype.delete(value) | delete      |
     | WeakSet.prototype.has(value)    | check       |

### Map

1. JavaScript 的对象（Object），本质上是键值对的集合，但是传统上只能用 **字符串** 当作键，而 Map 数据结构类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
2. ✍ properties:`Map.prototype.size`: size
3. 👋 methods

   | property                        | explanation                     |
   | ------------------------------- | ------------------------------- |
   | `Map.prototype.set(key, value)` | add an entry, return itself     |
   | `Map.prototype.get(key)`        | return key's value \| undefined |
   | `Map.prototype.has(key)`        | whether has key                 |
   | `Map.prototype.delete(key)`     | return Boolean                  |
   | `Map.prototype.clear()`         | clear all                       |
   | `Map.prototype.keys()`          | key iterator                    |
   | `Map.prototype.values()`        | value iterator                  |
   | `Map.prototype.entries()`       | entry iterator                  |
   | `Map.prototype.forEach()`       | function each                   |

4. Map 转为数组

   ```js
   //使用扩展运算符（...）。

   const myMap = new Map().set(true, 7).set({ foo: 3 }, ['abc']);
   [...myMap];
   // [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
   ```

5. 对象转为 Map 可以通过 `Object.entries()`。`

   ```js
   let obj = { a: 1, b: 2 };
   let map = new Map(Object.entries(obj));
   ```

### 继承

1. 构造函数：一个内部使用了 this 变量的函数。对构造函数使用 new 运算符，就能生成实例，并且 this 变量会绑定在实例对象上
2. 所有对象都有自己的原型对象 prototype，构造函数的 prototype 有一个 constructor 属性指向构造函数，用构造函数生成的实例有一个 constructor 属性指向其构造函数

   ```js
   function F() {}

   console.log(F.constructor); // [Function: Function]，function 是由 Function 函数构造产生的
   console.log(F.prototype.constructor); // function F () {}， 后来加上的

   var f = new F();
   console.log(f.constructor); // function F () {}， 后来加上的
   ```

3. `instanceof` 运算符返回一个布尔值，表示对象是否为某个构造函数的实例

4. 继承的方式

   - Cat 如何继承 Animal ?

     ```js
     function Animal() {
       this.species = 'Animal';
     }

     function Cat(name, color) {
       this.name = name;
       this.color = color;
     }
     ```

   - 构造继承（使用 call 或 apply 方法，将父对象的构造函数绑定在子对象上）

     ```js
     function Cat(name, color) {
       Animal.apply(this, arguments);
       this.name = name;
       this.color = color;
     }
     ```

   - 原型链继承

     ```js
     Cat.prototype = new Animal(); // 修改原型
     Cat.prototype.constructor = Cat; // 修改原型后， Cat.prototype.constructor 为 Animal ，要重新改为 Cat
     ```

   - 寄生组合继承（利用空对象作为中介）

     ```js
     // 先将Animal对象改写：
     function Animal() {}
     Animal.prototype.species = '动物';

     var F = function () {}; // F是空对象，几乎不占内存
     F.prototype = Animal.prototype;
     Cat.prototype = new F();
     Cat.prototype.constructor = Cat; // 修改 Cat 的 prototype 对象，不会影响到 Animal 的 prototype对象

     // YUI 实现继承
     function extend(Child, Parent) {
       var F = function () {};
       F.prototype = Parent.prototype;
       Child.prototype = new F();
       Child.prototype.constructor = Child;
       Child.uber = Parent.prototype; // 为子对象设一个 uber 属性，这个属性直接指向父对象的 prototype 属性。（uber是一个德语词，意思是"向上"、"上一层"。）
     }
     ```

   - 拷贝继承

     ```js
     // 先将Animal对象改写：
     function Animal() {}
     Animal.prototype.species = '动物';
     // 拷贝所有属性
     function extend2(Child, Parent) {
       var p = Parent.prototype;
       var c = Child.prototype;
       for (var i in p) {
         c[i] = p[i];
       }
       c.uber = p;
     }
     ```

   - 实例继承

     ```js
     function Cat(name) {
       var instance = new Animal();
       instance.name = name;
       instance.color = color;
       return instance;
     }
     ```

   - 组合继承 = 构造继承 + 原型链继承

     ```js
     function Cat(name, color) {
       this.name = name;
       this.color = color;
       Animal.call(this);
     }
     Cat.prototype = new Animal();
     Cat.prototype.constructor = Cat;
     ```

5. ES6 引入 class 关键字（语法糖）
   - 必须用 new 调用
