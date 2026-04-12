function findMin(arr){
    let Min = arr[0];
    let index = 0;
    for (let i = 1 ; i < arr.length; i++ ){
        if (arr[i]< Min){
            Min = arr[i]
            index =i
        }

    }
    return {Min,index};
}
console.log(findMin([43,5,6,7,2,3,1,8]));
console.log(findMin([89,79,56,54,32,2]));