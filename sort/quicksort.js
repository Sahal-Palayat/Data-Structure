function quick(arr){
    if(arr.length<=1){
        return arr
    }

    const pivot=arr[Math.floor(arr.length/2)]

    let left =[]
    let right=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else if(arr[i]>pivot){
            right.push(arr[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]
}

const array=[87,9,54,855,247]
console.log(quick(array));

