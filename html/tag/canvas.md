canvas 标签
====

`canvas` 元素用于向网页中插入画布组件，画布可用来绘制图形和图像。

```html
<canvas id="canvas" width="640" height="480"></canvas>
```

属性
----

### 1.width

用于定义画布的宽度（默认为 300）。

### 2.height

用于定义画布的高度（默认为 150）。

__注意：__

自定义画布尺寸时，请设置其 HTML 元素的 `width` 和 `height` 属性。如果在 CSS 中设置其尺寸，会导致画布 __拉伸变形__。

canvas API
----

`canvas` 元素无法通过 HTML 和 CSS 进行内容的添加和绘制，所有对它的操作都是通过其 JavsScript API 实现的。（如果读者学习过 VB、VC 中的图形绘制，就比较容易掌握 `canvas` 元素的 API）

### 1.getContext(contextID)

取得画布的绘图环境。

	var canvas=document.getElementById("canvas");
	var ctx=canvas.getContext("2d");

参数：

1.contextID 绘图环境类型  
>value:  
>>2d CanvasRenderingContext2D（2D 绘图环境）

目前，画布仅支持 2D 绘图。

CanvasRenderingContext2D
----

有了 2D 绘图环境对象，就可以开始绘图了。

参考：context2D
