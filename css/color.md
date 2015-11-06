CSS 颜色
====

CSS 中的许多属性都和颜色有关，如：

```
color 文本颜色
background-color 背景颜色
border-color 边框颜色
outline-color 外框颜色
...
```

颜色表示方式
----

### 1.颜色名

这是最常见的颜色表示方式，使用浏览器预定义的名称来表示颜色：

```
color: red;
```

详细的颜色名称列表，请参考：[Color Name List](http://www.ncdesign.org/html/samp/s030list.htm) 或 [HTML Color Chart](http://www.html-color-names.com/color-chart.php)

### 2.十六进制

十六颜色使用三组十六进制（00-FF）数字分别代表红色（R，red）、绿色（G，green）和蓝色（B，blue）：

```
color: #096A53；
```

如果三组十六进制数的两个字符相同，则可以使用简写形式：

```
color: #66AA99;
// 等于
color: #6A9;
```

### 3.RGB

RGB 颜色同样使用三组数字（0-255）分别代表红色、绿色和蓝色：

```
color: rgb(80,150,30);
```

### 4.RGBA

RGBA 颜色在 RGB 颜色的基础上扩展了透明（alpha）通道：

```
color: rgba(80, 150, 30, 0.3);
```

透明数值的范围是 0.0(完全透明)-1.0（完全不透明）。

### 5.HSL

HSL 颜色使用三组数字分别代表色调（H，hue）、饱和度（S，saturation）和亮度（L，lightness）：

```
color: hsl(240,80%,60%);
```

+ 色调的范围是 0-360（0/360 红色，120 绿色，240 蓝色），代表色盘的角度；  
+ 饱和度的范围是 0%-100%（0% 灰色，100% 全彩色）；  
+ 亮度的范围也是 0%-100%（0% 黑色，100% 白色）。

### 6.HSLA

HSLA 颜色在 HSL 颜色的基础上扩展了透明通道：

```
color: hsla(240, 80%, 60%, 0.3);
```
