JavaScript 语法
====

字符集
----

`JavaScript` 全面支持 Unicode，和 `HTML` `CSS` 一样，请使用 UTF-8 格式的编码保存文件。

标识符
----

`JavaScript` 的标识符（identifier）区分大小写，所以，变量、关键字、函数名等标识符都需要严格统一大小写。

标识符用来对变量、函数、对象或类进行命名。标识符需要遵守以下规则：

+ 必须以 字母（a~z，A~Z）、下划线（_）或美元符（$）开始
+ 其它字符可以是字母、数字、下划线或美元符

__注意：__ `JavaScript` 允许在标识符使用任意的 Unicode 字母，但为了保证代码的可读性，建议仅使用英文字母。

关键字和保留字
----

`JavaScript` 使用了一些标识符作为关键字，这些关键字就不可以在代码中当做普通标识符来使用了：

>break case catch continue debugger default delete do else false finally for function if in instancesof new null return switch this throw true try typeof var void while with

### 全局变量和函数

`JavaSctipt` 定义了许多全局变量和函数，它们的名字也不可以当做普通标识符：

>arguments Array Boolean Date decodeURI decodeURIComponent encodeURI encodeURIComponent Error eval EvalError Function Infinity isFinite isNaN JSON Math NaN Number Object parseFloat parseInt RangeError ReferenceError RegExp String SyntaxError TypeError undefined URIError

### 保留字

`JavaScript` 中还保留了一些关键字，不过这些关键字仍未被使用：

>class const enum export extends import super

在 `JavaScript` 严格模式下，还有另外两个标识符不可以使用：

>arguments eval

`ECMAScript 3` 将所有的 Java 关键字都作为保留字，如果需要兼容 `ES3` 的解析器，就不要使用这些保留字作为标识符：

>abstract boolean byte char class const double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile

语句
----

`JavaScript` 中，请使用 `;` 作为语句的结尾。

注释
----

`JavaScript` 支持行注释和块注释两种方式：

```js
// 行注释
/*
  块注释
*/
```

空白符
----

同大多数语言一样，`JavaScript` 会忽略标识符、操作符及与语句之间的空白符（空格、制表符、换行符等）。不过，在代码中适当的应用缩进、对齐和换行，有利于提高代码的可读性。
