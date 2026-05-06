function quicksleep(arr,k){
    if ( arr.length ===1)return arr [0]
    let pivot = arr[0]
    let L = []
    let R = []
    for(let i = 1; i < arr.length; i++){
        if( arr[i] < pivot){
             L.push(arr[i])
        }else{
            R.push(arr[i])
        }
    }
    if (k< L.length){
        return quicksleep(L,k)
    }
    if (k === L.length){
        return pivot
    }
    return quicksleep(R,k - L.length - 1)
}
function topKSmallest(arr,k){
    const kth = quicksleep(arr,k -1);
    let result = []
    for (let num of arr){
        if (num <= kth){
            result.push(num);
        }

    }
    return result
}
console.log (topKSmallest([7, 10, 4, 3, 20, 15],3))
