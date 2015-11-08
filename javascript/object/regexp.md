RegExp 正则表达式
====

`RegExp` 对象对应正则表达式，用来进行字符串的模式匹配。

```
var reg = new RegExp(pattern[, attributes]);
```

参数：
>pattern 正则表达式模式文本
>attributes 匹配选项，可使用以下三个参数任意组合：
>>g 全局匹配  
>>i 不区分大小写  
>>m 多行匹配

参考：[regexp](https://github.com/LearnShare/regexp)

属性
----

### 1.globle

是否进行全局匹配。

### 2.ignoreCase

是否忽略大小写。

### 3.lastIndex

下一次匹配的起始位置。

### 4.multiline

是否进行多行匹配。

### 5.source

正则表达式的模式文本。

方法
----

### 1.complie()

修改 RegExp 对象的模式文本和匹配规则。

语法：
>reg.complie(regexp[,attributes]);

参数：
>regexp 正则表达式

### 2.exec()

对字符串执行匹配，并将匹配结果以数组返回。

语法：
>reg.exec(string);

返回值：
>array 包含匹配结果的字符串数组  
>null 未匹配到任何字符串

### 3.test()

检测字符串是否能匹配当前模式。

语法：
>reg.rest(string);

返回值：
>true 匹配  
>false 不匹配
