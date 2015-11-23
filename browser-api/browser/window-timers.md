WindowTimers
====

WindowTimers 接口包含了设置和取消定时器的接口，Window 对象实现了该接口。

方法
----

### setTimeout()

设置定时器，在指定延时后执行一次。

语法：
>var timeoutID = window.setTimeout(func, [delay, param1, param2, ...]);  
>var timeoutID = window.setTimeout(code, [delay]);

参数：

+ func 延时之后执行的函数
+ code 延时之后执行的代码（不推荐这种方式）
+ delay 延迟时间（毫秒数，最小为 4）
+ param* 要传递给 func 的参数

返回值：

+ timeoutId 定时器唯一的 ID 值，用于取消该定时器

```js
var move = function(name) {
  console.log(name + ' start moving after 3 seconds.');
};

var timer = window.setTimeout(move, 3 * 1000, 'Tag');

// Tag start moving after 3 seconds.
```

### clearTimeout()

取消通过 window.setTimeout() 设置的定时器，被取消的定时器将不会再生效。

语法：
>window.clearTimeout(timeoutID)

### setInterval()

设置重复的定时器，在每个指定延时后都会执行，直到被取消。

语法：
>var intervalID = window.setInterval(func, delay[, param1, param2, ...]);  
>var intervalID = window.setInterval(code, delay);

```js
var move = function(name) {
  console.log(name + ' moved after 3 seconds.');
};

var timer = window.setInterval(move, 3 * 1000, 'Tag');

// Tag moved after 3 seconds.
// Tag moved after 3 seconds.
// Tag moved after 3 seconds.
// ...
```

### clearInterval()

取消通过 window.setInterval() 设置的定时器，被取消的定时器将不会再生效。

语法：
>window.clearInterval(intervalID)
