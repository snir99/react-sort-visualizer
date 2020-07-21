import React, { useContext } from 'react';
import { SortContext } from '../../contexts/SortContext';

const Stats = () => {
	const { data } = useContext(SortContext);
	return (
		<div className="stats">
			<div>swaps : {data.stats.swaps}</div>
			<div>compares : {data.stats.compares}</div>
			<div>total : {data.stats.swaps + data.stats.compares}</div>
		</div>
	);
}

export default Stats;