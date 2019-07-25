# Shadow DOM

Shadow DOM 和普通的 DOM 基本相同，但它的操作范围是有限的（Shadow 根节点内）。`<video>` 元素就是一个典型的例子，它内部的 UI 和交互逻辑就是通过 Shadow DOM 控制的。

它包含以下几个概念：

+ Shadow host: Shadow DOM 所在的常规 DOM 节点。
+ Shadow tree: Shadow DOM 内的 DOM 数。
+ Shadow boundary: Shadow DOM 的结束位置，也是常规 DOM 的开始位置。
+ Shadow root: Shadow tree 的根节点。

将任意元素设置为 Shadow root：

```js
element.attachShadow({
  mode: 'closed',
});
```

其中，`mode` 参数有两个可选值：

+ open: 可在元素（包括自定义元素）外部使用 `element.shadowRoot` 获得元素的 Shadow root
+ closed: 不可在外部获得元素的 Shadow root

在自定义组件中使用：

```js
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
```
