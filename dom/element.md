Element 对象
====

`Element` 对象代表了元素节点，继承自 `Node` 对象。

属性
----

参考：[MDN: Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

### classList

返回当前元素的 class 属性关联的 [DOMTokenList](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList) 对象，该对象代表了当前元素的 class 列表。

可以对 DOMTokenList 执行下列操作：

+ list.item(i) 返回指定位置的项目
+ list.contains(item) 判断是否包含指定项目
+ list.add(item) 添加新项目
+ list.remove(item) 删除已有项目
+ list.toggle(itema, itemb) 切花两个项目

### className

设置或返回当前元素的 class 属性值。

### clientHeight

获取元素内容区域（可视部分）的高度（content-height + padding-top + padding-bottom，但不包含滚动条的高度）。 

![element-rect](https://github.com/LearnShare/blog/blob/master/posts/images/position-and-size-element.png?raw=true)

参考：[HTML & JavaScript 中的位置和尺寸](https://github.com/LearnShare/blog/blob/master/posts/position-and-size.md)

### clientLeft

获取元素内容区域距元素左边缘的宽度（border-left）。如果滚动条位于左侧，则包含滚动条的宽度。

### clientTop

获取元素内容区域距元素上边缘的宽度（border-top）。

### clientWidth

获取元素内容区域（可视部分）的宽度（content-width + padding-left + padding-right，但不包含滚动条的宽度）。 

### innerHTML

设置或返回当前元素的 HTML 内容。

### name

设置或返回当前元素的 name 属性值。

### outerHTML

设置或返回包含当前元素本身的 HTML 内容。

### scrollHeight

当前元素可滚动区域（内容部分）的宽度（content-height + padding-top + padding-bottom）。

### scrollLeft

当前元素向右滚动的距离。

### scrollLeftMax

当前元素可向右滚动的最大距离。

### scrollTop

当前元素向下滚动的距离。

### scrollTopMax

当前元素可向下滚动的最大距离。

### scrollWidth

当前元素可滚动区域（内容部分）的高度（content-width + padding-left + padding-right）。

### tagName

返回当前元素的标签名（与元素节点的 nodeName 类似）。

方法
----

参考：[selector-apis](./selector-apis.md)

### closest()

返回指定 selector 所代表的元素，应当是最近的祖先元素或当前元素本身。

语法：
>var elt = element.closest(selectors);

### getAttribute()

返回当前元素指定的属性值，可以为 null 或 ""。

语法：
>var attribute = element.getAttribute(attributeName);

### getAttributeNode()

返回当前元素指定的属性节点。

语法：
>var attrNode = element.getAttributeNode(attrName);

### getBoundingClientRect()

返回当前元素相对于浏览器内容区域（viewport）的 [DOMClientRect](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMClientRect) 对象，它代表了当前元素的上下左右边界组成的矩形区域。

DOMClientRect 包含了以下属性：

+ left 矩形左边缘距浏览器内容区域左边缘的距离
+ right 右...右
+ top 上...上
+ bottom 下...下
+ height 矩形高度
+ width 矩形宽度

该方法只能在当前元素位于浏览器内容区域内，而且可见（display != 'none'）时才有效。

### getClientRects()

获取当前元素及子元素的所有 DOMClientRect 列表。

语法：
>var rectCollection = object.getClientRects();

### hasAttribute()

检测元素是否包含指定的属性。

语法：
>elmt.hasAttribute("attr");

参数：
>attr 属性名

返回值：
>1.true 包含指定属性  
>2.false 不包含指定属性

### hasAttributes()

检测元素是否包含属性。

语法：
>elmt.hasAttributes();

返回值：
>1.true 包含至少一个属性  
>2.false 不包含任何属性

### insertAdjacentHTML()

将制定内容解析为 HTML/XML，并插入当前元素的指定位置。

语法：
>element.insertAdjacentHTML(position, text);

position 可以取值：

+ 'beforebegin' 插入到当前元素之前
+ 'afterbegin' 插入到当前元素中，第一个子元素之前
+ 'beforeend' 插入到当前元素中，最后一个子元素之后
+ 'afterend' 插入到当前元素之后

### matches()

检查当前元素能否被指定的 selector 匹配到。

语法：
>result = element.matches(selectorString);

### removeAttribute()

从当前元素中删除指定的属性。

语法：
>element.removeAttribute(attrName);

### removeAttributeNode()

从当前元素中删除指定的属性节点。

语法：
>removedAttr = element.removeAttributeNode(attributeNode);

### requestFullscreen()

为当前元素请求 [全屏模式](https://developer.mozilla.org/zh-CN/docs/DOM/Using_fullscreen_mode)。

语法：
>element.mozRequestFullScreen();

目前仍需要添加前缀才能使用。

### requestPointerLock()

为当前元素请求 [鼠标锁定](https://developer.mozilla.org/zh-CN/docs/API/Pointer_Lock_API)。

语法：
>instanceOfElement.requestPointerLock();

### scrollIntoView()

将当前元素滚动到可见区域中。

语法：
>element.scrollIntoView();

参考：[MDN: Element.scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)

### setAttribute()

修改当前元素已有属性的值，或为其添加新的属性。

语法：
>element.setAttribute(name, value);

### setAttributeNode()

为当前元素添加或替换指定的属性节点。

语法：
>var replacedAttr = element.setAttributeNode(attribute);

### setCapture()

为当前元素设置 [鼠标捕获](https://developer.mozilla.org/en-US/docs/Web/API/Element/setCapture)。

语法：
>element.setCapture(retargetToElement);

如果元素设置了捕获，则当鼠标按下（mousedown）后，所有鼠标事件都重定向到目标元素。当鼠标抬起（mouseup）或调用了 document.releaseCapture() 后，重定向结束。
