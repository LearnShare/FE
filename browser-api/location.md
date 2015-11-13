Location
====

Location 接口代表了当前页面的 URL 相关的信息，它实现了 [URLUtils](./url-utils.md) 接口。

属性
----

参考：[URLUtils](./url-utils.md)

方法
----

### assign()

跳转到指定的 URL（会记录到历史列表中）。

语法：
>location.assign(url);

必须加载同源的地址。

### reload()

重新加载当前页面。

语法：
>object.reload(forcedReload);

参数：

+ forcedReload 是否强制刷新（只从服务器加载，忽略本地缓存的内容）

### replace()

加载指定的 URL，并替换掉当前页面（会替换掉历史列表中最近一条记录）。

语法：
>object.replace(url);

### 
