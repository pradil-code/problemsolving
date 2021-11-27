/**
 * 
 *  ensure the expression are balanced {}()[]<> in the given expression 
 */

/*
const isBalance = function(expression){
    let stack = []  //push the expression to stack
     let beginnerArr = ['[','{','<','(']
     let endingArr =   [']','}','>',')']
     for(let i=0;i<expression.length;i++){
         if(beginnerArr.indexOf(expression[i]) !== -1){
            stack.push(expression[i])
         }
         if(endingArr.indexOf(expression[i]) !== -1){
             // to check if the stack is not empty
            if(stack.length === 0){
                return false
            }
            let index = endingArr.indexOf(expression[i])
            if(stack.pop()=== beginnerArr[index]){
               // inserted array is equal to the beginner array element based on the index of the element passed 
            }else{
                return false 
            }

         }
     }
     return stack.length === 0 ;
}

const expression = '<>'
const result = isBalance(expression)
console.log({result,result})
*/

/**
 *   Balance of Expression check using Char At 
 * 
 */

const isBalance = function (expression) {
    let stack = []

    for (let i = 0; i < expression.length; i++) {
        let c = expression.charAt(i)
        if (c === '[' || c === '(' || c === '<' || c === '{') {
            stack.push(c)
        } else if (c === ']') {
            if (stack.length === 0|| stack.pop() !== '[') {
                return false
            }
        } else if (c === ')') {
            if (stack.length === 0 || stack.pop() !== '(') {
                return false
            }
        } else if (c === '>') {
            if (stack.length === 0 || stack.pop() !== '<') {
                return false
            }
        } else if (c === '}') {
            if (stack.length === 0 || stack.pop() !== '{') {
                return false
            }
        }

    }
    return stack.length === 0
}


const expression = '<>{'
const result = isBalance(expression)
console.log({ result, result })
