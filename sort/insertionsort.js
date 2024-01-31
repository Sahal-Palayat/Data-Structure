function insertion(arr){
    const n=arr.length

    for(let i=0;i<n;i++){
        let curr=arr[i]
        let j=i-1

        while(j>=0&&arr[j]>curr){
            arr[j+1]=arr[j]
            j--;
        }
        arr[j+1]=curr
    }
    return arr
}
const array=[23,345,563,432,1,3,4]
console.log(insertion(array));

