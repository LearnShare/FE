CSS 属性
====

文本(text)
----

参考：[text](./text.md)

字体(font)
----

参考：[font](./font.md)

自定义字体(@font-face)
----

参考：[font-face](./font-face.md)

列表(list)
----

参考：[list](./list.md)

表格(table)
----

参考：[table](./table.md)

盒模型(box)
----

参考：[box-model](./box-model.md)
[flex-box](./flex-box.md)

### display

设置元素的盒类型。

属性值：

1. none 不显示（不可见，也不占据空间）
2. block 块级元素
3. inline 内联元素（默认）
4. inline-block 内联块元素
5. list-item 列表项
6. run-in 根据上下文判断为 block 或 inline
7. table 表格（类似 `<table>`）
8. inline-table 内联表格
9. table-row-group 表格的行分组（类似 `<tbody>`）
10. table-header-group 表格的行分组（类似 `<thead>`）
11. table-footer-group 表格的行分组（类似 `<tfoot>`）
12. table-row 表格的行（类似 `<tr>`）
13. table-column-group 表格列分组（类似 `<colgroup>`）
14. table-column 表格列（类似 `<col>`）
15. table-cell 表格单元格（类似 `<td>`）
16. table-caption 表格标题（类似 `<caption>`）
17. flex
18. inline-flex
19. contents
20. inline-table
21. grid
22. inline-grid

`display: none;` 和 `visibility: hidden;`：

+ 两种方式下的元素都不可见；
+ `display: none;` 的元素不占据任何空间；
+ `visibility: hidden;` 仍然会占据原来的空间。

### 尺寸(dimension)

参考：[dimension](./dimension.md)

### 外边距(margin)

参考：[margin](./margin.md)

### 内边距(padding)

参考：[padding](./padding.md)

### 边框(border)

参考：[border](./border.md)

### 图像边框(border-image)

参考：[border-image](./border-image.md)

### 轮廓(outline)

参考：[outline](./outline.md)

### 背景(background)

参考：[background](./background.md)

### 背景渐变(background-gradient)

参考：[gradient](./gradient.md)

### 圆角(border-radius)

参考：[border-radius](./border-radius.md)

### 盒阴影(box-shadow)

参考：[box-shadow](./box-shadow.md)

### 溢出（overflow）

参考：[overflow](./overflow.md)

弹性盒模型（flexible-box）
----

参考：[flex-box](./flex-box.md)

内容生成(content)
----

参考：[content](./content.md)

多列(multi-column)
----

参考：[column](./column.md)

定位(positioning)
----

参考：[position](./position.md)

浮动(float)
----

参考：[float](./float.md)

变换(transform)
----

参考：[transform](./transform.md)

过渡(transition)
----

参考：[transition](./transition.md)

动画(animation)
----

参考：[animation](./animation.md)

滤镜（filter）
----

参考：[filter](./filter.md)

其他(other)
----

###clip

设置元素的可见形状及尺寸（裁剪）。

属性值：

1. auto 不裁剪（默认）
2. shap 设置形状及大小（仅支持：rect(top,right,bottom,left)）

###cursor

设置鼠标外形。

属性值：

1. auto 自动（默认）
2. default 默认光标（箭头）
3. crosshair 十字线
4. pointer 手形
5. move 四向箭头
6. n-resize 可向上移动（纵 双向箭头）
7. s-resize 可向下移动（纵 双向箭头）
8. w-resize 可向左移动（横 双向箭头）
9. e-resize 可向右移动（横 双向箭头）
10. nw-resize 可向左上移动（右下-左上 双向箭头）
11. ne-resize 可向右上移动（左下-右上 双向箭头）
12. sw-resize 可向左下移动（右上-左下 双向箭头）
13. se-resize 可向右下移动（左上-右下 双向箭头）
14. text 文本选择光标
15. wait 等待光标（表/沙漏）
16. help 帮助光标（问号/气球）

###visibility

设置元素是否可见。

1. visible 可见（默认）
2. hidden 不可见（仍占据原位置及空间）
3. collapse 在表格中，隐藏行/列；在其他元素中，类似于 hidden

###resize

设置元素是否可调整大小。

属性值：

1. none 不能调整大小（默认）
2. horizontal 可调整宽度
3. vertical 可调整高度
4. both 可调整宽度和高度

###appearance

设置元素的呈现方式。

###box-sizing

设置元素盒模型的计算方式。

属性值：

1. content-box 按照 CSS2.1 的盒模型计算（宽度和高度应用于内容区域，内边距和边框属于额外部分）
2. border-box 宽度和高度指定了边框区域的总大小（宽度包含左右内边距和左右边框，高度包含上下内边距和上下边框）

参考：[box-model](./box-model.md)
