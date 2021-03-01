// var a  = async function(){
//     await f1();
//     await f2();
//     return x
// }
// var x = 2;
// let f1 = function(){
//     setTimeout(() => {
//         x = 4
//     }, 2000)
// }
// let f2 = () => {
//     setTimeout(()=>{
//         console.log(x)
//     }, 2000)
// }

// a()
// -----------------------------------------------------------
// function Point(x, y){
//     if(this instanceof Point){
//         this.x = x;
//         this.y = y; 
//         add = function(){
//             return this.x + this.y
//         }
//     }else{
//         return new Point(x, y)
//     }
// }
// Point.prototype.add = function(){
//     return this.x - this.y
// }
// var p = Point(1, 2)
// console.log(p)
// -------------------------------------------------------------
// 将数组转成对象，属性是里面的元素，属性值是元素的个数
// var arr = [12, 56, 12, 56, 2, 56, 89, 101];
// var mUa = (array) => {
//     if(Array.isArray(array)){
//         let _as = {};
//        array.forEach(function(item, index, arr){
//             _as[item] = item in _as && _as.hasOwnProperty(item) ?  ++_as[item] : 1 
//        })
//        return JSON.stringify(_as)
//     }else{
//         return;
//     }
// }
// var as = mUa(arr);
// console.log(as)
// --------------------------------------------------------------
// Js创建、写入、读取本地文件
var fs = require('fs');
// 异步追加文件内容
// var record = function(file = "input.txt", content = ""){
//     fs.appendFile(file, content, function(err){
//         if(err){
//             return console.error(err);
//         }
//         console.log("数据写入成功")
//         console.log("----------------我是分割线----------------")
//         console.log("读取写入的数据")
//         fs.readFile(file, function(err, data){
//             if(err){
//                 return console.error(err);
//             }
//             console.log("异步读取文件数据：" + data.toString());
//         })
//     })
// }
// try{
//     { let a = 0}
//     console.log(a)
// }catch(err){
//     let article = "1: " + err + '\r\n'
//     record('input1.txt', article)
// }
// Array.from()
// var person = {
//     name: 'ge',
//     age: 19,
//     gander: "male"
// }
// if('name' in person) console.info("yes")
// console.log(person.name)




// 异步读取
// fs.readFile('input.txt', function(err, data){
//     if(err){
//         return console.error(err)
//     }
//     console.log("异步读取:" + data.toString());
// })
// 同步读取
// var data = fs.readFileSync('input.txt');
// console.log("同步读取:" + data.toString());
// 打开文件
// 异步打开文件
// console.log("准备打开文件！")
// fs.open('input.txt', 'r+', function(err,fd){
//     if(err){
//         console.error(err);
//     }
//     console.log("文件打开成功！")
// })
// fs.stat('input.txt', function(err, stats){
//     if(err){
//         return console.error(err);
//     }
//     console.log(stats);
//     console.log("读取文件信息成功");

//     //监测文件类型
//     console.log("是否为文件(isFile)?" + stats.isFile());
//     console.log("是否为目录(isDirectory)?" + stats.isDirectory());
// })

// fs.readdir('../code', function(err, files){
//     if(err){
//         return console.error(err);
//     }
//     files.forEach(function(file){
//         console.log(file)
//     })
// })
// 重写forEach()
// Array.prototype.forEach = function(callback, thisArg){
// 	console.log(this)
// }
// var tempArr = {name: "ge"}

// var arr = [12, 56, 12, 56, 2, 56, 89, 101];
// let callback = function(item, index, arr){
//     console.log(item)
//     console.log(this)
// }

// Array.prototype.myForEach = function(callback, thisArg){
// 	for(let i = 0; i < this.length; i++){
// 		callback.call(thisArg, this[i], i, this)
// 	}
// }

// arr.forEach( callback)
// arr.myForEach(callback, tempArr)
// 重写reduce()
// var arr = [1, 2];
// let callback = function(accumulator, currentValue, currentIndex, srcArr){
// 	return accumulator + currentValue
// }
// var v = arr.reduce(callback)
// console.log(v)
// Array.prototype.myReduce = function(callback, initialValue){
// 	//先判断第二个参数是否存在
// 	if(arguments[1]){
// 		if(this.length == 0){
// 			return initialValue
// 		}else{
// 			let accumulator = initialValue;
// 			for(let i = 0; i < this.length; i++){
// 				accumulator = callback(accumulator, this[i], i, this)
// 			}
// 			return accumulator
// 		}
// 	}else{
// 		throw("empty array with no initial value")
// 	}

// }
// var arr = [2, 3, 4]
// let callback = function(accumulator, currentValue, currentIndex, srcArr){
// 	return accumulator + currentValue
// }
// var v = arr.reduce(callback, 1)
// console.log(v)

// Array.prototype.myReduce = function(callback, initialValue){
// 	if( this.length == 0 && initialValue == undefined){
// 		throw("empty array with no initial value");
// 	}else if( this.length == 0 && initialValue ){
// 		return initialValue;
// 	}else if( this.length > 0 && initialValue == undefined){
// 		var accumulator = this[0];
// 		for(let i = 1; i < this.length; i++){
// 			accumulator = callback(accumulator, this[i], i, this)
// 		}
// 		return accumulator;
// 	}else if( this.length > 0 && initialValue ){
// 		var accumulator = initialValue;
// 		for(let i = 0; i < this.length; i++){
// 			accumulator = callback(accumulator, this[i], i, this)
// 		}
// 		return accumulator;
// 	}
// }
// var value = arr.myReduce(callback, 1)
// console.log(value)

