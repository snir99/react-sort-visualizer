import { newTrace, addToTrace, swap } from '../utils/helpers.js';

const quickSort = (array, length) => {
    const tempTrace = newTrace([...array]);
    const tempArray = [...array];

    sort(tempArray, tempTrace, 0, length - 1);
    addToTrace(tempTrace, tempArray, 'DONE', [], [], [...tempArray.keys()]);

    return [...tempTrace];
}

/* This function takes last element as pivot, 
    places the pivot element at its correct 
    position in sorted array, and places all 
    smaller (smaller than pivot) to left of 
    pivot and all greater elements to right 
    of pivot */
const partition = (tempArray, tempTrace, low, high) => { 
    const pivot = tempArray[high];  
    let i = (low-1); // index of smaller element
    for (let j = low; j < high; j++) 
    { 
        addToTrace(tempTrace, tempArray, 'COMPARE', [j, high], [j, high], [], high);

        // If current element is smaller than the pivot 
        if (tempArray[j] < pivot) 
        { 
            i++; 

            addToTrace(tempTrace, tempArray, 'SWAP', [], [], [], high);
            // swap arr[i] and arr[j] 
            swap(tempArray, i, j);
        } 
    } 

    addToTrace(tempTrace, tempArray, 'SWAP', [], [], [], high);
    // swap arr[i+1] and arr[high] (or pivot)
    swap(tempArray, i + 1, high); 

    return i+1; 
} 


/* The main function that implements QuickSort() 
    arr[] --> Array to be sorted, 
    low  --> Starting index, 
    high  --> Ending index */
const sort = (tempArray, tempTrace, low, high) => {
    if (low < high) 
    { 
        /* pi is partitioning index, arr[pi] is  
            now at right place */
        const pi = partition(tempArray, tempTrace, low, high); 

        // Recursively sort elements before 
        // partition and after partition 
        sort(tempArray, tempTrace, low, pi-1); 
        sort(tempArray, tempTrace, pi+1, high); 
    }
}

export default quickSort;