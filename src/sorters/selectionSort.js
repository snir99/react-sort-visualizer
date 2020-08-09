import { newTrace, addToTrace, swap } from '../utils/helpers.js';

const selectionSort = (array, length) => {
    let i, j, minIdx;
    const tempTrace = newTrace([...array]);
    const tempArray = [...array];
    
    // One by one move boundary of unsorted subarray 
    for (i = 0; i < length - 1; i++) 
    { 
        // Find the minimum element in unsorted array 
        minIdx = i;
        for (j = i + 1; j < length; j++) {
            addToTrace(tempTrace, tempArray, 'COMPARE', [minIdx, j], [minIdx, j]);
            if (tempArray[j] < tempArray[minIdx]) 
                minIdx = j; 
        }

        // Swap the found minimum element with the first element
        swap(tempArray, i, minIdx);
        addToTrace(tempTrace, tempArray, 'SWAP');
        addToTrace(tempTrace, tempArray, 'DONE', [], [], [i]);
    }

    addToTrace(tempTrace, tempArray, 'DONE', [], [], [length - 1]);
    return [...tempTrace];
}

export default selectionSort;