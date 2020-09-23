# interview
## 用递归算法实现，数组长度为5且元素的随机数在2-32间不断重复的值
```
var buildArray = (arr, length, min, max) => {
	let num = Math.floor(Math.random(max - min)) + min;
	if(!arr.includes(num)) arr.push(num);
	return length == arr.length ? arr : buildArray(arr, length, min, max)
}
```
