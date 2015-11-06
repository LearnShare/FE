CSS 选择器
====

__选择器__ 通过一系列的规则，指定了应用当前样式规则的目标元素。

按照选择器的匹配方式，可以进行如下分类：

+ 基本选择器
+ 属性选择器
+ 伪元素选择器
+ 伪类选择器
+ 关系选择器
+ 选择器组合

基本选择器
----

### 1.id

ID 选择器在 `#` 后跟随 `id` 名，匹配 `id="id"` 的元素：

```
// HTML
<p></p>
<div id="target"></div>
// CSS
#target {
  // declarations
}
```

只有 `<div id="target">` 被选中。

### 2.class

class 选择器在 `.` 后跟随 `class` 名，匹配所有 `class="class"` 的元素：

```
// HTML
<p class="target"></p>
<div class="target"></div>
// CSS
.target {
  // declarations
}
```

`<p class="target">` 和 `<div class="target">` 两个元素都会被选中。

### 3.element

元素选择器直接使用元素标签名 `tag` 作为选择符，匹配所有标签名为 `<tag>` 的元素：

```
// HTML
<p></p>
<div></div>
// CSS
div {
  // declarations
}
```

只有 `<div>` 元素被选中。

### 4.*

`*` 用于匹配所有元素：

```
// HTML
<h3></h3>
<p></p>
<div></div>
// CSS
* {
  // declarations
}
```

`<h3>` `<p>` `<div>` 三个元素都会被选中。

通常并不建议使用该选择器，因为匹配效率低，而且并不建议为所有元素设置样式。

属性选择器
----

### 1.[attr]

[attr] 选择器匹配所有包含 `attr` 属性的元素：

```
// HTML
<h3 display="none"></h3>
<p></p>
<div></div>
// CSS
[display] {
  // declarations
}
```

`<h3>` 元素会被选中。

### 2.[attr="value"]

[attr="value"] 选择器会匹配所有 `attr` 属性值为 `value` 的元素：

```
// HTML
<h3 display="none"></h3>
<p></p>
<div display="inline"></div>
// CSS
[display="inline"] {
  // declarations
}
```

`<div display="inline">` 会被选中。

### 3.[attr~="value"]

[attr~="value"] 选择器会匹配所有 `attr` 属性值包含单词 `value` 的元素：

```
// HTML
<h3 title="head element"></h3>
<p></p>
<div title="div element"></div>
// CSS
[title~="head"] {
  // declarations
}
```

`<h3 title="head element">` 会被选中。

### 4.[attr|="value"]

[attr|="value"] 选择器会匹配所有 `attr` 属性值为 `value` 或以 `value-` 开头的元素：

```
// HTML
<h3 title="head"></h3>
<p title="head p"></p>
<div title="head-div"></div>
// CSS
[title|="head"]{
  // declarations
}
```

`<h3 title="head">` `<div title="head-div">` 两个元素都会被选中。

### 5.[attr^="value"]

[attr\^="value"] 选择器会匹配所有 `attr` 属性值以字符串 `value` 开头的元素：

```
// HTML
<h3 title="head element"></h3>
<p></p>
<div title="here"></div>
// CSS
[title^="head"] {
  // declarations
}
```

`<h3 title="head element">` 元素会被选中。

### 6.[attr$="value"]

[attr$="value"] 选择器会匹配所有 `attr` 属性值以字符串 `value` 结尾的元素：

```
// HTML
<h3 title="element head"></h3>
<p></p>
<div title="here"></div>
// CSS
[title$="head"]{
  // declarations
}
```

`<h3 title="element head">` 元素会被选中。

### 7.[attr*="value"]

[attr*="value"] 选择器会匹配所有 `attr` 属性值包含字符串 `value` 的元素：

```
// HTML
<h3 title="element head3"></h3>
<p></p>
<div title="here"></div>
// CSS
[title*="head"] {
  // declarations
}
```

`<h3 title="element head3">` 元素会被选中。

伪元素选择器
----

`e` 代表任意选择器或选择器组合所指定的 _一个元素_ 。如 `#target` 等。

`es` 代表任意选择器或选择器组合所指定的 _元素集合_ 。如 `.target` `div p` 等。

### 1.:first-letter 1

`e|es:first-letter` 用于为 `e|es` 的 _首个字母_ 添加样式：

### 2.:first-line 1

`e|es:first-line` 用于为 `e|es` 的 _首行_ 添加样式：

### 3.:before 2

`e|es:before` 用于在 `e|es` 元素的 _内容之前_ 插入新的内容，并为之添加样式：

### 4.:after 2

`e|es:after` 用于在 `e|es` 元素的 _内容之后_ 插入新的内容，并为之添加样式：

###5.::selection 3

`e|es::selection` 用于为 `e|es` 元素中 _被选中_ 的内容添加样式：

伪类选择器
----

`as` 代表 `<a>` 元素的集合。

`n` 代表 e 在外层元素中的位置（e 是外层元素的第 n 个子元素，最小值为 1）。可能的取值有：

