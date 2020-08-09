import bubbleSort from './bubbleSort';

const sortManager = {
	sortingAlgorithmsNames: ['Bubble sort'],
	sort(tempArr, length, algorithm) {
		switch(algorithm) {
			default: // Bubble sort
				return bubbleSort(tempArr, length);
		}
	}
}

export default sortManager;