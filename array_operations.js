class Obj {
    constructor(obj){
        this.obj = new Object(obj)
    }
//indexOf => returns -1 when no index found or returns index 
indexOf(someValue){
    for(let i=0;i<this.obj.length;i++){
        if(this.obj[i]===someValue){
            return i
        }
    }
    return -1 
}

includes(someValue,startIndex = 0){
    let i = startIndex
    while(i < this.obj.length){
        if(this.obj[i++]===someValue){
            return true
        }
    }
    return false 
}

fill(someValue,startIndex =0 , endIndex = this.obj.length - 1){
      
    let i = startIndex
    // do{
    //    this.obj[i++] = someValue
    // } while(i <= endIndex )
   // even while below works 
    while(i <= endIndex ){
        this.obj[i++] = someValue
     } 
    return this.obj

}
forEach(callback){
     for (const key in this.obj){
         this.obj[key] = callback(this.obj[key],key)
     }
     return this.obj
}
map(callback){
     const obj = {}
     console.log('pradeep:'+this.obj) 
    for(const key in this.obj){
        obj[key] = callback(this.obj[key],key)
    }
    return obj

}
filter(callback){
    const obj = {}
    for(const key in this.obj){
       if(callback(this.obj[key],key)){
           obj[key] = this.obj[key]
       }
    }
    return obj

}
some(callback){
    for(const key in this.obj){
        if(callback(this.obj[key],key)){
            return true 
        }
     }
     return false 
}
every(callback){
    for(const key in this.obj){
        if(callback(this.obj[key],key)){
            continue
        }else{
            return false
        }
     }
     return true 
}

find(callback){
    for(const key in this.obj){
        if(callback(this.obj[key],key)){
            return this.obj[key]
        }else{
            return undefined
        }
     }
     return undefined 
}
reduce(previous=0,current=0){
    
    for(let i=0;i<this.obj.length;i++){
        current = current + this.obj[i]
    }
    return current+previous 
}

}

const arr = [1,2,3,4]
const a = new Obj(arr)
const result = a.indexOf(4) //returns 3 
const result = a.includes(0) //returns 3 
const result = a.fill(0,0,4) //returns 3 
const result = a.reduce() //returns 3 
console.log({result,result})
/**
 *   Test Cases 
 
arr.forEach((ele)=>{
    console.log(ele)
})

const result = arr.map(ele => 
    ele * 3 
)
console.log(result)

const result = arr.some(ele => 
    ele % 2 === 0 
)
or this way of calling a callback
const result = arr.some((ele)=>{
    return ele%2 === 0
})

const result = arr.every((ele)=>{
    return ele%1===0
})
console.log(result)

const result = arr.find((ele)=>{
    return ele > 11
})
console.log(result)

*/