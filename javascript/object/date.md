Date 对象
----

`Date` 对象用于处理时间和日期。

```js
var now = new Date(); // 当前时间
var someday = new Date('2015-11-08T12:44:52'); // 根据指定字符串生成时间对象
```

关于时间字符串的格式，参考：[W3C: Date and Time Formats](http://www.w3.org/TR/NOTE-datetime) 。Chrome 对时间字符串的要求相对宽松，IE 和 Firefox 的要求更为严格（'2015-11-08 12:44:52' 可以在前者正常工作，在后两者就会无法解析成 Date 对象）。

date 对象保存了创建时的日期和时间信息。

方法
----

### 1.Date()

获取当前的日期和时间，或根据指定的字符串生成时间对象。

语法：
>Date();

返回值：
>字符串：Sun Jun 09 2013 09:35:34 GMT+0800 (中国标准时间)

### 2.getDate()

获取日期（月份中的哪一天）。

语法：
>date.getDate();

返回值：
>date 1~31

### 3.getDay()

获取周几。

语法：
>date.getDay();

返回值：
>day 0~6（0 代表周日）

### 4.getMonth()

获取月份。

语法：
>date.getMonth();

返回值：
>month 0~11（0 代表一月）

### 5.getFullYear()

获取年份。

语法：
>date.getFullYear();

返回值：
>year 代表年份的四位数字

### 6.getHours()

获取小时。

语法：
>date.getHours();

返回值：
>hour 0~23

### 7.getMinutes()

获取分钟。

语法：
>date.getMinutes();

返回值：
>minute 0~59

### 8.getSeconds()

获取秒。

语法：
>date.getSeconds();

返回值：
>second 0~59

### 9.getMilliseconds()

获取毫秒。

语法：
>date.getMilliseconds();

返回值：
>milli second 0~999

### 10.getTime()

获取 date 代表的时间与 1970-01-01 之间的毫秒差。

语法：
>date.getTime();

返回值：
>milli second 毫秒差

### 11.getTimezoneOffset()

获取时差，以分钟为单位。

语法：
>date.getTimezoneOffset();

返回值：
>minute 时差的分钟值

### 12.parse()

将指定的字符串解析为时间，并返回其与 1970-01-01 之间的毫秒差。

语法：
>Date.parse(string);

参数：
>string 代表日期时间的字符串

返回值：
>milli second 毫秒差

### 13.setDate()

设置时间的日期（月份中的哪一天）。

语法：
>date.setDate(date);

### 14.setMonth()

设置时间的月份和日期。

语法：
>date.setMonth(month[,day]);

### 15.setFullYear()

设置时间的年份。

语法：
>date.setFullYear(year[,month,day]);

### 16.setHours()

设置时间的小时。

语法：
>date.setHours(hour[,min,sec,millisec]);

### 17.setMinutes()

设置时间的分钟。

语法：
>date.setMinutes(min[,sec,millisec]);

### 18.setSeconds()

设置时间的秒。

语法：
>date.setSeconds(sec[,millisec]);

### 19.setMilliseconds()

设置时间的毫秒。

语法：
>date.setMilliseconds(millisec);

### 20.setTime()

以毫秒数设置时间。

语法：
>date.setTime(millisec);

参数：
>millisec 指定时间与 1970-01-01 之间的毫秒差

### 21.toString()

获取时间的字符串表示。

语法：
>date.toString();

返回值：
>string 与 Date() 方法相同

### 22.toTimeString()

获取 Date 对象时间部分的字符串表示。

语法：
>date.toTimeString();

返回值：
>字符串：09:35:34 GMT+0800 (中国标准时间)

### 23.toDateString()

获取 Date 对象日期部分的字符串表示。

语法：
>date.toDateString();

返回值：
>字符串：Sun Jun 09 2013

### 24.toUTCString()

获取 Date 对象的世界时表示形式。

语法：
>date.toUTCString();

返回值：
>字符串：Sun, 09 Jun 2013 02:26:37 GMT

### 25.toLocaleString()

获取 Date 对象的本地化字符串形式。

语法：
>date.toLocaleString();

返回值：
>字符串：2013年6月9日 上午10:38:41

要看运行环境是否实现该功能。（Node 中未实现）

### 26.toLocaleTimeString()

获取 Date 对象时间部分的本地化字符串表示。

语法：
>date.toLocaleTimeString();

返回值：
>字符串：上午10:38:41

### 27.toLocaleDateString()

获取 Date 对象日期部分的本地化字符串表示。

语法：
>date.toLocaleDateString();

返回值：
>字符串：2013年6月9日

### 28.UTC()

根据指定的世界时信息，获取其与 1970-01-01 之间的毫秒差。

语法：
>Date.URC(year, month, day[, hour, min, sec, millisec]);
