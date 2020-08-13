import { newTrace, addToTrace, swap } from '../utils/helpers.js';

const bubbleSort = (array, length) => {
	const tempArray = [...array];
	const tempTrace = newTrace([...array]);
	let i, j, swapped;
	
	for(i = 0; i < length - 1; i++) 
	{
		swapped = false;
		for(j = 0; j < length - i - 1; j++) 
		{
			addToTrace(tempTrace, tempArray, 'COMPARE', [j, j + 1], [j, j + 1]);
			if(tempArray[j] > tempArray[j + 1]) 
			{
				swap(tempArray, j, j + 1);
				addToTrace(tempTrace, tempArray, 'SWAP');
				swapped = true;
			}
			// addToTrace(tempTrace, tempArray, 'NONE');
		}
		addToTrace(tempTrace, tempArray, 'DONE', [], [], [length - i - 1]);

		// If no two elements were  
        // swapped by inner loop, then break 
		if(swapped === false) break;
	}

	const leftovers = [];
	for(let k = 0; k < length - i - 1; k++) {
		leftovers.push(k);
	}
	if(leftovers.length !== 0) {
		addToTrace(tempTrace, tempArray, 'DONE', [], [], leftovers);
	}

	return [...tempTrace];
}

export default bubbleSort;