import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { SortContext } from '../../contexts/SortContext';

const Bar = ({ val, idx, maxVal }) => {
	const { data } = useContext(SortContext);

	let classes = data.compareElements.includes(idx) ? 'comparing' : 
				  data.doneElements.includes(idx) ? 'finished' : 
				  data.visitedElements.includes(idx) ? 'visited' : 'untouched';

	classes += " bar";
	
	const styles = {
		height: `${(val * 100 / maxVal).toFixed()}%`,
		width: `calc(${100 / data.length}% - 2px)`,
		margin: '0 1px',
		display: 'inline-block',
		color: 'white'
	}
	return (
		<div className={classes} style={styles}>
			
		</div>
	);
}
// {data.array.length <= 30 ? val : undefined}

Bar.propTypes = {
	val: PropTypes.number,
	idx: PropTypes.number,
	maxVal: PropTypes.number
}

export default Bar;