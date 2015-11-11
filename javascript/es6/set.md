Set
====

Set 是 ES6 中新加入的数据结构，它类似于数组，但成员都是是唯一的：

```js
var s = new Set([1, 2, 2, 3, 3, 3]);

s; // Set { 1, 2, 3 }
```

Set 中不能存在两个相同的值（===），但 NaN 和两个空对象被认为是不同的值。

属性
----

### set.size

set.size 代表了 set 中成员的数量：

```js
var s = new Set([1, 2, 2, 3, 3, 3]);

s.size; // 3
```

方法
----

### set.add()

向 Set 中添加新成员：

```js
var s = new Set();

s.add(3);
```

### set.delete()

从 Set 中删除成员：

```js
var s = new Set([1, 2, 3]);

s.delete(2);
s; // Set { 1, 3 }
```

### set.has()

测试指定的值是否为 Set 成员：

```js
var s = new Set([1, 2, 3]);

s.has(2); // true
```

### set.clear()

清空 set 的成员：

```js
var s = new Set([1, 2, 3]);

s.clear();
s; // Set {}
```

遍历
----

可以使用下面几种方式来遍历 Set 结构：

```js
var s = new Set(['a', 'b', 'c']);

for(let item of s) {
  // item 'a', 'b', 'c'
}

for(let item of s.keys()) {
  // item 'a', 'b', 'c'
}

for(let item of s.values()) {
  // item 'a', 'b', 'c'
}

for(let item of s.entries()) {
  // item ['a', 'a'] ['b', 'b'] ['c', 'c']
}

s.forEach(function(key, value) {
  return value + value;
}); // s => Set { 'aa', 'bb', 'cc' }
```

在 Set 中，key 和 value 都是同一个值，也就是 Set 的成员。

forEach() 用于遍历 Set 并操作每一个成员。

WeakSet
----

WeakSet 与 Set 有两个差别：

1. 成员只能是对象；
2. 成员为弱引用（不在垃圾回收机制的考虑范围内）。

WeakSet 不可遍历，无法读取 size，只能使用下面的三个方法：

+ add()
+ delete()
+ has()
