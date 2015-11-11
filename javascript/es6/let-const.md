let/const
====

之前我们使用 var 来声明变量，这种方式存在一些问题：

1\. 外部作用域能访问到子作用域定义中的变量：

```js
function test() {
  var a = '123';
  
  if(a.length) {
    var b = 'OK';
  }
  
  console.log(a);
  console.log(b);
}

test();
// 123
// OK
```

因为 b 的作用域也是整个函数。

ES6 中可以使用 let 关键字声明局部变量，这个变量则只能在其作用域（外部的第一对 `{}` 内）内部访问：

```js
function test() {
  let a = '123';
  
  if(a.length) {
    let b = 'OK';
  }
  
  console.log(a);
  console.log(b);
}

test();
// 123
// ReferenceError: b is not defined
```

let 声明过的变量不可以再次声明：

```js
let a = 0;

let a = '123';
// TypeError: Identifier 'a' has already been declared
```

2\. 变量可以被改写

```js
var DO_NOT_CHANGE = '1234';

DO_NOT_CHANGE = '1111';

console.log(DO_NOT_CHANGE); // 1111
```

我们需要保证不变的值会被修改。

ES6 中可以使用 const 关键字声明常量：

```js
const DO_NOT_CHANGE = '1234';

DO_NOT_CHANGE = '1111';

console.log(DO_NOT_CHANGE); // 1234
```

虽然修改 DO_NOT_CHANGE 的语句没有出错，但修改并未生效。

const 声明过的常量也不可以再次声明。
