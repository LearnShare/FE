input 标签
==========

`<input>` 元素用于向表单中插入可输入的元素。该元素包括了大部分表单元素，不同的表单元素依据 `type` 属性区分。

```html
<input type="email" />
```

type 属性
----

### 1.button

按钮，与 `<button>` 元素相同。

### 2.checkbox

复选框。

#### 关联属性

1.checked

用于指定当前元素是否已选中。

属性值：
>1.checked 已选中

### 3.color

颜色选择器。

### 4.date

日期组件（包括 `Calendar` 组件）。

#### 关联属性

1.max

用于指定日期/时间的最大值。该属性对所有日期/时间型的 `<input>` 元素有效。

2.min

用于指定日期/时间的最小值。该属性对所有日期/时间型的 `<input>` 元素有效。

3.step

用于指定日期/时间的调节间隔。该属性对所有日期/时间型的 `<input>` 元素有效。

### 5.datetime

日期时间组件（包括 `Calendar` 和 `Time` 组件，UTC 时间）。

### 6.datetime-local

日期时间组件（包括 `Calendar` 和 `Time` 组件，本地时间）。

### 7.month

月份组件（包括 `Calendar` 组件）。

### 8.week

周组件（包括 `Calendar` 组件）。

### 9.time

时间组件（包括 `Time` 组件）。

### 10.email

e-mail 地址组件。

#### 关联属性

1.multiple

用于指定是否可输入多个值。

属性值：
>1.multiple 可输入多个值（多个值之间，使用 `,` 分隔）

### 11.file

文件上传组件。

#### 关联属性

1.multiple

用于指定是否可选择多个文件。

#### 关联属性

1.accept

用于指定可上传的文件类型。

属性值：
>1.mime_lists MIME 列表（多个值之间，使用 `,` 分隔。如 image/gif,image/png）
>2. *.* 任意文件[默认]

### 12.hidden

隐藏组件（与 `type="text"` 相同，只是不显示在页面中）。

### 13.image

图像按钮。

#### 关联属性

1.alt

2.height

3.src

4.width

5.formaction

用于覆盖 `<form>` 元素的 `action` 属性。

6.formenctype

用于覆盖 `<form>` 元素的 `enctype` 属性。

7.formnovalidate

用于覆盖 `<form>` 元素的 `novalidate` 属性。

8.formtarget

用于覆盖 `<form>` 元素的 `target` 属性。

### 14.number

数字组件（包含 `Spinner` 调节按钮）。

####关联属性

1.max

用于指定数值的最大值。

2.min

用于指定数值的最小值。

3.step

用于指定数值的调节间隔。

### 15.password

密码组件（与 `type="text"` 相同，只是内容用掩码（默认为黑点）显示）。

### 16.radio

单选按钮。

### 单选按钮组

为多个单选按钮指定相同的 `name` 属性，就组成了 _单选按钮组_。组中的每个按钮是互斥的，不会被同时选中。

```html
<input type="radio" name="gender" value="male" />
<input type="radio" name="gender" value="female" />
```

#### 关联属性

1.checked

### 17.range

数字组件（包含 `Slider` 滑动条）。

#### 关联属性

1.max

2.min

3.step

### 18.reset

重置按钮（点击后，会将当前表单中所有元素重置为默认值）。

### 19.search

搜索文本框。

### 20.submit

提交按钮（点击后，会将当前表单提交到服务器端）。

#### 关联属性

1.formaction

2.formenctype

3.formnovalidate

4.formtarget

### 21.tel

电话号码组件。

### 22.text

文本框（默认值）。

### 23.url

URL 组件。

其他属性
----

1.autocomplete

2.autofocus

3.disabled

4.form

5.list

用于指定候选的 `<datalist>` 列表对象。

6.maxlength

用于指定允许输入的最大字符数。

7.name

8.pattern

使用正则表达式限定输入的文本。建议配合 `title` 属性，提供提示文本。

属性值：
>1.RegExp 正则表达式

9.placeholder

用于指定文本框的提示信息（hint）。提示信息以半透明显示，只在文本框为空时显示。

10.readonly

11.required

13.size

用于指定文本框中显示的字符数。

14.value

用于指定当前表单元素的值，对不同类型的表单元素，该值有不同的作用和意义。

+ type="button|reset|submit" 用于指定按钮中显示的文本
+ type="text|password|hidden|email|url" 用于指定文本框的默认值（默认文本）
+ type="checkbox|radio|image" 指定的值会被发送到服务器端

对于 `type="checkbox|radio"` 类型的表单元素，`value` 属性是必须的。
