Symbol
====

Symbol 是 ES6 中新添加的原始类型，用于生成唯一的符号，来作为对象的属性。

```js
var a = Symbol();
var b = Symbol();

a === b; // false
```

Symbol() 也可以接受一个字符串作为参数，用来区分两个不同的值。

```js
var a = Symbol('a');
var b = Symbol('b');

a; // Symbol(a)
b; // Symbol(b)
```

Symbol 值可以转换为字符串或布尔值，但不能转换为数字。

for()
----

Symbol.for('abc') 会查找是否存在 Symbol('abc')，如果有则返回；如果没有，则创建一个并返回。

keyFor()
----

Symbol.keyFor(s) 会返回 s 值对应的特征字符串（key）。如果不存在，则返回 undefined:

```js
var s = Symbol('s');

Symbol.keyFor(s); // 's'
```
