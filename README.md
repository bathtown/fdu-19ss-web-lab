# lab笔记

## lab1

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

## lab2

* 参考： [git如何与原始仓库同步](https://blog.csdn.net/libing403/article/details/51729744)

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
