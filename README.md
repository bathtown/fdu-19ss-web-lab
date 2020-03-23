# 2020 web 应用基础 lab 笔记

## lab0

- 实验步骤：略
- 参考
  - [Git 教程 - 廖雪峰](https://www.liaoxuefeng.com/wiki/896043488029600)
  - [常用 Git 命令清单 - 阮一峰](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)
- git 常用指令
  |指令|作用|
  |:-|:-|
  |`git clone [url]`|从仓库克隆到本地|
  |`git add [fileName/--all]`|添加到暂存区|
  | `git commit -m "[comment]"`|添加到本地仓库|
  | `git push`|提交到远程仓库|
  | `git fetch [remote]`|从远程仓库取文件|
  | `git merge [branch]`|取回来的与本地仓库合并|
  | `git push [remote] [branch]`|=fetch+merge|

## lab1

- 参考

  - [git 如何与原始仓库同步](https://blog.csdn.net/libing403/article/details/51729744)
  - [git 远程连接由 http 换成 ssh](https://blog.csdn.net/u013983033/article/details/89393567)

- 无意义占位符

  ```markdown
  Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Et harumd und lookum like Greek to me, dereud facilis est er expedit distinct. Nam liber te conscient to factor tum poen legum odioque civiuda. Et tam neque pecun modut est neque nonor et imper ned libidig met, consectetur adipiscing elit, sed ut labore et dolore magna aliquam.
  ```

- 转义字符（发现 markdown 也会转义，于是用代码符号括了起来）

  | 字符 | 十进制  | 转义字符 |
  | :--: | :-----: | :------: |
  |  "   | `&#34;` | `&quot;` |
  |  &   | `&#38;` | `&amp;`  |
  |  <   | `&#60;` |  `&lt;`  |
  |  >   | `&#62;` |  `&gt;`  |

## lab2

- `.gitignore` 👉 [Git 忽略提交部分文件](https://www.jianshu.com/p/74bd0ceb6182)

- **JavaScript RegExp**

  - 一些样例：[html5pattern](http://html5pattern.com/)

  - 参考文章：[Form Validation Part 1: Constraint Validation in HTML | CSS-Tricks](https://css-tricks.com/form-validation-part-1-constraint-validation-html/)

  - 在线测试：[菜鸟工具](https://c.runoob.com/front-end/854)

    | 符号      | 含义                                                                                     | 示例                                                                                           |
    | :-------- | :--------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------- |
    | [xyz]     | 字符集合，匹配 [] 所包含的任意一个字符                                                   | '[abc]' 可以匹配 "plain" 中的 'a'                                                              |
    | [^xyz]    | 负值字符集合，匹配 [] 未包含的任意字符                                                   | 例如， '[^abc]' 可以匹配 "plain" 中的'p'、'l'、'i'、'n'                                        |
    | [a-z]     | 字符范围，匹配指定范围内的任意字符                                                       | 例如，'[a-z]' 可以匹配 'a' 到 'z' 范围内的任意小写字母字符                                     |
    | [^a-z]    | 负值字符范围，匹配任何不在指定范围内的任意字符                                           | 例如，'[^a-z]' 可以匹配任何不在 'a' 到 'z' 范围内的任意字符                                    |
    | x \| y    | 匹配 x 或 y                                                                              | 例如，'z\|food' 能匹配 "z" 或 "food"，'(z\|f)ood' 则匹配 "zood" 或 "food"                      |
    | \         | 将下一个字符标记为一个特殊字符                                                           | 'n' 匹配字符 "n" '\n' 匹配一个换行符，序列 '\\\\' 匹配 "\\" 而 "\\(" 则匹配 "("                |
    | .         | 匹配除换行符（\n、\r）之外的任何单个字符                                                 | 要匹配包括 '\n' 在内的任何字符，请使用"(.                                                      | \n)"的模式 |
    | {n,m}     | n <= m，最少匹配 n 次且最多匹配 m 次                                                     | "o{1,3}" 将匹配 "fooooood" 中的前三个 o                                                        |
    | {n}       | n 是一个非负整数                                                                         | 匹配确定的 n 次                                                                                |
    | {n,}      | n 是一个非负整数                                                                         | 至少匹配 n 次                                                                                  |
    | +         | 匹配前面的子表达式一次或多次                                                             | 等价于 {1,}                                                                                    |
    | \*        | 匹配前面的子表达式零次或多次                                                             | 等价于 {0,}                                                                                    |
    | ?         | 匹配前面的子表达式零次或一次                                                             | 等价于 {0,1}                                                                                   |
    | special ? | 当该字符紧跟在任何一个其他限制符 (\*, +, ?, {n}, {n,}, {n,m}) 后面时，匹配模式是非贪婪的 | 对于字符串 "oooo"，'o+?' 将匹配单个 "o"，而 'o+' 将匹配所有 'o'                                |
    | ^         | 匹配文本的开头                                                                           | [a-z] 可以用来匹配任意位置上的小写字母: "...a..."；^[a-z] 只能匹配以小写字母为行首的行: "a..." |
    | \$        | 匹配文本的结束                                                                           | [a-z]$ 只能匹配以小写字母为行尾的行: "...a"；^[a-z]$ 只能匹配只有一个小写字母的行: "a"         |

- `name` 和 `id`

  - `name` 独特作用
    - `name` 传递 `form` 提交的值
    - `<input type='radio'>` 根据 **相同的** `name` 属性实现单选实现（事先设置 `checked` 以实现必选）
    - `map` 中分布式相应图

- `form` 表单

  - 多选框`checkbox`

    ```html
    <form>
      <p>您的常用设备</p>

      <input type="checkbox" name="device" id="Android" value="Android" />
      <label for="Android">安卓手机</label>

      <input type="checkbox" name="device" id="iPhone" value="iPhone" />
      <label for="iPhone"> iPhone </label>

      <input type="checkbox" name="device" id="Windows" value="Windows" />
      <label for="Windows"> Windows </label>

      <input type="checkbox" name="device" id="Mac" value="Mac" />
      <label for="Mac"> Mac </label>
    </form>
    ```

  - `label`使用方法：`for` 属性与表单元素的 `id` 属性绑定 ~~（`label` 的 `form` 属性似乎没用 😶）~~

  - `readonly` 和 `disable` 区别

    |          |                    `readonly`                    |  `disable`   |
    | :------: | :----------------------------------------------: | :----------: |
    |   外观   |                      无变化                      |  文本框变灰  |
    | 作用对象 | `<input type = "text/password">` 和 `<textarea>` | 所有表单元素 |
    |   数据   |                      会传值                      |    不传值    |

  - 获得 `password` 密码：`document.getElementById("password").value`

  - 获得 `text` 内容： `document.getElementById("name").innerHTML`

- **[CSS 选择器](https://www.runoob.com/cssref/css-selectors.html)**

- HTML DOM

  - DOM 是 Document Object Model（文档对象模型）的缩写
  - 在 HTML DOM 中，所有事物都是节点。DOM 是被视为节点树的 HTML。  
    <img src="./images/Dom.png" width=600px>
  - 注：`<title>DOM 教程</title>`，元素节点 `<title>`，包含值为 "DOM 教程" 的**文本节点**，可通过节点的 innerHTML 属性来访问文本节点的值。
  - HTML DOM 方法

    | 方法                       | 描述                                             | 备注                                                         |
    | :------------------------- | :----------------------------------------------- | :----------------------------------------------------------- |
    | `getElementById()`         | 返回带有指定 ID 的元素                           |
    | `getElementsByTagName()`   | 返回包含带有指定标签名称的所有元素的**节点数组** | `.length` 属性定义节点列表中节点的数量（或者某元素子节点数） |
    | `getElementsByClassName()` | 返回包含带有指定类名的所有元素的**节点数组**     |
    | `appendChild()`            | 插入新的子节点（元素）                           |
    | `removeChild()`            | 删除子节点（元素）                               | 或者直接用`remove()`                                         |
    | `replaceChild()`           | 替换子节点。                                     |
    | `insertBefore()`           | 在指定的子节点前面插入新的子节点                 | `element.insertBefore(inSertEl, originEle);`                 |
    | `createAttribute()`        | 创建属性节点                                     |
    | `createElement()`          | 创建**元素节点**                                 |
    | `createTextNode()`         | 创建**文本节点**                                 |
    | `getAttribute()`           | 返回指定的属性值                                 |
    | `setAttribute()`           | 把指定属性设置或修改为指定的值                   |
    | `write()`                  | 写入文本                                         | 不换行，`writeln()`要换行                                    |

  - HTML DOM 属性

    | 属性          | 描述                                 | 备注                                                                                                 |
    | :------------ | :----------------------------------- | :--------------------------------------------------------------------------------------------------- |
    | `innerHTML`   | 节点（元素）的文本值                 |
    | `parentNode`  | 节点（元素）的父节点                 | DOM 不能在不引用父元素的情况下删除某个元素                                                           |
    | `childNodes`  | 节点（元素）的子节点**们**           |
    | `attributes`  | 节点（元素）的属性节点               |
    | `firstChild`  | 可用于访问元素的文本                 |
    | `nodeValue`   | 根据节点的类型设置或返回节点的值     | 想返回元素的文本，返回的是文本节点的节点值（`element.childNodes[0].nodeValue`）（对 `<input>` 无效） |
    | `value`       |                                      | 元素的值                                                                                             |
    | `textContent` | 属性设置或者返回指定节点的文本内容。 | 这个属性同样可以返回所有子节点的文本                                                                 |

  - 改变 HTML 样式：`document.getElementById("p2").style.fontFamily="Arial";`

  - HTML DOM 事件

    | 名称          | 描述                   | 备注 |
    | :------------ | :--------------------- | :--- |
    | `onload`      | 用户进入               |
    | `onunload`    | 离开页面               |
    | `onchange`    | 常用于输入字段的验证   |
    | `onmouseover` | 鼠标指针移动到元素     |
    | `onmouseout`  | 鼠标指针离开元素       |
    | `onmousedown` | 当某个鼠标按钮被点击时 |
    | `onclick`     | 鼠标点击完成           |
    | `onmouseup`   | 鼠标按钮被松开         |

  - 获取 HTML 中的元素：[Document](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)

  - [HTML DOM Event 对象](https://www.w3school.com.cn/jsref/dom_obj_event.asp)

- 其他

  - `<select>` 选中元素：`.selectedIndex`
  - 表格内容对齐属性 align 和 vAlign
  - 一个好看的渐变色

  ```css
  /* 相当于一个剪影，文字部分透出了背景的渐变，因为无法单独设定文字的渐变颜色 */
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* or: color: transparent; */
  ```

## lab3

- 本次lab需要提交一份设计文档，主要介绍一下你对页面的设计体现在哪些地方（如果有自己的布局设计，把重要的布局讲一下就可以，类似于颜色、字体什么的可以略过。有能力的同学可以考虑画一个示意图来表示页面中各个组件的位置情况（不强制））
