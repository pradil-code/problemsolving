/*  Stack implementation using Prototype 

const Stack = function(){
    this.counter = 0
    this.storage = {}
}

Stack.prototype.push = function(value){
    this.storage[this.counter]=value
    this.counter ++
}

Stack.prototype.pop = function(){
    if (this.counter === 0) return undefined
    this.counter -- 
    const poppedItem = this.storage[this.counter]
    delete(this.storage[this.counter])
    return poppedItem
}

new push(3,3,4)
const resultSet = new pop()
console.log({result,result})
*/

/**
 *  
 * Stack implementation as an Array 
 * 
 

const push = function(array,value){
    array.push(value)
}

const pop = function (array){
    return array.pop()
}
const Stack = function (){
 const StackArray = [1,5,6,11,100]
 push(StackArray,44)
 const result = pop(StackArray)
 console.log({result,result})
}

Stack()
*/

/**
 *  Stack implementation using class
 */

class Stack{
    constructor(){
        this.count = 0
        this.storage = []
    }

    push(value){
        this.storage[this.count ++] = value
    }

    pop(){
        const data = this.storage[-- this.count]
        delete this.storage[this.count]
        return data 
    }
    clear(){
        this.count = 0
    }
    length(){
        return this.count 
    }
} 

const s = new Stack()

s.push(1)
s.push(3)
s.push(5)
console.log(s)
s.pop()
s.pop()
console.log(s)

