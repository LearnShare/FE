# Custom Elements

自定义元素包含了一系列 API，用于定义新元素及其行为。

目录：

+ 定义新元素
  + 使用 DOM API
  + 使用 \<template\> 和 \<slot\>
+ 扩展内置元素
+ 生命周期回调函数

## 定义新元素

新元素需继承自 HTMLElement。

### 使用 DOM API

```js
// 定义
class HelloWorld extends HTMLElement {
  constructor() {
    super();

    const root = this.attachShadow({
      mode: 'closed',
    });

    const container = document.createElement('span');
    container.textContent = 'HelloWorld';

    root.appendChild(container);
  }
}

// 注册
window.customElements.define('hello-world', HelloWorld);
```

```html
<!-- 使用 -->
<hello-world></hello-world>
```

### 使用 \<template\> 和 \<slot\>

```js
// 定义
class UserCard extends HTMLElement {
  constructor() {
    super();

    const root = this.attachShadow({
      mode: 'closed',
    });

    const template = document.getElementById('the-template');
    const content = document.importNode(template.content, true);

    root.appendChild(content);
  }
}

// 注册
window.customElements.define('user-card', UserCard);
```

```html
<!-- 元素模板 -->
<template id="the-template">
  <a class="card" href="https://github.com/LearnShare" target="_blank">
    <img src="https://avatars1.githubusercontent.com/u/3265208?s=40&v=4">
    <slot name="user-name">DEFAULT</slot>
  </a>
</template>

<!-- 使用 -->
<div id="cards">
  <user-card>
    <span slot="user-name" class="user-name">LearnShare</span>
  </user-card>
  <user-card>
    <span slot="user-name" class="user-name">H-Labs</span>
  </user-card>
  <user-card></user-card>
</div>
```

## 扩展内置元素

扩展内置元素是编写自定义元素的另一种方式。

```js
// 定义
class FancyButton extends HTMLButtonElement {
  constructor() {
    super();

    this.addEventListener('click', () => {
      this.style.color = `rgb(${ this.random() }, ${ this.random() }, ${ this.random() })`;
    });
  }

  random = () => {
    return Math.random() * 255;
  }
}

// 注册
window.customElements.define('fancy-button', FancyButton, {
  extends: 'button',
});
```

注意：扩展内置元素时，需在 `customElements.define()` 方法中声明所继承的内置元素名称。

```html
<!-- 使用 -->
<button is="fancy-button">FANCY</button>
```

## 生命周期回调函数

### connectedCallback

当元素被插入到文档中时调用。

### disconnectedCallback

当元素从文档中移除时调用。

### adoptedCallback(oldDocument, newDocument)

当元素被移动到新的文档中时调用。参数分别为：

+ oldDocument: 移动前所属文档
+ newDocument: 移动后所属文档

### attributeChangedCallback(attrName, oldValue, newValue)

当元素的任意属性发生改变时调用。改变包括：

+ 属性被添加
+ 属性被删除
+ 属性被替换
+ 属性值发生改变

参数分别为：

+ attrName: 属性名称
+ oldValue: 改变前的属性值
+ newValue: 改变后的属性值

**注意**：必须首先声明需要坚挺的属性列表，才能正确触发 attributeChangedCallback 回调。

```js
class HelloWorld extends HTMLElement {
  // 监听 message 属性
  static get observedAttributes() {
    return [
      'message',
    ];
  }

  constructor() {
    super();
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    console.log('attributeChanged', attrName, oldValue, newValue);

    if (attrName === 'message'
        && newValue !== oldValue) {
      this.container.textContent = newValue;
    }
  }
}
```
