# lab10 设计文档

- **姓名：胡彧锋**

- **学号：18307130207**

## Exercise1 - cookie

> 参考 [cookies-manual](https://www.php.net/manual/zh/features.cookies.php)

1. cookie 是服务器留在客户端的用于识别用户或者存储一些数据的小文件，而 session 存储在服务器端。每当计算机通过浏览器请求页面时，它会同时发送 cookie。通过 PHP，可以创建并取回 cookie 的值。

2. 创建 cookie - `setcookie()`

   使用 setcookie()给的值只能是数字或者字符串，不能是其他的复杂结构。

   `bool setcookie( string name [,string value] [,int expire] [,string path] [,string domain] [,bool secure] [,bool httponly])`

   | 参数     | 解释                                                                                                       |
   | -------- | ---------------------------------------------------------------------------------------------------------- |
   | `name`   | 必选，表示 cookie 的名字                                                                                   |
   | `value`  | 可选，表示 cookie 值，存储在客户端，当为空时，表示撤销客户端中该 cookie 的资料（这样可以删除 cookie）。    |
   | `expire` | 可选，表示 cookie 的有效截止时间，也就是过期时间，如果没有指定或者指定为 0，那么通常是在关闭浏览器时失效。 |
   | `path`   | 可选，cookie 有效路径，默认为'/'，在所有路径下都有效，也就是在整个服务器域名下都有效。                     |
   | `domain` | 可选，cookie 有效域名。                                                                                    |
   | `secure` | 表示在 HTTPS 的安全传输时才有效。                                                                          |

   ```php
    setcookie("test","China");

    // expire
    setcookie("cookie_one", "A", time()+60*60); // cookie 在一小时后失效
    setcookie("cookie_two", "B", time()+60*60\*24); // cookie 在一天后失效
    setcookie("cookie_three", "C", mktime(23,53,19,10,09,2020)); // cookie 在 2020 年 10 月 9 日 23 时 53 分 19 秒失效
    setcookie("cookie_four","D"); // 关闭浏览器后 cookie 失效

    // path
    setcookie('test', time(), 0, '/path'); //  test 在/path 以及子路径/path/abc 下都有效，但是在根目录下就读取不到 test 的 cookie 值
   ```

3. 获取 cookie - `$_COOKIE`

   刷新页面后 cookie 才会生效，是因为 cookie 的值不会在调用 setcookie()之后立即存储在`$_COOKIE` 变量中，而是随着 http 请求被发送至服务器

   ```php
   setcookie("test","China");
   echo "cookie is ".$_COOKIE["test"];
   ```

4. 删除 cookie - `setcookie()`

   ```php
   setcookie("test","");
   ```

## Exercise2 - session

> 参考 [session-manual](https://www.php.net/manual/zh/ref.session.php)

1. session 与 cookie 非常像, 只是把用户数据保存到了服务器上，而查询的钥匙却仍在浏览器上，用一个特殊的 cookie （PHPSESSID）保存
2. 例子

   ```php

   // 必须在所有的 html 代码输出到浏览器之前开启会话
   // 开启会话之前绝对不能有: echo,print,include, 甚至空行等之类的语句
   // session_start() 会向浏览器发送一个 32 位的 16 进制的 PHPSESSID
   session_start();

   // 一旦开启成功, 我们就可以把用户的会话信息保存到服务器上了
   // 会话的所有操作都是通过超全局变量 `$_SESSION` 来实现

   $_SESSION['user_name'] = 'admin';
   echo $_SESSION['user_name'];

   // 更新
   $_SESSION['user_name'] = 'peter';
   echo $_SESSION['user_name'];

   // 删除
   // 删除单个 session 变量
   unset($_SESSION['user_name']);

   // 删除全部 session 变量, 将服务器上的 session 文件内容清空
   $_SESSION = [];

   // 清空所有用户的 session, 将服务器上的 session 文件删除
   session_destroy();

   // 如果想彻底的删除 session, 浏览器上的 PHPSESSID 对应的 cookie 也应该一并删除
   setcookie('PHPSESSID', '', time()-3600);

   // 总结: 正确且安全彻底的删除 session 应该包括以下三步:
   $_SESSION = [];  //清空当前用户的所有会话信息
   session_destroy(); //清空当前域名下所有的会话信息
   setcookie('PHPSESSID', '', time()-3600); //删除保存在客户端上的会话id
   ```

## The advantages & disadvantages of cookie and session

### advantages

1. 实现了浏览器的有状态化
2. cookie 实现了服务端的无状态化，服务端只需要负责创建和验证登录 cookie 即可，无需保持用户的状态信息。

### disadvantages

1. session 扩展性不好，数据共享不方便
2. session 会在一定时间内保存在服务器上，当访问增多，就会比较占用你服务器的性能
3. cookie 有大小限制，存储不了太多数据
4. 每次传送 cookie，增加了请求的数量，对访问性能也有影响
5. cookie 有跨域问题
