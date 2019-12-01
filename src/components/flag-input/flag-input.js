import React from 'react';
import FlagInputForm from './flag-input-form';
import './flag-input.scss';

const FlagInputComponent = (props) => {
    return (
        <React.Fragment>
            <div className="flag-input-container">
                <FlagInputForm startTime={(flagObj) => props.onStartTimer(flagObj)}/>
            </div>
            <p className="credits">v0.5.4 - Timer made by Fleury14</p>
            <div className="flag-input-container">
                <p className="instructions">Boss Timer: To trigger a separate boss timer, push the space bar to both start and stop the timer. You then have the option to select a boss to assign the time to, or push space again to leave it unassigned. You can click on the corresponding time to select a boss later if you so desire.</p>
            </div>
        </React.Fragment>
    );
}

export default FlagInputComponent;
