// Best way
function binarySearch(arr, num) {
    let head = 0;
    let tail = arr.length - 1;

    while (head <= tail) {
        let middle = Math.floor((head + tail) / 2);
        if (arr[middle] === num) {
            return middle;
        } else if (arr[middle] > num) {
            tail = middle - 1;
        } else {
            head = middle + 1;
        }
    }

    return -1;
}

// Worst way
function binarySearch(arr, num){
    let head = arr.length - arr.length
    let middle = Math.floor(arr.length/2)
    let tail = arr.length-1
    
    for(let i = 0; i < arr.length; i++){
        if(arr[head] === num) return head   
        if(arr[middle] === num) return middle
        if(arr[tail] === num) return tail
        if(arr[middle] > num){
            tail = middle   
            middle = Math.floor((head + tail)/2)
        }else{
            head = middle 
            middle = Math.floor((head + tail)/2)
        }
    }
    return -1 
}

binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1