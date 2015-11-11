模块（module）
====

ES 2015 诞生之前，JavaScript 中并没有模块相关的规则，不过有以下常用的方式来划分模块（或文件）：

1. 基于类的模块
----

每个类作为一个模块。

```js
// animal.js
var Animal = (function() {
  this.name = 'Animal';
})();
```

2. 基于对象的模块
----

每个对象作为一个模块（命名空间）。

```js
// config.js
var config = {
  width: 800,
  height: 600,
  padding: 10
};
```

3. 将多个类打包成对象模块
----

多个具有相似特征的类打包成一个对象模块（命名空间）。

```js
// zoo.js
var Zoo = {
  Cat: (function() {
      //
    })(),
  Dog: (function() {
      //
    })()
};
```

Node.js 中使用了 [CommonJS](http://wiki.commonjs.org/wiki/CommonJS) 的模块定义方式，浏览器环境中也有 [RequireJS](http://requirejs.org/) 等模块定义和加载工具。ES 2015 中则添加了类和模块的标准，目前也已经可以在部分环境中直接（或通过第三方工具）使用了。
