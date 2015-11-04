多媒体元素
=========

多媒体元素用于向网页中插入图像、音视频、Flash或可绘制的画布等内容。

1.audio [HTML5]
-------

参考：tag-audio

2.canvas [HTML5]
--------

参考：tag-canvas

3.embed [HTML5]
--------

用于定义嵌入的内容，如Flash。

```html
<embed src="flash.swf" />
```

###属性

1.height

用于定义嵌入内容的高度。

属性值：
>1. number 高度值

2.src

用于定义嵌入文件的URL。

属性值：
>1. url 嵌入文件的URL

3.type

用于定义嵌入文件的MIME类型。

4.width

用于定义嵌入内容的宽度。

4.img
-----

用于嵌入图像。

```html
<img src="image.png" alt="image" />
```

###属性

1.alt

2.src

3.height

用于定义图像的显示高度。

属性值：
>1. px/% 高度值（像素值或百分数）

4.ismap

用于定义图像映射为服务器端映射，当点击图像时，点击的坐标会被发送到服务器端。

属性值：
>1. ismap

5.usemap

定义图像的热区。

属性值：
>1. #map-name `#` + 图像热区的 `name` 值

6.width

5.object
--------

用于定义嵌入的内容，如Flash。

```html
<object data="flash.swf">
  <param name="bgcolor" value="#000" />
  <param name="quality" value="high" />
</object>
```

###属性

1.data

用于定义嵌入内容的URL。也可以通过 `<param>` 元素指定资源URL，并通过 `mime` 属性设置资源的MIME类型。

属性值：
>1. url

2.form

用于指定元素所属的表单。

属性值：
>1. form_id 表单的id（可指定多个 form_id，并使用空格分隔）

3.height

4.name

5.type

6.usemap

7.width

6.param
-------

嵌套在 `<object>` 元素中，用于指定嵌入内容所需要的参数（属性和值）。

###属性

1.name

用于指定属性的名称。

2.value

用于指定属性的值。

7.source [HTML5]
--------

嵌套在 `<audio>` 或 `<vedio>` 元素中，用于指定媒体文件。

```html
<audio>
  <source src="music.mp3" type="audio/mp3" />
  <source src="music.ogg" type="audio/ogg" />
</audio>
```

可以指定多个 `<source>` 元素，浏览器会优先播放支持的格式。

###属性

1.media

2.src

3.type

8.track [HTML5]
-------

用于定义文本轨道，主要用于定义字幕。

```html
<video src="movie.mp4">
  <track type="subtitles" src="sub_cn.srt" srclang="zh" label="chinese" />
</video>
```

可以定义多个 `<track>` 元素，即多组字幕。

###属性

1.default

用于设置字幕为默认字幕。

属性值：
>1. default 默认

2.kind

定义轨道类型。
属性值：
>1. captions 说明文本
>2. chapters 定义章节，用于导航媒体资源
>3. descriptions 用于定义描述文本，用于内容不可用时显示
>4. metadata 
>5. subtitles 字幕

3.label

用于定义轨道的标题或标签。

属性值：
>1. text 标签文本

4.src

5.srclang

9.video [HTML5]
-------

参考：tag-video
