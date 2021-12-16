let array = [1,7,8,2,3,5]
let target = 9

const two_sum = (array,target)=>{

    let dictionary = {}
     for (let i=0;i<array.length;i++){
        if(dictionary[array[i]] !== undefined){
              return [dictionary[array[i]],i]
        }else{
            dictionary[target-array[i]] = i 
        }
     }

}

const result = two_sum(array,target)
console.log({result,result})
