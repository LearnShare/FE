Headers
====

Headers 接口包含了可以操作 Fetch 的 Request 和 Response 中头信息的方法，负责处理头信息。

```js
var init = {
  'Accept': '*/*',
  'Content-Length': 123
};
var headers = new Headers([init]);
```

参数：
>init 包含任何可用 [头信息](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) 的对象。

方法
----

### append()

向 Headers 中添加新属性，如果该属性已存在，则添加新的值。

语法：
>headers.append(name, value);

### delete()

从 Headers 中删除指定属性。

语法：
>headers.delete(name);

### get()

获取指定属性的首个值。

语法：
>headers.get(name);

### getAll()

获取指定属性的所有值，并返回数组。

语法：
>headers.getAll(name);

### has()

检查 Headers 中是否包含指定的属性。

语法：
>headers.has(name);

### set()

向 Headers 中添加新属性，如果该属性已存在，则替换它的值。

语法：
>headers.set(name, value);
