Array 数组
====

数组是值的有序集合，每个值对应了数组中的一个位置，称为索引。

JavaScript 数组中的值可以是任何类型，索引从 0 开始。

数组会根据值得数量自动调整长度，不需要在创建时指定长度。可使用 array.length 属性访问数组的长度：

```js
var a = [1,2,3];
var len = a.length; // 3
```

创建数组
----

可以使用直接量创建数组：

```js
var empty_array = []; // 空数组
var number_array = [1, 2, 3, 4, 5]; // 包含 5 个整数的数组
var mix_array = [1, "2", true]; // 混合数组
var dyadic_array = [
  [1, 2],
  [3, 4],
  [5, 6]
]; // 二维数组
var object_array = [
  {
    a: 1,
    b: 2
  },
  {
    a: 3,
    b: 4
  }
]; // 对象数组
var a = 1;
var array = [a, a+1, a+2]; // 可使用变量作为数组元素
```

最后一个元素之后的 `,` 可选，任意元素也可以省略，将被指定为 undefined。

还可以使用 Array 对象构造数组：

```js
var empty_array = new Array(); // 创建空数组
var array = new Array(10); // 创建长度为 10 的数组（此时，数组元素仍不可访问，索引值也无效）
var array = new Array(2, 3, 4); // 等同于 [2,3,4]
```
	
数组元素的读写
----

使用 array[n] 可访问数组 array 中索引为 n 的元素：

```js
var array = ["a", "b", "c"];
var elmt = array[1]; // "b"
```

同样，也可以通过为 array[n] 赋值，来修改对应的元素：

```js
array[0] = 5; // array=[5,"b",c]
```

数组元素的添加和删除
----

直接为数组中的空元素赋值，即可为数组 __添加__ 元素：

```js
var a = []; // 空数组
a[0] = "a";
a[1] = "b"; // 添加两个元素
```

Array 对象提供了 push(elmt, [elmts]) 方法，可向数组末尾追加一个或多个元素：

```js
a.push("c"); // a[2] = "c"
a.push("d", "e"); // a[3] = "d", a[4] = "e"
```

也可以使用 unshift(elmt,[elmts]) 方法，向数组开头追加一个或多个元素：

```js
a.unshift(0); // a=[0, "a", "b"...]
```

delete 操作，可以 __删除__ 数组中的元素：

```js
var a = [1, 2, 3];
delete a[1]; // 删除索引 1 对应的元素
```

元素被删除后，索引值对应的位置没有任何元素，但不影响数组的长度。

对应的，Array 对象提供了两个方法，用于从数组中删除头部或尾部的元素。

也可以直接为数组的 length 属性赋值，来删除末尾的一个或多个元素：

```js
var a = [1, 2, 3];
a.length = 1; // a = [1]
```

pop() 方法返回数组末尾的一个元素，并将其从数组中移除：

```js
var a = [1, 2, 3];
var elmt = a.pop(); // a = [1, 2], elmt = 3
```

shift() 方法返回数组开头的一个元素，并将其从数组中移除：

```js
var a = [1,2,3];
var elmt = a.shift(); // a = [2, 3], elmt = 1
```

参考：[Array](./object/array.md)

数组的遍历
----

使用 for 循环，配合 array.length 属性可以遍历数组：

```js
// 第一种
for(var i = 0; i < array.length; i++) {
  // array[i]
}
// 第二种
var len = array.length;
for(var i = 0 ; i < len; i++) {
  // array[i]
}
// 第三种
for(var i = 0, len = array.length; i < len; i++) {
  // array[i]
}
```

可以在循环中检验数组元素的合法性：

```js
for(var i = 0; i < len; i++) {
  if(array[i]) { // 非 null undefined 等空值
    // array[i]
  }
}
```

也可以使用 for/in 循环遍历数组：

```js
for(var index in array) {
  // array[index]
}
```

上边的方法会同时访问到 array 中继承到的属性，可以添加对属性的过滤：

```js
for(var index in array) {
  if(array.hasOwnProperty(index)) { // 过滤属性
    // array[index]
  }
}
```

ECMAScript 5 中增加了 forEach(callback) 方法，可以遍历数组，并使用 callback 函数对其进行处理：

```js
array.forEach(function(elmt) {
  // elmt 为数组元素
});
```

多维数组
----

JavaScript 中的多维数组是将数组作为数组元素：

```js
var da = [
  [1, 2],
  [3, 4],
  [5, 6]
]; // 二维数组
```

访问其中的元素：

```js
var a1 = da[1]; // [1,2]
var da1 = da[1][0]; // 1，等同于 a1[0]
```

数组的方法
----

参考：[Array](./object/array.md)

字符串与数组
----

字符串的表现类似于一维数组：

+ 都是值的有序集合
+ 都可通过索引访问对应位置上的值
+ 索引都从 0 开始
+ 都具有代表长度的 length 属性
+ 二者可以方便的转换
