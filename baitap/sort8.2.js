function getDigit(arr) {
    let max = Math.max(...arr)
    for ( let exp =1;Math.floor(max / exp) > 0; ) {
        let buckets = Array.from({length: 10}, () => [])
        for (let num of arr) {
            let digit = Math.floor(num / exp) % 10
            buckets[digit].push(num)
        }
        arr = [].concat(...buckets)
    }
    return arr

}

console.log(getDigit([170, 45, 75, 90, 802, 24, 2, 66]));