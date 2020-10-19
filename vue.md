# VUE
>   `kebab-case 短横线分隔命名`   
>   `PascalCase 驼峰命名`   
>   HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符
>   如果组件渲染时出现运行错误，错误将被传递至全局 ` Vue.config.errorHandler ` 配置函数。
## Attribute 动态绑定属性值
```
<button v-bind:disabled="isButtonDisabled">Button</button>
```
如果`isButtonDisabled`的值是`null`、`undefined`或false，则`disabled` attribute甚至不能被包含在渲染的`<button>`元素中、

## 动态属性绑定
```
<a v-bind:[attributeName]="url">...</a>
```
用方括号括起来的 JavaScript 表达式作为一个指令的参数,这里的 attributeName 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。例如，如果你的 Vue 实例有一个 `data` property `attributeName`，其值为 `"href"`，那么这个绑定将等价于 `v-bind:href`。

## “Mustache”语法 (双大括号) 

## v-for-object 在`v-for`里使用对象

## 在<template>上使用 `v-for`来渲染一段包含多个元素的内容

## v-for 与 v-if 一同使用
`v-for` 的优先级比 `v-if` 更高

## v-model
* `text` 和 `textarea` 元素使用 `value` property 和 `input` 事件;
* `checkbox` 和 `radio` 使用 `checked` property 和 `change` 事件;
* `select` 字段将 `value` 作为 prop 并将 `change` 作为事件;
```
    <input v-model="searchText">
等价于：
    <input
    v-bind:value="searchText"
    v-on:input="searchText = $event.target.value"
    >
```

** 复选框 **
```
 <input type="checkbox" v-model="toggle" true-value="yes" false-value="no">  
 // 当选中
 vm.toggle === 'yes';
 // 当没有选中时
 vm.toggle === 'no'
```
** 修饰符 **
* .lazy
* .number   将输入的值转为数值类型（例如字符串转为数值）
* .trim     过滤用户输入的首尾空白字符

## 组件

### 通过prop 像子组件传递数据
props: []
1. 数组语法
```
props: ['size', 'myMessage']  //不限数据的类型
```
2. 对象语法
```
props: {
    iconClass: {
        type: String,
        required: true
    },
    className: {
        type: Array,
        default: () => {}, //数组的默认值，必须这样写 | 对象或数组默认值必须从一个工厂函数获取
        validator: function(value){     //验证函数
            // 这个值必须匹配下列字符串中的一个
            return ['success', 'warning', 'danger'].indexOf(value) !== -1
        }
    }
}
```
### 监听子组件事件
子组件可以通过调用内建的 `$emit` 方法并传出事件名称
父级组件接受到事件后可以根据传出的事件名称调用调用响应的事件函数
从组件中传出一个值$emit('enlarge-txt', $event) 通过$event获得值
### 在模块系统中局部注册
```
    import ComponentA from './ComponentA'
    import ComponentC from './ComponentC'
    export default{
        components: {
            ComponentA,
            ComponentC
        }
    }
    可以使用了组件ComponentA、组件ComponentC
```
### 基础组件的自动化全局注册 ???
`require.context`

## prop传入一个对象的所有 property
>v-bind中没有参数，而组件中的props需要声明对象的每个属性     
>v-bind后跟随参数todo，组件中的props需要声明该参数，组件变可以通过todo来访问对象的属性   
*** 每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop ***

## prop 验证
* 类型检查
* 多种可能检查
* 必填的字符串
* 带有默认值的对象
* 自定义验证函数
```
propF: {
    validator: function(value){
        //这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
    }
}
```
>当prop验证失败会在控制台产生警告

### 非Prop的Attribute

## 自定义组件的v-model

## 组件插槽
* <slot><slot>
* 具名插槽
```
<slot name="header"><slot>
html: <template v-slot:header></template>
```
* 作用域插槽
* 动态插槽
* 具名插槽的缩写
以 ` # ` 代替 ` v-slot: `
```
    <template #header></template>
```

