canvas context2D 对象
====

属性
----

###1.canvas

指定了 context2D 对象所属的画布。

属性值：

1. canvasID 画布对象的 ID

###2.fillStyle

指定了用来填充路径的颜色、模式或渐变。

属性值：

1. color CSS 颜色字符串
2. CanvasPattern 由 context.createPattern() 方法创建的对象
3. CanvasGradient 由 context.createLinerGradient() 或 context.createRadialGradient() 方法创建的对象

###3.font

指定了文本的字体、风格和大小。

属性值：

1. CSS-font CSS 字体属性值

###4.globalAlpha

指定了绘制的不透明度。

属性值：

1. alpha 透明度（0.0-1.0，默认为 1.0）

###5.globalCompositeOperation

指定了颜色合成方式。

属性值：

1. ？？？？

###6.lineCap

指定了线段末端如何绘制。

属性值：

1. butt [默认]
2. round 
3. square

###7.lineJoin

指定了线条末端如何连接。

属性值：

1. round 
2. bevel
3. miter [默认]

###8.lineWidth

指定了绘制线条的宽度。

属性值：

1. num >0.0（默认为 1.0）

线条在路径中居中，两侧各占一半的宽度。

###9.miterLimit

指定了斜面长度与线条长度的比例（当 `lineJoin="miter"` 时有效。默认为 10）。

###10.shadowBlur

指定了阴影的羽化程度（默认为 0）。

###11.shadowColor

指定了阴影的颜色。

###12.shadowOffsetX

指定了阴影的x偏移量。

###13.shadowOffsetY

指定了阴影的y偏移量。

###14.strokeStyle

指定了用于绘制路径的颜色、模式或渐变。

###15.textAlign

指定了文本对齐方式。

属性值：

1. start
2. end
3. left
4. right
5. center

###16.textBaseLine

指定了文本基线的位置。

属性值：

1. top
2. hanging
3. middle
4. alphabetic
5. ideographic
6. bottom

方法
----

###路径

beginPath()

建立新的路径。

closePath()

如果当前路径未闭合，则自动将当前点和路径起始点连接，形成闭合路径。`fill()` 和 `clip()` 方法也会自动完成该任务。

moveTo(x,y)

设置当前点/位置。

参数：
>1.x 横坐标  
>2.y 纵坐标

###绘制和填充

stroke()

根据 `strokeStyle` `lineCap` `lineJoin` `lineWidth` 等属性的值绘制路径的边框。

fill()

根据 `fillStyle` 属性的值填充当前路径。

###直线

lineTo(x,y)

为当前路径添加一条线段，线段的起点为当前点，终点为 `(x,y)`。（操作完成后，当前点变为 `(x,y)`）

###曲线

bezierCurveTo(cx1,cy1,cx2,cy2,x,y)

以当前点为起点，绘制三次贝塞尔曲线。（操作完成后，当前点变为 `(x,y)`）

参数：
>1.cx1 控制点1的横坐标  
>2.cy1 控制点1的纵坐标  
>3.cx2 控制点2的横坐标  
>4.cy2 控制点2的纵坐标  
>5.x 终点的横坐标  
>6.y 终点的纵坐标

quadraticCurveTo(cx,cy,x,y)

以当前点为起点，绘制贝塞尔曲线。（操作完成后，当前点变为 `(x,y)`）

属性：
>1.cx 控制点的横坐标  
>2.cy 控制点的纵坐标  
>3.x 终点的横坐标  
>4.y 终点的纵坐标

###圆和弧

arc(x,y,r,sa,ea,cl)

以指定的圆心和半径，在起始角度 `sa` 和结束角度 `ea` 间绘制圆弧。（操作完成后，当前点变为圆弧的终点）

参数：
>1.x 圆心的横坐标  
>2.y 圆心的纵坐标  
>3.r 半径  
>3.sa 起始角度（弧度）  
>4.ea 结束角度（弧度）  
>5.cl 逆时针(true)或顺时针(false，默认值)

arcTo(x1,y1,x2,y2,r)

以指定的半径，在当前点和 `(x2,y2)` 两个切点间绘制圆弧（`(x1,y1)` 为两切线的交点），同时，会将当前点和 `(x1,y1)` 连接起来。（操作完成后，当前点变为 `(x2,y2)`）

属性：
>1.x1 切线交点的横坐标  
>2.y1 切线交点的纵坐标  
>3.x2 切点2的横坐标  
>4.y2 切点2的纵坐标  
>5.r 半径

###矩形

