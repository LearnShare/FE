类（Class）
----

我们在 [class](../class.md) 中讲到了 ES5 中模拟类的方式：

```js
var Animal = (function() {
  function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.say = function() {
    return 'animal ' + this.name;
  };
  
  return Animal;
})();

var cat = new Animal('Cat');
cat.say(); // 'animal Cat'
```

ES6 中添加了 Class 相关的语法，用来声明类：

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  say() {
    return 'animal ' + this.name;
  }
}

var cat = new Animal('Cat');
cat.say(); // 'animal Cat'
```

+ constructor 就是构造函数，和前一种方式内部的 Animal 函数作用相同；
+ say() 方法直接声明在了 class 的 {} 内部，与上面通过 prototype 扩展方法的方式作用相同。

ES6 的 Class 语法可以看做是声明类的一个 [语法糖](https://zh.wikipedia.org/zh/%E8%AF%AD%E6%B3%95%E7%B3%96)。

属性
----

### Class.name

name 属性代表了类的名称。

继承
----

我们同样在前面讨论了模拟继承的方式：

```js
var __extends = (this && this.__extends) || function(d, b) {
  for(var p in b) {
    if(b.hasOwnProperty(p)) {
      d[p] = b[p];
    }
  }

  function __() {
    this.constructor = d;
  }
  d.prototype = (b === null)
      ? Object.create(b)
      : (__.prototype = b.prototype, new __());
};

var Animal = (function() {
  function Animal(name) {
    this.name = name;
  }
  Animal.prototype.move = function(meters) {
    alert(this.name + " moved " + meters + "m.");
  };
  return Animal;
})();

var Snake = (function(_super) {
  __extends(Snake, _super);

  function Snake(name) {
    _super.call(this, name);
  }
  Snake.prototype.move = function() {
    alert("Slithering...");
    _super.prototype.move.call(this, 5);
  };
  return Snake;
})(Animal);
```

ES6 使用 extends 关键词来编写类的继承：

```js
class Animal {
  constructor() {
    this.name = 'Animal';
  }
  
  say() {
    return `This is an ${this.name}.`;
  }
}

class Cat extends Animal {
  constructor() {
    super();
    
    this.name = 'Cat';
  }
  
  miao() {
    return `miao from ${this.name}.`;
  }
}

var cat = new Cat();
cat.say(); // This is an Cat.
cat.miao(); // miao from Cat.
```

+ 子类的构造函数必须首先（第一行代码）通过 super() 调用父类的构造函数;
+ 子类可以通过 super.func() 来调用父类的 func() 方法；
+ 子类中可以覆盖父类的属性或方法，也可以添加新的属性或方法。

可以通过 `Object.getPrototypeOf(B) === A` 来判断 B 是否继承自 A。

存取器
----

类似在 [object](../object.md) 中讲到的，类也可以由存取器属性：

```js
class Animal {
  constructor() {
    this._name = '';
  }
  
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}
```

静态方法
----

上面在类中定义的方法，都只能在类实例化后，通过类的实例来调用。如果直接通过类来调用，则会出错：

```js
cat.say(); // This is an Cat.
Cat.say(); // TypeError: Cat.say is not a function
```

ES6 允许类中定义静态方法，这些方法可以在类中直接调用：

```js
class DoMath {
  constructor() {}
  
  static sum(a, b) {
    return a + b;
  }
}

DoMath.sum(1, 3); // 4
```

这有些类似直接调用包含方法的对象：

```js
var DoMath = {
  sum: function(a, b) {
    return a + b;
  }
};

DoMath.sum(1, 3); // 4
```
