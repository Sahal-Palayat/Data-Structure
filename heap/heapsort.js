function buildMaxHeap(arr){
    const n=arr.length
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
}

function heapSort(arr){
    const n=arr.length
    for(let i=n-1;i>=0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapify(arr,i,0)
    }
}

function heapify(arr,n,i){
    let largest=i
    const left=2*i+1
    const right=2*i+2

    if(left<n && arr[left]>arr[largest]){
        largest=left
    }
    if(right<n && arr[right]>arr[largest]){
        largest=right
    }

    if(largest!==i){
        [arr[i],arr[largest]]=[arr[largest],arr[i]]
        heapify(arr,n,i)
    }
}

function insertHeap(heap,value){
    heap.push(value)
    heapifyUp(heap,heap.length-1)
}

function heapifyUp(heap,i){
    const parentIndex=Math.floor((i-1)/2)

    if(parentIndex>=0&& heap[i]>heap[parentIndex]){
        [heap[i],heap[parentIndex]]=[heap[parentIndex],heap[i]]
        heapify(heap,parentIndex)
    }
}

function remove(heap){
    if(heap.length===0){
        return null
    }

    let maxValue=heap[0]
    lastValue=heap.pop()

    if(heap.length>0){
        heap[0]=lastValue
        heapify(heap,heap.length,0)
    }
    return maxValue
}

const array=[34,5,68,32,56,64]


insertHeap(array,899)
buildMaxHeap(array)
console.log(array);

