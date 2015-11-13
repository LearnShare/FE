HTMLElement 接口
----

所有 HTML 元素都实现了此接口。

属性
----

### contentEditable

读取或设置内容是否可编辑（'true'/'false'）。

### isContentEditable

获取内容是否可编辑（true/false）。

### dataset

获取元素的 'data-' 属性对象。

语法：
>elmt.dataset.attrName

属性名要去掉 'data-'，并使用驼峰命名替代 '-' 连接的名称。

### dir

读取或设置元素的书写方向（'ltr'/'rtl'/'auto'）。

### lang

读取或设置元素的语言属性。

### offsetHeight

获取元素盒的高度（content-height + padding-top + padding-bottom + border-top + border-bottom，包含滚动条的高度）。

![element-rect](https://github.com/LearnShare/blog/blob/master/posts/images/position-and-size-element.png?raw=true)

参考：[HTML & JavaScript 中的位置和尺寸](https://github.com/LearnShare/blog/blob/master/posts/position-and-size.md)

### offsetLeft

获取距离首个定位元素内容左边缘的距离。

### offsetParent

获取当前元素外的首个定位元素（position != 'static' 的祖先元素，或者表格单元格，或者根元素），当前元素的位置相对于该元素计算。

### offsetTop

获取距离首个定位元素内容上边缘的距离。

### offsetWidth

获取元素盒的宽度（content-width + padding-left + padding-right + border-left + border-right，包含滚动条的宽度）。

### style

获取 [CSSStyleDeclaration](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration) 对象，该对象可以读取或设置 CSS 样式值。

参考：[readme: 访问节点样式](../readme.md)

### title

读取或设置元素的 title 属性。

方法
----

### blur()

取消元素获取焦点的状态。

语法：
>elt.blur();

### click()

为当前元素触发（模拟） click 事件。

语法：
>elt.click();

### focus()

让当前元素获取焦点。

语法：
>elt.focus();

事件
----

...
