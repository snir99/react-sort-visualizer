import React, { useEffect, useContext } from 'react';
import { SortContext } from '../contexts/SortContext';
import { randomIntFromInterval } from '../utils/helpers.js';
import sortManager from '../sorters/sortManager';
const shortid = require('shortid');

const TopBar = () => {
	const { data, dispatch } = useContext(SortContext);

	useEffect(() => {
		generateArray();
	}, [data.length]);

	const generateArray = () => {
		dispatch({type: 'RESET'});
		dispatch({type: 'CLEAR_TIMEOUTIDS'});
		const tempArray = [];
		for(let i = 0; i < data.length; i++) {
			tempArray.push(randomIntFromInterval(7, 107));
		}
		dispatch({type: 'SET_TRACE', newTrace: []});
		dispatch({type: 'SET_ARRAY', newArray: [...tempArray]});
		dispatch({type: 'SET_ORIGINAL_ARR', newOriginalArray: [...tempArray]});
	}

	const handleLength = (e) => {
		dispatch({type: 'SET_LENGTH', newLength: e.target.value});
	}

	const handleAlgorithmSelect = (e) => {
		dispatch({type: 'RESET'});
		dispatch({type: 'CLEAR_TIMEOUTIDS'});
		dispatch({type: 'SET_TRACE', newTrace: []});
		dispatch({type: 'SET_ARRAY', newArray: data.originalArray});
		dispatch({type: 'SET_SORTING_ALGORITHM', newSortingAlgorithm: e.target.value});
	}

	return (
		<header className="header">
				<input className="menu-btn" type="checkbox" id="menu-btn" />
				<label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
			
			<div className="logo">Sort Visualizer</div>
			
			<section className="menu">
				<div className="algorithm-select">
					<select name="Sorting Algorithm" 
							id="algorithm" 
							onChange={(e) => handleAlgorithmSelect(e)}
							value={data.sortingAlgorithm}>
						{sortManager.sortingAlgorithmsNames.map((value) => 
							<option value={value}
									key={shortid.generate()}
							>{value}</option>)}
					</select>
				</div>

				<div className="array-size">
					<input type="range" 
						   min="5" 
						   max="100"
						   value={data.length}
						   onChange={(e) => handleLength(e)} 
						   className="slider" 
						   id="myRange" 
					/>
					<span className="range-value">{data.length}</span>
				</div>

				<div className="randomize-btn">
					<button onClick={() => generateArray()}>Randomize</button>
				</div>
			</section>
		</header>
	);
}

export default TopBar;