script 标签
====

`<script>` 元素用于在HTML文档中定义脚本代码（通常为 JavaScript），或用于引用外部的脚本文件。

示例：

```html
<script>
  window.alert("JavaScript");
</script>


<script src="jquery.js"></script>
```

属性
----

### 1.async [HTML5]

规定脚本异步执行。（仅适用于外部脚本）  
不可与 `defer` 属性同时使用。

属性值：
>1. async

### 2.defer

规定页面解析完毕后，才执行脚本。（仅适用于外部脚本）

属性值：
>1. defer

### 3. type

指定脚本的 MIME 类型。  
在 HTML5 中，该属性可选。

属性值：
>1. text/javascript 脚本为JavaScript代码

### 4.charset

指定脚本的字符编码。（仅适用于外部脚本）

属性值：
>1. charset... 编码类型

### 5.src

用于指定外部脚本的 URL。（仅适用于外部脚本）

属性值：
>1. src 外部脚本的URL

__注：__

对于外部脚本的执行，受 `async` 和 `defer` 属性影响，浏览器在读取到 `<script>` 引用了外部的脚本时：

1. 未指定 `async` 和 `defer` 属性：__暂停__ 页面的渲染（解析），加载并尝试执行该脚本；
2. 仅指定了 `async` 属性：__继续__ 页面的渲染，__异步地__ 加载并尝试执行该脚本；
3. 仅指定了 `defer` 属性：脚本将在页面渲染完成后执行。

__提示：__

当 `<script>` 元素中同时定义了嵌入的脚本并引用了外部脚本时，嵌入的脚本会被当做 _纯文本_ 对待，不会被执行。
