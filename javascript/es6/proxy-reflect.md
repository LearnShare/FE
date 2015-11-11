Proxy/Reflect
====

参考：[es6: proxy](http://es6.ruanyifeng.com/#docs/proxy)

Proxy 用于拦截对象的操作，可以对默认行为进行扩展和改写：

```js
var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});

obj.x = 5;
// setting x!
obj.x;
// getting x!
```

上面的代码拦截了对象的属性存取器（getter/setter），并在实现了打印日志的功能后，使用 Reflect 重新执行了默认的动作。

Reflect 提供了许多操作对象的方法。
