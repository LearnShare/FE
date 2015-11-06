圆角(border-radius)
====

border-top-left-radius
----

设置边框左上角的外形。

属性值：

1. 尺寸值 圆角半径
2. 百分值 乘以边框宽/高度，作为圆角的半径

属性值组合：

1. a b/a% b%/a% 椭圆的水平半径和垂直半径
2. a 圆的半径

border-top-right-radius
----

设置边框右上角的外形。

border-bottom-left-radius
----

设置边框左下角的外形。

border-bottom-right-radius
----

设置边框右上角的外形。

border-radius
----

在同一个声明中设置内边距属性。

可包括的属性：

+ border-top-left-radius
+ border-top-right-radius
+ border-bottom-right-radius
+ border-bottom-left-radius

可包括的属性组合：

1.a b c d / e f g h
>top-left: a e;  
>top-right: b f;  
>bottom-right: c g;  
>bottom-left: d h;

2.a b c d / e f g
>top-left: a e;  
>top-right: b f;  
>bottom-right: c g;  
>bottom-left: d f;

3.a b c d / e f
>top-left: a e;  
>top-right: b f;  
>bottom-right: c e;  
>bottom-left: d f;

3.a b c d / e
>top-left: a e;  
>top-right: b e;  
>bottom-right: c e;  
>bottom-left: d e;

...  
a b c d | a b c | a b | a  
*  
e f g h | e f g | e f | e  
...

4.a b c d
>top-left: a a;  
>top-right: b b;  
>bottom-right: c c;  
>bottom-left: d d;

5.a b c
>top-left: a a;  
>top-right: b b;  
>bottom-right: c c;  
>bottom-left: b b;

6.a b
>top-left: a a;  
>top-right: b b;  
>bottom-right: a a;  
>bottom-left: b b;

7.a
>top-left: a;  
>top-right: a;  
>bottom-right: a;  
>bottom-left: a;
