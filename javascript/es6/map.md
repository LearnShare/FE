Map
====

Map 是类似于 Object 的 key, value 结构。 Object 的属性只能用字符串，属性值可以是任意的。Map 的 key 和 value 都可以是任意值。

```js
var m = new Map([
  ['key1', 'value1'],
  ['key2', 'value2']
]);
```

只有同一个对象才能匹配到 Map 中对应的 key：

```js
var m = new Map();

var a = [1, 2];
var b = [1, 2];

m.set(a, 'a');
m.get(a); // 'a'
m.get(b); // undefined
```

属性
----

### map.size()

获取 map 成员的数量。

```js
var m = new Map();

m.set('a', 1);
m.set('b', 2);

m.size; // 2
```

方法
----

### map.set()

设置 key, value 值，如果对应的 key 已存在，则覆盖原有的值：

```js
m.set({ x: 0 }, { y: 1 });
```

### map.get()

获取 key 对应的值，如果不存在，则返回 undefined。

```js
m.get('number');
```

### map.has()

判断 key 是否已存在。

```js
m.has('number');
```

### map.delete()

删除 key 及其对应的 value。

```js
m.delete('number');
```

### map.clear()

清除所有成员。

```js
m.clear();
```

遍历
----

可以使用下面的方法来遍历 Map 结构：

```js
var m = new Map([
  ['a', 1],
  ['b', 2]
]);

for(let [key, value] in m) {
  // key 'a', 'b'
  // value 1, 2
}

for(let item in m.keys()) {
  // item 'a', 'b'
}

for(let item in m.values()) {
  // item 1, 2
}

for(let item in m.entries()) {
  // item ['a', 1] ['b', 2]
}

m.forEach(function(key, value, map) {
  //
});
```

WeakMap
----

与 Map 不同的是，WeakMap 只能接受对象（null 除外）作为参数。WeakMap 中的值也会被垃圾回收机制忽略。
