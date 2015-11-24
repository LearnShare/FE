弹出层
====

[View Demo](./index.html)

弹出层通常作为浮动的内容展示，或者 dialog 来使用。弹出层有两种方式：

1. 非模态：弹出层在内容层的上方，但不影响内容层的交互（如点击等）；
2. 模态：遮罩层完全覆盖内容层，弹出层位于遮罩层内，或者在遮罩层之上。这种方式会阻止与内容层的交互。

弹出元素的定位可以相对于根元素（body）来定位，也可以相对于其他元素来定位（类似 dropdown）。

代码解析
----

HTML:

```html
<!-- 非模态 -->
<div class="btn"
    onclick="openDialog()">Open</div>
<div class="modal dialog">
  <div class="close" title="close"
      onclick="closeDialog()">&times;</div>
  <div class="content">dialog</div>
</div>

<!-- 模态 -->
<div class="btn"
    onclick="openOverlay()">Open</div>
<div class="overlay"
    onclick="hideOverlay(event)">
  <div class="modal">
    <div class="close" title="close"
        onclick="closeOverlay()">&times;</div>
    <div class="content">overlay</div>
  </div>
</div>
```

CSS:

```css
.modal {
  border: solid 5px #AAF;
  background-color: #EEE;
  position: absolute; /* 相对于 body 进行定位 */
  width: 640px;
  height: 480px;
  box-sizing: border-box;
  top: 50%; /* 元素顶部相对于 body 上边缘的距离为 body 可视区域高度的一半 */
  margin-top: -240px; /* 向上平移元素高度的一半，使其纵向居中 */
  left: 50%; /* 元素左侧相对于 body 左边缘的距离为 body 可视区域宽度的一半 */
  margin-left: -320px; /* 向左平移元素宽度的一半，使其横向居中 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.overlay { /* 与 body 可视区域大小相同的半透明遮罩层 */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: none;
}
/* .overlay 中的 .modal 相对于 .overlay 进行定位 */
```

JS:

```js
// 查找 .overlay，并显示
function openOverlay() {
  var modal = document.getElementsByClassName('overlay')[0];
  
  modal.style.display = 'block';
}
// 查找 .overlay，并隐藏
function closeOverlay() {
  var modal = document.getElementsByClassName('overlay')[0];
  
  modal.style.display = 'none';
}

// 判断被点击的是否为 .overlay 本身（不是子元素被点击）。如果是，则隐藏
function hideOverlay(e) {
  var modal = document.getElementsByClassName('overlay')[0];
  
  if(e.target === modal) {
    closeOverlay();
  }
}
```
