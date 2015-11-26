Fetch
====

参考：[MDN: Fetch_API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
[MDN: Using_Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

Fetch 类似于 [XHR](./xhr.md)，提供了一系列进行网络访问的 API。目前仍处于实验状态，兼容的浏览器比例不算太高，还不推荐直接在线上使用（Github 提供了 Fetch 的 [polyfill](https://github.com/github/fetch)）。

```js
fetch(url, config)
    .then(function(response) {
      // got Response
    })
    .catch(function(error) {
      // some network error
    });
```

接口
----

+ [GlobalFetch](./global-fetch.md)
+ [Headers](./headers.md)
+ [Request](./request.md)
+ [Response](./response.md)
+ [Body](./body.md)