rect(x,y,w,h)

从 `(x,y)` 开始，以指定的宽度和高度绘制矩形路径。（操作完成后，当前点变为 `(0,0)`）

属性：
>1.x 矩形左上角的横坐标  
>2.y 矩形左上角的纵坐标  
>3.w 矩形宽度  
>4.h 矩形高度

fillRect(x,y,w,h)

从 `(x,y)` 开始，以指定的宽度和高度绘制填充矩形。

clearRect(x,y,w,h)

从 `(x,y)` 开始，以指定的宽度和高度擦除矩形区域（只对填充区域有效，无法擦除边框）。

strokeRect(x,y,w,h)

从 `(x,y)` 开始，以指定的宽度和高度绘制矩形边框。

###阴影

通过 `shadowColor` `shadowOffsetX` `shadowOffsetY` 和 `shadowBlur` 属性指定所绘制图形的阴影。

###组合

通过 `globalCompositeOperation` 属性指定图形重合的方式。

###剪切路径

clip()

###图像

drawImage(img,x,y)

将图像绘制到以画布 `(x,y)` 为起点，与图像宽度和高度相等的矩形中（按照图像原始大小绘制）。

drawImage(img,x,y,w,h)

将图像绘制到以画布 `(x,y)` 为起点，宽度 `w` 和高度 `h` 的矩形中（图像会被缩放）。


drawImage(img,sx,sy,sw,sh,x,y,w,h)

将图像中以 `(sx,sy)` 为起点，宽度 `sw` 高度 `sh` 的矩形区域（裁剪）绘制到以画布 `(x,y)` 为起点，宽度 w 和高度 h 的矩形中（图像会被缩放）。

__注：__ `img` 可以是页面中已存在的 `<img>` 对象，也可以是通过 JS 创建的。

###文本

fillText(text,x,y,mw)

以 `(x,y)` 为起点，将文本 `text` 绘制到画布中（填充）。

参数：
>1.text 要绘制的文本  
>2.x 绘制起点的横坐标  
>3.y 绘制起点的纵坐标  
>4.mw 文本字体最大值（可选）

strokeText(text,x,y,mw)

以 `(x,y)` 为起点，将文本 `text` 绘制到画布中（描边）。

参数：
>1.text 要绘制的文本  
>2.x 绘制起点的横坐标  
>3.y 绘制起点的纵坐标  
>4.mw 文本字体最大值（可选）

###模式和渐变

`strokeStyle` 和 `fillStyle` 属性均可接受颜色、模式或渐变作为参数。

createPattern(img,repeat)

返回通过指定的图像和重复方式创建的模式（贴图画笔）对象。

参数：
>1.img 图像资源  
>2.repeat 重复方式
>>repeat 在x和y方向上重复  
>>repeat-x 在x方向上重复  
>>repeat-y 在y方向上重复  
>>no-repeat 不重复

createLinearGradient(sx,sy,ex,ey)

返回通过指定的起点和终点创建的线性渐变对象。

参数：
>1.sx 起点的横坐标  
>2.sy 起点的纵坐标  
>3.ex 终点的横坐标  
>4.ey 终点的纵坐标

createLinearGradient(sx,sy,sr,ex,ey,er)

返回通过指定的起点、起始半径、终点和终止半径创建的径向（放射）渐变对象。

参数：
>1.sx 起点的横坐标  
>2.sy 起点的纵坐标  
>3.sr 起始半径  
>4.ex 终点的横坐标  
>5.ey 终点的纵坐标  
>6.er 终止半径

Gradient.addColorStop(offset,color)

给渐变对象添加颜色控制点。

参数：
>1.offset 控制点位置（0.0-1.0）  
>2.color CSS 颜色字符串

###坐标转换

rotate(angle)

将画布坐标旋转 `angle` 指定的角度（弧度）。

参数：
>1.angle 旋转角度（弧度，正代表顺时针，负代表逆时针）

scale(sx,sy)

按指定的值分别在 x 和 y 方向上缩放画布坐标。

参数：
>1.sx 横坐标缩放倍数  
>2.sy 纵坐标缩放倍数

translate(dx,dy)

按指定的值分别在 x 和 y 方向上移动画布坐标。

参数：
>1.dx 横坐标移动距离  
>2.dy 纵坐标移动距离

###状态保存与恢复

save()

将画布的当前状态保存到栈中。（包括 context2D 的左右属性，变换矩阵以及剪切路径）

restore()

恢复栈中画布最近的状态。

###数据导出
