import React from 'react';
import Legend from './Legend';
import Stats from './Stats';

const InfoBox = () => {
	return (
		<div className="info-box">
			<Legend />
			<div className="info-box-border"></div>
			<Stats />
		</div>
	);
}

export default InfoBox;