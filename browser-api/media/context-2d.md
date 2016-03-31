CanvasRenderingContext2D
====

参考：[CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) [HTML5 Canvas Tutorials](http://www.html5canvastutorials.com/)

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

创建线性渐变（方向和尺寸）。

参数：
>x0 起点 x 坐标；  
>y0 起点 y 坐标；  
>x1 终点 x 坐标；  
>y1 终点 y 坐标。

返回值：
>CanvasGradient

### createRadialGradient()

创建径向渐变（内外环圆心和尺寸）。

参数：
>x0 起始环圆心 x 坐标；  
>y0 起始环圆心 y 坐标；  
>r0 起始环半径；  
>x1 结束环圆心 x 坐标；  
>y1 结束环圆心 y 坐标；  
>r1 结束环半径。

返回值：
>CanvasGradient

### CanvasGradient

渐变对象。

#### addColorStop()

向渐变中添加断点。

参数：
>offset 断点位置（0~1，0 为渐变起点，1 为渐变终点）；  
>color CSS 颜色值。

### createPattern()

创建材质。

参数：
>img 图像数据源（CanvasImageSource，可以是 `HTMLImageElement`, `HTMLVideoElement`, `HTMLCanvasElement`, `CanvasRenderingContext2D`, `ImageBitmap`, `ImageData`, 或 `Blob`）；  
>repeat 平铺规则。

平铺规则：
>repeat-x 横向平铺；  
>repeat-y 纵向平铺；  
>repeat 横向、纵向平铺（默认）；  
>no-repeat 不平铺。

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
+ start 对齐到起点（根据文本书写方向对齐）；
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

+ ltr 从左向右；
+ rtl 从右向左；
+ inherit 继承（默认）。

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

返回值：
>TextMetrics: {
  width: 文本宽度
}

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

填充矩形区域。

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

绘制矩形区域的轮廓。

参数：
>与 `fillRect()` 相同。

```js
context.strokeStyle = 'green';

context.strokeRect(110, 0, 40, 100);
```

### clearRect()

清除矩形区域内的图像。

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

绘制三次贝塞尔曲线。

参数：
>c1x 控制点 1 x 坐标；  
>c1y 控制点 1 y 坐标；  
>c2x 控制点 2 x 坐标；  
>c2y 控制点 2 y 坐标；  
>x 目标点 x 坐标；  
>y 目标点 y 坐标。

参考：[Wiki: 贝兹曲线](https://zh.wikipedia.org/wiki/%E8%B2%9D%E8%8C%B2%E6%9B%B2%E7%B7%9A) 和 [Vimeo: Cubic Bezier Curves](https://vimeo.com/106757336)

### quadraticCurveTo()

绘制二次贝塞尔曲线。

参数：
>cx 控制点 x 坐标；  
>cy 控制点 y 坐标；  
>x 目标点 x 坐标；  
>y 目标点 y 坐标。

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

填充路径。

```js
context.fill();
context.fill(rule);
context.fill(path, rule);
```

参数：
>rule 填充规则（nonezero: 非空，evenodd: 异或。参考 [Wiki: Nonzero-rule](https://en.wikipedia.org/wiki/Nonzero-rule)）；  
>path 路径（`Path2D`）。

### stroke()

对当前路径进行描边。

```js
context.stroke();
context.stroke(path);
```

### drawFocusIfNeeded()

### scrollPathIntoView()

### clip()

### isPointInPath()

判断指定的点是否在路径中。

```js
context.isPointInPath(x, y);
context.isPointInPath(x, y, rule);
context.isPointInPath(path, x, y);
context.isPointInPath(path, x, y, rule);
```

### isPointInStroke()

判断指定的点是否在路径的轮廓上。

```js
context.isPointInStroke(x, y);
context.isPointInStroke(path, x, y);
```

变换
----

### currentTransform

### rotate()

对画布进行旋转。

```js
context.rotate(angle);
```

参数：
>angle 旋转角度（弧度，正数为顺时针）。

### scale()

对画布进行缩放。

```js
context.scale(2, 4);
```

参数：
>x 横向缩放倍数；  
>y 纵向缩放倍数。

### translate()

对画布进行平移。

```js
context.translate(10, 20);
```

参数：
>x 横向平移距离；  
>y 纵向平移距离。

### transform()

对画布进行矩阵变形。

```js
context.transform(1, 1, 0, 1, 1, 0);
```

参数：
>a 横向拉伸；  
>b 横向倾斜；  
>c 纵向倾斜；  
>d 纵向拉伸；  
>e 横向平移；  
>f 纵向平移。

变形矩阵：

```
  a c e
[ b d f ]
  0 0 1
```

### setTransform()

类似于 `transform()`，不过会覆盖当前的变形参数。

### resetTransform()

重置画布的变形参数。

混合
----

### globalAlpha

设置或获取全局的透明度值（会影响图形和图像的透明度，仅对设置该值之后的绘制动作生效）。

属性值：
>alpha 透明度（0: 完全透明；1: 不透明[默认]）。

### globalCompositeOperation

设置或获取全局混合选项。

属性值：
>source-over  
>source-in  
>source-out  
>source-atop  
>destination-over  
>destination-in  
>destination-out  
>destination-atop  
>lighter  
>copy  
>xor  
>multiply  
>screen  
>overlay  
>darken  
>lighten  
>color-dodge  
>color-burn  
>hard-light  
>soft-light  
>difference  
>exclusion  
>hue  
>saturation  
>color  
>luminosity

参考：[Photoshop 混合模式](https://helpx.adobe.com/cn/photoshop/using/blending-modes.html)

绘制图像
----

### drawImage()

将图像绘制到画布上。

```js
context.drawImage(img, dx, dy);
context.drawImage(img, dx, dy, dw, dh);
context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
```

参数：
>img 要绘制的图像数据（`CanvasImageSource`， 可以是 `HTMLImageElement`, `HTMLVideoElement`, `HTMLCanvasElement` 或 `ImageBitmap`）。
>sx 图像裁剪起点 x 坐标；  
>sy 图像裁剪起点 y 坐标；  
>sw 图像裁剪宽度；  
>sh 图像裁剪高度；  
>dx 绘制到画布的起点 x 坐标；  
>dy 绘制到画布的起点 y 坐标；  
>dw 绘制到画布的宽度；  
>dh 绘制到画布的高度。

如果 'dw != sw' 或 'dh != sh'，将会对裁剪的图像进行变形（拉伸或压缩），然后绘制到画布上。

状态
----

### save()

保存画布当前的状态参数，以便通过 `restore()` 恢复到上一个状态。

会被保存的状态包括：
>变形矩阵；  
>剪切边界；  
>虚线规则；  
>画笔/填充样式；  
>线条样式；  
>阴影样式；  
>文本属性；  
>透明度、混合选项及平滑属性。

### restore()

恢复画布到上一个被保存的状态。

### canvas

返回当前 `context` 所属的 `Canvas` 元素。

碰撞边界
----

### addHitRegion()

### removeHitRegion()

### clearHitRegions()

其他
----

### imageSmoothingEnabled

设置或获取是否平滑图像。

属性值：
>boolean 是否平滑图像（true: 平滑[默认]；false: 不平滑）。

### Path2D

### ImageData
