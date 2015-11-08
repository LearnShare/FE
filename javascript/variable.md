variable 变量
====

变量的声明
----

变量在声明后才能使用。声明变量要是用关键字 var：

```js
var a; // 声明变量 a
var a, b; // 声明变量 a b
var a = 1; // 声明变量并赋值
var a = 1, b = 2; // 声明多个变量并赋值
```

变量的赋值
----

声明变量后，对变量的首个操作应该是赋值：

```js
var a;
a = 1;
```

如果变量未赋值，则变量的值为 undefined。如果访问一个不存在的变量，其值同样是 undefined：

```js
var a;
var value_a = a; // undefined
var value_b = b; // undefined
```

`JavaScript` 中的变量是无类型的，可以将任何类型的值赋给一个变量：

```js
var a;
a = 1; // Number
a = "abc"; // String
a = new Date(); // Date
a = function() {}; // Function
a = [1, 2, 3]; // Array
a = { x: 1, y: 2 }; // Object
```

变量的访问
----

使用变量时，将其作为一个值或对象：

```js
var a = 1;
a++; // 自增操作
var b = "abc";
b.length; // 字符串的长度 3
b[1]; // 字符串第二个字符 "b"
var c = function(x) { return x * x; };
c(x); // 函数 求 x 的平方
var d = [1, 2, 3];
d.push(4); // 为数组添加元素
var e = { x: 1, y: 2 };
e.x; // 访问对象的 x 属性
```

变量的作用域
----

### 局部变量

在函数、控制结构和对象中声明的变量为局部变量：

```js
// 函数
function fun(a, b) {
  var x = a;
      y = b;
} // a b x y 只能在函数体中访问到
// 控制结构
for(var i = 0; i < 5; i++) {
  // i
} // i 只能在循环体中访问到
// 对象
var obj = {
  x: 1,
  y: 2
};
obj.sum = function() {
  return this.x + this.y;
}; // x y 只能在对象中访问
// 要访问对象中的值，需要访问对象的属性
obj.x;
```

### 全局变量

如果变量声明不包含在函数、控制结构或对象中，则变量为全局变量：

```js
var a = "global virable";
```

全局变量可以在任何位置访问。

### 作用域链

由于 `JavaScript` 中的所有值都可看做对象，所以任何操作都基于对象的，且操作的返回值或语句的值也都是对象。因此，每段代码或表达式都对应一个对象列表——作用域链。
