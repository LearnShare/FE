Audio对象
====

参考：[HTMLMediaElement](https://developer.mozilla.org/zh-CN/docs/DOM/HTMLMediaElement "HTMLMediaElement")
[MediaElement](http://www.w3.org/TR/2012/CR-html5-20121217/embedded-content-0.html#media-element "media-element")

属性
----

### src

音频文件的URL。

	var src=audio.src; // 读取URL
	audio.src="music.mp3"; // 修改URL

### currentTime

当前播放时间（单位：秒）。

	var time=audio.currentTime; // 读取当前时间
	audio.currentTime=30; // 设置当前时间为30秒

### volume

音频的音量（范围：0.0-1.0）。

	var volume=audio.volume; // 读取音量
	audio.volume+=0.1; // 增大音量
	
### autoplay

音频是否自动播放（true/false）。

	var autoplay=audio.autoplay; // 读取自动播放状态
	audio.autoplay=true; // 设置音频自动播放

### controls

是否显示播放控件（true/false）。

### defaultMuted

是否默认静音（true/false）。

### defaultPlaybackRate

默认播放速度（>0.0~1.0-...）。

### duration

音频时长（只读，单位：秒）。

### ended

是否播放完毕（只读，true/false）。

### initialTime

可播放的起始时间（只读，单位：秒）。

### loop

是否循环播放（true/false）。

### muted

是否静音（true/false）。

### networkState

网络状态。

+ NETWORK_EMPTY/0 未加载文件
+ NETWORK_IDLE/1 网络空闲
+ NETWORK_LOADING/2 正在加载文件
+ NETWORK_NO_SOURCE/3 资源不可用

### paused

是否暂停（只读，true/false）。

### playbackRate

播放速度。

FF 中，范围是 0.25~5.0。  
Chrome 中，范围是 0.5~4.0。

### played

已播放时间范围（只读）。

timeRanges

### preload

预加载方式（none/metadata/auto）。

### readyState

媒体状态（只读）。

HAVE_NOTHING/0 不可用
HAVE_METADATA/1 媒体信息可用
HAVE_CURRENT_DATA/2 已加载当前播放数据
HAVE_FUTURE_DATA/3 已加载未来播放数据
HAVE_ENOUGH_DATA/4 数据充足

### seekable

用户可选播放范围。

TimeRanges 包含多个时间段的数组。
timeRanges.length 数组长度
timeRanges.start(i) 时间段i的起始时间
timeRanges.end(i) 时间段i的终止时间

### seeking

是否正在选择播放位置（拖动滑块）。

### buffered

已加载的时间段（timeRanges）。

方法
----

### play()

开始播放。

	audio.play(); // 开始播放

### pause()

暂停播放。

	audio.pause(); // 暂停播放

### load()

开始加载数据。

### canPlayType(DOMString)

return:
>1. probably 可播放
>2. maybe 可能可播放
>3. [empty] 不可播放

事件
----

### abort

文件载入被中止时触发。

### canplay

文件可开始播放时触发。

### canplaythrough

文件完全可播放时触发。（不需要暂停来缓冲）

### durationchange

文件时长改变时触发。

### emptied

播放列表为空时触发。

### ended

播放结束时触发。

### error

文件载入出错时触发。

### loadeddata

文件当前帧加载完成时触发。

### loadedmetadata

媒体信息加载完成时触发。

### loadstart

浏览器开始查找文件时触发。

### pause

播放被暂停时触发。

### play

开始播放时触发。

### playing

暂停或停止后，文件可播放时触发。

### progress

浏览器加载媒体文件时触发。

### ratechange

播放速度改变时触发。

### seeked

用户选择播放进度后触发。

### seeking

用户选择播放进度时触发。

### stalled

浏览器尝试加载媒体信息，但信息不可用时触发。

### suspend

浏览器有意不加载媒体信息时触发。

### timeupdate

播放位置改变时触发。

### volumechange

音量改变时触发。

### waiting

播放因需要换冲而暂停时触发。
