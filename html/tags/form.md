表单元素
====

表单主要用来向服务器输入和提交各种数据，主要包括文本输入区域，单选、复选按钮，列表，时间日期组件等。

`name` 和 `value` 属性是表单元素中最重要的两个属性，它们会被成对地发送到服务器端。

标签
----

### 1.form

参考：tag_form

### 2.fieldset

用于对表单元素进行分组，可用 `<legend>` 元素为其添加标题。（`<fieldset>` 元素会在分组周围显示边框）

```html
<form>
  <fieldset>
    <legend>fieldset title</legend>
    ...
  </fieldset>
</form>
```

属性：

#### 1.disabled

规定禁用当前分组内的所有表单元素。

属性值：
>1.disabled 禁用当前分组中的所有表单元素

#### 2.form

指定所属的一个或多个表单。（通常将表单元素放置在 `<form>` 元素外部，并指定其 `form` 属性指定元素所属表单。所有表单元素均包含此属性和用法）

属性值：
>1.form_IDs 所属的表单 ID（多个 ID 之间使用 `,` 分隔）

#### 3.name

### 3.legend

`<legend>` 元素需要嵌入 `<fieldset>` `<figure>` 和 `<details>` 元素中使用，用于指定其标题。

### 4.label

`<label>` 元素需要和其他表单元素搭配使用（通过 for 绑定其 id），用于为表单元素指定标签。

```html
<label for="name">User Name:</label>
<input type="text" id="name" />
```

属性：

1.for

用于指定绑定的表单元素。

属性值：
>1.element_ID 绑定的表单元素的 ID

与表单元素绑定后，对 `<label>` 元素的操作会映射到绑定的表单元素上（如点击 `<label>` 中的文本，会选中/取消选中 `<input type="checkbox" />`）。

`<label>` 元素与绑定的表单元素的位置可以是任意的，不比相邻。

### 5.textarea

用于定义表单中的多行文本输入区域。

属性：

1.autofocus

指定页面加载时，当前元素是否自动获取焦点。

属性值：
>1.true 自动获取焦点
>2.false 不自动获取焦点

2.cols

用于指定文本区可见列数。

属性值：
>1.n 可见的列数

3.disabled

4.form

5.inputmode

用于指定文本区的输入模式。

属性值：
>？？？

6.name

7.readonly

规定内容是否只读。

属性值：
>1.true 内容只读
>2.false 内容可编辑

8.required

规定内容是否可空。

属性值：
>1.true 内容不可空
>2.false 内容可空

9.rows

用于指定文本区可见行数。

属性值：
>1.n 可见的行数

###6.select

`<select>` 元素用于创建下拉列表。`<option>` 元素可以为下拉列表添加项目。

```html
<select>
  <option value="item1">item1</option>
  <option value="item2">item2</option>
</select>
```

属性：

1.autofocus

2.data

提供自动插入的数据 URL。

属性值：
>1.data_url 插入的数据 URL

3.disabled

4.form

5.multiple

指定是否可以多选。

属性值：
>1.true 多选
>2.false 单选（默认）

6.name

###7.option

`<option>` 元素用于嵌入到 `<select>` 或 `<datalist>` 元素中，为列表提供选项。

属性：

1.disabled

2.label

用于指定当前项目的标签（显示文本）。

3.selected

指定当前项目是否被选中。

属性值：
>1.selected 当前项被选中

4.value

用于指定当前项目的值（该值会作为所在 `<select>` 或 `<datalsit>` 元素的值发送到服务器端）。

属性值：
>1.value_text 当前项目的值

###8.optgroup

`<optgroup>` 元素用于对 `<option>` 元素进行分组。

```html
<select>
  <optgroup label="group1">
    <option value="item1">item1</option>
    <option value="item2">item2</option>
  </optgroup>
  <optgroup label="group2">
    <option value="item3">item3</option>
    <option value="item4">item4</option>
  </optgroup>
</select>
```

属性：

1.label

用于指定分组的标签（显示文本）。

2.disabled

###9.input

参考：tag_input

###10.button

`<button>` 元素对应了 `<input>` 元素的 `type="button|reset|submit"` 三种类型。标签内的文本作为显示在按钮中的文本。

```html
<button type="button">button name</button>
```

属性：

1.autofocus

2.disabled

3.form

4.formaction

仅对 `type="submit"` 的按钮有效。

5.formenctype

仅对 `type="submit"` 的按钮有效。

6.formnovalidate

仅对 `type="submit"` 的按钮有效。

7.formtarget

仅对 `type="submit"` 的按钮有效。

8.name

9.type

用于指定按钮的类型。

属性值：
>1.button 普通按钮（默认值）
>2.reset 重置按钮
>3.submit 提交按钮

10.value

用于指定按钮的值，该值会被提交到服务器端。

###11.progress

`<progress>` 用来定义进度条。

```html
<progress max="5" value="3">60%</progress>
```

属性：

1.max

用于定义进度的最大值。

2.value

用于定义进度的当前值。

###12.meter

`<meter>` 用于定义刻度标尺。

```html
<meter min="0" max="10" low="3" high="8" value="5">50%</meter>
```

属性：

1.max

用于定义刻度的最大值。

2.min

用于定义刻度的最小值。

3.optimum

用于定义刻度的最佳值。

4.high

用于定义刻度的范围上限。

5.low

用于定义刻度的范围下限。

6.value

用于定义当前的刻度值。

###13.datalist

`<datalist>` 与 `<input>` 元素中的文本框配合使用，用于定义候选列表。`<option>` 元素用于向列表中插入项目。

```html
<datalist id="datalist">
  <option value="item1">item1</option>
  <option value="item2">item2</option>
</datalist>
<input type="text" list="datalist" />
```

需要在 `<input>` 元素中设置 `list="datalist_id"` 来指定其候选列表。

command keygen output
