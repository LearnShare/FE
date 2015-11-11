类（Class）
====

参考：[MDN: 对象模型的细节](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)
[MDN: JavaScript 面向对象简介](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
[MDN: 继承与原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
[MDN: Object.prototype](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)

在 JavaScript 中，所有对象都继承自 Object，都继承了 Object.prototype 的属性及方法，这些属性和方法可以被覆盖。

```js
function SomeClass() {
  //
}

var someObj = new SomeClass();
// someObj.constructor == SomeClass
```

这里的 SomeClass 函数即为 SomeClass 类的构造函数。

将父类的对象赋值给子类的 prototype 属性，即可模拟面向对象中的继承。

```js
function Animal() {
  this.name = 'Animal';
}

function Cat() {
  this.type = 'Cat';
}

Cat.prototype = new Animal();
```

Cat 变成了 Animal 的子类，即 Cat 继承了 Animal。

一个通用的类和继承方式
----

打开 [TypeScript: playground](http://www.typescriptlang.org/Playground)，选择实例列表中的 "Inheritance"：

```ts
class Animal {
  constructor(public name: string) { }
  move(meters: number) {
    alert(this.name + " moved " + meters + "m.");
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move() {
    alert("Slithering...");
    super.move(5);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move() {
    alert("Galloping...");
    super.move(45);
  }
}

var sam = new Snake("Sammy the Python");
var tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```

编译成的 JS 代码为：

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

var Horse = (function(_super) {
  __extends(Horse, _super);

  function Horse(name) {
    _super.call(this, name);
  }
  Horse.prototype.move = function() {
    alert("Galloping...");
    _super.prototype.move.call(this, 45);
  };
  return Horse;
})(Animal);

var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```

+ 这里的 __extend(a, b) 负责将 b 作为 a 的父类来完成继承；
+ 子类中重写父类中对应的方法，然后调用 _super.call(this, name) 在当前类中调用父类中对应的方法。
