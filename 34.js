function longestIncreasingSubarray(a) {
    if (!a.length) return 0;
    let best = 1;
    let curr = 1;
    for (let i = 1; i < a.length; i++) {
        if (a[i] > a[i-1]) curr++;
        else curr = 1;
        best = Math.max(best, curr);
    }
    return best;
}

console.log(longestIncreasingSubarray([1,2,3,2,3,4]), "expected 3");
console.log(longestIncreasingSubarray([2,2,2]), "expected 1");
console.log(longestIncreasingSubarray([10,9,8]), "expected 1");
console.log(longestIncreasingSubarray([1,2,3,4,5]), "expected 5");
