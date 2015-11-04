超链接、锚和图像热区
====

1.a
----

`<a>` 元素用来定义超链接。

```html
<a href="http://www.google.com">Google</a>
```

### 属性

#### 1.href

用于指定链接到的目标URL。

属性值：
>1. url 链接到的目标

#### 2.hreflang

用于指定目标 URL 的语言

属性值：
>1. langauge 目标的语言

#### 3.media [HTML5]

用于指定目标 URL 的媒体类型

参考：media query

#### 4.rel

用于指定目标文档和当前文档的关系。

#### 5.target

参考：base-target

#### 6.type

用于指定目标的 MIME 类型。

### 锚

锚点通常用来实现长页面内的直达或跳转，如直接跳转到文章中的某个标题。

#### 定义锚点

当为页面中的任意元素定义了 `id` 属性，它就可以作为一个锚点。

#### 锚点的使用方式

要跳转到页面中的某个锚点，只需要在当前页面的URL后添加 `#` + 锚点名称即可。

```html
<h3 id="name">名为 name 的锚点</h3>

<a href="http://something.com/somepage.html#name">跳转到名为 name 的锚点</a>
```

__注意：__

在 HTML 之前的版本中，都使用 `name` 属性定义锚点，不过在 HTML5 中，只建议在表单元素中使用该属性。【待证实】

2.area
----

`<area>` 元素与 `<map>` 元素配合，用于定义图像映射区域。

__图像热区__ 类似于包含图像的超链接，不过一幅图像可以定义多个热区，而且每个热区都可以定义位置、大小和形状。

```html
<img src="image.png" usemap="#imagemap" />

<map name="imagemap">
  <area href="http://www.google.com/" alt="Google" shap="rectangle" coords="20,20,50,50" />
</map>
```

### 属性

#### 1.alt

用于提供替代文本。

属性值：
>1. text 替代文本

#### 2.coords

用于规定区域的一系列坐标。

属性值：
>1. number,number... 由 `,` 分隔的一系列整数

#### 3.href

#### 4.hreflang

#### 5.media

#### 6.rel

#### 7.shape

用于定义热区的形状。

属性值：
>1. rectangle 矩形 (x1,y1,x2,y2)
>2. circle 圆 (x,y,r)
>3. polygon 多边形 (x1,y1,x2,y2,...,xi,yi)

__注：__ 如果不定义 `shape` 和 `coords` 属性，热区默认为覆盖整幅图像的矩形。

#### 8.target

#### 9.type

3.map
-----

与 `<area>` 元素配合使用，用于定义图像热区。每个 `<map>` 元素中可包含多个 `<area>` 元素。

图像热区有唯一的 `name` 属性，且需要在被定义的图像中通过 `usemap="#map_name"` 引用该值。
