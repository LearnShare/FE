遍历（iterator）
====

ES6 中将原来各种对集合进行遍历的操作统一成 Iterator 接口，为不同类型的集合数据实现了几乎统一的遍历方式。

for of
----

for of 类似于 for in 循环，但用于匹配集合中的值，而非索引或属性：

```js
var list = ['a', 'b', 'c'];

// for in
for(var i in list) {
  // i 0, 1, 2
  // list[i] 'a', 'b', 'c'
}

// for of
for(var item of list) {
  // item 'a', 'b', 'c'
}
```
