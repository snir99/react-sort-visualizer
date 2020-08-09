import bubbleSort from './bubbleSort';
import selectionSort from './selectionSort';

const sortManager = {
	sortingAlgorithmsNames: ['Bubble sort', 'Selection sort'],
	sort(tempArr, length, algorithm) {
		switch(algorithm) {
			case 'Selection sort':
				return selectionSort(tempArr, length);
			default: // Bubble sort
				return bubbleSort(tempArr, length);
		}
	}
}

export default sortManager;