import React from 'react';

const Legend = () => {
	return (
		<div className="legend">
			<div><div className="untouched"></div>Untouched</div>
			<div><div className="visited"></div>Visited</div>
			<div><div className="comparing"></div>Comparing</div>
			<div><div className="finished"></div>Finished</div>
		</div>
	);
}

export default Legend;