/**
 * Reverse String or check for palindrome
 * @param {*} word 
 * @returns string 
 *
 

const isPalindrome = function(word){
    let arr = []
    for(let i=0;i<word.length;i++){
        arr.push(word[i])
    }
    let rword = ''
    while(arr.length>0){
        rword = rword+arr.pop()
    }
    return rword
    // if (rword === word){
    //     return true
    // }
    // return false 
}
let word = 'silaki'
const result = isPalindrome(word)
console.log({result,result})

*/

/**
 *  Reverse Array using another arr 
 

 const reverseArray = function(arr){
    let rarr = []
    let a = arr.length
    while(rarr.length < a){
        rarr.push(arr.pop())
    }
    return rarr
}
let arr = [1,2,3,4,5,6,7,8,9,10]
const result = reverseArray(arr)
console.log({result,result})
*/

/**
 *  Reverse an array without using another arr or any modifications
 */

 const reverseArrayOptimal = function(arr){
    let start = 0
    let end = arr.length - 1 
    let temp = 0
    while(start < end){
       temp = arr[start] 
       arr[start]=arr[end] 
       arr[end]=temp
       start ++
       end --
    }
    return arr

}
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const result = reverseArrayOptimal(arr)
console.log({result,result})