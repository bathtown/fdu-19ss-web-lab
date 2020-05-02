/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/
function timeTest () {
    const start = new Date();
    let value = 1;
    let counter = 0;
    function double () {
        value *= 2;
        counter++;
        console.log("value is " + value + " now, second is " + new Date().getSeconds() + " now.");
    }
    const check = setInterval(function () {
        let now = new Date();
        // 每隔五秒运行一次 double 函数
        if ((60 + now.getSeconds() - start.getSeconds()) % 5 === 0) {
            double();
        }
        // 到某一整分钟停止
        if (now.getMinutes() !== start.getMinutes()) {
            console.log("second is " + new Date().getSeconds() + " now. 到某一整分钟，停止。");
            clearInterval(check); return;
        } // 运行10次停止
        else if (counter === 10) {
            console.log("value is " + value + " now, 运行10次，停止。");
            clearInterval(check); return;
        }
    }, 1000);
}
// timeTest();

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail (telephone, mail) {
    // 中国移动：China Mobile 134,135,136,137,138,139,150,151,152,157,158,159,182,183,184,187,188,147,178,1705
    var teleRegExp = /(^1(3[4-9]|4[7]|5[0-27-9]|7[8]|8[2-478])\d{8}$)|(^1705\d{7}$)/;
    // 邮箱规范：最好不要设置 :)，参见 http://html5pattern.com/Emails
    // 但我还是加了对 @ 和 . 的判断
    let mailExpReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (teleRegExp.test(telephone) && (mailExpReg.test(mail))) {
        // 都对
        console.log("The telephone is right and the mail is right!"); return "The telephone is right and the mail is right!"
    } else if (!(mailExpReg.test(mail)) && teleRegExp.test(telephone)) {
        // 邮箱错了
        console.log("The telephone is right and the mail is wrong!"); return "The telephone is right and the mail is wrong!"
    } else if (mailExpReg.test(mail) && !(teleRegExp.test(telephone))) {
        // 电话错了
        console.log("The telephone is wrong and the mail is right!"); return "The telephone is wrong and the mail is right!"
    } else {
        // 都错了
        console.log("The telephone is wrong and the mail is wrong!"); return "The telephone is wrong and the mail is wrong!"
    }
}
// testMail('12312312311', '12@qw.qw');

/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy (str) {
    var regExp = /\b([a-z]+) \1\b/gim;
    let wordSet = new Set(str.match(regExp, "$1"))
    // 按照首字母顺序
    wordSet = new Set([...wordSet].sort(function (a, b) {
        return a.localeCompare(b);
    }));
    // 如果集合中元素超过10个，则取前10个
    if (wordSet.size > 10) {
        wordSet = new Set([...wordSet].slice(0, 10));
    }
    console.log(wordSet); return wordSet;
}
// testRedundancy("Is is the iS is cost of of gasoline going up up");
// testRedundancy("Zs zs Is is the iS is cost of of gasoline going up up");
// testRedundancy("Zs zs rs Rs Ht ht yr yr Op op iu iu qwq qwq uu as as ii ii opo opo quq QuQ");

/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard (wantInput, actualInput) {
    // 思路：分别提取所有字符，set 去重，再比较
    // set 对于大小写字母是敏感的，全转化为 大/小 写
    const wantInputArray = wantInput.toUpperCase().split('');
    const actualInputArray = actualInput.toUpperCase().split('');
    // 去重
    let wantInputSet = new Set(wantInputArray);
    // 比较
    actualInputArray.forEach(name => wantInputSet.delete(name));
    console.log(wantInputSet); return wantInputSet;
}
// testKeyBoard("7_This_is_a_test", "_hs_s_a_es");

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该数组打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse (str) {
    str = str.trim();// 删除两端空白
    const reversedStrArray = str.split(/\s+/);// 分组，删除中间空白
    const len = reversedStrArray.length;
    let reversedStr = "";
    for (let i = len - 1; i >= 0; i--) {
        reversedStr = reversedStr + reversedStrArray[i] + " ";
    }
    let outPut = reversedStr.trim();
    console.log(outPut); return outPut;
}
// testSpecialReverse("  hello  world!  ");
// testSpecialReverse("the sky is blue");

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum (nums, target) {
    const numMap = new Map();
    const len = nums.length
    for (let i = 0; i < len; i++) {
        const targetNum = target - nums[i];
        if (numMap.has(targetNum)) {
            console.log([numMap.get(targetNum), i]); // console.log 出一个数组
        }
        numMap.set(nums[i], i); // 没有就添加，这里 key 和 value 不是常规意义上的 key 和 value
    }
}
// twoSum([2, 7, 11, 15], 9);
// twoSum([1, 2, 3, 4], 5);

