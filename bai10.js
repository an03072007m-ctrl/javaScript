function average(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / (arr.length )
}
console.log(average([2,4,6])) // mong đợi: 4