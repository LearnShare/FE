函数
===

函数定义
----

函数定义如下：

```js
function fun_name(arguments){
  // operations
}
```

__函数名__ 需要符合 `JavaScript` 标识符定义规则。函数可以有多个 __参数__ ，也可以没有参数。 __形参__ 在函数体中作为局部变量使用。

函数可以有 __返回值__ ，返回值会在调用函数时返回到调用语句：

```js
// 定义
function sum(a, b) {
  return a + b;
}
// 调用
var s = sum(1, 2); // s = 3
```

如果函数作为对象的属性，则该函数称为 __对象的方法__ ：

```js
var obj = {
  x: 1,
  y: 2,
  fun: function() { // 一种定义形式
    //
  }
};
obj.sum = function() { // 另一种定义形式
  return this.x + this.y;
};
```

可以将函数赋值给变量，该变量称为 __匿名函数__ ：

```js
var f = function() {
  //
};
// 调用
f();
```

可以在函数定义后，直接调用该函数：

```js
var f = (function(a) {
  return a * a;
}(5)); // f = 25
```

### 1.return

`return` 用于从函数中返回任何值。当函数运行到 `return` 语句时，函数会停止执行。

### 2.函数嵌套

在 `JavaScript` 中，函数可以嵌套在其它函数中：

```js
function sun(a, b) {
  function square(x) {
    return x * x;
  };
  return (square(a) + square(b));
}
```

嵌套在内层的函数可以读取外层函数的局部变量（包括参数）。

函数调用
----

### 1.普通函数的调用

```js
// 无参函数
function fun1() {
  //
}
// 有参函数
function fun2(a) {
  //
}
// 有返回值的函数
function fun3(a) {
  //
  return x;
}
// 函数调用
fun1();
fun2(5);
var re = fun3(5);
```

### 2.调用对象的方法

```js
var str = 'abcd';
var s = str.substring(1, 2); // s = 'bc'
```

也可以通过字符串形式的属性名调用该函数，不过并不常用：

```js
var s = Math["max"](1, 2); // s = 2
```

如果某个方法的返回值是对象，则可以在调用该方法的语句之后继续调用其返回对象的方法，也就是 __方法链__ ：

```js
var str = "1234abcd";
str.slice(4).replace("a", "A");
// 截取字符串得到 "abcd"，再将 "a" 替换为 "A"
```

### 3.构造函数的调用

构造函数用于构造新的对象，调用时，需要在函数前使用关键字 new：

```js
var array = new Array();
```

### 4.apply()

