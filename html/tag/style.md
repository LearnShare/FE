style 标签
====

`<style>` 元素用于在 HTML 文档中定义 CSS 代码。

示例：

```html
<style>
  body{
    background-color:#CCC;
  }
</style>
```

也可以使用 `<link>` 元素引用外部的 CSS 文件，或者使用 `style` 属性定义内联的样式。

参考：CSS: media

属性
----

### 1.type

用于定义内容类型。  
由于样式通常为 CSS 代码，所以该属性可选。

属性值：
>1. text/css 内容为 CSS 代码

### 2.media

用于定义应用样式的目标设备。

属性值：
>1. all [默认值] 所有设备
>2. screen 显示器
>3. handheld 移动设备
>4. print 打印机

### 3.scoped [HTML5]

应用范围限定（样式仅应用于 `<style>` 元素的父元素及其所有子元素）。

属性值：
>1. scoped
