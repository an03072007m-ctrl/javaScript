let user = [
    {name: "A", score: 8},
    {name: "B", score: 5},
    {name: "C", score: 9}
]
function selectionSortUsers(arr) {
    let n = arr.length;
    for ( let i = 0; i < n -1; i++){
        let minIndex = i;
        for (let j = i + 1; j < n; j++){
            if(arr[j].score < arr[minIndex].score){
                minIndex = j;
            }
        }
        [arr[i],arr[minIndex]]=[arr[minIndex], arr[i]]
    }
    return arr;

}
console.log(selectionSortUsers(user))