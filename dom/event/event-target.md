EventTarget
====

EventTarget 是用来处理事件的接口，实现了该接口的类（DOM 元素、XHR 对象等）都可以调用相关的方法。

target.addEventListener()
----

为对象绑定事件监听函数。

语法：
>elmt.addEventListener("event", func, useCapture);

参数：
>1.event 事件名称  
>2.func 事件处理程序  
>3.useCapture bool 是否使用捕获

事件处理程序可调用的参数：
>1.event Event 事件对象  
>2.this 事件源对象

### elmt.attachEvent() IE<=8

语法：
>elmt.attachEvent("event", func);

target.removeEventListener()
----

取消事件监听。

语法：
>elmt.removeEventListener("event", func, useCapture);

### elmt.detachEvent() IE<=8

语法：
>elmt.detachEvent("event",func);

target.dispatchEvent()
----

触发当前对象的指定事件。

语法：
>obj.dispatchEvent("event");

### fireEvent() IE<=8
