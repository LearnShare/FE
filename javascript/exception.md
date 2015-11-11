异常（Exception）
====

错误
----

JavaScript 中包含了许多类型的错误，当程序执行到发生错误的位置时，通常会停止或退出：

+ [EvalError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/EvalError)
+ [InternalError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/InternalError)
+ [RangeError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
+ [ReferenceError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
+ [SyntaxError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
+ [TypeError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
+ [URIError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/URIError)

我们也可以自己创建一个错误：

```js
var e = new Error('I got an Error here.');
```

Error 的语法如下：

```
new Error([message[, fileName[, lineNumber]]])
```

参数：
>message 可读的错误信息（可选）
>fileName 发生错误的文件（可选），默认为当前代码所在文件
>lineNumber 发生错误的代码行（可选），默认为 new Error() 代码所在的行

异常
----

...

throw
----

参考：[MDN: throw](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/throw)

thorw 语句用来抛出自定义异常，异常可以是值或 Error 对象：

```js
function e() {
  throw new Error('Got an Error here.');
}
e(); // [Error: Got an Error here.]

function f() {
  throw 'Some exception happend.';
}
f(); // Some exception happend.
```

抛出的异常会向上传播，直到被 try catch 语句处理。否则，异常会展示给用户，并导致程序停止运行。

try catch
----

try catch 语句用来捕获 try {} 范围内的异常。如果没有异常发生，则继续执行后面的代码；如果发生异常，则进入 catch() {} 部分执行（一般用来处理异常，或使用其他备用方案解决问题）：

```js
function e() {
  throw new Error('Got an Error here.');
}

try {
  e();
} catch(e) {
  console.log(e); // [Error: Got an Error here.]
}
```

捕获到的异常，也可以再次通过 throw 抛出，交给其他的异常处理代码来处理：

```js
try {
  //
} catch(e) {
  if(e > 10) {
    throw e;
  }else {
    // do something
  }
}
```

可以使用另一种写法（可能仍未被支持）来代替上面的代码：

```js
try {
  //
} catch(e if e <= 10) {
  // do something
} catch(e) {
  // do another thing
}
```

try catch 也可以配合 finally 语句来使用（catch 此时可以省略）。不论是否发生异常，finally 部分总会执行：

```js
try {
  //
} finally {
  // always do
}
```

try catch finally 语句可以嵌套使用。
