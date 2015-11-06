背景渐变(background-gradient)
====

liner-gradient()
----

线性渐变。

```
background-image: liner-gradient(left, #FFF, #339);
```

可能的参数组合：

liner-gradient(point/angle, stop1, stop2...)

point 起点：

+ top 顶部（从上到下的渐变）  
+ bottom 底部（从下到上的渐变）  
+ left 左侧（从左到右的渐变）  
+ right 右侧（从右到左的渐变）  
+ top left 左上角（从左上到右下的渐变）  
+ top right 右上角（从右上到左下的渐变）  
+ bottom left 右上角（从右上到左下的渐变）  
+ bottom right 右下角（从右下到左上的渐变）
+ 不指定该值，则默认为 top

angle 渐变角度：

+ 45deg 从右侧开始，逆时针 45°

stop 标记位置（color position）：

1. 多个 color，不指定位置，则位置平均分布  
  color1, color2 = color1 0%, color2 100% 起点为 color1，终点为 color2  
  color1, color2, color3 = color1 0%, color2 50%, color3 100% 起点为 color1，中点为 color2，终点为 color3

2. 多个 color position，按照指定的位置分布颜色  
3. 有的 stop 指定了位置，有的未指定，则未指定位置的 stop 平均分布

radial-gradient()
----

径向渐变。

```
background-image: radial-gradient(#FFF, #339);
```

可能的参数组合：

radial-gradient(center, shap size, stop1, stop2...)

center 渐变中心：

+ top|center|bottom * left|center|right 的组合  
+ a b 尺寸值
+ a% b% 百分值
+ top|center|bottom|a|a% 指定一个值，第二个值为 center/50%
+ 默认为 center center

shap 渐变形状：

+ circle 圆
+ ellipse 椭圆（默认）

size 渐变范围：

+ closest-side 渐变外围到达最近的边  
+ farthest-side 渐变外围到达最远的边  
+ closest-corner 渐变范围到达最近的角  
+ farthest-corner 渐变范围到达最远的角  
+ contain 渐变包含在元素框中  
+ cover 渐变覆盖整个元素框

repeating-linear-gradient()
----

重复线性渐变。

可能的参数组合：

repeating-linear-gradient(point, stop1, stop2, stop3, stop4)

point 起点

stop 1-4 重复渐变片段（只有 stop1 可省略 position）

repeating-radial-gradient()
----

重复径向渐变。

可能的参数组合：

radial-gradient(center, shap size, stop1, stop2, stop3, stop4)

属性包含 circle contain 时，会导致 Chrome 崩溃。<http://weibo.com/1583124954/zxjtxBgxp>
