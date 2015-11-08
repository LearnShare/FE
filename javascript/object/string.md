String 对象
====

`String` 对象对应于原始类型中的字符串。

属性
----

### 1.length

字符串的长度。

方法
----

### 1.charAt()

获取指定位置的字符。

语法：
>str.charAt(index);

参数：
>index 索引值（0~length-1）

返回值：
>char 指定索引位置的字符

### 2.concat()

将多个字符串与当前字符串连接。

语法：
>str.concat(str1[,str2,str3,...]);

参数：
>str 一个或多个字符串

返回值：
>str 连接后的字符串

### 3.fromCharCode()

从 Unicode 值创建字符串。

语法：
>String.fromCharCode(u1[,u2,u3,...]);

参数：
>一个或多个 unicode 数值

返回值：
>所有 unicode 对应字符连接成的字符串

### 4.indexOf()

搜索指定的字符串，并返回其首次出现的位置。

语法：
>str.indexOf(search[,index]);

参数：
>search 要搜索的字符串  
>index 搜索的起始索引。该参数可省略，如果省略，则默认为 0，即从字符串开始出搜索

返回值：
>index 字符串首次出现的位置  
>-1 未搜索到指定的字符串

### 5.lastIndexOf()

与 indexOf() 类似，不过搜索方向为从右向左。

### 6.match()

使用指定的字符串或正则表达式在当前字符串中进行匹配。

语法：
>str.match(search);  
>str.match(reg);

参数：
>search 用于匹配的字符串  
>reg 用于匹配的正则表达式

返回值：
>array 包含所有匹配字符串的数组

### 7.replace()

使用指定的字符串或正则表达式在当前字符串中进行匹配，并将匹配到的字符串替换为指定字符串。

语法：
>str.replace(search, strN);  
>str.replace(reg, strN);

参数：
>strN 用于替换的新字符串

返回值：
>string 匹配和替换之后的新字符串

### 8.search()

搜索与指定的字符串或正则表达式匹配的字符串的位置。

语法：
>str.search(search);  
>str.search(reg);

返回值：
>index 首次匹配成功的位置  
>-1 无匹配的字符串

### 9.slice()

截取字符串。

语法：
>str.slice(start[, end]);

参数：
>start 截取开始的位置  
>end 截取终止的位置。该参数可省略，如果省略，则默认为 length-1，即截取到字符串末尾

返回值：
>string 截取到的字符串（包含 start 位置，但不包含 end 位置）

### 10.split()

将字符串分割为字符串数组。

语法：
>str.split(separator,n);

参数：
>separator 分割分隔符，可以是字符串或正则表达式  
>n 结果数组的最大长度。该参数可省略，如果省略，则返回整个结果数组；否则，返回的数组长度最大为 n

返回值：
>array 字符串分割产生的数组

### 11.substr()

截取字符串中从指定位置开始、指定长度的字符串。

语法：
>str.substr(start, length);

参数：
>start 截取开始的位置  
>length 截取的长度。该参数可省略，如果省略，则默认为 length-start，即截取到字符串末尾

返回值：
>string 截取到的字符串

### 12.substring()

截取字符串中包含在指定索引之间的字符串。

语法：
>str.substring(start, stop);

参数：
>start 截取开始的位置  
>stop 截取结束的位置

与 slice() 的不同之处是，substring() 不接受负值作为参数。

返回值：
>string 截取到的字符串

`slice` `substr` `substring` 是有很大区别的：

+ slice(start, end) start 和 end 都是索引值，都可以是负数（从后往前数）。截取的字符串不包含 end 位置；
+ substr(start, length) start 是索引值，length 是截取的长度；
+ substring(start, stop) start 和 end 都是索引值，不能是是负数。截取的字符串不包含 end 位置。

### 13.toLowerCase()

将字符串转换为小写形式。

语法：
>str.toLowerCase();

返回值：
>string 仅包含小写字母的字符串

### 14.toUpperCase()

将字符串转换为大写形式。

语法：
>str.toUpperCase();

返回值：
>string 仅包含大写字母的字符串
