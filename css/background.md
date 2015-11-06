背景(background)
====

background-attachment
----

设置背景图像是否随页面滚动。

属性值：

1. scroll 随页面滚动（默认）
2. fixed 不随页面滚动

background-color
----

设置背景色。

属性值：

1. transparent 透明（默认）
2. color

background-image
----

设置背景图像。

属性值：

1. none 无背景图像
2. url("url") 设置背景图像的路径

background-position
----

设置背景图像的起始位置。

属性值：

1.top|center|bottom left|center|right 的组合。如果仅设置一个值，第二个为 center

2.x% y% 水平位置和垂直位置（根据元素宽度和高度进行计算）。如果仅设置一个值，第二个为 50%

3.x y 尺寸值。如果仅设置一个值，第二个为 50%

默认位置为 (0%,0%)。

background-repeat
----

设置背景图像的平铺方式。

属性值：

1. repeat 在水平方向和垂直方向平铺
2. repeat-x 在水平方向平铺
3. repeat-y 在垂直方向平铺
4. no-repeat 不平铺

background-clip
----

设置背景的绘制区域。

属性值：

1. border-box 包括边框的区域（默认）
2. padding-box 包括内边距的区域
3. context-box 包括内容的区域

background-origin
----

设置 background-position 的定位依据。

属性值：

1. border-box 包括边框的区域（默认）
2. padding-box 包括内边距的区域
3. context-box 包括内容的区域

background-size
----

设置背景图像的尺寸（缩放）。

属性值：

1. x y 宽度和高度。如果仅设置一个值，另一个为 auto
2. x% y% 百分值。如果仅设置一个值，另一个为 auto
3. cover 缩放图像，填充整个背景区域（1:1 缩放）
4. contain 缩放图像，填充整个背景区域（非 1:1 缩放）

background
----

在同一个声明中设置背景属性。

可包括的属性：

+ background-color
+ background-position
+ background-size
+ background-repeat
+ background-origin
+ background-clip
+ background-attachment
+ background-image

多重背景
----

### 1.分组声明

在各个 background-* 属性中声明多组属性，每组对应一个背景的声明：

```
background-image: url("image1"),
                  url("image2");
background-position: top,
                     bottom;
...
```

### 2.合并声明

在同一个 background 属性中声明多组属性：

```
background: url("image1") top,
            url("image2") bottom;
```
