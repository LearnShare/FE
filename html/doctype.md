doctype 文档类型定义
====

`<!DOCTYPE>` 声明位于HTML文档的最前面的位置，处于 `<html>` 标签之前。此标签告诉浏览器该 HTML 文档使用了哪种 HTML 或 XHTML 规范。

文件类型定义（Document Type Definition，DTD）定义了该 HTML 文档可使用的元素（element）及属性（attribute），浏览器会根据 HTML 文档中的 `<!DOCTYPE>` 声明来确定 DTD 的版本，并依据该 DTD 的规则显示该页面。所以，合理地使用文档类型定义声明，可以让浏览器正确的显示网页。

DTD 的版本
--------

###HTML4

在 HTML4.01 中，定义了三种文档类型：

1.Strict DTD（严格型）

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

在严格型的 HTML 文档中，要保证 __内容与表现分离__，即要将 CSS 样式与 HTML 声明分离。

2.Transitional DTD（过渡型）

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

该类型的要求比严格型更加宽松，可用于不支持 CSS 的浏览器。

3.Frameset DTD（基于框架的）

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

该类型用于使用了框架（`frameset`）的页面，其他的要求类似于 Strict DTD。

###XHTML1

类似 HTML4.01，在 XHTML1.0 中也定义了三种 DTD：

###HTML5

在 HTML5 中，只有一种 DTD：

```html
<!DOCTYPE html>
```

我们推荐直接使用这个声明。
