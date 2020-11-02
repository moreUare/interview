# Array
## 数组转为字符串的方法
* Array.prototype.join(<parameter>)  返回 用parameter连接所有数组元素组成一个字符串（不会改变现有数组）
* ```var outputStrings = [];
     for( let i = 0, n = inputValues.length; i < n; ++i){
         outputStrings.push(String(inputValue[i]))
     }
  ```
## 数组常用方法
* push()    //在数组的末尾增加一个或多个元素，并返回数组的新长度
* pop()     //删除数组的最后一个元素，并返回这个元素
* shift()   //删除数组最前面（头部）的元素
* unshift() //在数组的开头增加一个或多个元素，并返回数组的新长度
* indexOf   //找出某个元素在数组中的索引
* splice()  //在任意的位置给数组添加或删除任意个元素
* slice()   //复制一个数组
* sort()    //对数组元素进行排序，并返回当前数组
* reverse() //颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个
## 数组访问方法
* concat()  //返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组
* join()    //连接所有数组元素组成一个字符串。
* slice     //抽取当前数组中的一段元素组合成一个新数组
* indexOf() //返回数组中的第一个与指定值相等的元素索引，如果找不到这样的元素的索引，则返回-1.
* lastIndexOf() //返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1
## Array.prototype.toString()
**返回一个由所有数组组合而成的字符串，遮蔽了原型链上的`Object.prototype.toString()`**
## Array.prototype.toLocaleString()
**返回一个由所有数组元素组合而成的本地化后的字符串，遮蔽原型链上的`Object.prototype.toLocaleString()`**
## Array.isArray() 
**用来判断某个变量是否是一个数组对象**
## Array.from()
**从类数组对象或者可迭代对象中创建一个新的数组实例**    
**Array.from(arrayLike[, mapFn[, thisArg]])**
`arrayLike` 想要转换成数组的伪数组对象或迭代对象。  
`mapFn`     如果指定了该参数，新数组中的每个元素会执行该回掉函数。  
`thisArg`   可选参数，执行回掉函数`mapFn`时`this`对象。
## Array.of()

## 数组迭代方法
* forEach(callback) callback(item, index, arr)
* every()   //如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false
* some()    //如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false
* filter()  //将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回
* map()     //返回一个由回调函数的返回值组成的新数组
* reduce()  //从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值
* reduceRight() //从右到左为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值
* values()  //返回一个数组迭代器对象，该迭代器会包含所有数组元素的值。
--------------------------------------------------------
# String
## 将字符串转为数组的方法
* String.prototype.split(<parameter>) 返回 用parameter将字符串分隔成一个数组
* [...string]
## String API(跟HTML无关的方法)
* charAt()      //返回特定位置的字符
* charCodeAt()  //返回表示给定索引的字符的Unicode的值
* concat()      //连接两个字符串文本，并返回一个新的字符串
* includes()    //判断一个字符串中是否包含其他字符串
* endsWith()    //判断一个字符串的是否以给定字符串结尾，结果返回布尔值。
* indexOf()     //从字符串对象中返回首个被发现的给定值的索引值，如果没有找到则返回-1
* lastIndexOf() //从字符串对象中返回最后一个被发现的给定值的索引值，如果没有找到则返回-1
* **match()**   //使用正则表达式与字符串相比较
* replace()     //被用来在正则表达式和字符串直接比较，然后用新的子串来替换被匹配的子串。
* search()      //对正则表达式和指定字符串进行匹配搜索，返回第一个出现的匹配项的下标
* slice()       //摘取一个字符串区域，返回一个新的字符串
* split()       //通过分离字符串成字串，将字符串对象分割成字符串数组
* startsWith()  //判断字符串的起始位置是否匹配其他字符串中的字符
* substr()      //通过指定字符数返回在指定位置开始的字符串中的字符
* substring()   //返回在字符串中指定两个下标之间的字符
* toLowerCase() //将字符串转换成小写并返回
* toUpperCase() //将字符串转换成大写并返回
* trim()        //去除字符串的开始和结尾的空格

## 数组方法重写
**myForEach**
```
Array.prototype.myForEach = function(callback, thisArg){
	for(let i = 0; i < this.length; i++){
		callback.call(thisArg, this[i], i, this)
	}
}

```
**myReduce**
```
Array.prototype.myReduce = function(callback, initialValue){
	if( this.length == 0 && initialValue == undefined){
		throw("empty array with no initial value");
	}else if( this.length > 0 && initialValue == undefined){
		var accumulator = this[0];
		for(let i = 1; i < this.length; i++){
			accumulator = callback(accumulator, this[i], i, this)
		}
		return accumulator;
	}else if( this.length == 0 && initialValue ){
		return initialValue;
	}else if( this.length > 0 && initialValue ){
		var accumulator = initialValue;
		for(let i = 0; i < this.length; i++){
			accumulator = callback(accumulator, this[i], i, this)
		}
		return accumulator;
	}
}
```



# if
* if(0) => false
* if(-1) => true
* if("") => false
* if(NUll) => false
* if(undefined) => false
* if(NAN) => false
* 判断一个值是否存在 if(value != undefined)



