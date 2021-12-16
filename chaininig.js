
// var arr = [
//     { name: 'Alice', age: 20},
//     { name: 'Bob', age: 33},
//     { name: 'Charlie', age: 45},
//     ];
    
// class Utils {
//     constructor(input){
//     this.input = input
//     }
//     static chain(input){
//     this.utils = new Utils(input)
//     return this.utils
//     }
//     map(f) {
//         return new Utils(this.input.map(f))
// }
// divideBy(x) {
// console.log(this)
// return new Utils(this.input.map(y => y / x ))
// }
// round() {
// return new Utils(this.input.map(y => Math.round(y)))
// }
// valueOf(){
// return this.input
// }
// }
// // console.log(Utils.chain([1,2,3]).map(x => x *
// // 2).divideBy(1).round().valueOf())

// console.log(Utils.chain(arr).map(x => x.age
//     ).divideBy(2).round().valueOf())



for(var i=0; i<5; i++){
   setTimeout(() => {
    console.log(`Case 2 :${i}`)
    }, i*1000);
    }


    var threeSum = function(nums) {
        nums.sort((a, b) => a - b);
        const result = [];
        
        for(let i = 0; i < nums.length; i++) {
            let low = i+1, high = nums.length-1, sum = 0;
            
            while(low < high) {
                sum = nums[i] + nums[low] + nums[high];
                
                if(sum === 0) {
                    result.push([nums[i], nums[low], nums[high]]);
                    while(nums[low+1] === nums[low]) low++;
                    while(nums[high-1] === nums[high]) high--;
                    low++;
                    high--;
                } else if(sum < 0) low++;
                else high--;
            }
            while(nums[i+1] === nums[i]) i++;
        }
        return result;    
    };