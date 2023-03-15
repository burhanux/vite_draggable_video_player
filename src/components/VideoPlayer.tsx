import React from 'react';
import "../styles/VideoPlayer.css";
import TimeBox from './TimeBox';
import mp4 from "../assets/media/test.mp4"

const VideoPlayer = (props: any) => {

    return (<div id="VideoPlayer">
        {/* video */}
        <div className="video-container">
            <video controls>
                <source src={mp4} type="video/mp4"></source>
            </video>
        </div>
        <main>
            <div className="container">
                <TimeBox />
            </div>
        </main>
    </div>)
}

export default VideoPlayer;