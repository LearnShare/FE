link 标签
=========

`<link>` 元素用于定义与当前 HTML 文档关联的外部文件，通常是样式文件（`CSS`）。

通过 `<link>` 元素引用外部样式表：

```html
<link rel="stylesheet" href="main.css" />
```

属性
----

### 1.href

用于定义外部文件的 URL。

属性值：
>1. url 指向外部文件的URL

### 2. media

参考：HTML tag style attr: media

### 3. rel

定义外部文件与当前文档的关系。

属性值：
>1. icon 页面的图标（favicon）
>2. stylesheet 外部样式文件（CSS）

通过 `<link>` 元素定义页面的图标：

```html
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
```

该图标和 `<title>` 属性一样，会显示在浏览器的标题栏（或浏览器标签）和收藏夹的项目中。

![link-icon](../images/html-tag-link-icon.png "favicon")

### 4.sizes [HTML5]

用于指定外部文件的尺寸。（仅适用 `rel="icon"` 的情况）

属性值：
>1. HeightxWidth 高度x宽度（如 32x32，x/X 均可）

### 5.type

用于指定外部文件的 MIME 类型。

注：

在 HTML5 中，`type="text/css"` 可选，因为外部样式表通常为 CSS。
