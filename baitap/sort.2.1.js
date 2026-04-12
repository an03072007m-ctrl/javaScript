function  selectionSort(arr){
    let n = arr.length;
    for (let i = 0; i < n - 1; ++i ){
        let minIndex = i
        for (let j = i + 1;j < n ; ++j ){
            if (arr[j]> arr[minIndex]){
                minIndex = j;
            }
        }
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
    }
    return arr;
}
console.log(selectionSort([3,2,6,5,4,7]))