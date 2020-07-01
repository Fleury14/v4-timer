import React from 'react';
import FlagInputForm from './flag-input-form';
import './flag-input.scss';

const FlagInputComponent = (props) => {
    return (
        <React.Fragment>
            <div className="flag-input-container">
                <FlagInputForm startTime={(flagObj) => props.onStartTimer(flagObj)}/>
            </div>
            <p className="credits">v{process.env.REACT_APP_VERSION} - Timer made by Fleury14</p>
            <div className="flag-input-container">
                <p className="instructions">Boss Timer: To trigger a separate boss timer, push the space bar to both start and stop the timer. You then have the option to select a boss to assign the time to, or push space again to leave it unassigned. You can click on the corresponding time to select a boss later if you so desire.</p>
                <p className="instructions">Update: Tracker will now read if there are a set amount of required objectives and notify you if an objective is not required. Clicking on completing zeromus while in this state will stop the timer. Also updated some of the flag info badges. You can also press backspace to start/stop the timer via keyboard, but this will not work if the app doesn't have focus.</p>
            </div>
            <div className="flag-input-container">
                <p className="instructions">Horizontal dimensions for cropping: 400px width for the timer on the left with a 20px padding on the far right side, height varies based on objectives"</p>
            </div>
            
        </React.Fragment>
    );
}

export default FlagInputComponent;
