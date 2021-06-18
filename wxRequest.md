```
wx.requset({
    url: 'test.php',
    data: {},           //string/object/ArrayBuffer
    header: {
        'content-type': 'application/json'  // 默认值 
    },         
    timeout: number,   //超时时间，单位为毫秒
    method: 'GET',     //HTTP 请求方法
    dataType： 'json',   //返回的数据格式（告诉服务器我想要的数据类型）
    responseType: 'text', //响应的数据类型 （内部data的数据类型）
    
    success: ()=> {},
    fail: ...,
    complete: ...
})



```
* content-type 标头表示客户端返回内容的内容类型(告诉服务器，我要发什么类型的数据)
application/x-www-form-urlencoded //表单默认的提交数据的格式