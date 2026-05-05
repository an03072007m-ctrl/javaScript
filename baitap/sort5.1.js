let arr =[10, 4, 5, 8, 6, 11, 26]

function quickSort(arr,k){
    if (arr.length <= 1)return arr[0];
    let pivot = arr[0]
    let L = []
    let R = []
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < pivot){
            L.push(arr[i])
        }else{
            R.push(arr[i])
        }

    }
    if (k < L.length){
        return quickSort(L,k)
    }
    if (k === L.length){
        return pivot
    }
    return quickSort(R,k-L.length-1);

}
console.log("so thu tu nho thu 3: ",quickSort(arr,2))
console.log("so thu tu nho thu 5: ",quickSort(arr,4))