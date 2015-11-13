Navigator
====

Navigator 代表了用户代理（这里是浏览器）。

属性
----

### userAgent

`Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.58 Safari/537.36`

用户代理的特征字符串，一般包含了如下信息：

+ 操作系统信息（类型、版本、架构等）
+ 浏览器（类型、版本）
+ 渲染引擎

通常可以用来进行用户访问的统计。但 userAgent 比较容易伪造，所以可信度并不高。

### connection

返回浏览器的 [NetworkInformation](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation) 对象，它包含了当前的网络信息：

+ type 网络类型
+ downlinkMax 最大下载速度

### geolocation

返回 [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation) 对象，可以用来访问设备的位置信息。

### oscpu

返回系统的信息。

### permissions

返回 [Permissions](https://developer.mozilla.org/en-US/docs/Web/API/Permissions) 对象，可以用来访问权限相关的 API。

### serviceWorker

返回 [ServiceWorkerContainer](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer) 对象。
