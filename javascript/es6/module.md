模块（Module）
====

参考：[ES spec: export](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-exports)
[ES spec: import](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-imports)

在 ES6 之前，JavaScript 中并没有模块相关的功能，不过已经有许多被广泛使用的模块加载方案（如 CommonJS、AMD）。ES6 添加了模块功能，用来定义和使用模块。

定义模块
----

ES6 中的模块对应一个文件，文件中可以包含类定义、对象、函数、值等内容，并通过 export 语法导出可以被外部模块访问的内容：

```js
// lib.js
export const a = 5;

export function add(a, b) {
  return a + b;
}

export point = {
  x: 0,
  y: 0
};

export class Animal {
  constructor() {
    this.name = 'Animal';
  }
}
```

导出的内容可以在定义时导出（如上面的代码所示），也可以先定义，再导出：

```js
// lib.js
function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

export {
  add,
  minus
}
```

第二种写法更能直观地展示出模块所有的导出内容（所以 export 语句一般建议写在模块的末尾）。我们也可以在这种方式下，通过 as 改变导出内容的名称：

```js
// lib.js
function x(a, b) {
  return a + b;
}

function y(a, b) {
  return a - b;
}

export {
  x as add,
  y as minus
}
```

函数 x() 会被导出为 add()。

模块中也可以通过 export default 导出默认的值，这个语句只能出现一次，也就是说这个模块只有一个导出的值：

```js
// lib.js
function x(a, b) {
  return a + b;
}

export default x;
```

调用模块
----

模块定义完成后，就可以交给其他模块来使用了：

```js
// lib.js
function x(a, b) {
  return a + b;
}

function y(a, b) {
  return a - b;
}

export {
  x as add,
  y as minus
}

// main.js
import lib from './lib';

lib.add(1, 2); // 3
lib.minus(2, 1); // 1
```

import 有多种语法：

```js
// 从 './lib.js' 导入 lib 模块
import lib from './lib';
lib.add(1, 2);

// 从 './lib.js' 导入 add()/minus() 方法
import { add, minus } from './lib';
add(1, 2);

// 从 './lib.js' 导入模块，并命名为 mod
import * as mod from './lib';
mod.add(1, 2);

// 从 './lib.js' 导入 add()/minux() 方法，并分别命名为 x()/y()
import { add as x, minus as y } from './lib';
x(1, 2);
```

引入默认的导出值，可以使用如下语法：

```js
// lib.js
function x(a, b) {
  return a + b;
}

export default x;

// 从 './lib.js' 导入 lib 模块
import lib from './lib';
lib(1, 2);

import lib, * as mod from './lib';
lib(1, 2);
mod(1, 2);


// mod.js
export default {
  add: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  }
};

// main.js
import mod, { add, minus } from './mod';
mod.add(1, 2);
add(1, 2);
```

import 语句一般放在文件的开始位置。
