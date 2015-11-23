History
====

History 接口代表了当前窗口的浏览记录。

当前窗口打开的每一个不同的 URL 都会被记录为一个新的历史（除非使用了 location.replace(url) 替换掉一个历史），可以通过 history.pushState() 方法手动向历史记录列表里添加记录。可以在历史记录列表里前进或后退，但不可以遍历整个列表。

属性
----

### length

当前历史记录列表的长度。

### state

通过 history.pushState() 添加到历史记录里的 state 参数值。

方法
----

### back()

在历史记录中向后退一步（如果有上一步的话），等同于 history.go(-1)。

### forword()

在历史记录中向前进一步（如果有下一步的话），等同于 history.go(1)。

### go()

在历史记录中前进或后退指定的步数。

语法：
>history.go(steps);

参数：

+ steps 前进或后退的步数（正数为前进，负数为后退）

### pushState()

向历史记录列表中添加新纪录（浏览器会改变当前页面的 URL，但不会加载或刷新页面），该记录与浏览器生成的记录效果相同。

语法：
>history.pushState(state, title, url);

参数：

+ state 状态对象，代表历史记录的唯一特征（该值可以通过 history.state 读取）
+ title 历史记录的名称
+ url 历史记录的 URL

URL 必须与当前页面同源。

```js
// open test.com
window.history.length; // 1

window.history.pushState({
  a: 1,
  b: 2
},
'pushed history',
'http://test.com/abc123');

// 可以发现浏览器地址栏的地址变为
// http://test.com/abc123，但没有刷新页面
window.history.length; // 2
```

### replaceState()

与 history.pushState() 类似，但会替换掉历史列表中最近一条记录。

pushState() 和 replaceState() 目前通常用来做单页面应用，也会配合 Ajax 做无刷新的内容加载。
