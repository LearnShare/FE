控制结构
====

if else
----

### if

语法：

```
if(statement) {
  // exec when statement=true
}
```

当 statement 语句为 true 时，会执行括号中的代码。

### if else

语法：

```js
if(statement) {
  // exec when statement = true
}else {
  // exec when statement = false
}
```

当 statement 语句为 true 时，会执行 if 括号中的代码；否则，会执行 else 括号中的代码。

### if else if

语法：

```js
if(statement1) {
  // when statemen1t = true
}else if(statement2) {
  // when statement1 = false && statement2 = true
}
```

当 statement1 语句为 true 时，会执行 if 括号中的代码；否则，会继续判断 statement2。

可以有任意个 if else if else ... 的组合。

switch
----

### switch

语法：

```js
switch(x) {
  case a:
    // when x = a
    break;
  case b:
    // when x = b
    break;
  ...
  defalut:
    // x != a && x != b ...
}
```

依次判断 x 是否等于 a b ...，如果与某个值相等，则执行当前 case 下的代码；如果不与任意一个值相等，则执行 default 下的代码。

### case

用于列举可能的值。

### break

执行完当前 case 下的代码后，结束判断。

如果 case 下不包含 break，则会匹配到多个值，并执行对应的代码。

### default

指定无法匹配列举的值时，需要执行的代码。

for
----

### for

语法：

```js
for(var i = 0; i < 5; i++) {
  // when i < 5
}
```

for 语句分为四段：

1. 第一段用来声明和初始化变量，如循环计次变量
2. 第二段用于判断，如果为 true，则执行第三段
3. 第三段是循环的主要代码
4. 第四段可用于修改计次变量（计次变量也可以放到第三段的末尾）

可能的书写方式如下：

```js
// 1.
for(var i = 0; i < 5; i++) {
  // when i<5
}
// 2.计次变量提前声明
var i = 0;
for(; i<5; i++) {
  // when i<5
}
// 3.计次变量置于第三段末尾
for(var i = 0; i < 5;) {
  // when i<5
  i++;
}
// 4.循环次数提前声明
var n = array.length;
for(var i = 0; i < n; i++) {
  // when i<n
}
```

__注意：__ 第四种方式中将循环次数提前，可以防止每次执行时重新读取对象/数组的长度。一是节省性能，二可以防止对象长度被改变，导致死循环。

### for/in

语法：

```js
for(prop in obj){
  // obj[prop]
}
```

该循环用于遍历对象的属性或数组中的元素。

遍历对象时，prop 是字符串形式的属性名；遍历数组时，prop 是数组索引。

while
----

### while

语法：

```js
while(statement) {
  // when statement = true
}
```

当 statement 为 true 时，会执行括号中的代码。

### do while

语法：

```js
do{
  // when statement = true
}while(statement);
```

先执行一次括号中的代码，然后判断 statement，决定是否继续执行。

continue
----

### continue

中断循环中当前代码的执行，开始下一次循环。
