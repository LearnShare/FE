过渡(transition)
====

transition-property
----

设置应用过渡效果的 CSS 属性（所有可计算的值都可以应用，如尺寸、颜色、透明度等）。

属性值：

1. none 无
2. all 所有属性
3. property_list 属性名称列表（多个值之间，使用 `,` 分隔）

transition-duration
----

设置过渡持续的时间。

属性值：

1. s 秒
2. ms 毫秒
3. 0 无效果（默认）

transition-timing-function
----

设置过渡效果的速度曲线。

属性值：

1. cubic-bezier(a,b,c,d) 通过 a,b,c,d 指定曲线（a,b,c,d 的范围：0-1）
2. liner=cubic-bezier(0,0,1,1) 线性
3. ease=cubic-bezier(0.25,0.1,0.25,1) 淡入淡出
4. ease-in=cubic-bezier(0.42,0,1,1) 淡入
5. ease-out=cubic-bezier(0.42,0,0.58,1) 淡出

cubic-bezier 参数在线生成工具：<http://cubic-bezier.com/>

transition-deley
----

设置过渡延迟时间。

属性值：

1. s 秒
2. ms 毫秒
3. 0 无效果（默认）

transition
----

在同一个声明中设置过渡属性。

可包括的属性：

+ transition-property
+ transition-duration
+ transition-timing-function
+ transition-deley
