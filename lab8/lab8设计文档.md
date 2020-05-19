# lab8 设计文档

- **姓名：胡彧锋**

- **学号：18307130207**

## 任务一

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

1. body + load Event

## 任务四

1. 参考：[js 获取光标位置](https://blog.csdn.net/mafan121/article/details/78519348)
