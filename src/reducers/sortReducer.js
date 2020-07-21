
const sortReducer = (state, action) => {
	switch(action.type) {
		case 'SET_ARRAY':
			return {...state, array: action.newArray};
		case 'SET_ORIGINAL_ARR':
			return {...state, originalArray: action.newOriginalArray};
		case 'SET_LENGTH':
			return {...state, length: action.newLength};
		case 'SET_DONE_ELEMENTS':
			return {...state, doneElements: action.newDoneElements};
		case 'SET_COMPARE_ELEMENTS':
			return {...state, compareElements: action.newCompareElements};
		case 'SET_VISITED_ELEMENTS':
			return {...state, visitedElements: action.newVisitedElements};
		case 'SET_TRACE':
			return {...state, trace: action.newTrace};
		case 'SET_CURRENT_STEP':
			return {...state, currentStep: action.newCurrentStep};
		case 'INCREASE_CURRENT_STEP':
			return {...state, currentStep: checkCurrentStepLimit(state)};
		case 'DECREASE_CURRENT_STEP':
			return {...state, currentStep: state.currentStep - 1};
		case 'SET_IS_SORTING':
			return {...state, isSorting: action.newIsSorting};
		case 'SET_SORTING_ALGORITHM':
			return {...state, sortingAlgorithm: action.newSortingAlgorithm};
		case 'SET_SPEED':
			return {...state, speed: action.newSpeed};
		case 'SET_TIMEOUTIDS':
			return {...state, timeoutIds: action.newTimeoutIds};
		case 'CLEAR_TIMEOUTIDS':
			clearTimeouts(state);
			return {...state, timeoutIds: []};
		case 'SET_STATS':
			return {...state, stats: action.newStats};
		case 'UPDATE_STATS':
			return {
				...state,
				stats: checkStatsAction(state, action)
			};
		case 'UPDATE_ELEMENTS':
			return {
				...state,
				array: action.step.array,
				visitedElements: action.step.visitedElements,
				compareElements: action.step.compareElements,
				doneElements: action.step.doneElements
			}
		case 'RESET':
			return {
				...state,
				doneElements: [],
				compareElements: [],
				visitedElements: [],
				isSorting: false,
				currentStep: -1,
				stats: {
					swaps: 0,
					compares: 0
				}
			}
		default:
			return state
	}
}

const checkCurrentStepLimit = ({ currentStep, trace }) => {
	if(currentStep < trace.length - 1) {
		return currentStep + 1;
	} else {
		return currentStep;
	}
}

const clearTimeouts = ({ timeoutIds }) => {
	timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
}

// direction indicates whether we will increase or decrease the selected stat
const checkStatsAction = ({ stats }, { step, direction }) => {
	switch(step.action) {
		case "SWAP":
			return {swaps: stats.swaps + direction, compares: stats.compares};
		case "COMPARE":
			return {swaps: stats.swaps, compares: stats.compares + direction};
		default:
			return stats;
	}
}

export default sortReducer;