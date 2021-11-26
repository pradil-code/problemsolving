/** 
 * 
 *  To return the indexes of the sum of two/three array elements equals to the target
 */

const input = [1,3,7,9,2,4,4,2,12,17,8,9,25,27]
const target = 100

const findSumThree = function(input,target){
    const output = []
    for(let i=0;i<input.length;i++){
        for(let j= i+1;j<input.length;j++){
            for(let k=j+1;k<input.length;k++){
                if(input[i]+input[j]+input[k] === target ){
                    output.push(input[i],input[j],input[k]) 
                   // output.push(i,j,k) // return the indexes of the array
                    return output
                 }
            }
        }
    }
    return null
}
const resultSet =  findSumThree(input,target)
console.log({resultSet,resultSet})