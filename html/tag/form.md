form 标签
====

`<form>` 元素用于创建表单区域，所有表单元素都包含在 `<form>` 元素中，或依赖它存在。

```html
<form name="login" action="ac_login.php" method="post">
  User Name: <input type="text" name="user_name" />
  Password: <input type="password" name="password" />
  <input type="submit" value="Log In" />
</form>
```

属性
----

### 1.accept-charset

用于指定服务器可处理的字符编码列表。

属性值：

1. charset 字符编码列表（多个值之间使用 `,` 分隔）

### 2.action

用于指定表单发送的目标 URL。

属性值：

1. url 表单发送目标（如果为空，则目标为当前文件）

### 3.autocomplete

用于指定是否启用表单的自动完成功能。启用自动完成功能后，在表单中输入时，浏览器会提示之前输入过的内容（或保存在浏览器中的账号密码等内容）。

属性值：

1. on 启用自动完成
2. off 关闭自动完成

### 4.enctype

用于指定表单数据在提交前的编码类型。

属性值：

1. application/x-www-form-urlencoded 对所有字符进行编码（默认值）
2. multipart/form-data 存在 `<input type="file" />` 时需要指定属性为此值（不对字符进行编码）
3. text/plain 将空格转换为 `+` ，但不编码特殊字符

### 5.method

用于指定向服务器发送表单数据的方式。

属性值：

1. get 以 URL 变量的形式发送数据（url?key1=value1&key2=value2）
2. post 以 HTTP POST 方式发送数据

`get` 和 `post` 方式的差别：

1. `get` 方式将表单数据以 名称/值 对的形式附加到 URL 中，表单内容（如密码）全部变成可见的；`post` 方式不会修改 URL ，对敏感信息（如密码）有保护作用。
2. `get` 方式修改了 URL ，该 URL 代表了单独的状态，可以用来收藏或传播（共享）（如 搜索引擎的搜索结果）；`post` 方式的 URL 无特殊标识意义。
3. `get` 方式可发送的信息有数量限制；`post` 方式没有限制。

### 6.name

用于指定表单的名称，该名称用于在脚本中引用该表单。

### 7.novalidate

提交表单时，不对内容进行验证。（验证功能存在于 `e-mail` 等类型的表单元素中）

属性值：
>1.novalidate 不对内容进行验证

### 8.target

规定 action_URL 的打开方式。
