import React from 'react';
import './App.css';
import Circle from './components/Circle';
import PinkBox from './components/PinkBox';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (<div >

    <div>
      <VideoPlayer />
    </div>


    {/* Sample */}
    {/* <div className="example">
      <main>
        <div className="container">
          <PinkBox />
          <Circle />
        </div>
      </main>
    </div> */}
  </div>);
}

export default App;