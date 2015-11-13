Event
====

Event 对象是各种事件的统一接口。

参考：[MDN: Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

语法：
>event = new Event(typeArg, eventInit);

参数：
>typeArg 字符串，代表事件的名称
>eventInit 配置参数对象，可用属性：

+ bubbles 是否可以冒泡
+ cancelable 是否可以被取消

属性
----

### bubbles

获取事件是否可以冒泡。

### cancelable

获取时间是否可以被取消。

### currentTarget

获取绑定了事件监听函数的对象（可能与触发事件的元素 target 不同）。

### defaultPrevented

获取该事件是否调用过 event.preventDefault()。

### isTrusted

获取该事件是否可信（true 事件由用户动作触发，false 由程序触发）

### target

触发事件的元素（与 currentTarget 可能不同）。

### timeStamp

获取事件触发的时间戳（毫秒数）。

### type

获取该 [事件的类型](https://developer.mozilla.org/en-US/docs/Web/Events)。

方法
----

### createEvent()

创建指定类型的事件。

语法：
>document.createEvent(type);

### preventDefault()

阻止事件的默认行为（当 event.cancelable = true 时才有效）。

语法：
>event.preventDefault();

### stopImmediatePropagation()

阻止该事件相关的其他监听函数的执行。

语法：
>event.stopImmediatePropagation();

### stopPropagation()

阻止事件冒泡。

语法：
>event.stopPropagation();
