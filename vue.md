# VUE
<!-- 
    `kebab-case 短横线分隔命名`   
    `PascalCase 驼峰命名`   
    HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符
-->
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

*** 复选框 ***
```
 <input type="checkbox" v-model="toggle" true-value="yes" false-value="no">  
 // 当选中
 vm.toggle === 'yes';
 // 当没有选中时
 vm.toggle === 'no'
```
*** 修饰符 ***
* .lazy
* .number   将输入的值转为数值类型（例如字符串转为数值）
* .trim     过滤用户输入的首尾空白字符

## 组件

### 通过prop 像子组件传递数据
props: []
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

---------------------------------------------------------
# Vue的API
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

## 

