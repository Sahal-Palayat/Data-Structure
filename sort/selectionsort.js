function selection(arr){
    const n=arr.length
    for(let i=0;i<n-1;i++){
        let small=i

        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[small]){
                small=j
            }
        }
        const temp=arr[i]
        arr[i]=arr[small]
        arr[small]=temp
    }
    return arr
}
const array=[34,5,5,3,4,5,6,78]
console.log(selection(array));