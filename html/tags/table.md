表格元素
====

表格在网页中经常用来呈现数据。

```html
<table border="1">
  <tr>
    <th>cell1</th>
    <th>cell2</th>
  </tr>
  <tr>
    <td>cell3</td>
    <td>cell4</td>
  </tr>
</table>
```

标签
----

### 1.table

`<table>` 元素用于定义表格。

属性：

1. border

用于指定表格的边框。

属性值：
>"" 无边框[默认]
>1 边框宽度为 1px

###2.thead

`<thead>` 元素用于定义表格的表头区域，该元素在 `<table>` 中是可选的。

`<thead>` 元素中需要嵌套 `<tr>` `<th>` 或 `<td>` 元素来定义内容。

###3.tfoot

`<tfoot>` 元素用于定义表格的脚注区域，该元素在 `<table>` 中是可选的。

该元素使用方法与 `<thead>` 相同。

###4.tbody

`<tbody>` 元素用于定义表格的主体区域，该元素在 `<table>` 中是可选的。

该元素使用方法与 `<thead>` 相同。

__注意：__ 如果需要在 `<table>` 中使用以上三个元素，其顺序必须为 `<thead>` `<tfoot>` `<tbody>` 。

###5.tr

`<tr>` 元素用于定义表格的行，可以嵌套在上面任意一个元素中使用。

###6.td

`<td>` 元素用于定义表格的单元格，需要嵌套在 `<tr>` 元素中使用。

属性：

1. colspan 定义单元格横跨的列数（属性值为整数，为 `0` 时，代表横跨所在 `<colgroup>` 的所有列）
2. headers 规定与当前单元格相关联的一个或多个表头单元格(`<th>`)（属性值为一个或多个 header_ID）。
3. rowspan 定义单元格横跨的行数（属性值为整数，为 `0` 时，代表横跨所在 `<thead>` `<tbody>` 或 `<tfoot>` 的所有行）

###7.th

`<th>` 元素类似于 `<td>` 元素，主要用来定义表头部分的单元格。

属性：

1. colspan 定义单元格横跨的列数（属性值为整数，为 `0` 时，代表横跨所在 `<colgroup>` 的所有列）
2. headers 规定与当前单元格相关联的一个或多个表头单元格(`<th>`)（属性值为一个或多个 header_ID）。
3. rowspan 定义单元格横跨的行数（属性值为整数，为 `0` 时，代表横跨所在 `<thead>` `<tbody>` 或 `<tfoot>` 的所有行）
4. scope 规定当前表头单元格所属的区域。
>属性值：  
>1.col 属于列  
>2.row 属于行  
>3.colgroup 属于列组  
>4.rowgroup 属于行组

该元素中的文本默认会加粗并居中显示。如果需要将非表头部分单元格中的文本加粗显示，__请使用 CSS__ 。

###8.caption

`<caption>` 元素用于为表格添加标题，该元素是可选的。如果使用该元素，需要将其作为 `<table>` 元素的首个子元素。

###9.col

`<col>` 元素用于规定表格中的一个或多个列的属性。该元素为 _空标签_ 。如果使用该元素，需要将其作为 `<table>` 元素的首个子元素或放置于 `<caption>` 元素之后。

```html
<table border="1">
  <col class="left" />
  <col class="right" span="2" />
  <tr>
    <th>cell1</th>
    <th>cell2</th>
    <th>cell3</th>
  </tr>
  <tr>
    <td>cell4</td>
    <td>cell5</td>
    <th>cell6</th>
  </tr>
</table>
```

请在 `<col>` 中使用 `class` 属性，并使用 CSS 为列添加样式。

属性：

1. span 规定横跨的列数

###10.colgroup

`<colgroup>` 元素与 `<col>` 基本相同，唯一的不同点是 `<colgroup>` 元素用来规定一组表格列使用相同的属性，而 `<col>` 元素用来规定多组表格列使用不同的属性。

请在 `<colgroup>` 中使用 `class` 属性，并使用 CSS 为列添加样式。

属性：

1. span 规定横跨的列数
