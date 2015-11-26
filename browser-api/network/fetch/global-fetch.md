GlobalFetch
====

GlobalFetch 定义了 fetch() 方法，Window 和 WorkerGlobalScope 都实现了它，所以你可以在 Window 作用域内，或者各种 Workers 中使用它。

方法
----

### fetch()

接收一个 URL 字符串，或者 Resquest 对象，并接收一个 init 对象作为请求的配置。发起请求并返回一个包含 Response 或 Error 的 Promise 对象。

语法：
>fetch(input, init).then(function(response) { ... });

参数：
>init 请求配置，可选。支持下列配置属性，一律可选：

+ method 请求方法（GET/POST/PUT 等）
+ headers 要发给服务器的头信息，可以是 Headers 对象，或者 [ByteString](https://developer.mozilla.org/en-US/docs/Web/API/ByteString)
+ body 要发给服务器的数据，可以是 Blob/BufferSource/FormData/URLSearchParams/UVString
+ mode 请求的模式，可以是 cors/no-cors/same-origin
+ credentials 验证信息，可以是 omit/same-origin/include
+ cache 请求的缓存模式，可以是 default/no-store/reload/no-cache/force-cache/only-if-cached
