/*
const Queue = function(){
    this.element = [] // implement Queue using Array 
}

Queue.prototype.push = function(value){
    this.element.push(value)
}

Queue.prototype.pop = function (){
    return this.element.shift()// removes first element from an Arry
}

Queue.prototype.push(2)
const result = Queue.prototype.pop()
console.log({result,result})

*/

/**
 *   Queue implementation using Class
 */

class Queue {
constructor(){
    this.queue = []
}
enqueue(value){
    this.queue.push(value)
}
dequeue(){
    return this.queue.shift()
}
length(){
    return this.queue.length
}
empty(){
 this.queue.length = 0
}
}

const q = new Queue()
q.enqueue(2)
q.enqueue(4)
q.enqueue(6)
q.enqueue(8)
console.log(q)
q.dequeue()
q.dequeue()
console.log(q)
console.log(q.length())
q.empty()
console.log(q)
console.log(q.length())