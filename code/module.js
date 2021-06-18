// var module1 = (function(){
//     var _count = 0;
//     var m1 = function(){
//         console.log(++_count)
//     };

//     var m2 = function(){
//         m1()
//         console.log(--_count)
//     }
//     return {
//         m1: m1,
//         m2: m2
//     }
// })();

// var _count = 100
// module1.m2()

// var module2 = new Object({
//     _count: 0,
//     m1: function(){
//         console.log(++_count)
//     },
//     m2: function(){
//         console.log(--_count)
//     }
// })

// module2.m1()

// 

// var module3 = function(){
//     return {
//         _count: 0,
//         m1: function(){
//             console.log(++_count)
//         },
//         m2: function(){
//             console.log(--_count)
//         } 
//     }
// }

// // module3().m1()

// var module1 = (function (mod){

// })
// module.exports = function(){
//     let _count = 0
//     return{
//         add: function(){
//             _count++
//         },
//         sub: function(){
//             console.log(this)
//             _count--
//         },
//         print: function(){
//             console.log(_count)
//         }
//     }
// }()

// module.exports = {
//     _count : 0,
//     add: function(){
//         this._count++
//     },
//     sub: function(){

//         _count--
//     },
//     print: function(){

//         console.log(this)
//         console.log(this._count)
//     }
// }

// 导出构造函数

export default function Animal(name, age) {
    if (this instanceof Animal) {
        this.name = name;
        this.age = age;
        this.takeAnimal = function () {
            console.log("I am animal")
        }
    } else {
        return new Animal(name, age)
    }
}
Animal.prototype = {
    sound: function () {
        return (this.name + ": " + "cried")
    },
    eatFood: function () {
        return (this.name + ": " + "eatFood")
    }
}

