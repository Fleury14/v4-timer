import React from 'react';
import FlagInputForm from './flag-input-form';
import './flag-input.scss';

const FlagInputComponent = (props) => {
    return (
        <React.Fragment>
            <div className="flag-input-container">
                <FlagInputForm startTime={(flagObj) => props.onStartTimer(flagObj)}/>
            </div>
            <p className="credits">v0.4.2 - Timer made by Fleury14</p>
        </React.Fragment>
    );
}

export default FlagInputComponent;
