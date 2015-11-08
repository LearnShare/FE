对象的方法
====

对象不仅可以有属性，还可以有 _方法_ 。方法也是作为对象的属性存在的：

```js
var line = {
  p1: point1,
  p2: point2
};
line.length = function() {
  var x = this.p2.x - this.p1.x;
  var y = this.p2.y - this.p1.y;
  return Math.sqrt(x * x + y * y);
}; // 为 line 对象添加 length() 方法
// 访问对象的方法
var len = line.length();
```

内置方法
----

### 1.toString()

该方法通常用来将对象转换为字符串形式输出。默认的方法继承自 Object 对象：

```js
var obj = new Object();
var text = obj.toString(); // [object Object]
```

多数对象通常需要重写该方法，来实现自己的功能。

### 2.toLocaleString()

该方法返回对象的本地化表示。

Date 和 Number 对象重写了该方法。

### 3.toJSON()

Object.prototype 并未定义此方法，但当使用 JSON.stringify(obj) 序列化对象时，会调用对象的 toJSON() 方法。所以可以重写该方法，来定制序列化的方式。

### 4.valueOf()

当需要将对象转换为原始值时，会调用该方法。

自定义方法
----

直接为对象的属性赋予 function() {} 对象，即可为对象添加方法，该属性将作为方法名：

```js
var obj = {
  fun: function() { // 声明方法
    // some code
  }
};
// 调用方法
obj.fun();
```