+ n 正整数
+ odd 代表所有奇数位置
+ even 代表所有偶数位置
+ an+b a、b 为正整数，n 的最小值为 0（2n+1=odd，2n=even）

### 1.:link 1

`as:link` 用于设置 _未被访问_ 的 `<a>` 元素的样式：

### 2.:visited 1

`as:visited` 用于设置 _已访问过_ 的 `<a>` 元素的样式：

### 3.:active 1

`as:active` 用于设置 _活动_ 的 `<a>` 元素的样式：

_活动_ 指的是在 `<a>` 元素上 _按下鼠标_ 或 _触摸屏点按_ 时的状态。

`:active` 伪类适用于大多数 HTML 元素。

### 4.:hover 1

`as|e|es:hover` 用于设置 _鼠标位于其上_ 的 `<a>`|e|es 元素的样式：

`:hover` 伪类适用于大多数 HTML 元素。

### 5.:target 3

`e:target` 用于设置 _活动_ 的锚元素的样式：

### 6.:lang(lan) 2

`e|es:lang(lan)` 用于设置 `lang` 属性以 `lan` 开头的 `e|es` 元素的样式：

### 7.:focus 2

`e:focus` 用于设置 _获取焦点_ 的表单元素、超链接或按钮的样式：

### 8.:enabled 3

`e|es:enabled` 用于设置 `disabled` 属性为 `false` 的表单元素或按钮的样式：

### 9.:disabled 3

`e|es:disabled` 用于设置 `disabled="disabled"` 的表单元素或按钮的样式：

### 10.:checked 3

`e|es:checked` 用于设置 `checked="checked"` 的表单元素的样式：

`:checked` 适用于 `type="checkbox|radio"` 的 `<input>` 元素。

### 11.:root 3

`:root` 用于设置根元素的样式：

在 HTML 中，根元素始终为 `<html>`。

###12.:first-child 2

`e:first-child` 用于设置属于外层元素的 _首个子元素_ 的 `e` 元素的样式：

### 13.:last-child 3

`e:last-child` 用于设置属于外层元素的 _最后一个子元素_ 的 `e` 元素的样式：

### 14.:nth-child(n) 3

`e:nth-child(n)` 用于设置属于外层元素的 _第 n 个子元素_ 的 `e` 元素的样式：

### 15.:nth-last-child(n) 3

`e:nth-last-child(n)` 用于设置属于外层元素的 _倒数第 n 个子元素_ 的 `e` 元素的样式：

### 16.:only-child 3

`e:nth-child(n)` 用于设置属于外层元素的 _唯一子元素_ 的 `e` 元素的样式：

###17.:first-of-type 3

`e:first-of-type` 用于设置属于外层元素中 _第 1 个_ `e` 元素的样式：

### 18.:last-of-type 3

`e:last-of-type` 用于设置属于外层元素中 _最后一个_ `e` 元素的样式：

### 19.:nth-of-type(n) 3

`e:nth-of-type(n)` 用于设置属于外层元素中 _第 n 个_ `e` 元素的样式：

### 20.:nth-last-of-type(n) 3

`e:nth-last-of-type(n)` 用于设置属于外层元素中 _倒数第 n 个_ `e` 元素的样式：

### 21.:only-of-type 3

`e:only-of-type` 用于设置属于外层元素中 _唯一一个_ `e` 元素的样式：

###22.:empty 3

`e|es:empty` 用于设置 _空的_ （无子元素和文本节点） `e` 元素的样式：

### 23.:not(selector) 3

`:not(e)` 用于设置所有 _非_ `e` 元素的样式：

关系选择器
----

### 1.a b

`a b` 用于设置嵌套在 `a` 中所有的 `b` 元素的样式（祖先元素与后代元素，`a` 可以不是 `b` 的父元素）：

### 2.a > b

`a > b` 用于设置以 `a` 元素为父元素的 `b` 元素的样式（父元素与子元素）：

### 3.a + b

`a + b` 用于设置紧跟在 `a` 中之后的 `b` 元素的样式（相邻的元素，具有相同的父元素）：

### 4.a ~ b

`a ~ b` 用于设置在 `a` 中之后的所有 `b` 元素的样式（兄弟元素，具有相同的父元素，不要求相邻）：

选择器组合
----

### 1.a, b

`a, b` 用于选择所有的 `a` 元素和 `b` 元素：

选择器优先级
----

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)
[CSS选择器、优先级与匹配原理](http://www.cnblogs.com/aaronjs/p/3156809.html)

由高到低：

+ 通用选择器(*)
+ 元素选择器(tag)
+ 类(.class)选择器
+ 属性[attr]选择器
+ 伪类
+ ID(#id) 选择器

TODO: 测试优先级

!important
----

`!important` 用于强制声明生效（提高优先级），通常可以用来覆盖其他位置的样式声明：

```css
p {
  color: red !important;
  color: blue;
}
```

`p` 的颜色最终会是 `red`。

`!important` 声明是一种破坏式的存在，建议优先使用样式的继承和覆盖机制。
