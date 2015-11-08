Array 对象
====

Array 对象就是数组。

属性
----

### 1.length

length 属性代表了数组中元素的个数。在索引从 0 开始，且元素连续时，数组末尾元素的索引值等于 length-1，length 代表数组的长度。

length 属性可读写。当为其赋值时，如果赋予的值小于原值，数组中多余的元素会被删除。

方法
----

### 1.concat()

将参数中的数组依次连接到当前数组之后。该方法不改变原有数组。

语法：
>array0.concat(array1[,array2,...,arrayN])；

返回值：
>Array 连接后的数组

### 2.join()

以指定的字符串为分隔符，将数组元素连接成字符串。

语法：
>array.join([separator]);

分隔符参数是可选的。如果未指定分隔符，默认为 ","。

返回值：
>String 连接后的字符串

### 3.pop()

返回数组的最后一个元素，并从数组中删除该元素。

语法：
>array.pop();

数组会自动维护 length 属性。

返回值：
>elmt 数组末尾的元素

### 4.push()

向数组末尾添加一个或多个元素。

语法：
>array.push(elmt1[,elmt2,...,elmtN]);

数组会自动维护 length 属性。

返回值：
>length 数组更新后的长度

### 5.reverse()

该方法会将数组中的元素倒序排列。即原索引为 n 的元素，索引会变为 (length-1)-n。

语法：
>array.reverse();

该方法对原数组进行处理，不会产生新数组。

返回值：
>array 倒序排列之后的数组

### 6.shift()

该方法类似于 pop()，不过它会返回并删除数组的首个元素。

语法：
>array.shift();

数组会自动维护 length 属性。

返回值：
>elmt 数组的首个元素

### 7.slice()

截取当前数组中的部分元素，并作为数组返回。

语法：
>array.slice(start[,end]);

参数：
>start 截取起点元素的索引  
>end 截取终点元素的索引+1

end 参数可选。如果省略，则等于 length，即截取到数组末尾。

参数值：
>参数可能的取值为：  
>1.0或正整数（0,1,2,3...） 代表元素的索引  
>2.负整数（-1,-2,-3...） 代表元素从后往前的索引（即 length-1,length-2）

返回值：
>Array 截取到的数组

### 8.sort()

对数组元素进行排序操作。

语法：
>array.sort([callback]);

callback 为指定的排序函数，该参数是可选的。如果省略，则按照从小到大的顺序排列。

参数：
>callback 排序函数

排序函数必须满足两点：

1. 包含两个参数 如：sortFun(a,b){}
2. 返回值限定在 0 正数（>0）和负数（<0）之中

返回值与排序策略：

1. 返回值 <0，代表 a<b，则 a 在前，b 在后
2. 返回值 =0，代表 a=b，保持 a b 原来的顺序
3. 返回值 >0，代表 a>b，则 b 在前，a 在后

该方法对原数组进行处理，不会产生新数组。

返回值：
>Array 排序后的数组

### 9.splice()

该方法可用于插入、删除或替换数组元素。

语法：
>array.splice(index[,n][,elmt1,...,elmtN]);

参数：
>1.index 指定插入或删除元素的起始下表  
>2.n（>=0） 指定删除或替换元素的个数（该参数可选，如果省略，默认为 (length-1)-index，即删除或替换到末尾）  
>3.elmts 用于替换或插入到数组中的元素列表（该参数可选，如果省略，则该方法用于删除元素）

返回值：
>array 如果有元素被删除或替换，则将其作为数组返回

### 10.toString()

将数组转连接成字符串，并返回结果。

语法：
>array.toString();

返回值：
>string 以","分隔的字符串

返回值与 array.join() 相同。

### 11.toLocalString()

将数组元素转换为 LocalString，然后连接成字符串，并返回结果。

语法：
>array.toLocalString();

该方法会依次调用每个数组元素的 toLocalString() 方法，将其转换为 LocalString。

返回值：
>string 以","分隔的字符串

### 12.unshift()

向数组开头添加一个或多个元素。

语法：
>array.unshift(elmt1[,elmt2,...,elmtN]);

数组会自动维护 length 属性。

返回值：
>length 数组更新后的长度

### 13.forEach()

遍历数组，并可将数组元素、元素索引及数组本身作为 callback 的参数。

语法：
>array.forEach(callback);

参数：
>1.callback 作为参数的函数

callback：

```
array.forEach(function([elmt], [i], [array]){
  // 函数操作
});
```

callback 可将数组元素（elmt）、元素索引（i）及数组本身（array）作为参数使用。后两个参数是可选的：

```
array.forEach(function(elmt){});
array.forEach(function(elmt, i){});
array.forEach(function(elmt, i, a){});
```

返回值：
>无

### 14.map()

使用传入的函数对每个数组元素进行处理，并将所有结果作为新的数组返回。

语法：
>array.map(function(elmt){});

参数：
>1.callback 用于处理数组元素的函数

callback 必须满足两个条件：
>1.使用数组元素作为参数（elmt）  
>2.有返回值

callback 的返回值将存储在新的数组中，并作为 map() 操作的返回值。map() 操作不改变原数组。

返回值：
>array 包含处理结果的数组

### 15.filter()

用于筛选（过滤）数组元素，并将过滤结果作为数组返回。

语法：
>array.filter(function(elmt){});

参数：
>1.callback 用于筛选数组元素的函数

callback 必须满足两个条件：
>1.使用数组元素作为参数（elmt）  
>2.有返回值，且返回值可用于判断（true/false）

callback 用于处理每一个数组元素，如果返回 true，则该元素符合筛选条件。

返回值：
>array 包含筛选结果的数组

### 16.every()

用于判定数组元素的特征。相当于全称量词 ∀。

语法：
>array.every(function(elmt){});

参数：
>1.callback 用于筛数组元素的函数

callback 必须满足两个条件：
>1.使用数组元素作为参数（elmt）  
>2.有返回值，且返回值可用于判断（true/false）

返回值：
>bool 如果 __所有__ 元素都符合判定规则，则返回 true；否则，返回 false。

### 17.some()

用于判定数组元素的特征。相当于存在量词 ∃。

语法：
>array.some(function(elmt){});

参数：
>1.callback 用于筛数组元素的函数

callback 必须满足两个条件：
>1.使用数组元素作为参数（elmt）  
>2.有返回值，且返回值可用于判断（true/false）

返回值：
>bool 如果 __至少__ 一个元素符合判定规则，则返回 true；否则，返回 false。

### 18.reduce()

使用指定的函数对数组元素进行组合或比较，可用于对数组元素求和、求积或筛选最大值、最小值。

语法：
>array.reduce(function(elmt1,elmt2){}[,value]);

参数：
>1.callback 用于处理数组元素的函数
>2.value 作为 callback 参数的默认值

callback：

```js
array.reduce(function(x, y) { // 求所有元素的和
  return x + y;
},0);
array.reduce(function(x, y) { // 求所有元素的积
  return x * y;
},1);
array.reduce(function(x, y) { // 求所有元素的中的最大值
  return (x > y) ? x : y;
});
```

x y 会依次被赋值为 a[0] a[1] ... a[N]，即操作是从左到右的。

返回值：
>value 组合或比较的结果

### 19.reduceRight()

同 reduce() 相同，不过操作是从右向左的。

### 20.indexOf()

查找指定元素首次出现的位置。

语法：
>array.indexOf(elmt);

返回值：
>index 如果数组中存在该元素，则返回其首次出现的位置；否则，返回 -1

### 21.lastIndexOf()

与 indexOf() 相同，不过查找的顺序为从右向左。
