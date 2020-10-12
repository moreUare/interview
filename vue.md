# VUE

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

## v-for-object 在v-for里使用对象