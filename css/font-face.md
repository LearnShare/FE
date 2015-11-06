自定义字体(@font-face)
====

格式支持（[caniuse.com](caniuse.com/http://caniuse.com/#feat=fontface "font-face")）：

+ eot IE: 6+
+ woff IE: 9+; FF: 3.6+; Chrome: 5+; Safari: 5.1+; Opera: 11.1+;
+ SVG Chrome: 4+; Safari: 3.2+; Opera: 9.0+
+ ttf/otf IE 9+(partial); FF: 3.5+; Chrome: 4.0+; Safari: 3.1+; Opera: 10.0+

@font-face
----

用于声明自定义字体：

```css
@font-face {
  font-family: 'font-name';
  src: url('font-file');
  ...
}
```

### @font-face 声明中必须有的属性：

1.font-family

用于定义字体的名称，在引用处通过 `font-family` 属性使用该字体。

```
// 引用自定义字体
font-family: 'font-name';
```

2.src

用于定义字体文件的 URL。

可定义多组 URL 值，用于设置不同格式的字体，来支持不同的浏览器。

```
src: url('file1'), url('file2');
```

### @font-face 声明中可选的属性：

可选属性用于定义自定义字体的默认样式。

+ font-stretch
+ font-style
+ front-weight
+ unicode-range

设置字体支持的 Unicode 字符范围。

__注意：__ @font-face 声明需要放置到所有引用该字体的位置之前，以保证字体在引用时已经加载完成。
