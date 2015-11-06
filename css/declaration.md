声明（declaration）
====

@import
----

`@import` 声明用于将外部文件作为样式引入当前文件中：

```css
@import './base.css';
@import url('../lib/bootstrap.css');
```

可以在 `@import` 声明中包含媒体查询语句，使引入的样式只能在特定条件下生效：

```css
@improt '../mobile.css' (max-width: 480px);
```

`@import` 声明需要写在 CSS 文件的顶部。

@charset
----

`@chartset` 用于声明 CSS 文件的编码（默认使用 UTF-8）。正确的指定编码，可以保证浏览器正常的执行该代码。

```css
@chartset 'utf-8';
```

该声明也需要写在 CSS 文件的顶部。

@media
----

`@media` 声明用于指定其范围内的样式会在何种条件下生效。可以支持的条件有：

1\. 设备类型

+ all 所有设备[默认]
+ aural 发音设备
+ braille 触摸设备（盲文）
+ handheld 手持设备（手机、平板）
+ print 打印机
+ projection 投影设备
+ screen 屏幕
+ tty 电传打字机
+ tv 电视机
+ embossed 转印设备

2\. 设备或屏幕属性

+ width 浏览器内容区域宽度 参考：[width-vs-device-width](http://www.sitepoint.com/media-queries-width-vs-device-width/)
+ min-width 浏览器内容区域最小宽度
+ max-width 浏览器内容区域最大宽度
+ height 浏览器内容区域高度
+ min-height 浏览器内容区域最小高度
+ max-height 浏览器内容区域最大高度
+ device-width 设备显示区域宽度
+ min-device-width 设备显示区域最小宽度
+ max-device-width 设备显示区域最大宽度
+ device-height 设备显示区域高度
+ min-device-height 设备显示区域最小高度
+ max-device-height 设备显示区域最大高度
+ aspect-ratio 浏览器内容区域宽高比
+ min-aspect-ratio 浏览器内容区域最小宽高比
+ max-aspect-ratio 浏览器内容区域最大宽高比
+ device-aspect-ratio 设备显示区域宽高比
+ min-device-aspect-ratio 设备显示区域最小宽高比
+ max-device-aspect-ratio 设备显示区域最大宽高比
+ color
+ min-color
+ max-color
+ color-index
+ min-color-index
+ max-color-index
+ monochrome
+ min-monochrome
+ max-monochrome
+ resolution 分辨率（dpi/dpcm）
+ min-resolution
+ max-resolution
+ scan
+ grid

3\. 设备方向（orientation）

+ landscape 横向
+ portrait 纵向

### 属性组合

上面的属性也可以通过两种方式进行组合：

1. `,` 分隔，代表多组条件
2. 使用逻辑操作符组合多个条件：

+ and 且
+ not 非
+ only 唯一

```css
@media print {
  /* 只在打印机（或打印预览）中生效 */
}

@media (min-width: 480px) and (max-width: 960px) {
  /* 只在内容区域宽度 >= 480px 且 <= 960px 是生效 */
}
```

@font-face
----

用来定义外部字体。

参考：[font-face](./font-face.md)

@page
----

描述打印页面的声明。

@keyframes
----

用来定义动画关键帧的声明。

参考：[animation](./animation.md)
