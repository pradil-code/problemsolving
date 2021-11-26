/*
const LinkedList = function(){
    this.head = null 
}

LinkedList.prototype.push = function(value){
   let node = {
        value : value,
        next : null 
    }
    // when no head node assign the value as head node
     if(!this.head){
         this.head = node
     }else{
         // if head node is present assign as current node and traverse till 
         // you find the last node ,
         current = this.head
         while(current.next){  // iterate till next node is found 
           current = current.next 
         }
         current.next = node  // push the node as next node 
     }
}
*/
/*
const LinkedList = function(){
    this.head = null 
}
LinkedList.prototype.push = function(value){
    let node = {
        value : value,
        next : null 
    }
    if(!this.head){
        this.head = node
    }else{
        current = current.next 
        while(current.next){
            current = current.next
        }
        current.next = node
    }
}

*/

/**
 *  Linked List implementation using Class
 */

class LinkedList{
    constructor(){
        this.head = null
    }
   
    push(value){
        let node = {
            value : value,
            next : null
        }
        if(!this.head){
            this.head = node
        }
        else{
           let current = this.head 
            while(current.next){
                current = current.next
            }
            current.next = node 
        }
    }
}
const l = new LinkedList()
l.push(3)
l.push(5)
l.push(1)
l.push(100)
console.log(JSON.stringify(l))