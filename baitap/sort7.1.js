function countingSort(arr){
    let max = Math.max(... arr)
    let count = new Array(max +1).fill(0)
    for ( let num of arr ){
        count[num]++;
    }
    let result =[]
    for(let i = 0; i < count.length; i++){
        while (count[i] > 0){
            result.push(i)
            count[i]--
        }
    }
    return result
}
console.log(countingSort([1,4,1,2,7,5,2]))