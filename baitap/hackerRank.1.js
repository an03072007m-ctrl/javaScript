function breakingRecords (scores){
    let max = scores[0]
    let min = scores[0]

    let maxCount = 0
    let minCount = 0

    for(let i = 1; i < scores.length; i++ ){
        let score = scores[i]
        if (score > max ){
            max = score
            maxCount ++
        }
        if(score <min ){
            min = score
            minCount ++
        }

    }
    return {
        maxCount,
        minCount,
        min,
        max
    }
}
const result = breakingRecords([12,24,10,25])
console.log(result.max)
console.log(result.min)
console.log(result.minCount)
console.log(result.maxCount)