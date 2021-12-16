const charCount = function (arr) {
    let result = [];
    let counter = 1;
    let obj = {};
    let start = 0 
    let end = arr.length - 1  

    while(start < end){
        if (arr[start] === arr[start+1]) {
            console.log(arr[start])
            if(obj[arr[start]] !== undefined){
                obj[arr[start]] = obj[arr[start]] + 1;
            }else{
                obj[arr[start]] = counter + 1;
            }
        } else {
          result.push(obj[arr[start],arr[start]])
          if(obj[arr[start+1]]){
             result.push(obj[arr[start+1]],arr[start+1])
             delete obj[arr[start+1]]
             console.log({obj,obj})
             obj[arr[start+1]] = counter;
          }else{
            obj[arr[start+1]] = counter;
          }  
        }
        start ++ 
    }
    return result
}

const arr = ['A','A','A','B','B','B','A','A']

/*
Out put = [3,'A',3,'B',2,'A']
*/
const result = charCount(arr)
console.log({result,result})
