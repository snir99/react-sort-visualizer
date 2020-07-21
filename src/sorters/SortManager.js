import bubbleSort from './bubbleSort';

export default class SortManager {
	constructor() {
		this.sortingAlgorithms = ['Bubble sort'];
	}

	getAllAlgorithms() {
		return this.sortingAlgorithms;
	}

	sort(tempArr, length, trace, algorithm) {
		switch(algorithm) {
			default: // Bubble sort
				bubbleSort(tempArr, length, trace);
				break;
		}
	}
}