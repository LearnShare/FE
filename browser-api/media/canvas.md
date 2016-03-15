Canvas
====

参考：[MDN: Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

Canvas （画布、画板）是浏览器提供的可以通过 JavaScript 绘制图形的组件。

```html
<canvas id="canvas"><canvas>
```

```js
var canvas = document.getElementById('canvas');

var context = canvas.getContext('2d');

context.fillStyle = 'green';
context.fillRect(0, 0, 100, 100);
```

元素属性
----

参考：[MDN: canvas element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas)

### width

设置 canvas 的宽度（px）。

### height

设置 canvas 的高度（px）。

Canvas 默认的背景色是透明。

Canvas API
----

参考：[MDN: HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)

```js
var canvas = document.getElementById('canvas');
```

### getContext()

获取绘制上下文。

参数：
>type 绘制上下文的类型；  
>attrs 绘制上下文的参数

type：
>2d [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
>webgl WebGL version 1 (OpenGL ES 2.0)
>webgl2 WebGL version 2 (OpenGL ES 3.0)
>bitmaprenderer ImageBitmapRenderingContext

本文主要讲解 CanvasRenderingContext2D。

```js
var context = canvas.getContext('2d');
```

[CanvasRenderingContext2D API](./context-2d.md)

### toDataURL()

将 Canvas 中的图像转换为 [Data URI](https://developer.mozilla.org/en-US/docs/Web/HTTP/data_URIs) 数据。

参数：
>type 图片格式（默认为 'image/png'）；  
>options 图片质量（对 'image/jpeg' 和 'image/webp' 有效）。

### toBlob()

将 Canvas 中的图像转换为 [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) 数据。

参数：
>callback 转换完成后的回调函数；  
>type/options 与 toDataURL() 相同。

callback 代表的回调函数可以通过 data 参数来读取转换后的 Blob 数据：

```js
canvas.toBlob(function(data) {
  // data: image data
});
```
