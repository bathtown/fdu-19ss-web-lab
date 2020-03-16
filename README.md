# 2020 web应用基础 lab笔记

## lab0

* 略
* 参考
  * [Git 教程 - 廖雪峰](https://www.liaoxuefeng.com/wiki/896043488029600)
  * [常用 Git 命令清单 - 阮一峰](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)
* git 常用指令
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

* 参考
  * [git如何与原始仓库同步](https://blog.csdn.net/libing403/article/details/51729744)
  * [git远程连接由http换成ssh](https://blog.csdn.net/u013983033/article/details/89393567)

* 无意义占位符

  ```markdown
  Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Et harumd und lookum like Greek to me, dereud facilis est er expedit distinct. Nam liber te conscient to factor tum poen legum odioque civiuda. Et tam neque pecun modut est neque nonor et imper ned libidig met, consectetur adipiscing elit, sed ut labore et dolore magna aliquam.
  ```

* 转义字符（发现 markdown 也会转义，于是用代码符号括了起来）

  |字符|十进制|转义字符|
  |:-:|:-:|:-:|
  |"|`&#34;`|`&quot;`|
  |&|`&#38;`|`&amp;`|
  |<|`&#60;`|`&lt;`|
  |>|`&#62;`|`&gt;`|

## lab2

* [Git 忽略提交 .gitignore](https://www.jianshu.com/p/74bd0ceb6182)

* JavaScript RegExp
  * 示例：[html5pattern](http://html5pattern.com/)

* `form` 表单

  * 多选框`checkbox`

    ```html
    <form>
      <p>您的常用设备</p>

      <input type="checkbox" name="device" id="Android" value="Android">
      <label for="Android">安卓手机</label>

      <input type="checkbox" name="device" id="iPhone" value="iPhone">
      <label for="iPhone"> iPhone </label>

      <input type="checkbox" name="device" id="Windows" value="Windows">
      <label for="Windows"> Windows </label>

      <input type="checkbox" name="device" id="Mac" value="Mac">
      <label for="Mac"> Mac </label>
    </form>
    ```

  * radio的name需要相同,checkbox不需要一样

  * 表单提交的是 `name` 而不是 `id`

  * `label`使用方法：`for` 属性与表单元素的 `id` 属性绑定（`form` 属性似乎没用😶）
