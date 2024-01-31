function sum(arr,index){
    if(index < 0 || index >arr.length){
        return 0
    }

    return arr[index]+sum(arr,index-1)
}

const array=[1,2,3,4,5]
console.log(sum(array,3));

