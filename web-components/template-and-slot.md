# template 和 slot

## template

template 元素用于定义可复用的 HTML 模板。template 及内部的元素都不会直接显示在网页中，需要使用 JavaScript 和 DOM API 进行操作。

定义：

```html
<template id="the-template">
  <div class="user-card">
    <img src="">
    <span></span>
  </div>
</template>

<div id="cards"></div>
```

使用：

```js
// 获取并导入模板内容
const template = document.getElementById('the-template');
const content = document.importNode(template.content, true);

// 修改内容
const a = content.querySelectorAll('a')[0];
a.setAttribute('href', url);

const img = content.querySelectorAll('img')[0];
img.setAttribute('src', avatar);

const span = content.querySelectorAll('span')[0];
span.textContent = name;

// 插入到网页中
const container = document.getElementById('cards');
container.appendChild(content);
```

需要使用 `Node.cloneNode()` 或 `document.importNode()` 复制模板内容。

## slot

slot 用于定义模板中可被替换的部分。

slot 通常需要使用 `name` 属性命名，以便在使用时使用 `slot` 属性指定被替换的目标。未命名的作为默认 slot，会被自定义元素内未指定 slot 名称的内容替换掉。

slot 内可以声明元素和内容。如果未指定替换内容，slot 中的内容就会展示出来。

```html
  <template id="the-template">
    <a class="card" href="https://github.com/LearnShare" target="_blank">
      <img src="https://avatars1.githubusercontent.com/u/3265208?s=40&v=4">
      <slot name="user-name">DEFAULT</slot>
    </a>
  </template>

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

```js
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

window.customElements.define('user-card', UserCard);
```

slot 的优点是可以将任意内容插入到自定义元素（template）中，同时缺点也很明显：

+ 无法对插入的元素及内容进行限制
+ 插入的内容并不直接改变自定义元素的结构，无法应用元素内定义的样式，需要从外部定义其样式
