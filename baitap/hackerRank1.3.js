function matchingStrings(strings, queries){
    let result = [];
    for(let i = 0; i <queries.length; i++){
        let count = 0;
        for(let j = 0; j < strings.length; j++){
            if(strings[j]=== queries[i]){
                count++;
            }

        }result.push(count);

    }
    return result;

}
console.log(matchingStrings(['ab','ab','abc'],['ab','abc','bc']))