

const searchElementIndex = function(arr,target){
    let left = 0
    let right = arr.length -1 
    while(left <= right){
        let mid = Math.trunc((left + right)/2)
        if(arr[mid]=== target) return mid
        if(arr[mid] < target){
           left = mid + 1 
        }else{
          right = right - 1 
        }
    }
    return -1 
}

console.log("Binary search :", searchElementIndex([1, 3, 5, 7, 8],5));
console.log("Binary search :", searchElementIndex([1, 2, 3, 4, 5, 6, 7],0));
console.log("Binary search :", searchElementIndex([2, 8, 89, 120, 1000],120));