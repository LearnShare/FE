audio 标签
====

`<audio>` 元素用于向页面中添加音频。

```html
<audio src="music.mp3" controls="controls"></audio>
```
	
也可以通过在 `<audio>` 元素中嵌套一个或多个 `<source>` 元素，来指定音乐文件。使用该方法时，`<audio>` 元素的 `src` 属性被忽略。【待证实】

```html
<audio controls="controls">
  <source src="music.mp3" type="audio/mp3" />
  <source src="music.ogg" type="audio/ogg" />
</audio>
```

浏览器会依次检查每种格式的音频文件，并选择第一个支持的格式播放（[支持列表](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats#Browser_compatibility)）。

属性
----

### 1.autoplay

指定音频在页面加载完成后是否自动开始播放。

属性值：
>1. autoplay

### 2.controls

指定是否显示播放控件，一般包含播放/暂停按钮、进度条、播放时间、音量调节滑块等控件（可以隐藏浏览器提供的播放控件，自己来实现一套播放控件，并使用 [Audio API] 来控制播放）。

属性值：
>1. controls

### 3.loop

指定音频是否循环播放。

属性值：
>1. loop

### 4.preload

指定在页面加载完成后如何下载音频文件。若已经指定 `autoplay`，则忽略本属性。

属性值：
>1. auto 加载全部内容
>2. metadata 仅加载元数据（音频信息）
>3. none 不加载

### 5.src

指定音频文件的 URL 地址。

### 6.muted

指定是否静音。

属性值：
>1. muted
