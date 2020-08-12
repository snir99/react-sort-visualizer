import { newTrace, addToTrace, swap } from '../utils/helpers.js';

const insertionSort = (array, length) => {
    const tempArray = [...array];
	const tempTrace = newTrace([...array]);
    let i, j, key;

    addToTrace(tempTrace, tempArray, 'NONE', [], [0]);

    for(i = 1; i < length; ++i) { 
        key = tempArray[i]; 
        j = i - 1; 

        /* Move elements of arr[0..i-1], that are 
            greater than key, to one position ahead 
            of their current position */
        addToTrace(tempTrace, tempArray, 'COMPARE', [j, i], [j, i]);
        while(j >= 0 && tempArray[j] > key) { 
            if(j < i - 1) {
                addToTrace(tempTrace, tempArray, 'COMPARE', [j, j + 1], [j, j + 1]);
            }
            swap(tempArray, j, j + 1);
            addToTrace(tempTrace, tempArray, 'SWAP');
            j = j - 1; 
        } 
        tempArray[j + 1] = key; 
    }

    addToTrace(tempTrace, tempArray, 'DONE', [], [], [...tempArray.keys()]);
    return [...tempTrace];
}

export default insertionSort;