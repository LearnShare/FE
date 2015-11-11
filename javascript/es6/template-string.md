template string
====

之前我们通过变量拼接字符串的方式：

```js
var name = 'Tag';
var hello = 'Hello, ' + name + '.';
// Hello, Tag.
// 或
var hello = [
  'Hello, ',
  name,
  '.'
].join('');
// Hello, Tag.
```

这种方式并不优雅，语句中包含了过多的引号、加号以及其他操作符和函数。

ES6 中可以使用模板字符串直接拼接变量：

```js
var name = 'Tag';
var hello = `Hello, ${name}.`;
// Hello, Tag.
```

template string 需要使用一对 \`\`（反引号） 包括起来。

是不是像你熟悉的模板语言（如 [Jade: Interpolation](http://jade-lang.com/reference/interpolation/)）的语法？

也可以支持变量的计算：

```js
var a = 3,
    b = 5;

var x = `a * b = ${a * b}`;
// a * b = 15
```
