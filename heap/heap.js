function buildMaxHeap(arr) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, i, arr.length);
    }
}

function heapify(heap, i, heapsize) {
    const l = 2 * i + 1;
    const r = 2 * i + 2;
    let k=i

    if (l < heapsize && heap[l] > heap[r]) {
        k = l;
    }
    if (r < heapsize && heap[r] > heap[l]) {
        k = r;
    }
    if (heap[k]>heap[i]) {
        [heap[k], heap[i]] = [heap[i], heap[k]];
        i=k;
    }
}


function insertToHeap(value, heap) {
    heap.push(value);
    heapifyUp(heap, heap.length - 1);
}

function heapifyUp(heap, i) {
    const parentIndex = Math.floor((i - 1) / 2);

    if (parentIndex >= 0 && heap[i] > heap[parentIndex]) {
        [heap[i], heap[parentIndex]] = [heap[parentIndex], heap[i]];
        heapifyUp(heap, parentIndex);
    }
}


function removeFromHeap(heap) {
    if (heap.length === 0) {
        return null;
    }

    let maxValue = heap[0];
    let lastValue = heap.pop();

    if (heap.length > 0) {
        heap[0] = lastValue;
        heapify(heap, 0, heap.length);
    }

    return maxValue;
}

function search(value, heap) {
    for (let i = 0; i < heap.length; i++) {
        if (heap[i] === value) {
            return true;
        }
    }
    return false;
}

function printHeap(heap) {
    for (let i = 0; i < heap.length; i++) {
        console.log(heap[i]);
    }
}

const arr = [3, 2, 6, 8, 9, 1];
buildMaxHeap(arr);
console.log("Intial heap:");
printHeap(arr);
insertToHeap(5, arr);
console.log("After insertion:");
printHeap(arr);
removeFromHeap(arr);
console.log("After removal:");
printHeap(arr);
console.log(search(-2, arr)); 
printHeap(arr);