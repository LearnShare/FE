
原始类型
====

1.数字
----

`JavaScript` 中的数字不区分整数和浮点数，统一使用浮点数表示（类似于其他语言中的 double 类型）。

数字的 __范围__ 是 -2^53~2^53。当运算结果超出该范围时，会返回无穷大（Infinity）或无穷小（-Infinity）。计算 0/0 时，会返回非数字（NaN，not-a-number）。

整数值的 __表示形式__ ：

+ 十进制
+ 八进制 以 0 开始，每一位为 0~7
+ 十六进制 以 0x/0X 开始，每一位为 0~9/a~f/A`F

由于八进制数字存在兼容性问题，所以不建议使用。

浮点值的表示形式：

+ 3.14
+ .333
+ 6.02e23（=6.02*10^23）

__运算__ ：

`JavaScript` 提供了若干算术运算符，用来进行数字的运算。

+ 加法 +
+ 减法 -
+ 乘法 *
+ 除法 /
+ 求余 %

__注意：__ 浮点数的运算是不精确的。

Math 对象也提供了许多数值运算函数。

参考：[Math](./object/math.md)

与数字对应的对象是 Number。

参考：[Number](./object/number.md)

2.布尔值
----

`JavaScript` 提供了布尔值，用来表示真（true）或假（false）。布尔值通常用作判断或循环的条件。

下列运算结果或值在判断时会当做 false：

+ undefined
+ null
+ 0
+ -0
+ NaN
+ ""/''（空字符串）

其他值都被当做 true。

参考：比较运算符、逻辑运算符、控制结构

3.文本
----

`JavaScript` 中的字符串与其他语言中的 String 类似，其行为和使用方式也与数组相似。

字符串（及数组）的索引值从 0 开始。

字符串值使用 `""` 或 `''` 包含。如果需要将同一个字符串换行书写，行结尾需要添加 `\`：

```js
var str = "1234\
               5678";
```

### 转义字符

如果需要在字符串中添加特殊字符（如换行符、引号等），需要使用返斜线（\）：

```js
var str = "This\'s a demo"; // =This's a demo
```

转义字符列表：

+ \o NUL（\u0000）
+ \b 退格符（\u0008）
+ \t 制表符（\u0009）
+ \n 换行符（\u000A）
+ \v 垂直制表符（\u000B）
+ \f 换页符（\u000C）
+ \r 回车符（\u000D）
+ \" 双引号（\u0022）
+ \' 单引号（\u0027）
+ \\ 反斜线（\u005C）
+ \uabcd 通过四位十六进制数 abcd 指定一个 Unicode 字符

`+` 运算可以将字符串与字符串，或字符串与数字连接成字符串：

```js
var str1 = "Hello" + " world"; // str1="Hello world"
var str2 = "HTML" + 4.01; // str2="HTML4.01"
```

要访问字符串中的某个字符，直接使用类似于数组的方式即可：

```js
var str = "HTML5";
var x = str[1]; // x="T"
```

要获取字符串的总长度，可访问 string.length 属性：

```js
var str = "HTML5";
var x = str.length; // x=5
```

要遍历字符串中的每一个字符，可以使用循环语句：

```js
var str = 'HTML5';

for(var i = 0; i < str.length; i ++) {
  var char = str[i];
}

for(var i in str) {
  var char = str[i];
}
```

字符串对应的对象是 String。String 对象提供了更多字符串的操作函数。

参考：[String](./object/string.md)

4.null
----

null 代表空值，就是什么都没有。null 是一个对象。

```js
typeof null; // 'object'
```

5.undefined
----

undefined 代表变量未初始化（未赋值）。

```js
typeof undefined; // 'undefined'
```
