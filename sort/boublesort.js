function bubble(arr){
    const n=arr.length

    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                const temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}
const array=[53,6423,4,64,54,67,8,546]
console.log(bubble(array));