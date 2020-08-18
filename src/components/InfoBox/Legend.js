import React, { useContext } from 'react';
import { SortContext } from '../../contexts/SortContext';

const Legend = () => {
	const { data } = useContext(SortContext);
	 
	return (
		<div className="legend">
			<div><div className="untouched"></div>Untouched</div>
			<div><div className="visited"></div>Visited</div>
			<div><div className="comparing"></div>Comparing</div>
			<div><div className="finished"></div>Finished</div>
			{data.sortingAlgorithm === "Quick sort" ? 
				<div><div className="pivot"></div>Pivot</div> :
				null
			}
		</div>
	);
}

export default Legend;