## 异步加载组件
```
Vue.component('async-webpack-example', function(resolve){
    // 异步请求
    resolve()
    reject()
})
```
## 访问父级组件实例
` vm.$parent `
## 访问子组件或子元素
```
<base-input ref="usernameInput"></base-input>
this.$refs.usernameInput
```
## 过滤器
```
filters: {
    capitalize: function(value){
        if(!value) return ''
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
}
```
或者在创建Vue实例之前全局定义过滤器：
```
Vue.filter('capitalize', function(value){
    if(!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})
```
当全局过滤器和局部过滤器重名时，会采用局部过滤器。
** 过滤器可以接受参数 **
```
    {{ message | filterA('arg1', arg2) }}
```
## 安全
** 永远不要将不可信任的内容作为模板内容使用 **
```
    new Vue({
        el: '#app',
        template: `<div>` + userProvidedString + `</div>`  //永远不要这样做
    })
```
# Vue 响应式原理
**shim可以将新的API引入到旧的环境中，而且仅靠就环境中已有的手段实现**
**向嵌套对象添加响应式property**
```
Vue.set(object, propertyName, value) 
```
**vm.$set(object, propertyName, value) 是全局 ` Vue.set ` 方法的别名**

**数组的变动**
```
    var vm = new Vue({
    data: {
        items: ['a', 'b', 'c']
    }
    })
    vm.items[1] = 'x' // 不是响应性的
    vm.items.length = 2 // 不是响应性的
```
实现响应式
```
Vue.set(vm.items, indexOfItem, newValue)
```
```
vm.items.splice(indexOfItem, 1, newValue)
```
解决length问题
```
vm.item.splice(newLength)
```
**由于Vue不允许动态添加根级响应式属性，所以必须在初始化实例前声明所有根级响应式的属性，哪怕是一个空值**

## 响应式更新队列

---------------------------------------------------------
# Vue的全局配置

## devtool
```
Vue.config.devtools = true 开发版
```
## errorHandler
```
Vue.config.errorHandler = function(err, vm, info){
    // handle error
    // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
    // 只在 2.2.0+ 可用
}
```

## profuctionTip
设置为` false `以阻止vue在启动时生成生产提示

# 全局API
### Vue.extend() 
使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
### Vue.nextTick()
### Vue.set()
### Vue.filter()
注册或获取全局过滤器
### Vue.component()
注册或获取全局组件
```
    // 注册组件，传入一个扩展过的构造器
    Vue.component('my-component', Vue.extend({ /* ... */ }))

    // 注册组件，传入一个选项对象 (自动调用 Vue.extend)
    Vue.component('my-component', { /* ... */ })

    // 获取注册的组件 (始终返回构造器)
    var MyComponent = Vue.component('my-component')
```
### Vue.use()
该方法需要在调用 new Vue() 之前被调用。安装插件
### Vue.mixin(mixin)
全局注册一个混入
### Vue.compile(template)
将一个模板字符串编译成 render 函数

# 选项/数据
### methods
**应该使用箭头函数来定义 method 函数** (例如 plus: () => this.a++)。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.a 将是 undefined。
### watch
一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象
```
watch: {
    a：function(){
        <!-- 当a发生改变时 -->
    }
}
```
# 选项/DOM
### el
**在实例挂载之后，元素可以用 vm.$el 访问**
### template

### render
```
new Vue({
  router,
  store,
  //components: { App }  vue1.0的写法
  render: h => h(App)    vue2.0的写法
}).$mount('#app')
```
ES5
```
render: h => h(App)
------------
render: function (createElement) {
    return createElement(
       'h' + this.level,   // tag name 标签名称
       this.$slots.default // 子组件中的阵列
    )
}
```
### renderError

# 选项/生命周期钩子

# 选项/组合
### parent
` this.$parent `访问父实例，子实例被推人` $children `数组中。
### mixins
 
### extends

# 选项/其它




## 特殊变量 $event 可以访问原始的DOM事件
``` 
    v-on:click="function('parameter', $event)"
```

## 事件修饰符 （修饰符可以串联）
* .stop     阻止事件传播（事件冒泡）
* .prevent  阻止事件默认行为
* .capture  
* .self
* .once
* .passive

## 按键修饰符
## 系统修饰符
### 鼠标按钮修饰符

## 方法
* ` Object.assign() `
* ` Vue.extend() `

# 总结
Vue与微信小程序有很多相似的地方，切记不要记混

