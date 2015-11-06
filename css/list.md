列表(list)
====

列表样式属性针对 `<ul>` 或 `<ol>` 元素有效。

list-style-type
----

设置列表项标记的样式。

属性值：

1. none 无标记
2. disc 实心圆
3. circle 空心圆
4. square 实心方块
5. decimal 数字（1,2,3...）
6. decimal-leading-zero 0 开头的数字（01,02...）
7. lower-roman 小写罗马数字（i, ii, iii...）
8. upper-roman 大写罗马数字（I, II, III...）
9. lower-alpha 小写英文字母（a,b,c...）
10. upper-alpha 大写英文字母（A,B,C...）
11. lower-greek 小写希腊字母（α,β,γ...）
12. upper-greek
13. lower-latin 小写拉丁字母（à,á,â...）
14. upper-latin 大写拉丁字母（À,Á,Â...）
15. hebrew 希伯来编号
16. armenian 亚美尼亚编号
17. georgian 乔治亚编号
18. cjk-ideographic 表意数字
19. hiragana 片假名（a,i,u,e,o...）
20. katakana 片假名（A,I,U,E,O...）
21. hiragana-iroha 片假名（i,ro,ha,ni,ho...）
22. katakana-iroha 片假名（I,RI,HA,NI,HO...）

list-style-image
----

将图像设置为列表项标记。

```
list-style-image: url("image.png");
```

属性值：

1. url(url) 图像的 URL

list-style-position
----

设置列表项标记的位置。

属性值：

1. outside 位于项目文本外（左）侧（默认）
2. inside 位于项目文本内

list-style
----

在同一个声明中设置列表项标记的样式。

可包括的属性：

+ list-style-type
+ list-style-position
+ list-style-image
