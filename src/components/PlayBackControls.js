import React, { useContext, useEffect } from 'react';
import { SortContext } from '../contexts/SortContext';
import sortManager from '../sorters/sortManager';
import { faPlay, faStepForward, faStepBackward,
		 faFastForward, faFastBackward, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PlayBackControls = () => {
	const { data, dispatch } = useContext(SortContext);

	useEffect(() => {
		if(data.isSorting === true) {
			pause();
			play();
		}
	}, [data.speed]);

	const sort = () => {
		dispatch({type: 'SET_IS_SORTING', newIsSorting: true});
		const tempTrace = sortManager.sort(data.array, data.length, data.sortingAlgorithm);
		dispatch({type: 'SET_TRACE', newTrace: [...tempTrace]});
		animate(tempTrace);
	}

	const animate = (tempTrace) => {
		const tempTimeoutIds = [];
		tempTrace.forEach((step, index) => {
			const timeoutId = setTimeout(() => {
				dispatch({type: 'UPDATE_ELEMENTS', step});
				dispatch({type: 'INCREASE_CURRENT_STEP'});
				dispatch({type: 'UPDATE_STATS', step, direction: 1});
			}, index * data.speed);
			tempTimeoutIds.push(timeoutId);
		});

		const timeoutId = setTimeout(() => {
			dispatch({type: 'SET_IS_SORTING', newIsSorting: false});
			dispatch({type: 'CLEAR_TIMEOUTSIDS'});;
		}, tempTrace.length * data.speed);

		tempTimeoutIds.push(timeoutId);

		dispatch({type: 'SET_TIMEOUTIDS', newTimeoutIds: [...tempTimeoutIds]});
	}

	const play = () => {
		dispatch({type: 'SET_IS_SORTING', newIsSorting: true});
		const tempTrace = data.trace.slice(data.currentStep);
		animate(tempTrace);
	}

	const pause = () => {
		dispatch({type: 'SET_IS_SORTING', newIsSorting: false});
		dispatch({type: 'CLEAR_TIMEOUTIDS'});
	}

	const handlePlayPause = () => {
		if(data.currentStep === -1) { // Initiale sort
			sort();
		} else if(data.isSorting === true) { // pause
			pause();
		} else if(data.currentStep < data.trace.length - 1) { // continue
			play();
		}
	}

	const handleStepForward = () => {
		const tempCurrentStep = data.currentStep;
		if(tempCurrentStep < data.trace.length - 1) {
			const step = [data.trace[tempCurrentStep + 1]];
			animate(step);
		}
	}

	const handleStepBackward = () => {
		const tempCurrentStep = data.currentStep;
		if(tempCurrentStep > 0) {
			const prevStep = data.trace[tempCurrentStep - 1];
			const currentStep = data.trace[tempCurrentStep];
			dispatch({type: 'UPDATE_ELEMENTS', step: prevStep});
			if(data.currentStep) {
				dispatch({type: 'UPDATE_STATS', step: currentStep, direction: -1});
			}
			dispatch({type: 'DECREASE_CURRENT_STEP'});
		}
	}

	const handleRestart = () => {
		dispatch({type: 'RESET'});
		dispatch({type: 'CLEAR_TIMEOUTIDS'});
		dispatch({type: 'SET_ARRAY', newArray: [...data.originalArray]});
	}

	const calculateStats = () => {
		let swaps = 0, compares = 0;
		data.trace.forEach((step) => {
			if(step.action === "SWAP") {
				swaps++;
			} else if(step.action === "COMPARE") {
				compares++;
			}
		});
		return {swaps, compares};
	}

	const handleFinalize = () => {
		dispatch({type: 'CLEAR_TIMEOUTIDS'});
		dispatch({type: 'UPDATE_ELEMENTS', step: data.trace[data.trace.length - 1]});
		dispatch({type: 'SET_CURRENT_STEP', newCurrentStep: data.trace.length - 1});
		dispatch({type: 'SET_STATS', newStats: calculateStats()});
		dispatch({type: 'SET_IS_SORTING', newIsSorting: false});
	}

	// NOTE: useEffect above handles the pause and replay with the new speed
	const handleSpeed = (e) => {
		dispatch({type: 'SET_SPEED', newSpeed: e.target.value});
	}

	const isForwardDisabled = (data.currentStep >= data.trace.length - 1) || 
							  (data.trace.length === 0) || (data.isSorting);
	const isBackwardDisabled = (data.currentStep <= 0) || (data.isSorting);
	const isRestartDisabled = data.currentStep <= 0;
	const isFinalizeDisabled = (data.trace.length === 0) || (data.currentStep >= data.trace.length - 1);

	return (
		<div className="playback-controls">
			<button onClick={() => handleRestart()}
					disabled={isRestartDisabled}
					className="restart">
					<FontAwesomeIcon icon={faFastBackward}/>
			</button>
			<button onClick={() => handleStepBackward()}
					disabled={isBackwardDisabled}
					className="backward">
					<FontAwesomeIcon icon={faStepBackward}/>
			</button>
			<button onClick={() => handlePlayPause()}
					id="play-pause">
					{data.isSorting ? <FontAwesomeIcon icon={faPause}/> : <FontAwesomeIcon icon={faPlay}/>}
			</button>
			<button onClick={() => handleStepForward()}
					disabled={isForwardDisabled}
					className="forward">
					<FontAwesomeIcon icon={faStepForward}/>
			</button>
			<button onClick={() => handleFinalize()}
					disabled={isFinalizeDisabled}
					className="finalize">
					<FontAwesomeIcon icon={faFastForward}/>
			</button>

			<div className="speed">
				fast
				<input type="range" 
						min="10" 
						max="200"
						value={data.speed}
						onChange={(e) => handleSpeed(e)} 
						className="slider" 
						id="speedRange"
				/>
				slow
			</div>
		</div>
	);
}

export default PlayBackControls;