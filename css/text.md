文本(text)
====

color
----

设置文本的颜色。

属性值：

1. [color](./color.md)

direction
----

设置文本的方向（书写方向）。

属性值：

1. ltr 从左到右（默认）
2. rtl 从右到左

unicode-bidi
----

设置文本的方向。

属性值：

1. normal
2. embed
3. bidi-override

letter-spacing
----

设置字符间距。

属性值：

1. normal 默认
2. CSS 尺寸值（可以为负值）

line-height
----

设置行高。

属性值：

1. normal 默认
2. CSS 尺寸值（可以为负值）
3. 整数（与字体大小相乘，作为行间距）
4. 百分值（与字体大小相乘，作为行间距）

text-transform
----

设置字母大小写的方式。

属性值：

1. none 默认效果（默认）
2. capitalize 单词首字母大写
3. uppercase 所有字母大写
4. lowercase 所有字母小写

word-spacing
----

设置词间距。

属性值：

1. normal 默认
2. CSS 尺寸值（可以为负值）

text-align
----

设置文本的对齐方式。

属性值：

1. left 左对齐（默认）
2. right 右对齐
3. center 居中对齐
4. justify 两端对齐

`text-align: justify;` 时，可使用 `text-justify` 属性设置两端对齐的方式。

text-justify
----

设置两端对齐的方式。

属性值：

1. auto
2. none
3. inter-word
4. inter-ideograph
5. inter-cluster
6. distribute
7. kashida

text-decoration
----

设置文本的装饰效果。

属性值：

1. none 无效果（默认）
2. underline 下划线
3. overline 上划线
4. line-through 删除线

text-indent
----

设置文本块中首行的缩进值。

属性值：

1. CSS 尺寸值（默认为 0）
2. 百分值（与父元素的宽度相乘，作为首行的缩进值）

text-shadow
----

设置文本阴影。

属性值：

>1. h-shadow 阴影的水平偏移量（可以为负值）
>2. v-shadow 阴影的垂直偏移量（可以为负值）
>3. blur 模糊值（可选，默认为 0）
>4. color 阴影的颜色（可选，默认为文本的颜色）

hanging-punctuation
----

punctuation-trim
----

text-align-list
----

text-emphasis
----

text-outline
----

text-overflow
----

规定处理文字溢出的方式：

+ clip 剪切切掉多余的部分
+ ellipsis 使用 `...` 作为结尾
+ 'str' 使用自定义字符串作为结尾

可以使用一个或两个上面的值，来分别指定左侧和右侧的溢出处理方式。参考：[MDN: text-overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow)

white-space
----

规定如何处理元素中的空白字符。

属性值：

1. normal 忽略换行符，合并其他字符（多个空白字符看作一个空格）（默认）
2. pre 保留
3. nowrap 忽略换行符，保留其他字符
4. pre-wrap 保留换行符，忽略其他字符
5. pre-line 保留换行符，合并其他字符

text-wrap
----

设置文本换行规则。

属性值：

1. normal 默认
2. none 不换行
3. unrestricted 任意位置可换行
4. suppress 压缩元素中换行？？

word-break
----

设置自动换行的规则。

属性值：

1. normal 默认
2. break-all 单词内可换行
3. keep-all 只在空格或连字符出换行

word-wrap
----

设置长文本或 URL 的换行方式。

属性值：

1. normal 默认
2. break-word 允许文本或 URL 内换行
