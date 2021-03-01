// var num = require('./module.js')
// console.log(num)
// num.add()
// num.add()
// num.print()

// console.log(num._count)

import Animal from './module.js'
export default function Cat(name, age){
    if(this instanceof Cat){
        this.name = name;
        this.age = age;
    }else{
        return new Cat(name, age)
    }
}

Cat.prototype = {
    ...Animal.prototype,
    sound : function(){
        return (`cat is crying`)
    },
    catMiao : function() {
        console.log("miao miao miao")
    }
}

Cat.prototype.constructor = Cat;

