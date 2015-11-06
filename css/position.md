定位(positioning)
====

position
----

设置元素的定位方式。

属性值：

1. static 正常定位（元素位于正常的文档流中，忽略 top bottom left right 及 z-index 属性）
2. absolute 绝对定位（相对于 posotion 不为 static 的祖先元素进行定位（如果找不到该元素，则相对于 body 元素进行定位），不占据文档流中的位置）
3. fixed 绝对定位（相对于浏览器窗口进行定位，不占据文档流中的位置）
4. relative 相对定位（相对于元素原来的位置进行定位，仍占据文档流中的位置）
5. sticky relative 与 fixed 的结合（元素位于可见位置时，表现为 relative。元素离开可见位置时，表现为 fixed）

top
----

设置相对定位或绝对定位元素的顶部偏移。

属性值：

1. auto 自动（默认）
2. 尺寸值
3. 百分值（根据定位参考元素的高度计算）

bottom
----

设置相对定位或绝对定位元素的底部偏移。

left
----

设置相对定位或绝对定位元素的左侧偏移。

right
-----

设置相对定位或绝对定位元素的右侧偏移。

z-index
----

设置元素的堆叠顺序（层）。

属性值：

1. auto 自动（默认，与父元素相同）
2. 整数

vertical-align
----

设置元素纵向的对齐方式。

属性值：

1. baseline 位于父元素的基线上（块级元素的顶部，行内元素的底部。默认）
2. sub 对齐文本底部
3. super 对齐文本顶部
4. top 顶端对齐
5. text-top 与文本顶端对齐
6. middle 居中
7. bottom 低端对齐
8. text-bottom 与文本低端对齐
9. 尺寸值
10. 百分值（根据 line-height 计算）
