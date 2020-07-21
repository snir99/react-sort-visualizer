import React, { useContext } from 'react';
import { SortContext } from '../../contexts/SortContext';
import Bar from './Bar';
const shortid = require('shortid');

const VisualizationBox = () => {
	const { data } = useContext(SortContext);
	const maxVal = Math.max(...data.array);
	return (
		<div className="array-container visualization-box">
			{data.array.map((value, idx) => (
				<Bar className="array-element"
					 key={shortid.generate()}
					 val={value}
					 idx={idx}
					 maxVal={maxVal}
					 />))
			}
		</div>
	);
}

export default VisualizationBox;