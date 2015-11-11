函数相关扩展（function）
====

ES6 扩展了函数的功能和语法。

参数默认值（arguments' default value）
----

```js
function add(a = 0, b = 0) {
  return a + b;
}
add(); // 0
add(2); // 2
add(3, 4); // 7

// 传统的实现方式
function add(a, b) {
  a = a || 0;
  b = b || 0;
  
  return a + b;
}
```

其余参数列表（...rest）
----

我们前面了解了函数内部的变量 arguments 代表了函数的参数列表。...rest 语法用于接受除第一个参数以外的所有参赛：

```js
function add(a = 0, ...b) {
  let sum = 0;
  sum += a;
  
  for(let i in b) {
    sum += b[i];
  }
  
  return sum;
}
add(1, 2, 3, 4);
// b 代表了剩余的参数列表
```

这个功能也可以用 arguments 来模拟：

```js
function add() {
  var len = arguments.length;
  
  var sum = 0;
  
  if(len > 1) {
    sum += arguments[0];
  }
  
  for(var i = 1; i < len; i++) {
    sum += arguments[i];
  }
  
  return sum;
};
console.log(add(1, 2, 3, 4)); // 10
```

扩展运算符
----

... 用于扩展列表，或者类似列表的解构（有些像 ...rest 的逆运算）：

```js
console.log(...[1, 2, 3]); // 1, 2, 3
```

name 属性
----

function 的 name 属性代表了函数名：

```js
function add(a, b) {}

add.name; // add
```

arrow function
----

参考：[arrow-function](./arrow-function.md)
