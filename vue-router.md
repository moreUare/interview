# vue-router

## 编程式导航

### router.push()

### router.replace()
跟 `router.push` 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录
### router.go(n)
这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步

## 命名路由
在创建 Router 实例的时候，在 `routes` 配置中给某个路由设置名称


## 命名视图
同时展示多个视图，而不是嵌套展示
``` 
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
```
```
components: {
    default: Foo,
    a: Bar,
    b: Baz
}
```
**一定要看清这里是`components`,而不是`component`**

## 重定向和别名
### 重定向
```
{ path: '/a', redirect: '/b'}
```
从`/a`重定向到`/b`

```
{ path: '/a', redirect: { name: 'foo' }}
```

重定向的目标也可以是一个命名的路由，甚至是一个方法 
```
{ path: '/a', redirect: to => {
    //方法接收 目标路由 作为参数
    //return 重定向的 字符串路径/路径对象
}}
```
### 别名 

## 路由组件传参
*使用`router-link`传参*
```
<router-link :to="{name:'content',query:{name:123}}" >content</router-link>

<router-link :to="{name:'content',params:{name:123}}" >content</router-link>

<router-link :to="{path:'/content',query:{name:123}}" >content</router-link>
```
* 使用path路径跳转 传参必须使用query 使用命名视图跳转 params和query都可以 
* 使用params如果路由路径上没有参数接收 刷新页面数据会丢失，使用query会把参数显示在地址栏路径上，此时刷新数据数据不会丢失

## 导航守卫

### 全局前置守卫
```
router.beforeEach((to, from, next) => {

})
```
* `to: Route` 即将要进入的目标路由对象
* `from: Route`: 当前导航正要离开的路由
* `next: Function `
1. next() 
2. next(false) 中断当前的导航
3. next("/") 跳转带新的路由
3. next(error) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调

### 全局后置钩子
```
router.afterEach((to, from) => {
    //...
})
```
这个钩子不接受`next`函数，也不会改变导航本身

### 路由独享的守卫
routes： [{
    path: '/foo',
    ...
    beforeEnter: (to, from, next) => {

    }
    ...
}]

## 完整的导航解析流程

1.  导航被触发。
2.  在失活的组件里调用 beforeRouteLeave 守卫。
3.  调用全局的 beforeEach 守卫。
4.  在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
5.  在路由配置里调用 beforeEnter。
6.  解析异步路由组件。
7.  在被激活的组件里调用 beforeRouteEnter。
8.  调用全局的 beforeResolve 守卫 (2.5+)。
9.  导航被确认。
10. 调用全局的 afterEach 钩子。
11. 触发 DOM 更新。
12. 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。