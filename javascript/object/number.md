Number 对象
====

Number 对应了原始值中的数值类型。

可通过构造函数创建 Number 对象：

```js
var num = new Number(value);
```

value 代表了数值或可转换为数值的其他值。

属性
----

以下属性的访问方式为：

```
Number.MAX_VALUE
```

不可以在 Number 对象中访问。

### 1.MAX_VALUE

代表 Number 对象可表示的数值上限。

### 2.MIN_VALUE

代表 Number 对象可表示的数值下限。

### 3.NaN

代表特殊值 NaN。

### 4.NEGATIVE_INFINITY

代表负无穷。

### 5.POSITIVE_INFINITY

代表正无穷。

方法
----

### 1.toString()

使用指定的基数，将对象转换为字符串。

语法：
>num.toString(n);

参数：
>n 基数值（2-36，默认为 10），2 代表转换为二进制字符串。如果省略该参数，则转换为十进制字符串

返回值：
>string 转换得到的字符串

### 2.toFixed()

将数值转换为字符串，保留指定位数的小数值。

语法：
>num.toFixed(len);

参数：
>len 保留小数的位数（0-20，默认为 0）

返回值：
>string 包含指定小数位数的字符串

### 3.toExponential()

将数值转换为指数表示的字符串，并保留指定位数的小数值。

语法：
>num.toExponential(len);

参数：
>len 保留小数的位数（0-20，默认为 0）？？

返回值：
>string 包含指定小数位数的指数表示的字符串

### 4.toPrecision()

如果数值长度超出指定的位数，则转换为指数形式的字符串。

语法：
>num.toPrecision(len);

参数：
>len 保留小数的位数（1-21，默认为 0）？？

返回值：
>string 包含指定小数位数的指数表示的字符串  
>num 原来的值
