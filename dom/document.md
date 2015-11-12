Document 对象
====

`document` 对象代表了整个 HTML 文档（HTML 元素），继承自 Node，实现了 [EventTarget](./event/event-target.md)、[ParentNode](./parent-node.md) 等接口。

属性
----

### activeElement

返回当前获取焦点的对象（元素）。

### anchors

以列表形式返回页面中的锚（包含 name 属性的 a 元素）。


### applets

以列表形式返回页面中的 applet 对象。

### body

返回 body 节点。

### characterSet

返回页面的字符集（文档编码）。

### currentScript

返回正在执行的 JS 所属的 script 元素。

// TODO
### cookie

以分号分隔列表的形式返回所有 cookie，也可以通过 cookie="key1=value1;key2=value2" 设置 cookie 值。

### defaultView

返回当前文档所在的 window 对象的引用。

### designMode

设置或返回页面内容是否可编辑（属性值：on/off）。

### dir

返回当前文档内容的书写方式（ltr/rtl）

### doctype

返回 DTD。

### documentElement

返回 html 节点。

### domain

返回当前页面的 domain（域名），该域名关系到浏览器的 [同源策略]。

### embeds

以数组形式返回 embed 对象列表。

### forms

以数组形式返回 form 对象列表。

### head

返回 head 节点。

### images

以数组形式返回 image 对象列表。

### implementation

返回关联的 [DOMImplementation](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMImplementation) 对象。

### lastModified

返回文档的最后修改时间。

### lastStyleSheetSet

返回最后一个应用的 style 元素。

### links

以列表形式返回所有 area/a 对象。

### location

返回 location 对象，和 window.location 相同。

### origin

返回文档的 origin（来源地址） 属性。

### plugins

以数组形式返回 plugin 对象列表。

### pointLockElement

返回正在使用 [鼠标锁定](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API) 的元素。

### preferredStyleSheetSet

返回浏览器首选的 style 元素列表。

### readyState

返回文档当前状态（loading 加载中；interactive 解析完成；complete 加载完毕）。

### referrer

返回跳转到当前页面的前一个页面的 URI。

### scripts

以数组形式返回 script 对象列表。

### scrollingElement

返回引起页面滚动的元素，通常是 body 元素。

### selectedStyleSheetSet

以列表形式返回正在使用的 styleSheet 对象。

### styleSheets

以列表形式返回 styleSheet 对象。

### styleSheetSets

以列表形式返回当前可用的 styleSheet 对象（内容为动态的）。

### title

返回页面的 title 值。

### URL

返回当前页面的 URL。

方法
----

参考：[selector-apis](./selector-apis.md)

继承自 [Node](./node.md) 和 [EventTarget](./event/event-target.md)

### adoptNode()

更新一个来自外部文档的节点及其子节点，使其从外部文档剥离，并可以插入当前文档中。

语法：
>node = document.adoptNode(externalNode);

### close()

关闭文档的输出流。

语法：
>document.close();

输出流由 open() 方法打开，可通过 write() 方法输出文本内容。

### createAttribute()

创建并返回属性节点。

语法：
>document.createAttribute("attr");

### craeteComment()

创建并返回注释节点。

语法：
>document.createComment("comments");

### createDocumentFragment()

创建并返回文档片段。

语法：
>document.createDocumentFragment();

### createElement()

创建并返回元素节点。

语法：
>document.createElement("tag");

### createNodeIterator()

创建一个 [NodeIterator](https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator) 对象。

语法：
>var nodeIterator = document.createNodeIterator(root, whatToShow, filter);

### craeteRange()

