import React, { useContext } from 'react';
import { SortContext } from '../contexts/SortContext';

const ProgressBar = () => {
	const { data } = useContext(SortContext);

	const currentStep = data.currentStep;
	const traceLength = data.trace.length;

	let progress;

	if(currentStep === -1 || traceLength === 0) {
		progress = 0
	} else {
		progress = currentStep / (traceLength - 1);
	}
	return (
		<div className="progress">
			<span style={{width: `${progress * 100}%`}}></span>
		</div>
	);
}

export default ProgressBar;