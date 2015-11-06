盒阴影(box-shadow)
====

box-shadow
----

设置 box 的阴影。

可包括的属性：

+ h-shadow 阴影水平位置（右为正，左为负。默认为 0）
+ v-shadow 阴影垂直位置（下为正，上为负。默认为 0）
+ blur 模糊距离（可选，默认为 0）
+ spread 阴影尺寸（可选）
+ color 阴影颜色（可选，默认与边框颜色相同）
+ inset 内阴影（可选，不设置则为外阴影）

多重阴影
----

在 box-shadow 中设置多组阴影数据，即可实现多重阴影：

```
box-shadow: 2px 2px 5px #CCC inset,
            5px 5px 10px #AAF;
```