创建并返回 [Range](https://developer.mozilla.org/en-US/docs/Web/API/Range) 对象。

语法：
>document.createRange();

### createTextNode()

创建并返回文本节点。

语法：
>document.createTextNode("text");

### createTouch()

创建一个 [Touch](https://developer.mozilla.org/en-US/docs/Web/API/Touch) 对象。

语法：
>var touch = DocumentTouch.createTouch(view, target, identifier, pageX, pageY, screenX, screenY);

### createTouchList()

创建一个 [TouchList](https://developer.mozilla.org/en-US/docs/Web/API/TouchList) 对象。

语法：
>var list = DocumentTouch.createTouchList([touch1 [, touch2 [, ...]]]);

### createTreeWalker()

创建一个 [TreeWalker](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker) 对象。

语法：
>treeWalker = document.createTreeWalker(root, whatToShow, filter, entityReferenceExpansion);

### elementFromPoint()

返回指定位置并位于最顶层的元素。

语法：
>document.elementFromPoint(x, y);

### enableStyleSheetsForSet()

...

### execCommand()

在当前文档中执行命令。

语法：
>bool = document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)

可用的命令：

+ backColor 修改页面背景色（不推荐）
+ bold 切换 Selection 区域的加粗效果（`<b>`，IE 中使用 `<strong>`）
+ contentReadOnly 切换文档可编辑或只读
+ copy 复制 Selection 区域
+ createLink 从 Selection 区域创建链接（`<a>`），需要一个 HREF 参数作为链接的地址
+ cut 剪切 Selection 区域
+ decreaseFontSize 缩小 Selection 区域的字号（`<small>`）
+ delete 删除 Selection 区域
+ enableInlineTableEditing 切换是否允许添加和删除表格的行和列
+ enableObjectResizing 切换是否允许图片等内容的大小调整
+ fontName 修改 Selection 区域的字体（font-family），需要一个字体名称参数
+ fontSize 修改 Selection 区域的字号（font-size），需要一个数值参数
+ foreColor 修改 Selection 区域的文本颜色（color），需要一个颜色参数
+ formatBlock 将 Selection 区域所在的行使用块级元素包括，需要一个块级元素名称作为参数
+ forwardDelete 从光标处向前删除（等同于点击键盘的 Delete 按键）
+ heading 将 Selection 区域使用标题元素包括，或者在光标处插入标题元素，需要一个标题元素名称作为参数
+ hiliteColor 修改 Selection 区域的背景色，需要一个颜色参数
+ increaseFontSize 放大 Selection 区域的字号（`<big>`）
+ indent 缩进 Selection 区域，或者光标所在区域
+ insertBrOnReturn 使用软回车（`<br>`）
+ insertHorizontalRule 插入水平线（`<hr>`）
+ insertHTML 在光标处插入 HTML 内容，需要一段 HTML 代码作为参数
+ insertImage 在光标处插入图像（`<image>`），需要一个 URL 参数作为图像的地址
+ insertOrderedList 从 Selection 创建有序列表（`<ol>`），或在光标处插入有序列表
+ insertUnorderedList 从 Selection 创建无序列表（`<ul>`），或在光标处插入无序列表
+ insertParagraph 将 Selection 区域或光标所在的行用段落包括
+ insertText 删除 Selection，并在光标处插入文本
+ italic 切换 Selection 区域的斜体效果（`<i>`，IE 中使用 `<em>`）
+ justifyCenter 将 Selection 区域或光标所在的内容居中对齐
+ justifyFull 将 Selection 区域或光标所在的内容两端对齐
+ justifyLeft 将 Selection 区域或光标所在的内容左对齐
+ justifyRight 将 Selection 区域或光标所在的内容右对齐
+ outdent 向前缩进 Selection 区域，或者光标所在区域
+ paste 删除 Selection，并在光标处插入剪贴板中的内容
+ redo 重做上一个被撤销的动作
+ removeFormat 清除 Selection 区域的格式
+ selectAll 选中可编辑区域的所有内容
+ strikeThrough 切换 Selection 区域的删除线效果（`<del>`）
+ subscript 切换 Selection 区域的上标效果（`<sub>`）
+ superscript 切换 Selection 区域的下标效果（`<sup>`）
+ underline 切换 Selection 区域的下划线效果（`<u>`）
+ undo 撤销上一个动作
+ unlink 清除 Selection 区域的链接
+ styleWithCSS 切换使用 HTML 或 CSS 来生成格式化的代码

### exitPointerLock()

取消鼠标锁定。

### getSelection()

生成一个 [Selection] 对象，与 Window.getSelection() 相同。

### hasFocus()

当前文档是否获取了焦点。

语法：
>document.hasFocus();

### importNode()

复制外部文档中的节点，使其可以插入当前文档。

语法：
>var node = document.importNode(externalNode, deep);

### open()

打开文档的输出流。

语法：
>document.open();

输出流可通过 write() 方法输出文本内容，并使用 close() 方法关闭你。

### queryCommandEnabled()

检测 execCommand() 中的命令是否已启用。

语法：
>isEnabled  = document.queryCommandEnabled(command);

### queryCommandSupported()

检测 execCommand() 中的命令是否被浏览器支持。

语法：
>isSupported = document.queryCommandSupported(command);

### registerElement()

向当前页面注册自定义的元素，并返回该元素的构造函数。

语法：
>var constructor = document.registerElement(tag-name, options);

### releaseCapture()

释放元素捕获。

语法：
>document.releaseCapture();

鼠标可通过 elmt.setCapture() 捕获。

### write()

向文档输出流中输出文本。

语法：
>document.write("text");

文本可包含 HTML tag，会被解析为 HTML。

### writeln()

向文档输出流中输出文本，会在输出的文本之后添加换行。

语法：
>document.writeln("text");

事件
---

### online

### offline
