// var A = [ 6,3,4,1,2,3]
// //var A = [ -2, -3, -1, 3]

// const returnSmall = function(arr,value){
//     var start = 0
// while(arr[start]>value){
    
//     for(var i = 0;i<arr.length;i++){
//         if(arr[i]==value){
//              value ++ 
//         }
//     }
//     start ++ 
// }

// return value
// }

// const B = returnSmall(A,1)
// console.log({B,B})

/*
const unique = function(A){
    var stringer = A.split("");
console.log({stringer,stringer})

for(let i=0;i<stringer.length;i++){
    for(let j=i+1;j<A.length;j++){
        if(stringer[i]===stringer[j]){
            return false
        }
    }
}
return true 
}

let input = 'abcdd'
const result = unique(input)
console.log({result,result})
*/

const unique = function(A){
    var stringer = A.split("");
let obj = {}
var a = []
for(let i=0;i<stringer.length;i++){
        if(obj[stringer[i]] && obj[stringer[i]]>=1){
           a.push(stringer[i])
        }else{
            obj[stringer[i]] = 1 
           // a.push(stringer[i])
        }     
}
return a  
}

let input = 'abccccdd'
const result = unique(input)
console.log({result,result})