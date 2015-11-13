FormData
====

FormData 接口用来处理表单数据，是一个 key/value 组成的，不可遍历的数据结构。

```js
var data = new FormData();
```

方法
----

### append()

向数据中添加新属性，或向已有的属性添加新值。

语法：
>data.append(name, value);  
>data.append(name, value, filename);

参数：

+ name 属性名称
+ value 属性值（Blob、File、USVString）
+ filename value 数据（Blon、File）的名称

### delete()

从数据中删除指定的属性和值。

语法：
>data.delete(name);

### get()

从数据中获取指定属性的值。

语法：
>data.get(name);

### getAll()

从数据中获取指定属性的所有值（数组）。

语法：
>data.getAll(name);

### has()

检查数据中是否存在指定的属性。

### set()

向数据中添加新属性，或替换已有的属性的值。

语法：
>data.set(name, value);  
>data.set(name, value, filename);
