Window
====

Window 对象代表了浏览器窗口（或多窗口浏览器的一个标签），继承了 [EventHandler](../dom/event/event-handler.md) 和 [WindowTimers](./window-timers.md) 接口。

在浏览器中，Window 对象是一个全局对象，所以访问 window 对象的属性，或者设置全局属性，都是基于 Window 对象的。

属性
----

### applicationCache

获取当前窗口的 ApplicationCache 对象。

### caches

获取当前窗口的 [CacheStorage](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage) 对象。

### refWin.closed

引用的窗口是否已关闭。

### crypto

获取当前窗口的 [Crypto](https://developer.mozilla.org/en-US/docs/Web/API/Crypto) 对象。

### devicePixelRatio

获取 [设备像素比](http://www.jianshu.com/p/af6dad66e49a)（物理像素 / 显示像素）。

参考：[设备像素比 devicePixelRatio 简单介绍](http://www.zhangxinxu.com/wordpress/2012/08/window-devicepixelratio/)

### document

获取当前窗口的 document （根元素）对象。

### frameElement

获取当前窗口所属的 `<iframe>` 或 `<object>` 对象，如果当前窗口未嵌入其他元素（顶级窗口），则返回 null。

### frames

获取当前窗口内的 frame 元素列表。

### fullScreen

窗口是否在全屏模式。

### history

获取 [history](./history.md) 对象。

### innerHeight

获取窗口内部用来展示网页的内容区域的高度。

![window](https://github.com/LearnShare/blog/blob/master/posts/images/position-and-size-screen.png?raw=true)

参考：[HTML & JavaScript 中的位置和尺寸](https://github.com/LearnShare/blog/blob/master/posts/position-and-size.md)

### innerWidth

获取窗口内部用来展示网页的内容区域的宽度。

### length

返回 frame 元素的数量。

### localStorage

返回 [LocalStorage](./storage/local-storage.md) 对象。

### location

返回 [location](./location.md) 对象。

### locationbar

返回当前窗口的地址栏对象，可以访问它的属性：

+ visiable 地址栏是否可见

### menubar

返回当前窗口的菜单栏对象，可以访问它的属性：

+ visiable 菜单栏是否可见

### messageManager

返回当前窗口的 [MessageManager](https://developer.mozilla.org/en-US/Firefox/Multiprocess_Firefox/Message_Manager) 对象。

### name

设置或返回窗口名称。

### navigator

返回当前窗口的 [navigator](./navigator.md) 对象。

### opener

返回打开当前窗口的窗口。

### outerHeight

返回窗口外边缘的高度。

### outerWidth

返回窗口外边缘的宽度。

### parent

返回当前窗口（或 frame）的父窗口。

### performance

返回当前窗口的 performance 对象，该对象用来进行调试。

### personalbar

返回当前窗口的自定义工具栏对象，可以访问它的属性：

+ visiable 自定义工具栏是否可见

### screen

返回当前窗口所在的 [screen](./screen.md) 对象。

### screenX

返回当前窗口左侧外边缘距屏幕左边缘的距离。

### screenY

返回当前窗口顶部外边缘距屏幕上边缘的距离。

### scrollbars

返回当前窗口的滚动条对象，可以访问它的属性：

+ visiable 滚动条是否可见

### scrollMaxX

返回当前窗口横向可滚动的最大距离。

### scrollMaxY

返回当前窗口纵向可滚动的最大距离。

### scrollX

返回当前窗口向右滚动的距离。

### scrollY

返回当前窗口向下滚动的距离。

### self

返回当前窗口自身。

### sessionStorage

返回 [SessionStorage](./storage/session-storage.md) 对象。

### status

设置或返回浏览器状态栏的文本。

### statusbar

返回当前窗口的状态栏对象，可以访问它的属性：

+ visiable 状态栏是否可见

### toolbar

返回当前窗口的工具栏对象，可以访问它的属性：

+ visiable 工具栏是否可见

### top

返回当前窗口所属的最顶层窗口。

### window

返回 Window 对象本身。

方法
----

### alert()

弹出消息对话框，显示指定内容（通常会有一个确定按钮）。

语法：
>window.alert(message);

alert() confirm() prompt() 三个方法弹出的窗口都是模态窗口，会阻挡用户对页面的操作（必须先关闭窗口才能操作）。这种方式的体验不佳，建议一般情况下不要使用此类功能（可以使用 CSS position 属性来模拟弹出窗口）。

### blur()

使当前窗口取消获取焦点的状态。

### cancelAnimationFrame()

取消通过 window.requestAnimationFrame() 添加的任务。

### clearImmediate()

取消通过 window.setImmediate() 添加的任务。

### close()

关闭当前窗口。

### confirm()

打开对话框，请求用户确认（通常提供确认和取消两个按钮）。

### dump()

向控制台输出信息。

参考：[console](./console.md)

### find()

从窗口中寻找指定的字符串。

### focus()

将当前窗口置于获取焦点的状态。

### getAttention()

使当前窗口获取用户的注意（根据不同平台和用户设定，有不同的效果）。

### getComputedStyle()

获取指定元素计算后的样式值。

语法：
>var style = window.getComputedStyle(element[, pseudoElt]);

### getDefaultComputedStyle()

获取指定元素计算后的样式值（只应用了浏览器样式和用户自定义样式，不包含网页添加的样式）。

语法：
>var style = window.getDefaultComputedStyle(element[, pseudoElt]);

### getSelection()

获取当前页面的 [Selection](https://developer.mozilla.org/en-US/docs/Web/API/Selection) 对象。

### matchMedia()

返回新的 [MediaQueryList](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaQueryList) 对象，代表媒体查询字符串解析之后的结果。

语法：
>mql = window.matchMedia(mediaQueryString);

### minimize()

最小化当前窗口。

### moveBy()

根据指定的 x, y 值移动窗口。

语法：
>window.moveBy(deltaX, deltaY);

参数：

+ deltaX 横向移动的像素数（正数为向右移动，负数为向左移动，0 则横向不移动）
+ deltaY 纵向移动的像素数（正数为向下移动，负数为向上移动，0 则纵向不移动）

### moveTo()

将窗口移动到指定位置。

语法：
>window.moveTo(x, y);

参数：

+ x 目标位置横坐标（以屏幕左上角为基准）
+ y 目标位置纵坐标

### open()

打开新窗口，或唤醒已存在的窗口。

语法：
>var windowObjectReference = window.open(strUrl, strWindowName, [strWindowFeatures]);

参考：[MDN: Window.open()](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)

### openDialog()

打开对话框窗口。

语法：
>newWindow = openDialog(url, name, features, arg1, arg2, ...);

参考：[MDN: Window.openDialog()](https://developer.mozilla.org/en-US/docs/Web/API/Window/openDialog)

### postMessage()

向其他窗口广播消息。

语法：
>otherWindow.postMessage(message, targetOrigin, [transfer]);

参考：[MDN: Window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)

### print()

打开打印对话框。

### prompt()

打开输入对话框，要求用户输入内容。

语法：
>result = window.prompt(message, default);

参数：

+ message 展示给用户的信息
+ default 放置在输入框内的默认文本

返回值：

+ result 用户输入的文本，或 null

### requestAnimationFrame()

在页面发生重绘之前，要求浏览器调用指定的函数。

语法：
>window.requestAnimationFrame(callback);

参考：[MDN: Window.requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

### resizeBy()

根据指定的 x, y 调整浏览器窗口的大小。

语法：
>window.resizeBy(xDelta, yDelta)

参数：

+ xDelta 横向调整的像素值（正数为增加宽度，负数为减少宽度，0 为不调整宽度）
+ yDelta 纵向调整的像素值（正数为增加高度，负数为减少高度，0 为不调整高度）

### resizeTo()

调整浏览器窗口为指定的大小。

语法：
>window.resizeTo(aWidth, aHeight);

参数：

+ aWidth 调整后的宽度
+ aHeight 调整后的高度

### scroll()/scrollTo

滚动页面到指定的位置。

语法：
>window.scroll(x-coord, y-coord)

参数：

+ x-coord 滚动后的横坐标（window.scrollX）
+ y-coord 滚动后的纵坐标（window.scrollY）

### scrollBy

根据指定的 x, y 滚动页面。

语法：
>window.scrollBy(x, y)

参数：

+ x 横向滚动的像素值（正数为向右，负数为向左，0 为不滚动）
+ y 纵向滚动的像素值（正数为向下，负数为向上，0 为不滚动）

### scrollByLines()

根据指定的行数滚动页面。

语法：
>window.scrollByLines(lines);

参数：

+ lines 滚动的行数（正数为向下滚动，负数为向上，0 为不滚动）

### scrollByLines()

根据指定的行数滚动页面。

语法：
>window.scrollByLines(lines);

参数：

+ lines 滚动的行数（正数为向下滚动，负数为向上，0 为不滚动）

### scrollByPages()

根据指定的页数滚动页面（翻页，整屏高度的滚动）。

语法：
>window.scrollByPages(pages);

参数：

+ pages 滚动的页数（正数为向下滚动，负数为向上，0 为不滚动）

### setCursor()

修改当前窗口中鼠标的样式（建议使用 CSS cursor 属性取代）。

### setImmediate()

创建一个立即执行的任务。

参考：[MSDN: setImmediate]<https://msdn.microsoft.com/en-us/library/hh773176(v=vs.85).aspx>

### sizeToContent()

让窗口根据内容自适应大小。

### stop()

停止浏览器的载入动作（和点击工具栏中的 × 按钮作用相同）。

事件
----

参考：[GlobalEventHandlers](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers)
[WindowEventHandlers](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers)

### beforeinstallprompt

参考：[Increasing engagement with Web App install banners
](https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android)

### ...