参考：[MDN: apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

apply()/call() 都可以改变函数执行的上下文（this），从而可以将当前的函数作为其他对象的方法来运行。

参考：<http://www.zhihu.com/question/20289071>

```js
function Animal(name) {
  this.name = name;
  this.showName = function() {
    console.log('Animal name is ' + this.name);
  };
}

function Cat(name) {
  this.name = name;
}

var animal = new Animal('Animal');
var cat = new Cat('miao');

// 将 animal 的 showName() 方法绑定了 cat 再执行
animal.showName.apply(cat);
// animal.showName.call(cat);
// 输出 `Animal name is miao`
```

```
fun.apply(thisArg[, argsArray])
```

第一个参数会作为函数的执行上下文（this）来使用（如果未提供，则使用 Global 对象。浏览器环境中是 Window 对象），其他的参数会作为函数所需要的参数来使用。

### 5.call()

参考：[MDN: call](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

```
fun.call(thisArg[, arg1[, arg2[, ...]]])
```

第一个参数会作为函数的执行上下文（this）来使用（如果未提供，则使用 Global 对象。浏览器环境中是 Window 对象），后面必须使用数组作为函数所需的参数列表。

函数的参数
----

### 1.形参

形参是函数声明时规定的参数。形参在函数体中作为局部变量使用。

函数可以没有形参，也可以有多个形参。

### 2.实参

实参是在调用函数时传入的值，对应的形参会引用传入的实参。

函数声明时，形参无法限制传入数据的类型；函数调用时，也不会检测传入实参的个数。因此，需要在函数中判断传入参数的个数和有效性。

### 3.参数列表

在函数体中，arguments 对象是一个包含了所有传入实参的数组，可通过读取 arguments 的属性和值，判断传入实参的有效性：

```js
function(a, b){
  var len = arguments.length; // 实参个数
  for(var i = 0; i < len; i++){
    // arguments[i] 遍历实参列表
  }
}
```

另外，如果传入的实参个数小于形参个数，则空余的形参值为 undefined。

__注意：__ arguments 对象可写，即实参列表可以被修改，要谨慎使用。

如果需要在函数中使用不定个数的参数，可以使用数组或对象做参数，将所有的值包装到数组或对象中。

使用对象做参数的好处是只需要记住对象的属性名，不需要考虑其顺序。

函数对象
----

`JavaScript` 中的函数不是原始值，而是对象。

### 1.Function()

可以使用函数的构造函数生成函数对象：

```js
var f = new Function("a", "b", "return a+b;");
// 类似于
var f = function(a, b) {
  return a + b;
};
```

唯一的不同点是，每次调用构造函数会生成新的对象，而不是执行已有的函数对象。

### 2.函数的属性

函数是对象，所以它也可以拥有属性。

函数的属性可以作为函数的静态变量使用：

```js
test.counter = 0;
function test() {
  test.counter++;
}
test();
var type = typeof test; // function
var n = text.counter; // 1
```

每个函数都有一个 __length__ 属性，代表了函数期望的参数个数，也就是声明的形参的个数。length 属性可以结合 arguments.length 属性使用，可以用来判断实参的合法性等。

作为对象，函数也包含 prototype 属性，该属性在函数作为构造函数时，可以实现继承等功能。

### 3.作为命名空间

由于函数作用域的影响，函数中的变量都是局部变量，局部变量在函数体内可访问，在函数外不可见。可利用此特性，将函数用作命名空间。

### 4.call() 和 apply()

`call()` 和 `apply()` 方法可以以对象作为参数，为该对象调用某个方法，不论该方法是否属于此对象。

```js
function f(arg1, arg2, ...){}
var obj = new Object();
// call()
f.call(obj, arg1, arg2, ...);
// apply()
f.apply(obj, [arg1, arg2, ...]);
```

与 call() 方法不同，apply() 方法的其他参数必须放在数组中。

### 5.bind()

`bind()` 方法可以将函数绑定到对象中。

```js
function f(arg1, arg2, ...) {}
var obj = new Object();
// bind()
var g = f.bind(obj);
// 调用
obj.f(arg1, arg2, ...);
// 等同于
g(arg1, arg2, ...);
```

闭包
----

内部函数可以访问到外部作用域的变量，并延续外部变量的生命周期的特征，叫做闭包。

参考：[MDN: 闭包](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)
[闭包是什么？](http://www.cnblogs.com/seven-zh/p/4571020.html)

+ 闭包函数可以使用函数作用域以外的变量；
+ 即时外部作用域已经销毁，闭包所使用的外部变量仍然被保存了下来。

使用闭包来保存和处理特定变量：

```js
var timer = (function() {
  var count = 0;
  
  return {
    tick: function() {
      count ++;
      console.log(count);
    }
  };
})();

timer.tick(); // 1
timer.tick(); // 2
timer.tick(); // 3
```

这段代码说明了内部函数访问到的是外部变量本身（引用），而非其拷贝。

```js
function makeFunList() {
  var list = [];
  
  for(var i = 0; i < 4; i++) {
    list[i] = function() {
      console.log('fun ' + i);
    };
  }
  
  return list;
}

var funList = makeFunList();

funList[0](); // 4
funList[2](); // 4
```

好像有些问题，两个函数给出的结果都不正确。这是因为 list 中的函数都使用了同一个 i 变量，这个变量经过 0 1 2 3 一直变成了 4，最终每个函数得到的 i 都是 4。

可以在 for 循环中加入一个闭包，保留当时的 i，并将其传入 list 中的函数：

```js
function makeFunList() {
  var list = [];
  
  for(var i = 0; i < 4; i++) {
    list[i] = (function(index) {
      return function() {
        console.log('fun ' + index);
      };
    })(i);
  }
  
  return list;
}

var funList = makeFunList();

funList[0](); // 0
funList[2](); // 2
```
