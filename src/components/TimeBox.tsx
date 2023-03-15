import React from "react";
import useDragger from "../hooks/useDragger";

const TimeBox: React.FC = () => {
    useDragger("TimeBox");
    return (
        <div>
            <div className="time-box-divider">
                <div className="time-box-divider-top-triangle"></div>
                <div className="time-box-divider-bottom-triangle"></div>
            </div>
            <div id="TimeBox" className="time-box">

                {/* Time */}
                <div className="time-box-labels">
                    <div className="time-box-label-container">
                        <div className="time-box-label-stem"></div>
                        <div className="time-box-label">12am</div>
                    </div>
                    <div className="time-box-label-container">
                        <div className="time-box-label-stem"></div>
                    </div>
                    <div className="time-box-label-container">
                        <div className="time-box-label-stem"></div>
                    </div>
                    <div className="time-box-label-container">
                        <div className="time-box-label-stem"></div>
                    </div>
                    <div className="time-box-label-container">
                        <div className="time-box-label-stem"></div>
                    </div>
                    <div className="time-box-label-container">
                        <div className="time-box-label-stem"></div>
                    </div>
                    <div className="time-box-label-container">
                        <div className="time-box-label-stem"></div>
                        <div className="time-box-label">12:01am</div>
                    </div>

                </div>
                {/* Time Box Grabber */}
                <div className="time-box-handle"></div>
            </div>
        </div>)
};

export default TimeBox;