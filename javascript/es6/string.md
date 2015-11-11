字符串相关（string）
====

Unicode 支持的增强
----

字符串遍历
----

```js
let str = 'string';

for(let char of str) {
  console.log(char); // s t r i n g
}
```

at()
----

与 charAt() 类似，返回指定位置的字符。

```js
let str = 'string';

console.log(str.charAt(3);
console.log(str.at(3);
```

includes()
----

判断字符串中是否包含指定的自字符串：

```js
var str = 'string';

str.includes('ing'); // true
```

startsWith()
----

判断字符串是否以指定字符串作为开始：

```js
var str = 'string';

str.startsWith('str'); // true
```

endsWith()
----

判断字符串是否以指定字符串作为结尾：

```js
var str = 'string';

str.endsWith('ing'); // true
```

repeat()
----

将字符串重复 n（n >= 0，需要为整数）次，并返回拼接后的字符串：

```js
var str = 'ab';

str.repeat(3); // 'ababab'
str.repeat(0); // ''
```

字符串模板（template string）
----

参考：[template-string](./template-string.md)
