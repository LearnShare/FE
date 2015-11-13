XMLHttpRequest
====

XMLHttpRequest（简称 XHR）提供了可以使用 JavaScript 通过 HTTP 等协议与服务器交换数据的能力。

属性
----

### readyState

获取 XHR 对象的状态：

+ 0 UNSENT XHR 对象已创建，但未调用 open()
+ 1 OPENED 已调用 open()
+ 2 HEADERS_RECEIVED 已调用 send()，headers 和 status 可用
+ 3 LOADING 正在从服务器接收数据
+ 4 DONE 数据接收完毕或失败

### response

读取请求返回的数据，可能是 ArrayBuffer、Blob、Document、JavaScript object、DOMString（根据 xhr.responseType 属性来确定）。如果请求失败或未结束，返回 null。

### responseType

服务器返回数据的类型：

+ '' DOMString 包含了 HTML 内容的文本[默认]
+ 'arraybuffer' ArrayBuffer
+ 'blob' Blob 二进制数据
+ 'document' HTML Document 对象
+ 'json' JavaScript object JSON 格式的对象
+ 'text' DOMString

### responseXML

将服务器返回的数据解析为 XML/HTML 元素。

### status

读取服务器返回的 HTTP code。

### statusText

读取服务器返回的 HTTP 状态文本。

### timeout

读取或设置 XHR 对象的请求超时时间（毫秒，默认为 0，无超时）。

### upload

获取 XHR 的 [XMLHttpRequestUpload] 对象，代表了上传过程。它实现了 [XMLHttpRequestEventTarget](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget) 接口，可以用来跟踪文件上传的状态：

XMLHttpRequestEventTarget 的事件：

+ abort 请求中止
+ error 请求发生错误
+ load 请求成功
+ loadstart 请求开始
+ progress 请求进行中
+ timeout 请求超时
+ loadend 请求结束

### withCredentials

方法
----

### abort()

如果请求已经发出（send()），中止该请求。

### getAllResponseHeaders()

获取服务器返回的 HTTP headers（格式为字符串，以 CRLF 分隔）。

### getResponseHeader()

获取服务器返回的指定 HTTP header。

### open()

通过给定的参数初始化一个请求。

语法：
>xhr.open(method, url[, async, user, password]);

参数：

+ method HTTP method
+ url 请求的地址
+ async 是否异步发送（默认为 true），可选
+ user 发送到服务器的用户名，默认为空，可选
+ password 发送到服务器的密码，默认为空，可选

### overrideMimeType()

重写服务器返回数据的 MIME 类型。

### send()

发送请求（无数据），或者向服务器发送数据。

语法：
>send();  
>send(data);

可用数据类型：

+ ArrayBufferView
+ Blob
+ Document
+ DOMString
+ FormData

参考：[FormData](./formdata.md)

### setRequestHeader()

设置请求头信息。

语法：
>xhr.setRequestHeader(header[, value]);

必须在 open() 之后，send() 之前才能使用。如果多次设置同一个 header 属性，则合并为一个后再发送。

事件
----

参考 [XMLHttpRequestEventTarget] 中的事件。

### readystatechange

xhr.readyState 发生变化，也就是请求进入了不同的阶段。一般用这个事件来监听请求的状态。
