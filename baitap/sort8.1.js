function radixSort(arr){
    let max = Math.max(...arr)
    for(let exp = 1;Math.floor(max/exp)> 0;exp *=10){
        let buckets = Array.from({length: 10},()=>[])
        for(let num of arr){
            let digit = Math.floor(num / exp)% 10;
            buckets[digit].push(num)
        }
        arr= [].concat(...buckets)
    }
    return arr
}
function radixNeg(arr){
    let negatives = []
    let positives = []
    for(let num of arr){
        if (num < 0){
            negatives.push(Math.abs(num))
        }else{
            positives.push(num)
        }
    }
    negatives = radixSort(negatives)
    positives = radixSort(positives)

    negatives.reverse()

    negatives = negatives.map(n => -n)

    return negatives.concat(positives);
}

let arr = [-43,-23,34,12,65,-98]
console.log(radixNeg(arr))