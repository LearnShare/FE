arrow function
====

箭头函数是一种简化函数定义的语法：

```js
var f = a => a + 1;
// 等同于
var f = function(a) {
  return a + 1;
}

var add = (a, b) => a + b;
// 等同于
var add = function(a, b) {
  return a + b;
}
```

参数列表的写法：

```js
var f = () => 5; // 无参数
var f = a => a + 1; // 一个参数
var f = (a, b) => a + b; // 两个或多个参数
```

返回语句的写法：

```js
var f = a => a + 1; // 只有一句，直接将表达式返回
var f = (a, b) => {
  let c = 0;
  c = a - b;
  return c;
}; // 有多条语句，则与常规 function 写法相同，并使用 return 返回
```

箭头函数的特征
----

1\. 函数内的 this 为定时的环境，无法通过 call() 来改变：

```js
var Animal = function() {
  this.name = 'Animal';
  
  this.showName1 = function() {
    return this.name;
  };
  
  this.showName2 = () => this.name;
};

var a = new Animal();

console.log(a.showName1()); // Animal
console.log(a.showName2()); // Animal

var b = {
  name: 'b'
};

console.log(a.showName1.call(b)); // b
console.log(a.showName2.call(b)); // Animal
```

2\. 不可以用作构造函数

```js
var Point = (function(x, y) {
  return (x, y) => {
    this.x = x;
    this.y = y;
  };
})();

var p = new Point(3, 5);
/*
TypeError: (x, y) => {
    this.x = x;
    this.y = y;
  } is not a constructor
*/
```

这样的方式是可以的：

```js
var Point = (function(x, y) {
  return function(x, y) {
    this.x = x;
    this.y = y;
  };
})();

// 或者
var Point = (function(x, y) {
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  
  return Point;
})();

var p = new Point(3, 5);
```

3\. 无法使用 arguments，但可以使用 rest

```js
var f = (a, b) => {
  console.log(arguments); // Uncaught ReferenceError: arguments is not defined
  let c = 0;
  c = a - b;
  return c;
};
```

4\. 不可以使用 yield 语句
