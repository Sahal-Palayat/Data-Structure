

function search(arr,target,start,end){
    if(start > end){
        return -1
    }

    const mid = Math.floor(start+end)/2

    if(arr[mid]===target){
        return mid
    }else if(arr[mid]>target){
        return search(arr,target,start,mid-1)
    }else{
        return search(arr,target,mid+1,end)
    }
}

const array=[1,2,3,4,5,6,7]

console.log(search(array,5,0,array.length-1));
