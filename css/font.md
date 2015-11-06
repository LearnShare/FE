字体(font)
====

font-family
----

设置字体。

属性值：

1. font_list 字体名称或字体系列名称

可设置多个值（使用 `,` 分隔），如果无法识别第一个，会依次向后选择一个支持的字体。如果全部无法识别，则使用默认字体。

font-size
----

设置字体大小。

属性值：

1. xx-small|x-small|small|medium|large|x-large|xx-large 不同的相对尺寸（默认为 medium）
2. smaller 比父元素更小
3. larger 比父元素更大
4. 尺寸值
5. 百分值 （与父元素的字体大小相乘，作为字体大小）

font-size-adjust
----

font-stretch
----

font-style
----

设置字体样式。

属性值：

1. normal 标准样式（默认）
2. italic 斜体
3. oblique 倾斜

font-variant
----

设置是否使用小型大写字母显示文本。

属性值：

1. none 标准文本（默认）
2. small-caps 使用小型大写字母

font-weight
----

设置文本粗细。

属性值：

1. normal 默认
2. bold 粗体
3. bolder 更粗
4. lighter 更细
5. 100|200|...|900 （400=normal，700=bold）

font
----

在同一个声明中设置字体属性。

可包括的属性：

+ font-style
+ font-variant
+ font-weight
+ font-size/line-height
+ font-family
+ line-height

建议使用此顺序指定字体属性。其中的属性均为可选值，但建议至少包括 `font-size` 和 `font-family` 属性。
