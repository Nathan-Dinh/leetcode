function maxSubarraySum(arr,num){
    let head = 0
    let sum = 0
    let temp = 0
    if(arr.length < num) return null
    for(let tail = 0, temp = 0; tail < arr.length; tail++){
        if(tail < num){
         temp += arr[tail]
        }else{
         temp -= arr[head]
         temp += arr[tail]
         head++
        }
        if(temp > sum) sum = temp
    }
    return sum
}

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null