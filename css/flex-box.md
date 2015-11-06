弹性盒模型（flex-box）
====

弹性盒模型扩展了传统的 [box-model](./box-model.md)，丰富了布局类型，增强了对不同屏幕的响应式设计。

相关概念
----

![flex-terms](./images/flex-terms.png)

### 弹性容器（Flex container）

弹性元素的容器，其 `display` 为 `flex/inline-flex`。

### 弹性元素（Flex item）

弹性容器的子元素都是弹性元素。

### 轴（Axes）

弹性容器依据两个方向来排列子元素。横向的称为主轴，纵向的称为侧轴。

### 方向（Directions）

弹性容器的主轴开始、主轴结束和侧轴开始、侧轴结束边缘代表了弹性子元素排列的起始和结束位置。

### 行（Lines）

### 尺寸（Dimensions）

开始
----

```html
<div class="box">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>
```

```css
.box {
  display: flex;
	flex-direction: row;
}
.item {
  flex: 1;
}
```

<http://codepen.io/anon/pen/LpJLeg>

设置每一个 item 占据 1/3 的宽度，横向从左到右排列。

### 相关属性

#### 1. display

flex/inline-flex 设置元素为弹性元素

### 2. flex-direction

设置轴的方向，来影响弹性子元素的排列方式。

+ row 横向，自左向右[默认]
+ row-reverse 横向，自右向左
+ column 纵向，自上向下
+ column-reverse 纵向，自下向上

### 3. flex-grow

定义弹性子元素的拉伸，值为正整数。

在一条轴上，弹性子元素的宽度/高度计算方式为：

+ n 当前元素的 flex-grow 值；
+ m 该轴上所有元素的 flex-grow 和。

```
item-width = n / m
```

### 4. flex-shirink

定义弹性子元素的缩放比例，值为正整数，默认为 1。

参考：[flex-shrink](http://www.css88.com/book/css/properties/flex/flex-shrink.htm)

### 5. flex-basis

定义弹性子元素缩放的基准值。

参考：[flex-basis](http://www.css88.com/book/css/properties/flex/flex-basis.htm)

### 6. flex

复合属性，包含：

+ flex-grow
+ flex-shirink
+ flex-basis

### 7. align-content

当弹性容器侧轴方向上有剩余空间时，控制每行相对于容器的对齐方式：

+ flex-start 从侧轴起点开始排列[默认]
+ flex-end 从侧轴终点开始排列
+ center 所有子元素向侧轴中心排列
+ space-between 子元素等间距排列，两端无间距
+ space-around 子元素等间距排列，两端间距为子元素间距的一半
+ stretch 拉伸所有子元素，来填满侧轴的长度

参考：[align-content](http://www.css88.com/book/css/properties/flex/align-content.htm)

### 8. align-items

控制子元素间的对齐方式：

+ flex-start 相对于侧轴起点顶部对齐[默认]
+ flex-end 相对于侧轴终点底部对齐
+ center 相对于侧轴中点中心对齐
+ baseline 相对于侧轴起点中心对齐
+ stretch 相对于侧轴起点和终点两端对齐（拉伸所有子元素，来填满侧轴的长度）

参考：[align-items](http://www.css88.com/book/css/properties/flex/align-items.htm)

### 9. align-self

控制子元素相对于容器的对齐方式：

+ auto 自动[默认]
+ flex-start 相对于侧轴起点顶部对齐
+ flex-end 相对于侧轴终点底部对齐
+ center 相对于侧轴中点中心对齐
+ baseline 与 `align-item: baseline;` 效果相同
+ stretch 与 `align-item: stretch;` 效果相同

### 10. flex-wrap

设置子元素是否可以换行：

+ nowrap 不能换行，所有元素显示在一行中[默认]
+ wrap 可以换行，当宽度超出容器后换行
+ wrap-reverse 与 wrap 作用相同，但方向相反

### 11. flex-flow

复合属性，包含：

+ flex-direction
+ flex-wrap

### 12. justify-content

设置子元素在主轴上相对于容器的对齐方式，与 `align-content` 表现类似：

+ flex-start
+ flex-end
+ center
+ space-between
+ space-around

### 13. order

用来指定子元素的顺序，值为整数。

参考：[order](http://www.css88.com/book/css/properties/flex/order.htm)
