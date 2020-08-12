import bubbleSort from './bubbleSort';
import selectionSort from './selectionSort';
import insertionSort from './insertionSort';

const sortManager = {
	sortingAlgorithmsNames: ['Bubble sort', 'Selection sort', 'Insertion sort'],
	sort(tempArr, length, algorithm) {
		switch(algorithm) {
			case 'Selection sort':
				return selectionSort(tempArr, length);
			case 'Insertion sort':
				return insertionSort(tempArr, length);
			default: // Bubble sort
				return bubbleSort(tempArr, length);
		}
	}
}

export default sortManager;