/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring (str) {
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
    console.log(maxlen); return maxlen;
}
// lengthOfLongestSubstring("abbbbb"); // 2
// lengthOfLongestSubstring("abbacbbdb"); // 3
// lengthOfLongestSubstring("bbbbb"); // 1

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country () {
    this.name = "国家";
}
// DevelopingCountry
function DevelopingCountry () {
    Country.call(this);
}
DevelopingCountry.prototype.sayHi = function () {
    console.log("Hi,i am a developing country."); return "Hi,i am a developing country.";
}
// PoorCountry
function PoorCountry () { };
PoorCountry.prototype = new Country();
PoorCountry.prototype.constructor = PoorCountry;
PoorCountry.prototype.saySad = function () {
    console.log("I am a sad poor country."); return "I am a sad poor country.";
}
// DevelopedCountry
function DevelopedCountry () { Country.call(this); };
DevelopedCountry.prototype = Object.create(Country.prototype);
DevelopedCountry.prototype.constructor = DevelopedCountry;
DevelopedCountry.prototype.sayHappy = function () {
    console.log("I am a Happy developed country."); return "I am a Happy developed country.";
}
// test function
function testInheritCountry () {
    // initial
    const developingCountry = new DevelopingCountry();
    const poorCountry = new PoorCountry();
    const developedCountry = new DevelopedCountry();

    developingCountry.sayHi();
    // console.log(developingCountry.name);
    poorCountry.saySad();
    // console.log(poorCountry.name);
    developedCountry.sayHappy();
    // console.log(developedCountry.name);
}
// testInheritCountry();

/*
test 函数，测试 lab6 的正确性
*/
function testLab6 () {
    console.log('TEST LAB6:');

    console.log('\n🖖test lab6 p1 at last...');

    console.log('\n🖖test lab6 p2:');
    console.log("expected: The telephone is wrong and the mail is right!, actual: 👇");
    testMail('12312312311', '12@qw.qw');

    console.log('\n🖖test lab6 p3:');
    console.log("expected: Set { 'Is is', 'iS is', 'of of', 'up up' }, actual: 👇");
    testRedundancy("Is is the iS is cost of of gasoline going up up");
    console.log("expected: Set { 'iS is', 'Is is', 'of of', 'up up', 'Zs zs' }, actual: 👇");
    testRedundancy("Zs zs Is is the iS is cost of of gasoline going up up");
    console.log("expected: Set { 'as as', 'Ht ht', 'ii ii', 'iu iu', 'Op op', 'opo opo', 'quq QuQ', 'qwq wq', 'rs Rs', 'yr yr' }, actual: 👇");
    testRedundancy("Zs zs rs Rs Ht ht yr yr Op op iu iu qwq qwq uu as as ii ii opo opo quq QuQ");

    console.log('\n🖖test lab6 p4:');
    console.log("expected: Set { '7', 'T', 'I' }, actual: 👇");
    testKeyBoard("7_This_is_a_test", "_hs_s_a_es");

    console.log('\n🖖test lab6 p5:');
    console.log("expected: world! hello, actual: 👇");
    testSpecialReverse("  hello  world!  ");
    console.log("expected: blue is sky the, actual: 👇");
    testSpecialReverse("the sky is blue");

    console.log('\n🖖test lab6 p6:');
    console.log("expected: [ 0, 1 ], actual: 👇");
    twoSum([2, 7, 11, 15], 9);
    console.log("expected: \n[ 1, 2 ]\n[ 0, 3 ]\n, actual: 👇");
    twoSum([1, 2, 3, 4], 5);

    console.log('\n🖖test lab6 p7:');
    console.log("expected: 2, actual: 👇");
    lengthOfLongestSubstring("abbbbb"); // 2
    console.log("expected: 3, actual: 👇");
    lengthOfLongestSubstring("abbacbbdb"); // 3
    console.log("expected: 1, actual: 👇");
    lengthOfLongestSubstring("bbbbb"); // 1

    console.log('\n🖖test lab6 p8:');
    console.log("expected: \nHi,i am a developing country.\nI am a sad poor country.\nI am a Happy developed country.\n, actual: 👇");
    testInheritCountry();

    console.log('\n🖖test lab6 p1:');
    timeTest();
}
testLab6();

/*
另一种使用 nodejs 内建断言的测试，因为所有函数是 console.log 而不是 return ，所以会特别丑，就不用了
Qunit 和 Jest 都太大了，舍去
*/
// let assert = require('assert'); // nodejs 内建断言
// assert.deepEqual(testMail('12312312311', '12@qw.qw'), 'The telephone is wrong and the mail is right!', "lab6 p2 failed!");
// ...