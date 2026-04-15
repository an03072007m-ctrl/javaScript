function insertion(s){
    for (let i = 1; i <s.length; i++){
        let key = s[i]
        let j = i - 1
        while (j >=0 && j > key.scores){
            s[j + 1] = s[j]
            j--
        }
        s[j +1] = key
    }
    return s
}
console.log(insertion( usest = [
    {names:"Pon",scores:6},
    {names:"Bin",scores: 8},
    {names: "Bi",scores:1}
]))