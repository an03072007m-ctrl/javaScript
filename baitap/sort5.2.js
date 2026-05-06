function quickSort(arr,t){
    if (arr.length<= 1)return arr[0]
    let pivot = arr[0]
    let L = []
    let R =[]
    for(let i = 1; i < arr.length; i ++){
        if (arr[i] < pivot){
            L.push(arr[i])
        }else{
            R.push(arr[i])
        }
    }
    if(t<R.length){
        return quickSort(R,t)
    }
    if (t === R.length){
        return pivot
    }
    return quickSort(L, t-R.length-1)
}
let arr =[3, 2, 1, 5, 6, 4]
console.log(quickSort(arr,1))