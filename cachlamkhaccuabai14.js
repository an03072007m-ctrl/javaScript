function secondLargest(arr) {
    let uniq = [...new Set(arr)]; // 1️⃣
    if (uniq.length < 2) return null; // 2️⃣
    uniq.sort((a, b) => b - a); // 3️⃣
    return uniq[1]; // 4️⃣

}
console.log(secondLargest([8,7.8,8,6,4,5,3,3,8]));