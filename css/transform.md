变换(transform)
====

变换允许对元素进行平移、旋转、缩放、拉伸和变形等操作。

transform
----

设置元素的变换。

属性值：

1. none 无变换（默认）
2. matrix(a,b,c,d,e,f) 使用 6 个值的矩阵，对元素进行 2D 变换
3. matrix3d(a0,b0,c0,d0,a1,b1,c1,d1,a2,b2,c2,d2,a3,b3,c3,d3) 使用 4*4 的矩阵，对元素进行 3D 变换
4. translate(x,y) 将元素从当前位置（0,0）移动到指定位置（x,y）
5. translateX(x) 将元素水平移动 x
6. translateY(y) 将元素垂直移动 y
7. translateZ(z) 将元素沿 Z 轴移动 z
8. scale(x,y) 将元素的宽度变为原来的 x 倍，高度变为原来的 y 倍
9. scaleX(x) 将元素的宽度变为原来的 x 倍
10. scaleY(y) 将元素的高度变为原来的 y 倍
11. scaleZ(z) 将元素的 Z 轴高度变为原来的 z 倍
12. rotate(angle) 将元素顺时针旋转 angle 指定的角度（angle:30deg=30°）
13. rotate3d(x,y,z,angle) 将元素进行 3D 旋转 angle 所指定的角度
14. rotateX(angle) 将元素沿 X 轴旋转 angle 所指定的角度
15. rotateY(angle) 将元素沿 Y 轴旋转 angle 所指定的角度
16. rotateZ(angle) 将元素沿 Z 轴旋转 angle 所指定的角度
17. akew(x-angle,y-angle) 将元素沿 X 轴倾斜 x-angle 所指定的角度，沿 Y 轴倾斜 y-angle 所指定的角度
18. skewX(angle) 将元素沿 X 轴倾斜 angle 所指定的角度
19. skewY(angle) 将元素沿 Y 轴倾斜 angle 所指定的角度
20. perspective(n) 3D 透视

transform-origin
----

设置转换的基点（默认为 (50%,50%,0)，也就是元素的中心点）。

属性值：

1.x-axis 基点的 x 坐标
>可能的值：  
>left 左边缘（0%）  
>center 中心（50%）  
>right 右边缘（100%）  
>尺寸值  
>百分值

2.y-axis 基点的 y 坐标
>可能的值：  
>top 上边缘（0%）  
>center 中心（50%）  
>bottom 下边缘（100%）  
>尺寸值  
>百分值

3.z-axis 基点的 z 坐标
>可能的值：  
>尺寸值

transform-style
----

？？

perspective
----

设置 3D 元素的查看位置距元素透视基点的距离（透视距离）。

属性值：

1. none 无透视（默认，等于 0）
2. 尺寸值 透视距离（单位：px）

perspective-origin
----

设置 3D 元素透视基点的位置。

属性值：

1. x-axis
2. y-axis

backface-visibility
----

设置元素的背面是否可见。

属性值：

1. visible 可见（默认）
2. hidden 不可见
