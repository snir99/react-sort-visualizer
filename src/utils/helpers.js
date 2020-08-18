export const randomIntFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export const swap = (array, i, j) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

export const newTrace = (tempArray) => {
	return [{
		array: [...tempArray],
		action: "",
		compareElements: [],
		visitedElements: [],
		doneElements: []
	}]
}

export const addToTrace = (tempTrace, tempArray, action="", tempCompareElements = [], tempVisitedElements = [], tempDoneElements = [], pivot = -1) => {
	const lastPostion = tempTrace.length === 0 ? 0 : tempTrace.length - 1;
	tempTrace.push({
		array: [...tempArray],
		action,
		compareElements: [...tempCompareElements],
		visitedElements: [...addToVisitedElements([...tempTrace[lastPostion].visitedElements], [...tempVisitedElements])],
		doneElements: [...tempTrace[lastPostion].doneElements, ...tempDoneElements],
		pivot
	});
}

const addToVisitedElements = (prevVisited, toAdd) => {
	const newVisited = [...prevVisited];
	toAdd.map((item) => newVisited.includes(item) ? item : newVisited.push(item));
	return newVisited;
}