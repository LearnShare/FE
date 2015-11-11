严格模式（Strict Mode）
====

参考：[MDN: strict mode](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
[MDN: transitioning to strict mode](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode)
[MSDN: strict mode]<https://msdn.microsoft.com/zh-cn/library/br230269(v=vs.94).aspx>

ES5 中定义了严格模式，用于限定 JavaScript 的语法，保证代码的可靠性和兼容性。

严格模式下，代码需要遵守如下规则：

+ 变量必须先声明再使用；
+ 只读属性不可写；
+ 不可扩展的对象无法添加属性；
+ 不可配置的对象无法删除属性；
+ 不可以为对象定义重复的属性；
+ 不可以为函数定义重复的参数名；
+ 当 this 为 null/undefined 时，该值不会变为全局对象；
+ 语句或代码块中无法声明函数；
+ 无法修改 arguments 对象；
+ 无法使用一些保留的关键词。

开启严格模式
----

开启严格模式，有两种方式：

```js
// 对整个 js 文件开启
// main.js
'use strict';
// ... some code

// 对单个函数开启
function fuc() {
  'use strict';
  // ... some code
}
```

建议使用第一种方式，并对全部文件都开启严格模式。
