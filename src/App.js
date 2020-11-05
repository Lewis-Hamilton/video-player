import logo from './logo.svg';
import './App.css';
import React from 'react'
import ReactPlayer from 'react-player'

function App() {
  return (
    	<div className='App'>
			<header className='App-header'>
				<ReactPlayer
					playing
					width='100%'
					height='100%'
					controls='true'
					url={[{ src: 'movie.mp4', type: 'video/mp4' }]}
				/>
			</header>
		</div>
  );
}

export default App;