// let { foo: bar, foo: atz} = { foo: "aaa"}
// console.log(bar)
// console.log(atz)

// let {foo: {bar: value}} = {foo: {bar: "value"}} 
// console.log(value)
// console.log(foo)

// var Person = {
// 	name: "ge",
// 	age: 21,
// 	gander: "male"
// }

// let { name, age, gander } =  Person 
// console.log(name + ":" + age + ":" + gander)

// let x;
// ({x} = {x: 1})
// console.log(x)

// function* helloWorldGenerator() {
// 	yield 'hello';
// 	yield 'world';
// 	return 'ending'
// }
// var hw = helloWorldGenerator();
// for(let i = 0; i < 6; i++){
// 	console.log(hw.next());
// }

// var add = function(max, min){
// 	return max + min
// }
// var sub = function(max, min){
// 	return max - min
// }

// var operate = function*(max, min){
// 	yield add(max, min)
// 	yield sub(max, min)
// 	return "over"
// }

// var op = operate(3, 2)
// for(let i = 0; i < 4; i++){
// 	console.log(op.next());
// }

// var it = makeIterator(['a', ' b']);

// function makeIterator(array){
// 	var nextIndex = 0;
// 	return {
// 		next: function(){
// 			return nextIndex < array.length ?
// 			{ value: array[nextIndex++], done: false } :
// 			{ value: undefined, done:true };
// 		}
// 	}
// }

// for(let i = 0; i < 3; i++){
// 	console.log(it.next());
// }

// let arr = ['a', 'b', 'c'];
// let iter = arr[Symbol.iterator]();

// for(let i = 0; i < 4; i++){
// 	console.log(iter.next());
// }

// class RangeIterator {
// 	constructor(start, stop){
// 		this.value = start;
// 		this.stop = stop;
// 	}

// 	[Symbol.iterator]() { return this; }

// 	next() {
// 		var value = this.value;
// 		if(value < this.stop) {
// 			this.value++;
// 			return {done: false, value: value};
// 		}
// 		return {done: true, value: undefined};
// 	}
// }
// function range(start, stop){
// 	return new RangeIterator(start, stop)
// }

// for(var value of range(0, 3)){
// 	console.log(value);
// }

// function Obj(value){
// 	this.value = value;
// 	this.next = null;
// }
// Obj.prototype[Symbol.iterator] = function(){
// 	var iterator = {next: next};
// 	var current = this;
// 	function next(){
// 		if(current){
// 			var value = current.value;
// 			current = current.next;
// 			return { done: false, value: value };
// 		} else {
// 			return { done: true }
// 		}
// 	}
// 	return iterator;
// }
// var one = new Obj(1);
// var two = new Obj(2);
// var three = new Obj(3);

// one.next = two;
// two.next = three;

// for(var i of one){
// 	console.log(i)	//1, 2, 3
// }

// let [head, ...tail] = [1, 2, 3, 4, 5]
// let header = "header"
// console.log(...header)

// let x = 1;
// let y = 2;
// ({x, y} = {x: y, y: x})
// console.log(x + "|" + y)

// [x, y] = [y, x]
// console.log(x + "|" + y)

// let person = {
// 	name: 'ge',
// 	age: 24,
// 	gander: 'male'
// }
// console.log(person)

// const a = 2172141653n;
// const b = 15346349309n;

// // BigInt
// console.log(a*b);

// console.log(Number(a)*Number(b))

// let a = 42;
// let b = 42n;
// console.log( a === b )

// function getAge(name, district){
// 	console.log(arguments[1] === undefined)	
// }
// getAge("ge", undefined)

// let [a, [b, c], d] = [1, [2, 3], 4]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// function log(x, y){
// 	y = y || 'world';
// 	console.log(x, y);
// }
// log('Hello')
// log('Hello', 'China')
// log('Hello', '')

// --------------------------------------
// function add (...values) {
// 	let sum = 0;

// 	console.log(values)
	
// 	for(var val of values) {
// 		sum += val;
// 	}
	
// 	return sum;
// }

// add(2, 5, 3)
//----------------------------------------
// console.log(...[1, 2, 3]);
// let val = Math.max(...[14, 3, 77])
// console.info(val)

// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// // let arr = arr1.concat(arr2);
// // console.log(arr + ":" +arr1)
// let arr = arr1.push(...arr2)
// console.log(arr1)

// var a = "a";
// console.log(a);

// var a1 = [1, 2];
// var a2 = [...a1];

// a2[0] = 2;
// console.log(a1)

// var a = [...[ 'g', 'z', 'w' ]]
// console.log(a)

// Symbol
// const obj = {
//     toString() {
//         return 'abc';
//     }
// }
// const sym = Symbol(obj)
// console.log(sym) 

// console.log({...["ge", "zhi", "wen"]})
class Point {
    constructor(x, y){
        this.x = x;
        this.y = y
    }
    toString () {
        return "(" + this.x + "," + this.y + ")";
    }
}
console.log(Point)

