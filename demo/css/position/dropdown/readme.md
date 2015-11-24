下拉列表
====

[View Demo](./dropdown/index.html)

代码解析
----

Dropdown 组件分为三个部分：

+ 容器：组件的最外层元素，用来对折叠部分进行相对定位；
+ 可视部分：组件默认可见的部分，可以用来激活折叠和展开；
+ 折叠部分：组件默认不可见的部分，可用来放置其他内容。

HTML:

```html
<div class="dropdown"> <!-- 容器 -->
  <div class="btn">btn</div> <!-- 可视部分 -->
  <div class="panel">dropdown content</div> <!-- 折叠部分 -->
</div>
```

CSS:

```css
.dropdown {
  width: 160px;
  position: relative; /* 必须，使折叠部分可以相对容器进行定位 */
}

.panel {
  border: solid 5px #FAA;
  background-color: #EEE;
  position: absolute; /* 必须，使折叠部分可以相对容器进行定位 */
  top: 50px; /* 元素顶部相对于容器上边缘的距离为 50px，也就是恰好（看起来）紧贴容器的下边缘 */
  left: 0; /* 元素左侧相对于容器左边缘的距离为 0 */
  width: 100%; /* 使宽度与容器相同 */
  box-sizing: border-box; /* 将 border 纳入总宽度的计算 */
}

.dropdown .panel {
  display: none; /* 默认不显示折叠部分 */
}
.dropdown:hover .panel {
  display: block; /* 鼠标指向组件时，显示折叠部分 */
}
```
