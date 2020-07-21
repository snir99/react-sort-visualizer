import React, { createContext, useReducer } from 'react';
import sortReducer from '../reducers/sortReducer';

const initialState = {
	array: [],
	originalArray: [],
	length: 10,
	doneElements: [],
	compareElements: [],
	visitedElements: [],
	trace: [],
	currentStep: 0,
	isSorting: false,
	sortingAlgorithm: 'Bubble sort',
	speed: 1,
	timeoutIds: [],
	stats: {
		swaps: 0,
		compares: 0
	}
}

export const SortContext = createContext();

const SortContextProvider = (props) => {
	const [data, dispatch] = useReducer(sortReducer, initialState);

	return (
		<SortContext.Provider value={{data, dispatch}}>
			{props.children}
		</SortContext.Provider>
	);
}

export default SortContextProvider;