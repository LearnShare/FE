动画(animation)
====

```css
/* 定义动画规则 */
@keyframes move {
  from {
    top: 0px;
  }
  to {
    top: 200px;
  }
}

/* 执行动画，持续两秒钟 */
#target {
  animation: move 2s;
}
```

@keyframes
----

定义多个关键帧。

```
@keyframes name {
  from {
    top: 0px;
  }
  to {
    top: 200px;
  }
}
```

属性：

1.name 定义动画名称  
2.keyframes 定义关键帧的位置  
>属性值：  
>1.百分值
>2.from = 0%
>3.to = 100%

3.styles 定义关键帧的样式属性

animation-name
----

定义动画的名称。

animation-duration
----

定义动画的长度。

属性值：

1. time 默认为 0，无动画效果（单位：s）

animation-timing-function
----

定义动画的速度曲线。

animation-deley
----

定义动画的延迟。

animation-iteration-count
----

定义动画的播放次数（默认为 1）。

animation-derection
----

定义动画是否循环反向播放。

属性值：

1. normal 不反向播放（默认）
2. alternate 循环反向播放

animation-play-state
----

设置动画的播放状态。

属性值：

1. paused 暂停
2. running 播放

animation
----

在同一个声明中设置动画的属性。

可包括的属性：

+ animation-name
+ animatin-duration
+ animation-timing-function
+ animation-deley
+ animation-iteration-count
+ animation-direction
