/**
 * 
 *  Factorial using stack implementation - fact(5) = 5 * 4 * 3 * 2 * 1 
 *  1. to store the values into array from 5,4,3,2,1
 *  2. return the multiplication of those values stored in the array
 */

const factorial = function(n){
     // declare array
     let stack = []
      while(n>0){
          stack.push(n--)
      }
      let final = 1 
      while(stack.length > 0 ){
          final = final * stack.pop()
      }
return final 
}
let fact = 5
const result = factorial(fact)
console.log({result,result})