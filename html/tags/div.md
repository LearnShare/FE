类div 标签
====

`<div>` 元素代表分隔（division），常用于定义页面中的区块，并通过与 CSS 的组合对页面进行排版。

由于 `<div>` 本身只有一个默认属性（`display:block`），所以很长一段时间内，大多数网站都是用它来进行页面排版。但它没有任何实际意义，无法表达其中内容的含义。HTML5中，强化了 `标签语义化` 的概念，并提供了若干个类似 `<div>` 的新标签，来代替 `<div>` 的一些习惯用法。

类 `<div>` 元素都是块级元素。

语义化的标签
----

address article aside blockquote footer header menu nav section

### 1.address

用于定义联系信息，如 e-mail、地址、联系人和电话等。

### 2.article [HTML5]

用于定义新闻文章、博客博文等页面主体内容。

### 3.aside [HTML5]

用于定义侧边栏等非页面主体内容。

### 4.blockquote

用于定义引用的内容。

### 5.details [HTML5]

用于展示内容的详细描述，需要与 `<summary>` 元素配合使用。

```html
<details>
  <summary>JavaScript</summary>
  <p>JavaScript是一种脚本语言。</p>
</details>
```

如果在 `<details>` 中不使用 `<summary>` 元素，默认标题为 “详细信息”。

### 6.figcaption [HTML5]

作为 `<figure>` 元素的标题。

```html
<figure>
  <figcaption>GitHub</figcaption>
  <img src="https://help.github.com/assets/help/footer-logo-56d3698f3654d6403360623c353d37ea.png" title="GitHub" />
</figure>
```

### 7.figure [HTML5]

规定独立于文档的内容，如文章配图或嵌入文章中的表格等。

### 8.footer [HTML5]

用于定义页脚的内容。

### 9.h1~h6

用于定义标题。`<h*>` 元素的文字加粗显示，字号从 `<h1>` 递减到 `<h6>`。

### 10.header [HTML5]

用于定义页眉的内容。

### 11.menu [HTML5]

用于定义上下文菜单（右键菜单）或工具栏。通常将 `<command>` 元素嵌套其中，作为菜单项或工具栏按钮。

```html
<menu type="context">
  <command>复制</command>
  <command>剪切</command>
  <command>粘贴</command>
</menu>
```

目前浏览器还不能很好地支持 `<menu>` 及 `<command>` 元素。

### 12.nav [HTML5]

用于定义导航栏。

### 13.p

用于定义段落。

### 14.section [HTML5]

用于定义页面中的区段，如文章章节、侧边栏区块等。  
建议 `<section>` 的首个子元素为标题（`h1~h6`）。

### 15.summary [HTML5]

用于定义 `<details>` 元素的标题。除标题外，其他内容默认是隐藏的，使用鼠标点击标题后才显示。
