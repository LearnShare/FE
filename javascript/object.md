对象
====

`JavaScript` 中的对象是一种复合值，它是 名称（属性）-值 对的无序集合。除了前面五种原始值，`JavaScript` 中的一切值（包括函数）都是对象（或者说都有对象的特征，除了 `undefined`）。

```js
var point = {
  x: 0,
  y: 0
};
```

多个属性之间，使用 `,` 分隔，最后一个属性之后不加 `,`。多个属性也可以分行写。对象声明要以 `;` 结尾。

对象声明
----

声明对象有两种方式：

### 1.直接声明

```js
var point = {
  x: 0,
  y: 0
};
```

### 2.通过 new 创建

```js
var object = {}; // 创建空对象。等同于 new Object()
var date = new Date(); // 创建新的 Date 对象
```

该方式调用了对象的构造函数。

参考：自定义对象

#### 原型属性

`JavaScript` 中，所有的对象（除了 null）都包含了一个原型对象，该对象继承自 Object 对象的 prototype 属性（对象）。对象的原型是对象继承和扩展的关键属性。

参考：类和继承

### 3.Object.create()（继承）

Object.create() 函数用于创建新的对象：

```js
var x = Object.create({
  x: 0,
  y: 0
}); // x 继承了传入的对象
```

可以传入 Object.prototype 来创建空对象。当传入 null 对象时，则创建了一个没有原型的对象。该对象没有任何属性和方法。

用于通过继承创建对象的工具函数：

```js
function inherit(p) {
  if(p == null) { // 检测传入对象是否为 null
    throw TypeError();
  }
  if(Object.create) { // 检测 Object.create() 是否可用
    return Object.create(p);
  }
  var t = typeof p;
  if(t !== "object"
      && t !== "function") { // 检测是否为有效对象
    throw TypeError();
  }
  function f() {}; // 定义新对象的构造函数
  f.prototype = p; // 使新对象的原型继承自 p
  return new f(); // 通过构造函数创建对象
}
```

对象的属性
----

参考：[object-properties](./object-properties.md)

对象的方法
----

参考：[object-methods](./object-methods.md)

对象的序列化和 JSON 解析
----

对象序列化，是指将对象转换为字符串形式，该字符串也可以还原为对象。

JSON.stringify(obj) 可以将 obj 对象序列化：

```js
var str = JSON.stringify(o);
// 返回 '{ "x":1, "y":2 }'
```

序列化规则：

+ 只能序列化对象中可枚举的自有属性
+ 支持 对象、数组、字符串、Infinity、true、false 和 null
+ NaN Infinity -Infinity 序列化为 null

JSON.parse(string) 可以将字符串 string 还原为对象形式：

```js
JSON.parse(str);
// 返回 { x: 1, y: 2 }
```

JSON.parse() 的规则：

+ 只能将属性值还原为字符串形式

函数、RegExp 对象、Error 对象和 undefined 值都不能序列化和还原。
