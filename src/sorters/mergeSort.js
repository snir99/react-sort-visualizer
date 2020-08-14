import { newTrace, addToTrace, swap } from '../utils/helpers.js';

const mergeSort = (array, length) => {
    const tempArray = [...array];
    const tempTrace = newTrace([...array]);
    sort(tempArray, tempTrace, 0, length - 1);
    addToTrace(tempTrace, tempArray, 'DONE', [], [], [...tempArray.keys()]);
    return [...tempTrace];
}

// Merges two subarrays of arr[]. 
// First subarray is arr[l..m] 
// Second subarray is arr[m+1..r] 
// Inplace Implementation
const merge = (tempArray, tempTrace, start, mid, end) => { 
    let start2 = mid + 1; 
    
    addToTrace(tempTrace, tempArray, 'COMPARE', [mid, start2], [mid, start2]);
    // If the direct merge is already sorted 
    if (tempArray[mid] <= tempArray[start2]) { 
        return; 
    } 
  
    // Two pointers to maintain start 
    // of both arrays to merge 
    while (start <= mid && start2 <= end) { 
        
        addToTrace(tempTrace, tempArray, 'COMPARE', [start, start2], [start, start2]);
        // If element 1 is in right place 
        if (tempArray[start] <= tempArray[start2]) { 
            start++; 
        } 
        else { 
            const value = tempArray[start2]; 
            let index = start2; 
  
            // Shift all the elements between element 1 
            // element 2, right by 1. 
            while (index !== start) { 
                addToTrace(tempTrace, tempArray, 'SWAP');
                tempArray[index] = tempArray[index - 1]; 
                index--; 
            } 
            tempArray[start] = value; 
  
            // Update all the pointers 
            start++; 
            mid++; 
            start2++; 
        } 
    } 
} 

// Main function that sorts arr[l..r] using 
// merge() 
const sort = (tempArray, tempTrace, l, r) => { 
    if (l < r) { 
        // Find the middle point 
        const m = Math.floor((l + r) / 2); 

        // Sort first and second halves 
        sort(tempArray, tempTrace, l, m); 
        sort(tempArray, tempTrace, m + 1, r); 

        // Merge the sorted halves 
        merge(tempArray,tempTrace, l, m, r); 
    } 
} 

export default mergeSort;