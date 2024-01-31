function buildMaxHeap(arr){
    const n=arr.length

    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
    return arr
}

function heapify(arr,n,i){
    let largest= i

    const left = 2*i+1
    const right= 2*i+2

    if(left < n&& arr[left]>arr[largest]){
        largest=left
    }

    if(right < n && arr[right] > arr[largest]){
        largest=right
    }

    if(largest!==i){
        [arr[i],arr[largest]]=[arr[largest],arr[i]]
        heapify(arr,i,n)
    }
}

function insertHeap(value,heap){
    heap.push(value)
    heapifyUp(heap,heap.length-1)
}


function heapifyUp(heap,i){
    const parentIndex=Math.floor(i-1)/2

    if(parentIndex >=0 && heap[i]> heap[parentIndex]){
        [heap[i],heap[parentIndex]]=[heap[parentIndex],heap[i]]
        heapifyUp(heap,parentIndex)
    }
}


function removeHeap(heap){
    if(heap.length===0){
        return null
    }

    let maxValue=heap[0]
    let lastValue=heap.pop()

    if(heap.length >0){
        heap[0]=lastValue
        heapify(heap,heap.length,0)
    }
    return maxValue
}



const arr=[12,65,2,5,7,23,76]



removeHeap(buildMaxHeap(arr))
console.log(arr);




