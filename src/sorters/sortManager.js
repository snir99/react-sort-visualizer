import bubbleSort from './bubbleSort';
import selectionSort from './selectionSort';
import insertionSort from './insertionSort';
import quickSort from './quickSort';
import mergeSort from './mergeSort';

const sortManager = {
	sortingAlgorithmsNames: [
		'Bubble sort', 
		'Selection sort', 
		'Insertion sort', 
		'Quick sort',
		'Merge sort'
	],
	sort(tempArr, length, algorithm) {
		switch(algorithm) {
			case 'Selection sort':
				return selectionSort(tempArr, length);
			case 'Insertion sort':
				return insertionSort(tempArr, length);
			case 'Quick sort':
				return quickSort(tempArr, length);
			case 'Merge sort':
				return mergeSort(tempArr, length);
			default: // Bubble sort
				return bubbleSort(tempArr, length);
		}
	}
}

export default sortManager;