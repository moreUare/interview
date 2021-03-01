# interview
## 用递归算法实现，数组长度为5且元素的随机数在2-32间不断重复的值
```
var buildArray = (arr, length, min, max) => {
	let num = Math.floor(Math.random(max - min)) + min;
	if(!arr.includes(num)) arr.push(num);
	return length == arr.length ? arr : buildArray(arr, length, min, max)
}
```
## $.ajax()

## 闭包

## Object方法
```
Object.assign(target, source, ...) （修改target的值并返回）
target 目标对象
source 源对象 （多个）
```
### Object.prototype.hasOwnProperty()
**返回一个布尔值 ，表示某个对象是否含有指定的属性，而且此属性非原型链继承的**
### Object.prototype.isOwnProperty()
**返回一个布尔值，表示指定的对象是否在本对象的原型链中**
--------------------------------------------------------------
## 表达式与运算符

### instanceof 
**instanceof运算符**用于检测构造函数的`prototype`属性是否出现在某个实例对象中的原型链

### 属性访问器
**属性访问器提供了两种方式用于访问一个对象的属性，它们分别是点号和方括号**
>object.property 	   
>object['property'] 	   
```
const person1 = {};
person1['firstname'] = 'Mario';
person1['lastname'] = 'Rossi';

console.log(person1.firstname);
// expected output: "Mario"

const person2 = {
  firstname: 'John',
  lastname: 'Doe'
};

console.log(person2['lastname']);
// expected output: "Doe"
```
### async function
```
var app = async function(){
	await f1();
	await f2();
}
f1(){}
f2(){}
app()
???
```

### cookie 和 session
>我们今天登录了一个京东的账号。过几天重新打开京东这个页面，发现账号还在登录的状态上。这个就是存在客户端。使用cookie.
>我在北京用京东放了一件衣服在购物车，我爸妈在老家用我的账号登录，发现了我的购物车有这件衣服。这种是存在服务器上的叫sesssion.
#### cookie特点
* 存储的大小有限制：一般浏览器规定同源下最多只能存储4KB大小
* cookie有过期时间，时间我们可以自己来设置，一般不超过一个月
* cookie不稳定，因为我们可以使用安全卫士或者浏览器的垃圾清理功能把coookie移除掉
* 用户可以根据自己的需求，开启无痕浏览或者隐身模式，这样cookie就不能进行存储了
* cookie不是严格意义上的本地存储，它和服务器之间是有关联的
`cookie`是`document`对象的一个属性，值是string类型
```
	document.cookie = "username = John"
```
### 异步操作一般使用回掉函数

## in关键字
**格式： (变量 in 对象)** 判断对象/数组是否含有该元素

## typeof
