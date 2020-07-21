import React from 'react';
// import "components/FontawsomeIcons";
import TopBar from './components/TopBar';
import VisualizationBox from './components/VisualizationBox/VisualizationBox';
import InfoBox from './components/InfoBox/InfoBox';
import ProgressBar from './components/ProgressBar';
import PlayBackControls from './components/PlayBackControls';
// import Footer from './components/Footer';
import SortContextProvider from './contexts/SortContext';

function App() {
	return (
		<div className="App">
			<SortContextProvider>
				<TopBar />
				<VisualizationBox />
				<InfoBox />
				<ProgressBar />
				<PlayBackControls />
			</SortContextProvider>
		</div>
	);
}

export default App;
