CanvasRenderingContext2D
====

参考：[CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

```js
var canvas = document.getElementById('canvas');

var context = canvas.getContext('2d');
```

坐标和尺寸
----

canvas 中的坐标和浏览器中的规则一样，以左上角为原点（0, 0），向右为 x 轴正方向，向下为 y 轴正方向，单位为 px。

填充和画笔样式
----

### fillStyle

设置或获取 context 的填充样式。

支持的值：

+ color CSS 颜色值（默认为 '#000'）；
+ gradient 渐变（线性渐变或径向渐变），参考 `createLinearGradient()` 和 `createRadialGradient()`；
+ pattern 材质（参考 `createPattern()`）。

### strokeStyle

设置或获取 context 的画笔样式。

属性值与 `fillStyle` 相同。

渐变和材质
----

### createLinearGradient()

### createRadialGradient()

### createPattern()

线段样式
----

### lineWidth

设置或获取线段宽度。

### lineCap

设置线段顶端的样式。

可用样式：

+ butt 截断（截止到端点，默认值）；
+ round 圆（以端点为圆心的半圆）；
+ square 正方形（以端点为中心）。

### lineJoin

设置两条线段接头的样式。

可用样式：

+ round 圆角（默认）；
+ bevel 切角；
+ miter 尖角。

### miterLimit

设置或获取斜接面限制比例。

### setLineDash()

设置线段的虚线规则。

参数：
>[a, b] 实线长度 空白长度。

参数为数组，数组项目按照 实线长度，空白长度 的方式排列。

如果数组项目为奇数个，则复制一次：
>[a] => [a, a]  
>[a, b, c] => [a, b, c, a, b, c]

```js
context.lineWidth = 5;

context.setLineDash([5, 10]);
```

### getLineDash()

获取线段的虚线规则（如果通过 `setLineDash()` 设置了奇数规则，会转换为偶数规则返回）。

### lineDashOffset

设置或获取虚线绘制的偏移量。

参数：
>offset 偏移量，正数为向起点偏移（默认为 0）。

文本样式
----

### font

设置或获取字体规则。

参数为 CSS 字体规则（默认为 '10px sans-serf'）。

### textAlign

设置文本的对齐方式。

可用的对齐方式：

+ left 左对齐；
+ right 右对齐；
+ center 居中对齐；
+ start 对齐到起点（根据文本书写方向对其）；
+ end 对齐到终点。

### textBaseline

设置或获取文本的基线位置。

可用的基线位置：

+ top
+ hanging
+ middle
+ alphabetic
+ ideographic
+ bottom

参考：[Wiki: 基线](https://zh.wikipedia.org/wiki/%E5%9F%BA%E7%B7%9A)

### direction

设置或获取文本的方向。

可用的方向：

+ ltr
+ rtl
+ inherit（默认）。

文本
----

### fillText()

绘制文本并填充。

参数：
>text 要绘制的文本内容；  
>x 绘制起点的 x 坐标；  
>y 绘制起点的 y 坐标；  
>[maxWidth] 文本的最大宽度（如果 maxWidth < 文本实际宽度，则对文本进行横向压缩）。

```js
context.fillText('Draw Text Here', 100, 40);
```

### strokeText()

绘制文本并描边。

参数：
>与 `fillText()` 相同。

### measureText()

计算文本的尺寸。

参数：
>text 要计算尺寸的文本内容。

阴影
----

### shadowBlur

设置阴影的模糊程度。

属性值：
>level 模糊数值（默认为 0）。

### shadowColor

设置阴影颜色。

属性值：
>color CSS 颜色值（默认为 #000）。

### shadowOffsetX

设置阴影水平方向的偏移量。

### shadowOffsetY

设置阴影垂直方向的偏移量。

矩形
----

### fillRect()

填充矩形区域，样式取决于 `fillStyle` 的值。

参数：
>x 矩形左上角 x 坐标；  
>y 矩形左上角 y 坐标；  
>width 矩形宽度；  
>height 矩形高度。

```js
context.fillStyle = 'green';

context.fillRect(0, 0, 100, 100);
```

### strokeRect()

绘制矩形区域的轮廓，样式取决于 `strokeStyle` 的值。

参数：
>与 `fillRect()` 相同。

```js
context.strokeStyle = 'green';

context.strokeRect(110, 0, 40, 100);
```

### clearRect()

清除矩形区域内的图像（恢复为透明）。

参数：
>与 `fillRect()` 相同。

```js
context.fillStyle = 'green';

context.fillRect(160, 0, 100, 100);

context.clearRect(190, 30, 40, 40);
```

路径
----

### beginPath()

清空子路径，并开始新的路径。

### closePath()

闭合当前路径（如果画笔当前所在的点不是路径起点，则添加一条从当前点到起点的子路径）。

### moveTo()

移动画笔到指定的点。

参数：
>x 目标点 x 坐标；  
>y 目标点 y 坐标。

### lineTo()

创建一条从当前点到目标点的子路径。

参数：
>与 `moveTo()` 相同。

### bezierCurveTo()

### quadraticCurveTo()

### arc()

创建一条圆弧子路径。

参数：
>x 圆心 x 坐标；  
>y 圆心 y 坐标；  
>r 圆半径；  
>sa 弧线起始角度；  
>ea 弧线结束角度；  
>[ac] 是否逆时针绘制（默认为 false，顺时针绘制）。

### arcTo()

根据两个控制点，并以当前位置作为参考绘制圆弧子路径。

参数：
>x1 控制点 1 x 坐标；  
>y1 控制点 1 y 坐标；  
>x2 控制点 2 x 坐标；  
>y2 控制点 2 y 坐标；
>r 圆半径。

### ellipse()

创建一条椭圆弧子路径。

参数：
>x 圆心 x 坐标；  
>y 圆心 y 坐标；  
>rx 半长轴；  
>ry 半短轴；  
>ro 椭圆旋转角度；  
>sa 弧线起始角度；  
>ea 弧线结束角度；  
>[ac] 是否逆时针绘制。

### rect()

绘制矩形子路径（已闭合）。

参数：
>和 `fillRect()` 相同。

路径绘制和填充
----

### fill()

### stroke()

### drawFocusIfNeeded()

### scrollPathIntoView()

### clip()

### isPointInPath()

### isPointInStroke()

变换
----

### currentTransform

### rotate()

### scale()

### translate()

### transform()

### setTransform()

### resetTransform()
