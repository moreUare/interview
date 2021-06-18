## 解构赋值

### 数组的解构赋值
* 完全解构
* 不完全解构

## Promise对象
创建一个 `Promise` 实例
```
const promise = new Promise(function(resolve, reject) {
    // async code
    if(success){
        resolve(value)
    } else {
        reject(error)
    }
})

promise.then(function(res){
    console.log(res)
}).then(function(err){
    console.log(err)
})
```
* 调用`resolve`或`reject`并不会终结Promise的参数函数的执行 