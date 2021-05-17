import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import VideoList from './components/videolist/VideoList';

function App() {
	const [shrinkNav, setShrinkNav] = useState(false);

	const shrinkNavBar = () => {
		setShrinkNav(!shrinkNav);
	}

	return (
		<>
			<Navbar onShrinkNavClicked={shrinkNavBar} />
			<div className="main">
				<Sidebar shrinkNav={shrinkNav} />
				<VideoList />
			</div>
		</>
	);
}

export default App;
